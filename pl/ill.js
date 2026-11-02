/* Diagrams (pl) */
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
pipeline(){let s='';const st=[['Wykrywanie','linki, mapa witryny','i'],['Skanowanie','Googlebot czyta HTML','n'],['Renderowanie','wykonuje JS i CSS','n'],['Indeks','baza stron Google','a'],['Ranking','pozycje w wynikach','d']];
 st.forEach((q,i)=>{const x=10+i*126;s+=B(x,70,112,64,q[0],q[1],q[2],13.5);if(i<4)s+=A(x+112,102,x+126,102)});
 s+=T(10,40,'Droga adresu URL od wykrycia do wyników wyszukiwania',{size:15,w:700});
 s+=T(10,175,'Zatrzymanie na dowolnym etapie = strony nie ma w wyszukiwarce.',{size:12.5,c:'--muted'});
 s+=R(10,190,616,64,'w',8);s+=T(24,214,'Gdzie się psuje:',{size:12.5,w:700,c:'--warn'});
 s+=T(24,236,'brak linków → nie wykryto · robots.txt → nie zeskanowano · noindex / duplikat / słaby tekst → brak w indeksie',{size:12});
 return svg(636,264,s,'Etapy: wykrywanie, skanowanie, renderowanie, indeksowanie, ranking')},
url(){let s='';const parts=[['https://','Protokół','i',70],['www.mosty.com.ua','Domena','a',150],['/uslugy/pereklad-dokumentiv/','Ścieżka (path)','n',236],['?utm_source=fb','Parametr','w',120],['#cena','Fragment','s',62]];
 s+=R(10,30,620,56,'s',28);let x=28;
 parts.forEach(p=>{s+=T(x,64,p[0],{size:13,mono:1,c:K[p[2]][1]==='--line'?'--muted':K[p[2]][1]});s+=L(x,92,x,118,K[p[2]][1]);s+=T(x,134,p[1],{size:12,w:600});x+=p[3]*0.83});
 s+=T(10,175,'Zasady dobrego adresu URL',{size:14,w:700});
 const r=['litery łacińskie, małe litery, myślniki zamiast spacji','krótko i zrozumiale: /pereklad-dokumentiv/','jedna wersja: https + z www lub bez, pozostałe przekierowanie 301','parametry (?utm, ?sort) nie mogą tworzyć duplikatów w indeksie'];
 r.forEach((t,i)=>{s+=C(18,197+i*22,4,'d');s+=T(30,201+i*22,t,{size:12.5})});
 return svg(640,282,s,'Budowa adresu URL')},
status(){let s='';const c=[['2xx','Sukces','200 OK — strona istnieje','a'],['3xx','Przekierowanie','301 na stałe, 302 tymczasowo','i'],['4xx','Błąd klienta','404 brak, 410 usunięto','w'],['5xx','Błąd serwera','500, 502, 503 — strona nie działa','b']];
 c.forEach((q,i)=>{const x=10+i*157;s+=R(x,20,145,170,q[3],10);s+=T(x+16,62,q[0],{size:30,w:700,c:K[q[3]][1]});s+=T(x+16,92,q[1],{size:13.5,w:700});s+=T(x+16,116,q[2].split(' — ')[0],{size:12});if(q[2].split(' — ')[1])s+=T(x+16,134,q[2].split(' — ')[1],{size:12,c:'--muted'})});
 s+=T(10,218,'Googlebot widzi kod przed tekstem strony. Kod decyduje, co stanie się z adresem URL w indeksie.',{size:12.5,c:'--muted'});
 return svg(640,230,s,'Grupy kodów odpowiedzi serwera')},
tree(){let s='';s+=B(250,14,140,44,'Strona główna','/','d');
 const l1=[['Usługi','/uslugy/',40],['Języki','/movy/',190],['Blog','/blog/',340],['Kontakt','/kontakty/',490]];
 l1.forEach(q=>{s+=L(320,58,q[2]+55,92,'--muted');s+=B(q[2],92,110,44,q[0],q[1],'a')});
 const l2=[['Notarialne','/uslugy/notarialnyi/',0],['Przysięgłe','/uslugy/prysiazhnyi/',118],['Angielski','/movy/angliiska/',236],['Artykuł','/blog/apostyl/',354]];
 const par=[95,95,245,395];l2.forEach((q,i)=>{s+=L(par[i],136,q[2]+64,172,'--muted');s+=B(q[2]+10,172,108,44,q[0],q[1].split('/').slice(-2,-1)[0],'n',12.5)});
 s+=B(500,172,120,44,'Polityka','noindex? nie','s',12.5);s+=L(545,136,560,172,'--muted',1.5,1);
 [['1 kliknięcie',36],['2 kliknięcia',114],['3 kliknięcia',194]].forEach(q=>s+=T(632,q[1],q[0],{size:11,c:'--muted',a:'end',mono:1}));
 s+=T(10,248,'Każda ważna strona jest nie głębiej niż 3 kliknięcia od strony głównej, a URL odzwierciedla hierarchię.',{size:12.5,c:'--muted'});
 return svg(640,260,s,'Drzewo struktury strony')},
