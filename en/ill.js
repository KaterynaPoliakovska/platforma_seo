/* Diagrams (en) */
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
pipeline(){let s='';const st=[['Discovery','links, sitemap','i'],['Crawling','Googlebot reads the HTML','n'],['Rendering','runs JS and CSS','n'],['Index','Google’s page database','a'],['Ranking','positions in results','d']];
 st.forEach((q,i)=>{const x=10+i*126;s+=B(x,70,112,64,q[0],q[1],q[2],13.5);if(i<4)s+=A(x+112,102,x+126,102)});
 s+=T(10,40,'The path of a URL from discovery to search results',{size:15,w:700});
 s+=T(10,175,'A stop at any stage = the page is not in search.',{size:12.5,c:'--muted'});
 s+=R(10,190,616,64,'w',8);s+=T(24,214,'Where it breaks:',{size:12.5,w:700,c:'--warn'});
 s+=T(24,236,'no links → not discovered · robots.txt → not crawled · noindex / duplicate / thin text → not indexed',{size:12});
 return svg(636,264,s,'Stages: discovery, crawling, rendering, indexing, ranking')},
url(){let s='';const parts=[['https://','Protocol','i',70],['www.mosty.com.ua','Domain','a',150],['/uslugy/pereklad-dokumentiv/','Path','n',236],['?utm_source=fb','Parameter','w',120],['#price','Fragment','s',62]];
 s+=R(10,30,620,56,'s',28);let x=28;
 parts.forEach(p=>{s+=T(x,64,p[0],{size:13,mono:1,c:K[p[2]][1]==='--line'?'--muted':K[p[2]][1]});s+=L(x,92,x,118,K[p[2]][1]);s+=T(x,134,p[1],{size:12,w:600});x+=p[3]*0.83});
 s+=T(10,175,'Rules of a good URL',{size:14,w:700});
 const r=['Latin letters, lowercase, hyphens instead of spaces','short and clear: /pereklad-dokumentiv/','one version: https + with or without www, the rest 301-redirect','parameters (?utm, ?sort) must not create duplicates in the index'];
 r.forEach((t,i)=>{s+=C(18,197+i*22,4,'d');s+=T(30,201+i*22,t,{size:12.5})});
 return svg(640,282,s,'Anatomy of a URL')},
status(){let s='';const c=[['2xx','Success','200 OK — the page exists','a'],['3xx','Redirect','301 permanent, 302 temporary','i'],['4xx','Client error','404 missing, 410 deleted','w'],['5xx','Server error','500, 502, 503 — the site is down','b']];
 c.forEach((q,i)=>{const x=10+i*157;s+=R(x,20,145,170,q[3],10);s+=T(x+16,62,q[0],{size:30,w:700,c:K[q[3]][1]});s+=T(x+16,92,q[1],{size:13.5,w:700});s+=T(x+16,116,q[2].split(' — ')[0],{size:12});if(q[2].split(' — ')[1])s+=T(x+16,134,q[2].split(' — ')[1],{size:12,c:'--muted'})});
 s+=T(10,218,'Googlebot sees the code before the page text. The code decides what happens to the URL in the index.',{size:12.5,c:'--muted'});
 return svg(640,230,s,'Groups of server response codes')},
tree(){let s='';s+=B(250,14,140,44,'Home','/','d');
 const l1=[['Services','/uslugy/',40],['Languages','/movy/',190],['Blog','/blog/',340],['Contacts','/kontakty/',490]];
 l1.forEach(q=>{s+=L(320,58,q[2]+55,92,'--muted');s+=B(q[2],92,110,44,q[0],q[1],'a')});
 const l2=[['Notarized','/uslugy/notarialnyi/',0],['Sworn','/uslugy/prysiazhnyi/',118],['English','/movy/angliiska/',236],['Article','/blog/apostyl/',354]];
 const par=[95,95,245,395];l2.forEach((q,i)=>{s+=L(par[i],136,q[2]+64,172,'--muted');s+=B(q[2]+10,172,108,44,q[0],q[1].split('/').slice(-2,-1)[0],'n',12.5)});
 s+=B(500,172,120,44,'Policy','noindex? no','s',12.5);s+=L(545,136,560,172,'--muted',1.5,1);
 [['1 click',36],['2 clicks',114],['3 clicks',194]].forEach(q=>s+=T(632,q[1],q[0],{size:11,c:'--muted',a:'end',mono:1}));
 s+=T(10,248,'Every important page is no deeper than 3 clicks from the home page, and the URL mirrors the hierarchy.',{size:12.5,c:'--muted'});
 return svg(640,260,s,'Site structure tree')},
