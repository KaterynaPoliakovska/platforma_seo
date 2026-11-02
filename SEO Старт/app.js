/* SEO Старт: спільний двигун для мовних версій. Мову задає window.LANG (uk, en, pl), шлях до кореня сайту window.ROOT */
const LANG = window.LANG || 'uk';
const ROOT = window.ROOT || '';

/* ---------- тексти інтерфейсу ---------- */
const UI = {
  uk: {
    blocks: [
      {id:'c1', t:'Блок 1. Новий сайт: GitHub + Vercel', d:'Семантика в Keyword Planner, Trends і Serpstat, структура і тексти, сайт на GitHub і Vercel, SEO-теги, мікророзмітка, hreflang, robots.txt, sitemap, Search Console, GA4 і GTM, індексація, Google Business Profile.'},
      {id:'c2', t:'Блок 2. Аудит і виправлення: WordPress', d:'Код сторінки, Screaming Frog і Netpeak Spider, чек-лист аудиту, редиректи, HTTPS, дублікати і canonical, noindex, WordPress і Rank Math, звіт «Сторінки», швидкість, on-page, посилання, правила Google.'},
      {id:'c3', t:'Блок 3. Аналітика і звіти', d:'Search Console, GA4, позиції в Serpstat, звіт керівнику і пошук причини падіння трафіку.'}],
    progress:'Прогрес курсу', lessons:'Уроки', navLabel:'Уроки курсу', menu:'☰ Уроки',
    back:'← Назад до меню курсу', lessonOf:(n,m)=>`урок ${n} з ${m}`, partsLabel:'Частини уроку', backLabel:'Повернення',
    toc:{video:'Відеоурок', what:'Що це', steps:'Куди натискати', ex:'Приклад', notes:'Конспект', err:'Помилки', check:'Чек-лист', quiz:'Тест'},
    video:'Відеоурок', vidNote:'Покрокова інструкція з озвучкою: кожен крок на схемі програми, типові помилки і чек-лист.', dl:'Завантажити MP4', scheme:n=>`Інтерактивна схема · ${n} сцен`, schemeNote:'Ті самі екрани програми, які можна гортати самостійно.', scene:(i,n)=>`Сцена ${i} / ${n}`, sceneBtn:i=>`Сцена ${i}`,
    play:'▶ Відтворити', pause:'❚❚ Пауза', prev:'Попередня сцена', next:'Наступна сцена',
    voice:'🔊 Озвучка', voiceTitle:'Читати текст сцени голосом браузера', script:'Сценарій',
    scriptNote:'Текст озвучки для запису власного відеоуроку. Читайте по сценах, показуючи на екрані те, що на схемі.',
    yt:'Справжні записи екрана з цієї теми:', tools:'Інструменти:',
    what:'Що це і навіщо', ill:'Схеми та ілюстрації', steps:'Куди натискати', path:'Шлях у програмі', ex:'Приклад', notes:'Конспект',
    err:'Типові помилки', check:'Чек-лист', reset:'Зняти всі відмітки', done:(a,b)=>`Виконано ${a} з ${b}`,
    quiz:n=>`Тест · ${n} питань`, mine:'Чому я так вважаю', minePh:'Напишіть своє пояснення, потім порівняйте з поясненням курсу',
    course:'Пояснення курсу', wait:'Зʼявиться після вашої відповіді', right:'Правильно.', wrong:'Не зовсім.',
    prevL:'← Попередній', nextL:'Наступний →', end:'Кінець курсу', home:'На головну',
    copy:'копіювати', copied:'скопійовано', selected:'виділено: Ctrl+C', tip:'Порада', warn:'Увага', bad:'Типова помилка',
    heroEyebrow:(n,b)=>`${n} уроків · ${b} блоки · приклад: сайт бюро перекладів «Мости»`,
    lead:'Короткі практичні інструкції: що це, куди натискати, приклад, помилки, тест. Тільки програми, з якими ви працюєте.',
    startBlock:'Почати блок', howTitle:'Як влаштований кожен урок', howNote:'Натисніть на частину, щоб відкрити її в першому уроці.',
    parts:[['p-video','1. Відеоурок','Відео з озвучкою: кожен крок інструкції на схемі програми. Під ним інтерактивна схема зі сценами.'],['p-what','2. Що це','2–3 речення простими словами.'],['p-ill','3. Схеми та ілюстрації','Схеми процесів, дерева рішень, порівняння.'],['p-steps','4. Куди натискати','Шлях у програмі і кроки по порядку.'],['p-ex','5. Приклад','Готовий код або таблиця на прикладі сайту «Мости».'],['p-notes','6. Конспект','Детальні таблиці, код і поради.'],['p-err','7. Типові помилки','Що найчастіше роблять неправильно.'],['p-check','8. Чек-лист','Відмітки зберігаються.'],['p-quiz','9. Тест','5 питань і поле «Чому я так вважаю» поруч з поясненням курсу.']],
    toolsTitle:'Програми курсу', toolCol:'Програма', forCol:'Для чого',
    toolsList:['Індексація, запити, кліки, помилки, sitemap','Трафік з пошуку і заявки','Встановлення GA4 і подій без правок коду','Частотність запитів','Сезонність і порівняння запитів','Ключі, кластеризація, конкуренти, позиції','Посилання, ключі конкурентів, аудит свого сайту (Webmaster Tools)','Сканування сайту: коди, title, дублікати, canonical','Сканування сайту з помилками за важливістю','SEO-налаштування сайтів на WordPress','Зберігання файлів сайту і їх оновлення','Публікація сайту з GitHub, домен, редиректи','Швидкість сторінки','Код сторінки і статус-коди','Видача Google з потрібного міста'],
    planner:'Google Ads: Планувальник ключових слів', speech:'uk-UA', langName:'Мова', brand:'SEO Start',
    welcome:{tag:'Курс базового SEO з нуля', text:'Навчитеся будувати сайт, який Google знаходить і показує, знаходити й виправляти технічні помилки на готовому сайті та звітувати про результат. Короткі уроки з відеорозбором, кроками «куди натискати», прикладами, чек-листами і тестами.', facts:[['41','урок'],['3','блоки'],['3','мови']], start:'Почати навчання →', cont:'Продовжити з місця, де зупинились'}
  },
  en: {
    blocks: [
      {id:'c1', t:'Block 1. New website: GitHub + Vercel', d:'Keyword research in Keyword Planner, Trends and Serpstat, site structure and copy, a site on GitHub and Vercel, SEO tags, structured data, hreflang, robots.txt, sitemap, Search Console, GA4 and GTM, indexing, Google Business Profile.'},
      {id:'c2', t:'Block 2. Audit and fixes: WordPress', d:'Page source, Screaming Frog and Netpeak Spider, audit checklist, redirects, HTTPS, duplicates and canonical, noindex, WordPress and Rank Math, the Pages report, speed, on-page, links, Google rules.'},
      {id:'c3', t:'Block 3. Analytics and reporting', d:'Search Console, GA4, rankings in Serpstat, a report for your manager and finding the cause of a traffic drop.'}],
    progress:'Course progress', lessons:'Lessons', navLabel:'Course lessons', menu:'☰ Lessons',
    back:'← Back to course menu', lessonOf:(n,m)=>`lesson ${n} of ${m}`, partsLabel:'Lesson sections', backLabel:'Back',
    toc:{video:'Video lesson', what:'What it is', steps:'Where to click', ex:'Example', notes:'Notes', err:'Mistakes', check:'Checklist', quiz:'Quiz'},
    video:'Video lesson', vidNote:'A step-by-step guide with voice-over: every step on a diagram of the tool, common mistakes and a checklist.', dl:'Download MP4', scheme:n=>`Interactive diagram · ${n} scenes`, schemeNote:'The same tool screens, to click through at your own pace.', scene:(i,n)=>`Scene ${i} / ${n}`, sceneBtn:i=>`Scene ${i}`,
    play:'▶ Play', pause:'❚❚ Pause', prev:'Previous scene', next:'Next scene',
    voice:'🔊 Voice-over', voiceTitle:'Read the scene text aloud with the browser voice', script:'Script',
    scriptNote:'Voice-over text for recording your own video lesson. Read scene by scene while showing what is on the diagram.',
    yt:'Real screen recordings on this topic:', tools:'Tools:',
    what:'What it is and why it matters', ill:'Diagrams and illustrations', steps:'Where to click', path:'Path in the tool', ex:'Example', notes:'Notes',
    err:'Common mistakes', check:'Checklist', reset:'Clear all ticks', done:(a,b)=>`${a} of ${b} done`,
    quiz:n=>`Quiz · ${n} questions`, mine:'Why I think so', minePh:'Write your own reasoning, then compare it with the course explanation',
    course:'Course explanation', wait:'Appears after you answer', right:'Correct.', wrong:'Not quite.',
    prevL:'← Previous', nextL:'Next →', end:'End of course', home:'Home',
    copy:'copy', copied:'copied', selected:'selected: Ctrl+C', tip:'Tip', warn:'Warning', bad:'Common mistake',
    heroEyebrow:(n,b)=>`${n} lessons · ${b} blocks · example: the Mosty translation agency website`,
    lead:'Short practical guides: what it is, where to click, an example, mistakes and a quiz. Only the tools you actually use.',
    startBlock:'Start block', howTitle:'How every lesson is built', howNote:'Click a section to open it in the first lesson.',
    parts:[['p-video','1. Video lesson','A video with voice-over: every step of the guide on a diagram of the tool. Below it, an interactive diagram with scenes.'],['p-what','2. What it is','2–3 sentences in plain words.'],['p-ill','3. Diagrams and illustrations','Process diagrams, decision trees, comparisons.'],['p-steps','4. Where to click','The path in the tool and the steps in order.'],['p-ex','5. Example','Ready-made code or a table based on the Mosty website.'],['p-notes','6. Notes','Detailed tables, code and tips.'],['p-err','7. Common mistakes','What people most often get wrong.'],['p-check','8. Checklist','Your ticks are saved.'],['p-quiz','9. Quiz','5 questions and a “Why I think so” field next to the course explanation.']],
    toolsTitle:'Tools in this course', toolCol:'Tool', forCol:'What it is for',
    toolsList:['Indexing, queries, clicks, errors, sitemaps','Search traffic and leads','Installing GA4 and events without editing code','Search volume','Seasonality and comparing queries','Keywords, clustering, competitors, rankings','Backlinks, competitor keywords, auditing your own site (Webmaster Tools)','Crawling a site: status codes, titles, duplicates, canonical','Crawling a site with issues grouped by severity','SEO settings for WordPress sites','Storing and updating the site files','Publishing a site from GitHub, domain, redirects','Page speed','Page source and status codes','Google results from a chosen city'],
    planner:'Google Ads: Keyword Planner', speech:'en-GB', langName:'Language', brand:'SEO Start',
    welcome:{tag:'A basic SEO course from scratch', text:'Learn to build a website that Google finds and shows, to find and fix technical issues on an existing site and to report the results. Short lessons with a video walkthrough, “where to click” steps, examples, checklists and quizzes.', facts:[['41','lessons'],['3','blocks'],['3','languages']], start:'Start learning →', cont:'Continue where you left off'}
  },
  pl: {
    blocks: [
      {id:'c1', t:'Blok 1. Nowa strona: GitHub + Vercel', d:'Słowa kluczowe w Planerze słów kluczowych, Trends i Serpstat, struktura i teksty, strona na GitHub i Vercel, tagi SEO, dane strukturalne, hreflang, robots.txt, mapa witryny, Search Console, GA4 i GTM, indeksowanie, Profil Firmy w Google.'},
      {id:'c2', t:'Blok 2. Audyt i poprawki: WordPress', d:'Kod strony, Screaming Frog i Netpeak Spider, lista kontrolna audytu, przekierowania, HTTPS, duplikaty i canonical, noindex, WordPress i Rank Math, raport „Strony”, szybkość, on-page, linki, zasady Google.'},
      {id:'c3', t:'Blok 3. Analityka i raporty', d:'Search Console, GA4, pozycje w Serpstat, raport dla przełożonego i szukanie przyczyny spadku ruchu.'}],
    progress:'Postęp kursu', lessons:'Lekcje', navLabel:'Lekcje kursu', menu:'☰ Lekcje',
    back:'← Wróć do menu kursu', lessonOf:(n,m)=>`lekcja ${n} z ${m}`, partsLabel:'Części lekcji', backLabel:'Powrót',
    toc:{video:'Lekcja wideo', what:'Co to jest', steps:'Gdzie kliknąć', ex:'Przykład', notes:'Notatki', err:'Błędy', check:'Lista kontrolna', quiz:'Test'},
    video:'Lekcja wideo', vidNote:'Instrukcja krok po kroku z lektorem: każdy krok na schemacie programu, typowe błędy i lista kontrolna.', dl:'Pobierz MP4', scheme:n=>`Interaktywny schemat · scen: ${n}`, schemeNote:'Te same ekrany programu do samodzielnego przeglądania.', scene:(i,n)=>`Scena ${i} / ${n}`, sceneBtn:i=>`Scena ${i}`,
    play:'▶ Odtwórz', pause:'❚❚ Pauza', prev:'Poprzednia scena', next:'Następna scena',
    voice:'🔊 Lektor', voiceTitle:'Czytaj tekst sceny głosem przeglądarki', script:'Scenariusz',
    scriptNote:'Tekst lektora do nagrania własnej lekcji wideo. Czytaj scena po scenie, pokazując na ekranie to, co jest na schemacie.',
    yt:'Prawdziwe nagrania ekranu na ten temat:', tools:'Narzędzia:',
    what:'Co to jest i po co', ill:'Schematy i ilustracje', steps:'Gdzie kliknąć', path:'Ścieżka w programie', ex:'Przykład', notes:'Notatki',
    err:'Typowe błędy', check:'Lista kontrolna', reset:'Odznacz wszystko', done:(a,b)=>`Zrobiono ${a} z ${b}`,
    quiz:n=>`Test · pytań: ${n}`, mine:'Dlaczego tak uważam', minePh:'Napisz własne uzasadnienie, a potem porównaj je z wyjaśnieniem kursu',
    course:'Wyjaśnienie kursu', wait:'Pojawi się po Twojej odpowiedzi', right:'Dobrze.', wrong:'Nie do końca.',
    prevL:'← Poprzednia', nextL:'Następna →', end:'Koniec kursu', home:'Strona główna',
    copy:'kopiuj', copied:'skopiowano', selected:'zaznaczono: Ctrl+C', tip:'Wskazówka', warn:'Uwaga', bad:'Typowy błąd',
    heroEyebrow:(n,b)=>`Lekcje: ${n} · bloki: ${b} · przykład: strona biura tłumaczeń „Mosty”`,
    lead:'Krótkie praktyczne instrukcje: co to jest, gdzie kliknąć, przykład, błędy i test. Tylko narzędzia, z których faktycznie korzystasz.',
    startBlock:'Zacznij blok', howTitle:'Jak zbudowana jest każda lekcja', howNote:'Kliknij część, aby otworzyć ją w pierwszej lekcji.',
    parts:[['p-video','1. Lekcja wideo','Wideo z lektorem: każdy krok instrukcji na schemacie programu. Pod nim interaktywny schemat ze scenami.'],['p-what','2. Co to jest','2–3 zdania prostym językiem.'],['p-ill','3. Schematy i ilustracje','Schematy procesów, drzewa decyzji, porównania.'],['p-steps','4. Gdzie kliknąć','Ścieżka w programie i kroki po kolei.'],['p-ex','5. Przykład','Gotowy kod lub tabela na przykładzie strony „Mosty”.'],['p-notes','6. Notatki','Szczegółowe tabele, kod i wskazówki.'],['p-err','7. Typowe błędy','Co najczęściej robi się źle.'],['p-check','8. Lista kontrolna','Zaznaczenia są zapisywane.'],['p-quiz','9. Test','5 pytań i pole „Dlaczego tak uważam” obok wyjaśnienia kursu.']],
    toolsTitle:'Narzędzia kursu', toolCol:'Narzędzie', forCol:'Do czego służy',
    toolsList:['Indeksowanie, zapytania, kliknięcia, błędy, mapy witryn','Ruch z wyszukiwarki i zapytania ofertowe','Instalacja GA4 i zdarzeń bez zmian w kodzie','Liczba wyszukiwań','Sezonowość i porównywanie zapytań','Słowa kluczowe, klasteryzacja, konkurencja, pozycje','Linki, słowa kluczowe konkurencji, audyt własnej strony (Webmaster Tools)','Skanowanie strony: kody, title, duplikaty, canonical','Skanowanie strony z błędami według ważności','Ustawienia SEO stron na WordPressie','Przechowywanie i aktualizacja plików strony','Publikacja strony z GitHub, domena, przekierowania','Szybkość strony','Kod strony i kody odpowiedzi','Wyniki Google z wybranego miasta'],
    planner:'Google Ads: Planer słów kluczowych', speech:'pl-PL', langName:'Język', brand:'SEO Start',
    welcome:{tag:'Kurs podstaw SEO od zera', text:'Nauczysz się budować stronę, którą Google znajduje i pokazuje, znajdować i naprawiać błędy techniczne na istniejącej stronie oraz raportować wyniki. Krótkie lekcje z omówieniem wideo, krokami „gdzie kliknąć”, przykładami, listami kontrolnymi i testami.', facts:[['41','lekcji'],['3','bloki'],['3','języki']], start:'Zacznij naukę →', cont:'Kontynuuj od miejsca, w którym skończyłeś'}
  }
};
const I = UI[LANG] || UI.uk;