gsc(sel){sel=sel||'Strony';let s='';s+=R(0,0,640,300,'n',10);s+=R(0,0,640,40,'s',10);s+=T(16,25,'Google Search Console',{size:13,w:700});s+=R(200,10,260,22,'n',11);s+=T(212,25,'Sprawdź dowolny URL',{size:11,c:'--muted'});
 const nav=['Przegląd','Skuteczność','Sprawdzenie adresu URL','Strony','Strony wideo','Mapy witryn','Usunięcia','Podstawowe wskaźniki internetowe','Linki','Ustawienia'];
 nav.forEach((n,i)=>{const y=56+i*23;if(n===sel)s+=R(8,y-15,160,22,'a',11);s+=T(22,y,n,{size:12,w:n===sel?700:400})});
 s+=T(190,70,sel,{size:16,w:700});
 if(sel==='Strony'){s+=R(190,84,200,60,'a',8);s+=T(204,106,'Zindeksowane',{size:12});s+=T(204,132,'126',{size:22,w:700,c:'--accent'});s+=R(400,84,220,60,'s',8);s+=T(414,106,'Niezindeksowane',{size:12});s+=T(414,132,'48',{size:22,w:700,c:'--muted'});
  const rows=[['Strona zawiera przekierowanie','17'],['Wykluczona za pomocą tagu „noindex”','12'],['Duplikat, Google wybrał inną stronę kanoniczną','9'],['Zeskanowana – obecnie nie zindeksowana','6'],['Nie znaleziono (404)','4']];
  rows.forEach((r,i)=>{const y=172+i*24;s+=L(190,y+8,620,y+8);s+=T(196,y,r[0],{size:12});s+=T(612,y,r[1],{size:12,w:600,a:'end',mono:1})})}
 else if(sel==='Mapy witryn'){s+=R(190,84,430,44,'s',8);s+=T(204,111,'https://site.com/ sitemap.xml',{size:12,mono:1});s+=R(540,92,70,28,'d',14);s+=T(575,111,'Prześlij',{size:11,w:600,c:'--accent-ink',a:'middle'});
  s+=T(190,160,'Przesłane mapy witryn',{size:13,w:700});[['sitemap.xml','Powodzenie','128'],['post-sitemap.xml','Powodzenie','42']].forEach((r,i)=>{const y=186+i*26;s+=T(196,y,r[0],{size:12,mono:1});s+=T(420,y,r[1],{size:12,c:'--accent',w:600});s+=T(612,y,r[2],{size:12,a:'end',mono:1});s+=L(190,y+9,620,y+9)})}
 else if(sel==='Sprawdzenie adresu URL'){s+=R(190,84,430,80,'a',8);s+=T(206,108,'Adres URL jest w Google',{size:14,w:700,c:'--accent'});s+=T(206,130,'Strona jest zindeksowana. Kanoniczny wskazany przez użytkownika ✓',{size:12});s+=R(470,138,140,20,'d',10);s+=T(540,152,'SPRAWDŹ URL NA ŻYWO',{size:9.5,w:700,c:'--accent-ink',a:'middle'});
  [['Wykrywanie','Mapy witryn: sitemap.xml'],['Skanowanie','Skanowanie dozwolone? Tak'],['Indeksowanie','Indeksowanie dozwolone? Tak'],['Kanoniczny','użytkownik: …/uslugy/ · Google: ten sam']].forEach((r,i)=>{const y=192+i*24;s+=T(196,y,r[0],{size:12,w:600});s+=T(320,y,r[1],{size:12,c:'--muted'});s+=L(190,y+8,620,y+8)});
  s+=R(470,276,140,18,'s',9);s+=T(540,289,'Poproś o zindeksowanie',{size:9.5,a:'middle'})}
 else if(sel==='Usunięcia'){s+=R(190,90,160,32,'d',16);s+=T(270,111,'+ NOWA PROŚBA',{size:11,w:700,c:'--accent-ink',a:'middle'});s+=T(190,152,'Tymczasowe usunięcie ≈ 6 miesięcy. Nie zastępuje noindex!',{size:12,c:'--warn',w:600});[['…/test-page/','Usunięto'],['…/old-price/','Przetwarzanie']].forEach((r,i)=>{const y=186+i*26;s+=T(196,y,r[0],{size:12,mono:1});s+=T(612,y,r[1],{size:12,a:'end'});s+=L(190,y+9,620,y+9)})}
 else if(sel==='Skuteczność'){s+=T(190,96,'Kliknięcia 1,2 tys.   Wyświetlenia 48 tys.   CTR 2,5%   Pozycja 18,4',{size:12,w:600});let p='';for(let i=0;i<20;i++){const x=190+i*22,y=230-(40+30*Math.sin(i/3)+i*3);p+=(i?'L':'M')+x+','+y.toFixed(0)}s+=`<path d="${p}" style="fill:none;stroke:var(--info);stroke-width:2"/>`;s+=L(190,240,620,240);s+=T(190,270,'Karty: Zapytania · Strony · Kraje · Urządzenia',{size:12,c:'--muted'})}
 else if(sel==='Podstawowe wskaźniki internetowe'){[['Komórki','34 słabe','b'],['Komputery','0 słabych','a']].forEach((r,i)=>{const y=92+i*80;s+=R(190,y,430,64,r[2],8);s+=T(206,y+26,r[0],{size:13,w:700});s+=T(206,y+48,r[1]+' URL · problem: LCP dłuższy niż 4 s',{size:12})})}
 else if(sel==='Linki'){[['Linki zewnętrzne','Najczęściej linkujące witryny'],['Linki wewnętrzne','Najczęściej linkowane strony']].forEach((r,i)=>{const y=92+i*90;s+=R(190,y,430,72,'s',8);s+=T(206,y+28,r[0],{size:13,w:700});s+=T(206,y+50,r[1],{size:12,c:'--muted'})})}
 return svg(640,300,s,'Schemat interfejsu Search Console: '+sel)},