gsc(sel){sel=sel||'Pages';let s='';s+=R(0,0,640,300,'n',10);s+=R(0,0,640,40,'s',10);s+=T(16,25,'Google Search Console',{size:13,w:700});s+=R(200,10,260,22,'n',11);s+=T(212,25,'Inspect any URL',{size:11,c:'--muted'});
 const nav=['Overview','Performance','URL inspection','Pages','Video pages','Sitemaps','Removals','Core Web Vitals','Links','Settings'];
 nav.forEach((n,i)=>{const y=56+i*23;if(n===sel)s+=R(8,y-15,160,22,'a',11);s+=T(22,y,n,{size:12,w:n===sel?700:400})});
 s+=T(190,70,sel,{size:16,w:700});
 if(sel==='Pages'){s+=R(190,84,200,60,'a',8);s+=T(204,106,'Indexed',{size:12});s+=T(204,132,'126',{size:22,w:700,c:'--accent'});s+=R(400,84,220,60,'s',8);s+=T(414,106,'Not indexed',{size:12});s+=T(414,132,'48',{size:22,w:700,c:'--muted'});
  const rows=[['Page with redirect','17'],['Excluded by ‘noindex’ tag','12'],['Duplicate, Google chose different canonical','9'],['Crawled – currently not indexed','6'],['Not found (404)','4']];
  rows.forEach((r,i)=>{const y=172+i*24;s+=L(190,y+8,620,y+8);s+=T(196,y,r[0],{size:12});s+=T(612,y,r[1],{size:12,w:600,a:'end',mono:1})})}
 else if(sel==='Sitemaps'){s+=R(190,84,430,44,'s',8);s+=T(204,111,'https://site.com/ sitemap.xml',{size:12,mono:1});s+=R(540,92,70,28,'d',14);s+=T(575,111,'Submit',{size:11,w:600,c:'--accent-ink',a:'middle'});
  s+=T(190,160,'Submitted sitemaps',{size:13,w:700});[['sitemap.xml','Success','128'],['post-sitemap.xml','Success','42']].forEach((r,i)=>{const y=186+i*26;s+=T(196,y,r[0],{size:12,mono:1});s+=T(420,y,r[1],{size:12,c:'--accent',w:600});s+=T(612,y,r[2],{size:12,a:'end',mono:1});s+=L(190,y+9,620,y+9)})}
 else if(sel==='URL inspection'){s+=R(190,84,430,80,'a',8);s+=T(206,108,'URL is on Google',{size:14,w:700,c:'--accent'});s+=T(206,130,'The page is indexed. User-declared canonical ✓',{size:12});s+=R(470,138,140,20,'d',10);s+=T(540,152,'TEST LIVE URL',{size:9.5,w:700,c:'--accent-ink',a:'middle'});
  [['Discovery','Sitemaps: sitemap.xml'],['Crawling','Crawl allowed? Yes'],['Indexing','Indexing allowed? Yes'],['Canonical','user: …/uslugy/ · Google: the same']].forEach((r,i)=>{const y=192+i*24;s+=T(196,y,r[0],{size:12,w:600});s+=T(320,y,r[1],{size:12,c:'--muted'});s+=L(190,y+8,620,y+8)});
  s+=R(470,276,140,18,'s',9);s+=T(540,289,'Request indexing',{size:9.5,a:'middle'})}
 else if(sel==='Removals'){s+=R(190,90,160,32,'d',16);s+=T(270,111,'+ NEW REQUEST',{size:11,w:700,c:'--accent-ink',a:'middle'});s+=T(190,152,'Temporary removal ≈ 6 months. It does not replace noindex!',{size:12,c:'--warn',w:600});[['…/test-page/','Removed'],['…/old-price/','Processing']].forEach((r,i)=>{const y=186+i*26;s+=T(196,y,r[0],{size:12,mono:1});s+=T(612,y,r[1],{size:12,a:'end'});s+=L(190,y+9,620,y+9)})}
 else if(sel==='Performance'){s+=T(190,96,'Clicks 1.2K   Impressions 48K   CTR 2.5%   Position 18.4',{size:12,w:600});let p='';for(let i=0;i<20;i++){const x=190+i*22,y=230-(40+30*Math.sin(i/3)+i*3);p+=(i?'L':'M')+x+','+y.toFixed(0)}s+=`<path d="${p}" style="fill:none;stroke:var(--info);stroke-width:2"/>`;s+=L(190,240,620,240);s+=T(190,270,'Tabs: Queries · Pages · Countries · Devices',{size:12,c:'--muted'})}
 else if(sel==='Core Web Vitals'){[['Mobile','34 poor','b'],['Desktop','0 poor','a']].forEach((r,i)=>{const y=92+i*80;s+=R(190,y,430,64,r[2],8);s+=T(206,y+26,r[0],{size:13,w:700});s+=T(206,y+48,r[1]+' URLs · issue: LCP longer than 4 s',{size:12})})}
 else if(sel==='Links'){[['External links','Top linking sites'],['Internal links','Top linked pages']].forEach((r,i)=>{const y=92+i*90;s+=R(190,y,430,72,'s',8);s+=T(206,y+28,r[0],{size:13,w:700});s+=T(206,y+50,r[1],{size:12,c:'--muted'})})}
 return svg(640,300,s,'Search Console interface diagram: '+sel)},
