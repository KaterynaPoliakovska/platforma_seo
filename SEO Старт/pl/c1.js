window.L = window.L || [];
/* Blok 1. Nowa strona na GitHub + Vercel. Przykład: biuro tłumaczeń „Mosty”, mosty.com.ua */
L.push(
{id:'c1-01', title:'Jak Google znajduje i indeksuje strony', dur:'10 min', yt:'jak google indeksuje strony',
 what:'Aby strona pojawiła się w wyszukiwarce, Google musi **wykryć adres URL**, **zeskanować** stronę, **dodać ją do indeksu** i dopiero wtedy **pokazać w wynikach**. Jeśli strony nie ma w Google, przyczyna zawsze leży na jednym z tych etapów.',
 svg:[['pipeline',0,0,'Droga każdej strony do wyników wyszukiwania.']],
 nav:['Search Console → Sprawdzenie adresu URL → wklej adres','Google → site:mosty.com.ua'],
 steps:['Otwórz Google i wpisz [[site:mosty.com.ua]]: przybliżona liczba stron w indeksie.','Search Console → wklej adres strony w górny pasek → Enter.','Spójrz na blok „Indeksowanie strony”: Wykrywanie, Skanowanie, Indeksowanie.','Jeśli widzisz „Adres URL jest w Google”, strona jest w indeksie. Jeśli nie, przyczyna jest podana w tym samym bloku.'],
 example:[{table:[['Etap','Czego potrzebuje','Co go psuje'],['Wykrywanie','Linki do strony, sitemap.xml','Strona-sierota bez linków'],['Skanowanie','Kod 200, zgoda w robots.txt','Disallow, błędy 404/5xx'],['Indeksowanie','Brak noindex, unikalny tekst','noindex, duplikat, słaby tekst'],['Wyniki','Dopasowanie do zapytania','Silniejsza konkurencja']]}],
 mistakes:['Oczekiwanie, że strona pojawi się w wyszukiwarce zaraz po publikacji. Indeksowanie trwa od kilku dni.','Sprawdzanie indeksowania tylko przez site:. Wynik jest przybliżony; dokładny daje tylko Sprawdzenie adresu URL.','Zablokowanie strony w robots.txt w nadziei, że zniknie z indeksu.'],
 check:['Znam 4 etapy: wykrywanie, skanowanie, indeksowanie, wyniki','Sprawdziłem swoją stronę w Sprawdzeniu adresu URL','Wiem, że site: daje przybliżoną liczbę'],
 quiz:{q:'Na stronę nie prowadzą żadne linki i nie ma jej w mapie witryny. Co się stanie?', a:['Google może jej nigdy nie wykryć','Od razu trafi do topu','Google usunie witrynę'], c:0, why:'Bez linków i mapy witryny Google nie dowie się o adresie.'},
 tests:[{q:'Gdzie dokładnie sprawdzić, czy strona jest w indeksie?', a:['Search Console → Sprawdzenie adresu URL','Google Trends','Serpstat'], c:0, why:'Sprawdzenie adresu URL pokazuje odpowiedź samego Google.'},{q:'Google skanuje strony głównie jako…', a:['Smartfon','Tablet','Telewizor'], c:0, why:'Google indeksuje mobilną wersję strony.'},{q:'Na stronę nie prowadzi żaden link wewnętrzny i nie ma jej w mapie witryny. Jaki jest najbardziej prawdopodobny problem?', a:['Google nie może wykryć adresu URL','Strona wolno się wczytuje','Strona nie ma meta opisu'], c:0, why:'Bez linków i mapy witryny robot po prostu nie zna adresu. To etap wykrywania: dodaj linki z powiązanych stron i wpisz URL do mapy witryny.'},{q:'Z jakiego urządzenia Google najczęściej skanuje strony?', a:['Smartfon (mobile-first)','Tablet','Telewizor'], c:0, why:'Google indeksuje mobilną wersję strony.'}],
 scenes:[
  {t:'Cztery etapy', app:'Schemat', url:'droga strony', rows:['# 1. Wykrywanie: Google dowiaduje się o adresie URL','# 2. Skanowanie: robot pobiera stronę','# 3. Indeksowanie: strona trafia do bazy','# 4. Wyniki: strona pojawia się dla zapytania'], hl:0, say:'Każda strona przechodzi cztery etapy. Google dowiaduje się o adresie, skanuje stronę, dodaje ją do indeksu i pokazuje dla zapytania.'},
  {t:'Sprawdzenie w Search Console', app:'Search Console', url:'Sprawdzenie adresu URL', side:['Przegląd','Skuteczność','Sprawdzenie adresu URL','Strony'], sel:2, rows:['= URL: https://mosty.com.ua/uslugy/notarialnyi-pereklad/','+ Adres URL jest w Google','| Skanowanie dozwolone? | Tak','| Indeksowanie dozwolone? | Tak'], hl:1, say:'Wklejamy adres w górny pasek Search Console. Zielony napis oznacza, że strona jest w indeksie. Jeśli nie, poniżej będzie przyczyna.'},
  {t:'Szybkie sprawdzenie w Google', app:'Google', url:'google.com/search?q=site:mosty.com.ua', rows:['= site:mosty.com.ua','~ Około 48 wyników','~ site:mosty.com.ua/uslugy/ pokaże tylko dział usług'], hl:0, say:'Do szybkiej oceny wpisujemy w Google site, dwukropek i domenę. Liczba jest przybliżona, ale pokazuje skalę.'}]},

{id:'c1-02', title:'Adresy URL i kody odpowiedzi', dur:'10 min', yt:'kody odpowiedzi http 301 404 seo',
 what:'URL to adres strony, a kod odpowiedzi to pierwsze, co serwer mówi Google: **200** strona istnieje, **301** przeniesiono ją na stałe, **404** nie ma jej, **5xx** serwer nie działa. Kod decyduje, co stanie się ze stroną w indeksie.',
 svg:[['url',0,0,'Części adresu URL i zasady.'],['status',0,0,'Grupy kodów odpowiedzi.']],
 nav:['Chrome → F12 → Network → F5 → pierwszy wiersz → Status','Chrome → rozszerzenie Redirect Path','Screaming Frog → Response Codes'],
 steps:['Zainstaluj w Chrome rozszerzenie Redirect Path.','Otwórz [[http://mosty.com.ua]]: Redirect Path powinien pokazać jedno przekierowanie 301 na [[https://mosty.com.ua/]].','Sprawdź [[www.mosty.com.ua]]: również jedno 301 na wersję główną.','Otwórz nieistniejący adres, np. [[/test-404/]]: kod musi być 404, a nie 200.','Wszystkie kody strony naraz zobaczysz w Screaming Frog → Response Codes (Blok 2).'],
 example:[{table:[['Kod','Znaczenie','Co robimy'],['200','Strona jest dostępna','Norma'],['301','Przeniesiono na stałe','Przy zmianie URL, http→https, www→bez www'],['302','Tymczasowo','Jeśli na stałe, zmień na 301'],['404','Nie znaleziono','Jest odpowiednik: 301 na niego. Nie ma: zostaw 404'],['410','Usunięto na stałe','Świadomie usunięte strony'],['500/503','Błąd serwera','Pilnie do programisty']]},{code:`Dobrze: https://mosty.com.ua/uslugy/notarialnyi-pereklad/
Źle:    https://mosty.com.ua/index.php?id=17
Źle:    https://mosty.com.ua/Послуги/Нотаріальний_Переклад`, lang:'URL'}],
 mistakes:['Cyrylica, wielkie litery i podkreślenia w adresach.','Strona otwiera się z www i bez www z kodem 200: dwie identyczne witryny.','Pusta strona „nie znaleziono” zwraca 200 (soft 404).','302 zamiast 301 przy trwałej przeprowadzce.'],
 check:['http i www prowadzą do jednego adresu jednym 301','Nieistniejąca strona zwraca 404','URL łacińskimi literami, z myślnikami, małymi literami'],
 quiz:{q:'Strona przeniesiona na nowy adres na stałe. Jaki kod?', a:['301','302','200'], c:0, why:'301 oznacza trwałe przeniesienie i przekazuje sygnały na nowy adres.'},
 tests:[{q:'Co oznacza 404?', a:['Strony nie znaleziono','Strona została przeniesiona','Serwer nie działa'], c:0, why:'404 to „nie znaleziono”.'},{q:'Pusta strona z kodem 200 to…', a:['Soft 404','Norma','Przekierowanie'], c:0, why:'Google traktuje taką stronę jako błąd.'},{q:'Stronę przeniesiono na nowy adres na zawsze. Jakie przekierowanie ustawiamy?', a:['302','301','Meta refresh po 5 sekundach'], c:1, why:'301 (lub 308) oznacza trwałe przeniesienie. Google przekaże sygnały starej strony nowej i z czasem zastąpi URL w indeksie.'},{q:'Co oznacza kod 503?', a:['Strona usunięta na stałe','Usługa tymczasowo niedostępna','Wszystko w porządku'], c:1, why:'503 stosuje się na czas prac technicznych.'}],
 scenes:[
  {t:'Części adresu', app:'Schemat', url:'https://mosty.com.ua/uslugy/?utm_source=fb', rows:['| https:// | protokół','| mosty.com.ua | domena','| /uslugy/ | ścieżka','| ?utm_source=fb | parametr: może tworzyć duplikat'], hl:3, say:'Adres składa się z protokołu, domeny, ścieżki i parametrów. Parametry często tworzą duplikaty.'},
  {t:'Kod w DevTools', app:'Chrome DevTools', url:'F12 → Network', side:['Elements','Network'], sel:1, rows:['|! Name | Status','| old-page/ | 301','| notarialnyi-pereklad/ | 200'], hl:1, say:'Wciskamy F12, kartę Network i odświeżamy stronę. Pierwszy wiersz pokazuje kod: tutaj stary adres zwraca 301 na nowy.'},
  {t:'Redirect Path', app:'Chrome', url:'http://mosty.com.ua', rows:['> 301 http://mosty.com.ua','> 200 https://mosty.com.ua/','+ Jeden krok: poprawnie'], hl:2, say:'Rozszerzenie Redirect Path pokazuje całą drogę: jedno 301, a potem 200. Tak powinno być.'}]},

{id:'c1-03', title:'Słowa kluczowe: Planer słów kluczowych, Trends i Serpstat', dur:'20 min', yt:'dobór słów kluczowych Serpstat planer słów kluczowych',
 what:'Rdzeń semantyczny to lista zapytań, na które strona ma się wyświetlać. Pomysły i liczbę wyszukiwań bierzemy z **Planera słów kluczowych** i **Serpstat**, sezonowość i wybór sformułowania z **Google Trends**. Wynik: tabela „zapytanie, liczba wyszukiwań, strona”.',
 svg:[['serp',0,0,'Zapytanie użytkownika i fragment w wynikach.']],
 nav:['Google Ads → Narzędzia → Planer słów kluczowych → Odkryj nowe słowa kluczowe','Serpstat → Keyword research → Keyword selection → baza Google UA','Google Trends → Eksploruj → Ukraina → Ostatnie 5 lat → + Porównaj'],
 steps:['Wypisz 10–20 fraz bazowych: „tłumaczenie notarialne”, „tłumacz przysięgły”, „apostille”, „tłumaczenie dyplomu”.','Planer słów kluczowych → Odkryj nowe słowa kluczowe → frazy bazowe → Ukraina, ukraiński → Wyświetl wyniki → Pobierz (CSV).','Serpstat → Keyword research → Keyword selection → fraza bazowa → Export.','Połącz pliki w Arkuszach Google, usuń duplikaty (Dane → Czyszczenie danych).','Usuń śmieci: „za darmo”, „referat”, cudze marki, miasta, w których nie działasz.','Google Trends: porównaj sformułowania („tłumaczenie notarialne” czy „tłumaczenie z poświadczeniem notarialnym”) i wybierz popularniejsze do title.','Dodaj kolumny: liczba wyszukiwań, intencja, strona (następna lekcja).'],
 example:[{table:[['Zapytanie','Liczba','Strona'],['tłumaczenie notarialne','1 900','/uslugy/notarialnyi-pereklad/'],['tłumaczenie notarialne cena','480','/uslugy/notarialnyi-pereklad/'],['tłumacz przysięgły polska','720','/uslugy/prysiazhnyi-tlumach/'],['co to jest apostille','590','/blog/shcho-take-apostyl/']]}],
 mistakes:['Zbieranie słów kluczowych „na oko”, bez liczby wyszukiwań.','Zostawianie śmieci: „za darmo”, „zrób to sam”, cudze marki.','Traktowanie danych z Trends jako liczby wyszukiwań. Trends pokazuje względne zainteresowanie od 0 do 100.','Zbieranie fraz tylko po ukraińsku, gdy klienci szukają po polsku („tłumacz przysięgły”).'],
 check:['Wypisałem frazy bazowe','Pobrałem słowa z Planera i Serpstat','Wyczyściłem listę','Wybrałem sformułowanie przez Trends','Tabela ma kolumnę liczby wyszukiwań'],
 quiz:{q:'Gdzie sprawdzić, w których miesiącach ludzie najczęściej szukają usługi?', a:['Google Trends','Screaming Frog','Vercel'], c:0, why:'Trends pokazuje sezonowość zapytania.'},
 tests:[{q:'Co pokazuje Planer słów kluczowych bez aktywnej kampanii?', a:['Przedziały liczby wyszukiwań','Dokładne pozycje','Linki zwrotne'], c:0, why:'Bez wydatków na reklamy liczba wyszukiwań jest pokazywana w przedziałach.'},{q:'Jakie zapytania usuwamy z rdzenia?', a:['Nietrafione: „za darmo”, cudze marki','Wszystkie z cyframi','Najpopularniejsze'], c:0, why:'W rdzeniu są tylko zapytania, na które strona naprawdę odpowiada.'},{q:'W top 10 dla „jak wybrać tłumacza przysięgłego” są same poradniki. Jaką stronę tworzymy?', a:['Stronę usługi','Artykuł na blogu','Stronę kontaktu'], c:1, why:'Intencję wyznaczają wyniki. Jeśli Google pokazuje artykuły, człowiek szuka informacji. Strona usługi nie odpowie tej intencji i nie trafi do topu.'},{q:'Po czym zapytania trafiają do jednego klastra?', a:['Wspólne adresy URL w top 10 wyników','Ta sama pierwsza litera','Ta sama liczba wyszukiwań'], c:0, why:'Jeśli Google pokazuje te same strony, intencja jest taka sama.'}],
 scenes:[
  {t:'Planer słów kluczowych', app:'Google Ads', url:'Planer słów kluczowych', rows:['= Słowa kluczowe: tłumaczenie notarialne','= Ukraina · ukraiński','|! Słowo kluczowe | Śr. liczba wyszukiwań w miesiącu','| tłumaczenie notarialne | 1 tys.–10 tys.','[Pobierz pomysły na słowa kluczowe]'], hl:3, say:'W Planerze wpisujemy frazy bazowe, wybieramy kraj i język. Dostajemy pomysły z liczbą wyszukiwań i pobieramy plik.'},
  {t:'Serpstat: dobór fraz', app:'Serpstat', url:'Keyword research → Keyword selection', rows:['= Fraza: tłumaczenie notarialne · Google UA','|! Fraza | Liczba | Trudność','| tłumaczenie notarialne cena | 480 | 22','[Export]'], hl:2, say:'Dobór fraz w Serpstat daje dokładniejszą liczbę wyszukiwań i trudność. Eksportujemy do arkusza.'},
  {t:'Trends: które sformułowanie', app:'Google Trends', url:'Porównaj', rows:['| tłumaczenie notarialne | 100','| tłumaczenie z poświadczeniem notarialnym | 21','+ W title piszemy „tłumaczenie notarialne”'], hl:2, say:'W Trends porównujemy warianty. Wybieramy sformułowanie, którego ludzie szukają częściej.'}]},

{id:'c1-04', title:'Klasteryzacja i intencja w Serpstat', dur:'15 min', yt:'klasteryzacja słów kluczowych Serpstat',
 what:'Klasteryzacja grupuje zapytania, na które może odpowiedzieć **jedna strona**: Serpstat porównuje wyniki i jeśli w top 10 jest wiele tych samych witryn, zapytania trafiają do jednej grupy. **Intencję** (czego chce człowiek) ustalamy na podstawie wyników: artykuły, usługi czy katalogi.',
 svg:[['intent',0,0,'Cztery rodzaje intencji i typ strony dla każdej.'],['cluster',0,0,'Klastry na przykładzie strony „Mosty”.']],
 nav:['Serpstat → Tools → Clustering → New project','Clustering → Google UA → siła powiązania 3 → Start','Google (incognito) → zapytanie → jaki typ stron jest w top 10'],
 steps:['Serpstat → Clustering → New project → wklej oczyszczone frazy.','Wyszukiwarka Google UA, siła powiązania: 3 wspólne adresy URL → uruchom.','Przejrzyj grupy: każda ma dotyczyć jednej rzeczy.','Dla głównych zapytań otwórz wyniki: w topie artykuły → intencja informacyjna, usługi → komercyjna.','Każdemu klastrowi przypisz jedną stronę i jej typ.'],
 example:[{table:[['Klaster','Intencja','Strona'],['tłumaczenie notarialne, …cena, tłumaczenie poświadczone','komercyjna','/uslugy/notarialnyi-pereklad/'],['tłumacz przysięgły polska, tłumaczenie przysięgłe','komercyjna','/uslugy/prysiazhnyi-tlumach/'],['co to jest apostille, po co jest apostille','informacyjna','/blog/shcho-take-apostyl/']]}],
 mistakes:['Dwie strony pod jeden klaster: konkurują ze sobą (kanibalizacja).','Artykuł pod zapytanie, gdzie w topie są tylko strony usług, lub odwrotnie.','Brak ręcznej weryfikacji klastrów po automatycznym grupowaniu.'],
 check:['Uruchomiłem klasteryzację w Serpstat','Sprawdziłem grupy ręcznie','Ustaliłem intencję na podstawie wyników','Każdy klaster = jedna strona'],
 quiz:{q:'W topie dla „co to jest apostille” są same artykuły. Co tworzymy?', a:['Artykuł na blogu','Stronę usługi z ceną','Nic'], c:0, why:'Intencja informacyjna: człowiek chce wyjaśnienia, a nie zamówienia.'},
 tests:[{q:'Co to jest kanibalizacja?', a:['Dwie strony witryny konkurują o jedno zapytanie','Konkurent kopiuje tekst','Brak mapy witryny'], c:0, why:'Zasada: jeden klaster, jedna strona.'},{q:'Po czym Serpstat łączy zapytania?', a:['Wspólne witryny w top 10','Ta sama długość','Ta sama liczba wyszukiwań'], c:0, why:'Podobne wyniki oznaczają tę samą intencję.'},{q:'Gdzie w Serpstat sprawdzić, na jakie zapytania konkurent jest w top 10?', a:['Domain analysis → Organic keywords, filtr pozycja 1–10','Rank tracker','Site audit'], c:0, why:'Organic keywords pokazują pozycje i adresy URL konkurenta dla każdej frazy.'},{q:'Co oznacza trudność frazy 15?', a:['Stosunkowo łatwo trafić do topu','Bardzo trudno','15 wyszukiwań miesięcznie'], c:0, why:'Trudność od 0 do 100: niska wartość oznacza słabszą konkurencję w topie.'}],
 scenes:[
  {t:'Uruchomienie klasteryzacji', app:'Serpstat', url:'Clustering', rows:['= Fraz: 240 · Google UA','= Siła powiązania: 3','[Start clustering]'], hl:2, say:'Wklejamy frazy, wybieramy Google UA i siłę powiązania trzy. Uruchamiamy.'},
  {t:'Wynik', app:'Serpstat', url:'Klastry', rows:['# Tłumaczenie notarialne · 18 fraz','# Tłumacz przysięgły · 9 fraz','# Co to jest apostille · 6 fraz'], hl:0, say:'Serpstat zwraca grupy. Każda grupa stanie się jedną stroną witryny.'},
  {t:'Intencja z wyników', app:'Google', url:'co to jest apostille', rows:['| 1 | Artykuł: co to jest apostille','| 2 | Artykuł: apostille czy legalizacja','+ Informacyjna: piszemy artykuł'], hl:2, say:'Otwieramy wyniki. Jeśli w topie są artykuły, pod ten klaster piszemy artykuł.'}]},

{id:'c1-05', title:'Konkurencja: GS Location Changer, Serpstat, Ahrefs', dur:'20 min', yt:'analiza konkurencji Serpstat Ahrefs',
 what:'Konkurenci w SEO to witryny z **top 10 dla Twoich zapytań** w Twoim mieście. Wyniki z właściwego miasta oglądamy przez **GS Location Changer**, słowa kluczowe i strony konkurentów w **Serpstat**, ich linki w **Ahrefs**.',
 svg:[['competitors',0,0,'Wyniki → skan → tabela → wnioski.']],
 nav:['Chrome → incognito → GS Location Changer → Kijów, uk, google.com.ua → Search','Serpstat → Domain analysis → Competitors','Serpstat → Domain analysis → Organic keywords → Export','Ahrefs → Site Explorer → Referring domains / Top pages'],
 steps:['Otwórz okno incognito i włącz GS Location Changer: miasto, język, google.com.ua.','Wpisz 10 głównych zapytań i zapisz domeny z top 10.','Domeny, które pojawiają się najczęściej, to główni konkurenci. Wybierz 3–5.','Serpstat → Domain analysis → domena konkurenta → Organic keywords → Export.','Serpstat → Top pages: które strony dają konkurentowi ruch.','Ahrefs → Site Explorer → Referring domains: skąd ma linki.','Zapisz 5 wniosków: jakich stron, bloków i linków potrzebuje Twoja witryna.'],
 example:[{table:[['Co porównujemy','Konkurent A','My'],['Strona dla każdej usługi','tak','nie'],['Ceny na stronie docelowej','tak','nie'],['Strony dla języków (polski, angielski)','tak','częściowo'],['Domeny linkujące (Ahrefs)','120','8']]}],
 mistakes:['Szukanie konkurentów poza trybem incognito i bez właściwego miasta.','Uważanie za konkurentów tylko znanych firm, a nie tych w topie.','Kopiowanie tekstów konkurentów zamiast pomysłów na strukturę.'],
 check:['Sprawdziłem wyniki z właściwego miasta','Wybrałem 3–5 konkurentów','Pobrałem ich słowa kluczowe w Serpstat','Przejrzałem ich linki w Ahrefs','Zapisałem wnioski'],
 quiz:{q:'Do czego służy GS Location Changer?', a:['Do oglądania wyników z właściwego miasta','Do przyspieszenia strony','Do sprawdzenia mapy witryny'], c:0, why:'Wyniki Google zależą od lokalizacji.'},
 tests:[{q:'Gdzie zobaczyć zapytania, na które wyświetla się konkurent?', a:['Serpstat → Organic keywords','GTM','Vercel'], c:0, why:'Raport pokazuje słowa kluczowe, pozycje i strony konkurenta.'},{q:'Gdzie oglądamy linki konkurenta?', a:['Ahrefs → Referring domains','Google Trends','GA4'], c:0, why:'Ahrefs ma największą bazę linków.'},{q:'Po co potrzebny jest GS Location Changer?', a:['Aby zmienić IP i obejść ograniczenia stron','Aby zobaczyć wyniki Google tak, jakbyś był w innym mieście lub kraju','Aby przyspieszyć stronę'], c:1, why:'Wyniki zależą od lokalizacji. Rozszerzenie przekazuje do wyszukiwarki parametry miejsca i języka, więc widzisz prawdziwy top dla klientów w danym mieście.'},{q:'Kto jest Twoim konkurentem w SEO?', a:['Witryny w top 10 dla Twoich zapytań','Tylko sklepy w okolicy','Twój dostawca'], c:0, why:'W SEO konkuruje się o miejsca w wynikach.'}],
 scenes:[
  {t:'Wyniki z miasta', app:'GS Location Changer', url:'Kijów · uk', rows:['= Location: Kyiv · Language: uk','[Search]','| 1 | perekladach.ua','| 2 | mosty.com.ua'], hl:0, say:'Wybieramy w rozszerzeniu miasto i język i szukamy. Zapisujemy, kto jest w topie.'},
  {t:'Słowa kluczowe konkurenta', app:'Serpstat', url:'Domain analysis → Organic keywords', rows:['|! Fraza | Pozycja | URL','| tłumaczenie notarialne | 2 | /notarialnyi/','[Export]'], hl:1, say:'W Serpstat widzimy frazy konkurenta, jego pozycje i strony.'},
  {t:'Linki konkurenta', app:'Ahrefs', url:'Site Explorer → Referring domains', rows:['|! Domena | DR','| osvita-news.ua | 45','| visa-blog.com | 31'], hl:1, say:'W Ahrefs widzimy, które witryny linkują do konkurenta. To pomysły na nasze linki.'}]},

{id:'c1-06', title:'Struktura strony i strony docelowe', dur:'15 min', yt:'struktura strony SEO strony docelowe',
 what:'Struktura to drzewo działów zbudowane z klastrów. Każdy klaster staje się **stroną docelową**: stroną, na którą człowiek trafia z wyszukiwarki pod konkretne zapytanie. Ważne strony powinny być nie głębiej niż **3 kliknięcia** od strony głównej.',
 svg:[['tree',0,0,'Struktura strony „Mosty”.']],
 nav:['Arkusze Google → arkusz „Struktura”: URL · klaster · typ · title · H1'],
 steps:['Weź klastry z lekcji o klasteryzacji.','Ułóż je w drzewo: Strona główna → Usługi / Języki / Blog → strony.','Każdej stronie nadaj URL łacińskimi literami: [[/uslugy/notarialnyi-pereklad/]].','Zdecyduj, czego NIE indeksujemy: „Dziękujemy”, wyszukiwarka na stronie, strony testowe.','Zaplanuj menu: działy i główne usługi zwykłymi linkami.'],
 example:[{code:`/                                strona główna
/uslugy/                         dział usług
/uslugy/notarialnyi-pereklad/    strona docelowa
/uslugy/prysiazhnyi-tlumach/     strona docelowa
/uslugy/apostyl/                 strona docelowa
/blog/shcho-take-apostyl/        artykuł
/kontakty/                       kontakt
/dyakuiemo/                      noindex`, lang:'struktura'},{p:'Strona docelowa usługi: H1 z głównym zapytaniem, cena i termin, jak zamówić, FAQ, opinie, formularz.'}],
 mistakes:['Tworzenie działów „na zapas”, bez zapytań.','Ważna usługa 4–5 kliknięć od strony głównej.','Menu z przycisków JavaScript bez linków [[<a href>]].'],
 check:['Mam drzewo strony z klastrów','Każda strona ma URL','Głębokość ≤ 3 kliknięcia','Ustaliłem, co wyłączamy z indeksu'],
 quiz:{q:'Jaki jest główny cel strony docelowej?', a:['Odpowiedzieć na konkretne zapytanie i doprowadzić do zapytania ofertowego','Zebrać wszystkie usługi','Publikować aktualności'], c:0, why:'Stronę docelową tworzy się pod jeden klaster i jedno działanie.'},
 tests:[{q:'Strona „Dziękujemy za zamówienie” powinna mieć…', a:['noindex','miejsce w mapie witryny','miejsce w menu'], c:0, why:'Nie daje żadnej wartości z wyszukiwarki.'},{q:'Jaka jest maksymalna głębokość ważnych stron?', a:['3 kliknięcia','7 kliknięć','Bez znaczenia'], c:0, why:'Głębokie strony są rzadziej skanowane.'},{q:'Co z poniższych zwykle NIE powinno być indeksowane?', a:['Strona usługi „Tłumaczenie notarialne”','Strona wyników wyszukiwania na stronie ?s=tłumaczenie','Artykuł „Co to jest apostille”'], c:1, why:'Wewnętrzna wyszukiwarka generuje nieskończenie wiele słabych stron i duplikatów. Zamyka się je noindex lub w robots.txt, a pod zapytania z popytem tworzy się pełne strony docelowe.'},{q:'Jaka jest maksymalna pożądana głębokość ważnej strony od strony głównej?', a:['3 kliknięcia','10 kliknięć','Nie ma znaczenia'], c:0, why:'Głębokie strony są rzadziej skanowane i dostają mniej mocy.'}],
 scenes:[
  {t:'Drzewo strony', app:'Schemat', url:'mosty.com.ua', rows:['/ Strona główna','  /uslugy/ Usługi','    /uslugy/notarialnyi-pereklad/','  /blog/','    /blog/shcho-take-apostyl/'], hl:2, say:'Układamy klastry w drzewo: strona główna, działy, strony.'},
  {t:'Strona docelowa', app:'Schemat strony', url:'/uslugy/notarialnyi-pereklad/', rows:['# H1: Tłumaczenie notarialne dokumentów','Cena od 350 UAH · termin od 1 dnia','Jak zamówić · FAQ · Opinie','[Zamów tłumaczenie]'], hl:0, say:'Strona docelowa odpowiada na zapytanie: czym jest usługa, ile kosztuje, jak zamówić.'},
  {t:'Co wyłączyć', app:'Tabela', url:'zasady indeksowania', rows:['|! Strona | Indeks','| Usługi, artykuły | tak','| /dyakuiemo/ | noindex','| wyszukiwanie ?s= | noindex'], hl:2, say:'Strony techniczne wyłączamy z indeksu.'}]},

{id:'c1-07', title:'Strona na komputerze i GitHub', dur:'20 min', yt:'GitHub Desktop commit push dla początkujących',
 what:'Pliki strony trzymamy w folderze na dysku, edytujemy w **VS Code**, a kopię z historią zmian przechowujemy na **GitHub**. **GitHub Desktop** robi to przyciskami: **Commit** zapisuje wersję, **Push** wysyła ją na GitHub.',
 svg:[['github',0,0,'Od folderu na komputerze do działającej strony.']],
 nav:['Eksplorator plików → D: → Projects → mosty','VS Code → File → Open Folder','GitHub Desktop → File → Add local repository → create a repository','GitHub Desktop → Commit to main → Publish repository / Push origin'],
 steps:['Utwórz folder [[D:/Projects/mosty]] (łacińskie litery, bez spacji).','VS Code → File → Open Folder → ten folder. Utwórz [[index.html]], [[robots.txt]], [[sitemap.xml]].','Zainstaluj GitHub Desktop i zaloguj się kontem GitHub.','File → Add local repository → wybierz folder → create a repository → Create.','Opisz zmianę w polu Summary → Commit to main.','Publish repository (za pierwszym razem), potem po każdej zmianie Push origin.','Sprawdź pliki na github.com w swoim repozytorium.'],
 example:[{code:`D:/Projects/mosty/
├── index.html
├── uslugy/notarialnyi-pereklad/index.html   → /uslugy/notarialnyi-pereklad/
├── blog/shcho-take-apostyl/index.html
├── img/
├── robots.txt
├── sitemap.xml
├── 404.html
└── vercel.json`, lang:'folder projektu'},{p:'Opis commita piszemy zrozumiale: „Dodałem stronę apostille i zaktualizowałem mapę witryny”, a nie „poprawki”.'}],
 mistakes:['Zrobienie Commit bez Push: na GitHub nie ma zmian.','Commitowanie haseł i kluczy dostępu.','Trzymanie jedynej kopii strony na Pulpicie.'],
 check:['Folder projektu na dysku','Otwieram go w VS Code','Repozytorium utworzone w GitHub Desktop','Zrobiłem Commit i Push','Widzę pliki na github.com'],
 quiz:{q:'Zrobiłeś Commit, a na GitHub nie ma zmian. Czego brakuje?', a:['Push origin','Nowego repozytorium','Restartu'], c:0, why:'Commit zapisuje lokalnie, Push wysyła na GitHub.'},
 tests:[{q:'Jak cofnąć zmianę, która wszystko zepsuła?', a:['History → Revert changes in commit → Push','Usunąć repozytorium','Nic nie robić'], c:0, why:'Revert anuluje commit i zachowuje historię.'},{q:'Jak nazwać folder projektu?', a:['mosty','Moja strona (nowa)','STRONA final 2'], c:0, why:'Łacińskie litery, bez spacji.'},{q:'Zrobiłeś Commit, ale na github.com nie ma zmian. Czego brakuje?', a:['Push origin','Nowego repozytorium','Restartu komputera'], c:0, why:'Commit zapisuje wersję na Twoim komputerze. Push wysyła ją na GitHub.'},{q:'Wczorajszy commit zepsuł robots.txt. Jak szybko to cofnąć?', a:['History → Revert changes in commit → Push','Usunąć repozytorium','Poczekać, aż Google sam naprawi'], c:0, why:'Revert tworzy nowy commit, który anuluje błędne zmiany; historia zostaje nienaruszona.'}],
 scenes:[
  {t:'Folder w VS Code', app:'VS Code', url:'mosty', side:['index.html','uslugy','blog','robots.txt','sitemap.xml'], sel:0, rows:['> <title>Biuro tłumaczeń Mosty</title>','~ Ctrl+S zapisuje'], hl:0, say:'Otwieramy folder projektu w VS Code i edytujemy pliki. Ctrl+S zapisuje.'},
  {t:'Commit', app:'GitHub Desktop', url:'mosty · main', side:['Changes 2','History'], sel:0, rows:['☑ sitemap.xml','☑ uslugy/apostyl/index.html','= Summary: Dodałem stronę apostille','[Commit to main]'], hl:3, say:'GitHub Desktop pokazuje zmienione pliki. Piszemy opis i klikamy Commit to main.'},
  {t:'Push', app:'GitHub Desktop', url:'mosty · main', rows:['[Push origin ↑1]','+ Zmiany są na github.com/twojlogin/mosty'], hl:0, say:'Klikamy Push origin i zmiany pojawiają się na GitHub.'}]},

{id:'c1-08', title:'Publikacja na Vercel i własna domena', dur:'15 min', yt:'Vercel publikacja strony z GitHub własna domena',
 what:'**Vercel** pobiera repozytorium z GitHub i publikuje stronę z HTTPS. Po podłączeniu każdy **Push** aktualizuje stronę automatycznie. Przekierowania i nagłówki ustawia się w pliku [[vercel.json]].',
 svg:[['github',0,0,'GitHub → Vercel → strona.'],['redirect',0,0,'Przekierowanie musi być jednym krokiem.']],
 nav:['vercel.com → Continue with GitHub','Vercel → Add New… → Project → Import → Deploy','Vercel → Project → Settings → Domains → Add','Vercel → Project → Deployments'],
 steps:['vercel.com → zaloguj się przez GitHub.','Add New… → Project → przy repozytorium [[mosty]] kliknij Import.','Framework Preset: Other, Build Command i Output Directory puste → Deploy.','Sprawdź stronę pod adresem [[mosty.vercel.app]].','Settings → Domains → Add → [[mosty.com.ua]]. U rejestratora dodaj rekordy DNS, które pokaże Vercel.','Dodaj [[www.mosty.com.ua]] i ustaw dla niego Redirect na domenę główną.','Utwórz [[vercel.json]] (przykład poniżej) → Commit → Push. Sprawdź przekierowania w Redirect Path.'],
 example:[{code:`{
  "trailingSlash": true,
  "redirects": [
    { "source": "/poslugi/notarialnyj/", "destination": "/uslugy/notarialnyi-pereklad/", "permanent": true }
  ]
}`, lang:'vercel.json'},{table:[['Problem','Przyczyna','Rozwiązanie'],['404 na stronie głównej','index.html nie leży w katalogu głównym repozytorium','Settings → Root Directory → folder z index.html'],['404 na stronie głównej','Wypełnione Output Directory','Wyczyść pole → Redeploy'],['Stary wygląd strony','Nie wykonano Push','GitHub Desktop → Push origin']]}],
 mistakes:['Pozwolenie na indeksowanie i mosty.vercel.app, i mosty.com.ua: duplikat strony.','index.html w podfolderze repozytorium: Vercel pokazuje 404.','Robienie 301 przez meta refresh zamiast vercel.json.'],
 check:['Strona opublikowana na Vercel','Podłączona własna domena z HTTPS','www prowadzi do wersji głównej','Przekierowania z vercel.json działają','Push aktualizuje stronę'],
 quiz:{q:'Vercel pokazuje 404, a w repozytorium jest tylko folder „site”. Dlaczego?', a:['index.html nie jest w katalogu głównym: ustaw Root Directory','Brak mapy witryny','Google zablokował'], c:0, why:'Vercel szuka index.html w katalogu głównym lub w folderze z Root Directory.'},
 tests:[{q:'Jak zrobić 301 na Vercel?', a:['redirects w vercel.json z permanent: true','Tag title','Nie da się'], c:0, why:'Vercel czyta vercel.json i zwraca przekierowanie po stronie serwera.'},{q:'Co aktualizuje stronę na Vercel?', a:['Push do gałęzi main','Odświeżenie przeglądarki','List do pomocy technicznej'], c:0, why:'Vercel obserwuje repozytorium i publikuje nową wersję.'},{q:'Jak na Vercel zrobić stałe przekierowanie /old-page/ → /new-page/?', a:['Blok redirects w vercel.json z permanent: true','Tag meta refresh','Nie da się'], c:0, why:'Vercel czyta vercel.json i zwraca stałe przekierowanie po stronie serwera (308, odpowiednik 301).'},{q:'Dlaczego adresy Preview w Vercel nie trafiają do Google?', a:['Vercel dodaje im nagłówek x-robots-tag: noindex','Są płatne','Google nie skanuje Vercel'], c:0, why:'Testowe wdrożenia są domyślnie zablokowane przed indeksowaniem nagłówkiem.'}],
 scenes:[
  {t:'Import', app:'Vercel', url:'vercel.com/new', rows:['| twojlogin/mosty | [Import]','= Framework Preset: Other','[Deploy]'], hl:0, say:'Logujemy się przez GitHub, klikamy Import przy repozytorium i Deploy.'},
  {t:'Domena', app:'Vercel', url:'Settings → Domains', side:['General','Domains'], sel:1, rows:['= mosty.com.ua [Add]','| A | @ | 76.76.21.21','| CNAME | www | cname.vercel-dns.com','+ Valid Configuration'], hl:3, say:'Dodajemy domenę i wpisujemy u rejestratora rekordy, które pokazuje Vercel.'},
  {t:'Przekierowania', app:'VS Code', url:'vercel.json', rows:['> "redirects": [','>   { "source": "/poslugi/notarialnyj/",','>     "destination": "/uslugy/notarialnyi-pereklad/", "permanent": true }'], hl:2, say:'W vercel.json ustawiamy stałe przekierowania ze starych adresów na nowe.'}]},

{id:'c1-09', title:'Tagi SEO w <head>: title, description, canonical, hreflang', dur:'15 min', yt:'meta tagi seo title description canonical',
 what:'W bloku [[<head>]] każdej strony są główne sygnały SEO: **title** i **description** (widoczne w wynikach), **robots** (indeksować czy nie), **canonical** (główna wersja strony) i **hreflang** (wersje językowe). Do tego jeden **H1** na stronie.',
 svg:[['source',0,0,'Co musi być w kodzie strony.'],['serp',0,0,'Title i description w wynikach.']],
 nav:['VS Code → plik strony → blok <head>','Chrome → Ctrl+U → Ctrl+F „canonical”','Chrome → rozszerzenie Detailed SEO → Overview'],
 steps:['Skopiuj poniższy szablon do każdej strony.','Title: główne zapytanie na początku, 50–60 znaków, marka na końcu.','Description: 140–160 znaków, korzyść i wezwanie do działania.','Canonical: pełny adres tej samej strony z https.','Hreflang: ten sam blok na wszystkich wersjach językowych; kod języka ukraińskiego to [[uk]], nie [[ua]].','Jeden H1 z głównym zapytaniem.','Sprawdź stronę rozszerzeniem Detailed SEO.'],
 example:[{code:`<!doctype html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tłumaczenie notarialne w Kijowie od 1 dnia | Mosty</title>
  <meta name="description" content="Tłumaczenie dokumentów z poświadczeniem notarialnym z 40 języków. Cena od 350 UAH, termin od 1 dnia.">
  <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
  <link rel="alternate" hreflang="uk" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
  <link rel="alternate" hreflang="en" href="https://mosty.com.ua/en/services/notarized-translation/">
  <link rel="alternate" hreflang="x-default" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
</head>
<body>
  <h1>Tłumaczenie notarialne dokumentów</h1>
</body>
</html>`, lang:'html'}],
 mistakes:['Ten sam title na wszystkich stronach.','Canonical względny ([[/uslugy/]]) lub z http.','hreflang="ua": kod języka ukraińskiego to [[uk]].','Kilka H1 albo H1 dla logo.'],
 check:['Unikalny title 50–60 znaków','Description z korzyścią','Canonical na siebie, bezwzględny, https','hreflang wzajemny, kod języka uk','Jeden H1'],
 quiz:{q:'Jaki hreflang jest poprawny dla języka ukraińskiego?', a:['uk','ua','ukr'], c:0, why:'UA to kod kraju, język oznacza się uk.'},
 tests:[{q:'Description wpływa na…', a:['Klikalność w wynikach','Pozycje bezpośrednio','Szybkość'], c:0, why:'Dobry opis zwiększa CTR.'},{q:'Canonical na stronie oryginalnej wskazuje…', a:['Na samą siebie','Na stronę główną','Na konkurenta'], c:0, why:'Canonical na siebie chroni przed duplikatami z parametrami.'},{q:'Ile H1 powinno być na stronie?', a:['Jeden','Ile chcesz','Żadnego'], c:0, why:'Jeden H1 nazywa główny temat strony. Pozostałe sekcje dostają H2 i H3.'},{q:'Jaki powinien być canonical na stronie oryginalnej?', a:['Bezwzględny adres tej samej strony','Adres strony głównej','Ścieżka względna ../'], c:0, why:'Bezwzględny canonical na siebie chroni przed duplikatami z parametrami.'}],
 scenes:[
  {t:'Kod strony', app:'Ctrl+U', url:'view-source:mosty.com.ua/uslugy/notarialnyi-pereklad/', rows:['> <title>Tłumaczenie notarialne w Kijowie od 1 dnia | Mosty</title>','> <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">','> <link rel="alternate" hreflang="en" href="…/en/services/notarized-translation/">'], hl:1, say:'Ctrl+U otwiera kod. Sprawdzamy title, canonical i hreflang.'},
  {t:'W wynikach', app:'Google', url:'tłumaczenie notarialne kijów', rows:['~ mosty.com.ua › uslugy','# Tłumaczenie notarialne w Kijowie od 1 dnia | Mosty','Tłumaczenie z poświadczeniem notarialnym z 40 języków…'], hl:1, say:'Title staje się nagłówkiem w wynikach, description opisem pod nim.'},
  {t:'Detailed SEO', app:'Detailed SEO Extension', url:'Overview', rows:['| Title | 49 znaków ✓','| Canonical | self ✓','| H1 | 1 ✓','| Robots | index, follow'], hl:1, say:'Rozszerzenie Detailed SEO pokazuje wszystkie tagi jednym kliknięciem.'}]},

{id:'c1-10', title:'robots.txt', dur:'10 min', yt:'robots.txt konfiguracja seo',
 what:'[[robots.txt]] leży w katalogu głównym strony i mówi robotom, **dokąd nie wchodzić**. Steruje skanowaniem, a **nie indeksowaniem**: aby usunąć stronę z wyszukiwarki, potrzebny jest noindex.',
 svg:[['directives',0,0,'robots.txt, noindex, canonical i 301: do czego służy każdy.']],
 nav:['VS Code → robots.txt w katalogu głównym → Commit → Push','Chrome → mosty.com.ua/robots.txt','Search Console → Ustawienia → robots.txt'],
 steps:['Utwórz [[robots.txt]] w katalogu głównym projektu według przykładu.','Blokuj tylko adresy techniczne: wyszukiwarkę na stronie, parametry sortowania.','Dodaj wiersz Sitemap z pełnym adresem.','Commit → Push. Otwórz [[mosty.com.ua/robots.txt]]: czy plik się otwiera?','Search Console → Ustawienia → robots.txt: status „Pobrano”, bez błędów.'],
 example:[{code:`User-agent: *
Disallow: /*?s=
Disallow: /*?sort=
Disallow: /*?utm_

Sitemap: https://mosty.com.ua/sitemap.xml`, lang:'robots.txt (strona statyczna)'},{code:`User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /?s=

Sitemap: https://mosty.com.ua/sitemap_index.xml`, lang:'robots.txt (WordPress)'}],
 mistakes:['[[Disallow: /]] pozostawiony po pracach deweloperskich: zablokowana cała strona.','Blokowanie strony w robots.txt, aby usunąć ją z wyszukiwarki.','Blokowanie CSS i JS: Google nie widzi strony tak jak człowiek.'],
 check:['robots.txt otwiera się z kodem 200','Nie ma Disallow: /','Jest wiersz Sitemap','Status w Search Console „Pobrano”'],
 quiz:{q:'Stronę trzeba usunąć z wyszukiwarki. Czy robots.txt pomoże?', a:['Nie: potrzebny jest noindex, a skanowanie musi być dozwolone','Tak, Disallow usuwa z indeksu','Tak, na 30 dni'], c:0, why:'Jeśli strona jest zablokowana w robots.txt, Google nie zobaczy noindex.'},
 tests:[{q:'Co blokuje „Disallow: /”?', a:['Całą stronę','Nic','Tylko stronę główną'], c:0, why:'Ukośnik oznacza wszystkie adresy.'},{q:'Gdzie znajduje się robots.txt?', a:['W katalogu głównym: mosty.com.ua/robots.txt','W dowolnym folderze','W Search Console'], c:0, why:'Roboty szukają pliku tylko w katalogu głównym domeny.'},{q:'Strona jest już w indeksie i trzeba ją usunąć z wyszukiwarki. Co robimy?', a:['Dodajemy Disallow w robots.txt','Ustawiamy noindex i zostawiamy stronę otwartą do skanowania','Usuwamy mapę witryny'], c:1, why:'Jeśli zablokujesz stronę w robots.txt, robot nie przeczyta noindex i URL może zostać w indeksie. Najpierw noindex przy otwartej stronie; Google ją zeskanuje i usunie.'},{q:'Co blokuje wiersz „Disallow: /”?', a:['Nic','Całą stronę','Tylko stronę główną'], c:1, why:'Ukośnik oznacza wszystkie adresy strony.'}],
 scenes:[
  {t:'Plik', app:'Chrome', url:'mosty.com.ua/robots.txt', rows:['> User-agent: *','> Disallow: /*?s=','> Sitemap: https://mosty.com.ua/sitemap.xml'], hl:1, say:'Otwieramy plik w przeglądarce. Zablokowana jest tylko wyszukiwarka na stronie i podana jest mapa witryny.'},
  {t:'Niebezpieczny wiersz', app:'Chrome', url:'robots.txt', rows:['> User-agent: *','> Disallow: /','! Zablokowana CAŁA strona'], hl:2, say:'Wiersz Disallow ukośnik blokuje całą stronę. Sprawdzaj go po każdym uruchomieniu.'},
  {t:'Raport w Search Console', app:'Search Console', url:'Ustawienia → robots.txt', side:['Ustawienia','robots.txt'], sel:1, rows:['|! Plik | Stan','| https://mosty.com.ua/robots.txt | Pobrano'], hl:1, say:'W Ustawieniach Search Console widać, którą wersję pliku pobrał Google.'}]},

{id:'c1-11', title:'sitemap.xml', dur:'10 min', yt:'mapa witryny sitemap xml search console',
 what:'[[sitemap.xml]] to lista stron, które chcesz mieć w indeksie. Są w niej tylko strony z kodem **200**, bez **noindex** i **kanoniczne**. Przesyła się ją w Search Console.',
 svg:[['sitemap',0,0,'Co powinno być w mapie witryny, a czego nie.'],['gsc','Mapy witryn',0,'Przesyłanie w Search Console.']],
 nav:['VS Code → sitemap.xml → Commit → Push','Search Console → Indeksowanie → Mapy witryn → Prześlij','Screaming Frog → Sitemaps → URLs not in Sitemap'],
 steps:['Utwórz [[sitemap.xml]] w katalogu głównym według przykładu: wszystkie strony, które mają być w wyszukiwarce.','Pełne adresy z https i ukośnikiem na końcu, dokładnie jak w canonical.','Commit → Push. Otwórz [[mosty.com.ua/sitemap.xml]].','Search Console → Mapy witryn → wpisz [[sitemap.xml]] → Prześlij.','Stan powinien zmienić się na „Powodzenie”.','Po dodaniu nowej strony dopisz ją do mapy i zrób Push.'],
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
 mistakes:['Strony z 301, 404 lub noindex w mapie witryny.','Adresy bez https lub bez ukośnika, niezgodne z canonical.','Zapominanie o dodaniu nowej strony.'],
 check:['sitemap.xml się otwiera','Tylko strony z kodem 200 i bez noindex','Przesłana w Search Console, stan „Powodzenie”'],
 quiz:{q:'Strona w mapie witryny zwraca 301. Co robimy?', a:['Zastępujemy ją adresem docelowym','Zostawiamy','Dodajemy noindex'], c:0, why:'W mapie witryny są tylko adresy docelowe z kodem 200.'},
 tests:[{q:'Gdzie przesyła się mapę witryny?', a:['Search Console → Mapy witryn','GA4','Vercel'], c:0, why:'Search Console przyjmuje mapę i pokazuje jej stan.'},{q:'Czy mapa witryny gwarantuje indeksowanie?', a:['Nie, to tylko lista życzeń','Tak','Tylko dla bloga'], c:0, why:'Google sam decyduje, co indeksować.'},{q:'Który adres NIE powinien być w mapie witryny?', a:['https://mosty.com.ua/uslugy/apostyl/ (200, canonical na siebie)','https://mosty.com.ua/old-page/ (301 na nową stronę)','https://mosty.com.ua/blog/shcho-take-apostyl/ (200, zindeksowana)'], c:1, why:'W mapie są tylko strony kanoniczne z kodem 200. Przekierowanie zastępujemy adresem docelowym.'},{q:'Ile maksymalnie adresów URL może mieć jeden plik mapy witryny?', a:['50 000','1 000','Bez limitu'], c:0, why:'Limit to 50 000 adresów URL lub 50 MB bez kompresji.'}],
 scenes:[
  {t:'Plik', app:'Chrome', url:'mosty.com.ua/sitemap.xml', rows:['> <url><loc>https://mosty.com.ua/uslugy/notarialnyi-pereklad/</loc></url>','> <url><loc>https://mosty.com.ua/blog/shcho-take-apostyl/</loc></url>'], hl:0, say:'Mapa witryny to lista adresów w formacie XML.'},
  {t:'Przesyłanie', app:'Search Console', url:'Mapy witryn', side:['Strony','Mapy witryn'], sel:1, rows:['= https://mosty.com.ua/ sitemap.xml','[Prześlij]','| sitemap.xml | Powodzenie | 24'], hl:2, say:'Wpisujemy adres i przesyłamy. Stan Powodzenie oznacza, że Google przeczytał plik.'},
  {t:'Sprawdzenie crawlerem', app:'Screaming Frog', url:'Sitemaps', side:['Sitemaps'], sel:0, rows:['| URLs not in Sitemap | 2','| Non-Indexable URLs in Sitemap | 1'], hl:1, say:'Screaming Frog pokaże strony, których brakuje w mapie, i adresy, których nie powinno w niej być.'}]},

{id:'c1-12', title:'Search Console: konfiguracja i Sprawdzenie adresu URL', dur:'15 min', yt:'Google Search Console konfiguracja',
 what:'**Search Console** pokazuje, jak Google widzi stronę: co jest w indeksie, na jakie zapytania się wyświetlasz, jakie są błędy. Dodajemy usługę, potwierdzamy prawa, przesyłamy mapę witryny i sprawdzamy strony.',
 svg:[['gsc','Sprawdzenie adresu URL',0,'Sprawdzenie adresu URL: czy strona jest w indeksie.']],
 nav:['search.google.com/search-console → Dodaj usługę','Domena (DNS) lub Prefiks URL (metatag)','Sprawdzenie adresu URL → Sprawdź URL na żywo → Poproś o zindeksowanie'],
 steps:['Search Console → Dodaj usługę.','Masz dostęp do DNS: „Domena” → rekord TXT u rejestratora. Nie masz: „Prefiks URL” → metatag.','Metatag wstaw do [[<head>]] strony głównej → Commit → Push → Zweryfikuj.','Mapy witryn → prześlij sitemap.xml.','Sprawdzenie adresu URL → wklej nową stronę → Sprawdź URL na żywo.','Jeśli jest dostępna, kliknij „Poproś o zindeksowanie”.','Ustawienia → Użytkownicy i uprawnienia: dodaj współpracowników z odpowiednim poziomem dostępu.'],
 example:[{table:[['Sekcja','Co w niej jest'],['Skuteczność','Zapytania, kliknięcia, wyświetlenia, pozycje'],['Sprawdzenie adresu URL','Stan pojedynczej strony'],['Strony','Co jest w indeksie i dlaczego reszty nie ma'],['Mapy witryn','Przesyłanie mapy witryny'],['Usunięcia','Tymczasowe ukrycie strony'],['Ustawienia','robots.txt, statystyki indeksowania, użytkownicy']]}],
 mistakes:['Usunięcie metatagu weryfikacyjnego: dostęp zniknie.','Dodanie wersji http zamiast https.','Proszenie o zindeksowanie dziesiątek stron dziennie: obowiązuje limit dzienny.'],
 check:['Usługa potwierdzona','Mapa witryny przesłana','Sprawdziłem stronę na żywo','Poprosiłem o zindeksowanie nowej strony'],
 quiz:{q:'Który typ usługi obejmuje www, wersję bez www i http?', a:['Domena','Prefiks URL','Oba'], c:0, why:'Usługa „Domena” obejmuje wszystkie wersje i subdomeny.'},
 tests:[{q:'Co zrobić po opublikowaniu nowej strony?', a:['Sprawdzenie adresu URL → Poproś o zindeksowanie','Nic','Usunąć mapę witryny'], c:0, why:'Prośba przyspiesza skanowanie ważnej strony.'},{q:'Gdzie widać zapytania, na które wyświetla się strona?', a:['Skuteczność','Strony','Usunięcia'], c:0, why:'Raport Skuteczność pokazuje zapytania, kliknięcia i wyświetlenia.'},{q:'Gdzie zobaczyć, z jakich zapytań strona dostaje kliknięcia z Google?', a:['Google Tag Manager → Tagi','Search Console → Skuteczność','Google Ads → Kampanie'], c:1, why:'Raport Skuteczność w Search Console pokazuje zapytania, wyświetlenia, kliknięcia, CTR i średnią pozycję. GA4 widzi wizyty, ale bez zapytań (chyba że połączysz go z GSC).'},{q:'Co trzeba zrobić w GTM, aby zmiany zadziałały?', a:['Prześlij → Opublikuj','Nic','Zrestartować komputer'], c:0, why:'Zmiany w kontenerze działają dopiero po publikacji.'}],
 scenes:[
  {t:'Dodaj usługę', app:'Search Console', url:'Dodaj usługę', rows:['| Domena | Prefiks URL','| mosty.com.ua | https://mosty.com.ua/','[Dalej]'], hl:1, say:'Wybieramy typ usługi. Domenę weryfikuje się przez DNS, prefiks przez metatag.'},
  {t:'Metatag', app:'VS Code', url:'index.html', rows:['> <meta name="google-site-verification" content="AbC123…">','~ w <head> strony głównej → Push → Zweryfikuj'], hl:0, say:'Wstawiamy metatag do head strony głównej, robimy Push i klikamy Zweryfikuj.'},
  {t:'Sprawdzenie adresu URL', app:'Search Console', url:'Sprawdzenie adresu URL', side:['Sprawdzenie adresu URL'], sel:0, rows:['= https://mosty.com.ua/uslugy/apostyl/','! Adresu URL nie ma w Google','[Sprawdź URL na żywo]','[Poproś o zindeksowanie]'], hl:3, say:'Dla nowej strony sprawdzamy adres na żywo i prosimy o zindeksowanie.'}]},

{id:'c1-13', title:'GA4 przez Google Tag Manager', dur:'15 min', yt:'GA4 Google Tag Manager konfiguracja',
 what:'**GA4** liczy użytkowników i zapytania ofertowe, **GTM** instaluje liczniki bez zmian w kodzie. Na stronę wstawiamy tylko kod GTM, a GA4 dodajemy w GTM jako tag Google.',
 svg:[['gtm',0,0,'Strona → GTM → GA4.']],
 nav:['analytics.google.com → Administracja → Utwórz usługę → Strumień danych „Sieć” → identyfikator G-…','tagmanager.google.com → Utwórz kontener → kod GTM w <head> i po <body>','GTM → Tagi → Nowy → Tag Google → G-… → Initialization – All Pages','GTM → Podgląd → Prześlij → Opublikuj'],
 steps:['GA4: utwórz usługę i strumień sieciowy dla [[https://mosty.com.ua]]. Skopiuj identyfikator [[G-…]].','GTM: utwórz kontener „Sieć”. Skopiuj dwa fragmenty kodu.','Pierwszy fragment wstaw jak najwyżej w [[<head>]], drugi zaraz po [[<body>]] na wszystkich stronach → Commit → Push.','GTM → Tagi → Nowy → Tag Google → identyfikator G-… → reguła Initialization – All Pages → Zapisz.','Podgląd → wpisz adres strony → tag został uruchomiony.','Prześlij → Opublikuj.','GA4 → Raporty → Czas rzeczywisty: wejdź na stronę z telefonu, powinieneś się pojawić.','GA4 → Administracja → Połączenia usług → Search Console → Połącz.'],
 example:[{code:`<!-- 1. W <head> -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- 2. Zaraz po <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`, lang:'html'}],
 mistakes:['Brak publikacji kontenera GTM: nie będzie danych.','GA4 zainstalowane i w kodzie, i w GTM: dane się podwajają.','Zapytanie ofertowe nieoznaczone jako kluczowe zdarzenie.'],
 check:['Kod GTM na wszystkich stronach','Tag Google z identyfikatorem G-… opublikowany','Widzę się w „Czasie rzeczywistym”','GA4 połączone z Search Console'],
 quiz:{q:'Tag dodany w GTM, ale nie ma danych. Najczęstsza przyczyna?', a:['Kontener nie jest opublikowany','Brak mapy witryny','Strona jest na Vercel'], c:0, why:'Zmiany w GTM działają dopiero po publikacji.'},
 tests:[{q:'Identyfikator GA4 zaczyna się od…', a:['G-','GTM-','UA-'], c:0, why:'GTM- to kontener Tag Managera.'},{q:'Danych jest dwa razy więcej, niż powinno. Dlaczego?', a:['GA4 jest zainstalowane dwa razy','Google tak liczy','Przez robots.txt'], c:0, why:'Tag GA4 w kodzie i w GTM podwaja dane.'},{q:'Jak w GA4 nazywa się bezpłatny ruch z wyszukiwarki?', a:['Organic Search','Direct','Referral'], c:0, why:'Kanał Organic Search łączy sesje z bezpłatnych wyników wyszukiwania.'},{q:'Dane z ruchu organicznego podwoiły się w ciągu nocy bez powodu. Co sprawdzić najpierw?', a:['Czy tag GA4 nie jest zainstalowany dwa razy','Czy zmienił się robots.txt','Pozycje w Serpstat'], c:0, why:'Podwojenie danych to typowy objaw zduplikowanego tagu (w kodzie i w GTM).'}],
 scenes:[
  {t:'Identyfikator GA4', app:'Google Analytics', url:'Administracja → Strumienie danych', rows:['= URL: https://mosty.com.ua','| Identyfikator pomiaru | G-7XK2P9QL1M'], hl:1, say:'W GA4 tworzymy strumień sieciowy i kopiujemy identyfikator zaczynający się od G.'},
  {t:'Tag w GTM', app:'Tag Manager', url:'Tagi → Nowy', side:['Tagi','Reguły'], sel:0, rows:['= Typ: Tag Google','= Identyfikator: G-7XK2P9QL1M','= Reguła: Initialization – All Pages'], hl:1, say:'W GTM tworzymy Tag Google z tym identyfikatorem na wszystkich stronach.'},
  {t:'Publikacja', app:'Tag Manager', url:'Prześlij', rows:['[Podgląd]','+ Tag Assistant: tag został uruchomiony','[Prześlij → Opublikuj]'], hl:2, say:'Sprawdzamy w podglądzie i publikujemy kontener.'}]},

{id:'c1-14', title:'Dlaczego strony nie ma w indeksie', dur:'15 min', yt:'strona nie jest indeksowana search console',
 what:'Diagnozę zawsze zaczynamy od **Sprawdzenia adresu URL** w Search Console. Pierwszy wiersz z „Nie” lub błędem to przyczyna. Potem ją naprawiamy i prosimy o zindeksowanie.',
 svg:[['why',0,0,'Drzewo diagnostyczne.']],
 nav:['Search Console → Sprawdzenie adresu URL → wklej adres','Sprawdzenie adresu URL → Sprawdź URL na żywo','Search Console → Strony → przyczyna → Sprawdź poprawkę'],
 steps:['Wklej adres w Sprawdzenie adresu URL.','Przeczytaj blok „Indeksowanie strony”: znajdź pierwszy wiersz z „Nie” lub błędem.','Usuń przyczynę według tabeli poniżej.','Sprawdź URL na żywo: powinno być „Adres URL jest dostępny dla Google”.','Poproś o zindeksowanie.','Sprawdź ponownie za 3–14 dni.'],
 example:[{table:[['Co widzimy','Przyczyna','Co robimy'],['Adres URL jest nieznany Google','Brak linków i mapy witryny','Dodać linki i wpisać do mapy'],['Zablokowana przez plik robots.txt','Disallow','Usunąć regułę'],['Wykluczona za pomocą tagu „noindex”','noindex w kodzie lub wtyczce','Usunąć noindex'],['Nie znaleziono (404)','Adres nie istnieje','Poprawić adres lub 301'],['Duplikat, Google wybrał inną stronę kanoniczną','Strona podobna do innej','Uczynić unikalną lub połączyć'],['Zeskanowana – obecnie nie zindeksowana','Słaba treść','Poprawić tekst, dodać linki'],['Wykryta – obecnie nie zindeksowana','Google jeszcze nie skanował','Linki, mapa witryny, czekać']]}],
 mistakes:['Czekanie tygodniami bez zajrzenia do Sprawdzenia adresu URL.','Prośba o zindeksowanie bez usunięcia przyczyny.','Mylenie „Zeskanowana” (kwestia jakości) z „Wykryta” (kwestia skanowania).'],
 check:['Zaczynam od Sprawdzenia adresu URL','Znalazłem przyczynę','Naprawiłem i sprawdziłem na żywo','Poprosiłem o zindeksowanie'],
 quiz:{q:'„Zeskanowana – obecnie nie zindeksowana” najczęściej oznacza…', a:['Google nie widzi wartości strony','Strona jest w robots.txt','Serwer nie działa'], c:0, why:'Strona została przeczytana, ale nie przyjęta: popraw treść i linki.'},
 tests:[{q:'„Adres URL jest nieznany Google”. Co robimy?', a:['Dodajemy linki i mapę witryny','Ustawiamy noindex','Nic'], c:0, why:'Google nie wie o adresie.'},{q:'Od czego zaczyna się diagnozę?', a:['Sprawdzenie adresu URL w Search Console','Google Trends','Serpstat'], c:0, why:'Tam jest dokładna przyczyna od Google.'},{q:'Stan „Zeskanowana – obecnie nie zindeksowana”. Co najprawdopodobniej pomoże?', a:['Proszenie o zindeksowanie codziennie','Poprawa unikalności i przydatności treści lub połączenie z podobną stroną','Zablokowanie strony w robots.txt'], c:1, why:'Google przeczytał stronę, więc technicznie jest dostępna. Uznał, że nie jest warta indeksu: to kwestia jakości i unikalności.'},{q:'„Wykryta – obecnie nie zindeksowana” oznacza…', a:['Google zna URL, ale jeszcze go nie skanował','Strona została usunięta','Strona ma karę'], c:0, why:'Strona czeka w kolejce; pomagają linki i mniej śmieciowych adresów URL.'}],
 scenes:[
  {t:'Sprawdzenie', app:'Search Console', url:'Sprawdzenie adresu URL', side:['Sprawdzenie adresu URL'], sel:0, rows:['= https://mosty.com.ua/uslugy/apostyl/','! Adresu URL nie ma w Google','| Indeksowanie dozwolone? | Nie: wykryto „noindex”'], hl:2, say:'Sprawdzenie adresu URL pokazuje przyczynę: na stronie jest noindex.'},
  {t:'Poprawka', app:'VS Code', url:'uslugy/apostyl/index.html', rows:['! <meta name="robots" content="noindex">','+ wiersz usunięty → Commit → Push'], hl:1, say:'Usuwamy noindex z kodu i wysyłamy zmiany.'},
  {t:'Prośba', app:'Search Console', url:'Sprawdzenie adresu URL', rows:['[Sprawdź URL na żywo]','+ Adres URL jest dostępny dla Google','[Poproś o zindeksowanie]'], hl:2, say:'Sprawdzamy na żywo i prosimy o zindeksowanie.'}]}
);