crawler(tab,title){tab=tab||'Internal';let s='';s+=R(0,0,640,300,'n',10);s+=R(0,0,640,36,'s',10);s+=T(14,23,title||'Crawler (Screaming Frog / Netpeak Spider)',{size:12.5,w:700});s+=R(390,8,180,20,'n',10);s+=T(400,22,'https://site.com/',{size:11,mono:1,c:'--muted'});s+=R(576,8,54,20,'d',10);s+=T(603,22,'Start',{size:11,w:700,c:'--accent-ink',a:'middle'});
 const tabs=['Internal','Response Codes','Page Titles','H1','Canonicals','Directives','Hreflang','Sitemaps'];let x=8;tabs.forEach(t=>{const w=t.length*6.6+16;if(t===tab)s+=R(x,44,w,24,'a',6);s+=T(x+8,60,t,{size:11,w:t===tab?700:400});x+=w+4});
 const data={
  'Internal':[['Address','Code','Indexability','Title'],['/','200','Indexable','Biuro tłumaczeń…'],['/uslugy/','200','Indexable','Usługi tłumaczeniowe'],['/blog/?page=2','200','Non-Indexable','Blog – str. 2'],['/old-page/','301','Non-Indexable','—'],['/cart/','200','Non-Indexable','Koszyk']],
  'Response Codes':[['Address','Code','Status','Redirect URL'],['/uslugy/','200','OK',''],['/old-page/','301','Moved Permanently','/uslugy/'],['/akcia-2023/','404','Not Found',''],['http://site.com/','301','Moved Permanently','https://…'],['/api/form','500','Server Error','']],
  'Page Titles':[['Address','Title 1','Length','Issue'],['/','Biuro tłumaczeń Mosty','22','Short'],['/uslugy/','Usługi','7','Duplicate'],['/kontakty/','Usługi','7','Duplicate'],['/blog/apostyl/','','0','Missing'],['/movy/','Tłumaczenia z 40 języków w 1 dzień — ceny, termin…','74','Over 60 chars']],
  'H1':[['Address','H1-1','H1-2','Issue'],['/','Biuro tłumaczeń','','OK'],['/uslugy/','','','Missing'],['/blog/','Blog','Aktualności','Multiple'],['/movy/','Języki','','OK'],['/movy/pl/','Języki','','Duplicate']],
  'Canonicals':[['Address','Canonical Link','Indexability','Issue'],['/uslugy/','/uslugy/','Indexable','Self'],['/uslugy/?sort=a','/uslugy/','Canonicalised','OK'],['/blog/a/','/blog/b/','Canonicalised','Check'],['/movy/','—','Indexable','Missing'],['/kontakty/','http://…','Indexable','Wrong']],
  'Directives':[['Address','Meta Robots','X-Robots-Tag','Result'],['/','index, follow','','OK'],['/search/?q=','noindex, follow','','noindex'],['/dyakuiemo/','noindex','','noindex'],['/uslugy/','noindex','','BŁĄD!'],['/file.pdf','','noindex','noindex']],
  'Hreflang':[['Address','uk','en','Issue'],['/','/','/en/','OK'],['/en/','/','/en/','OK'],['/pl/','—','/en/','Missing Self'],['/ru/','/','','No Return'],['/de/','/ua/','','Bad Code']],
  'Sitemaps':[['Address','In Sitemap','Indexability','Issue'],['/uslugy/','Yes','Indexable','OK'],['/old-page/','Yes','Non-Indexable','301 w mapie witryny'],['/novyi-zapys/','No','Indexable','Not in sitemap'],['/sirota/','Yes','Indexable','Orphan'],['/cart/','Yes','Non-Indexable','noindex w mapie witryny']]};
 const rows=data[tab]||data.Internal;const cx=[14,250,370,490];
 rows.forEach((r,i)=>{const y=96+i*30;if(i===0){s+=R(8,78,624,26,'s',4)}r.forEach((c,j)=>{let col='--ink';if(i>0&&/^(4|5)\d\d$/.test(c)||/BŁĄD|Missing|Duplicate|Wrong|No Return|Bad Code|Orphan|404|Multiple/.test(c))col='--bad';else if(i>0&&(/^3\d\d$/.test(c)||/Non-Indexable|Canonicalised|Check|Over|Short|noindex|Not in/.test(c)))col='--warn';else if(i>0&&(/^200$/.test(c)||/^Indexable$|^OK$|Self/.test(c)))col='--accent';s+=T(cx[j],y,c,{size:i?11.5:10.5,w:i?400:700,mono:j===0||j===1&&/\d/.test(c),c:i?col:'--muted'})});if(i>0)s+=L(8,y+10,632,y+10)});
 return svg(640,300,s,'Schemat crawlera, karta '+tab)},