crawler(tab,title){tab=tab||'Internal';let s='';s+=R(0,0,640,300,'n',10);s+=R(0,0,640,36,'s',10);s+=T(14,23,title||'Crawler (Screaming Frog / Netpeak Spider)',{size:12.5,w:700});s+=R(390,8,180,20,'n',10);s+=T(400,22,'https://site.com/',{size:11,mono:1,c:'--muted'});s+=R(576,8,54,20,'d',10);s+=T(603,22,'Start',{size:11,w:700,c:'--accent-ink',a:'middle'});
 const tabs=['Internal','Response Codes','Page Titles','H1','Canonicals','Directives','Hreflang','Sitemaps'];let x=8;tabs.forEach(t=>{const w=t.length*6.6+16;if(t===tab)s+=R(x,44,w,24,'a',6);s+=T(x+8,60,t,{size:11,w:t===tab?700:400});x+=w+4});
 const data={
  'Internal':[['Address','Code','Indexability','Title'],['/','200','Indexable','Translation agency…'],['/uslugy/','200','Indexable','Translation services'],['/blog/?page=2','200','Non-Indexable','Blog – page 2'],['/old-page/','301','Non-Indexable','—'],['/cart/','200','Non-Indexable','Cart']],
  'Response Codes':[['Address','Code','Status','Redirect URL'],['/uslugy/','200','OK',''],['/old-page/','301','Moved Permanently','/uslugy/'],['/akcia-2023/','404','Not Found',''],['http://site.com/','301','Moved Permanently','https://…'],['/api/form','500','Server Error','']],
  'Page Titles':[['Address','Title 1','Length','Issue'],['/','Mosty Translation Agency','22','Short'],['/uslugy/','Services','7','Duplicate'],['/kontakty/','Services','7','Duplicate'],['/blog/apostyl/','','0','Missing'],['/movy/','Translation from 40 languages in 1 day — prices, turnaround…','74','Over 60 chars']],
  'H1':[['Address','H1-1','H1-2','Issue'],['/','Translation agency','','OK'],['/uslugy/','','','Missing'],['/blog/','Blog','News','Multiple'],['/movy/','Languages','','OK'],['/movy/pl/','Languages','','Duplicate']],
  'Canonicals':[['Address','Canonical Link','Indexability','Issue'],['/uslugy/','/uslugy/','Indexable','Self'],['/uslugy/?sort=a','/uslugy/','Canonicalised','OK'],['/blog/a/','/blog/b/','Canonicalised','Check'],['/movy/','—','Indexable','Missing'],['/kontakty/','http://…','Indexable','Wrong']],
  'Directives':[['Address','Meta Robots','X-Robots-Tag','Result'],['/','index, follow','','OK'],['/search/?q=','noindex, follow','','noindex'],['/dyakuiemo/','noindex','','noindex'],['/uslugy/','noindex','','ERROR!'],['/file.pdf','','noindex','noindex']],
  'Hreflang':[['Address','uk','en','Issue'],['/','/','/en/','OK'],['/en/','/','/en/','OK'],['/pl/','—','/en/','Missing Self'],['/ru/','/','','No Return'],['/de/','/ua/','','Bad Code']],
  'Sitemaps':[['Address','In Sitemap','Indexability','Issue'],['/uslugy/','Yes','Indexable','OK'],['/old-page/','Yes','Non-Indexable','301 in sitemap'],['/novyi-zapys/','No','Indexable','Not in sitemap'],['/sirota/','Yes','Indexable','Orphan'],['/cart/','Yes','Non-Indexable','noindex in sitemap']]};
 const rows=data[tab]||data.Internal;const cx=[14,250,370,490];
 rows.forEach((r,i)=>{const y=96+i*30;if(i===0){s+=R(8,78,624,26,'s',4)}r.forEach((c,j)=>{let col='--ink';if(i>0&&/^(4|5)\d\d$/.test(c)||/ERROR|Missing|Duplicate|Wrong|No Return|Bad Code|Orphan|404|Multiple/.test(c))col='--bad';else if(i>0&&(/^3\d\d$/.test(c)||/Non-Indexable|Canonicalised|Check|Over|Short|noindex|Not in/.test(c)))col='--warn';else if(i>0&&(/^200$/.test(c)||/^Indexable$|^OK$|Self/.test(c)))col='--accent';s+=T(cx[j],y,c,{size:i?11.5:10.5,w:i?400:700,mono:j===0||j===1&&/\d/.test(c),c:i?col:'--muted'})});if(i>0)s+=L(8,y+10,632,y+10)});
 return svg(640,300,s,'Crawler diagram, tab '+tab)},