/* уроки з полем after вставляються після вказаного уроку */
const L = (window.L || []).filter(l => !l.after);
(window.L || []).filter(l => l.after).forEach(l => L.splice(L.findIndex(x => x.id === l.after) + 1, 0, l));
/* схеми з ill.js: у кожному уроці поле svg = [[ключ, аргумент1, аргумент2, підпис]] */
L.forEach(l => { l.ill = window.ILL ? (l.svg || []).map(([key, a, b, cap]) => ({type:'svg', key, a: a || undefined, b: b || undefined, cap})) : []; });
/* матеріали попередньої версії (old.js, лише українська): новий урок ← старі уроки на ту саму тему.
   З першого беремо довший відеорозбір, з усіх схеми, конспект і 2 додаткові питання тесту */
const FROM = {
  'c1-01':['b1-01'], 'c1-02':['b1-02'], 'c1-03':['b1-06','b3-06'], 'c1-04':['b3-04','b1-06'], 'c1-05':['b1-05'],
  'c1-06':['b1-07'], 'c1-content':['b1-18'], 'c1-07':['b3-02','b3-01'], 'c1-08':['b3-03','b1-08'], 'c1-09':['b1-head'],
  'c1-schema':['b1-18'], 'c1-hreflang':['b1-14'], 'c1-10':['b1-09'], 'c1-11':['b1-13'], 'c1-12':['b1-03'],
  'c1-13':['b3-09','b1-03'], 'c1-14':['b1-15'], 'c1-gbp':['b1-19'],
  'c2-01':['b2-00'], 'c2-code':['b2-01','b3-07'], 'c2-02':['b1-04'], 'c2-03':['b1-04'], 'c2-audit':['b1-16'],
  'c2-04':['b2-05'], 'c2-https':['b2-06'], 'c2-05':['b1-12','b1-11'], 'c2-06':['b1-10'], 'c2-07':['b2-02'],
  'c2-08':['b2-03'], 'c2-09':['b2-04','b1-20'], 'c2-10':['b2-07'], 'c2-11':['b2-08','b2-09','b2-10','b3-08'],
  'c2-12':['b2-12'], 'c2-13':['b1-17'], 'c2-14':['b2-13','b3-05'], 'c2-rules':['b1-19'],
  'c3-01':['b3-10'], 'c3-02':['b3-09'], 'c3-03':['b3-11'], 'c3-04':['b3-12','b2-14'], 'c3-05':['b3-13']
};
const OLDBY = {}; (window.OLD || []).forEach(o => OLDBY[o.id] = o);
L.forEach(l => {
  const src = (FROM[l.id] || []).map(id => OLDBY[id]).filter(Boolean);
  if (!src.length) return;
  l.scenes = l.scenes.concat(src[0].scenes);
  src.forEach(o => (o.ill || []).forEach(il => l.ill.push(il)));
  l.notes = src.flatMap(o => [{h: o.title}, ...o.notes]);
  const seen = new Set([l.quiz, ...(l.tests || [])].map(q => q.q));
  const pool = src.flatMap(o => [o.quiz, ...(o.tests || []), ...((window.OLDTX || {})[o.id] || [])]);
  const extra = pool.filter(q => q && !seen.has(q.q) && seen.add(q.q)).slice(0, 2);
  l.tests = (l.tests || []).concat(extra);
});
const BLOCKS = I.blocks;
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = s => esc(s)
  .replace(/\[\[(.+?)\]\]/g, '<code>$1</code>')
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/\{\{(.+?)\|(.+?)\}\}/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

