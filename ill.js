/* Схеми з файлу «SEO з нуля.html» (бюро перекладів «Мости») */
(function(){
const K={n:['--surface','--line','--ink'],a:['--accent-soft','--accent','--ink'],d:['--accent','--accent','--accent-ink'],w:['--warn-soft','--warn','--ink'],b:['--bad-soft','--bad','--ink'],i:['--info-soft','--info','--ink'],s:['--sunk','--line','--ink']};
const v=n=>`var(${n})`;
function svg(w,h,inner,label){return `<svg viewBox="0 0 ${w} ${h}" class="svg-t" role="img" aria-label="${label||''}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`}
function T(x,y,s,o={}){const size=o.size||13,wt=o.w||400,c=o.c||'--ink',a=o.a||'start',f=o.mono?'font-family:var(--f-mono);':'';return `<text x="${x}" y="${y}" text-anchor="${a}" style="${f}font-size:${size}px;font-weight:${wt};fill:${v(c)}">${s}</text>`}
function R(x,y,w,h,k='n',r=8,extra=''){const c=K[k];return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:${v(c[0])};stroke:${v(c[1])};stroke-width:1.5${extra}"/>`}
function B(x,y,w,h,label,sub,k='n',size=14){const c=K[k];let s=R(x,y,w,h,k);const cy=sub?y+h/2-3:y+h/2+5;s+=T(x+w/2,cy,label,{size,w:600,c:c[2],a:'middle'});if(sub)s+=T(x+w/2,y+h/2+15,sub,{size:11.5,c:k==='d'?'--accent-ink':'--muted',a:'middle'});return s}
function A(x1,y1,x2,y2,c='--muted',dash){const ang=Math.atan2(y2-y1,x2-x1),L=9;const p1=[x2-L*Math.cos(ang-0.45),y2-L*Math.sin(ang-0.45)],p2=[x2-L*Math.cos(ang+0.45),y2-L*Math.sin(ang+0.45)];return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${v(c)};stroke-width:1.8${dash?';stroke-dasharray:5 4':''}"/><polygon points="${x2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}" style="fill:${v(c)}"/>`}
function L(x1,y1,x2,y2,c='--line',w=1.5,dash){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${v(c)};stroke-width:${w}${dash?';stroke-dasharray:4 4':''}"/>`}
function C(cx,cy,r,k='n'){const c=K[k];return `<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:${v(c[0])};stroke:${v(c[1])};stroke-width:1.5"/>`}

const ILL={
pipeline(){let s='';const st=[['Виявлення','посилання, sitemap','i'],['Сканування','Googlebot читає HTML','n'],['Рендеринг','виконує JS, CSS','n'],['Індекс','база сторінок Google','a'],['Ранжування','позиції у видачі','d']];
 st.forEach((q,i)=>{const x=10+i*126;s+=B(x,70,112,64,q[0],q[1],q[2],13.5);if(i<4)s+=A(x+112,102,x+126,102)});
 s+=T(10,40,'Шлях URL від появи до видачі',{size:15,w:700});
 s+=T(10,175,'Зупинка на будь-якому етапі = сторінки немає в пошуку.',{size:12.5,c:'--muted'});
 s+=R(10,190,616,64,'w',8);s+=T(24,214,'Де ламається:',{size:12.5,w:700,c:'--warn'});
 s+=T(24,236,'немає посилань → не виявлено · robots.txt → не скановано · noindex / дубль / слабкий текст → не в індексі',{size:12});
 return svg(636,264,s,'Етапи: виявлення, сканування, рендеринг, індекс, ранжування')},
url(){let s='';const parts=[['https://','Протокол','i',70],['www.mosty.com.ua','Домен','a',150],['/uslugy/pereklad-dokumentiv/','Шлях (path)','n',236],['?utm_source=fb','Параметр','w',120],['#ціна','Фрагмент','s',62]];
 s+=R(10,30,620,56,'s',28);let x=28;
 parts.forEach(p=>{s+=T(x,64,p[0],{size:13,mono:1,c:K[p[2]][1]==='--line'?'--muted':K[p[2]][1]});s+=L(x,92,x,118,K[p[2]][1]);s+=T(x,134,p[1],{size:12,w:600});x+=p[3]*0.83});
 s+=T(10,175,'Правила хорошого URL',{size:14,w:700});
 const r=['латиниця, нижній регістр, дефіси замість пробілів','коротко й зрозуміло: /pereklad-dokumentiv/','одна версія: https + з www або без — інші 301-редирект','параметри (?utm, ?sort) не мають створювати дублі в індексі'];
 r.forEach((t,i)=>{s+=C(18,197+i*22,4,'d');s+=T(30,201+i*22,t,{size:12.5})});
 return svg(640,282,s,'Анатомія URL')},
status(){let s='';const c=[['2xx','Успіх','200 OK — сторінка є','a'],['3xx','Редирект','301 назавжди, 302 тимчасово','i'],['4xx','Помилка клієнта','404 нема, 410 видалено','w'],['5xx','Помилка сервера','500, 502, 503 — сайт падає','b']];
 c.forEach((q,i)=>{const x=10+i*157;s+=R(x,20,145,170,q[3],10);s+=T(x+16,62,q[0],{size:30,w:700,c:K[q[3]][1]});s+=T(x+16,92,q[1],{size:13.5,w:700});s+=T(x+16,116,q[2].split(' — ')[0],{size:12});if(q[2].split(' — ')[1])s+=T(x+16,134,q[2].split(' — ')[1],{size:12,c:'--muted'})});
 s+=T(10,218,'Googlebot бачить код раніше, ніж текст сторінки. Код вирішує, що буде з URL в індексі.',{size:12.5,c:'--muted'});
 return svg(640,230,s,'Групи кодів відповіді сервера')},
tree(){let s='';s+=B(250,14,140,44,'Головна','/','d');
 const l1=[['Послуги','/uslugy/',40],['Мови','/movy/',190],['Блог','/blog/',340],['Контакти','/kontakty/',490]];
 l1.forEach(q=>{s+=L(320,58,q[2]+55,92,'--muted');s+=B(q[2],92,110,44,q[0],q[1],'a')});
 const l2=[['Нотаріальний','/uslugy/notarialnyi/',0],['Присяжний','/uslugy/prysiazhnyi/',118],['Англійська','/movy/angliiska/',236],['Стаття','/blog/apostyl/',354]];
 const par=[95,95,245,395];l2.forEach((q,i)=>{s+=L(par[i],136,q[2]+64,172,'--muted');s+=B(q[2]+10,172,108,44,q[0],q[1].split('/').slice(-2,-1)[0],'n',12.5)});
 s+=B(500,172,120,44,'Політика','noindex? ні','s',12.5);s+=L(545,136,560,172,'--muted',1.5,1);
 [['1 клік',36],['2 кліки',114],['3 кліки',194]].forEach(q=>s+=T(632,q[1],q[0],{size:11,c:'--muted',a:'end',mono:1}));
 s+=T(10,248,'Кожна важлива сторінка — не глибше 3 кліків від головної, URL повторює ієрархію.',{size:12.5,c:'--muted'});
 return svg(640,260,s,'Дерево структури сайту')},
gsc(sel){sel=sel||'Сторінки';let s='';s+=R(0,0,640,300,'n',10);s+=R(0,0,640,40,'s',10);s+=T(16,25,'Google Search Console',{size:13,w:700});s+=R(200,10,260,22,'n',11);s+=T(212,25,'Перевірити будь-яку URL-адресу',{size:11,c:'--muted'});
 const nav=['Огляд','Ефективність','Перевірка URL','Сторінки','Відео-сторінки','Файли Sitemap','Вилучення','Основні веб-показники','Посилання','Налаштування'];
 nav.forEach((n,i)=>{const y=56+i*23;if(n===sel)s+=R(8,y-15,160,22,'a',11);s+=T(22,y,n,{size:12,w:n===sel?700:400})});
 s+=T(190,70,sel,{size:16,w:700});
 if(sel==='Сторінки'){s+=R(190,84,200,60,'a',8);s+=T(204,106,'Проіндексовано',{size:12});s+=T(204,132,'126',{size:22,w:700,c:'--accent'});s+=R(400,84,220,60,'s',8);s+=T(414,106,'Не проіндексовано',{size:12});s+=T(414,132,'48',{size:22,w:700,c:'--muted'});
  const rows=[['Сторінка з переадресацією','17'],['Виключено тегом noindex','12'],['Дублікат: Google вибрав іншу канонічну','9'],['Проскановано, наразі не проіндексовано','6'],['Не знайдено (404)','4']];
  rows.forEach((r,i)=>{const y=172+i*24;s+=L(190,y+8,620,y+8);s+=T(196,y,r[0],{size:12});s+=T(612,y,r[1],{size:12,w:600,a:'end',mono:1})})}
 else if(sel==='Файли Sitemap'){s+=R(190,84,430,44,'s',8);s+=T(204,111,'https://site.com/ sitemap.xml',{size:12,mono:1});s+=R(540,92,70,28,'d',14);s+=T(575,111,'Надіслати',{size:11,w:600,c:'--accent-ink',a:'middle'});
  s+=T(190,160,'Надіслані файли Sitemap',{size:13,w:700});[['sitemap.xml','Успішно','128'],['post-sitemap.xml','Успішно','42']].forEach((r,i)=>{const y=186+i*26;s+=T(196,y,r[0],{size:12,mono:1});s+=T(420,y,r[1],{size:12,c:'--accent',w:600});s+=T(612,y,r[2],{size:12,a:'end',mono:1});s+=L(190,y+9,620,y+9)})}
 else if(sel==='Перевірка URL'){s+=R(190,84,430,80,'a',8);s+=T(206,108,'URL-адреса є в Google',{size:14,w:700,c:'--accent'});s+=T(206,130,'Сторінка проіндексована. Канонічна вказана користувачем ✓',{size:12});s+=R(470,138,140,20,'d',10);s+=T(540,152,'ПЕРЕВІРИТИ АКТИВНУ URL',{size:9.5,w:700,c:'--accent-ink',a:'middle'});
  [['Виявлення','Файли Sitemap: sitemap.xml'],['Сканування','Сканування дозволено? Так'],['Індексування','Індексування дозволено? Так'],['Канонічна','user: …/uslugy/ · Google: та сама']].forEach((r,i)=>{const y=192+i*24;s+=T(196,y,r[0],{size:12,w:600});s+=T(320,y,r[1],{size:12,c:'--muted'});s+=L(190,y+8,620,y+8)});
  s+=R(470,276,140,18,'s',9);s+=T(540,289,'Надіслати запит на індекс.',{size:9.5,a:'middle'})}
 else if(sel==='Вилучення'){s+=R(190,90,160,32,'d',16);s+=T(270,111,'+ НОВИЙ ЗАПИТ',{size:11,w:700,c:'--accent-ink',a:'middle'});s+=T(190,152,'Тимчасове вилучення ≈ 6 місяців. Це не замінює noindex!',{size:12,c:'--warn',w:600});[['…/test-page/','Вилучено'],['…/old-price/','Обробляється']].forEach((r,i)=>{const y=186+i*26;s+=T(196,y,r[0],{size:12,mono:1});s+=T(612,y,r[1],{size:12,a:'end'});s+=L(190,y+9,620,y+9)})}
 else if(sel==='Ефективність'){s+=T(190,96,'Кліки 1,2 тис.   Покази 48 тис.   CTR 2,5%   Позиція 18,4',{size:12,w:600});let p='';for(let i=0;i<20;i++){const x=190+i*22,y=230-(40+30*Math.sin(i/3)+i*3);p+=(i?'L':'M')+x+','+y.toFixed(0)}s+=`<path d="${p}" style="fill:none;stroke:var(--info);stroke-width:2"/>`;s+=L(190,240,620,240);s+=T(190,270,'Вкладки: Запити · Сторінки · Країни · Пристрої',{size:12,c:'--muted'})}
 else if(sel==='Основні веб-показники'){[['Мобільні','34 погані','b'],['Комп’ютер','0 поганих','a']].forEach((r,i)=>{const y=92+i*80;s+=R(190,y,430,64,r[2],8);s+=T(206,y+26,r[0],{size:13,w:700});s+=T(206,y+48,r[1]+' URL · причина: LCP понад 4 с',{size:12})})}
 else if(sel==='Посилання'){[['Зовнішні посилання','Сайти, що посилаються'],['Внутрішні посилання','Сторінки з найбільшою кількістю']].forEach((r,i)=>{const y=92+i*90;s+=R(190,y,430,72,'s',8);s+=T(206,y+28,r[0],{size:13,w:700});s+=T(206,y+50,r[1],{size:12,c:'--muted'})})}
 return svg(640,300,s,'Схема інтерфейсу Search Console: '+sel)},
crawler(tab,title){tab=tab||'Internal';let s='';s+=R(0,0,640,300,'n',10);s+=R(0,0,640,36,'s',10);s+=T(14,23,title||'Краулер (Screaming Frog / Netpeak Spider)',{size:12.5,w:700});s+=R(390,8,180,20,'n',10);s+=T(400,22,'https://site.com/',{size:11,mono:1,c:'--muted'});s+=R(576,8,54,20,'d',10);s+=T(603,22,'Start',{size:11,w:700,c:'--accent-ink',a:'middle'});
 const tabs=['Internal','Response Codes','Page Titles','H1','Canonicals','Directives','Hreflang','Sitemaps'];let x=8;tabs.forEach(t=>{const w=t.length*6.6+16;if(t===tab)s+=R(x,44,w,24,'a',6);s+=T(x+8,60,t,{size:11,w:t===tab?700:400});x+=w+4});
 const data={
  'Internal':[['Address','Code','Indexability','Title'],['/','200','Indexable','Бюро перекладів…'],['/uslugy/','200','Indexable','Послуги перекладу'],['/blog/?page=2','200','Non-Indexable','Блог – стор. 2'],['/old-page/','301','Non-Indexable','—'],['/cart/','200','Non-Indexable','Кошик']],
  'Response Codes':[['Address','Code','Status','Redirect URL'],['/uslugy/','200','OK',''],['/old-page/','301','Moved Permanently','/uslugy/'],['/akcia-2023/','404','Not Found',''],['http://site.com/','301','Moved Permanently','https://…'],['/api/form','500','Server Error','']],
  'Page Titles':[['Address','Title 1','Length','Issue'],['/','Бюро перекладів Мости','22','Short'],['/uslugy/','Послуги','7','Duplicate'],['/kontakty/','Послуги','7','Duplicate'],['/blog/apostyl/','','0','Missing'],['/movy/','Переклад з 40 мов за 1 день — ціни, термін…','74','Over 60 chars']],
  'H1':[['Address','H1-1','H1-2','Issue'],['/','Бюро перекладів','','OK'],['/uslugy/','','','Missing'],['/blog/','Блог','Новини','Multiple'],['/movy/','Мови','','OK'],['/movy/pl/','Мови','','Duplicate']],
  'Canonicals':[['Address','Canonical Link','Indexability','Issue'],['/uslugy/','/uslugy/','Indexable','Self'],['/uslugy/?sort=a','/uslugy/','Canonicalised','OK'],['/blog/a/','/blog/b/','Canonicalised','Check'],['/movy/','—','Indexable','Missing'],['/kontakty/','http://…','Indexable','Wrong']],
  'Directives':[['Address','Meta Robots','X-Robots-Tag','Result'],['/','index, follow','','OK'],['/search/?q=','noindex, follow','','noindex'],['/dyakuiemo/','noindex','','noindex'],['/uslugy/','noindex','','ПОМИЛКА!'],['/file.pdf','','noindex','noindex']],
  'Hreflang':[['Address','uk','en','Issue'],['/','/','/en/','OK'],['/en/','/','/en/','OK'],['/pl/','—','/en/','Missing Self'],['/ru/','/','','No Return'],['/de/','/ua/','','Bad Code']],
  'Sitemaps':[['Address','In Sitemap','Indexability','Issue'],['/uslugy/','Yes','Indexable','OK'],['/old-page/','Yes','Non-Indexable','301 у sitemap'],['/novyi-zapys/','No','Indexable','Not in sitemap'],['/sirota/','Yes','Indexable','Orphan'],['/cart/','Yes','Non-Indexable','noindex у sitemap']]};
 const rows=data[tab]||data.Internal;const cx=[14,250,370,490];
 rows.forEach((r,i)=>{const y=96+i*30;if(i===0){s+=R(8,78,624,26,'s',4)}r.forEach((c,j)=>{let col='--ink';if(i>0&&/^(4|5)\d\d$/.test(c)||/ПОМИЛКА|Missing|Duplicate|Wrong|No Return|Bad Code|Orphan|404|Multiple/.test(c))col='--bad';else if(i>0&&(/^3\d\d$/.test(c)||/Non-Indexable|Canonicalised|Check|Over|Short|noindex|Not in/.test(c)))col='--warn';else if(i>0&&(/^200$/.test(c)||/^Indexable$|^OK$|Self/.test(c)))col='--accent';s+=T(cx[j],y,c,{size:i?11.5:10.5,w:i?400:700,mono:j===0||j===1&&/\d/.test(c),c:i?col:'--muted'})});if(i>0)s+=L(8,y+10,632,y+10)});
 return svg(640,300,s,'Схема краулера, вкладка '+tab)},
directives(){let s='';const c=[['robots.txt','«Не заходь»','Google не читає сторінку. Але URL може потрапити в індекс за посиланнями.','w'],['noindex','«Не показуй»','Google читає сторінку і викидає її з індексу. Сканування має бути дозволене!','b'],['canonical','«Головна — ось ця»','Підказка: з кількох схожих сторінок у пошуку показати одну.','i'],['301','«Переїхала назавжди»','Користувач і Google автоматично йдуть на нову адресу.','a']];
 c.forEach((q,i)=>{const x=10+(i%2)*312,y=10+Math.floor(i/2)*124;s+=R(x,y,300,112,q[3],10);s+=T(x+16,y+30,q[0],{size:16,w:700,mono:1,c:K[q[3]][1]});s+=T(x+16,y+52,q[1],{size:13,w:700});const words=q[2].split(' ');let line='',ly=y+74;words.forEach(w=>{if((line+w).length>44){s+=T(x+16,ly,line,{size:12});ly+=17;line=''}line+=w+' '});s+=T(x+16,ly,line,{size:12})});
 return svg(632,260,s,'Різниця між robots.txt, noindex, canonical і 301')},
canonical(){let s='';s+=B(400,95,220,70,'/uslugy/pereklad/','ОРИГІНАЛ · canonical на себе','a',13);
 const d=['/uslugy/pereklad/?utm_source=fb','/uslugy/pereklad/?sort=price','/USLUGY/Pereklad/','http://site.com/uslugy/pereklad/'];
 d.forEach((u,i)=>{const y=14+i*62;s+=R(10,y,270,46,'w',8);s+=T(22,y+21,u,{size:11.5,mono:1});s+=T(22,y+37,i<2?'дубль → rel=canonical':'дубль → 301 редирект',{size:11,c:'--warn',w:600});s+=A(280,y+23,398,130,i<2?'--info':'--accent',i<2)});
 s+=T(10,276,'Пунктир — canonical (підказка). Суцільна — 301 (жорстко). Посилання на сайті ведуть тільки на оригінал.',{size:12,c:'--muted'});
 return svg(632,288,s,'Дублікати й оригінал')},
sitemap(){let s='';s+=R(10,10,360,250,'s',8);const lines=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/…">','  <url>','    <loc>https://site.com/uslugy/</loc>','    <lastmod>2026-10-20</lastmod>','  </url>','  <url>','    <loc>https://site.com/movy/en/</loc>','    <lastmod>2026-09-02</lastmod>','  </url>','</urlset>'];lines.forEach((l,i)=>s+=T(22,34+i*20,l.replace(/</g,'&lt;').replace(/>/g,'&gt;'),{size:11,mono:1,c:/loc|lastmod/.test(l)?'--accent':'--ink'}));
 s+=A(372,130,410,130);s+=T(420,40,'У sitemap ТІЛЬКИ:',{size:13,w:700,c:'--accent'});['код 200','indexable (без noindex)','канонічні URL','https, фінальні адреси'].forEach((t,i)=>{s+=C(428,62+i*22,4,'d');s+=T(440,66+i*22,t,{size:12})});
 s+=T(420,170,'НЕ має бути:',{size:13,w:700,c:'--bad'});['301/404, дублі, ?параметри','noindex, кошик, пошук'].forEach((t,i)=>{s+=C(428,192+i*22,4,'b');s+=T(440,196+i*22,t,{size:12})});
 return svg(632,270,s,'Як виглядає sitemap.xml')},
hreflang(){let s='';const p=[['uk','/','Українська',260,20],['en','/en/','English',60,170],['pl','/pl/','Polski',460,170]];
 p.forEach(q=>{s+=R(q[3],q[4],120,64,'a',10);s+=T(q[3]+60,q[4]+28,q[0],{size:20,w:700,mono:1,c:'--accent',a:'middle'});s+=T(q[3]+60,q[4]+48,q[1],{size:11.5,mono:1,a:'middle'})});
 s+=A(270,84,140,168,'--info');s+=A(150,168,280,84,'--info');s+=A(370,84,490,168,'--info');s+=A(480,168,360,84,'--info');s+=A(180,210,458,210,'--info');s+=A(458,196,180,196,'--info');
 s+=R(260,250,120,30,'s',8);s+=T(320,270,'x-default → /',{size:11.5,mono:1,a:'middle'});
 s+=T(10,310,'Кожна версія посилається на всі інші ТА на себе. Код мови uk (не ua), en, pl.',{size:12.5,c:'--muted'});
 return svg(640,320,s,'Взаємні посилання hreflang')},
cluster(){let s='';const cl=[['Кластер 1 → /uslugy/notarialnyi-pereklad/',['нотаріальний переклад','нотаріальний переклад ціна','переклад з нотаріальним засвідченням','засвідчений переклад київ'],'a'],['Кластер 2 → /uslugy/prysiazhnyi-tlumach/',['присяжний перекладач польща','tłumacz przysięgły','присяжний переклад документів'],'i'],['Кластер 3 → /blog/shcho-take-apostyl/',['що таке апостиль','апостиль навіщо потрібен','апостиль чи легалізація'],'w']];
 cl.forEach((c,i)=>{const y=10+i*98;s+=R(10,y,620,86,c[2],10);s+=T(24,y+24,c[0],{size:12.5,w:700,mono:1});let x=24;c[1].forEach(k=>{const w=k.length*6.4+18;if(x+w>620){return}s+=R(x,y+38,w,28,'n',14);s+=T(x+w/2,y+57,k,{size:11.5,a:'middle'});x+=w+8})});
 return svg(640,306,s,'Кластеризація ключових слів')},
serp(){let s='';s+=R(10,10,620,250,'n',10);s+=R(26,24,380,30,'s',15);s+=T(42,44,'нотаріальний переклад київ',{size:13});
 const r=[['mosty.com.ua › uslugy','Нотаріальний переклад у Києві — від 1 дня | Мости','Переклад документів з нотаріальним засвідченням з 40 мов. Ціна від …'],['example.ua › notarialnyi','Нотаріальний переклад документів — ціни 2026','Засвідчення перекладу нотаріусом, апостиль, легалізація…']];
 r.forEach((q,i)=>{const y=86+i*84;s+=T(26,y,q[0],{size:11.5,c:'--muted'});s+=T(26,y+22,q[1],{size:15,c:'--info',w:600});s+=T(26,y+44,q[2],{size:12.5})});
 s+=A(560,108,470,108,'--accent');s+=T(566,112,'title',{size:12,w:700,c:'--accent',mono:1});s+=A(560,130,440,130,'--accent');s+=T(566,134,'description',{size:12,w:700,c:'--accent',mono:1});s+=A(560,86,180,82,'--accent');s+=T(566,90,'URL',{size:12,w:700,c:'--accent',mono:1});
 return svg(640,270,s,'Сніпет у видачі Google')},
links(){let s='';s+=B(250,110,140,60,'Хаб: /uslugy/','категорія','d');const sp=[['Нотаріальний',40,20],['Присяжний',460,20],['Апостиль',20,200],['Легалізація',470,200],['Стаття-гайд',250,240]];
 sp.forEach(q=>{s+=B(q[1],q[2],130,48,q[0],null,'a',12.5);s+=A(q[1]+65,q[2]+(q[2]<100?48:0),320,q[2]<100?110:170,'--accent');});
 s+=A(380,264,470,232,'--info',1);s+=T(392,282,'контекстне посилання',{size:11,c:'--info'});
 s+=B(500,120,120,40,'Сирота','0 вхідних','b',12);
 return svg(640,300,s,'Внутрішня перелінковка: хаб і сателіти')},
wp(sel){sel=sel||'Налаштування';let s='';s+=R(0,0,640,300,'n',10);s+=`<rect x="0" y="0" width="170" height="300" rx="10" style="fill:var(--code-bg)"/>`;s+=T(16,26,'WordPress /wp-admin',{size:12,w:700,c:'--code-fg'});
 const nav=['Консоль','Записи','Медіафайли','Сторінки','Коментарі','Зовнішній вигляд','Плагіни','Користувачі','Інструменти','Налаштування','Rank Math SEO'];
 nav.forEach((n,i)=>{const y=58+i*22;if(n===sel)s+=`<rect x="0" y="${y-15}" width="170" height="22" style="fill:var(--accent)"/>`;s+=T(16,y,n,{size:12,c:n===sel?'--accent-ink':'--code-fg',w:n===sel?700:400})});
 if(sel==='Налаштування'){s+=T(196,40,'Налаштування › Читання',{size:15,w:700});s+=R(196,58,420,60,'b',8);s+=`<rect x="212" y="74" width="14" height="14" rx="3" style="fill:var(--surface);stroke:var(--bad);stroke-width:2"/>`;s+=T(236,86,'Не дозволяти пошуковим системам індексувати',{size:12,w:600});s+=T(236,106,'На робочому сайті — ЗНЯТИ галочку!',{size:11.5,c:'--bad',w:600});
  s+=T(196,152,'Налаштування › Постійні посилання',{size:15,w:700});['Простий  ?p=123','Назва запису  /%postname%/  ← обрати'].forEach((t,i)=>{const y=180+i*28;s+=C(210,y-4,6,i?'d':'n');s+=T(224,y,t,{size:12,mono:1,w:i?700:400})});s+=T(196,250,'Міняти структуру посилань на живому сайті — тільки з 301!',{size:11.5,c:'--warn',w:600})}
 if(sel==='Rank Math SEO'){s+=T(196,40,'SEO-плагін (Rank Math / Yoast)',{size:15,w:700});[['Заголовки й мета','шаблони title, noindex для тегів/архівів'],['Файли Sitemap','/sitemap_index.xml — що включати'],['Редагування robots.txt','в «Загальні налаштування»'],['Перенаправлення','301 зі старих URL'],['Схема (Schema)','Organization, LocalBusiness, Article']].forEach((r,i)=>{const y=64+i*44;s+=R(196,y,420,36,'s',6);s+=T(208,y+16,r[0],{size:12.5,w:700});s+=T(208,y+30,r[1],{size:11,c:'--muted'})})}
 if(sel==='Плагіни'){s+=T(196,40,'Плагіни › Встановлені',{size:15,w:700});[['Rank Math SEO','залишити (1 SEO-плагін)','a'],['Yoast SEO','видалити — конфлікт двох SEO','b'],['LiteSpeed Cache','залишити (1 кеш-плагін)','a'],['ShortPixel','стиснення зображень','a'],['Hello Dolly','не потрібен — видалити','w']].forEach((r,i)=>{const y=60+i*44;s+=R(196,y,420,36,r[2],6);s+=T(208,y+16,r[0],{size:12.5,w:700});s+=T(208,y+30,r[1],{size:11})})}
 return svg(640,300,s,'Схема адмінки WordPress: '+sel)},
cwv(){let s='';const g=[['LCP','Завантаження головного елемента','≤ 2,5 с','2,5–4 с','> 4 с'],['INP','Реакція на клік / дотик','≤ 200 мс','200–500 мс','> 500 мс'],['CLS','Стрибки макета','≤ 0,1','0,1–0,25','> 0,25']];
 g.forEach((q,i)=>{const y=14+i*82;s+=T(10,y+20,q[0],{size:20,w:700,mono:1});s+=T(10,y+40,q[1],{size:11.5,c:'--muted'});['a','w','b'].forEach((k,j)=>{s+=R(250+j*126,y+4,120,44,k,6);s+=T(310+j*126,y+31,q[2+j],{size:12.5,w:600,a:'middle'})})});
 ['Добре','Покращити','Погано'].forEach((t,j)=>s+=T(310+j*126,262,t,{size:11.5,c:'--muted',a:'middle'}));
 return svg(640,272,s,'Пороги Core Web Vitals')},
github(){let s='';const st=[['1. Репозиторій','New → site','n'],['2. Файли','index.html, robots.txt, sitemap.xml','n'],['3. Settings → Pages','Branch: main / root','i'],['4. Сайт живий','user.github.io/site','d']];
 st.forEach((q,i)=>{const x=10+i*158;s+=B(x,40,146,74,q[0],q[1],q[3],13);if(i<3)s+=A(x+146,77,x+158,77)});
 s+=R(10,146,620,84,'s',8);s+=T(24,170,'Власний домен:',{size:12.5,w:700});s+=T(24,192,'Pages → Custom domain → mosty.com.ua · у DNS: CNAME www → user.github.io',{size:12,mono:1});s+=T(24,214,'Потім увімкнути «Enforce HTTPS».',{size:12});
 return svg(640,240,s,'Публікація сайту через GitHub Pages')},
source(){let s='';s+=`<rect x="10" y="10" width="620" height="270" rx="10" style="fill:var(--code-bg)"/>`;const l=[['<head>',0],['  <title>Нотаріальний переклад у Києві | Мости</title>','t'],['  <meta name="description" content="…">','t'],['  <meta name="robots" content="index, follow">','r'],['  <link rel="canonical" href="https://mosty.com.ua/uslugy/">','c'],['  <link rel="alternate" hreflang="en" href="…/en/uslugy/">','h'],['  <script>…googletagmanager.com/gtm.js…<\/script>','g'],['</head>',0],['<body> <h1>Нотаріальний переклад</h1> …','t']];
 const lab={t:'зміст',r:'індексація',c:'дублі',h:'мови',g:'аналітика'};
 l.forEach((q,i)=>{const y=40+i*27;s+=T(24,y,q[0].replace(/</g,'&lt;').replace(/>/g,'&gt;'),{size:11.5,mono:1,c:'--code-fg'});if(q[1])s+=T(616,y,lab[q[1]],{size:11,a:'end',w:700,c:'--code-fg'})});
 s+=T(24,272,'Ctrl+U — код від сервера · F12 — код після JavaScript',{size:11.5,c:'--code-fg',w:700});
 return svg(640,290,s,'Що шукати в коді сторінки')},
why(){let s='';const q=[['URL у Search Console → Перевірка URL','s'],['«Невідома Google»?','w','Додати в sitemap + внутрішні посилання'],['«Заблоковано robots.txt»?','w','Прибрати Disallow для цієї сторінки'],['«Виключено noindex»?','w','Прибрати noindex, якщо сторінка потрібна'],['«Google вибрав іншу канонічну»?','w','Перевірити дубль: об’єднати або посилити оригінал'],['«Проскановано, не проіндексовано»?','w','Покращити контент, додати посилання, зачекати']];
 q.forEach((r,i)=>{const y=10+i*48;s+=R(10,y,300,38,r[1],8);s+=T(22,y+24,r[0],{size:12,w:600});if(r[2]){s+=A(310,y+19,340,y+19,'--accent');s+=R(342,y,288,38,'a',8);s+=T(354,y+24,r[2],{size:11.5})}if(i<5)s+=L(160,y+38,160,y+48,'--muted')});
 return svg(640,300,s,'Дерево діагностики: чому сторінка не в індексі')},
image(){let s='';s+=T(10,26,'Одне й те саме фото героя сторінки',{size:14,w:700});
 const b=[['JPG з телефона 4000×3000','4,2 МБ',600,'b'],['JPG 1600×1200, якість 80','420 КБ',140,'w'],['WebP 1600×1200, якість 75','160 КБ',60,'a'],['AVIF 1600×1200','110 КБ',42,'a']];
 b.forEach((r,i)=>{const y=50+i*50;s+=T(10,y+18,r[0],{size:12});s+=R(230,y,r[2]*0.6+10,28,r[3],6);s+=T(230+r[2]*0.6+20,y+19,r[1],{size:12.5,w:700,mono:1})});
 s+=T(10,268,'Розмір у пікселях = як на екрані (×2 для Retina). Якість 70–80 — оку не видно різниці.',{size:12,c:'--muted'});
 return svg(640,280,s,'Вага зображення до і після оптимізації')},
backlinks(){let s='';s+=B(250,110,140,60,'Ваш сайт','отримує вагу','d');const src=[['Профільний портал','dofollow ✓','a',10,10],['Каталог / мапи','локальне SEO ✓','a',460,10],['Коментар у блозі','nofollow / ugc','s',10,220],['Купівля на біржі','ризик санкцій','b',460,220],['PR-стаття в ЗМІ','dofollow ✓','a',250,10]];
 src.forEach(q=>{s+=B(q[3],q[4],170,52,q[0],q[1],q[2],12.5);s+=A(q[3]+85,q[4]+(q[4]<100?52:0),320,q[4]<100?108:172,q[2]==='b'?'--bad':q[2]==='s'?'--muted':'--accent',q[2]!=='a')});
 return svg(640,282,s,'Зовнішні посилання')},
competitors(){let s='';s+=B(10,30,150,64,'1. Видача','топ-10 за запитом','i');s+=A(160,62,186,62);s+=B(188,30,150,64,'2. Краулінг','Screaming Frog','n');s+=A(338,62,364,62);s+=B(366,30,150,64,'3. Таблиця','порівняння','n');s+=A(516,62,540,62);s+=B(542,30,90,64,'4. Висновки','','d');
 s+=R(10,124,622,150,'s',8);const h=['Що порівнюємо','Конкурент А','Конкурент Б','Ми'];const r=[['Сторінок в індексі','≈ 340','≈ 90','12'],['Окремі сторінки під мови','так','ні','так'],['Ціна на посадковій','так','так','ні'],['Хлібні крихти, FAQ','так','частково','ні']];
 h.forEach((t,j)=>s+=T(24+j*150,150,t,{size:11.5,w:700,c:'--muted'}));r.forEach((q,i)=>q.forEach((t,j)=>s+=T(24+j*150,176+i*26,t,{size:12,w:j?400:600,c:j===3&&/ні|12/.test(t)?'--bad':'--ink'})));
 return svg(640,282,s,'Процес аналізу конкурентів')},
priority(){let s='';const c=[['Критично — сьогодні','noindex/robots на всьому сайті · 5xx · сайт без HTTPS · вірус','b'],['Високий — цей тиждень','важливі сторінки не в індексі · 404 у меню · дублі title/H1 на послугах','w'],['Середній — цей місяць','ланцюжки редиректів · повільний LCP · вага фото · alt','i'],['Низький — у плані','довгі description · дрібні попередження краулера','s']];
 c.forEach((q,i)=>{const y=10+i*66;s+=R(10,y,620,56,q[2],8);s+=T(24,y+24,q[0],{size:13.5,w:700,c:K[q[2]][1]==='--line'?'--ink':K[q[2]][1]});s+=T(24,y+44,q[1],{size:12})});
 return svg(640,276,s,'Пріоритети виправлень')},
tools(){let s='';const g=[['Google',['Search Console','Analytics 4','Tag Manager','Ads → Keyword Planner','PageSpeed Insights'],'a'],['Краулери',['Screaming Frog','Netpeak Spider','Sitebulb (опц.)'],'i'],['Семантика й конкуренти',['Ahrefs / Semrush','Serpstat','SEO PowerSuite','Google Trends'],'w'],['У браузері',['GS Location Changer','Detailed SEO / SEO Meta in 1 Click','DevTools (F12)'],'s']];
 g.forEach((q,i)=>{const x=10+i*157;s+=R(x,10,147,250,q[2],10);s+=T(x+12,36,q[0],{size:13,w:700});q[1].forEach((t,j)=>{s+=R(x+10,52+j*40,127,32,'n',6);s+=T(x+18,72+j*40,t,{size:11})})});
 return svg(640,270,s,'Набір інструментів SEO-спеціаліста')},
gtm(){let s='';const st=[['GTM-контейнер','код у &lt;head&gt; і &lt;body&gt;','n'],['Тег Google','ID: G-XXXXXXX','i'],['Тригер','All Pages / клік / форма','n'],['Опублікувати','Preview → Submit','d']];
 st.forEach((q,i)=>{const x=10+i*158;s+=B(x,30,146,70,q[0],q[1],q[2],13);if(i<3)s+=A(x+146,65,x+158,65)});
 s+=R(10,130,620,110,'s',8);s+=T(24,156,'Як зв’язано:',{size:13,w:700});s+=T(24,180,'Сайт → GTM (один код на сайті) → теги всередині GTM: GA4, Google Ads, пікселі.',{size:12});s+=T(24,202,'GA4 рахує відвідувачів і конверсії. Search Console — те, що відбувається ДО кліку, у Google.',{size:12});s+=T(24,224,'Перевірка: GTM Preview (Tag Assistant) + GA4 → Адміністратор → DebugView.',{size:12,c:'--muted'});
 return svg(640,250,s,'Як зв’язані Tag Manager і Analytics')},
intent(){let s='';const c=[['Інформаційний','«що таке апостиль»','стаття, гайд','i'],['Навігаційний','«мости бюро перекладів»','головна, контакти','s'],['Комерційний','«найкраще бюро перекладів відгуки»','порівняння, огляд','w'],['Транзакційний','«замовити переклад диплома»','посадкова послуги','a']];
 c.forEach((q,i)=>{const x=10+(i%2)*312,y=10+Math.floor(i/2)*112;s+=R(x,y,300,100,q[3],10);s+=T(x+16,y+28,q[0],{size:14.5,w:700});s+=T(x+16,y+54,q[1],{size:12,mono:1});s+=T(x+16,y+80,'→ '+q[2],{size:12,w:600,c:'--muted'})});
 return svg(632,236,s,'Типи пошукового наміру')},
audit(){let s='';const st=[['Доступи','GSC, GA4, хостинг, WP','n'],['Бекап','копія до змін','w'],['Знімок','краул + експорт GSC','i'],['Аудит','список помилок','n'],['Виправлення','за пріоритетом','a'],['Контроль','перекраул, GSC','d']];
 st.forEach((q,i)=>{const x=10+(i%3)*210,y=20+Math.floor(i/3)*100;s+=B(x,y,190,70,q[0],q[1],q[2],13.5);if(i%3<2)s+=A(x+190,y+35,x+210,y+35);});s+=A(515,90,115,120,'--muted',1);
 return svg(640,200,s,'Порядок роботи з існуючим сайтом')},
redirect(){let s='';s+=T(10,22,'Ланцюжок — погано',{size:13,w:700,c:'--bad'});[['http://site.com/a','w'],['https://site.com/a','w'],['https://site.com/a/','w'],['https://site.com/b/','a']].forEach((q,i)=>{const x=10+i*158;s+=R(x,36,146,40,q[1],8);s+=T(x+73,61,q[0],{size:10.5,mono:1,a:'middle'});if(i<3){s+=A(x+146,56,x+158,56,'--bad');s+=T(x+152,96,'301',{size:10.5,mono:1,c:'--bad',a:'middle'})}});
 s+=T(10,140,'Один крок — добре',{size:13,w:700,c:'--accent'});s+=R(10,154,220,40,'w',8);s+=T(120,179,'http://site.com/a',{size:11,mono:1,a:'middle'});s+=A(230,174,400,174,'--accent');s+=T(315,166,'301',{size:11,mono:1,c:'--accent',a:'middle'});s+=R(400,154,220,40,'a',8);s+=T(510,179,'https://site.com/b/',{size:11,mono:1,a:'middle'});
 s+=T(10,232,'І виправити внутрішні посилання: вони мають вести одразу на фінальну адресу (200).',{size:12,c:'--muted'});
 return svg(640,244,s,'Редиректи: ланцюжок і один крок')}
};
window.ILL=ILL;
})();