directives(){let s='';const c=[['robots.txt','“Do not enter”','Google does not read the page. But the URL can still get into the index through links.','w'],['noindex','“Do not show”','Google reads the page and drops it from the index. Crawling must be allowed!','b'],['canonical','“This is the main one”','A hint: show one page out of several similar ones in search.','i'],['301','“Moved permanently”','Users and Google go to the new address automatically.','a']];
 c.forEach((q,i)=>{const x=10+(i%2)*312,y=10+Math.floor(i/2)*124;s+=R(x,y,300,112,q[3],10);s+=T(x+16,y+30,q[0],{size:16,w:700,mono:1,c:K[q[3]][1]});s+=T(x+16,y+52,q[1],{size:13,w:700});const words=q[2].split(' ');let line='',ly=y+74;words.forEach(w=>{if((line+w).length>44){s+=T(x+16,ly,line,{size:12});ly+=17;line=''}line+=w+' '});s+=T(x+16,ly,line,{size:12})});
 return svg(632,260,s,'Difference between robots.txt, noindex, canonical and 301')},
canonical(){let s='';s+=B(400,95,220,70,'/uslugy/pereklad/','ORIGINAL · self-referencing canonical','a',13);
 const d=['/uslugy/pereklad/?utm_source=fb','/uslugy/pereklad/?sort=price','/USLUGY/Pereklad/','http://site.com/uslugy/pereklad/'];
 d.forEach((u,i)=>{const y=14+i*62;s+=R(10,y,270,46,'w',8);s+=T(22,y+21,u,{size:11.5,mono:1});s+=T(22,y+37,i<2?'duplicate → rel=canonical':'duplicate → 301 redirect',{size:11,c:'--warn',w:600});s+=A(280,y+23,398,130,i<2?'--info':'--accent',i<2)});
 s+=T(10,276,'Dashed — canonical (a hint). Solid — 301 (strict). Links on the site point only to the original.',{size:12,c:'--muted'});
 return svg(632,288,s,'Duplicates and the original')},
sitemap(){let s='';s+=R(10,10,360,250,'s',8);const lines=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/…">','  <url>','    <loc>https://site.com/uslugy/</loc>','    <lastmod>2026-10-20</lastmod>','  </url>','  <url>','    <loc>https://site.com/movy/en/</loc>','    <lastmod>2026-09-02</lastmod>','  </url>','</urlset>'];lines.forEach((l,i)=>s+=T(22,34+i*20,l.replace(/</g,'&lt;').replace(/>/g,'&gt;'),{size:11,mono:1,c:/loc|lastmod/.test(l)?'--accent':'--ink'}));
 s+=A(372,130,410,130);s+=T(420,40,'In the sitemap ONLY:',{size:13,w:700,c:'--accent'});['status 200','indexable (no noindex)','canonical URLs','https, final addresses'].forEach((t,i)=>{s+=C(428,62+i*22,4,'d');s+=T(440,66+i*22,t,{size:12})});
 s+=T(420,170,'MUST NOT contain:',{size:13,w:700,c:'--bad'});['301/404, duplicates, ?parameters','noindex, cart, search'].forEach((t,i)=>{s+=C(428,192+i*22,4,'b');s+=T(440,196+i*22,t,{size:12})});
 return svg(632,270,s,'What sitemap.xml looks like')},
hreflang(){let s='';const p=[['uk','/','Ukrainian',260,20],['en','/en/','English',60,170],['pl','/pl/','Polski',460,170]];
 p.forEach(q=>{s+=R(q[3],q[4],120,64,'a',10);s+=T(q[3]+60,q[4]+28,q[0],{size:20,w:700,mono:1,c:'--accent',a:'middle'});s+=T(q[3]+60,q[4]+48,q[1],{size:11.5,mono:1,a:'middle'})});
 s+=A(270,84,140,168,'--info');s+=A(150,168,280,84,'--info');s+=A(370,84,490,168,'--info');s+=A(480,168,360,84,'--info');s+=A(180,210,458,210,'--info');s+=A(458,196,180,196,'--info');
 s+=R(260,250,120,30,'s',8);s+=T(320,270,'x-default → /',{size:11.5,mono:1,a:'middle'});
 s+=T(10,310,'Each version links to all the others AND to itself. Language codes: uk (not ua), en, pl.',{size:12.5,c:'--muted'});
 return svg(640,320,s,'Reciprocal hreflang links')},