/* ---------- progress (браузер глядача; спільний для всіх мов) ---------- */
const KEY = 'seo-start:v1';
let S = {c:{}, q:{}, r:{}};
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch(e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} };
/* тест уроку: головне питання quiz + додаткові tests; перше питання зберігається під старим ключем */
const QS = l => [l.quiz, ...(l.tests || [])];
const qKey = (l, n) => n ? l.id + ':' + n : l.id;
function lessonPct(l){
  const c = S.c[l.id] || [];
  const qs = QS(l);
  const done = l.check.filter((_, i) => c[i]).length + qs.filter((_, n) => S.q[qKey(l, n)]).length;
  return done / (l.check.length + qs.length);
}
function updateProgress(){
  const tot = L.reduce((a, l) => a + lessonPct(l), 0) / L.length;
  $('#ptxt').textContent = `${I.progress}: ${Math.round(tot*100)}%`;
  $('#pbar').style.width = (tot*100) + '%';
  document.querySelectorAll('.ls a[data-id]').forEach(a => {
    const p = lessonPct(L.find(l => l.id === a.dataset.id));
    a.querySelector('.st').className = 'st' + (p >= 1 ? ' full' : p > 0 ? ' half' : '');
  });
}
const LOGO = '<svg class="CLS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 96" role="img" aria-label="SEO Start"><circle cx="44" cy="42" r="26" fill="none" stroke="#013A3C" stroke-width="8"/><line x1="63" y1="61" x2="82" y2="80" stroke="#013A3C" stroke-width="11" stroke-linecap="round"/><rect x="31" y="44" width="7" height="12" rx="2" fill="#013A3C"/><rect x="41" y="36" width="7" height="20" rx="2" fill="#013A3C"/><rect x="51" y="27" width="7" height="29" rx="2" fill="#FF7C1A"/><text x="102" y="50" font-family="Unbounded, Manrope, Arial, sans-serif" font-weight="700" font-size="30" fill="#0F0F0D">SEO</text><text x="102" y="82" font-family="Unbounded, Manrope, Arial, sans-serif" font-weight="500" font-size="22" letter-spacing="3" fill="#013A3C">START</text></svg>';
const logo = cls => LOGO.replace('CLS', cls);

