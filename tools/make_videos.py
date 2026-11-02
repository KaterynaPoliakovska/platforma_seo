"""Генерує відеоуроки MP4 (озвучка + кадри) для кожного уроку і мови.

Кадри знімаються з реальних сцен курсу в Chrome (Playwright), голос: edge-tts,
збирання: ffmpeg з imageio-ffmpeg. Файли курсу Chrome читає прямо з диска (без сервера):
    python tools/make_videos.py [uk|en|pl] [id ...]
Результат: video/<мова>/<id>.mp4
"""
import asyncio, mimetypes, re, subprocess, sys, tempfile, shutil
from urllib.parse import urlparse, unquote
from pathlib import Path
import edge_tts, imageio_ffmpeg
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
FF = imageio_ffmpeg.get_ffmpeg_exe()
VOICE = {'uk': 'uk-UA-PolinaNeural', 'en': 'en-US-AvaNeural', 'pl': 'pl-PL-ZofiaNeural'}
PATH = {'uk': '', 'en': 'en/', 'pl': 'pl/'}
TX = {
    'uk': dict(step='Крок {k} з {n}', stepSay='Крок {k}.', where='Куди натискати', ex='На прикладі', err='Типові помилки',
               errSay='Типові помилки, яких варто уникати.', check='Перевірте себе', checkSay='Перевірте себе. Ви маєте вміти:',
               outro='Тепер пройдіть тест під відео.', arrow=', далі ', intro='Відеоурок', mins='хв'),
    'en': dict(step='Step {k} of {n}', stepSay='Step {k}.', where='Where to click', ex='Worked example', err='Common mistakes',
               errSay='Common mistakes to avoid.', check='Check yourself', checkSay='Check yourself. You should be able to:',
               outro='Now take the quiz below the video.', arrow=', then ', intro='Video lesson', mins='min'),
    'pl': dict(step='Krok {k} z {n}', stepSay='Krok {k}.', where='Gdzie kliknąć', ex='Na przykładzie', err='Typowe błędy',
               errSay='Typowe błędy, których warto unikać.', check='Sprawdź się', checkSay='Sprawdź się. Powinieneś umieć:',
               outro='Teraz rozwiąż test pod wideo.', arrow=', potem ', intro='Lekcja wideo', mins='min'),
}

# Кадр 1280x720: стилі поверх app.css, функції winHTML/fmt/logo беремо зі сторінки курсу
FRAME_CSS = """
body{margin:0;background:var(--page)!important}
.fr{width:1280px;height:720px;box-sizing:border-box;padding:34px 48px 30px;display:flex;flex-direction:column;gap:22px;background:var(--page);font-family:var(--f-body);color:var(--ink);overflow:hidden;position:relative}
.fr .top{display:flex;align-items:center;gap:18px}
.fr .top svg{width:150px;height:45px;flex:none}
.fr .top .lt{font-family:var(--f-display);font-weight:500;font-size:20px;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--muted)}
.fr .chip{background:var(--accent);color:var(--accent-ink);border:1px solid var(--link);border-radius:999px;padding:6px 16px;font-weight:700;font-size:18px;white-space:nowrap}
.fr .body{flex:1;min-height:0;display:grid;grid-template-columns:690px minmax(0,1fr);gap:28px}
.fr .stg{position:relative;background:var(--sunk);border-radius:16px;padding:20px;overflow:hidden}
.fr .stg .win{animation:none;zoom:1.22}
.fr .cur{position:absolute;width:30px;height:30px;z-index:3;filter:drop-shadow(0 2px 2px rgba(0,0,0,.3))}
.fr .txt{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:26px 28px;display:flex;flex-direction:column;gap:16px;overflow:hidden}
.fr .txt h3{margin:0;font-family:var(--f-display);font-weight:500;font-size:19px;color:var(--muted)}
.fr .txt .main{font-size:28px;line-height:1.35;font-weight:600}
.fr .txt .sub{font-size:20px;line-height:1.4}
.fr .nav{font-family:var(--f-mono);font-size:16px;background:var(--page);border:1px solid var(--line);border-radius:10px;padding:10px 14px;line-height:1.45}
.fr .fcard{flex:1;background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:40px 48px;display:flex;flex-direction:column;gap:20px;overflow:hidden}
.fr .fcard h2{margin:0;font-family:var(--f-display);font-weight:700;font-size:44px;line-height:1.15}
.fr .fcard .lead{font-size:26px;line-height:1.45}
.fr .fcard ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:14px;font-size:25px;line-height:1.35}
.fr .fcard li{display:flex;gap:14px;align-items:flex-start}
.fr .fcard li i{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-weight:700;font-size:18px;margin-top:2px}
.fr .fcard li i.bad{background:var(--bad-soft);color:var(--bad)}
.fr .fcard li i.ok{background:var(--ok-soft);color:var(--ok)}
.fr .bar{display:flex;gap:6px}
.fr .bar span{flex:1;height:8px;border-radius:4px;background:var(--line)}
.fr .bar span.on{background:var(--link)}
.fr .bar span.past{background:var(--wood)}
"""