cluster(){let s='';const cl=[['Cluster 1 → /uslugy/notarialnyi-pereklad/',['notarized translation','notarized translation price','translation with notarization','certified translation kyiv'],'a'],['Cluster 2 → /uslugy/prysiazhnyi-tlumach/',['sworn translator poland','tłumacz przysięgły','sworn translation of documents'],'i'],['Cluster 3 → /blog/shcho-take-apostyl/',['what is an apostille','why you need an apostille','apostille or legalization'],'w']];
 cl.forEach((c,i)=>{const y=10+i*98;s+=R(10,y,620,86,c[2],10);s+=T(24,y+24,c[0],{size:12.5,w:700,mono:1});let x=24;c[1].forEach(k=>{const w=k.length*6.4+18;if(x+w>620){return}s+=R(x,y+38,w,28,'n',14);s+=T(x+w/2,y+57,k,{size:11.5,a:'middle'});x+=w+8})});
 return svg(640,306,s,'Keyword clustering')},
serp(){let s='';s+=R(10,10,620,250,'n',10);s+=R(26,24,380,30,'s',15);s+=T(42,44,'notarized translation kyiv',{size:13});
 const r=[['mosty.com.ua › uslugy','Notarized translation in Kyiv — from 1 day | Mosty','Translation of documents with notarization from 40 languages. Price from …'],['example.ua › notarialnyi','Notarized translation of documents — prices 2026','Translation certified by a notary, apostille, legalization…']];
 r.forEach((q,i)=>{const y=86+i*84;s+=T(26,y,q[0],{size:11.5,c:'--muted'});s+=T(26,y+22,q[1],{size:15,c:'--info',w:600});s+=T(26,y+44,q[2],{size:12.5})});
 s+=A(560,108,470,108,'--accent');s+=T(566,112,'title',{size:12,w:700,c:'--accent',mono:1});s+=A(560,130,440,130,'--accent');s+=T(566,134,'description',{size:12,w:700,c:'--accent',mono:1});s+=A(560,86,180,82,'--accent');s+=T(566,90,'URL',{size:12,w:700,c:'--accent',mono:1});
 return svg(640,270,s,'A snippet in Google results')},
links(){let s='';s+=B(250,110,140,60,'Hub: /uslugy/','category','d');const sp=[['Notarized',40,20],['Sworn',460,20],['Apostille',20,200],['Legalization',470,200],['Guide article',250,240]];
 sp.forEach(q=>{s+=B(q[1],q[2],130,48,q[0],null,'a',12.5);s+=A(q[1]+65,q[2]+(q[2]<100?48:0),320,q[2]<100?110:170,'--accent');});
 s+=A(380,264,470,232,'--info',1);s+=T(392,282,'contextual link',{size:11,c:'--info'});
 s+=B(500,120,120,40,'Orphan','0 inlinks','b',12);
 return svg(640,300,s,'Internal linking: a hub and satellites')},