function buildNav(){
  $('#nav').setAttribute('aria-label', I.navLabel);
  $('#menu').textContent = I.menu;
  $('.brand').innerHTML = logo('logo');
  const langs = [['uk','УК',''],['en','EN','en/'],['pl','PL','pl/']];
  $('#langs').innerHTML = `<span>${I.langName}:</span>` + langs.map(([c, t, p]) =>
    c === LANG ? `<b aria-current="true">${t}</b>` : `<a href="${ROOT}${p}" hreflang="${c}" lang="${c}" data-lang>${t}</a>`).join('');
  $('#nav').innerHTML = BLOCKS.map(b => {
    const ls = L.filter(l => l.id.startsWith(b.id));
    return `<div class="blk">${esc(b.t)}</div><ul class="ls">` + ls.map((l, i) =>
      `<li><a href="#${l.id}" data-id="${l.id}"><span class="n">${String(i+1).padStart(2,'0')}</span><span>${esc(l.title)}</span><span class="st"></span></a></li>`).join('') + '</ul>';
  }).join('');
}
/* перемикач мови зберігає відкритий урок */
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-lang]');
  if (a && location.hash) { e.preventDefault(); location.href = a.getAttribute('href') + location.hash; }
});

/* ---------- video player ---------- */
const P = {l:null, i:0, playing:false, t0:0, dur:0, raf:0, voice:false, timer:0};
function rowHTML(r){
  const f = r.slice(0,2);
  if (f === '# ') return `<div class="r-h">${fmt(r.slice(2))}</div>`;
  if (r[0] === '|') {
    const hdr = r.startsWith('|!');
    const cells = r.replace(/^\|!?/, '').split('|').map(s => s.trim());
    return `<div class="r-t${hdr?' hdr':''}" style="grid-template-columns:repeat(${cells.length},minmax(0,1fr))">${cells.map(c => `<span>${fmt(c)}</span>`).join('')}</div>`;
  }
  if (r[0] === '[' && r.endsWith(']') && r[1] !== '[') return `<div class="r-b"><span>${fmt(r.slice(1,-1))}</span></div>`;
  if (f === '> ') return `<div class="r-c">${esc(r.slice(2))}</div>`;
  if (f === '+ ') return `<div class="r-ok">${fmt(r.slice(2))}</div>`;
  if (f === '! ') return `<div class="r-bad">${fmt(r.slice(2))}</div>`;
  if (f === '? ') return `<div class="r-warn">${fmt(r.slice(2))}</div>`;
  if (f === '~ ') return `<div class="r-m">${fmt(r.slice(2))}</div>`;
  if (f === '= ') { const k = r.indexOf(':'); return `<div class="r-f"><em>${fmt(r.slice(2,k))}</em><span>${fmt(r.slice(k+1).trim())}</span></div>`; }
  return `<div>${fmt(r)}</div>`;
}
function winHTML(sc){
  const side = sc.side ? `<nav class="wside">${sc.side.map((s, i) => `<span class="${i===sc.sel?'sel':''}">${esc(s)}</span>`).join('')}</nav>` : '';
  const rows = (sc.rows || []).map((r, i) => rowHTML(r).replace(/^<div( class="([^"]*)")?/, (m, a, c) => i === sc.hl ? `<div class="${c||''} hl"` : m)).join('');
  return `<div class="win"><div class="wbar"><span class="dots"><i></i><i></i><i></i></span><span class="wapp">${esc(sc.app||'')}</span><span class="wurl">${esc(sc.url||'')}</span></div>
    <div class="wbody${sc.side?'':' full'}">${side}<div class="wmain">${rows}</div></div></div>`;
}
function sceneMs(sc){ return Math.max(8000, (sc.say||'').length * 62); }
function showScene(i, keepPlaying){
  const l = P.l; if (!l) return;
  P.i = (i + l.scenes.length) % l.scenes.length;
  const sc = l.scenes[P.i];
  const st = $('#stage');
  st.querySelector('.slot').innerHTML = winHTML(sc);
  $('#scap').textContent = I.scene(P.i+1, l.scenes.length);
  $('#say').innerHTML = `<b class="t">${fmt(sc.t)}</b>${fmt(sc.say)}`;
  document.querySelectorAll('#seg button').forEach((b, k) => { b.classList.toggle('past', k < P.i); b.querySelector('i').style.width = k < P.i ? '100%' : '0'; });
  requestAnimationFrame(() => moveCursor(sc));
  P.t0 = performance.now(); P.dur = sceneMs(sc);
  if (P.voice) speak(sc);
  if (!keepPlaying) setPlaying(P.playing);
}
function moveCursor(sc){
  const st = $('#stage'), cur = $('#cursor');
  let target = st.querySelector('.wmain>.hl') || st.querySelector('.wside .sel');
  if (!target) { cur.style.opacity = 0; return; }
  cur.style.opacity = 1;
  const a = st.getBoundingClientRect(), b = target.getBoundingClientRect();
  const x = Math.min(b.left - a.left + Math.min(b.width*0.6, 220), a.width - 26), y = b.top - a.top + b.height*0.55;
  cur.style.transform = `translate(${x}px,${y}px)`;
  cur.classList.remove('click');
  clearTimeout(P.ct); P.ct = setTimeout(() => cur.classList.add('click'), 1050);
}
function loop(){
  cancelAnimationFrame(P.raf);
  if (!P.playing) return;
  const p = Math.min(1, (performance.now() - P.t0) / P.dur);
  const seg = document.querySelectorAll('#seg button')[P.i];
  if (seg) seg.querySelector('i').style.width = (p*100) + '%';
  if (p >= 1 && !P.voice) { nextAuto(); return; }
  P.raf = requestAnimationFrame(loop);
}
function nextAuto(){
  if (P.i >= P.l.scenes.length - 1) { setPlaying(false); return; }
  showScene(P.i + 1, true); loop();
}
function setPlaying(v){
  P.playing = v;
  const b = $('#play'); if (b) b.textContent = v ? I.pause : I.play;
  if (v) { P.t0 = performance.now() - (P.pausedAt||0); P.pausedAt = 0; loop(); }
  else { P.pausedAt = performance.now() - P.t0; cancelAnimationFrame(P.raf); try { speechSynthesis.cancel(); } catch(e) {} }
}
function speak(sc){
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(sc.t + '. ' + sc.say.replace(/\[\[|\]\]|\*\*/g, ''));
    u.lang = I.speech;
    const v = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(LANG)); if (v) u.voice = v;
    u.rate = 1.02;
    u.onend = () => { if (P.playing && P.voice) setTimeout(() => { if (P.playing) nextAuto(); }, 700); };
    if (P.playing) speechSynthesis.speak(u);
  } catch(e) {}
}