directives(){let s='';const c=[['robots.txt','„Nie wchodź”','Google nie czyta strony. Ale URL może trafić do indeksu przez linki.','w'],['noindex','„Nie pokazuj”','Google czyta stronę i usuwa ją z indeksu. Skanowanie musi być dozwolone!','b'],['canonical','„To jest główna”','Wskazówka: z kilku podobnych stron pokaż w wynikach jedną.','i'],['301','„Przeniesiono na stałe”','Użytkownik i Google automatycznie trafiają na nowy adres.','a']];
 c.forEach((q,i)=>{const x=10+(i%2)*312,y=10+Math.floor(i/2)*124;s+=R(x,y,300,112,q[3],10);s+=T(x+16,y+30,q[0],{size:16,w:700,mono:1,c:K[q[3]][1]});s+=T(x+16,y+52,q[1],{size:13,w:700});const words=q[2].split(' ');let line='',ly=y+74;words.forEach(w=>{if((line+w).length>44){s+=T(x+16,ly,line,{size:12});ly+=17;line=''}line+=w+' '});s+=T(x+16,ly,line,{size:12})});
 return svg(632,260,s,'Różnica między robots.txt, noindex, canonical i 301')},
canonical(){let s='';s+=B(400,95,220,70,'/uslugy/pereklad/','ORYGINAŁ · canonical na siebie','a',13);
 const d=['/uslugy/pereklad/?utm_source=fb','/uslugy/pereklad/?sort=price','/USLUGY/Pereklad/','http://site.com/uslugy/pereklad/'];
 d.forEach((u,i)=>{const y=14+i*62;s+=R(10,y,270,46,'w',8);s+=T(22,y+21,u,{size:11.5,mono:1});s+=T(22,y+37,i<2?'duplikat → rel=canonical':'duplikat → przekierowanie 301',{size:11,c:'--warn',w:600});s+=A(280,y+23,398,130,i<2?'--info':'--accent',i<2)});
 s+=T(10,276,'Linia przerywana — canonical (wskazówka). Ciągła — 301 (twardo). Linki na stronie prowadzą tylko do oryginału.',{size:12,c:'--muted'});
 return svg(632,288,s,'Duplikaty i oryginał')},
sitemap(){let s='';s+=R(10,10,360,250,'s',8);const lines=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/…">','  <url>','    <loc>https://site.com/uslugy/</loc>','    <lastmod>2026-10-20</lastmod>','  </url>','  <url>','    <loc>https://site.com/movy/en/</loc>','    <lastmod>2026-09-02</lastmod>','  </url>','</urlset>'];lines.forEach((l,i)=>s+=T(22,34+i*20,l.replace(/</g,'&lt;').replace(/>/g,'&gt;'),{size:11,mono:1,c:/loc|lastmod/.test(l)?'--accent':'--ink'}));
 s+=A(372,130,410,130);s+=T(420,40,'W mapie witryny TYLKO:',{size:13,w:700,c:'--accent'});['kod 200','indeksowalne (bez noindex)','kanoniczne adresy URL','https, adresy docelowe'].forEach((t,i)=>{s+=C(428,62+i*22,4,'d');s+=T(440,66+i*22,t,{size:12})});
 s+=T(420,170,'NIE może być:',{size:13,w:700,c:'--bad'});['301/404, duplikaty, ?parametry','noindex, koszyk, wyszukiwanie'].forEach((t,i)=>{s+=C(428,192+i*22,4,'b');s+=T(440,196+i*22,t,{size:12})});
 return svg(632,270,s,'Jak wygląda sitemap.xml')},
hreflang(){let s='';const p=[['uk','/','Ukraiński',260,20],['en','/en/','English',60,170],['pl','/pl/','Polski',460,170]];
 p.forEach(q=>{s+=R(q[3],q[4],120,64,'a',10);s+=T(q[3]+60,q[4]+28,q[0],{size:20,w:700,mono:1,c:'--accent',a:'middle'});s+=T(q[3]+60,q[4]+48,q[1],{size:11.5,mono:1,a:'middle'})});
 s+=A(270,84,140,168,'--info');s+=A(150,168,280,84,'--info');s+=A(370,84,490,168,'--info');s+=A(480,168,360,84,'--info');s+=A(180,210,458,210,'--info');s+=A(458,196,180,196,'--info');
 s+=R(260,250,120,30,'s',8);s+=T(320,270,'x-default → /',{size:11.5,mono:1,a:'middle'});
 s+=T(10,310,'Każda wersja linkuje do wszystkich pozostałych ORAZ do siebie. Kody języków: uk (nie ua), en, pl.',{size:12.5,c:'--muted'});
 return svg(640,320,s,'Wzajemne linki hreflang')},