wp(sel){sel=sel||'Settings';let s='';s+=R(0,0,640,300,'n',10);s+=`<rect x="0" y="0" width="170" height="300" rx="10" style="fill:var(--code-bg)"/>`;s+=T(16,26,'WordPress /wp-admin',{size:12,w:700,c:'--code-fg'});
 const nav=['Dashboard','Posts','Media','Pages','Comments','Appearance','Plugins','Users','Tools','Settings','Rank Math SEO'];
 nav.forEach((n,i)=>{const y=58+i*22;if(n===sel)s+=`<rect x="0" y="${y-15}" width="170" height="22" style="fill:var(--accent)"/>`;s+=T(16,y,n,{size:12,c:n===sel?'--accent-ink':'--code-fg',w:n===sel?700:400})});
 if(sel==='Settings'){s+=T(196,40,'Settings › Reading',{size:15,w:700});s+=R(196,58,420,60,'b',8);s+=`<rect x="212" y="74" width="14" height="14" rx="3" style="fill:var(--surface);stroke:var(--bad);stroke-width:2"/>`;s+=T(236,86,'Discourage search engines from indexing',{size:12,w:600});s+=T(236,106,'On a live site — UNTICK this box!',{size:11.5,c:'--bad',w:600});
  s+=T(196,152,'Settings › Permalinks',{size:15,w:700});['Plain  ?p=123','Post name  /%postname%/  ← choose'].forEach((t,i)=>{const y=180+i*28;s+=C(210,y-4,6,i?'d':'n');s+=T(224,y,t,{size:12,mono:1,w:i?700:400})});s+=T(196,250,'Change the permalink structure on a live site — only with 301s!',{size:11.5,c:'--warn',w:600})}
 if(sel==='Rank Math SEO'){s+=T(196,40,'SEO plugin (Rank Math / Yoast)',{size:15,w:700});[['Titles & Meta','title templates, noindex for tags/archives'],['Sitemaps','/sitemap_index.xml — what to include'],['Edit robots.txt','in “General Settings”'],['Redirections','301 from old URLs'],['Schema','Organization, LocalBusiness, Article']].forEach((r,i)=>{const y=64+i*44;s+=R(196,y,420,36,'s',6);s+=T(208,y+16,r[0],{size:12.5,w:700});s+=T(208,y+30,r[1],{size:11,c:'--muted'})})}
 if(sel==='Plugins'){s+=T(196,40,'Plugins › Installed Plugins',{size:15,w:700});[['Rank Math SEO','keep (1 SEO plugin)','a'],['Yoast SEO','delete — two SEO plugins conflict','b'],['LiteSpeed Cache','keep (1 cache plugin)','a'],['ShortPixel','image compression','a'],['Hello Dolly','not needed — delete','w']].forEach((r,i)=>{const y=60+i*44;s+=R(196,y,420,36,r[2],6);s+=T(208,y+16,r[0],{size:12.5,w:700});s+=T(208,y+30,r[1],{size:11})})}
 return svg(640,300,s,'WordPress admin diagram: '+sel)},
cwv(){let s='';const g=[['LCP','Loading of the main element','≤ 2.5 s','2.5–4 s','> 4 s'],['INP','Response to a click / tap','≤ 200 ms','200–500 ms','> 500 ms'],['CLS','Layout shifts','≤ 0,1','0,1–0,25','> 0,25']];
 g.forEach((q,i)=>{const y=14+i*82;s+=T(10,y+20,q[0],{size:20,w:700,mono:1});s+=T(10,y+40,q[1],{size:11.5,c:'--muted'});['a','w','b'].forEach((k,j)=>{s+=R(250+j*126,y+4,120,44,k,6);s+=T(310+j*126,y+31,q[2+j],{size:12.5,w:600,a:'middle'})})});
 ['Good','Needs improvement','Poor'].forEach((t,j)=>s+=T(310+j*126,262,t,{size:11.5,c:'--muted',a:'middle'}));
 return svg(640,272,s,'Core Web Vitals thresholds')},
github(){let s='';const st=[['1. Folder on your PC','D:/Projects/mosty','n'],['2. GitHub Desktop','Commit → Push','n'],['3. Vercel','Import → Deploy','i'],['4. Site is live','mosty.vercel.app','d']];
 st.forEach((q,i)=>{const x=10+i*158;s+=B(x,40,146,74,q[0],q[1],q[3],13);if(i<3)s+=A(x+146,77,x+158,77)});
 s+=R(10,146,620,84,'s',8);s+=T(24,170,'Custom domain:',{size:12.5,w:700});s+=T(24,192,'Vercel → Settings → Domains → mosty.com.ua · DNS: A @ 76.76.21.21, CNAME www',{size:12,mono:1});s+=T(24,214,'After that, every Push to GitHub updates the site automatically.',{size:12});
 return svg(640,240,s,'Publishing a site with GitHub and Vercel')},
source(){let s='';s+=`<rect x="10" y="10" width="620" height="270" rx="10" style="fill:var(--code-bg)"/>`;const l=[['<head>',0],['  <title>Notarized translation in Kyiv | Mosty</title>','t'],['  <meta name="description" content="…">','t'],['  <meta name="robots" content="index, follow">','r'],['  <link rel="canonical" href="https://mosty.com.ua/uslugy/">','c'],['  <link rel="alternate" hreflang="en" href="…/en/uslugy/">','h'],['  <script>…googletagmanager.com/gtm.js…<\/script>','g'],['</head>',0],['<body> <h1>Notarized translation</h1> …','t']];
 const lab={t:'content',r:'indexing',c:'duplicates',h:'languages',g:'analytics'};
 l.forEach((q,i)=>{const y=40+i*27;s+=T(24,y,q[0].replace(/</g,'&lt;').replace(/>/g,'&gt;'),{size:11.5,mono:1,c:'--code-fg'});if(q[1])s+=T(616,y,lab[q[1]],{size:11,a:'end',w:700,c:'--code-fg'})});
 s+=T(24,272,'Ctrl+U — code from the server · F12 — code after JavaScript',{size:11.5,c:'--code-fg',w:700});
 return svg(640,290,s,'What to look for in the page source')},