/* ---------- illustrations ---------- */
function treeHTML(n){
  const kids = n.c ? `<ul>${n.c.map(treeHTML).join('')}</ul>` : '';
  return `<li><span class="tn ${n.k||''}">${fmt(n.t)}</span>${kids}</li>`;
}
function illHTML(il){
  let h = '';
  if (il.type === 'flow') h = `<div class="flow">${il.items.map((it, i) => (i ? '<span class="ar" aria-hidden="true">→</span>' : '') + `<div class="nd"><span class="ix">${String(i+1).padStart(2,'0')}</span><b>${fmt(it[0])}</b><small>${fmt(it[1]||'')}</small></div>`).join('')}</div>`;
  if (il.type === 'tree') h = `<ul class="tree">${treeHTML(il.root)}</ul>`;
  if (il.type === 'cols') h = `<div class="cols">${il.cols.map(c => `<div class="col ${c.k||''}"><h4>${fmt(c.t)}</h4><ul>${c.items.map(x => `<li>${fmt(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
  if (il.type === 'svg') { try { h = `<div class="svgbox">${window.ILL[il.key](il.a, il.b)}</div>`; } catch(e) { h = ''; } }
  if (il.type === 'serp') h = il.items.map(s => `<div class="serp"><div class="u">${esc(s.u)}</div><div class="t">${esc(s.t)}</div><div class="d">${esc(s.d)}</div></div>`).join('<div style="height:10px"></div>');
  return `<div class="ill">${il.title ? `<h3 style="margin:0 0 10px;font-size:15px">${fmt(il.title)}</h3>` : ''}${h}${il.cap ? `<p class="ill-cap">${fmt(il.cap)}</p>` : ''}</div>`;
}

/* ---------- notes ---------- */
function notesHTML(arr){
  return arr.map(b => {
    if (b.h) return `<h3>${fmt(b.h)}</h3>`;
    if (b.p) return `<p>${fmt(b.p)}</p>`;
    if (b.ul) return `<ul>${b.ul.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>`;
    if (b.ol) return `<ol>${b.ol.map(x => `<li>${fmt(x)}</li>`).join('')}</ol>`;
    if (b.table) { const [hd, ...rs] = b.table; return `<div class="tw"><table><thead><tr>${hd.map(x => `<th>${fmt(x)}</th>`).join('')}</tr></thead><tbody>${rs.map(r => `<tr>${r.map(x => `<td>${fmt(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
    if (b.code !== undefined) return `<div class="cb"><span class="lg">${esc(b.lang||'')}</span><button class="cp" type="button">${I.copy}</button><pre><code>${esc(b.code)}</code></pre></div>`;
    if (b.tip) return `<div class="call tip"><b class="lb">${I.tip}</b>${fmt(b.tip)}</div>`;
    if (b.warn) return `<div class="call warn"><b class="lb">${I.warn}</b>${fmt(b.warn)}</div>`;
    if (b.bad) return `<div class="call bad"><b class="lb">${I.bad}</b>${fmt(b.bad)}</div>`;
    return '';
  }).join('');
}

/* ---------- views ---------- */
function lessonView(l){
  const blk = BLOCKS.find(b => l.id.startsWith(b.id));
  const sib = L.filter(x => x.id.startsWith(blk.id));
  const idx = L.indexOf(l), prev = L[idx-1], next = L[idx+1];
  const yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(l.yt);
  const c = S.c[l.id] || [];
  const links = (l.links||[]).map(([t,u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`).join(' · ');
  let k = 0; const K = () => ++k;
  const T = I.toc;
  $('#view').innerHTML = `
  <nav class="back" aria-label="${I.backLabel}"><a href="#home">${I.back}</a></nav>
  <div class="eyebrow">${esc(blk.t)} · ${I.lessonOf(sib.indexOf(l)+1, sib.length)} · ≈ ${esc(l.dur)}</div>
  <h1>${esc(l.title)}</h1>
  <nav class="toc" aria-label="${I.partsLabel}">
    <a href="#p-video" data-j>${T.video}</a><a href="#p-what" data-j>${T.what}</a><a href="#p-steps" data-j>${T.steps}</a>${l.example ? `<a href="#p-ex" data-j>${T.ex}</a>` : ''}${l.notes ? `<a href="#p-notes" data-j>${T.notes}</a>` : ''}<a href="#p-err" data-j>${T.err}</a><a href="#p-check" data-j>${T.check}</a><a href="#p-quiz" data-j>${T.quiz}</a>
  </nav>
  <section class="part" id="p-video"><div class="ph"><span class="k">${K()}</span><h2>${I.video}</h2></div>
    <figure class="vid"><video controls preload="metadata" playsinline src="${ROOT}video/${LANG}/${l.id}.mp4"></video>
      <figcaption>${I.vidNote} <a href="${ROOT}video/${LANG}/${l.id}.mp4" download>${I.dl}</a></figcaption></figure>
    <h3 class="sub-h">${I.scheme(l.scenes.length)}</h3><p class="sub-n">${I.schemeNote}</p>
    <div class="player">
      <div class="stage" id="stage"><span class="scap" id="scap"></span><div class="slot"></div>
        <svg class="cursor" id="cursor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2l7 19 2.6-8.1L21 10z" fill="var(--ink)" stroke="var(--surface)" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
      <div class="say" id="say" aria-live="polite"></div>
      <div class="ctrl">
        <button class="btn" id="prev" type="button" aria-label="${I.prev}">◀</button>
        <button class="btn pri" id="play" type="button">${I.play}</button>
        <button class="btn" id="next" type="button" aria-label="${I.next}">▶▶</button>
        <div class="seg" id="seg">${l.scenes.map((_, i) => `<button type="button" aria-label="${I.sceneBtn(i+1)}"><i></i></button>`).join('')}</div>
        <button class="btn" id="voice" type="button" aria-pressed="false" title="${I.voiceTitle}">${I.voice}</button>
        <button class="btn" id="scr" type="button" aria-pressed="false">${I.script}</button>
      </div>
      <div class="script" id="script"><p style="margin:0 0 8px;color:var(--muted)">${I.scriptNote}</p>
        <ol>${l.scenes.map(s => `<li><b>${fmt(s.t)}.</b> ${fmt(s.say)}</li>`).join('')}</ol></div>
      <div class="yt"><span>${I.yt}</span><a href="${yt}" target="_blank" rel="noopener">YouTube: «${esc(l.yt)}» ↗</a>${links ? `<span style="color:var(--muted)">${I.tools}</span> ${links}` : ''}</div>
    </div></section>
  <section class="part" id="p-what"><div class="ph"><span class="k">${K()}</span><h2>${I.what}</h2></div>
    <div class="panel notes"><p class="what">${fmt(l.what)}</p></div></section>
  ${l.ill.length ? `<section class="part" id="p-ill"><div class="ph"><span class="k">${K()}</span><h2>${I.ill}</h2></div>
    <div class="panel">${l.ill.map(illHTML).join('')}</div></section>` : ''}
  <section class="part" id="p-steps"><div class="ph"><span class="k">${K()}</span><h2>${I.steps}</h2></div>
    ${l.nav ? `<div class="navhint"><b>${I.path}</b><ul>${l.nav.map(p => `<li>${p.split(' → ').map(s => `<span>${fmt(s)}</span>`).join('<i aria-hidden="true">›</i>')}</li>`).join('')}</ul></div>` : ''}
    <ol class="steps">${l.steps.map(s => `<li><div>${fmt(s)}</div></li>`).join('')}</ol></section>
  ${l.example ? `<section class="part" id="p-ex"><div class="ph"><span class="k">${K()}</span><h2>${I.ex}</h2></div>
    <div class="panel notes">${notesHTML(l.example)}</div></section>` : ''}
  ${l.notes ? `<section class="part" id="p-notes"><div class="ph"><span class="k">${K()}</span><h2>${I.notes}</h2></div>
    <div class="panel notes">${notesHTML(l.notes)}</div></section>` : ''}
  <section class="part" id="p-err"><div class="ph"><span class="k">${K()}</span><h2>${I.err}</h2></div>
    <ul class="errs">${l.mistakes.map(m => `<li>${fmt(m)}</li>`).join('')}</ul></section>
  <section class="part" id="p-check"><div class="ph"><span class="k">${K()}</span><h2>${I.check}</h2></div>
    <div class="panel"><div class="chk-sum"><span id="csum"></span><button class="btn" id="creset" type="button">${I.reset}</button></div>
    <div class="chk">${l.check.map((x, i) => `<label><input type="checkbox" id="ck-${l.id}-${i}" data-i="${i}" ${c[i]?'checked':''}><span>${fmt(x)}</span></label>`).join('')}</div></div></section>
  <section class="part" id="p-quiz"><div class="ph"><span class="k">${K()}</span><h2>${I.quiz(QS(l).length)}</h2></div>
    ${QS(l).map((q, n) => `<div class="panel qz" data-n="${n}"><p class="q">${QS(l).length > 1 ? `<span class="qn">${n+1}/${QS(l).length}</span> ` : ''}${fmt(q.q)}</p><div class="opts">${q.a.map((x, i) => `<button type="button" data-i="${i}">${fmt(x)}</button>`).join('')}</div>
      <div class="expl"><div><label for="r-${l.id}-${n}">${I.mine}</label><textarea id="r-${l.id}-${n}" rows="3" placeholder="${I.minePh}">${esc(S.r[qKey(l, n)] || '')}</textarea></div>
      <div><span class="lbl">${I.course}</span><div class="why"><span class="wait">${I.wait}</span></div></div></div></div>`).join('')}</section>
  <div class="pager">${prev ? `<a href="#${prev.id}"><small>${I.prevL}</small>${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="nx" href="#${next.id}"><small>${I.nextL}</small>${esc(next.title)}</a>` : `<a class="nx" href="#home"><small>${I.end}</small>${I.home}</a>`}</div>`;

  P.l = l; P.playing = false; P.pausedAt = 0; P.voice = false;
  showScene(0);
  $('#play').onclick = () => setPlaying(!P.playing);
  $('#prev').onclick = () => { P.pausedAt = 0; showScene(P.i - 1); };
  $('#next').onclick = () => { P.pausedAt = 0; showScene(P.i + 1); };
  document.querySelectorAll('#seg button').forEach((b, i) => b.onclick = () => { P.pausedAt = 0; showScene(i); });
  $('#voice').onclick = e => { P.voice = !P.voice; e.currentTarget.setAttribute('aria-pressed', P.voice); if (P.voice) { if (!P.playing) setPlaying(true); speak(l.scenes[P.i]); } else { try { speechSynthesis.cancel(); } catch(_){} P.t0 = performance.now(); loop(); } };
  $('#scr').onclick = e => { const o = $('#script').classList.toggle('open'); e.currentTarget.setAttribute('aria-pressed', o); };
  const sum = () => { const cc = S.c[l.id] || []; $('#csum').textContent = I.done(l.check.filter((_, i) => cc[i]).length, l.check.length); };
  sum();
  document.querySelectorAll('.chk input').forEach(inp => inp.onchange = () => {
    (S.c[l.id] = S.c[l.id] || [])[+inp.dataset.i] = inp.checked; save(); sum(); updateProgress();
  });
  $('#creset').onclick = () => { S.c[l.id] = []; save(); document.querySelectorAll('.chk input').forEach(i => i.checked = false); sum(); updateProgress(); };
  document.querySelectorAll('.qz').forEach(box => {
    const n = +box.dataset.n, q = QS(l)[n];
    const answer = i => {
      box.querySelectorAll('.opts button').forEach((b, k) => { b.classList.toggle('right', k === q.c); b.classList.toggle('wrong', k === i && i !== q.c); });
      box.querySelector('.why').innerHTML = (i === q.c ? `<b style="color:var(--ok)">${I.right}</b> ` : `<b style="color:var(--bad)">${I.wrong}</b> `) + fmt(q.why);
    };
    box.querySelectorAll('.opts button').forEach(b => b.onclick = () => { const i = +b.dataset.i; if (i === q.c) { S.q[qKey(l, n)] = true; save(); updateProgress(); } answer(i); });
    box.querySelector('textarea').oninput = e => { S.r[qKey(l, n)] = e.target.value; save(); };
    if (S.q[qKey(l, n)]) answer(q.c);
  });
  bindCopy();
}
function homeView(){
  P.l = null; try { speechSynthesis.cancel(); } catch(e) {}
  const names = [['Google Search Console','https://search.google.com/search-console'],['Google Analytics 4','https://analytics.google.com'],['Google Tag Manager','https://tagmanager.google.com'],[I.planner,'https://ads.google.com/home/tools/keyword-planner/'],['Google Trends','https://trends.google.com/trends/'],['Serpstat','https://serpstat.com'],['Ahrefs','https://ahrefs.com'],['Screaming Frog','https://www.screamingfrog.co.uk/seo-spider/'],['Netpeak Spider','https://netpeaksoftware.com/spider'],['WordPress + Rank Math / Yoast','https://rankmath.com/kb/'],['GitHub + GitHub Desktop','https://desktop.github.com'],['Vercel','https://vercel.com'],['PageSpeed Insights','https://pagespeed.web.dev'],['Chrome DevTools (F12)','https://developer.chrome.com/docs/devtools'],['GS Location Changer','https://chromewebstore.google.com/search/GS%20Location%20Changer']];
  const first = L[0].id;
  $('#view').innerHTML = `
  <div class="hero"><div class="eyebrow">${I.heroEyebrow(L.length, BLOCKS.length)}</div>
  <h1>${I.brand}</h1>
  <p class="lead">${I.lead}</p>
  <div class="codes"><span class="c2">200 OK</span><span class="c3">301 Moved</span><span class="c4">404 Not Found</span><span class="c5">500 Server Error</span><span class="c2">index, follow</span><span class="c4">noindex</span><span class="c3">rel=canonical</span></div></div>
  <div class="cards">${BLOCKS.map(b => { const ls = L.filter(l => l.id.startsWith(b.id)); return `<div class="card"><h3>${esc(b.t)}</h3><p>${esc(b.d)}</p><ol>${ls.map(l => `<li><a href="#${l.id}">${esc(l.title)}</a></li>`).join('')}</ol><a class="btn pri" href="#${ls[0].id}">${I.startBlock}</a></div>`; }).join('')}</div>
  <section class="part"><div class="ph"><span class="k">i</span><h2>${I.howTitle}</h2></div>
  <p class="ill-cap" style="margin:0 0 10px">${I.howNote}</p>
  <div class="parts">${I.parts.map(([id, t, d]) => `<a href="#${first}" data-part="${id}"><b>${t}</b><small>${d}</small></a>`).join('')}</div></section>
  <section class="part"><div class="ph"><span class="k">⚒</span><h2>${I.toolsTitle}</h2></div>
  <div class="tw" style="background:var(--surface)"><table><thead><tr><th>${I.toolCol}</th><th>${I.forCol}</th></tr></thead><tbody>${names.map(([n,u], i) => `<tr><td><a href="${u}" target="_blank" rel="noopener">${esc(n)}</a></td><td>${esc(I.toolsList[i])}</td></tr>`).join('')}</tbody></table></div></section>`;
  document.querySelectorAll('.parts a[data-part]').forEach(a => a.onclick = e => {
    e.preventDefault(); goPart = a.dataset.part; location.hash = first;
  });
}
/* частина уроку, до якої прокрутити після переходу з головної */
let goPart = null;
function bindCopy(){
  document.querySelectorAll('.cb .cp').forEach(b => b.onclick = () => {
    const t = b.parentElement.querySelector('code').textContent;
    const ok = () => { b.textContent = I.copied; setTimeout(() => b.textContent = I.copy, 1500); };
    try { navigator.clipboard.writeText(t).then(ok, () => selectCode(b)); } catch(e) { selectCode(b); }
  });
}
function selectCode(b){ const r = document.createRange(); r.selectNodeContents(b.parentElement.querySelector('code')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = I.selected; }

/* стартова привітальна сторінка: показується, коли в адресі немає #розділу */
function welcomeView(){
  P.l = null; try { speechSynthesis.cancel(); } catch(e) {}
  const W = I.welcome;
  const started = L.some(l => lessonPct(l) > 0);
  const nextL = L.find(l => lessonPct(l) < 1) || L[0];
  const langs = [['uk','Українська',''],['en','English','en/'],['pl','Polski','pl/']];
  $('#view').innerHTML = `
  <section class="welcome-screen">
    ${logo('welcome-logo')}
    <p class="welcome-tag">${W.tag}</p>
    <p class="welcome-text">${W.text}</p>
    <ul class="welcome-facts">${W.facts.map(([n, t]) => `<li><b>${n}</b><span>${t}</span></li>`).join('')}</ul>
    <div class="welcome-btns"><a class="btn pri" href="#home">${W.start}</a>${started ? `<a class="btn" href="#${nextL.id}">${W.cont}</a>` : ''}</div>
    <nav class="welcome-langs" aria-label="${I.langName}">${langs.map(([c, t, p]) => c === LANG ? `<b>${t}</b>` : `<a href="${ROOT}${p}" hreflang="${c}" lang="${c}">${t}</a>`).join('')}</nav>
  </section>`;
}
function route(){
  const id = location.hash.slice(1);
  const l = L.find(x => x.id === id);
  document.body.classList.toggle('welcome', !id);
  if (!id) welcomeView(); else if (l) lessonView(l); else if (!/^p-/.test(id)) homeView();
  document.querySelectorAll('.ls a').forEach(a => a.classList.toggle('on', a.dataset.id === id));
  $('#side').classList.remove('open');
  const part = goPart && document.getElementById(goPart); goPart = null;
  if (part) part.scrollIntoView(); else if (!/^p-/.test(id)) window.scrollTo(0, 0);
  updateProgress();
}
document.addEventListener('click', e => {
  const j = e.target.closest('a[data-j]');
  if (j) { e.preventDefault(); const t = document.querySelector(j.getAttribute('href')); if (t) t.scrollIntoView({behavior:'smooth'}); }
});
$('#menu').onclick = () => $('#side').classList.toggle('open');
window.addEventListener('hashchange', route);
window.addEventListener('resize', () => { if (P.l) moveCursor(P.l.scenes[P.i]); });
buildNav(); route();
