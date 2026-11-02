window.L = window.L || [];
/* Additional core topics. The after field: which lesson to show this one after. Example: mosty.com.ua */
L.push(
{id:'c1-content', after:'c1-06', title:'Landing page copy: H2–H6, images, a brief for the copywriter', dur:'15 min', yt:'how to write an SEO text brief for a copywriter',
 what:'The text must **fully answer the query** better than the competitors: what the service is, the price, the turnaround, how to order. Headings **H1 → H2 → H3** set the structure; the cluster’s secondary queries go into H2s. Images are compressed in **Squoosh** and given an **alt**. All of this goes into a brief for the copywriter.',
 svg:[['intent',0,0,'The type of page and text depends on the intent.'],['image',0,0,'Image weight before and after Squoosh.']],
 nav:['Serpstat → Keyword research → Search suggestions (questions for H2 and FAQ)','Google → query → “People also ask” box','squoosh.app → drag in a photo → Resize → WebP, quality 75 → Download','Chrome → Detailed SEO extension → Headings (check H1–H6)'],
 steps:['Open the top 5 competitors for the main query: which blocks and questions they all have.','Collect questions from “People also ask” and Serpstat search suggestions.','Build the structure: one H1, H2s for secondary queries, H3s inside H2s.','Write a brief using the template below.','Photos: squoosh.app → Resize to display width × 2 → WebP, quality 70–80 → a file name in Latin letters.','Give every photo an alt that describes what is in it.','After publishing, check the headings with Detailed SEO → Headings.'],
 example:[{code:`H1  Notarized translation of documents
  H2  Prices for notarized translation
  H2  Which documents we translate
    H3  Personal documents
    H3  Business documents
  H2  Turnaround and how to order
  H2  Frequently asked questions (FAQ)`, lang:'heading structure'},{table:[['Brief item','What to specify'],['URL and page type','/uslugy/notarialnyi-pereklad/, service landing page'],['Main query','notarized translation (in the H1 and the first paragraph)'],['Secondary queries','notarized translation price, certified translation kyiv'],['H2 structure','prices, documents, turnaround, FAQ'],['Length','as in the top 3 competitors (e.g. 700–900 words)'],['Must include','price, turnaround, ordering steps, guarantees, 5 FAQ questions'],['Competitors for reference','3 links from the top'],['What not to do','copy, stuff keywords']]},{code:`<img src="/img/notarialnyi-pereklad-pasporta.webp"
     alt="Notarized translation of a passport"
     width="800" height="533" loading="lazy">`, lang:'image'}],
 mistakes:['Several H1s, or H2s used for styling (“Our contacts” in the footer).','Text “for the robot” repeating the keyword in every sentence.','No price, turnaround or ordering steps: the person goes to a competitor.','A 4 MB photo from a phone with alt="" or “photo1”.'],
 check:['One H1, logical H2–H3','Cluster secondary queries in the H2s','Price, turnaround, how to order and FAQ are present','Photos in WebP with alt','A copywriter brief following the template'],
 quiz:{q:'Where do the cluster’s secondary queries go?', a:['Into H2 headings and the section text','Into the H1, separated by commas','Into the alt of every photo'], c:0, why:'H2s cover the subtopics, each matching its own secondary query.'},
 tests:[{q:'What quality do you set for WebP in Squoosh?', a:['70–80','100','10'], c:0, why:'The eye sees no difference and the file is many times smaller.'},{q:'What is alt?', a:['A description of the image for blind users and Google','The file name','A caption under the photo'], c:0, why:'Alt is a text replacement for the image.'},{q:'Which of these does NOT directly affect rankings but does affect click-through rate?', a:['Title','Meta description','H1'], c:1, why:'Google does not use the meta description as a ranking factor, but a good description increases CTR. The title and headings help explain the page topic.'},{q:'How many H1s are recommended per page?', a:['One','Five','None'], c:0, why:'One H1 names the main topic.'}],
 scenes:[
  {t:'Structure', app:'Detailed SEO', url:'Headings', rows:['H1 Notarized translation of documents','  H2 Prices for notarized translation','  H2 Which documents we translate','    H3 Personal documents'], hl:0, say:'The Detailed SEO extension shows the heading tree. One H1, sections as H2 below it.'},
  {t:'People’s questions', app:'Google', url:'notarized translation', rows:['# People also ask','How much does a notarized translation cost?','How long does a translation take?','+ These are ready-made H2s and FAQ items'], hl:3, say:'Questions from “People also ask” become sections and FAQ items.'},
  {t:'Squoosh', app:'Squoosh', url:'squoosh.app', rows:['= Resize: 1600 px','= WebP · quality 75','| 4.2 MB → 160 KB'], hl:2, say:'In Squoosh, reduce the size, choose WebP and quality 75. The file becomes tens of times lighter.'}]},

{id:'c1-schema', after:'c1-09', title:'Schema.org structured data: what you must know', dur:'20 min', yt:'schema.org structured data JSON-LD Rich Results Test',
 what:'Structured data tells Google **what exactly is on the page**: a company, an address, breadcrumbs, an article, a product with a price. We write it in **JSON-LD** format in the page code. It can produce a **rich result** (breadcrumbs, rating, price) and helps Google understand the business. We check it in the **Rich Results Test**.',
 svg:[['serp',0,0,'Structured data makes the snippet stand out.'],['source',0,0,'The markup lives in the page code.']],
 nav:['search.google.com/test/rich-results → URL or Code → Test','validator.schema.org → paste the URL → Run test','Search Console → Enhancements → Breadcrumbs / Product snippets','WordPress → Rank Math → Schema (tab in the editor) / Titles & Meta → Local SEO','VS Code → page <head> → <script type="application/ld+json"> → Commit → Push'],
 steps:['Decide which markup types each page type gets (table below).','Static site (GitHub + Vercel): put the JSON-LD into [[<head>]] → Commit → Push.','WordPress: Rank Math → Titles & Meta → Local SEO (company details) and the Schema tab in the page editor.','Test the page in the Rich Results Test: “Valid items”, no errors.','Check it in validator.schema.org: syntax without errors.','Search Console → Enhancements: markup reports appear after a few days.','Check that everything in the markup (address, phone, price, rating) is also visible on the page itself.'],
 example:[{table:[['Type','Where it goes','What it gives'],['Organization / LocalBusiness','Home page, contacts','Name, logo, address, phone, opening hours'],['BreadcrumbList','All inner pages','Breadcrumbs instead of the URL in the snippet'],['Article','Blog articles','Author, publication date'],['FAQPage','Pages with an FAQ block','Google now shows the rich result mostly for government and health sites; the markup is still useful'],['Product + Offer','Products (if any)','Price, availability, rating in the results'],['Service','Service pages','No rich result, but it describes the service']]},
  {code:`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mosty Translation Agency",
  "url": "https://mosty.com.ua/",
  "logo": "https://mosty.com.ua/img/logo.png",
  "telephone": "+380440000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Khreshchatyk St",
    "addressLocality": "Kyiv",
    "postalCode": "01001",
    "addressCountry": "UA"
  },
  "openingHours": "Mo-Fr 09:00-19:00",
  "sameAs": ["https://www.facebook.com/mosty", "https://www.instagram.com/mosty"]
}
</script>`, lang:'home page: LocalBusiness'},
  {code:`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://mosty.com.ua/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://mosty.com.ua/uslugy/"},
    {"@type": "ListItem", "position": 3, "name": "Notarized translation"}
  ]
}
</script>`, lang:'service page: BreadcrumbList'},
  {code:`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much does a notarized translation cost?",
    "acceptedAnswer": {"@type": "Answer", "text": "From 350 UAH per page, depending on the language."}
  }]
}
</script>`, lang:'FAQ on a service page'},
  {table:[['Google rule','What it means'],['Markup = visible content','You must not mark up a price, rating or FAQ that is not on the page'],['No fake reviews','A rating only from real reviews'],['Reviews about yourself','A LocalBusiness / Organization rating on your own site does not get stars in the results'],['Violations','Manual actions for structured data spam (Search Console → Manual actions)'],['No guarantees','Valid markup does not guarantee a rich result']]}],
 mistakes:['Markup with data that is not on the page (price, rating, FAQ).','A different phone or address in the markup and on the site.','Duplicate markup: both the theme and Rank Math output Organization.','A JSON error: an extra comma or quote makes the markup unreadable. Check it in the validator.','Expecting rating stars for LocalBusiness from your own reviews.'],
 check:['I chose markup types for each page type','LocalBusiness on the home page with the same details as on the site','BreadcrumbList on inner pages','Rich Results Test: valid items, no errors','validator.schema.org: no errors','I check the “Enhancements” reports in Search Console'],
 quiz:{q:'Which format does Google recommend for structured data?', a:['JSON-LD','An Excel table','A code comment'], c:0, why:'JSON-LD is a separate script block in the code; it is easy to add and test.'},
 tests:[{q:'There is no FAQ on the page, but the markup contains FAQPage. What is it?', a:['A rule violation: markup must match the visible content','Normal','It will improve rankings'], c:0, why:'Mismatched markup can lead to a manual action.'},{q:'Where do you check whether Google sees the markup?', a:['Rich Results Test and Search Console → Enhancements','Google Trends','Netpeak → Structure'], c:0, why:'The Rich Results Test shows valid items; GSC monitors the whole site.'},{q:'Which of these does NOT directly affect rankings but does affect click-through rate?', a:['Title','Meta description','H1'], c:1, why:'Google does not use the meta description as a ranking factor, but a good description increases CTR. The title and headings help explain the page topic.'},{q:'How many H1s are recommended per page?', a:['One','Five','None'], c:0, why:'One H1 names the main topic.'}],
 scenes:[
  {t:'What markup gives', app:'Google', url:'notarized translation kyiv', rows:['~ mosty.com.ua › Services › Notarized translation','# Notarized translation in Kyiv from 1 day | Mosty','~ Breadcrumbs instead of the URL: BreadcrumbList'], hl:0, say:'BreadcrumbList markup shows breadcrumbs instead of the address in the snippet. It is more visible and clearer.'},
  {t:'Code in <head>', app:'VS Code', url:'index.html', rows:['> <script type="application/ld+json">','>   "@type": "LocalBusiness",','>   "name": "Mosty Translation Agency",','> </script>'], hl:1, say:'The markup is a script block of type application ld json in the page code. On the home page we describe the company with the LocalBusiness type.'},
  {t:'Rank Math on WordPress', app:'WordPress · Rank Math', url:'Editor → Schema', side:['General','Advanced','Schema'], sel:2, rows:['= Schema: Service · Article · FAQ','[Schema Generator → Add]','~ Company details: Titles & Meta → Local SEO'], hl:1, say:'On WordPress, Rank Math adds the markup: the Schema tab in the page editor and company details in the Local SEO section.'},
  {t:'Testing', app:'Rich Results Test', url:'search.google.com/test/rich-results', rows:['= URL: https://mosty.com.ua/uslugy/notarialnyi-pereklad/','+ 2 valid items detected','| Breadcrumbs | valid','| FAQ | valid'], hl:1, say:'Paste the address into the Rich Results Test. Green valid items mean Google sees the markup.'}]},

{id:'c1-hreflang', after:'c1-schema', title:'Language versions: hreflang', dur:'15 min', yt:'hreflang setup tutorial',
 what:'If a site has Ukrainian, English and Polish versions, **hreflang** tells Google these are translations of one page and shows each person the right language. The key rules: **reciprocal links**, **a link to itself**, the language code **uk** (not ua).',
 svg:[['hreflang',0,0,'Each version links to all the others and to itself.'],['crawler','Hreflang',0,'Hreflang errors in a crawler.']],
 nav:['VS Code → <head> of each language version → <link rel="alternate" hreflang> block','WordPress → Polylang / WPML (add hreflang automatically)','Screaming Frog → Configuration → Spider → Crawl → ☑ Crawl Hreflang → Hreflang tab','GS Location Changer → Poland → check which version appears in the results'],
 steps:['Build a mapping table: page → address in each language.','Put the same hreflang block into the [[<head>]] of every language version.','The canonical of each version points to itself.','WordPress: the Polylang or WPML language plugin adds hreflang itself; check it with a crawler.','Screaming Frog → turn on Crawl Hreflang → Hreflang tab: Missing Return Links, Incorrect Language Codes.','Removing a language: remove it from hreflang on ALL versions, 301 to the equivalent, update the sitemap.'],
 example:[{code:`<link rel="alternate" hreflang="uk" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
<link rel="alternate" hreflang="en" href="https://mosty.com.ua/en/services/notarized-translation/">
<link rel="alternate" hreflang="pl" href="https://mosty.com.ua/pl/uslugi/tlumaczenie-notarialne/">
<link rel="alternate" hreflang="x-default" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">`, lang:'the same on all three versions'},{table:[['Correct','Mistake'],['uk','ua (that is a country)'],['en-GB','en-UK'],['A link to itself','Links only to the translations'],['A → B and B → A','The tag only on the Ukrainian version'],['Self-referencing canonical','The English canonical pointing to the Ukrainian version']]}],
 mistakes:['hreflang="ua" instead of uk.','No return link from the translation.','The translation’s canonical points to the Ukrainian version: hreflang stops working.','Automatic redirects by browser language: Google does not see the other versions.'],
 check:['A page mapping table','The same block on every version','Language code uk, x-default present','Each version’s canonical points to itself','Screaming Frog Hreflang without errors'],
 quiz:{q:'What is the correct language code for Ukrainian?', a:['uk','ua','ukr'], c:0, why:'UA is the country code; the language is uk (uk-UA is also possible).'},
 tests:[{q:'What happens if the tag is only on the Ukrainian version?', a:['Google may ignore hreflang','Everything will work','The site will disappear'], c:0, why:'The links must be reciprocal.'},{q:'Where does the canonical of the English version point?', a:['To itself','To the Ukrainian version','To the home page'], c:0, why:'A canonical to another language breaks hreflang.'},{q:'Which attribute is correct for a Ukrainian page?', a:['hreflang="ua"','hreflang="uk"','hreflang="ukr-UA"'], c:1, why:'The language is set with an ISO 639-1 code: Ukrainian is uk. UA is the country code, which can be added second: uk-UA.'},{q:'What must every language version have besides links to the others?', a:['A link to itself','noindex','A redirect'], c:0, why:'A self-reference is required for hreflang to work correctly.'}],
 scenes:[
  {t:'Three versions', app:'Diagram', url:'mosty.com.ua', rows:['| uk | /uslugy/notarialnyi-pereklad/','| en | /en/services/notarized-translation/','| pl | /pl/uslugi/tlumaczenie-notarialne/'], hl:2, say:'One page has three language versions. hreflang links them together.'},
  {t:'The code', app:'Ctrl+U', url:'view-source', rows:['> <link rel="alternate" hreflang="uk" …>','> <link rel="alternate" hreflang="pl" …>','> <link rel="alternate" hreflang="x-default" …>'], hl:1, say:'The same block is on every version, including a link to itself.'},
  {t:'Checking', app:'Screaming Frog', url:'Hreflang', rows:['| Missing Return Links | 2','| Incorrect Language Codes | 1 (ua)'], hl:1, say:'Screaming Frog finds missing return links and wrong codes.'}]},

{id:'c1-gbp', after:'c1-14', title:'Google Business Profile: local SEO', dur:'15 min', yt:'Google Business Profile setup',
 what:'For a business with an office, a **Google Business Profile** (a listing in Maps and the local pack) often brings more enquiries than the website. What matters: the right category, the same **name, address and phone (NAP)** everywhere, photos and replies to reviews.',
 svg:[['backlinks',0,0,'Directories and maps: useful mentions.']],
 nav:['business.google.com → Add business → name → category → address → verification','Profile → Edit profile → hours, website, services, photos','Profile → Reviews → Reply','Google Maps → search “translation agency” → are you in the local pack?'],
 steps:['business.google.com → Add business: the name (as on the sign, no keywords).','Primary category: “Translation service”, add secondary ones if needed.','Address, phone, website [[https://mosty.com.ua/]], opening hours.','Verify the profile (video, phone call or postcard, whichever Google offers).','Add services with prices and 10+ real photos.','Ask clients to leave reviews and reply to every one.','The same NAP on the site, in the LocalBusiness markup, in directories and on social media.'],
 example:[{table:[['Field','Example'],['Name','Mosty Translation Agency'],['Category','Translation service'],['Address','Kyiv, 1 Khreshchatyk St'],['Phone','+380 44 000 00 00 (the same as on the site)'],['Website','https://mosty.com.ua/'],['Services','Notarized translation from 350 UAH; Apostille from 600 UAH']]}],
 mistakes:['Keywords in the name (“Mosty translation cheap Kyiv”): the profile may be suspended.','Different phones or addresses in the profile, on the site and in directories.','Buying reviews or reviews from employees.','Not replying to reviews, especially negative ones.'],
 check:['The profile is created and verified','The right category','The same NAP everywhere','Services, photos and hours are filled in','I reply to reviews'],
 quiz:{q:'What is NAP?', a:['Name, address, phone','A new anchor phrase','An analytics number'], c:0, why:'These details must match everywhere.'},
 tests:[{q:'Can you add keywords to the profile name?', a:['No, only the real company name','Yes, the more the better','Only the city'], c:0, why:'Keywords in the name break the rules and lead to suspension.'},{q:'What do you do with a negative review?', a:['Reply politely and resolve the problem','Ignore it','Delete the profile'], c:0, why:'Replies show you care and affect trust.'},{q:'Which link is the most valuable?', a:['From a directory site with a thousand links in the footer','From an article on a relevant blog with real traffic, in the text, with a natural anchor','From 200 forums in one day with the same anchor'], c:1, why:'Value comes from topical relevance, the linking site’s real traffic, placement in the content and a natural anchor.'},{q:'Which attribute marks a paid link?', a:['rel="sponsored"','rel="canonical"','rel="alternate"'], c:0, why:'Google requires paid links to be marked.'}],
 scenes:[
  {t:'The profile', app:'Google Business Profile', url:'business.google.com', side:['Home','Profile','Reviews','Photos'], sel:1, rows:['= Name: Mosty Translation Agency','= Category: Translation service','= Phone: +380 44 000 00 00','+ Verified'], hl:1, say:'Fill in the name without keywords, the category, the address and the phone, as on the site.'},
  {t:'The local pack', app:'Google', url:'translation agency kyiv', rows:['# Map · 3 businesses','| Mosty · ★ 4.9 · 120 reviews','| Pereklad-Plus · ★ 4.6'], hl:1, say:'The profile appears on the map in the search results. The rating and number of reviews influence the client’s choice.'},
  {t:'Reviews', app:'Google Business Profile', url:'Reviews', side:['Reviews'], sel:0, rows:['| ★★★★★ Fast and accurate | [Reply]','| ★★☆☆☆ They were a day late | [Reply]'], hl:1, say:'Reply to every review, especially negative ones.'}]},

{id:'c2-code', after:'c2-01', title:'Reading the page source: Ctrl+U and DevTools', dur:'15 min', yt:'Chrome DevTools for SEO',
 what:'You do not need to program, but you must be able to **find in the code** the title, robots, canonical, hreflang, H1 and structured data, and see the page’s **status code**. **Ctrl+U** shows the code from the server, **F12** (DevTools) the code after JavaScript, status codes and headers.',
 svg:[['source',0,0,'What to look for in the page source.']],
 nav:['Chrome → Ctrl+U → Ctrl+F “robots” / “canonical” / “hreflang” / “ld+json”','F12 → Elements → Ctrl+F (code after JavaScript)','F12 → Network → ☑ Preserve log → Doc filter → F5 → click the row → Headers','F12 → Ctrl+Shift+M (mobile view)','F12 → Console (errors, Mixed Content)'],
 steps:['Ctrl+U → Ctrl+F in turn: [[<title]], [[robots]], [[canonical]], [[hreflang]], [[<h1]], [[ld+json]]. Write down what you found.','F12 → Network → Preserve log → Doc → F5: the status of the first row (200, 301, 404).','Click the row → Headers → Response Headers: make sure there is no [[x-robots-tag: noindex]].','Ctrl+Shift+M: are the text and menu there on mobile?','Console: red errors and “Mixed Content”.'],
 example:[{table:[['Search for (Ctrl+F)','What should be there'],['<title','One, meaningful'],['name="robots"','No noindex on important pages'],['rel="canonical"','One, absolute, self-referencing'],['hreflang','Codes uk, en, pl; x-default present'],['<h1','One'],['ld+json','Structured data present'],['GTM- / G-','Analytics installed once']]}],
 mistakes:['Looking for noindex only in the code: it can be in an HTTP header (Network → Headers).','Confusing Ctrl+U and Elements: Elements shows the code after scripts.','Editing code in Elements and thinking you changed the site: the changes disappear on reload.'],
 check:['I find title, robots, canonical, hreflang, H1 and structured data in Ctrl+U','I see the status code in Network','I check X-Robots-Tag','I check the mobile view and the Console'],
 quiz:{q:'How do you see a page’s status code?', a:['F12 → Network → first row → Status','Ctrl+U','Google Trends'], c:0, why:'Network shows the server’s response.'},
 tests:[{q:'Where is X-Robots-Tag visible?', a:['Network → Headers → Response Headers','In the title','In the sitemap'], c:0, why:'It is an HTTP header; it is not in the HTML.'},{q:'Ctrl+U shows…', a:['The code from the server before JavaScript runs','The code after JavaScript','Speed'], c:0, why:'For the code after JS, look at Elements.'},{q:'Links to services are in DevTools → Elements but not in Ctrl+U. What does it mean?', a:['JavaScript adds the links; Google sees them only after rendering','The links do not exist','It is a browser bug'], c:0, why:'Ctrl+U shows the raw HTML from the server, Elements shows the DOM after scripts. Content that appears only after JS is indexed more slowly and with more risk.'},{q:'What does Ctrl+Shift+M open in DevTools?', a:['Mobile device mode','The console','The page source'], c:0, why:'The Device Toolbar shows the page as on a phone.'}],
 scenes:[
  {t:'Ctrl+U', app:'view-source', url:'mosty.com.ua/uslugy/notarialnyi-pereklad/', rows:['> <title>Notarized translation in Kyiv…</title>','> <meta name="robots" content="index, follow">','> <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">'], hl:2, say:'Ctrl+U and then Ctrl+F: find the title, robots and canonical.'},
  {t:'Network', app:'Chrome DevTools', url:'F12 → Network', side:['Elements','Network','Console'], sel:1, rows:['|! Name | Status','| notarialnyi-pereklad/ | 200','# Headers: x-robots-tag (none) ✓'], hl:1, say:'Network shows the response code and the server headers.'},
  {t:'Console', app:'Chrome DevTools', url:'F12 → Console', side:['Console'], sel:0, rows:['! Mixed Content: http://mosty.com.ua/img/logo.png','! 404 /js/old.js'], hl:0, say:'The Console shows errors: mixed content and missing files.'}]},

{id:'c2-audit', after:'c2-03', title:'Technical audit: the full checklist', dur:'20 min', yt:'technical SEO audit checklist',
 what:'An audit is a pass through one list of checks, not a random search. Most items are checked with one crawl in **Screaming Frog** or **Netpeak** plus the **Search Console** reports. The result is a table: “issue → example URLs → fix → priority”.',
 svg:[['audit',0,0,'The order of work.'],['priority',0,0,'Fix priorities.']],
 nav:['Screaming Frog → Start → Crawl Analysis → Issues → Bulk Export','Search Console → Pages / Core Web Vitals / Security & Manual actions','Google Sheets → “Audit” sheet'],
 steps:['Crawl the site (Googlebot Smartphone, with the sitemap) → Crawl Analysis.','Go through the checklist below, marking “yes / no” with example URLs.','Add the Search Console data: Pages, Core Web Vitals, manual actions.','Give each issue a priority: critical, high, medium, low.','Write the task: what to do, where, how to check it.','After the fixes, re-crawl and compare.'],
 example:[{table:[['Check','Where','Normal'],['http, www → one version','Redirect Path','One 301'],['robots.txt','/robots.txt, GSC','No Disallow: /, a Sitemap line'],['WordPress: visibility','Settings → Reading','Box unticked'],['Sitemap','GSC → Sitemaps; SF → Sitemaps','Success, only 200 + index'],['4xx / 5xx','SF → Response Codes','None in internal links'],['Redirect chains','SF → Reports → Redirect Chains','None'],['noindex','SF → Directives','Only utility pages'],['Canonical','SF → Canonicals','Present, pointing to 200'],['Duplicate titles / H1 / pages','SF → Page Titles, H1, Content','None'],['hreflang','SF → Hreflang','No errors'],['Structured data','Rich Results Test','No errors'],['HTTPS and mixed content','DevTools Console; SF → Security','None'],['Speed','PageSpeed, GSC Core Web Vitals','LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1'],['Images','SF → Images','Up to 100–200 KB, with alt'],['Orphans, depth','SF → Orphan URLs, Crawl Depth','No orphans, depth ≤ 3'],['Indexing','GSC → Pages (submitted)','Important pages indexed'],['Penalties','GSC → Manual actions','No issues detected']]},{table:[['Priority','Examples'],['Critical (today)','noindex or Disallow on the whole site, 5xx, HTTPS not working'],['High (this week)','Services not indexed, 404 in the menu, duplicates'],['Medium (this month)','Duplicate titles, slow LCP, heavy photos'],['Low','Long titles, minor warnings']]}],
 mistakes:['Sending the developer “fix the errors” without example URLs and a fix.','Fixing low priorities before critical ones.','Not re-crawling after the fixes.'],
 check:['I went through every item on the checklist','I added the Search Console data','I set priorities','I wrote tasks with example URLs','I re-crawled after the fixes'],
 quiz:{q:'What do we do first?', a:['Critical: the site is blocked from indexing, 5xx','Long titles','Alt on old photos'], c:0, why:'Critical issues remove the site from search completely.'},
 tests:[{q:'What must a task for a developer include?', a:['The issue, example URLs, the fix, how to check it','Just “fix it”','A screenshot without explanation'], c:0, why:'The task must be clear without a phone call.'},{q:'Where do you find most technical issues in one click?', a:['Screaming Frog → Issues','Google Trends','GA4'], c:0, why:'Issues collects the crawl’s problems with priorities.'},{q:'Which of these has critical priority?', a:['Missing alt on 40 images','noindex across the whole site after development','A title longer than 60 characters'], c:1, why:'noindex across the site removes it from search entirely. It is fixed immediately; the rest can wait.'},{q:'Where do you see which status codes Googlebot gets on the site?', a:['Settings → Crawl stats','Performance','Links'], c:0, why:'The report shows the distribution of server responses.'}],
 scenes:[
  {t:'Crawl', app:'Screaming Frog', url:'Issues', side:['Overview','Issues'], sel:1, rows:['|! Issue | Priority | URLs','| Internal Client Error (4xx) | High | 6','| Canonicalised | Medium | 4'], hl:1, say:'Crawl the site and take the list of issues from the Issues tab.'},
  {t:'Audit table', app:'Google Sheets', url:'Audit', rows:['|! Issue | Example | Fix | Priority','| 404 in the menu | /kontakt | → /kontakty/ | high'], hl:1, say:'Each issue becomes a row: an example, a fix, a priority.'},
  {t:'Search Console', app:'Search Console', url:'Pages', rows:['| Excluded by ‘noindex’ tag | 6 (services!)','| Manual actions | No issues detected'], hl:0, say:'Add the Search Console data on indexing and penalties.'}]},

{id:'c2-https', after:'c2-04', title:'HTTPS and mixed content', dur:'10 min', yt:'mixed content WordPress https',
 what:'The site must run only on **https**, and every image, script and link must also load over https. If anything loads over http, that is **mixed content**: the browser shows “Not secure” or blocks scripts.',
 svg:[['url',0,0,'All versions of the domain lead to one https address.']],
 nav:['Chrome → icon next to the address → Certificate','F12 → Console → “Mixed Content”','Screaming Frog → Security → HTTP URLs / Mixed Content','WordPress → Settings → General → addresses with https','WordPress → Better Search Replace → http://mosty.com.ua → https://mosty.com.ua → dry run'],
 steps:['Check the certificate: valid and renewing automatically (at the host or Vercel).','http and www → one 301 to https (Redirect Path).','F12 → Console on the home page, a service and an article: is there “Mixed Content”?','Screaming Frog → Security: pages with mixed content in bulk.','WordPress: backup → Better Search Replace → replace [[http://mosty.com.ua]] with [[https://mosty.com.ua]] → do a dry run first.','Clear the cache and check the Console again.','Static site: find [[http://]] in the files with Ctrl+Shift+F in VS Code and replace it.'],
 example:[{code:`Bad:  <img src="http://mosty.com.ua/img/logo.png">
Good: <img src="https://mosty.com.ua/img/logo.png">
Good: <img src="/img/logo.png">`, lang:'html'}],
 mistakes:['Replacing addresses in the database without a backup and without a dry run.','An expired certificate: the site shows a warning.','The WordPress site address still uses http.'],
 check:['The certificate is valid','http and www → https with one 301','No Mixed Content in the Console','Screaming Frog Security is clean'],
 quiz:{q:'Where do you see mixed content?', a:['F12 → Console','robots.txt','GA4'], c:0, why:'The browser writes a “Mixed Content” warning to the console.'},
 tests:[{q:'How do you replace http with https in bulk on WordPress?', a:['Better Search Replace after a backup, with a dry run first','Manually in every article','It is impossible'], c:0, why:'The plugin replaces addresses in the database.'},{q:'The page is on https but the logo loads over http. What is it?', a:['Mixed content','Normal','A redirect'], c:0, why:'Every resource must load over https.'},{q:'The page opens over https, but the console shows “Mixed Content … http://mosty.com.ua/uploads/banner.jpg”. What do you do?', a:['Nothing, the site is on https','Change resource links from http to https (in the database, theme or settings)','Turn off https'], c:1, why:'Resources over http make the page partly insecure, and scripts get blocked. The links must be fixed to https.'},{q:'How do you replace http with https in the WordPress database?', a:['Better Search Replace with a dry run','Manually in every article','It is impossible'], c:0, why:'The plugin replaces strings in the database tables.'}],
 scenes:[
  {t:'Console', app:'Chrome DevTools', url:'F12 → Console', side:['Console'], sel:0, rows:['! Mixed Content: http://mosty.com.ua/img/logo.png'], hl:0, say:'The Console shows a resource that loads over http.'},
  {t:'Replacing', app:'WordPress · Better Search Replace', url:'Tools', rows:['= Search for: http://mosty.com.ua','= Replace with: https://mosty.com.ua','☑ Run as dry run','+ 214 replacements found'], hl:3, say:'Better Search Replace changes the addresses in the database. Do a dry run first.'},
  {t:'Checking', app:'Screaming Frog', url:'Security', rows:['| HTTP URLs | 0','| Mixed Content | 0'], hl:1, say:'After the replacement, Screaming Frog finds no mixed content.'}]},

{id:'c2-rules', after:'c2-14', title:'Google’s rules: what is forbidden', dur:'10 min', yt:'Google spam policies manual action',
 what:'Google penalizes manipulation: **buying links**, **keyword stuffing**, **hidden text**, **copied content**, **fake structured data**, **mass “city + service” pages** with the same text. The result is a drop in rankings or a **manual action**.',
 svg:[['backlinks',0,0,'Risky links are marked in red.']],
 nav:['Search Console → Security & Manual actions → Manual actions','Search Console → Security & Manual actions → Security issues','developers.google.com/search/docs/essentials/spam-policies'],
 steps:['Once a month, check Search Console → Manual actions: it should say “No issues detected”.','Check Security issues (hacking, malware).','Check the site for foreign pages: Google [[site:mosty.com.ua casino]].','If there is a manual action: fix the cause → “Request review” in the report with an explanation.'],
 example:[{table:[['Forbidden','Why'],['Buying links without rel="sponsored"','Link manipulation'],['A keyword in every sentence, white text on white','Keyword stuffing and hidden text'],['100 “translation + city” pages with one text','Doorway pages'],['Copying competitors’ texts','No original value'],['FAQ, rating or price markup that is not on the page','Structured data spam'],['Showing Google different content than people','Cloaking']]}],
 mistakes:['Buying a “package of 100 links”.','Generating hundreds of identical city pages.','Not checking Manual actions for years.'],
 check:['I know the main violations','I check Manual actions monthly','I check the site for hacking'],
 quiz:{q:'Where do you check whether there is a penalty?', a:['Search Console → Security & Manual actions','Serpstat','Vercel'], c:0, why:'Google shows manual actions only there.'},
 tests:[{q:'50 “notarized translation + city” pages with the same text. A risk?', a:['Yes, these are doorway pages','No, it is good','Only for a blog'], c:0, why:'Mass identical pages break the rules.'},{q:'A paid link must be marked with…', a:['rel="sponsored"','rel="canonical"','rel="alternate"'], c:0, why:'Otherwise it is link manipulation.'},{q:'Which link is the most valuable?', a:['From a directory site with a thousand links in the footer','From an article on a relevant blog with real traffic, in the text, with a natural anchor','From 200 forums in one day with the same anchor'], c:1, why:'Value comes from topical relevance, the linking site’s real traffic, placement in the content and a natural anchor.'},{q:'Which attribute marks a paid link?', a:['rel="sponsored"','rel="canonical"','rel="alternate"'], c:0, why:'Google requires paid links to be marked.'}],
 scenes:[
  {t:'Manual actions', app:'Search Console', url:'Security & Manual actions', side:['Manual actions','Security issues'], sel:0, rows:['+ No issues detected'], hl:0, say:'Once a month, check that there are no manual actions.'},
  {t:'Hacking', app:'Google', url:'site:mosty.com.ua casino', rows:['~ No results found ✓'], hl:0, say:'Check that the site has no foreign spam pages.'},
  {t:'If there is a penalty', app:'Search Console', url:'Manual actions', rows:['! Unnatural links to your site','~ Fix the cause','[Request review]'], hl:2, say:'If there is a penalty, fix the cause and request a review.'}]}
);