why(){let s='';const q=[['URL in Search Console → URL inspection','s'],['“URL is unknown to Google”?','w','Add to the sitemap + internal links'],['“Blocked by robots.txt”?','w','Remove the Disallow for this page'],['“Excluded by noindex”?','w','Remove noindex if the page is needed'],['“Google chose different canonical”?','w','Check the duplicate: merge or strengthen the original'],['“Crawled, not indexed”?','w','Improve the content, add links, wait']];
 q.forEach((r,i)=>{const y=10+i*48;s+=R(10,y,300,38,r[1],8);s+=T(22,y+24,r[0],{size:12,w:600});if(r[2]){s+=A(310,y+19,340,y+19,'--accent');s+=R(342,y,288,38,'a',8);s+=T(354,y+24,r[2],{size:11.5})}if(i<5)s+=L(160,y+38,160,y+48,'--muted')});
 return svg(640,300,s,'Diagnostic tree: why a page is not indexed')},
image(){let s='';s+=T(10,26,'The same hero photo of the page',{size:14,w:700});
 const b=[['JPG from a phone 4000×3000','4.2 MB',600,'b'],['JPG 1600×1200, quality 80','420 KB',140,'w'],['WebP 1600×1200, quality 75','160 KB',60,'a'],['AVIF 1600×1200','110 KB',42,'a']];
 b.forEach((r,i)=>{const y=50+i*50;s+=T(10,y+18,r[0],{size:12});s+=R(230,y,r[2]*0.6+10,28,r[3],6);s+=T(230+r[2]*0.6+20,y+19,r[1],{size:12.5,w:700,mono:1})});
 s+=T(10,268,'Size in pixels = as on screen (×2 for Retina). Quality 70–80 — the eye sees no difference.',{size:12,c:'--muted'});
 return svg(640,280,s,'Image weight before and after optimization')},
backlinks(){let s='';s+=B(250,110,140,60,'Your site','gains authority','d');const src=[['Industry portal','dofollow ✓','a',10,10],['Directory / maps','local SEO ✓','a',460,10],['Blog comment','nofollow / ugc','s',10,220],['Bought on a link exchange','risk of penalties','b',460,220],['PR article in the media','dofollow ✓','a',250,10]];
 src.forEach(q=>{s+=B(q[3],q[4],170,52,q[0],q[1],q[2],12.5);s+=A(q[3]+85,q[4]+(q[4]<100?52:0),320,q[4]<100?108:172,q[2]==='b'?'--bad':q[2]==='s'?'--muted':'--accent',q[2]!=='a')});
 return svg(640,282,s,'External links')},
competitors(){let s='';s+=B(10,30,150,64,'1. Search results','top 10 for a query','i');s+=A(160,62,186,62);s+=B(188,30,150,64,'2. Crawling','Screaming Frog','n');s+=A(338,62,364,62);s+=B(366,30,150,64,'3. Table','comparison','n');s+=A(516,62,540,62);s+=B(542,30,90,64,'4. Conclusions','','d');
 s+=R(10,124,622,150,'s',8);const h=['What we compare','Competitor A','Competitor B','Us'];const r=[['Pages in the index','≈ 340','≈ 90','12'],['Separate pages per language','yes','no','yes'],['Price on the landing page','yes','yes','no'],['Breadcrumbs, FAQ','yes','partly','no']];
 h.forEach((t,j)=>s+=T(24+j*150,150,t,{size:11.5,w:700,c:'--muted'}));r.forEach((q,i)=>q.forEach((t,j)=>s+=T(24+j*150,176+i*26,t,{size:12,w:j?400:600,c:j===3&&/no|12/.test(t)?'--bad':'--ink'})));
 return svg(640,282,s,'Competitor analysis process')},
priority(){let s='';const c=[['Critical — today','noindex/robots on the whole site · 5xx · site without HTTPS · malware','b'],['High — this week','important pages not indexed · 404 in the menu · duplicate titles/H1 on services','w'],['Medium — this month','redirect chains · slow LCP · photo weight · alt','i'],['Low — in the plan','long descriptions · minor crawler warnings','s']];
 c.forEach((q,i)=>{const y=10+i*66;s+=R(10,y,620,56,q[2],8);s+=T(24,y+24,q[0],{size:13.5,w:700,c:K[q[2]][1]==='--line'?'--ink':K[q[2]][1]});s+=T(24,y+44,q[1],{size:12})});
 return svg(640,276,s,'Fix priorities')},