cluster(){let s='';const cl=[['Klaster 1 → /uslugy/notarialnyi-pereklad/',['tłumaczenie notarialne','tłumaczenie notarialne cena','tłumaczenie z poświadczeniem notarialnym','tłumaczenie poświadczone kijów'],'a'],['Klaster 2 → /uslugy/prysiazhnyi-tlumach/',['tłumacz przysięgły polska','tłumacz przysięgły','tłumaczenie przysięgłe dokumentów'],'i'],['Klaster 3 → /blog/shcho-take-apostyl/',['co to jest apostille','po co jest apostille','apostille czy legalizacja'],'w']];
 cl.forEach((c,i)=>{const y=10+i*98;s+=R(10,y,620,86,c[2],10);s+=T(24,y+24,c[0],{size:12.5,w:700,mono:1});let x=24;c[1].forEach(k=>{const w=k.length*6.4+18;if(x+w>620){return}s+=R(x,y+38,w,28,'n',14);s+=T(x+w/2,y+57,k,{size:11.5,a:'middle'});x+=w+8})});
 return svg(640,306,s,'Klasteryzacja słów kluczowych')},
serp(){let s='';s+=R(10,10,620,250,'n',10);s+=R(26,24,380,30,'s',15);s+=T(42,44,'tłumaczenie notarialne kijów',{size:13});
 const r=[['mosty.com.ua › uslugy','Tłumaczenie notarialne w Kijowie — od 1 dnia | Mosty','Tłumaczenie dokumentów z poświadczeniem notarialnym z 40 języków. Cena od …'],['example.ua › notarialnyi','Tłumaczenie notarialne dokumentów — ceny 2026','Poświadczenie tłumaczenia przez notariusza, apostille, legalizacja…']];
 r.forEach((q,i)=>{const y=86+i*84;s+=T(26,y,q[0],{size:11.5,c:'--muted'});s+=T(26,y+22,q[1],{size:15,c:'--info',w:600});s+=T(26,y+44,q[2],{size:12.5})});
 s+=A(560,108,470,108,'--accent');s+=T(566,112,'title',{size:12,w:700,c:'--accent',mono:1});s+=A(560,130,440,130,'--accent');s+=T(566,134,'description',{size:12,w:700,c:'--accent',mono:1});s+=A(560,86,180,82,'--accent');s+=T(566,90,'URL',{size:12,w:700,c:'--accent',mono:1});
 return svg(640,270,s,'Fragment w wynikach Google')},
links(){let s='';s+=B(250,110,140,60,'Hub: /uslugy/','kategoria','d');const sp=[['Notarialne',40,20],['Przysięgłe',460,20],['Apostille',20,200],['Legalizacja',470,200],['Artykuł-poradnik',250,240]];
 sp.forEach(q=>{s+=B(q[1],q[2],130,48,q[0],null,'a',12.5);s+=A(q[1]+65,q[2]+(q[2]<100?48:0),320,q[2]<100?110:170,'--accent');});
 s+=A(380,264,470,232,'--info',1);s+=T(392,282,'link kontekstowy',{size:11,c:'--info'});
 s+=B(500,120,120,40,'Sierota','0 linków','b',12);
 return svg(640,300,s,'Linkowanie wewnętrzne: hub i satelity')},
