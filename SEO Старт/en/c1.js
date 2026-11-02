window.L = window.L || [];
/* Block 1. New website on GitHub + Vercel. Example: the Mosty translation agency, mosty.com.ua */
L.push(
{id:'c1-01', title:'How Google finds and indexes pages', dur:'10 min', yt:'how google indexes a website',
 what:'For a page to appear in search, Google has to **discover the URL**, **crawl** the page, **add it to the index** and only then **show it in the results**. If a page is not on Google, the cause is always at one of these stages.',
 svg:[['pipeline',0,0,'Every page’s path to the search results.']],
 nav:['Search Console → URL inspection → paste the address','Google → site:mosty.com.ua'],
 steps:['Open Google and type [[site:mosty.com.ua]]: the approximate number of pages in the index.','Search Console → paste the page address into the top bar → Enter.','Look at the “Page indexing” block: Discovery, Crawl, Indexing.','If it says “URL is on Google”, the page is indexed. If not, read the reason in the same block.'],
 example:[{table:[['Stage','What it needs','What breaks it'],['Discovery','Links to the page, sitemap.xml','An orphan page with no links'],['Crawling','Status 200, allowed in robots.txt','Disallow, 404/5xx errors'],['Indexing','No noindex, unique text','noindex, a duplicate, thin text'],['Results','Matches the query','Stronger competitors']]}],
 mistakes:['Expecting the page to be in search right after publishing. Indexing takes from a few days.','Checking indexing only with site:. It is approximate; only URL inspection is exact.','Blocking a page in robots.txt and expecting it to disappear from the index.'],
 check:['I know the 4 stages: discovery, crawling, indexing, results','I checked my page in URL inspection','I know that site: gives an approximate number'],
 quiz:{q:'A page has no links pointing to it and is not in the sitemap. What will happen?', a:['Google may never discover it','It goes straight to the top','Google deletes the site'], c:0, why:'Without links and a sitemap, Google does not learn about the address.'},
 tests:[{q:'Where can you check exactly whether a page is indexed?', a:['Search Console → URL inspection','Google Trends','Serpstat'], c:0, why:'URL inspection shows Google’s own answer.'},{q:'Google mainly crawls websites as…', a:['A smartphone','A tablet','A TV'], c:0, why:'Google indexes the mobile version of a site.'},{q:'No internal link points to a page and it is not in the sitemap. What is the most likely problem?', a:['Google cannot discover the URL','The page loads slowly','The page has no meta description'], c:0, why:'Without links and a sitemap, the crawler simply does not know the address. This is the discovery stage: add links from relevant pages and put the URL in the sitemap.'},{q:'Which device does Google mostly use to crawl websites?', a:['Smartphone (mobile-first)','Tablet','TV'], c:0, why:'Google indexes the mobile version of a site.'}],
 scenes:[
  {t:'Four stages', app:'Diagram', url:'a page’s path', rows:['# 1. Discovery: Google learns about the URL','# 2. Crawling: the bot downloads the page','# 3. Indexing: the page is added to the database','# 4. Results: the page is shown for a query'], hl:0, say:'Every page goes through four stages. Google learns about the address, crawls the page, adds it to the index and shows it for a query.'},
  {t:'Checking in Search Console', app:'Search Console', url:'URL inspection', side:['Overview','Performance','URL inspection','Pages'], sel:2, rows:['= URL: https://mosty.com.ua/uslugy/notarialnyi-pereklad/','+ URL is on Google','| Crawl allowed? | Yes','| Indexing allowed? | Yes'], hl:1, say:'Paste the address into the top bar of Search Console. Green text means the page is indexed. If not, the reason is shown below.'},
  {t:'Quick check in Google', app:'Google', url:'google.com/search?q=site:mosty.com.ua', rows:['= site:mosty.com.ua','~ About 48 results','~ site:mosty.com.ua/uslugy/ shows only the services section'], hl:0, say:'For a quick estimate, type site colon and the domain into Google. The number is approximate but shows the scale.'}]},

{id:'c1-02', title:'URLs and status codes', dur:'10 min', yt:'http status codes 301 404 seo',
 what:'A URL is the address of a page, and the status code is the first thing the server tells Google: **200** the page exists, **301** it moved permanently, **404** it is missing, **5xx** the server is broken. The code decides what happens to the page in the index.',
 svg:[['url',0,0,'Parts of a URL and the rules.'],['status',0,0,'Groups of status codes.']],
 nav:['Chrome → F12 → Network → F5 → first row → Status','Chrome → Redirect Path extension','Screaming Frog → Response Codes'],
 steps:['Install the Redirect Path extension in Chrome.','Open [[http://mosty.com.ua]]: Redirect Path should show a single 301 to [[https://mosty.com.ua/]].','Check [[www.mosty.com.ua]]: likewise, one 301 to the main version.','Open a non-existent address such as [[/test-404/]]: the code must be 404, not 200.','You can see every code on the site at once in Screaming Frog → Response Codes (Block 2).'],
 example:[{table:[['Code','Meaning','What we do'],['200','The page is available','Normal'],['301','Moved permanently','For URL changes, http→https, www→non-www'],['302','Temporary','If it is permanent, change it to 301'],['404','Not found','If there is an equivalent page: 301 to it. If not: leave 404'],['410','Gone for good','Deliberately deleted pages'],['500/503','Server error','Urgently to the developer']]},{code:`Good: https://mosty.com.ua/uslugy/notarialnyi-pereklad/
Bad:  https://mosty.com.ua/index.php?id=17
Bad:  https://mosty.com.ua/Послуги/Нотаріальний_Переклад`, lang:'URL'}],
 mistakes:['Cyrillic, capital letters and underscores in addresses.','The site opens both with and without www with status 200: two identical websites.','An empty “not found” page returns 200 (soft 404).','A 302 instead of a 301 for a permanent move.'],
 check:['http and www lead to one address with a single 301','A non-existent page returns 404','URLs in Latin letters, with hyphens, lowercase'],
 quiz:{q:'A page has moved to a new address permanently. Which code?', a:['301','302','200'], c:0, why:'301 means a permanent move and passes the signals to the new address.'},
 tests:[{q:'What does 404 mean?', a:['The page was not found','The page has moved','The server is down'], c:0, why:'404 means “not found”.'},{q:'An empty page with status 200 is…', a:['A soft 404','Normal','A redirect'], c:0, why:'Google treats such a page as an error.'},{q:'A page has moved to a new address for good. Which redirect do we set?', a:['302','301','Meta refresh after 5 seconds'], c:1, why:'301 (or 308) means a permanent move. Google passes the old page’s signals to the new one and eventually replaces the URL in the index.'},{q:'What does status 503 mean?', a:['The page was deleted permanently','The service is temporarily unavailable','Everything is fine'], c:1, why:'503 is used during maintenance.'}],
 scenes:[
  {t:'Parts of an address', app:'Diagram', url:'https://mosty.com.ua/uslugy/?utm_source=fb', rows:['| https:// | protocol','| mosty.com.ua | domain','| /uslugy/ | path','| ?utm_source=fb | parameter: can create a duplicate'], hl:3, say:'An address consists of the protocol, domain, path and parameters. Parameters often create duplicates.'},
  {t:'The code in DevTools', app:'Chrome DevTools', url:'F12 → Network', side:['Elements','Network'], sel:1, rows:['|! Name | Status','| old-page/ | 301','| notarialnyi-pereklad/ | 200'], hl:1, say:'Press F12, open the Network tab and reload the page. The first row shows the code: here the old address returns a 301 to the new one.'},
  {t:'Redirect Path', app:'Chrome', url:'http://mosty.com.ua', rows:['> 301 http://mosty.com.ua','> 200 https://mosty.com.ua/','+ One step: correct'], hl:2, say:'The Redirect Path extension shows the whole route: one 301 and then 200. That is how it should be.'}]},

{id:'c1-03', title:'Keywords: Keyword Planner, Trends and Serpstat', dur:'20 min', yt:'keyword research Serpstat Keyword Planner',
 what:'A keyword set (semantic core) is the list of queries the site should be found for. Ideas and search volume come from **Keyword Planner** and **Serpstat**; seasonality and the choice of wording from **Google Trends**. The result is a table: “query, volume, page”.',
 svg:[['serp',0,0,'A user’s query and the snippet in the results.']],
 nav:['Google Ads → Tools → Keyword Planner → Discover new keywords','Serpstat → Keyword research → Keyword selection → Google UA database','Google Trends → Explore → Ukraine → Past 5 years → + Compare'],
 steps:['Write down 10–20 seed keywords: “notarized translation”, “sworn translator”, “apostille”, “diploma translation”.','Keyword Planner → Discover new keywords → seed keywords → Ukraine, Ukrainian → Get results → Download (CSV).','Serpstat → Keyword research → Keyword selection → seed keyword → Export.','Merge the files in Google Sheets and remove duplicates (Data → Data cleanup).','Remove junk: “free”, “essay”, competitors’ brands, cities you do not work in.','Google Trends: compare wordings (“notarized translation” or “translation with notarization”) and pick the more popular one for the title.','Add columns: volume, intent, page (next lesson).'],
 example:[{table:[['Query','Volume','Page'],['notarized translation','1,900','/uslugy/notarialnyi-pereklad/'],['notarized translation price','480','/uslugy/notarialnyi-pereklad/'],['sworn translator poland','720','/uslugy/prysiazhnyi-tlumach/'],['what is an apostille','590','/blog/shcho-take-apostyl/']]}],
 mistakes:['Collecting keywords “by eye” without search volume.','Leaving junk: “free”, “DIY”, competitors’ brands.','Reading Trends data as the number of searches. Trends shows relative interest from 0 to 100.','Collecting keywords only in Ukrainian when clients search in Polish (“tłumacz przysięgły”).'],
 check:['I wrote down seed keywords','I exported keywords from Keyword Planner and Serpstat','I cleaned the list','I chose the wording with Trends','The table has a volume column'],
 quiz:{q:'Where can you see in which months people search for a service the most?', a:['Google Trends','Screaming Frog','Vercel'], c:0, why:'Trends shows the seasonality of a query.'},
 tests:[{q:'What does Keyword Planner show without an active ad campaign?', a:['Search volume ranges','Exact rankings','Backlinks'], c:0, why:'Without ad spend, search volume is shown as ranges.'},{q:'Which queries do we remove from the keyword set?', a:['Irrelevant ones: “free”, competitors’ brands','All with numbers','The highest-volume ones'], c:0, why:'The keyword set holds only queries the site can actually satisfy.'},{q:'The top 10 for “how to choose a sworn translator” contains only guide articles. Which page do we create?', a:['A service page','A blog article','A contacts page'], c:1, why:'The results define the intent. If Google shows articles, people want information. A service page will not match that intent and will not reach the top.'},{q:'What puts queries into one cluster?', a:['Shared URLs in the top 10 results','The same first letter','The same search volume'], c:0, why:'If Google shows the same pages, the intent is the same.'}],
 scenes:[
  {t:'Keyword Planner', app:'Google Ads', url:'Keyword Planner', rows:['= Keywords: notarized translation','= Ukraine · Ukrainian','|! Keyword | Avg. monthly searches','| notarized translation | 1K–10K','[Download keyword ideas]'], hl:3, say:'In Keyword Planner, enter seed keywords and choose Ukraine and the language. You get ideas with search volume and download the file.'},
  {t:'Serpstat: keyword selection', app:'Serpstat', url:'Keyword research → Keyword selection', rows:['= Keyword: notarized translation · Google UA','|! Keyword | Volume | Difficulty','| notarized translation price | 480 | 22','[Export]'], hl:2, say:'Serpstat’s keyword selection gives more precise volume and difficulty. Export it to a spreadsheet.'},
  {t:'Trends: which wording', app:'Google Trends', url:'Compare', rows:['| notarized translation | 100','| translation with notarization | 21','+ The title uses “notarized translation”'], hl:2, say:'In Trends, compare the options. Take the wording people search for more often.'}]},

{id:'c1-04', title:'Clustering and search intent in Serpstat', dur:'15 min', yt:'keyword clustering Serpstat',
 what:'Clustering groups queries that can be covered by **one page**: Serpstat compares the search results, and if many of the same sites appear in the top 10, the queries go into one group. **Intent** (what the person wants) is determined from the results: articles, services or catalogues.',
 svg:[['intent',0,0,'Four types of intent and the page type for each.'],['cluster',0,0,'Clusters for the Mosty website.']],
 nav:['Serpstat → Tools → Clustering → New project','Clustering → Google UA → connection strength 3 → Start','Google (incognito) → query → see what type of pages are in the top 10'],
 steps:['Serpstat → Clustering → New project → paste the cleaned keywords.','Search engine Google UA, connection strength of 3 shared URLs → start.','Review the groups: each group should be about one thing.','For the main queries, open the results: articles in the top → informational intent, services → commercial.','Assign one page and its type to each cluster.'],
 example:[{table:[['Cluster','Intent','Page'],['notarized translation, …price, certified translation','commercial','/uslugy/notarialnyi-pereklad/'],['sworn translator poland, tłumacz przysięgły','commercial','/uslugy/prysiazhnyi-tlumach/'],['what is an apostille, why you need an apostille','informational','/blog/shcho-take-apostyl/']]}],
 mistakes:['Two pages for one cluster: they compete with each other (cannibalization).','An article for a query where the top shows only service pages, or the other way round.','Not checking the clusters manually after automatic grouping.'],
 check:['I ran clustering in Serpstat','I checked the groups manually','I determined intent from the results','Each cluster = one page'],
 quiz:{q:'The top for “what is an apostille” contains only articles. What do we create?', a:['A blog article','A service page with a price','Nothing'], c:0, why:'Informational intent: the person wants an explanation, not an order.'},
 tests:[{q:'What is cannibalization?', a:['Two pages of the site compete for one query','A competitor copies the text','A missing sitemap'], c:0, why:'The rule: one cluster, one page.'},{q:'How does Serpstat decide to group queries?', a:['Shared sites in the top 10','The same length','The same volume'], c:0, why:'Similar results mean the same intent.'},{q:'Where in Serpstat can you see which queries a competitor ranks in the top 10 for?', a:['Domain analysis → Organic keywords, filter position 1–10','Rank tracker','Site audit'], c:0, why:'Organic keywords show the competitor’s positions and URLs for each keyword.'},{q:'What does keyword difficulty 15 mean?', a:['It is relatively easy to reach the top','It is very hard','15 searches per month'], c:0, why:'Difficulty runs from 0 to 100: a low value means weaker competition in the top.'}],
 scenes:[
  {t:'Starting clustering', app:'Serpstat', url:'Clustering', rows:['= Keywords: 240 · Google UA','= Connection strength: 3','[Start clustering]'], hl:2, say:'Paste the keywords, choose Google UA and a connection strength of three. Start.'},
  {t:'The result', app:'Serpstat', url:'Clusters', rows:['# Notarized translation · 18 keywords','# Sworn translator · 9 keywords','# What is an apostille · 6 keywords'], hl:0, say:'Serpstat returns groups. Each group becomes one page of the site.'},
  {t:'Intent from the results', app:'Google', url:'what is an apostille', rows:['| 1 | Article: what is an apostille','| 2 | Article: apostille or legalization','+ Informational: we write an article'], hl:2, say:'Open the results. If the top shows articles, we write an article for this cluster.'}]},

{id:'c1-05', title:'Competitors: GS Location Changer, Serpstat, Ahrefs', dur:'20 min', yt:'competitor analysis Serpstat Ahrefs',
 what:'In SEO, your competitors are the sites in the **top 10 for your queries** in your city. We view the results from the right city with **GS Location Changer**, competitors’ keywords and pages in **Serpstat**, and their backlinks in **Ahrefs**.',
 svg:[['competitors',0,0,'Results → crawl → table → conclusions.']],
 nav:['Chrome → incognito → GS Location Changer → Kyiv, uk, google.com.ua → Search','Serpstat → Domain analysis → Competitors','Serpstat → Domain analysis → Organic keywords → Export','Ahrefs → Site Explorer → Referring domains / Top pages'],
 steps:['Open an incognito window and turn on GS Location Changer: city, language, google.com.ua.','Enter your 10 main queries and write down the domains in the top 10.','The domains that appear most often are your main competitors. Pick 3–5.','Serpstat → Domain analysis → competitor domain → Organic keywords → Export.','Serpstat → Top pages: which pages bring the competitor traffic.','Ahrefs → Site Explorer → Referring domains: where their links come from.','Write down 5 conclusions: which pages, blocks and links your site needs.'],
 example:[{table:[['What we compare','Competitor A','Us'],['A page for every service','yes','no'],['Prices on the landing page','yes','no'],['Pages for languages (Polish, English)','yes','partly'],['Referring domains (Ahrefs)','120','8']]}],
 mistakes:['Looking for competitors outside incognito and without the right city.','Counting only companies you know as competitors, not those in the top.','Copying competitors’ texts instead of ideas for structure.'],
 check:['I checked the results from the right city','I picked 3–5 competitors','I exported their keywords from Serpstat','I looked at their backlinks in Ahrefs','I wrote down conclusions'],
 quiz:{q:'What is GS Location Changer for?', a:['Seeing the results from the right city','Speeding up the site','Checking the sitemap'], c:0, why:'Google results depend on location.'},
 tests:[{q:'Where can you see the queries a competitor ranks for?', a:['Serpstat → Organic keywords','GTM','Vercel'], c:0, why:'The report shows the competitor’s keywords, positions and pages.'},{q:'Where do we look at a competitor’s backlinks?', a:['Ahrefs → Referring domains','Google Trends','GA4'], c:0, why:'Ahrefs has the largest backlink database.'},{q:'Why do we need GS Location Changer?', a:['To change the IP and bypass site restrictions','To see Google results as if you were in another city or country','To speed up the site'], c:1, why:'Results depend on location. The extension passes location and language parameters to Google search, so you see the real top for clients in the right city.'},{q:'Who is your SEO competitor?', a:['Sites in the top 10 for your queries','Only shops nearby','Your supplier'], c:0, why:'In SEO you compete for positions in the results.'}],
 scenes:[
  {t:'Results from a city', app:'GS Location Changer', url:'Kyiv · uk', rows:['= Location: Kyiv · Language: uk','[Search]','| 1 | perekladach.ua','| 2 | mosty.com.ua'], hl:0, say:'Choose the city and the language in the extension and search. Write down who is in the top.'},
  {t:'A competitor’s keywords', app:'Serpstat', url:'Domain analysis → Organic keywords', rows:['|! Keyword | Position | URL','| notarized translation | 2 | /notarialnyi/','[Export]'], hl:1, say:'In Serpstat you see the competitor’s keywords, positions and pages.'},
  {t:'A competitor’s backlinks', app:'Ahrefs', url:'Site Explorer → Referring domains', rows:['|! Referring domain | DR','| osvita-news.ua | 45','| visa-blog.com | 31'], hl:1, say:'In Ahrefs we see which sites link to the competitor. These are ideas for our own links.'}]},

{id:'c1-06', title:'Site structure and landing pages', dur:'15 min', yt:'website structure SEO landing pages',
 what:'The structure is a tree of sections built from the clusters. Each cluster becomes a **landing page**: the page a person lands on from search for a specific query. Important pages should be no deeper than **3 clicks** from the home page.',
 svg:[['tree',0,0,'Structure of the Mosty website.']],
 nav:['Google Sheets → “Structure” sheet: URL · cluster · type · title · H1'],
 steps:['Take the clusters from the clustering lesson.','Lay them out as a tree: Home → Services / Languages / Blog → pages.','Give each page a URL in Latin letters: [[/uslugy/notarialnyi-pereklad/]].','Decide what is NOT indexed: “Thank you”, site search, test pages.','Plan the menu: sections and main services as regular links.'],
 example:[{code:`/                                home page
/uslugy/                         services section
/uslugy/notarialnyi-pereklad/    landing page
/uslugy/prysiazhnyi-tlumach/     landing page
/uslugy/apostyl/                 landing page
/blog/shcho-take-apostyl/        article
/kontakty/                       contacts
/dyakuiemo/                      noindex`, lang:'structure'},{p:'A service landing page: H1 with the main query, price and turnaround, how to order, FAQ, reviews, a form.'}],
 mistakes:['Creating sections “just in case”, without queries.','An important service 4–5 clicks away from the home page.','A menu made of JavaScript buttons without [[<a href>]] links.'],
 check:['I have a site tree built from clusters','Every page has a URL','Depth ≤ 3 clicks','I decided what is kept out of the index'],
 quiz:{q:'What is the main goal of a landing page?', a:['To answer a specific query and lead to an enquiry','To collect all services','To publish news'], c:0, why:'A landing page is created for one cluster and one action.'},
 tests:[{q:'The “Thank you for your order” page should be…', a:['noindex','in the sitemap','in the menu'], c:0, why:'It brings no value from search.'},{q:'What is the maximum depth of important pages?', a:['3 clicks','7 clicks','It does not matter'], c:0, why:'Deep pages are crawled less often.'},{q:'Which of these should usually NOT be indexed?', a:['The “Notarized translation” service page','The site search results page ?s=translation','The article “What is an apostille”'], c:1, why:'Internal search generates an endless number of thin pages and duplicates. They are closed with noindex or in robots.txt, and for queries with demand you create proper landing pages.'},{q:'What is the maximum desirable depth of an important page from the home page?', a:['3 clicks','10 clicks','It does not matter'], c:0, why:'Deep pages are crawled less often and receive less authority.'}],
 scenes:[
  {t:'The site tree', app:'Diagram', url:'mosty.com.ua', rows:['/ Home','  /uslugy/ Services','    /uslugy/notarialnyi-pereklad/','  /blog/','    /blog/shcho-take-apostyl/'], hl:2, say:'Lay the clusters out as a tree: home, sections, pages.'},
  {t:'A landing page', app:'Page outline', url:'/uslugy/notarialnyi-pereklad/', rows:['# H1: Notarized translation of documents','Price from 350 UAH · turnaround from 1 day','How to order · FAQ · Reviews','[Order a translation]'], hl:0, say:'A landing page answers the query: what the service is, how much it costs, how to order.'},
  {t:'What to close', app:'Table', url:'indexing policy', rows:['|! Page | Index','| Services, articles | yes','| /dyakuiemo/ | noindex','| search ?s= | noindex'], hl:2, say:'Service pages are kept out of the index.'}]},

{id:'c1-07', title:'The site on your computer and GitHub', dur:'20 min', yt:'GitHub Desktop commit push for beginners',
 what:'Keep the site files in a folder on your drive, edit them in **VS Code**, and keep a copy with the change history on **GitHub**. **GitHub Desktop** does this with buttons: **Commit** saves a version, **Push** sends it to GitHub.',
 svg:[['github',0,0,'From a folder on your computer to a live site.']],
 nav:['File Explorer → D: → Projects → mosty','VS Code → File → Open Folder','GitHub Desktop → File → Add local repository → create a repository','GitHub Desktop → Commit to main → Publish repository / Push origin'],
 steps:['Create a folder [[D:/Projects/mosty]] (Latin letters, no spaces).','VS Code → File → Open Folder → this folder. Create [[index.html]], [[robots.txt]], [[sitemap.xml]].','Install GitHub Desktop and sign in with your GitHub account.','File → Add local repository → choose the folder → create a repository → Create.','Describe the change in the Summary field → Commit to main.','Publish repository (the first time), then Push origin after every change.','Check the files on github.com in your repository.'],
 example:[{code:`D:/Projects/mosty/
├── index.html
├── uslugy/notarialnyi-pereklad/index.html   → /uslugy/notarialnyi-pereklad/
├── blog/shcho-take-apostyl/index.html
├── img/
├── robots.txt
├── sitemap.xml
├── 404.html
└── vercel.json`, lang:'project folder'},{p:'Write a clear commit description: “Added the apostille page and updated the sitemap”, not “edits”.'}],
 mistakes:['Making a Commit and forgetting to Push: there are no changes on GitHub.','Committing passwords and access keys.','Keeping the only copy of the site on the Desktop.'],
 check:['Project folder on the drive','I open it in VS Code','The repository is created in GitHub Desktop','I made a Commit and a Push','I see the files on github.com'],
 quiz:{q:'You made a Commit, but there are no changes on GitHub. What is missing?', a:['Push origin','A new repository','A restart'], c:0, why:'Commit saves locally, Push sends to GitHub.'},
 tests:[{q:'How do you undo a change that broke everything?', a:['History → Revert changes in commit → Push','Delete the repository','Do nothing'], c:0, why:'Revert cancels the commit and keeps the history.'},{q:'How should the project folder be named?', a:['mosty','My site (new)','SITE final 2'], c:0, why:'Latin letters, no spaces.'},{q:'You made a Commit, but there are no changes on github.com. What is missing?', a:['Push origin','A new repository','Restarting the computer'], c:0, why:'Commit saves a version on your computer. Push sends it to GitHub.'},{q:'Yesterday’s commit broke robots.txt. How do you quickly roll it back?', a:['History → Revert changes in commit → Push','Delete the repository','Wait for Google to fix it'], c:0, why:'Revert creates a new commit that cancels the wrong changes; the history stays intact.'}],
 scenes:[
  {t:'The folder in VS Code', app:'VS Code', url:'mosty', side:['index.html','uslugy','blog','robots.txt','sitemap.xml'], sel:0, rows:['> <title>Mosty Translation Agency</title>','~ Ctrl+S to save'], hl:0, say:'Open the project folder in VS Code and edit the files. Ctrl+S saves.'},
  {t:'Commit', app:'GitHub Desktop', url:'mosty · main', side:['Changes 2','History'], sel:0, rows:['☑ sitemap.xml','☑ uslugy/apostyl/index.html','= Summary: Added the apostille page','[Commit to main]'], hl:3, say:'GitHub Desktop shows the changed files. Write a description and click Commit to main.'},
  {t:'Push', app:'GitHub Desktop', url:'mosty · main', rows:['[Push origin ↑1]','+ Changes are on github.com/yourlogin/mosty'], hl:0, say:'Click Push origin and the changes appear on GitHub.'}]},

{id:'c1-08', title:'Publishing on Vercel and a custom domain', dur:'15 min', yt:'Vercel deploy from GitHub custom domain',
 what:'**Vercel** takes a repository from GitHub and publishes the site with HTTPS. Once connected, every **Push** updates the site automatically. Redirects and headers are set in the [[vercel.json]] file.',
 svg:[['github',0,0,'GitHub → Vercel → website.'],['redirect',0,0,'A redirect must be a single step.']],
 nav:['vercel.com → Continue with GitHub','Vercel → Add New… → Project → Import → Deploy','Vercel → Project → Settings → Domains → Add','Vercel → Project → Deployments'],
 steps:['vercel.com → sign in with GitHub.','Add New… → Project → click Import next to the [[mosty]] repository.','Framework Preset: Other, Build Command and Output Directory empty → Deploy.','Check the site at [[mosty.vercel.app]].','Settings → Domains → Add → [[mosty.com.ua]]. Add the DNS records Vercel shows at your registrar.','Add [[www.mosty.com.ua]] and set it to Redirect to the main domain.','Create [[vercel.json]] (example below) → Commit → Push. Check the redirects with Redirect Path.'],
 example:[{code:`{
  "trailingSlash": true,
  "redirects": [
    { "source": "/poslugi/notarialnyj/", "destination": "/uslugy/notarialnyi-pereklad/", "permanent": true }
  ]
}`, lang:'vercel.json'},{table:[['Problem','Cause','Fix'],['404 on the home page','index.html is not in the repository root','Settings → Root Directory → the folder with index.html'],['404 on the home page','Output Directory is filled in','Clear the field → Redeploy'],['The site looks old','No Push was made','GitHub Desktop → Push origin']]}],
 mistakes:['Letting both mosty.vercel.app and mosty.com.ua be indexed: a duplicate site.','index.html in a subfolder of the repository: Vercel shows 404.','Making a 301 with meta refresh instead of vercel.json.'],
 check:['The site is published on Vercel','A custom domain with HTTPS is connected','www leads to the main version','vercel.json redirects work','Push updates the site'],
 quiz:{q:'Vercel shows 404, and the repository contains only a “site” folder. Why?', a:['index.html is not in the root: set the Root Directory','There is no sitemap','Google blocked it'], c:0, why:'Vercel looks for index.html in the root or in the Root Directory folder.'},
 tests:[{q:'How do you make a 301 on Vercel?', a:['redirects in vercel.json with permanent: true','The title tag','It is impossible'], c:0, why:'Vercel reads vercel.json and returns a server-side redirect.'},{q:'What updates the site on Vercel?', a:['A Push to the main branch','Reloading the browser','An email to support'], c:0, why:'Vercel watches the repository and publishes the new version.'},{q:'How do you make a permanent redirect /old-page/ → /new-page/ on Vercel?', a:['A redirects block in vercel.json with permanent: true','A meta refresh tag','It is impossible'], c:0, why:'Vercel reads vercel.json and returns a permanent server-side redirect (308, equivalent to 301).'},{q:'Why do Vercel Preview addresses not get into Google?', a:['Vercel adds the x-robots-tag: noindex header to them','They are paid','Google does not crawl Vercel'], c:0, why:'Test deployments are blocked from indexing with a header by default.'}],
 scenes:[
  {t:'Import', app:'Vercel', url:'vercel.com/new', rows:['| yourlogin/mosty | [Import]','= Framework Preset: Other','[Deploy]'], hl:0, say:'Sign in with GitHub, click Import next to the repository and Deploy.'},
  {t:'Domain', app:'Vercel', url:'Settings → Domains', side:['General','Domains'], sel:1, rows:['= mosty.com.ua [Add]','| A | @ | 76.76.21.21','| CNAME | www | cname.vercel-dns.com','+ Valid Configuration'], hl:3, say:'Add the domain and enter the records Vercel shows at your registrar.'},
  {t:'Redirects', app:'VS Code', url:'vercel.json', rows:['> "redirects": [','>   { "source": "/poslugi/notarialnyj/",','>     "destination": "/uslugy/notarialnyi-pereklad/", "permanent": true }'], hl:2, say:'In vercel.json, set permanent redirects from old addresses to new ones.'}]},

{id:'c1-09', title:'SEO tags in <head>: title, description, canonical, hreflang', dur:'15 min', yt:'seo meta tags title description canonical',
 what:'The [[<head>]] block of every page holds the main SEO signals: **title** and **description** (visible in the results), **robots** (index or not), **canonical** (the main version of the page) and **hreflang** (language versions). Plus one **H1** on the page.',
 svg:[['source',0,0,'What must be in the page code.'],['serp',0,0,'Title and description in the results.']],
 nav:['VS Code → page file → <head> block','Chrome → Ctrl+U → Ctrl+F “canonical”','Chrome → Detailed SEO extension → Overview'],
 steps:['Copy the template below into every page.','Title: the main query at the start, 50–60 characters, the brand at the end.','Description: 140–160 characters, a benefit and a call to action.','Canonical: the full address of this same page with https.','Hreflang: the same block on all language versions; the language code is [[uk]], not [[ua]].','One H1 with the main query.','Check the page with the Detailed SEO extension.'],
 example:[{code:`<!doctype html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Notarized translation in Kyiv from 1 day | Mosty</title>
  <meta name="description" content="Translation of documents with notarization from 40 languages. Price from 350 UAH, turnaround from 1 day.">
  <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
  <link rel="alternate" hreflang="uk" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
  <link rel="alternate" hreflang="en" href="https://mosty.com.ua/en/services/notarized-translation/">
  <link rel="alternate" hreflang="x-default" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
</head>
<body>
  <h1>Notarized translation of documents</h1>
</body>
</html>`, lang:'html'}],
 mistakes:['The same title on every page.','A relative canonical ([[/uslugy/]]) or one with http.','hreflang="ua": the code for Ukrainian is [[uk]].','Several H1s, or an H1 used for the logo.'],
 check:['A unique title of 50–60 characters','A description with a benefit','Self-referencing, absolute https canonical','Reciprocal hreflang, language code uk','One H1'],
 quiz:{q:'What is the correct hreflang for Ukrainian?', a:['uk','ua','ukr'], c:0, why:'UA is the country code; the language is uk.'},
 tests:[{q:'The description affects…', a:['Click-through rate in the results','Rankings directly','Speed'], c:0, why:'A good description increases CTR.'},{q:'On the original page, the canonical points…', a:['To the page itself','To the home page','To a competitor'], c:0, why:'A self-referencing canonical protects against duplicates with parameters.'},{q:'How many H1s should a page have?', a:['One','As many as you like','None'], c:0, why:'One H1 names the main topic of the page. Other sections get H2 and H3.'},{q:'What should the canonical on the original page be?', a:['The absolute address of this same page','The home page address','A relative path ../'], c:0, why:'A self-referencing absolute canonical protects against duplicates with parameters.'}],
 scenes:[
  {t:'Page source', app:'Ctrl+U', url:'view-source:mosty.com.ua/uslugy/notarialnyi-pereklad/', rows:['> <title>Notarized translation in Kyiv from 1 day | Mosty</title>','> <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">','> <link rel="alternate" hreflang="en" href="…/en/services/notarized-translation/">'], hl:1, say:'Ctrl+U opens the source. Check the title, canonical and hreflang.'},
  {t:'In the results', app:'Google', url:'notarized translation kyiv', rows:['~ mosty.com.ua › uslugy','# Notarized translation in Kyiv from 1 day | Mosty','Translation with notarization from 40 languages…'], hl:1, say:'The title becomes the headline in the results, the description the text below it.'},
  {t:'Detailed SEO', app:'Detailed SEO Extension', url:'Overview', rows:['| Title | 49 characters ✓','| Canonical | self ✓','| H1 | 1 ✓','| Robots | index, follow'], hl:1, say:'The Detailed SEO extension shows all the tags in one click.'}]},

{id:'c1-10', title:'robots.txt', dur:'10 min', yt:'robots.txt setup seo',
 what:'[[robots.txt]] sits in the site root and tells crawlers **where not to go**. It controls crawling, **not indexing**: to remove a page from search, you need noindex.',
 svg:[['directives',0,0,'robots.txt, noindex, canonical and 301: what each is for.']],
 nav:['VS Code → robots.txt in the root → Commit → Push','Chrome → mosty.com.ua/robots.txt','Search Console → Settings → robots.txt'],
 steps:['Create [[robots.txt]] in the root of the project folder following the example.','Block only technical URLs: site search, sorting parameters.','Add a Sitemap line with the full address.','Commit → Push. Open [[mosty.com.ua/robots.txt]]: does the file open?','Search Console → Settings → robots.txt: status “Fetched”, no errors.'],
 example:[{code:`User-agent: *
Disallow: /*?s=
Disallow: /*?sort=
Disallow: /*?utm_

Sitemap: https://mosty.com.ua/sitemap.xml`, lang:'robots.txt (static site)'},{code:`User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /?s=

Sitemap: https://mosty.com.ua/sitemap_index.xml`, lang:'robots.txt (WordPress)'}],
 mistakes:['[[Disallow: /]] left over after development: the whole site is blocked.','Blocking a page in robots.txt to remove it from search.','Blocking CSS and JS: Google cannot see the page the way a person does.'],
 check:['robots.txt opens with status 200','There is no Disallow: /','There is a Sitemap line','Status in Search Console is “Fetched”'],
 quiz:{q:'A page needs to be removed from search. Will robots.txt help?', a:['No: you need noindex, and crawling must be allowed','Yes, Disallow removes it from the index','Yes, for 30 days'], c:0, why:'If the page is blocked in robots.txt, Google will not see the noindex.'},
 tests:[{q:'What does “Disallow: /” block?', a:['The whole site','Nothing','Only the home page'], c:0, why:'The slash means every address.'},{q:'Where does robots.txt live?', a:['In the root: mosty.com.ua/robots.txt','In any folder','In Search Console'], c:0, why:'Crawlers look for the file only in the domain root.'},{q:'A page is already indexed and must be removed from search. What do we do?', a:['Add Disallow in robots.txt','Set noindex and leave the page open for crawling','Delete the sitemap'], c:1, why:'If you block the page in robots.txt, the crawler will not read the noindex and the URL may stay in the index. First noindex with the page open; Google crawls it and removes it.'},{q:'What does the line “Disallow: /” block?', a:['Nothing','The whole site','Only the home page'], c:1, why:'The slash means every address of the site.'}],
 scenes:[
  {t:'The file', app:'Chrome', url:'mosty.com.ua/robots.txt', rows:['> User-agent: *','> Disallow: /*?s=','> Sitemap: https://mosty.com.ua/sitemap.xml'], hl:1, say:'Open the file in the browser. Only site search is blocked here, and the sitemap is listed.'},
  {t:'A dangerous line', app:'Chrome', url:'robots.txt', rows:['> User-agent: *','> Disallow: /','! The WHOLE site is blocked'], hl:2, say:'The line Disallow slash blocks the whole site. Check for it after every launch.'},
  {t:'The report in Search Console', app:'Search Console', url:'Settings → robots.txt', side:['Settings','robots.txt'], sel:1, rows:['|! File | Status','| https://mosty.com.ua/robots.txt | Fetched'], hl:1, say:'In Search Console Settings you can see which version of the file Google fetched.'}]},

{id:'c1-11', title:'sitemap.xml', dur:'10 min', yt:'sitemap xml search console',
 what:'[[sitemap.xml]] is the list of pages you want in the index. It contains only pages with status **200**, without **noindex** and **canonical** ones. It is submitted in Search Console.',
 svg:[['sitemap',0,0,'What belongs in a sitemap and what does not.'],['gsc','Sitemaps',0,'Submitting in Search Console.']],
 nav:['VS Code → sitemap.xml → Commit → Push','Search Console → Indexing → Sitemaps → Submit','Screaming Frog → Sitemaps → URLs not in Sitemap'],
 steps:['Create [[sitemap.xml]] in the root following the example: every page that should be in search.','Full addresses with https and a trailing slash, exactly as in the canonical.','Commit → Push. Open [[mosty.com.ua/sitemap.xml]].','Search Console → Sitemaps → enter [[sitemap.xml]] → Submit.','The status should become “Success”.','After adding a new page, add it to the sitemap and Push.'],
 example:[{code:`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mosty.com.ua/</loc>
    <lastmod>2026-10-28</lastmod>
  </url>
  <url>
    <loc>https://mosty.com.ua/uslugy/notarialnyi-pereklad/</loc>
    <lastmod>2026-10-20</lastmod>
  </url>
</urlset>`, lang:'sitemap.xml'}],
 mistakes:['Pages with 301, 404 or noindex in the sitemap.','Addresses without https or without the slash, not matching the canonical.','Forgetting to add a new page.'],
 check:['sitemap.xml opens','Only pages with status 200 and no noindex','Submitted in Search Console, status “Success”'],
 quiz:{q:'A page in the sitemap returns 301. What do we do?', a:['Replace it with the final address','Leave it','Add noindex'], c:0, why:'The sitemap holds only final addresses with status 200.'},
 tests:[{q:'Where do you submit a sitemap?', a:['Search Console → Sitemaps','GA4','Vercel'], c:0, why:'Search Console accepts the sitemap and shows its status.'},{q:'Does a sitemap guarantee indexing?', a:['No, it is only a wish list','Yes','Only for the blog'], c:0, why:'Google decides on its own what to index.'},{q:'Which address must NOT be in the sitemap?', a:['https://mosty.com.ua/uslugy/apostyl/ (200, self-canonical)','https://mosty.com.ua/old-page/ (301 to a new page)','https://mosty.com.ua/blog/shcho-take-apostyl/ (200, indexed)'], c:1, why:'The sitemap holds only canonical pages with status 200. Replace the redirect with the final address.'},{q:'What is the maximum number of URLs in one sitemap file?', a:['50,000','1,000','Unlimited'], c:0, why:'The limit is 50,000 URLs or 50 MB uncompressed.'}],
 scenes:[
  {t:'The file', app:'Chrome', url:'mosty.com.ua/sitemap.xml', rows:['> <url><loc>https://mosty.com.ua/uslugy/notarialnyi-pereklad/</loc></url>','> <url><loc>https://mosty.com.ua/blog/shcho-take-apostyl/</loc></url>'], hl:0, say:'A sitemap is a list of addresses in XML format.'},
  {t:'Submitting', app:'Search Console', url:'Sitemaps', side:['Pages','Sitemaps'], sel:1, rows:['= https://mosty.com.ua/ sitemap.xml','[Submit]','| sitemap.xml | Success | 24'], hl:2, say:'Enter the address and submit. The status Success means Google has read the file.'},
  {t:'Checking with a crawler', app:'Screaming Frog', url:'Sitemaps', side:['Sitemaps'], sel:0, rows:['| URLs not in Sitemap | 2','| Non-Indexable URLs in Sitemap | 1'], hl:1, say:'Screaming Frog shows pages missing from the sitemap and addresses that should not be in it.'}]},

{id:'c1-12', title:'Search Console: setup and URL inspection', dur:'15 min', yt:'Google Search Console setup',
 what:'**Search Console** shows how Google sees the site: what is indexed, which queries you appear for, which errors there are. We add a property, verify ownership, submit the sitemap and inspect pages.',
 svg:[['gsc','URL inspection',0,'URL inspection: is the page in the index?']],
 nav:['search.google.com/search-console → Add property','Domain (DNS) or URL prefix (meta tag)','URL inspection → Test live URL → Request indexing'],
 steps:['Search Console → Add property.','If you have DNS access: “Domain” → a TXT record at the registrar. If not: “URL prefix” → meta tag.','Put the meta tag into the home page [[<head>]] → Commit → Push → Verify.','Sitemaps → submit sitemap.xml.','URL inspection → paste a new page → Test live URL.','If it is available, click “Request indexing”.','Settings → Users and permissions: add colleagues with the right access level.'],
 example:[{table:[['Section','What is there'],['Performance','Queries, clicks, impressions, positions'],['URL inspection','The status of a single page'],['Pages','What is indexed and why the rest is not'],['Sitemaps','Submitting the sitemap'],['Removals','Temporarily hiding a page'],['Settings','robots.txt, crawl stats, users']]}],
 mistakes:['Deleting the verification meta tag: access disappears.','Adding the http version instead of https.','Requesting indexing for dozens of pages a day: there is a daily limit.'],
 check:['The property is verified','The sitemap is submitted','I tested a page live','I requested indexing of a new page'],
 quiz:{q:'Which property type covers www, non-www and http?', a:['Domain','URL prefix','Both'], c:0, why:'A Domain property covers every version and subdomain.'},
 tests:[{q:'What do you do after publishing a new page?', a:['URL inspection → Request indexing','Nothing','Delete the sitemap'], c:0, why:'The request speeds up crawling of an important page.'},{q:'Where do you see which queries the site appears for?', a:['Performance','Pages','Removals'], c:0, why:'The Performance report shows queries, clicks and impressions.'},{q:'Where do you see which search queries bring the site clicks from Google?', a:['Google Tag Manager → Tags','Search Console → Performance','Google Ads → Campaigns'], c:1, why:'The Performance report in Search Console shows queries, impressions, clicks, CTR and average position. GA4 sees visits but not queries (unless linked to GSC).'},{q:'What must you do in GTM for the changes to work?', a:['Submit → Publish','Nothing','Restart the computer'], c:0, why:'Container changes only take effect after publishing.'}],
 scenes:[
  {t:'Add property', app:'Search Console', url:'Add property', rows:['| Domain | URL prefix','| mosty.com.ua | https://mosty.com.ua/','[Continue]'], hl:1, say:'Choose the property type. Domain is verified via DNS, URL prefix via a meta tag.'},
  {t:'Meta tag', app:'VS Code', url:'index.html', rows:['> <meta name="google-site-verification" content="AbC123…">','~ in the home page <head> → Push → Verify'], hl:0, say:'Put the meta tag into the head of the home page, Push and click Verify.'},
  {t:'URL inspection', app:'Search Console', url:'URL inspection', side:['URL inspection'], sel:0, rows:['= https://mosty.com.ua/uslugy/apostyl/','! URL is not on Google','[Test live URL]','[Request indexing]'], hl:3, say:'For a new page, test the address live and request indexing.'}]},

{id:'c1-13', title:'GA4 via Google Tag Manager', dur:'15 min', yt:'GA4 Google Tag Manager setup',
 what:'**GA4** counts visitors and leads, **GTM** installs tracking without editing code. Only the GTM code goes on the site, and GA4 is added inside GTM as a Google tag.',
 svg:[['gtm',0,0,'Site → GTM → GA4.']],
 nav:['analytics.google.com → Admin → Create property → Web data stream → G-… ID','tagmanager.google.com → Create container → GTM code in <head> and after <body>','GTM → Tags → New → Google tag → G-… → Initialization – All Pages','GTM → Preview → Submit → Publish'],
 steps:['GA4: create a property and a web stream for [[https://mosty.com.ua]]. Copy the [[G-…]] ID.','GTM: create a “Web” container. Copy the two code snippets.','Put the first snippet as high as possible in [[<head>]] and the second right after [[<body>]] on every page → Commit → Push.','GTM → Tags → New → Google tag → G-… ID → trigger Initialization – All Pages → Save.','Preview → enter the site address → the tag fired.','Submit → Publish.','GA4 → Reports → Realtime: open the site on your phone and you should appear.','GA4 → Admin → Product links → Search Console → Link.'],
 example:[{code:`<!-- 1. In <head> -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- 2. Right after <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`, lang:'html'}],
 mistakes:['Not publishing the GTM container: there will be no data.','Installing GA4 both in the code and in GTM: the data doubles.','Not marking the enquiry as a key event.'],
 check:['GTM code on every page','A Google tag with the G-… ID is published','I can see myself in Realtime','GA4 is linked to Search Console'],
 quiz:{q:'You added a tag in GTM but there is no data. The most common cause?', a:['The container is not published','There is no sitemap','The site is on Vercel'], c:0, why:'Changes in GTM only work after publishing.'},
 tests:[{q:'A GA4 ID starts with…', a:['G-','GTM-','UA-'], c:0, why:'GTM- is a Tag Manager container.'},{q:'There is twice as much data as there should be. Why?', a:['GA4 is installed twice','Google counts that way','Because of robots.txt'], c:0, why:'A GA4 tag both in the code and in GTM doubles the data.'},{q:'What is free search traffic called in GA4?', a:['Organic Search','Direct','Referral'], c:0, why:'The Organic Search channel combines sessions from organic search results.'},{q:'Organic data doubled overnight for no reason. What do you check first?', a:['Whether the GA4 tag is installed twice','Whether robots.txt changed','Rankings in Serpstat'], c:0, why:'Doubled data is a typical sign of a duplicate tag (in the code and in GTM).'}],
 scenes:[
  {t:'GA4 ID', app:'Google Analytics', url:'Admin → Data streams', rows:['= URL: https://mosty.com.ua','| Measurement ID | G-7XK2P9QL1M'], hl:1, say:'In GA4, create a web stream and copy the ID that starts with G.'},
  {t:'Tag in GTM', app:'Tag Manager', url:'Tags → New', side:['Tags','Triggers'], sel:0, rows:['= Type: Google tag','= ID: G-7XK2P9QL1M','= Trigger: Initialization – All Pages'], hl:1, say:'In GTM, create a Google tag with this ID on all pages.'},
  {t:'Publishing', app:'Tag Manager', url:'Submit', rows:['[Preview]','+ Tag Assistant: the tag fired','[Submit → Publish]'], hl:2, say:'Check in Preview and publish the container.'}]},

{id:'c1-14', title:'Why a page is not in the index', dur:'15 min', yt:'page not indexed search console',
 what:'Diagnostics always start with **URL inspection** in Search Console. The first line with “No” or an error is the cause. Then fix it and request indexing.',
 svg:[['why',0,0,'The diagnostic tree.']],
 nav:['Search Console → URL inspection → paste the address','URL inspection → Test live URL','Search Console → Pages → reason → Validate fix'],
 steps:['Paste the address into URL inspection.','Read the “Page indexing” block: find the first line with “No” or an error.','Fix the cause using the table below.','Test live URL: it should say “URL is available to Google”.','Request indexing.','Check again in 3–14 days.'],
 example:[{table:[['What we see','Cause','What we do'],['URL is unknown to Google','No links and no sitemap','Add links and add it to the sitemap'],['Blocked by robots.txt','Disallow','Remove the rule'],['Excluded by ‘noindex’ tag','noindex in the code or plugin','Remove noindex'],['Not found (404)','The address does not exist','Fix the address or 301'],['Duplicate, Google chose different canonical','The page is similar to another one','Make it unique or merge'],['Crawled – currently not indexed','Thin content','Improve the text, add links'],['Discovered – currently not indexed','Google has not crawled it yet','Links, sitemap, wait']]}],
 mistakes:['Waiting for weeks without checking URL inspection.','Requesting indexing without fixing the cause.','Mixing up “Crawled” (a quality issue) and “Discovered” (a crawling issue).'],
 check:['I start with URL inspection','I found the cause','I fixed it and tested it live','I requested indexing'],
 quiz:{q:'“Crawled – currently not indexed” most often means…', a:['Google does not see value in the page','The page is in robots.txt','The server is down'], c:0, why:'The page was read but not taken: improve the content and the links.'},
 tests:[{q:'“URL is unknown to Google”. What do we do?', a:['Add links and the sitemap','Set noindex','Nothing'], c:0, why:'Google does not know about the address.'},{q:'Where do diagnostics start?', a:['URL inspection in Search Console','Google Trends','Serpstat'], c:0, why:'It shows the exact reason from Google.'},{q:'Status “Crawled – currently not indexed”. What is most likely to help?', a:['Requesting indexing every day','Improving the uniqueness and usefulness of the content or merging it with a similar page','Blocking the page in robots.txt'], c:1, why:'Google has read the page, so technically it is accessible. It decided the page is not worth indexing: this is about quality and uniqueness.'},{q:'“Discovered – currently not indexed” means…', a:['Google knows the URL but has not crawled it yet','The page was deleted','The page is penalized'], c:0, why:'The page is in the queue; links and fewer junk URLs help.'}],
 scenes:[
  {t:'Inspection', app:'Search Console', url:'URL inspection', side:['URL inspection'], sel:0, rows:['= https://mosty.com.ua/uslugy/apostyl/','! URL is not on Google','| Indexing allowed? | No: ‘noindex’ detected'], hl:2, say:'URL inspection shows the cause: the page has a noindex.'},
  {t:'The fix', app:'VS Code', url:'uslugy/apostyl/index.html', rows:['! <meta name="robots" content="noindex">','+ the line is deleted → Commit → Push'], hl:1, say:'Remove the noindex from the code and push the changes.'},
  {t:'The request', app:'Search Console', url:'URL inspection', rows:['[Test live URL]','+ URL is available to Google','[Request indexing]'], hl:2, say:'Test it live and request indexing.'}]}
);
