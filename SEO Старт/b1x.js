window.L = window.L || [];
/* Уроки, перенесені з файлу «SEO з нуля.html». Поле after каже, після якого уроку їх показувати */
L.push(
/* ================= b1-tools ================= */
{id:'b1-tools', after:'b1-02', title:'Карта інструментів SEO-спеціаліста', dur:'25 хв', yt:'seo tools for beginners',
 lead:'Новачки губляться в десятках сервісів. На старті потрібні **6–8 інструментів**, і кожен відповідає на своє питання. Тут зібрано, що встановити в перший день, що безкоштовне, а що платне.',
 links:[['Search Console','https://search.google.com/search-console'],['Screaming Frog','https://www.screamingfrog.co.uk/seo-spider/'],['SEO PowerSuite','https://www.link-assistant.com']],
 scenes:[
  {t:'Чотири групи інструментів', app:'Схема', url:'набір SEO-спеціаліста', rows:['# Google: Search Console, Analytics 4, Tag Manager, Keyword Planner, PageSpeed','# Краулери: Screaming Frog, Netpeak Spider','# Семантика і конкуренти: Ahrefs, Semrush, Serpstat, SEO PowerSuite','# У браузері: GS Location Changer, Detailed SEO, DevTools (F12)'], hl:0, say:'Усі інструменти SEO-спеціаліста діляться на чотири групи. Безкоштовні сервіси Google, краулери, які сканують сайт, платні сервіси для семантики і конкурентів, і розширення браузера для швидких перевірок.'},
  {t:'Питання → інструмент', app:'Google Таблиці', url:'шпаргалка', rows:['|! Питання | Інструмент','| Чи сторінка в індексі? | Search Console → Перевірка URL','| Які помилки на всьому сайті? | Screaming Frog / Netpeak Spider','| Що шукають люди? | Keyword Planner, Serpstat, Ahrefs','| Скільки заявок з SEO? | GA4','| Чому сайт повільний? | PageSpeed Insights','| Яка видача в Польщі? | GS Location Changer'], hl:1, say:'Запамʼятайте не назви, а питання. Чи сторінка в індексі, відповідає Search Console. Які помилки на сайті, відповідає краулер. Що шукають люди, Планувальник ключових слів або Serpstat. Скільки заявок, Analytics.'},
  {t:'Розширення Chrome', app:'Chrome', url:'chrome://extensions', rows:['| Detailed SEO Extension | title, description, canonical, H1–H6','| SEO META in 1 CLICK | те саме, інший інтерфейс','| GS Location Changer | видача з іншого міста чи країни','| Redirect Path | коди відповіді і редиректи','~ Встановлюються з Chrome Web Store → «Додати в Chrome»'], hl:0, say:'Встановіть кілька розширень Chrome. Detailed SEO або SEO META in 1 CLICK показують мета-теги будь-якої сторінки одним кліком. GS Location Changer змінює локацію пошуку. Redirect Path показує коди відповіді.'},
  {t:'SEO PowerSuite', app:'SEO PowerSuite', url:'link-assistant.com', side:['Rank Tracker','WebSite Auditor','SEO SpyGlass','LinkAssistant'], sel:0, rows:['= Проєкт: mosty.com.ua','|! Запит | Позиція | Зміна','| нотаріальний переклад київ | 7 | ▲ 3','| присяжний перекладач | 14 | ▼ 1','~ Настільна програма: безкоштовна версія з обмеженнями'], hl:2, say:'SEO PowerSuite це настільний набір з чотирьох програм. Rank Tracker відстежує позиції, WebSite Auditor робить технічний аудит, SEO SpyGlass аналізує посилання. Є безкоштовна версія з обмеженнями.'}
 ],
 ill:[{type:'cols', title:'Що безкоштовне, а що платне', cols:[{t:'Безкоштовно', k:'ok', items:['Search Console, GA4, GTM','PageSpeed Insights, Rich Results Test','Screaming Frog до 500 URL','Розширення Chrome','Ahrefs Webmaster Tools (для свого сайту)']},{t:'Платно', k:'warn', items:['Ahrefs, Semrush, Serpstat, SE Ranking','Netpeak Spider (є пробний період)','Screaming Frog без ліміту','SEO PowerSuite (повна версія)']}]}],
 notes:[
  {h:'Інструменти: ціна і призначення'},
  {table:[['Інструмент','Ціна','Для чого'],
   ['Google Search Console','безкоштовно','Що Google бачить на сайті: індексація, запити, помилки, sitemap'],
   ['Google Analytics 4','безкоштовно','Що роблять відвідувачі: джерела, сторінки, заявки'],
   ['Google Tag Manager','безкоштовно','Контейнер для кодів аналітики і пікселів без правок сайту'],
   ['Google Ads → Планувальник ключових слів','потрібен акаунт Ads','Частотність запитів, ідеї ключових слів'],
   ['PageSpeed Insights','безкоштовно','Швидкість і Core Web Vitals'],
   ['Screaming Frog SEO Spider','безкоштовно до 500 URL','Сканує сайт як Google: коди, title, H1, дублі, canonical'],
   ['Netpeak Spider','платно, є пробний період','Те саме з українським інтерфейсом і звітом помилок'],
   ['Ahrefs / Semrush / Serpstat','платно','Ключові слова, конкуренти, зовнішні посилання'],
   ['SEO PowerSuite','є безкоштовна версія','Rank Tracker (позиції), WebSite Auditor (аудит), SEO SpyGlass (посилання)'],
   ['GS Location Changer','розширення Chrome','Видача Google з іншого міста чи країни'],
   ['Detailed SEO / SEO META in 1 CLICK','розширення Chrome','Title, description, canonical, robots і H1–H6 будь-якої сторінки'],
   ['Google Rich Results Test','безкоштовно','Перевірка мікророзмітки Schema']]},
  {tip:'Сценарій для новачка: краульте одним інструментом, а сумнівні місця перевіряйте другим. Якщо обидва показують ту саму помилку, вона справжня.'}
 ],
 steps:['Створіть робочий Google-акаунт: один для Search Console, GA4, GTM і Google Ads.','Встановіть Screaming Frog: безкоштовної версії до 500 URL вистачає на старті.','Додайте розширення Chrome: Detailed SEO або SEO META in 1 CLICK, GS Location Changer, Redirect Path.','Заведіть таблицю аудиту в Google Sheets: дата, URL, проблема, рішення, статус.','Збережіть шпаргалку «питання → інструмент» із конспекту.'],
 check:['Є робочий Google-акаунт','Встановлено краулер','Встановлено 2+ розширення Chrome','Є таблиця аудиту','Знаю, який інструмент відповідає на яке питання'],
 quiz:{q:'Де подивитися, за якими запитами сайт уже показується в Google?', a:['Search Console → Ефективність','Screaming Frog','PageSpeed Insights'], c:0, why:'Тільки Search Console показує реальні запити з Google, за якими сайт отримує покази і кліки.'}},

/* ================= b1-head ================= */
{id:'b1-head', after:'b1-08', title:'Шаблон <head>: усі SEO-теги', dur:'30 хв', yt:'seo meta tags html head',
 lead:'Більшість технічних SEO-сигналів живе в блоці [[<head>]]. Ось шаблон, який копіюєте на кожну сторінку і змінюєте значення. Приклад: сторінка послуги бюро перекладів «Мости».',
 links:[['Detailed SEO Extension','https://chromewebstore.google.com/search/Detailed%20SEO%20Extension']],
 scenes:[
  {t:'Що лежить у <head>', app:'Перегляд коду (Ctrl+U)', url:'view-source:https://mosty.com.ua/uslugy/notarialnyi-pereklad/', rows:['> <html lang="uk">','> <title>Нотаріальний переклад у Києві — від 1 дня | Мости</title>','> <meta name="description" content="Переклад з нотаріальним засвідченням…">','> <meta name="robots" content="index, follow">','> <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">','> <link rel="alternate" hreflang="en" href="…/en/services/notarized-translation/">'], hl:4, say:'Відкриваємо код сторінки послуги. У head по черзі: мова сторінки, title, description, robots, canonical і hreflang для мовних версій. Кожен рядок відповідає за свій сигнал для Google.'},
  {t:'Title і description у видачі', app:'Google', url:'google.com.ua/search?q=нотаріальний переклад київ', rows:['~ mosty.com.ua › uslugy › notarialnyi-pereklad','# Нотаріальний переклад у Києві — від 1 дня | Мости','Переклад документів з нотаріальним засвідченням з 40 мов. Ціна від 350 грн, термін від 1 дня.','+ Title ~50–60 символів, description ~140–160'], hl:1, say:'Title стає синім заголовком у видачі, description описом під ним. Title унікальний, приблизно 50–60 символів, ключ на початку, бренд у кінці. Description приблизно 140–160 символів з вигодою для клієнта.'},
  {t:'Перевірка розширенням', app:'Detailed SEO Extension', url:'Overview', rows:['| Title | Нотаріальний переклад у Києві… (52)','| Description | Переклад документів… (148)','| Canonical | https://mosty.com.ua/uslugy/notarialnyi-pereklad/ ✓','| Robots | index, follow','| H1 | Нотаріальний переклад документів','| Lang | uk'], hl:2, say:'Після публікації перевіряємо сторінку розширенням Detailed SEO. Воно показує всі теги з head і H1 одним кліком. Переконуємося, що canonical вказує на саму сторінку, а robots дозволяє індексацію.'}
 ],
 ill:[{type:'cols', title:'Обовʼязкові й додаткові теги', cols:[{t:'На кожній сторінці', k:'ok', items:['<html lang>','meta charset і viewport','title','meta description','link rel="canonical"','один H1 у <body>']},{t:'За потреби', k:'info', items:['meta robots (тільки щоб закрити)','hreflang (якщо є мовні версії)','Open Graph для соцмереж','JSON-LD мікророзмітка','код GTM']}]}],
 notes:[
  {h:'Шаблон сторінки послуги'},
  {code:`<!doctype html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Нотаріальний переклад у Києві — від 1 дня | Мости</title>
  <meta name="description" content="Переклад документів з нотаріальним засвідченням з 40 мов. Ціна від 350 грн, термін від 1 дня.">

  <!-- Індексація: index за замовчуванням, тег можна не ставити -->
  <meta name="robots" content="index, follow">

  <!-- Канонічна адреса: абсолютна, https, фінальна -->
  <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">

  <!-- Мовні версії -->
  <link rel="alternate" hreflang="uk" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
  <link rel="alternate" hreflang="en" href="https://mosty.com.ua/en/services/notarized-translation/">
  <link rel="alternate" hreflang="x-default" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">

  <!-- Соцмережі -->
  <meta property="og:title" content="Нотаріальний переклад | Мости">
  <meta property="og:image" content="https://mosty.com.ua/img/og-notarialnyi.jpg">
</head>
<body>
  <h1>Нотаріальний переклад документів</h1>
  …
</body>
</html>`, lang:'html'},
  {h:'Навіщо кожен тег'},
  {table:[['Тег','Навіщо','Правило'],['<html lang>','Мова сторінки','uk, en, pl'],['viewport','Мобільна версія','Обовʼязково'],['title','Заголовок у видачі','Унікальний, ~50–60 символів, ключ на початку'],['description','Опис у видачі','Унікальний, ~140–160 символів, з вигодою'],['robots','index / noindex','Тільки на сторінках, які закриваємо'],['canonical','Головна версія','Абсолютний URL, на себе на оригіналі'],['hreflang','Мовні версії','Взаємні посилання + на себе'],['H1','Головний заголовок','Один на сторінці']]},
  {warn:'Для мови пишемо [[uk]], а не [[ua]]: UA це код країни.'}
 ],
 steps:['Скопіюйте шаблон з конспекту в кожну сторінку сайту.','Заповніть title і description з таблиці SEO-структури (урок про семантичне ядро).','Вкажіть canonical: повна адреса цієї ж сторінки з https.','Якщо є мовні версії, додайте блок hreflang, однаковий на всіх версіях.','Перевірте, що в [[<body>]] один H1.','Опублікуйте і перевірте сторінку розширенням Detailed SEO.'],
 check:['На кожній сторінці унікальний title','Є description','Є canonical на себе','Є lang і viewport','Один H1'],
 quiz:{q:'Скільки H1 має бути на сторінці?', a:['Один','Скільки завгодно','Жодного'], c:0, why:'Один H1 називає головну тему сторінки. Решта розділів отримують H2 і H3.'}}
);