wp(sel){sel=sel||'Ustawienia';let s='';s+=R(0,0,640,300,'n',10);s+=`<rect x="0" y="0" width="170" height="300" rx="10" style="fill:var(--code-bg)"/>`;s+=T(16,26,'WordPress /wp-admin',{size:12,w:700,c:'--code-fg'});
 const nav=['Kokpit','Wpisy','Media','Strony','Komentarze','Wygląd','Wtyczki','Użytkownicy','Narzędzia','Ustawienia','Rank Math SEO'];
 nav.forEach((n,i)=>{const y=58+i*22;if(n===sel)s+=`<rect x="0" y="${y-15}" width="170" height="22" style="fill:var(--accent)"/>`;s+=T(16,y,n,{size:12,c:n===sel?'--accent-ink':'--code-fg',w:n===sel?700:400})});
 if(sel==='Ustawienia'){s+=T(196,40,'Ustawienia › Czytanie',{size:15,w:700});s+=R(196,58,420,60,'b',8);s+=`<rect x="212" y="74" width="14" height="14" rx="3" style="fill:var(--surface);stroke:var(--bad);stroke-width:2"/>`;s+=T(236,86,'Proś wyszukiwarki o nieindeksowanie',{size:12,w:600});s+=T(236,106,'Na działającej stronie — ODZNACZ to pole!',{size:11.5,c:'--bad',w:600});
  s+=T(196,152,'Ustawienia › Bezpośrednie odnośniki',{size:15,w:700});['Prosty  ?p=123','Nazwa wpisu  /%postname%/  ← wybierz'].forEach((t,i)=>{const y=180+i*28;s+=C(210,y-4,6,i?'d':'n');s+=T(224,y,t,{size:12,mono:1,w:i?700:400})});s+=T(196,250,'Zmiana struktury odnośników na działającej stronie — tylko z 301!',{size:11.5,c:'--warn',w:600})}
 if(sel==='Rank Math SEO'){s+=T(196,40,'Wtyczka SEO (Rank Math / Yoast)',{size:15,w:700});[['Tytuły i meta','szablony title, noindex dla tagów/archiwów'],['Mapy witryn','/sitemap_index.xml — co uwzględnić'],['Edycja robots.txt','w „Ustawieniach ogólnych”'],['Przekierowania','301 ze starych adresów URL'],['Schema (dane strukturalne)','Organization, LocalBusiness, Article']].forEach((r,i)=>{const y=64+i*44;s+=R(196,y,420,36,'s',6);s+=T(208,y+16,r[0],{size:12.5,w:700});s+=T(208,y+30,r[1],{size:11,c:'--muted'})})}
 if(sel==='Wtyczki'){s+=T(196,40,'Wtyczki › Zainstalowane wtyczki',{size:15,w:700});[['Rank Math SEO','zostaw (1 wtyczka SEO)','a'],['Yoast SEO','usuń — konflikt dwóch wtyczek SEO','b'],['LiteSpeed Cache','zostaw (1 wtyczka cache)','a'],['ShortPixel','kompresja obrazów','a'],['Hello Dolly','niepotrzebna — usuń','w']].forEach((r,i)=>{const y=60+i*44;s+=R(196,y,420,36,r[2],6);s+=T(208,y+16,r[0],{size:12.5,w:700});s+=T(208,y+30,r[1],{size:11})})}
 return svg(640,300,s,'Schemat panelu WordPress: '+sel)},
cwv(){let s='';const g=[['LCP','Wczytanie głównego elementu','≤ 2,5 s','2,5–4 s','> 4 s'],['INP','Reakcja na kliknięcie / dotknięcie','≤ 200 ms','200–500 ms','> 500 ms'],['CLS','Przesunięcia układu','≤ 0,1','0,1–0,25','> 0,25']];
 g.forEach((q,i)=>{const y=14+i*82;s+=T(10,y+20,q[0],{size:20,w:700,mono:1});s+=T(10,y+40,q[1],{size:11.5,c:'--muted'});['a','w','b'].forEach((k,j)=>{s+=R(250+j*126,y+4,120,44,k,6);s+=T(310+j*126,y+31,q[2+j],{size:12.5,w:600,a:'middle'})})});
 ['Dobre','Do poprawy','Słabe'].forEach((t,j)=>s+=T(310+j*126,262,t,{size:11.5,c:'--muted',a:'middle'}));
 return svg(640,272,s,'Progi podstawowych wskaźników internetowych')},
github(){let s='';const st=[['1. Folder na komputerze','D:/Projects/mosty','n'],['2. GitHub Desktop','Commit → Push','n'],['3. Vercel','Import → Deploy','i'],['4. Strona działa','mosty.vercel.app','d']];
 st.forEach((q,i)=>{const x=10+i*158;s+=B(x,40,146,74,q[0],q[1],q[3],13);if(i<3)s+=A(x+146,77,x+158,77)});
 s+=R(10,146,620,84,'s',8);s+=T(24,170,'Własna domena:',{size:12.5,w:700});s+=T(24,192,'Vercel → Settings → Domains → mosty.com.ua · DNS: A @ 76.76.21.21, CNAME www',{size:12,mono:1});s+=T(24,214,'Odtąd każdy Push na GitHub automatycznie aktualizuje stronę.',{size:12});
 return svg(640,240,s,'Publikacja strony przez GitHub i Vercel')},
source(){let s='';s+=`<rect x="10" y="10" width="620" height="270" rx="10" style="fill:var(--code-bg)"/>`;const l=[['<head>',0],['  <title>Tłumaczenie notarialne w Kijowie | Mosty</title>','t'],['  <meta name="description" content="…">','t'],['  <meta name="robots" content="index, follow">','r'],['  <link rel="canonical" href="https://mosty.com.ua/uslugy/">','c'],['  <link rel="alternate" hreflang="en" href="…/en/uslugy/">','h'],['  <script>…googletagmanager.com/gtm.js…<\/script>','g'],['</head>',0],['<body> <h1>Tłumaczenie notarialne</h1> …','t']];
 const lab={t:'treść',r:'indeksowanie',c:'duplikaty',h:'języki',g:'analityka'};
 l.forEach((q,i)=>{const y=40+i*27;s+=T(24,y,q[0].replace(/</g,'&lt;').replace(/>/g,'&gt;'),{size:11.5,mono:1,c:'--code-fg'});if(q[1])s+=T(616,y,lab[q[1]],{size:11,a:'end',w:700,c:'--code-fg'})});
 s+=T(24,272,'Ctrl+U — kod z serwera · F12 — kod po JavaScript',{size:11.5,c:'--code-fg',w:700});
 return svg(640,290,s,'Czego szukać w kodzie strony')},
