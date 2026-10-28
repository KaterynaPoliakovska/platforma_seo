window.L = window.L || [];
L.push(
/* ================= b3-00 ================= */
{id:'b3-00', title:'Усі програми SEO-спеціаліста: що, де і навіщо', dur:'40 хв', yt:'SEO інструменти огляд для початківців',
 lead:'Повний довідник програм, з якими працює SEO-спеціаліст: від блокнота коду до звітів для директора. Для кожної вказано **що в ній робимо**, **куди натискати першим** і **скільки коштує**. Збережіть цей урок у закладки: до нього ви повертатиметесь найчастіше.',
 links:[['Search Console','https://search.google.com/search-console'],['Serpstat','https://serpstat.com'],['Ahrefs','https://ahrefs.com'],['Vercel','https://vercel.com'],['GitHub','https://github.com']],
 nav:['Search Console → Ефективність → Результати пошуку','Search Console → Індексування → Сторінки','GA4 → Звіти → Залучення → Цільова сторінка','Screaming Frog → Start → Crawl Analysis → Issues','Serpstat → Аналіз домену → Органічні ключові слова','Ahrefs → Site Explorer → Organic keywords','PageSpeed Insights → вставити URL → Аналізувати'],
 scenes:[
  {t:'Ваш щоденний набір', app:'Схема', url:'робоче місце SEO-спеціаліста', rows:['# Створення сайту: VS Code, GitHub, GitHub Desktop, Vercel / Netlify','# Google: Search Console, Analytics 4, Tag Manager, Ads (Keyword Planner), Trends','# Технічна перевірка: Screaming Frog, Netpeak Spider, DevTools, PageSpeed Insights','# Семантика й конкуренти: Serpstat, Ahrefs, Semrush, SE Ranking','# Звіти: Google Таблиці, Looker Studio'], hl:0, say:'Усі програми зручно розкласти на пʼять полиць. Створення і публікація сайту. Сервіси Google. Технічна перевірка. Семантика й конкуренти. І звіти. Далі в цьому блоці кожна полиця має окремий урок.'},
  {t:'Яка задача, така програма', app:'Google Таблиці', url:'шпаргалка задач', rows:['|! Задача | Програма | Куди натискати','| Чи сторінка в індексі | Search Console | Перевірка URL','| Помилки всього сайту | Screaming Frog | Issues','| Ключові слова | Serpstat / Keyword Planner | Підбір фраз','| Сезонність попиту | Google Trends | Дослідити','| Швидкість | PageSpeed Insights | Аналізувати','| Заявки з пошуку | GA4 | Ключові події'], hl:2, say:'Найважливіша навичка: на кожне питання знати програму і кнопку. Чи сторінка в індексі, перевіряємо в Search Console. Помилки всього сайту в краулері. Ключові слова в Serpstat або Планувальнику. Сезонність у Google Trends.'},
  {t:'Безкоштовний старт', app:'Схема', url:'бюджет 0 грн', rows:['+ Search Console, GA4, GTM, Trends, PageSpeed, Rich Results Test','+ Screaming Frog до 500 URL','+ Ahrefs Webmaster Tools для свого сайту','+ GitHub, GitHub Desktop, VS Code, Vercel Hobby','? Платні: Serpstat, Ahrefs, Semrush, Netpeak, Screaming Frog без ліміту'], hl:1, say:'Почати можна без жодної гривні. Усі сервіси Google безкоштовні, Screaming Frog безкоштовний до 500 адрес, Ahrefs дає безкоштовний аудит власного сайту, а GitHub і Vercel безкоштовно публікують сайт.'},
  {t:'Розширення Chrome', app:'Chrome', url:'chrome://extensions', rows:['| Detailed SEO Extension | мета-теги, заголовки, schema','| SEO META in 1 CLICK | те саме, інший вигляд','| Redirect Path | коди і редиректи','| Robots Exclusion Checker | robots.txt і noindex','| GS Location Changer | видача з іншого міста','| Wappalyzer | на чому зроблений сайт','| Web Vitals | LCP, INP, CLS наживо','| Keywords Everywhere | частотність прямо у видачі (платно)'], hl:0, say:'Розширення Chrome економлять години. Detailed SEO показує мета-теги, Redirect Path коди відповіді, Robots Exclusion Checker заборони, GS Location Changer змінює місто пошуку, Wappalyzer показує CMS.'}
 ],
 ill:[{type:'cols', title:'Пʼять полиць інструментів', cols:[{t:'Створення і публікація', k:'info', items:['VS Code (редактор коду)','Git і GitHub (зберігання версій)','GitHub Desktop (Git без команд)','Vercel, Netlify, GitHub Pages (публікація)','WordPress (CMS)']},{t:'Google', k:'ok', items:['Search Console','Analytics 4','Tag Manager','Ads → Планувальник ключових слів','Trends','PageSpeed Insights','Rich Results Test']},{t:'Технічна перевірка', k:'warn', items:['Screaming Frog','Netpeak Spider','Chrome DevTools','Lighthouse','GTmetrix','Ahrefs Site Audit']},{t:'Семантика, конкуренти, звіти', k:'bad', items:['Serpstat, Ahrefs, Semrush, SE Ranking','SEO PowerSuite (Rank Tracker)','Similarweb','Google Таблиці','Looker Studio']}]}],
 notes:[
  {h:'Повний довідник програм'},
  {table:[['Програма','Для чого','Куди натискати першим','Ціна'],
   ['VS Code','Писати і правити HTML, robots.txt, sitemap.xml','File → Open Folder','безкоштовно'],
   ['Git + GitHub','Зберігати версії сайту в хмарі, працювати в команді','github.com → New repository','безкоштовно'],
   ['GitHub Desktop','Відправляти зміни на GitHub без командного рядка','Commit to main → Push origin','безкоштовно'],
   ['Vercel','Публікувати сайт з GitHub за хвилину, власний домен, HTTPS','Add New → Project → Import','Hobby безкоштовно'],
   ['Netlify','Те саме, що Vercel, файл _redirects для 301','Add new site → Import from Git','є безкоштовний тариф'],
   ['Google Search Console','Індексація, запити, кліки, помилки, sitemap','Ефективність; Сторінки; Перевірка URL','безкоштовно'],
   ['Google Analytics 4','Відвідувачі, джерела, заявки','Звіти → Залучення → Цільова сторінка','безкоштовно'],
   ['Google Tag Manager','Лічильники і події без правок коду','Теги → Створити','безкоштовно'],
   ['Google Ads → Планувальник','Частотність ключових слів','Інструменти → Планувальник ключових слів','потрібен акаунт'],
   ['Google Trends','Сезонність і порівняння запитів','Дослідити → регіон Україна','безкоштовно'],
   ['PageSpeed Insights','Core Web Vitals і поради','pagespeed.web.dev → URL → Аналізувати','безкоштовно'],
   ['Chrome DevTools','Код, статус-коди, швидкість, мобільний вигляд','F12','безкоштовно'],
   ['Screaming Frog','Сканування сайту, всі технічні помилки','Start → Crawl Analysis → Issues','безкоштовно до 500 URL'],
   ['Netpeak Spider','Те саме з українським інтерфейсом','Старт → Помилки','платно, пробний період'],
   ['Serpstat','Ключі, конкуренти, кластеризація, позиції, аудит','Аналіз домену; Аналіз ключових фраз','платно, є обмежений безкоштовний доступ'],
   ['Ahrefs','Посилання, ключі конкурентів, аудит','Site Explorer; Keywords Explorer','платно; Webmaster Tools безкоштовно'],
   ['Semrush','Аналог Ahrefs, сильна база ключів','Domain Overview','платно, пробний період'],
   ['SE Ranking','Позиції, аудит, кластеризація','Проєкти → Позиції','платно'],
   ['SEO PowerSuite','Настільний набір: Rank Tracker, WebSite Auditor, SEO SpyGlass','Rank Tracker → New project','є безкоштовна версія'],
   ['Similarweb','Приблизний трафік і джерела конкурента','ввести домен','частково безкоштовно'],
   ['Rich Results Test','Перевірка мікророзмітки','вставити URL','безкоштовно'],
   ['Bing Webmaster Tools','Search Console для Bing, імпорт з GSC','Import from GSC','безкоштовно'],
   ['Looker Studio','Дашборди і звіти для керівника','Створити → Звіт → Search Console','безкоштовно'],
   ['Wayback Machine','Як сайт виглядав раніше (старі URL, тексти)','web.archive.org → домен','безкоштовно']]},
  {h:'Чим відрізняються Serpstat, Ahrefs і Semrush'},
  {table:[['','Serpstat','Ahrefs','Semrush'],['Сильна сторона','Українська видача, кластеризація, ціна','Найкраща база посилань','Велика база ключів, реклама'],['Інтерфейс українською','так','ні','частково'],['Безкоштовно','обмежено','Webmaster Tools для свого сайту','пробний період'],['Для новачка в Україні','найзручніший','для посилань','за бажанням']]},
  {tip:'Не купуйте все одразу. Мінімум для роботи: сервіси Google + Screaming Frog + один платний сервіс семантики (для України найчастіше Serpstat).'}
 ],
 steps:['Створіть у браузері папку закладок «SEO» і додайте туди всі сервіси з таблиці.','Увійдіть одним робочим Google-акаунтом у Search Console, GA4, Tag Manager, Ads і Looker Studio.','Встановіть програми на компʼютер: VS Code, GitHub Desktop, Screaming Frog.','Зареєструйтесь на github.com і vercel.com (вхід через GitHub).','Встановіть розширення Chrome зі сцени 4.','Зареєструйтесь у Serpstat (обмежений безкоштовний доступ) і Ahrefs Webmaster Tools.','Збережіть шпаргалку «задача → програма → куди натискати» в Google Таблиці.'],
 check:['Маю папку закладок з усіма сервісами','Встановив VS Code, GitHub Desktop, Screaming Frog','Маю акаунти GitHub і Vercel','Встановив SEO-розширення Chrome','Знаю, яка програма відповідає на яке питання','Знаю, що безкоштовне, а що платне'],
 quiz:{q:'Де подивитися сезонність попиту на «купити велосипед» по місяцях?', a:['Google Trends','Screaming Frog','Vercel'], c:0, why:'Google Trends показує, як змінюється інтерес до запиту в часі і регіонах.'},
 tests:[{q:'Яка програма публікує сайт з GitHub за хвилину з HTTPS?', a:['Vercel','Google Analytics','Serpstat'], c:0, why:'Vercel імпортує репозиторій з GitHub і сам публікує сайт, видаючи HTTPS-сертифікат.'},{q:'Де знайти всі технічні помилки сайту одним списком?', a:['Screaming Frog → Issues','Google Trends','Google Tag Manager'], c:0, why:'Краулер сканує весь сайт і збирає проблеми у вкладці Issues.'}]},

/* ================= b3-01 ================= */
{id:'b3-01', title:'Робоче місце: папки, VS Code і збереження на компʼютері', dur:'35 хв', yt:'VS Code для початківців HTML Live Server',
 lead:'Перш ніж щось публікувати, сайт живе **на вашому компʼютері**. Навчимося правильно створювати папку проєкту на локальному диску, редагувати файли у **VS Code**, переглядати сайт локально і не губити роботу.',
 links:[['VS Code','https://code.visualstudio.com'],['Live Server','https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer']],
 nav:['VS Code → File → Open Folder → D:/Projects/velo-site','VS Code → Extensions (Ctrl+Shift+X) → Live Server → Install','VS Code → правий клік на index.html → Open with Live Server','VS Code → File → Auto Save'],
 scenes:[
  {t:'Папка проєкту на диску', app:'Провідник Windows', url:'D:/Projects/velo-site', side:['Цей ПК','Локальний диск (C:)','Локальний диск (D:)','Projects'], sel:3, rows:['|! Імʼя | Тип','| index.html | HTML','| velosypedy/ | папка','| blog/ | папка','| img/ | папка','| robots.txt · sitemap.xml · 404.html | файли','~ Латиниця, без пробілів: D:/Projects/velo-site, а не «Робочий стіл/Мій сайт новий»'], hl:1, say:'Створюємо окрему папку для кожного проєкту на локальному диску, наприклад D, Projects, velo-site. Назва латиницею без пробілів. Усередині головна сторінка index.html, папки сторінок, папка img для картинок і службові файли robots.txt та sitemap.xml.'},
  {t:'Відкриваємо у VS Code', app:'Visual Studio Code', url:'velo-site', side:['EXPLORER','index.html','velosypedy','blog','img','robots.txt','sitemap.xml'], sel:1, rows:['> <!DOCTYPE html>','> <html lang="uk">','> <head>','>   <title>Велосипеди в Києві | VeloShop</title>','~ File → Open Folder → обрати папку проєкту','~ Ctrl+S — зберегти файл · Ctrl+Shift+S — зберегти як'], hl:3, say:'Відкриваємо VS Code, File, Open Folder і обираємо папку проєкту. Ліворуч дерево файлів. Клік відкриває файл для редагування. Ctrl+S зберігає зміни на диск. Увімкніть File, Auto Save, тоді збереження буде автоматичним.'},
  {t:'Перегляд сайту локально', app:'VS Code · Live Server', url:'http://127.0.0.1:5500/index.html', rows:['[Extensions → Live Server → Install]','[Правий клік на index.html → Open with Live Server]','+ Сайт відкрився в браузері за адресою 127.0.0.1:5500','~ Після Ctrl+S сторінка оновлюється сама','? Локальну адресу бачите тільки ви. Google її не бачить'], hl:2, say:'Встановлюємо розширення Live Server. Правий клік на index.html, Open with Live Server. Сайт відкривається в браузері за локальною адресою, і після кожного збереження оновлюється сам. Ця адреса працює тільки на вашому компʼютері.'},
  {t:'Резервні копії', app:'Схема', url:'правило 3-2-1', rows:['+ Копія 1: папка на диску D:','+ Копія 2: GitHub (наступний урок)','+ Копія 3: Google Диск або флешка раз на тиждень','! Не тримайте єдину копію на Робочому столі','~ Git зберігає КОЖНУ версію файлу: можна повернутися до будь-якого дня'], hl:1, say:'Робота має жити щонайменше в трьох місцях: на диску компʼютера, на GitHub і в хмарі. GitHub ще й памʼятає кожну версію файлу, тож помилку можна відкотити. Про це наступний урок.'}
 ],
 ill:[{type:'flow', title:'Шлях файлу', items:[['Компʼютер','D:/Projects/velo-site'],['VS Code','правка і Ctrl+S'],['Live Server','перевірка локально'],['GitHub','збереження версії'],['Vercel','сайт в інтернеті'],['Google','сканує і індексує']]}],
 notes:[
  {h:'Структура папки проєкту'},
  {code:`D:/Projects/velo-site/
├── index.html                  головна  → https://site.ua/
├── velosypedy/
│   ├── index.html              → /velosypedy/
│   └── miski/index.html        → /velosypedy/miski/
├── blog/
│   └── yak-vybraty-velosyped/index.html
├── img/                        картинки у WebP
├── css/style.css
├── robots.txt
├── sitemap.xml
├── 404.html
└── vercel.json                 налаштування Vercel (редиректи, заголовки)`, lang:'дерево'},
  {h:'Корисні клавіші VS Code'},
  {table:[['Клавіші','Що робить'],['Ctrl+S','Зберегти файл'],['Ctrl+P','Швидко відкрити файл за назвою'],['Ctrl+F / Ctrl+H','Знайти / замінити у файлі'],['Ctrl+Shift+F','Знайти в усіх файлах проєкту (наприклад, усі canonical)'],['Ctrl+/','Закоментувати рядок'],['Alt+Shift+F','Вирівняти код'],['Ctrl+`','Відкрити термінал']]},
  {h:'Корисні розширення VS Code'},
  {ul:['**Live Server**: локальний перегляд з автооновленням','**Prettier**: акуратне форматування коду','**HTML CSS Support**: підказки тегів','**Ukrainian Language Pack**: український інтерфейс (за бажанням)']},
  {warn:'Не відкривайте сайт подвійним кліком по index.html, коли посилання починаються з [[/]]: браузер шукатиме файли в корені диска і сторінки «зламаються». Для перевірки використовуйте Live Server.'},
  {tip:'Ctrl+Shift+F по слову [[canonical]] покаже всі сторінки проєкту з цим тегом. Так швидко перевіряєте, чи не забули його десь.'}
 ],
 steps:['Відкрийте Провідник → диск D: (або C:) → створіть папку [[Projects]], у ній папку проєкту латиницею, наприклад [[velo-site]].','Завантажте VS Code з {{code.visualstudio.com|https://code.visualstudio.com}} і встановіть (галочка «Add to PATH»).','VS Code → File → Open Folder → оберіть папку проєкту → «Yes, I trust the authors».','Створіть файл: значок «New File» у дереві → [[index.html]]. Вставте шаблон з уроку «Шаблон <head>».','Увімкніть File → Auto Save.','Extensions (Ctrl+Shift+X) → знайдіть «Live Server» → Install.','Правий клік на [[index.html]] → Open with Live Server. Перевірте сайт у браузері.','Створіть [[robots.txt]] і [[sitemap.xml]] у корені папки.','Раз на тиждень копіюйте папку на Google Диск, поки не налаштували GitHub.'],
 check:['Папка проєкту латиницею на локальному диску','Відкриваю проєкт через File → Open Folder','Увімкнув Auto Save','Встановив Live Server і бачу сайт локально','Знаю Ctrl+Shift+F для пошуку по всіх файлах','Маю щонайменше дві копії проєкту'],
 quiz:{q:'Чи бачить Google сайт за адресою 127.0.0.1:5500?', a:['Так, одразу індексує','Ні, це адреса тільки вашого компʼютера','Так, якщо є sitemap'], c:1, why:'127.0.0.1 означає «цей компʼютер». Щоб Google побачив сайт, його треба опублікувати: GitHub Pages, Vercel або хостинг.'},
 tests:[{q:'Яке імʼя папки найкраще для проєкту?', a:['Мій новий сайт (2)','velo-site','САЙТ ВЕЛО фінал'], c:1, why:'Латиниця без пробілів не створює проблем ні в Git, ні в адресах.'},{q:'Як знайти всі сторінки проєкту з тегом canonical?', a:['Ctrl+Shift+F у VS Code','Відкривати кожен файл','Google Trends'], c:0, why:'Пошук по всіх файлах показує кожен збіг з назвою файлу і рядком.'}]},

/* ================= b3-02 ================= */
{id:'b3-02', title:'Git і GitHub: як зберегти і «залити» сайт', dur:'50 хв', yt:'GitHub Desktop для початківців commit push',
 lead:'**Git** записує кожну версію ваших файлів. **GitHub** зберігає їх у хмарі. **GitHub Desktop** робить усе це кнопками, без командного рядка. Розберемо повний цикл: створити репозиторій, зробити коміт, відправити (push), повернути стару версію.',
 links:[['GitHub Desktop','https://desktop.github.com'],['Документація GitHub','https://docs.github.com/uk']],
 nav:['GitHub Desktop → File → Add local repository → обрати папку','GitHub Desktop → Changes → Summary → Commit to main','GitHub Desktop → Publish repository / Push origin','github.com → репозиторій → History (коміти)','GitHub Desktop → History → правий клік на коміт → Revert changes in commit'],
 scenes:[
  {t:'Слова, які треба знати', app:'Довідка', url:'git', rows:['|! Слово | Що означає','| Репозиторій (repo) | папка проєкту під контролем Git','| Коміт (commit) | збережена версія з описом «що змінено»','| Push | відправити коміти з компʼютера на GitHub','| Pull | забрати зміни з GitHub на компʼютер','| Clone | скачати репозиторій на інший компʼютер','| Branch (гілка) | паралельна версія для експериментів'], hl:2, say:'Шість слів. Репозиторій це папка проєкту. Коміт це збережена версія з описом. Push відправляє коміти на GitHub, pull забирає звідти. Clone копіює репозиторій на інший компʼютер. Гілка дозволяє експериментувати, не ламаючи основну версію.'},
  {t:'Додаємо папку в GitHub Desktop', app:'GitHub Desktop', url:'File → Add local repository', rows:['= Local path: D:/Projects/velo-site','! This directory does not appear to be a Git repository','[create a repository]','= Name: velo-site · Git ignore: None · License: None','[Create repository]','+ Репозиторій створено, 12 файлів у першому коміті'], hl:2, say:'Відкриваємо GitHub Desktop, File, Add local repository, обираємо папку проєкту. Програма скаже, що це ще не репозиторій, і запропонує створити його. Натискаємо create a repository.'},
  {t:'Коміт: зберегти версію', app:'GitHub Desktop', url:'velo-site · main', side:['Changes 3','History'], sel:0, rows:['☑ robots.txt (змінено)','☑ sitemap.xml (змінено)','☑ velosypedy/miski/index.html (новий)','= Summary: Додав сторінку «Міські велосипеди» і оновив sitemap','[Commit to main]','~ Ліворуч список змінених файлів, праворуч що саме змінилось (зелене додано, червоне видалено)'], hl:3, say:'Коли змінили файли, вони зʼявляються у вкладці Changes. Праворуч видно, що саме змінилося: зелене додано, червоне видалено. Пишемо короткий опис зміни і натискаємо Commit to main. Версію збережено.'},
  {t:'Push: відправити на GitHub', app:'GitHub Desktop', url:'velo-site · main', rows:['[Publish repository]','☐ Keep this code private  (для GitHub Pages на безкоштовному тарифі має бути Public)','[Push origin ↑1]','+ Зміни на github.com/vashlogin/velo-site','~ Vercel побачить новий коміт і сам оновить сайт за 30–60 секунд'], hl:2, say:'Перший раз натискаємо Publish repository: проєкт зʼявиться на GitHub. Далі після кожного коміту натискаємо Push origin. Якщо сайт підключений до Vercel, він оновиться сам через хвилину.'},
  {t:'Повернути стару версію', app:'GitHub Desktop', url:'History', side:['Changes','History'], sel:1, rows:['| 28.10 · Змінив robots.txt | ← зламав індексацію','| 27.10 · Додав сторінку міських','| 25.10 · Перша версія','[Правий клік → Revert changes in commit]','+ Створено новий коміт, що скасовує помилку → Push origin'], hl:3, say:'Головна суперсила Git. Вкладка History показує всі коміти. Якщо зміна щось зламала, правий клік, Revert changes in commit. Git створить коміт, що скасовує помилку. Залишається Push origin.'}
 ],
 ill:[{type:'flow', title:'Цикл роботи з Git', items:[['Змінив файли','у VS Code, Ctrl+S'],['Changes','GitHub Desktop бачить зміни'],['Commit','опис + Commit to main'],['Push','Push origin'],['GitHub','версія в хмарі'],['Vercel','сайт оновився']]}],
 notes:[
  {h:'Те саме через командний рядок (для довідки)'},
  {code:`git init                         # перетворити папку на репозиторій
git add .                        # додати всі змінені файли
git commit -m "Додав сторінку міських велосипедів"
git branch -M main
git remote add origin https://github.com/vashlogin/velo-site.git
git push -u origin main          # перший push
git push                         # наступні push
git pull                         # забрати зміни з GitHub
git log --oneline                # історія комітів`, lang:'термінал'},
  {h:'Як писати опис коміту'},
  {table:[['Погано','Добре'],['правки','Додав canonical на сторінки блогу'],['fix','Виправив 404 у меню: /kontakt → /kontakty/'],['оновлення','Оновив sitemap.xml: +3 сторінки категорій']]},
  {h:'.gitignore: що не відправляти на GitHub'},
  {code:`# службові файли системи і редактора
.DS_Store
Thumbs.db
.vscode/
# паролі і ключі НІКОЛИ не комітимо
.env
# великі вихідні файли
*.psd`, lang:'.gitignore'},
  {h:'Публічний чи приватний репозиторій'},
  {table:[['','Public','Private'],['Хто бачить код','Усі','Тільки ви і запрошені'],['GitHub Pages безкоштовно','так','ні (потрібен платний план)'],['Vercel','так','так'],['Коли обирати','навчальні проєкти','сайти клієнтів']]},
  {warn:'Ніколи не комітьте паролі, API-ключі, доступи до хостингу. Навіть якщо видалити їх наступним комітом, вони залишаться в історії.'},
  {tip:'Працюєте на іншому компʼютері? GitHub Desktop → File → Clone repository → оберіть проєкт. Перед роботою натискайте Fetch origin / Pull, щоб мати свіжу версію.'}
 ],
 steps:['Завантажте GitHub Desktop з {{desktop.github.com|https://desktop.github.com}}, встановіть і увійдіть акаунтом GitHub (File → Options → Accounts).','File → Add local repository → оберіть папку проєкту → «create a repository» → Create repository.','Створіть файл [[.gitignore]] за прикладом з конспекту.','У вкладці Changes перевірте список файлів → напишіть Summary → Commit to main.','Натисніть Publish repository. Для GitHub Pages зніміть галочку «Keep this code private».','Відкрийте github.com → ваш репозиторій: файли мають бути там.','Змініть будь-який файл у VS Code → збережіть → у GitHub Desktop Commit → Push origin.','Відкрийте History, знайдіть свій коміт і подивіться зміни.','Потренуйтеся: зробіть навмисну помилку, закомітьте, потім Revert changes in commit → Push origin.'],
 check:['Встановив GitHub Desktop і увійшов','Створив репозиторій з папки проєкту','Зробив перший коміт з нормальним описом','Опублікував репозиторій на GitHub','Вмію робити Push після кожної зміни','Вмію відкотити коміт через Revert','Маю .gitignore і не комічу паролі'],
 quiz:{q:'Ви зробили Commit, але на github.com змін немає. Чого не вистачає?', a:['Push origin','Нового репозиторію','Перезавантажити компʼютер'], c:0, why:'Commit зберігає версію на вашому компʼютері. Push відправляє її на GitHub.'},
 tests:[{q:'Ви зламали robots.txt учорашнім комітом. Як швидко повернути?', a:['History → Revert changes in commit → Push','Видалити репозиторій','Чекати, поки Google сам виправить'], c:0, why:'Revert створює новий коміт, що скасовує помилкові зміни, історія лишається цілою.'},{q:'Що НЕ можна комітити?', a:['index.html','robots.txt','Файл з паролями до хостингу'], c:2, why:'Усе, що потрапило в історію Git, лишається там назавжди і може бути видно іншим.'}]},

/* ================= b3-03 ================= */
{id:'b3-03', title:'Vercel: публікація сайту з GitHub', dur:'45 хв', yt:'Vercel deploy static site from GitHub custom domain',
 lead:'**Vercel** бере ваш репозиторій з GitHub і за хвилину публікує сайт з HTTPS. Кожен push оновлює сайт автоматично. На відміну від GitHub Pages, тут є **серверні 301-редиректи** і **HTTP-заголовки** через файл [[vercel.json]]. Розглянемо також **Netlify** як альтернативу.',
 links:[['Vercel','https://vercel.com'],['Документація: redirects','https://vercel.com/docs/project-configuration#redirects'],['Netlify','https://www.netlify.com']],
 nav:['vercel.com → Sign Up → Continue with GitHub','Vercel → Add New… → Project → Import (репозиторій) → Deploy','Vercel → Project → Settings → Domains → Add','Vercel → Project → Deployments → (деплой) → Visit / Promote','Реєстратор домену → DNS → A @ 76.76.21.21 · CNAME www → cname.vercel-dns.com'],
 scenes:[
  {t:'Імпорт проєкту', app:'Vercel', url:'vercel.com/new', rows:['[Continue with GitHub]','|! Import Git Repository | ','| vashlogin/velo-site | [Import]','= Framework Preset: Other','= Root Directory: ./','[Deploy]'], hl:1, say:'Заходимо на vercel.com і входимо через GitHub. Натискаємо Add New, Project. Vercel покаже ваші репозиторії. Біля потрібного натискаємо Import. Для звичайного HTML-сайту Framework Preset залишаємо Other і натискаємо Deploy.'},
  {t:'Сайт опубліковано', app:'Vercel', url:'velo-site.vercel.app', side:['Project','Deployments','Analytics','Settings'], sel:1, rows:['+ Congratulations! velo-site.vercel.app','|! Deployment | Статус | Гілка','| 8f2c1a · Додав сторінку міських | Ready · Production | main','| 3b9e77 · Тест нового банера | Ready · Preview | test-banner','~ Кожен push у main = новий Production. Інші гілки = Preview-адреси'], hl:3, say:'Через хвилину сайт доступний за адресою з .vercel.app. У вкладці Deployments кожен push створює новий деплой. Гілка main стає основним сайтом. Інші гілки отримують окремі Preview-адреси для перевірки змін.'},
  {t:'Власний домен', app:'Vercel', url:'Settings → Domains', side:['General','Domains','Environment Variables'], sel:1, rows:['= Domain: site.ua  [Add]','|! Тип | Імʼя | Значення','| A | @ | 76.76.21.21','| CNAME | www | cname.vercel-dns.com','+ Valid Configuration · SSL сертифікат видано','~ Оберіть основну версію: site.ua, а www.site.ua → 308 Redirect'], hl:5, say:'Settings, Domains, вписуємо домен. Vercel покаже, які DNS-записи додати в реєстратора: A-запис і CNAME для www. Коли записи підхопляться, зʼявиться сертифікат. Обираємо основну версію, а другу Vercel переадресує сам.'},
  {t:'Редиректи і заголовки у vercel.json', app:'VS Code', url:'velo-site/vercel.json', rows:['> {','>   "trailingSlash": true,','>   "redirects": [','>     { "source": "/old-page/", "destination": "/new-page/", "permanent": true }','>   ],','>   "headers": [ { "source": "/(.*).pdf", "headers": [ { "key": "X-Robots-Tag", "value": "noindex" } ] } ]','> }'], hl:3, say:'Файл vercel.json у корені проєкту керує сервером. trailingSlash вирівнює слеш у кінці адрес. redirects задає постійні редиректи, permanent true означає 308, аналог 301. headers додає заголовки, наприклад noindex для всіх PDF.'},
  {t:'Preview-адреси і SEO', app:'Chrome', url:'velo-site-git-test-banner-vashlogin.vercel.app', rows:['~ Preview-деплої Vercel автоматично віддають заголовок','> x-robots-tag: noindex','+ Тестові версії не потраплять у Google','? Але основний домен перевіряйте: noindex там бути не повинно'], hl:1, say:'Preview-адреси Vercel за замовчуванням віддають заголовок noindex, тому тестові версії не потрапляють у пошук. А от на основному домені такого заголовка бути не повинно: перевірте це в DevTools, вкладка Network.'}
 ],
 ill:[{type:'cols', title:'GitHub Pages, Vercel чи Netlify', cols:[{t:'GitHub Pages', k:'info', items:['Безкоштовно','Немає серверних 301','Немає власних заголовків','Сайт користувача в корені']},{t:'Vercel', k:'ok', items:['Безкоштовний Hobby','301/308 у vercel.json','Заголовки (X-Robots-Tag)','Preview для кожної гілки','Автодеплой після push']},{t:'Netlify', k:'ok', items:['Безкоштовний тариф','301 у файлі _redirects','Заголовки у _headers','Форми без сервера']}]}],
 notes:[
  {h:'Повний приклад vercel.json для SEO'},
  {code:`{
  "cleanUrls": true,
  "trailingSlash": true,
  "redirects": [
    { "source": "/old-page/", "destination": "/velosypedy/miski/", "permanent": true },
    { "source": "/blog/:year(\\\\d{4})/:slug/", "destination": "/blog/:slug/", "permanent": true }
  ],
  "headers": [
    {
      "source": "/(.*)\\\\.pdf",
      "headers": [ { "key": "X-Robots-Tag", "value": "noindex" } ]
    }
  ]
}`, lang:'vercel.json'},
  {table:[['Параметр','Що робить'],['cleanUrls','Прибирає .html з адрес: /about.html → /about'],['trailingSlash','true: всі адреси зі слешем у кінці (інша версія переадресується)'],['redirects','Постійні (permanent: true → 308) або тимчасові (false → 307) редиректи'],['headers','HTTP-заголовки для шляхів: X-Robots-Tag, кеш тощо']]},
  {h:'Netlify: те саме іншими файлами'},
  {code:`# файл _redirects у корені
/old-page/    /velosypedy/miski/    301

# файл _headers у корені
/*.pdf
  X-Robots-Tag: noindex`, lang:'Netlify'},
  {h:'Чек-лист після першого деплою'},
  {ul:['Сайт відкривається за основним доменом з HTTPS','www і без www → одна версія одним редиректом','Слеш у кінці однаковий скрізь','[[/robots.txt]] і [[/sitemap.xml]] відкриваються з кодом 200','На основному домені немає [[x-robots-tag: noindex]]','Неіснуюча сторінка віддає код 404 (файл [[404.html]])','Сайт додано в Search Console, sitemap надіслано']},
  {warn:'Не давайте Google індексувати і [[velo-site.vercel.app]], і [[site.ua]] одночасно. Після підключення домену поставте canonical на адреси основного домену. Vercel переадресує технічну адресу на основний домен, якщо в Settings → Domains для неї обрано Redirect.'}
 ],
 steps:['Зайдіть на {{vercel.com|https://vercel.com}} → Sign Up → Continue with GitHub → дозвольте доступ до репозиторіїв.','Add New… → Project → біля репозиторію [[velo-site]] натисніть Import.','Framework Preset: Other, Root Directory: [[./]] → Deploy. Дочекайтеся «Congratulations».','Відкрийте адресу [[.vercel.app]], перевірте сторінки.','Створіть у корені проєкту [[vercel.json]] з налаштуваннями trailingSlash і redirects → Commit → Push. Перевірте у Deployments новий деплой.','Settings → Domains → Add → [[site.ua]]. Додайте в реєстратора DNS-записи, які покаже Vercel.','Коли статус Valid Configuration, додайте [[www.site.ua]] і оберіть для нього Redirect на основний домен.','Перевірте редиректи розширенням Redirect Path і заголовки в DevTools → Network.','Додайте домен у Search Console і надішліть sitemap.'],
 check:['Підключив Vercel до GitHub','Сайт опубліковано на .vercel.app','Підключив власний домен, HTTPS працює','www і без www ведуть на одну адресу','Налаштував vercel.json (слеш, редиректи)','Перевірив, що на основному домені немає noindex','Push автоматично оновлює сайт'],
 quiz:{q:'Як на Vercel зробити постійний редирект /old-page/ → /new-page/?', a:['Блок redirects у vercel.json з permanent: true','Тег meta refresh','Неможливо'], c:0, why:'Vercel читає vercel.json і віддає серверний постійний редирект (308, аналог 301).'},
 tests:[{q:'Чому Preview-адреси Vercel не потрапляють у Google?', a:['Vercel додає їм заголовок x-robots-tag: noindex','Вони платні','Google не сканує Vercel'], c:0, why:'Тестові деплої за замовчуванням закриті від індексації заголовком.'},{q:'Що відбувається після Push у гілку main?', a:['Нічого','Vercel автоматично публікує нову версію сайту','Сайт видаляється'], c:1, why:'Vercel стежить за репозиторієм і запускає новий Production-деплой.'}]},

/* ================= b3-04 ================= */
{id:'b3-04', title:'Serpstat: де що і як працювати', dur:'50 хв', yt:'Serpstat навчання аналіз домену ключові слова',
 lead:'**Serpstat** найпопулярніший в Україні сервіс для семантики і конкурентів. Розберемо головні модулі: аналіз домену, аналіз ключових фраз, конкуренти, кластеризація, відстеження позицій і аудит сайту, і що в кожному натискати.',
 links:[['Serpstat','https://serpstat.com'],['Академія Serpstat','https://serpstat.com/uk/academy/']],
 nav:['Serpstat → Аналіз домену → Огляд → вписати домен → база Google UA','Serpstat → Аналіз домену → Органічні ключові слова → Фільтри → Експорт','Serpstat → Аналіз ключових фраз → Підбір фраз','Serpstat → Інструменти → Кластеризація → Новий проєкт','Serpstat → Відстеження позицій → Новий проєкт'],
 scenes:[
  {t:'Аналіз домену: огляд', app:'Serpstat', url:'Аналіз домену → Огляд', side:['Огляд','Органічні ключі','Конкуренти','Топ сторінок','Беклінки','Аудит'], sel:0, rows:['= Домен: velo-shop.ua · База: Google UA','| Видимість 4,8 | Трафік ~42 тис./міс. | Ключів 18 400','| У топ-10 | 3 200 ключів','~ Графік: як змінювалась видимість за 12 місяців','~ Обирайте базу Google UA для українського ринку'], hl:1, say:'Вписуємо домен у верхній рядок і обираємо базу Google UA. Огляд показує видимість, приблизний трафік і кількість ключів у топі. Графік підказує, коли сайт зростав чи падав.'},
  {t:'Органічні ключові слова', app:'Serpstat', url:'Аналіз домену → Органічні ключові слова', side:['Огляд','Органічні ключі','Конкуренти'], sel:1, rows:['= Фільтр: Позиція 1–10 · Частота > 100','|! Ключ | Частота | Позиція | URL','| міський велосипед | 2 400 | 2 | /velosypedy/miski/','| велосипед для дівчини | 880 | 4 | /blog/velo-dlya-divchyny/','[Експорт → XLSX]'], hl:4, say:'Органічні ключові слова показують, за якими запитами конкурент у топі, на якій позиції і яка сторінка ранжується. Фільтри звужують список. Експорт вивантажує таблицю для семантичного ядра.'},
  {t:'Підбір фраз', app:'Serpstat', url:'Аналіз ключових фраз → Підбір фраз', side:['Підбір фраз','Пошукові підказки','Схожі фрази','Конкуренти у топі'], sel:0, rows:['= Фраза: міський велосипед','|! Ключ | Частота | Складність | CPC','| міський велосипед жіночий | 590 | 32 | 4,1 грн','| міський велосипед з кошиком | 320 | 18 | 3,7 грн','~ Складність 0–100: чим менше, тим легше потрапити в топ'], hl:3, say:'Аналіз ключових фраз, Підбір фраз розширює маркер у сотні варіантів з частотністю, складністю і ціною кліку. Пошукові підказки показують реальні формулювання з автодоповнення Google.'},
  {t:'Кластеризація', app:'Serpstat', url:'Кластеризація', rows:['= Ключі: 420 · Регіон: Google UA · Тип: м’який','= Сила звʼязку: 3 спільних URL','[Почати кластеризацію]','# Міські велосипеди (34 ключі)','# Жіночі міські (12 ключів)','# Як вибрати міський (9 ключів)'], hl:2, say:'У кластеризації завантажуємо ключі, обираємо регіон і силу звʼязку. Serpstat порівняє видачу і згрупує запити. Кожна група стає однією посадковою сторінкою.'},
  {t:'Відстеження позицій', app:'Serpstat', url:'Відстеження позицій', rows:['|! Ключ | Сьогодні | Тиждень тому | Зміна','| міський велосипед | 6 | 9 | ▲ 3','| велосипед київ | 14 | 12 | ▼ 2','~ Регіон: Київ · Пристрій: мобільний · Щоденна перевірка','+ Звіт можна надсилати на пошту щотижня'], hl:1, say:'Модуль відстеження позицій щодня перевіряє ваші ключі в потрібному місті і на потрібному пристрої. Видно, що виросло, а що впало. Звіт можна автоматично надсилати керівнику.'}
 ],
 ill:[{type:'tree', title:'Модулі Serpstat', root:{t:'Serpstat', k:'q', c:[{t:'Аналіз домену: огляд, органічні ключі, конкуренти, топ сторінок', k:'ok'},{t:'Аналіз ключових фраз: підбір, підказки, схожі фрази', k:'ok'},{t:'Аналіз URL: ключі конкретної сторінки', k:'ok'},{t:'Беклінки: донори, анкори, нові і втрачені', k:'ok'},{t:'Інструменти: кластеризація, аналіз тексту', k:'warn'},{t:'Відстеження позицій', k:'warn'},{t:'Аудит сайту', k:'warn'}]}}],
 notes:[
  {h:'Що в якому модулі робимо'},
  {table:[['Задача','Модуль Serpstat','Що отримуємо'],['Знайти конкурентів','Аналіз домену → Конкуренти','Сайти з найбільшою кількістю спільних ключів'],['Ключі конкурента','Аналіз домену → Органічні ключові слова','Список з позиціями і URL'],['Найсильніші сторінки конкурента','Аналіз домену → Топ сторінок','Сторінки з найбільшим трафіком'],['Розширити семантику','Аналіз ключових фраз → Підбір фраз','Сотні варіантів з частотністю'],['Питання людей','Аналіз ключових фраз → Пошукові підказки','Формулювання для H2 і FAQ'],['Згрупувати ключі','Кластеризація','Групи під сторінки'],['Ключі однієї сторінки','Аналіз URL','За якими запитами ранжується URL'],['Позиції щодня','Відстеження позицій','Динаміка і звіти'],['Технічний аудит','Аудит сайту','Список помилок з пріоритетом'],['Посилання','Беклінки','Донори, анкори, втрачені посилання']]},
  {h:'Метрики Serpstat'},
  {table:[['Метрика','Що означає'],['Видимість','Умовний показник присутності домену в топі за базою ключів'],['Частота','Середня кількість пошуків на місяць'],['Складність (KD)','0–100, наскільки важко потрапити в топ-10'],['CPC','Ціна кліку в рекламі: показує комерційність'],['Конкурентність у PPC','Скільки рекламодавців купують запит']]},
  {tip:'Дані сервісів приблизні. Перевіряйте важливі висновки в Search Console (для свого сайту) і вручну у видачі.'},
  {warn:'Безкоштовний доступ має ліміти на кількість запитів і рядків. Плануйте: спершу конкуренти і ключі, потім експорт.'}
 ],
 steps:['Зареєструйтесь на {{serpstat.com|https://serpstat.com}}, оберіть українську мову інтерфейсу.','Аналіз домену → впишіть домен конкурента → база Google UA → Огляд. Запишіть видимість і трафік.','Органічні ключові слова → фільтр Позиція 1–10 → Експорт. Повторіть для 3 конкурентів.','Аналіз домену → Конкуренти: знайдіть ще 2–3 конкуренти, яких не знали.','Аналіз ключових фраз → Підбір фраз → ваш маркер → Експорт.','Обʼєднайте експорти в Google Таблицях, почистіть, залиште колонки ключ, частота, складність.','Кластеризація → новий проєкт → завантажте ключі → Google UA → 3 спільних URL → запустіть.','Відстеження позицій → новий проєкт → домен, регіон, пристрій, 20–50 ключів.'],
 check:['Обираю базу Google UA','Знайшов конкурентів через модуль Конкуренти','Вивантажив ключі конкурентів','Розширив семантику через Підбір фраз','Запустив кластеризацію','Налаштував відстеження позицій','Перевіряю дані сервісу в GSC і вручну'],
 quiz:{q:'Де в Serpstat подивитися, за якими запитами конкурент у топ-10?', a:['Аналіз домену → Органічні ключові слова, фільтр позиція 1–10','Відстеження позицій','Аудит сайту'], c:0, why:'Органічні ключові слова показують позиції і URL конкурента за кожним ключем.'},
 tests:[{q:'Що означає складність ключа 15?', a:['Відносно легко потрапити в топ','Дуже важко','Частота 15 на місяць'], c:0, why:'Складність від 0 до 100: низьке значення означає слабшу конкуренцію в топі.'},{q:'Навіщо модуль Кластеризація?', a:['Згрупувати ключі під окремі сторінки','Перевірити швидкість','Знайти беклінки'], c:0, why:'Кластеризація групує запити зі схожою видачею, кожна група це одна сторінка.'}]},

/* ================= b3-05 ================= */
{id:'b3-05', title:'Ahrefs і Ahrefs Webmaster Tools', dur:'45 хв', yt:'Ahrefs tutorial for beginners site explorer',
 lead:'**Ahrefs** найсильніший у **посиланнях** і добре показує ключі конкурентів. Для власного сайту є безкоштовна версія **Ahrefs Webmaster Tools (AWT)** з аудитом і беклінками. Розберемо Site Explorer, Keywords Explorer, Site Audit і що натискати.',
 links:[['Ahrefs Webmaster Tools','https://ahrefs.com/webmaster-tools'],['Ahrefs Academy','https://ahrefs.com/academy']],
 nav:['Ahrefs → Site Explorer → домен → Overview','Site Explorer → Organic keywords → фільтри → Export','Site Explorer → Backlinks / Referring domains','Site Explorer → Best by links → фільтр HTTP code 404','Keywords Explorer → фраза → Matching terms','Site Audit → New project → Issues'],
 scenes:[
  {t:'Site Explorer: огляд', app:'Ahrefs', url:'Site Explorer → velo-shop.ua', side:['Overview','Organic keywords','Top pages','Backlinks','Referring domains','Best by links','Organic competitors'], sel:0, rows:['| DR 42 | Referring domains 380 | Organic traffic ~18K','| Organic keywords 9 200 | Traffic value $6,1K','~ DR (Domain Rating) 0–100: сила посилального профілю','~ Графік Referring domains: чи росте кількість донорів'], hl:0, say:'Site Explorer це серце Ahrefs. Вводимо домен і бачимо огляд. DR показує силу посилального профілю від 0 до 100. Referring domains це кількість сайтів, що посилаються. Організний трафік оцінка відвідувань з Google.'},
  {t:'Беклінки і донори', app:'Ahrefs', url:'Site Explorer → Referring domains', side:['Backlinks','Referring domains','Anchors','Broken backlinks'], sel:1, rows:['|! Донор | DR | Трафік донора | Посилань','| velo-news.ua | 48 | 12K | 6','| kyiv-blog.com | 31 | 2,1K | 2','| links-farm.xyz | 55 | 0 | 900 ? підозріло','~ Anchors: з якими текстами на вас посилаються'], hl:3, say:'Referring domains показує всіх донорів з їхнім рейтингом і трафіком. Донор з високим DR, але нульовим трафіком і сотнями посилань, найімовірніше посилальна ферма. Anchors показує тексти посилань.'},
  {t:'Беклінки на 404', app:'Ahrefs', url:'Site Explorer → Best by links', side:['Best by links','Broken backlinks'], sel:0, rows:['= Фільтр: HTTP code = 404','|! Сторінка | Referring domains','| /akciya-2023/ | 14','| /blog/top-10-2022/ | 9','+ 301 на живі сторінки: повертаємо вагу посилань'], hl:2, say:'Best by links з фільтром 404 знаходить ваші сторінки, які зникли, але на них досі посилаються інші сайти. Ставимо 301 на найближчу живу сторінку і повертаємо силу цих посилань.'},
  {t:'Keywords Explorer', app:'Ahrefs', url:'Keywords Explorer → Ukraine', rows:['= Ключ: міський велосипед · Країна: Ukraine','| Volume 2,4K | KD 21 | Clicks 1,9K','# Matching terms · Related terms · Questions','| як вибрати міський велосипед | 320 | KD 9','~ Questions: питання людей для статей і FAQ'], hl:3, say:'Keywords Explorer показує частотність, складність KD і скільки кліків реально отримують результати. Розділ Questions дає питання людей, з яких виходять ідеальні статті і FAQ.'},
  {t:'Webmaster Tools для свого сайту', app:'Ahrefs Webmaster Tools', url:'ahrefs.com/webmaster-tools', rows:['[Підтвердити через Google Search Console]','# Site Audit: 112 Errors · 340 Warnings','| 4XX page | 12','| Canonical points to redirect | 3','| Title too long | 41','+ Аудит щотижня автоматично і безкоштовно'], hl:0, say:'Для свого сайту є безкоштовні Ahrefs Webmaster Tools. Підтверджуємо сайт через Search Console одним кліком. Отримуємо щотижневий технічний аудит і список беклінків свого сайту.'}
 ],
 ill:[{type:'cols', title:'Ahrefs: платний і безкоштовний', cols:[{t:'Ahrefs (платний)', k:'info', items:['Будь-який домен, зокрема конкурентів','Keywords Explorer','Content Explorer','Rank Tracker']},{t:'Ahrefs Webmaster Tools (безкоштовно)', k:'ok', items:['Тільки підтверджені свої сайти','Site Audit щотижня','Беклінки свого сайту','Органічні ключі свого сайту']}]}],
 notes:[
  {h:'Головні розділи Site Explorer'},
  {table:[['Розділ','Що показує','Для чого'],['Overview','DR, донори, трафік, ключі','Перше враження про сайт'],['Organic keywords','Ключі в топі з позиціями і URL','Семантика конкурента'],['Top pages','Сторінки з найбільшим трафіком','Що найкраще працює в ніші'],['Organic competitors','Сайти зі спільними ключами','Знайти конкурентів'],['Backlinks','Усі посилання','Аналіз профілю'],['Referring domains','Унікальні донори','Якість і кількість донорів'],['Anchors','Тексти посилань','Природність анкорів'],['Best by links','Сторінки з найбільшою кількістю посилань','Знайти 404 з посиланнями'],['Broken backlinks','Посилання на биті сторінки','Повернути втрачену вагу'],['Content gap','Ключі конкурентів, яких немає у вас','Ідеї нових сторінок']]},
  {h:'Метрики Ahrefs'},
  {table:[['Метрика','Значення'],['DR (Domain Rating)','Сила посилань домену, 0–100'],['UR (URL Rating)','Сила посилань конкретної сторінки'],['KD (Keyword Difficulty)','Складність потрапити в топ-10, 0–100'],['Volume','Пошуків на місяць'],['Traffic value','Скільки коштував би цей трафік у рекламі']]},
  {tip:'Content gap: впишіть 3 конкурентів і свій сайт. Ahrefs покаже ключі, за якими конкуренти в топі, а ви ні. Це готовий план нових сторінок.'},
  {warn:'DR не є метрикою Google. Не купуйте посилання лише заради DR донора: дивіться на трафік і тематику.'}
 ],
 steps:['Зайдіть на {{ahrefs.com/webmaster-tools|https://ahrefs.com/webmaster-tools}} → Sign up → підтвердьте сайт через «Import from Google Search Console».','Запустіть Site Audit і подивіться Issues: Errors, Warnings, Notices.','Site Explorer → свій домен → Backlinks і Referring domains: хто на вас посилається.','Best by links → фільтр HTTP code 404: поставте 301 для сторінок з посиланнями.','Якщо є платний доступ: Site Explorer → домен конкурента → Organic keywords → фільтр Position 1–10 → Export.','Top pages конкурента: запишіть 10 найсильніших сторінок.','Keywords Explorer → маркер → Ukraine → Matching terms і Questions → Export.','Content gap: 3 конкуренти проти вашого сайту → список нових тем.'],
 check:['Підключив Ahrefs Webmaster Tools','Подивився Site Audit','Знаю своїх донорів і анкори','Знайшов 404 з беклінками і поставив 301','Знаю, де ключі і топ-сторінки конкурента','Розумію DR, UR, KD'],
 quiz:{q:'Що показує Referring domains в Ahrefs?', a:['Унікальні сайти, що посилаються на домен','Швидкість сайту','Помилки robots.txt'], c:0, why:'Referring domains це список донорів: кожен домен рахується один раз, хоч би скільки посилань він дав.'},
 tests:[{q:'Як безкоштовно отримати аудит свого сайту від Ahrefs?', a:['Ahrefs Webmaster Tools','Keywords Explorer','Неможливо'], c:0, why:'AWT безкоштовний для підтверджених сайтів і щотижня запускає Site Audit.'},{q:'Донор DR 60, трафік 0, 900 посилань на вас. Що це найімовірніше?', a:['Цінний партнер','Посилальна ферма','Google'], c:1, why:'Високий рейтинг без живих відвідувачів і масові посилання ознаки штучного сайту.'}]},

/* ================= b3-06 ================= */
{id:'b3-06', title:'Google Trends і Планувальник ключових слів', dur:'35 хв', yt:'Google Trends як користуватися SEO',
 lead:'**Google Trends** показує, **коли** і **де** люди шукають тему, і порівнює запити між собою. **Планувальник ключових слів** у Google Ads дає частотність. Разом вони відповідають: що писати, коли публікувати і який варіант назви обрати.',
 links:[['Google Trends','https://trends.google.com/trends/?geo=UA'],['Планувальник ключових слів','https://ads.google.com/home/tools/keyword-planner/']],
 nav:['Google Trends → Дослідити → регіон Україна → період 5 років','Google Trends → + Порівняти (до 5 запитів)','Google Trends → Субрегіон / Схожі запити / Схожі теми','Google Ads → Інструменти → Планування → Планувальник ключових слів → Знайти нові ключові слова','Планувальник → Отримати прогнози обсягу пошуку'],
 scenes:[
  {t:'Сезонність запиту', app:'Google Trends', url:'trends.google.com → Дослідити', rows:['= Запит: купити велосипед · Україна · Останні 5 років','~ Графік: пік у квітні–травні, мінімум у грудні–січні','+ Висновок: оновлювати категорії і запускати статті в лютому–березні','~ 100 = максимум інтересу за період, це відносна шкала, не кількість пошуків'], hl:2, say:'Вводимо запит, обираємо Україну і період 5 років. Графік показує, що велосипеди шукають навесні, а взимку попит мінімальний. Отже готувати сторінки треба в лютому, до сезону. Шкала відносна: 100 означає пік, а не кількість пошуків.'},
  {t:'Порівняння варіантів', app:'Google Trends', url:'Порівняти', rows:['| велосипед міський | 54','| міський велосипед | 100','| велосипед для міста | 38','+ Висновок: у title і H1 пишемо «міський велосипед»','~ Додайте до 5 запитів кнопкою «+ Порівняти»'], hl:1, say:'Кнопкою Порівняти додаємо до пʼяти варіантів. Тут видно, що «міський велосипед» шукають частіше за інші формулювання. Саме його ставимо в title і H1.'},
  {t:'Регіони і схожі запити', app:'Google Trends', url:'Інтерес за субрегіоном', rows:['| Київ | 100','| Львівська область | 84','| Одеська область | 61','# Схожі запити → Зростаючі','| електровелосипед ціна | +350%','~ Зростаючі запити: нові теми, поки конкуренти їх не помітили'], hl:4, say:'Нижче інтерес за областями, корисно для локального бізнесу. Блок Схожі запити, режим Зростаючі показує теми, що стрімко набирають популярність. Це ідеї для нових сторінок раніше за конкурентів.'},
  {t:'Частотність у Планувальнику', app:'Google Ads', url:'Планувальник ключових слів', side:['Знайти нові ключові слова','Отримати прогнози'], sel:0, rows:['= Ключові слова: міський велосипед · Регіон: Україна · Мова: українська','|! Ключове слово | Сер. к-сть пошуків/міс. | Зміна за 3 міс.','| міський велосипед | 1 тис.–10 тис. | +90%','| велосипед міський жіночий | 100–1 тис. | +50%','[Завантажити ключові слова]'], hl:3, say:'Trends не дає кількість пошуків, тому частотність беремо в Планувальнику ключових слів Google Ads. Без запущеної реклами значення показуються діапазонами, але для порівняння цього достатньо. Завантажуємо таблицю.'}
 ],
 ill:[{type:'cols', title:'Trends чи Планувальник', cols:[{t:'Google Trends', k:'info', items:['Відносний інтерес 0–100','Сезонність по місяцях','Порівняння до 5 запитів','Регіони і зростаючі теми','Безкоштовно, без акаунта']},{t:'Планувальник ключових слів', k:'ok', items:['Кількість пошуків на місяць','Сотні нових ідей ключів','Конкуренція і ціна в рекламі','Потрібен акаунт Google Ads']}]}],
 notes:[
  {h:'Як використовувати Trends у SEO'},
  {table:[['Задача','Що робимо в Trends','Рішення'],['Коли оновлювати сторінки','Сезонність за 5 років','За 1–2 місяці до піку'],['Яке формулювання в title','Порівняння варіантів','Беремо найпопулярніший'],['Куди орієнтувати локальні сторінки','Інтерес за субрегіоном','Сторінки для міст з попитом'],['Нові теми для блогу','Схожі запити → Зростаючі','Стаття раніше за конкурентів'],['Чи вмирає тема','Тренд за 5 років','Не вкладатися в теми, що падають']]},
  {h:'Параметри Планувальника'},
  {table:[['Поле','Що обрати'],['Місцеположення','Україна або конкретні міста'],['Мова','українська (окремо російська, якщо працюєте з нею)'],['Пошукові мережі','Google'],['Діапазон дат','Останні 12 місяців']]},
  {tip:'Акаунт Google Ads без реклами: ads.google.com → при створенні оберіть «Перейти в режим експерта» → «Створити обліковий запис без кампанії».'},
  {warn:'Діапазони «1 тис.–10 тис.» грубі. Для точнішої частотності використовуйте Serpstat або Ahrefs, а Планувальник для ідей і порівняння.'}
 ],
 steps:['Відкрийте {{trends.google.com|https://trends.google.com/trends/?geo=UA}} → впишіть головний запит → Україна → Останні 5 років.','Запишіть місяці піку і спаду. Поставте в календар нагадування оновити сторінки за 1–2 місяці до піку.','Натисніть «+ Порівняти» і додайте 2–4 формулювання. Оберіть найпопулярніше для title/H1.','Прокрутіть до «Інтерес за субрегіоном»: де найбільше попиту.','Схожі запити → Зростаючі: випишіть 5 ідей для статей.','Google Ads → Інструменти → Планувальник ключових слів → Знайти нові ключові слова → маркери → Україна, українська → Отримати результати.','Завантажте ключові слова (CSV) і додайте в семантичне ядро.'],
 check:['Знаю сезонність своєї ніші','Обрав формулювання для title через порівняння','Подивився регіони попиту','Знайшов зростаючі теми','Завантажив ключі з Планувальника','Розумію, що Trends показує відносний інтерес'],
 quiz:{q:'У Trends значення 100 у травні. Що це означає?', a:['100 пошуків у травні','Травень пік інтересу за обраний період','100% людей шукають велосипед'], c:1, why:'Trends нормує дані: 100 означає максимальний інтерес у межах обраного запиту, регіону і періоду.'},
 tests:[{q:'Де взяти кількість пошуків на місяць безкоштовно?', a:['Планувальник ключових слів Google Ads','Google Trends','GitHub'], c:0, why:'Планувальник показує середню кількість пошуків (діапазоном без запущеної реклами).'},{q:'Пік попиту на велосипеди у травні. Коли оновлювати сторінки?', a:['У травні','У лютому–березні','У грудні'], c:1, why:'Google потрібен час, щоб переіндексувати і переранжувати сторінки. Готуйтеся до сезону заздалегідь.'}]}
);