tools(){let s='';const g=[['Google',['Search Console','Analytics 4','Tag Manager','Keyword Planner','Trends'],'a'],['Audit',['Screaming Frog','Netpeak Spider','PageSpeed Insights','DevTools (F12)'],'i'],['Keywords',['Serpstat','Ahrefs','GS Location Changer'],'w'],['Website',['WordPress','Rank Math / Yoast','GitHub','Vercel'],'s']];
 g.forEach((q,i)=>{const x=10+i*157;s+=R(x,10,147,250,q[2],10);s+=T(x+12,36,q[0],{size:13,w:700});q[1].forEach((t,j)=>{s+=R(x+10,52+j*40,127,32,'n',6);s+=T(x+18,72+j*40,t,{size:11})})});
 return svg(640,270,s,'The SEO specialist’s toolkit')},
gtm(){let s='';const st=[['GTM container','code in &lt;head&gt; and &lt;body&gt;','n'],['Google tag','ID: G-XXXXXXX','i'],['Trigger','All Pages / click / form','n'],['Publish','Preview → Submit','d']];
 st.forEach((q,i)=>{const x=10+i*158;s+=B(x,30,146,70,q[0],q[1],q[2],13);if(i<3)s+=A(x+146,65,x+158,65)});
 s+=R(10,130,620,110,'s',8);s+=T(24,156,'How it connects:',{size:13,w:700});s+=T(24,180,'Site → GTM (one code on the site) → tags inside GTM: GA4, Google Ads, pixels.',{size:12});s+=T(24,202,'GA4 counts visitors and conversions. Search Console shows what happens BEFORE the click, in Google.',{size:12});s+=T(24,224,'Check: GTM Preview (Tag Assistant) + GA4 → Admin → DebugView.',{size:12,c:'--muted'});
 return svg(640,250,s,'How Tag Manager and Analytics connect')},
intent(){let s='';const c=[['Informational','“what is an apostille”','article, guide','i'],['Navigational','“mosty translation agency”','home page, contacts','s'],['Commercial','“best translation agency reviews”','comparison, review','w'],['Transactional','“order diploma translation”','service landing page','a']];
 c.forEach((q,i)=>{const x=10+(i%2)*312,y=10+Math.floor(i/2)*112;s+=R(x,y,300,100,q[3],10);s+=T(x+16,y+28,q[0],{size:14.5,w:700});s+=T(x+16,y+54,q[1],{size:12,mono:1});s+=T(x+16,y+80,'→ '+q[2],{size:12,w:600,c:'--muted'})});
 return svg(632,236,s,'Types of search intent')},
audit(){let s='';const st=[['Access','GSC, GA4, hosting, WP','n'],['Backup','a copy before changes','w'],['Snapshot','crawl + GSC export','i'],['Audit','list of issues','n'],['Fixes','by priority','a'],['Control','re-crawl, GSC','d']];
 st.forEach((q,i)=>{const x=10+(i%3)*210,y=20+Math.floor(i/3)*100;s+=B(x,y,190,70,q[0],q[1],q[2],13.5);if(i%3<2)s+=A(x+190,y+35,x+210,y+35);});s+=A(515,90,115,120,'--muted',1);
 return svg(640,200,s,'Order of work on an existing site')},
redirect(){let s='';s+=T(10,22,'A chain — bad',{size:13,w:700,c:'--bad'});[['http://site.com/a','w'],['https://site.com/a','w'],['https://site.com/a/','w'],['https://site.com/b/','a']].forEach((q,i)=>{const x=10+i*158;s+=R(x,36,146,40,q[1],8);s+=T(x+73,61,q[0],{size:10.5,mono:1,a:'middle'});if(i<3){s+=A(x+146,56,x+158,56,'--bad');s+=T(x+152,96,'301',{size:10.5,mono:1,c:'--bad',a:'middle'})}});
 s+=T(10,140,'One step — good',{size:13,w:700,c:'--accent'});s+=R(10,154,220,40,'w',8);s+=T(120,179,'http://site.com/a',{size:11,mono:1,a:'middle'});s+=A(230,174,400,174,'--accent');s+=T(315,166,'301',{size:11,mono:1,c:'--accent',a:'middle'});s+=R(400,154,220,40,'a',8);s+=T(510,179,'https://site.com/b/',{size:11,mono:1,a:'middle'});
 s+=T(10,232,'And fix internal links: they must point straight to the final address (200).',{size:12,c:'--muted'});
 return svg(640,244,s,'Redirects: a chain and one step')}
};
window.ILL=ILL;
})();