why(){let s='';const q=[['URL w Search Console → Sprawdzenie adresu URL','s'],['„Adres URL jest nieznany Google”?','w','Dodaj do mapy witryny + linki wewnętrzne'],['„Zablokowana przez plik robots.txt”?','w','Usuń Disallow dla tej strony'],['„Wykluczona przez noindex”?','w','Usuń noindex, jeśli strona jest potrzebna'],['„Google wybrał inną stronę kanoniczną”?','w','Sprawdź duplikat: połącz albo wzmocnij oryginał'],['„Zeskanowana, niezindeksowana”?','w','Popraw treść, dodaj linki, poczekaj']];
 q.forEach((r,i)=>{const y=10+i*48;s+=R(10,y,300,38,r[1],8);s+=T(22,y+24,r[0],{size:12,w:600});if(r[2]){s+=A(310,y+19,340,y+19,'--accent');s+=R(342,y,288,38,'a',8);s+=T(354,y+24,r[2],{size:11.5})}if(i<5)s+=L(160,y+38,160,y+48,'--muted')});
 return svg(640,300,s,'Drzewo diagnostyczne: dlaczego strony nie ma w indeksie')},
image(){let s='';s+=T(10,26,'To samo zdjęcie główne strony',{size:14,w:700});
 const b=[['JPG z telefonu 4000×3000','4,2 MB',600,'b'],['JPG 1600×1200, jakość 80','420 KB',140,'w'],['WebP 1600×1200, jakość 75','160 KB',60,'a'],['AVIF 1600×1200','110 KB',42,'a']];
 b.forEach((r,i)=>{const y=50+i*50;s+=T(10,y+18,r[0],{size:12});s+=R(230,y,r[2]*0.6+10,28,r[3],6);s+=T(230+r[2]*0.6+20,y+19,r[1],{size:12.5,w:700,mono:1})});
 s+=T(10,268,'Rozmiar w pikselach = jak na ekranie (×2 dla Retina). Jakość 70–80 — oko nie widzi różnicy.',{size:12,c:'--muted'});
 return svg(640,280,s,'Waga obrazu przed i po optymalizacji')},
backlinks(){let s='';s+=B(250,110,140,60,'Twoja strona','zyskuje moc','d');const src=[['Portal branżowy','dofollow ✓','a',10,10],['Katalog / mapy','lokalne SEO ✓','a',460,10],['Komentarz na blogu','nofollow / ugc','s',10,220],['Kupiony na giełdzie','ryzyko kar','b',460,220],['Artykuł PR w mediach','dofollow ✓','a',250,10]];
 src.forEach(q=>{s+=B(q[3],q[4],170,52,q[0],q[1],q[2],12.5);s+=A(q[3]+85,q[4]+(q[4]<100?52:0),320,q[4]<100?108:172,q[2]==='b'?'--bad':q[2]==='s'?'--muted':'--accent',q[2]!=='a')});
 return svg(640,282,s,'Linki zewnętrzne')},
competitors(){let s='';s+=B(10,30,150,64,'1. Wyniki','top 10 dla zapytania','i');s+=A(160,62,186,62);s+=B(188,30,150,64,'2. Skanowanie','Screaming Frog','n');s+=A(338,62,364,62);s+=B(366,30,150,64,'3. Tabela','porównanie','n');s+=A(516,62,540,62);s+=B(542,30,90,64,'4. Wnioski','','d');
 s+=R(10,124,622,150,'s',8);const h=['Co porównujemy','Konkurent A','Konkurent B','My'];const r=[['Strony w indeksie','≈ 340','≈ 90','12'],['Osobne strony dla języków','tak','nie','tak'],['Cena na stronie docelowej','tak','tak','nie'],['Okruszki, FAQ','tak','częściowo','nie']];
 h.forEach((t,j)=>s+=T(24+j*150,150,t,{size:11.5,w:700,c:'--muted'}));r.forEach((q,i)=>q.forEach((t,j)=>s+=T(24+j*150,176+i*26,t,{size:12,w:j?400:600,c:j===3&&/nie|12/.test(t)?'--bad':'--ink'})));
 return svg(640,282,s,'Proces analizy konkurencji')},
priority(){let s='';const c=[['Krytyczne — dziś','noindex/robots na całej stronie · 5xx · strona bez HTTPS · wirus','b'],['Wysoki — w tym tygodniu','ważne strony poza indeksem · 404 w menu · zduplikowane title/H1 na usługach','w'],['Średni — w tym miesiącu','łańcuchy przekierowań · wolny LCP · waga zdjęć · alt','i'],['Niski — w planie','długie description · drobne ostrzeżenia crawlera','s']];
 c.forEach((q,i)=>{const y=10+i*66;s+=R(10,y,620,56,q[2],8);s+=T(24,y+24,q[0],{size:13.5,w:700,c:K[q[2]][1]==='--line'?'--ink':K[q[2]][1]});s+=T(24,y+44,q[1],{size:12})});
 return svg(640,276,s,'Priorytety poprawek')},