# повертає список сегментів {html, say}; виконується у сторінці курсу
SEGMENTS_JS = r"""
([id, T]) => {
  const l = L.find(x => x.id === id);
  const plain = s => String(s || '').replace(/\[\[(.+?)\]\]/g, '$1').replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\{\{(.+?)\|(.+?)\}\}/g, '$1').replace(/\s*→\s*/g, T.arrow).replace(/[«»"]/g, '').replace(/\s+/g, ' ').trim();
  const dot = s => /[.!?:]$/.test(s) ? s : s + '.';
  const segs = [];
  const top = chip => `<div class="top">${logo('')}<div class="lt">${esc(l.title)}</div>${chip ? `<span class="chip">${chip}</span>` : ''}</div>`;
  const add = (inner, say, chip) => segs.push({inner, say, chip});
  // 1. титр
  add(`<div class="fcard"><h3 style="margin:0;font:600 20px var(--f-mono);color:var(--muted)">${T.intro} · ${esc(l.dur)}</h3><h2>${esc(l.title)}</h2><div class="lead">${fmt(l.what)}</div></div>`,
      dot(plain(l.title)) + ' ' + plain(l.what));
  // 2. кроки зі сценами
  const sc = l.scenes, n = l.steps.length, m = sc.length, used = new Set();
  l.steps.forEach((st, k) => {
    const si = Math.min(m - 1, Math.floor(k * m / n));
    const s = sc[si], first = !used.has(si); used.add(si);
    const nav = l.nav && l.nav[Math.min(l.nav.length - 1, Math.floor(k * l.nav.length / n))];
    add(`<div class="body"><div class="stg">${winHTML(s)}</div><div class="txt"><h3>${fmt(s.t)}</h3><div class="main">${fmt(st)}</div>${first ? `<div class="sub">${fmt(s.say)}</div>` : ''}${nav ? `<div class="nav">${esc(nav)}</div>` : ''}</div></div>`,
        T.stepSay.replace('{k}', k + 1) + ' ' + dot(plain(st)) + (first ? ' ' + dot(plain(s.say)) : ''),
        T.step.replace('{k}', k + 1).replace('{n}', n));
  });
  // 3. сцени, що не потрапили в кроки
  sc.forEach((s, si) => { if (used.has(si)) return;
    add(`<div class="body"><div class="stg">${winHTML(s)}</div><div class="txt"><h3>${T.ex}</h3><div class="main">${fmt(s.t)}</div><div class="sub">${fmt(s.say)}</div></div></div>`,
        dot(plain(s.t)) + ' ' + dot(plain(s.say)), T.ex);
  });
  // 4. помилки і 5. чек-лист
  if (l.mistakes && l.mistakes.length)
    add(`<div class="fcard"><h2>${T.err}</h2><ul>${l.mistakes.map(x => `<li><i class="bad">✕</i><span>${fmt(x)}</span></li>`).join('')}</ul></div>`,
        T.errSay + ' ' + l.mistakes.map(x => dot(plain(x))).join(' '), T.err);
  add(`<div class="fcard"><h2>${T.check}</h2><ul>${l.check.map(x => `<li><i class="ok">✓</i><span>${fmt(x)}</span></li>`).join('')}</ul></div>`,
      T.checkSay + ' ' + l.check.map(x => dot(plain(x))).join(' ') + ' ' + T.outro, T.check);
  return segs.map((s, i) => ({
    say: s.say,
    html: `<div class="fr">${top(s.chip)}${s.inner}<div class="bar">${segs.map((_, j) => `<span class="${j < i ? 'past' : j === i ? 'on' : ''}"></span>`).join('')}</div></div>`
  }));
}
"""

CURSOR_JS = r"""
() => {
  const st = document.querySelector('.fr .stg'); if (!st) return;
  const t = st.querySelector('.wmain>.hl') || st.querySelector('.wside .sel'); if (!t) return;
  const a = st.getBoundingClientRect(), b = t.getBoundingClientRect();
  const c = document.createElement('div'); c.className = 'cur';
  c.innerHTML = '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M4 2l16 10-7 1.5L9.5 21z" fill="#22261F" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  c.style.left = Math.min(b.left - a.left + Math.min(b.width * .6, 260), a.width - 34) + 'px';
  c.style.top = (b.top - a.top + b.height * .55) + 'px';
  st.appendChild(c);
}
"""