tools(){let s='';const g=[['Google',['Search Console','Analytics 4','Tag Manager','Keyword Planner','Trends'],'a'],['Audyt',['Screaming Frog','Netpeak Spider','PageSpeed Insights','DevTools (F12)'],'i'],['Słowa kluczowe',['Serpstat','Ahrefs','GS Location Changer'],'w'],['Strona',['WordPress','Rank Math / Yoast','GitHub','Vercel'],'s']];
 g.forEach((q,i)=>{const x=10+i*157;s+=R(x,10,147,250,q[2],10);s+=T(x+12,36,q[0],{size:13,w:700});q[1].forEach((t,j)=>{s+=R(x+10,52+j*40,127,32,'n',6);s+=T(x+18,72+j*40,t,{size:11})})});
 return svg(640,270,s,'Zestaw narzędzi specjalisty SEO')},
gtm(){let s='';const st=[['Kontener GTM','kod w &lt;head&gt; i &lt;body&gt;','n'],['Tag Google','ID: G-XXXXXXX','i'],['Reguła','Wszystkie strony / kliknięcie / formularz','n'],['Opublikuj','Preview → Submit','d']];
 st.forEach((q,i)=>{const x=10+i*158;s+=B(x,30,146,70,q[0],q[1],q[2],13);if(i<3)s+=A(x+146,65,x+158,65)});
 s+=R(10,130,620,110,'s',8);s+=T(24,156,'Jak to się łączy:',{size:13,w:700});s+=T(24,180,'Strona → GTM (jeden kod na stronie) → tagi w GTM: GA4, Google Ads, piksele.',{size:12});s+=T(24,202,'GA4 liczy użytkowników i konwersje. Search Console pokazuje to, co dzieje się PRZED kliknięciem, w Google.',{size:12});s+=T(24,224,'Sprawdzenie: podgląd GTM (Tag Assistant) + GA4 → Administracja → DebugView.',{size:12,c:'--muted'});
 return svg(640,250,s,'Jak łączą się Tag Manager i Analytics')},
intent(){let s='';const c=[['Informacyjna','„co to jest apostille”','artykuł, poradnik','i'],['Nawigacyjna','„mosty biuro tłumaczeń”','strona główna, kontakt','s'],['Komercyjna','„najlepsze biuro tłumaczeń opinie”','porównanie, recenzja','w'],['Transakcyjna','„zamów tłumaczenie dyplomu”','strona usługi','a']];
 c.forEach((q,i)=>{const x=10+(i%2)*312,y=10+Math.floor(i/2)*112;s+=R(x,y,300,100,q[3],10);s+=T(x+16,y+28,q[0],{size:14.5,w:700});s+=T(x+16,y+54,q[1],{size:12,mono:1});s+=T(x+16,y+80,'→ '+q[2],{size:12,w:600,c:'--muted'})});
 return svg(632,236,s,'Rodzaje intencji wyszukiwania')},
audit(){let s='';const st=[['Dostępy','GSC, GA4, hosting, WP','n'],['Kopia zapasowa','kopia przed zmianami','w'],['Stan wyjściowy','skan + eksport GSC','i'],['Audyt','lista błędów','n'],['Poprawki','według priorytetu','a'],['Kontrola','ponowny skan, GSC','d']];
 st.forEach((q,i)=>{const x=10+(i%3)*210,y=20+Math.floor(i/3)*100;s+=B(x,y,190,70,q[0],q[1],q[2],13.5);if(i%3<2)s+=A(x+190,y+35,x+210,y+35);});s+=A(515,90,115,120,'--muted',1);
 return svg(640,200,s,'Kolejność pracy z istniejącą stroną')},
redirect(){let s='';s+=T(10,22,'Łańcuch — źle',{size:13,w:700,c:'--bad'});[['http://site.com/a','w'],['https://site.com/a','w'],['https://site.com/a/','w'],['https://site.com/b/','a']].forEach((q,i)=>{const x=10+i*158;s+=R(x,36,146,40,q[1],8);s+=T(x+73,61,q[0],{size:10.5,mono:1,a:'middle'});if(i<3){s+=A(x+146,56,x+158,56,'--bad');s+=T(x+152,96,'301',{size:10.5,mono:1,c:'--bad',a:'middle'})}});
 s+=T(10,140,'Jeden krok — dobrze',{size:13,w:700,c:'--accent'});s+=R(10,154,220,40,'w',8);s+=T(120,179,'http://site.com/a',{size:11,mono:1,a:'middle'});s+=A(230,174,400,174,'--accent');s+=T(315,166,'301',{size:11,mono:1,c:'--accent',a:'middle'});s+=R(400,154,220,40,'a',8);s+=T(510,179,'https://site.com/b/',{size:11,mono:1,a:'middle'});
 s+=T(10,232,'I popraw linki wewnętrzne: mają prowadzić od razu na adres docelowy (200).',{size:12,c:'--muted'});
 return svg(640,244,s,'Przekierowania: łańcuch i jeden krok')}
};
window.ILL=ILL;
})();