def duration(path):
    out = subprocess.run([FF, '-i', str(path)], capture_output=True, text=True, encoding='utf-8', errors='replace').stderr
    h, m, s = re.search(r'Duration: (\d+):(\d+):([\d.]+)', out).groups()
    return int(h) * 3600 + int(m) * 60 + float(s)


async def tts(text, voice, path, sem):
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, voice, rate='-5%').save(str(path))
                return
            except Exception:
                if attempt == 3: raise
                await asyncio.sleep(2 + attempt * 3)


def run(args):
    subprocess.run([FF, '-y', '-loglevel', 'error'] + args, check=True)


async def make(page, lang, lid, sem):
    out = ROOT / 'video' / lang / f'{lid}.mp4'
    segs = await page.evaluate(SEGMENTS_JS, [lid, TX[lang]])
    tmp = Path(tempfile.mkdtemp(prefix=f'seo-{lang}-{lid}-'))
    try:
        await asyncio.gather(*[tts(s['say'], VOICE[lang], tmp / f'{i}.mp3', sem) for i, s in enumerate(segs)])
        for i, s in enumerate(segs):
            await page.evaluate('h => { document.body.innerHTML = h; }', s['html'])
            await page.evaluate(CURSOR_JS)
            await page.locator('.fr').screenshot(path=str(tmp / f'{i}.png'))
        clips = []
        for i in range(len(segs)):
            d = duration(tmp / f'{i}.mp3') + 0.9
            clip = tmp / f'c{i}.mp4'
            run(['-loop', '1', '-framerate', '5', '-i', str(tmp / f'{i}.png'), '-i', str(tmp / f'{i}.mp3'),
                 '-af', 'apad', '-t', f'{d:.2f}', '-c:v', 'libx264', '-tune', 'stillimage', '-crf', '30', '-preset', 'medium',
                 '-pix_fmt', 'yuv420p', '-r', '5', '-c:a', 'aac', '-b:a', '32k', '-ac', '1', '-ar', '24000', str(clip)])
            clips.append(clip)
        (tmp / 'list.txt').write_text(''.join(f"file '{c.as_posix()}'\n" for c in clips), encoding='utf-8')
        out.parent.mkdir(parents=True, exist_ok=True)
        run(['-f', 'concat', '-safe', '0', '-i', str(tmp / 'list.txt'), '-c', 'copy', '-movflags', '+faststart', str(out)])
        return len(segs), duration(out)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


async def main():
    langs = [a for a in sys.argv[1:] if a in VOICE] or list(VOICE)
    only = [a for a in sys.argv[1:] if a not in VOICE]
    sem = asyncio.Semaphore(6)
    base = 'http://course.local/'
    async with async_playwright() as p:
        br = await p.chromium.launch(channel='chrome')

        async def serve(route):
            u = urlparse(route.request.url)
            if u.hostname != 'course.local':
                return await route.continue_()
            f = ROOT / unquote(u.path).lstrip('/')
            if f.is_dir(): f = f / 'index.html'
            if not f.is_file(): return await route.fulfill(status=404, body='')
            ct = mimetypes.guess_type(f.name)[0] or 'application/octet-stream'
            await route.fulfill(status=200, body=f.read_bytes(), headers={'Content-Type': ct + '; charset=utf-8' if ct.startswith(('text/', 'application/javascript')) else ct})
        for lang in langs:
            page = await br.new_page(viewport={'width': 1280, 'height': 720})
            await page.route('**/*', serve)
            for attempt in range(3):
                await page.goto(base + PATH[lang] + '#home', wait_until='load', timeout=120000)
                ok = await page.evaluate('''() => typeof ILL !== "undefined" && document.querySelector("#nav a[data-id]") !== null
                    && (LANG !== "uk" || (typeof OLD !== "undefined" && OLD.length > 40))''')
                if ok: break
            else:
                raise RuntimeError('course scripts did not load')
            await page.evaluate('document.fonts.ready')
            await page.add_style_tag(content=FRAME_CSS)
            ids = await page.evaluate('L.map(l => l.id)')
            for lid in ids:
                if only and lid not in only: continue
                n, d = await make(page, lang, lid, sem)
                print(f'{lang} {lid}: {n} segments, {d/60:.1f} min', flush=True)
            await page.close()
        await br.close()

asyncio.run(main())
