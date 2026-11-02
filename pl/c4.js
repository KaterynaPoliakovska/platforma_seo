window.L = window.L || [];
/* Dodatkowe tematy podstawowe. Pole after: po której lekcji pokazać tę lekcję. Przykład: mosty.com.ua */
L.push(
{id:'c1-content', after:'c1-06', title:'Tekst strony docelowej: H2–H6, obrazy, brief dla copywritera', dur:'15 min', yt:'jak napisać tekst SEO brief dla copywritera',
 what:'Tekst musi **w pełni odpowiadać na zapytanie** lepiej niż konkurencja: czym jest usługa, cena, termin, jak zamówić. Strukturę wyznaczają nagłówki **H1 → H2 → H3**, a zapytania poboczne klastra trafiają do H2. Obrazy kompresujemy w **Squoosh** i opisujemy atrybutem **alt**. Wszystko to zbieramy w brief dla copywritera.',
 svg:[['intent',0,0,'Typ strony i tekstu zależy od intencji.'],['image',0,0,'Waga obrazu przed i po Squoosh.']],
 nav:['Serpstat → Keyword research → Search suggestions (pytania do H2 i FAQ)','Google → zapytanie → blok „Podobne pytania”','squoosh.app → przeciągnij zdjęcie → Resize → WebP, jakość 75 → Download','Chrome → rozszerzenie Detailed SEO → Headings (sprawdzenie H1–H6)'],
 steps:['Otwórz top 5 konkurentów dla głównego zapytania: jakie bloki i pytania mają wszyscy.','Zbierz pytania z „Podobnych pytań” i podpowiedzi wyszukiwania Serpstat.','Ułóż strukturę: jeden H1, H2 pod zapytania poboczne, H3 wewnątrz H2.','Napisz brief według szablonu poniżej.','Zdjęcia: squoosh.app → Resize do szerokości wyświetlania × 2 → WebP, jakość 70–80 → nazwa pliku łacińskimi literami.','Każdemu zdjęciu dodaj alt opisujący, co na nim jest.','Po publikacji sprawdź nagłówki rozszerzeniem Detailed SEO → Headings.'],
 example:[{code:`H1  Tłumaczenie notarialne dokumentów
  H2  Ceny tłumaczenia notarialnego
  H2  Jakie dokumenty tłumaczymy
    H3  Dokumenty osobiste
    H3  Dokumenty firmowe
  H2  Termin i jak zamówić
  H2  Najczęstsze pytania (FAQ)`, lang:'struktura nagłówków'},{table:[['Punkt briefu','Co podać'],['URL i typ strony','/uslugy/notarialnyi-pereklad/, strona usługi'],['Główne zapytanie','tłumaczenie notarialne (w H1 i pierwszym akapicie)'],['Zapytania poboczne','tłumaczenie notarialne cena, tłumaczenie poświadczone kijów'],['Struktura H2','ceny, dokumenty, termin, FAQ'],['Objętość','jak w top 3 konkurentów (np. 700–900 słów)'],['Obowiązkowo','cena, termin, kroki zamówienia, gwarancje, 5 pytań FAQ'],['Konkurenci dla orientacji','3 linki z topu'],['Czego nie robić','kopiować, upychać słów kluczowych']]},{code:`<img src="/img/notarialnyi-pereklad-pasporta.webp"
     alt="Notarialnie poświadczone tłumaczenie paszportu"
     width="800" height="533" loading="lazy">`, lang:'obraz'}],
 mistakes:['Kilka H1 albo H2 do ozdoby („Nasze kontakty” w stopce).','Tekst „dla robota” z powtórzeniem frazy w każdym zdaniu.','Brak ceny, terminu i kroków zamówienia: człowiek idzie do konkurencji.','Zdjęcie 4 MB z telefonu z alt="" lub „foto1”.'],
 check:['Jeden H1, logiczne H2–H3','Zapytania poboczne klastra w H2','Są cena, termin, jak zamówić, FAQ','Zdjęcia w WebP z alt','Brief dla copywritera według szablonu'],
 quiz:{q:'Gdzie umieszczamy zapytania poboczne klastra?', a:['W nagłówkach H2 i tekście sekcji','W H1 po przecinku','W alt wszystkich zdjęć'], c:0, why:'H2 rozwijają podtematy, każdy odpowiada swojemu zapytaniu pobocznemu.'},
 tests:[{q:'Jaką jakość WebP ustawić w Squoosh?', a:['70–80','100','10'], c:0, why:'Oko nie widzi różnicy, a plik jest wielokrotnie lżejszy.'},{q:'Co to jest alt?', a:['Opis obrazu dla niewidomych i Google','Nazwa pliku','Podpis pod zdjęciem'], c:0, why:'Alt to tekstowy zamiennik obrazu.'},{q:'Co z poniższych NIE wpływa bezpośrednio na pozycje, ale wpływa na klikalność?', a:['Title','Meta description','H1'], c:1, why:'Google nie używa meta description jako czynnika rankingowego, ale dobry opis zwiększa CTR. Title i nagłówki pomagają zrozumieć temat strony.'},{q:'Ile H1 zaleca się na stronie?', a:['Jeden','Pięć','Żadnego'], c:0, why:'Jeden H1 nazywa główny temat.'}],
 scenes:[
  {t:'Struktura', app:'Detailed SEO', url:'Headings', rows:['H1 Tłumaczenie notarialne dokumentów','  H2 Ceny tłumaczenia notarialnego','  H2 Jakie dokumenty tłumaczymy','    H3 Dokumenty osobiste'], hl:0, say:'Rozszerzenie Detailed SEO pokazuje drzewo nagłówków. Jeden H1, pod nim sekcje H2.'},
  {t:'Pytania ludzi', app:'Google', url:'tłumaczenie notarialne', rows:['# Podobne pytania','Ile kosztuje tłumaczenie notarialne?','Ile trwa tłumaczenie?','+ To gotowe H2 i FAQ'], hl:3, say:'Pytania z bloku „Podobne pytania” stają się sekcjami i FAQ.'},
  {t:'Squoosh', app:'Squoosh', url:'squoosh.app', rows:['= Resize: 1600 px','= WebP · jakość 75','| 4,2 MB → 160 KB'], hl:2, say:'W Squoosh zmniejszamy rozmiar, wybieramy WebP i jakość 75. Plik staje się kilkadziesiąt razy lżejszy.'}]},

{id:'c1-schema', after:'c1-09', title:'Dane strukturalne schema.org: co trzeba wiedzieć', dur:'20 min', yt:'dane strukturalne schema.org JSON-LD test wyników z elementami rozszerzonymi',
 what:'Dane strukturalne mówią Google, **co dokładnie jest na stronie**: firma, adres, okruszki, artykuł, produkt z ceną. Zapisujemy je w formacie **JSON-LD** w kodzie strony. Mogą dać **wynik z elementami rozszerzonymi** (okruszki, ocena, cena) i pomagają Google zrozumieć firmę. Sprawdzamy je w **Teście wyników z elementami rozszerzonymi**.',
 svg:[['serp',0,0,'Dane strukturalne wyróżniają fragment.'],['source',0,0,'Znaczniki są w kodzie strony.']],
 nav:['search.google.com/test/rich-results → URL lub Kod → Testuj','validator.schema.org → wklej URL → Run test','Search Console → Ulepszenia → Menu nawigacyjne / Fragmenty produktów','WordPress → Rank Math → Schema (karta w edytorze) / Tytuły i meta → Local SEO','VS Code → <head> strony → <script type="application/ld+json"> → Commit → Push'],
 steps:['Ustal, jakie typy danych dostaje każdy typ strony (tabela poniżej).','Strona statyczna (GitHub + Vercel): wstaw JSON-LD do [[<head>]] → Commit → Push.','WordPress: Rank Math → Tytuły i meta → Local SEO (dane firmy) i karta Schema w edytorze strony.','Sprawdź stronę w Teście wyników z elementami rozszerzonymi: „Prawidłowe elementy”, bez błędów.','Sprawdź w validator.schema.org: składnia bez błędów.','Search Console → Ulepszenia: raporty o danych pojawią się po kilku dniach.','Sprawdź, czy wszystko w znacznikach (adres, telefon, cena, ocena) jest też widoczne na stronie.'],
 example:[{table:[['Typ','Gdzie','Co daje'],['Organization / LocalBusiness','Strona główna, kontakt','Nazwa, logo, adres, telefon, godziny otwarcia'],['BreadcrumbList','Wszystkie strony wewnętrzne','Okruszki zamiast URL we fragmencie'],['Article','Artykuły na blogu','Autor, data publikacji'],['FAQPage','Strony z blokiem FAQ','Google pokazuje wynik rozszerzony głównie dla stron rządowych i medycznych; znaczniki nadal są przydatne'],['Product + Offer','Produkty (jeśli są)','Cena, dostępność, ocena w wynikach'],['Service','Strony usług','Nie daje wyniku rozszerzonego, ale opisuje usługę']]},
  {code:`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Biuro tłumaczeń Mosty",
  "url": "https://mosty.com.ua/",
  "logo": "https://mosty.com.ua/img/logo.png",
  "telephone": "+380440000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Chreszczatyk 1",
    "addressLocality": "Kijów",
    "postalCode": "01001",
    "addressCountry": "UA"
  },
  "openingHours": "Mo-Fr 09:00-19:00",
  "sameAs": ["https://www.facebook.com/mosty", "https://www.instagram.com/mosty"]
}
</script>`, lang:'strona główna: LocalBusiness'},
  {code:`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://mosty.com.ua/"},
    {"@type": "ListItem", "position": 2, "name": "Usługi", "item": "https://mosty.com.ua/uslugy/"},
    {"@type": "ListItem", "position": 3, "name": "Tłumaczenie notarialne"}
  ]
}
</script>`, lang:'strona usługi: BreadcrumbList'},
  {code:`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Ile kosztuje tłumaczenie notarialne?",
    "acceptedAnswer": {"@type": "Answer", "text": "Od 350 UAH za stronę, zależnie od języka."}
  }]
}
</script>`, lang:'FAQ na stronie usługi'},
  {table:[['Zasada Google','Co oznacza'],['Znaczniki = widoczna treść','Nie wolno oznaczać ceny, oceny ani FAQ, których nie ma na stronie'],['Bez fałszywych opinii','Ocena tylko z prawdziwych opinii'],['Opinie o sobie','Ocena LocalBusiness / Organization na własnej stronie nie daje gwiazdek w wynikach'],['Naruszenia','Ręczne działania za spam w danych strukturalnych (Search Console → Ręczne działania)'],['Brak gwarancji','Poprawne znaczniki nie gwarantują wyniku rozszerzonego']]}],
 mistakes:['Znaczniki z danymi, których nie ma na stronie (cena, ocena, FAQ).','Inny telefon lub adres w znacznikach i na stronie.','Zdublowane znaczniki: Organization wyświetla i motyw, i Rank Math.','Błąd w JSON: zbędny przecinek lub cudzysłów sprawia, że znaczniki są nieczytelne. Sprawdzaj w walidatorze.','Oczekiwanie gwiazdek oceny dla LocalBusiness z własnych opinii.'],
 check:['Wybrałem typy danych dla każdego typu strony','LocalBusiness na stronie głównej z tymi samymi danymi co na stronie','BreadcrumbList na stronach wewnętrznych','Test wyników rozszerzonych: prawidłowe elementy, bez błędów','validator.schema.org bez błędów','Sprawdzam raporty „Ulepszenia” w Search Console'],
 quiz:{q:'W jakim formacie Google zaleca zapisywać dane strukturalne?', a:['JSON-LD','Tabela Excel','Komentarz w kodzie'], c:0, why:'JSON-LD to osobny blok script w kodzie; łatwo go dodać i sprawdzić.'},
 tests:[{q:'Na stronie nie ma FAQ, ale w znacznikach jest FAQPage. Co to jest?', a:['Naruszenie zasad: znaczniki muszą odpowiadać widocznej treści','Norma','Poprawi pozycje'], c:0, why:'Za niezgodne znaczniki można dostać ręczne działanie.'},{q:'Gdzie sprawdzić, czy Google widzi znaczniki?', a:['Test wyników z elementami rozszerzonymi i Search Console → Ulepszenia','Google Trends','Netpeak → Struktura'], c:0, why:'Test pokazuje prawidłowe elementy, a GSC monitoruje całą stronę.'},{q:'Co z poniższych NIE wpływa bezpośrednio na pozycje, ale wpływa na klikalność?', a:['Title','Meta description','H1'], c:1, why:'Google nie używa meta description jako czynnika rankingowego, ale dobry opis zwiększa CTR. Title i nagłówki pomagają zrozumieć temat strony.'},{q:'Ile H1 zaleca się na stronie?', a:['Jeden','Pięć','Żadnego'], c:0, why:'Jeden H1 nazywa główny temat.'}],
 scenes:[
  {t:'Co dają znaczniki', app:'Google', url:'tłumaczenie notarialne kijów', rows:['~ mosty.com.ua › Usługi › Tłumaczenie notarialne','# Tłumaczenie notarialne w Kijowie od 1 dnia | Mosty','~ Okruszki zamiast URL: BreadcrumbList'], hl:0, say:'Znaczniki BreadcrumbList pokazują we fragmencie okruszki zamiast adresu. Jest to bardziej widoczne i zrozumiałe.'},
  {t:'Kod w <head>', app:'VS Code', url:'index.html', rows:['> <script type="application/ld+json">','>   "@type": "LocalBusiness",','>   "name": "Biuro tłumaczeń Mosty",','> </script>'], hl:1, say:'Znaczniki to blok script typu application ld json w kodzie strony. Na stronie głównej opisujemy firmę typem LocalBusiness.'},
  {t:'Rank Math na WordPressie', app:'WordPress · Rank Math', url:'Edytor → Schema', side:['Ogólne','Zaawansowane','Schema'], sel:2, rows:['= Schema: Service · Article · FAQ','[Schema Generator → Dodaj]','~ Dane firmy: Tytuły i meta → Local SEO'], hl:1, say:'Na WordPressie znaczniki dodaje Rank Math: karta Schema w edytorze strony i dane firmy w sekcji Local SEO.'},
  {t:'Sprawdzenie', app:'Test wyników z elementami rozszerzonymi', url:'search.google.com/test/rich-results', rows:['= URL: https://mosty.com.ua/uslugy/notarialnyi-pereklad/','+ Wykryto 2 prawidłowe elementy','| Menu nawigacyjne | prawidłowy','| Często zadawane pytania | prawidłowy'], hl:1, say:'Wklejamy adres w test. Zielone prawidłowe elementy oznaczają, że Google widzi znaczniki.'}]},

{id:'c1-hreflang', after:'c1-schema', title:'Wersje językowe: hreflang', dur:'15 min', yt:'hreflang jak skonfigurować',
 what:'Jeśli strona ma wersję ukraińską, angielską i polską, **hreflang** wyjaśnia Google, że to tłumaczenia jednej strony, i pokazuje każdemu właściwy język. Najważniejsze zasady: **wzajemne linki**, **link do samej siebie**, kod języka **uk** (nie ua).',
 svg:[['hreflang',0,0,'Każda wersja linkuje do pozostałych i do siebie.'],['crawler','Hreflang',0,'Błędy hreflang w crawlerze.']],
 nav:['VS Code → <head> każdej wersji językowej → blok <link rel="alternate" hreflang>','WordPress → Polylang / WPML (same dodają hreflang)','Screaming Frog → Configuration → Spider → Crawl → ☑ Crawl Hreflang → karta Hreflang','GS Location Changer → Polska → sprawdź, która wersja jest w wynikach'],
 steps:['Ułóż tabelę odpowiedników: strona → adres w każdym języku.','Wstaw ten sam blok hreflang do [[<head>]] wszystkich wersji językowych.','canonical każdej wersji wskazuje samą siebie.','WordPress: wtyczka językowa Polylang lub WPML dodaje hreflang sama; sprawdź crawlerem.','Screaming Frog → włącz Crawl Hreflang → karta Hreflang: Missing Return Links, Incorrect Language Codes.','Usuwasz język: usuń go z hreflang na WSZYSTKICH wersjach, 301 na odpowiednik, zaktualizuj mapę witryny.'],
 example:[{code:`<link rel="alternate" hreflang="uk" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">
<link rel="alternate" hreflang="en" href="https://mosty.com.ua/en/services/notarized-translation/">
<link rel="alternate" hreflang="pl" href="https://mosty.com.ua/pl/uslugi/tlumaczenie-notarialne/">
<link rel="alternate" hreflang="x-default" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">`, lang:'tak samo na wszystkich trzech wersjach'},{table:[['Poprawnie','Błąd'],['uk','ua (to kraj)'],['en-GB','en-UK'],['Link do siebie','Linki tylko do tłumaczeń'],['A → B i B → A','Tag tylko na wersji ukraińskiej'],['canonical na siebie','canonical wersji angielskiej na ukraińską']]}],
 mistakes:['hreflang="ua" zamiast uk.','Brak linku zwrotnego z tłumaczenia.','canonical tłumaczenia na wersję ukraińską: hreflang przestaje działać.','Automatyczne przekierowanie według języka przeglądarki: Google nie widzi innych wersji.'],
 check:['Tabela odpowiedników stron','Ten sam blok na wszystkich wersjach','Kod języka uk, jest x-default','canonical każdej wersji na siebie','Hreflang w Screaming Frog bez błędów'],
 quiz:{q:'Jaki jest poprawny kod języka ukraińskiego?', a:['uk','ua','ukr'], c:0, why:'UA to kod kraju, język to uk (można też uk-UA).'},
 tests:[{q:'Co się stanie, jeśli tag jest tylko na wersji ukraińskiej?', a:['Google może zignorować hreflang','Wszystko zadziała','Strona zniknie'], c:0, why:'Linki muszą być wzajemne.'},{q:'Dokąd wskazuje canonical wersji angielskiej?', a:['Na samą siebie','Na wersję ukraińską','Na stronę główną'], c:0, why:'canonical na inny język psuje hreflang.'},{q:'Który atrybut jest poprawny dla strony ukraińskiej?', a:['hreflang="ua"','hreflang="uk"','hreflang="ukr-UA"'], c:1, why:'Język określa kod ISO 639-1: ukraiński to uk. UA to kod kraju, który można dodać jako drugi: uk-UA.'},{q:'Co musi mieć każda wersja językowa oprócz linków do pozostałych?', a:['Link do samej siebie','noindex','Przekierowanie'], c:0, why:'Odwołanie do siebie jest wymagane, aby hreflang działał poprawnie.'}],
 scenes:[
  {t:'Trzy wersje', app:'Schemat', url:'mosty.com.ua', rows:['| uk | /uslugy/notarialnyi-pereklad/','| en | /en/services/notarized-translation/','| pl | /pl/uslugi/tlumaczenie-notarialne/'], hl:2, say:'Jedna strona ma trzy wersje językowe. hreflang łączy je ze sobą.'},
  {t:'Kod', app:'Ctrl+U', url:'view-source', rows:['> <link rel="alternate" hreflang="uk" …>','> <link rel="alternate" hreflang="pl" …>','> <link rel="alternate" hreflang="x-default" …>'], hl:1, say:'Ten sam blok jest na wszystkich wersjach, łącznie z linkiem do siebie.'},
  {t:'Sprawdzenie', app:'Screaming Frog', url:'Hreflang', rows:['| Missing Return Links | 2','| Incorrect Language Codes | 1 (ua)'], hl:1, say:'Screaming Frog znajduje brakujące linki zwrotne i błędne kody.'}]},

{id:'c1-gbp', after:'c1-14', title:'Profil Firmy w Google: lokalne SEO', dur:'15 min', yt:'Profil Firmy w Google konfiguracja',
 what:'Dla firmy z biurem **Profil Firmy w Google** (wizytówka w Mapach i w bloku lokalnym wyników) często daje więcej zapytań niż strona. Najważniejsze: właściwa kategoria, ta sama **nazwa, adres i telefon (NAP)** wszędzie, zdjęcia i odpowiedzi na opinie.',
 svg:[['backlinks',0,0,'Katalogi i mapy: przydatne wzmianki.']],
 nav:['business.google.com → Dodaj firmę → nazwa → kategoria → adres → weryfikacja','Profil → Edytuj profil → godziny, strona, usługi, zdjęcia','Profil → Opinie → Odpowiedz','Mapy Google → wyszukaj „biuro tłumaczeń” → czy jesteś w bloku lokalnym'],
 steps:['business.google.com → Dodaj firmę: nazwa (jak na szyldzie, bez słów kluczowych).','Kategoria główna: „Biuro tłumaczeń”, w razie potrzeby dodatkowe.','Adres, telefon, strona [[https://mosty.com.ua/]], godziny otwarcia.','Zweryfikuj profil (wideo, telefon lub list, zależnie od propozycji Google).','Dodaj usługi z cenami i ponad 10 prawdziwych zdjęć.','Proś klientów o opinie i odpowiadaj na każdą.','Ten sam NAP na stronie, w znacznikach LocalBusiness, w katalogach i w mediach społecznościowych.'],
 example:[{table:[['Pole','Przykład'],['Nazwa','Biuro tłumaczeń Mosty'],['Kategoria','Biuro tłumaczeń'],['Adres','Kijów, ul. Chreszczatyk 1'],['Telefon','+380 44 000 00 00 (ten sam co na stronie)'],['Strona','https://mosty.com.ua/'],['Usługi','Tłumaczenie notarialne od 350 UAH; Apostille od 600 UAH']]}],
 mistakes:['Słowa kluczowe w nazwie („Mosty tłumaczenia tanio Kijów”): ryzyko zawieszenia profilu.','Różne telefony lub adresy w profilu, na stronie i w katalogach.','Kupowanie opinii lub opinie od pracowników.','Brak odpowiedzi na opinie, zwłaszcza negatywne.'],
 check:['Profil utworzony i zweryfikowany','Właściwa kategoria','NAP wszędzie taki sam','Są usługi, zdjęcia, godziny','Odpowiadam na opinie'],
 quiz:{q:'Co to jest NAP?', a:['Nazwa, adres, telefon','Nowy anchor','Numer analityki'], c:0, why:'Te dane muszą się wszędzie zgadzać.'},
 tests:[{q:'Czy można dodać słowa kluczowe do nazwy profilu?', a:['Nie, tylko prawdziwą nazwę firmy','Tak, im więcej, tym lepiej','Tylko miasto'], c:0, why:'Słowa kluczowe w nazwie łamią zasady i prowadzą do zawieszenia.'},{q:'Co zrobić z negatywną opinią?', a:['Uprzejmie odpowiedzieć i rozwiązać problem','Zignorować','Usunąć profil'], c:0, why:'Odpowiedzi pokazują troskę i wpływają na zaufanie.'},{q:'Który link jest najbardziej wartościowy?', a:['Ze strony-katalogu z tysiącem linków w stopce','Z artykułu na tematycznym blogu z prawdziwym ruchem, w tekście, z naturalnym anchorem','Z 200 forów w jeden dzień z tym samym anchorem'], c:1, why:'Wartość dają tematyczność, prawdziwy ruch domeny linkującej, umieszczenie w treści i naturalny anchor.'},{q:'Jakim atrybutem oznacza się płatny link?', a:['rel="sponsored"','rel="canonical"','rel="alternate"'], c:0, why:'Google wymaga oznaczania płatnych linków.'}],
 scenes:[
  {t:'Profil', app:'Profil Firmy w Google', url:'business.google.com', side:['Główna','Profil','Opinie','Zdjęcia'], sel:1, rows:['= Nazwa: Biuro tłumaczeń Mosty','= Kategoria: Biuro tłumaczeń','= Telefon: +380 44 000 00 00','+ Zweryfikowano'], hl:1, say:'Wypełniamy nazwę bez słów kluczowych, kategorię, adres i telefon, jak na stronie.'},
  {t:'Blok lokalny', app:'Google', url:'biuro tłumaczeń kijów', rows:['# Mapa · 3 firmy','| Mosty · ★ 4,9 · 120 opinii','| Pereklad-Plus · ★ 4,6'], hl:1, say:'Profil pojawia się na mapie w wynikach wyszukiwania. Ocena i liczba opinii wpływają na wybór klienta.'},
  {t:'Opinie', app:'Profil Firmy w Google', url:'Opinie', side:['Opinie'], sel:0, rows:['| ★★★★★ Szybko i dokładnie | [Odpowiedz]','| ★★☆☆☆ Spóźnili się o dzień | [Odpowiedz]'], hl:1, say:'Odpowiadamy na każdą opinię, zwłaszcza negatywną.'}]},

{id:'c2-code', after:'c2-01', title:'Jak czytać kod strony: Ctrl+U i DevTools', dur:'15 min', yt:'Chrome DevTools dla SEO',
 what:'Nie trzeba programować, ale trzeba umieć **znaleźć w kodzie** title, robots, canonical, hreflang, H1 i dane strukturalne oraz zobaczyć **kod odpowiedzi** strony. **Ctrl+U** pokazuje kod z serwera, **F12** (DevTools) kod po JavaScript, kody odpowiedzi i nagłówki.',
 svg:[['source',0,0,'Czego szukać w kodzie strony.']],
 nav:['Chrome → Ctrl+U → Ctrl+F „robots” / „canonical” / „hreflang” / „ld+json”','F12 → Elements → Ctrl+F (kod po JavaScript)','F12 → Network → ☑ Preserve log → filtr Doc → F5 → kliknij wiersz → Headers','F12 → Ctrl+Shift+M (widok mobilny)','F12 → Console (błędy, Mixed Content)'],
 steps:['Ctrl+U → Ctrl+F po kolei: [[<title]], [[robots]], [[canonical]], [[hreflang]], [[<h1]], [[ld+json]]. Zapisz, co znalazłeś.','F12 → Network → Preserve log → Doc → F5: status pierwszego wiersza (200, 301, 404).','Kliknij wiersz → Headers → Response Headers: czy nie ma [[x-robots-tag: noindex]].','Ctrl+Shift+M: czy tekst i menu są na telefonie.','Console: czerwone błędy i „Mixed Content”.'],
 example:[{table:[['Szukam (Ctrl+F)','Co powinno być'],['<title','Jeden, treściwy'],['name="robots"','Brak noindex na ważnych stronach'],['rel="canonical"','Jeden, bezwzględny, na siebie'],['hreflang','Kody uk, en, pl; jest x-default'],['<h1','Jeden'],['ld+json','Są dane strukturalne'],['GTM- / G-','Analityka zainstalowana raz']]}],
 mistakes:['Szukanie noindex tylko w kodzie: może być w nagłówku HTTP (Network → Headers).','Mylenie Ctrl+U i Elements: Elements pokazuje kod po skryptach.','Edytowanie kodu w Elements w przekonaniu, że zmieniło się stronę: zmiany znikną po odświeżeniu.'],
 check:['Znajduję title, robots, canonical, hreflang, H1 i dane strukturalne w Ctrl+U','Widzę kod odpowiedzi w Network','Sprawdzam X-Robots-Tag','Sprawdzam widok mobilny i Console'],
 quiz:{q:'Jak zobaczyć kod odpowiedzi strony?', a:['F12 → Network → pierwszy wiersz → Status','Ctrl+U','Google Trends'], c:0, why:'Network pokazuje odpowiedź serwera.'},
 tests:[{q:'Gdzie widać X-Robots-Tag?', a:['Network → Headers → Response Headers','W title','W mapie witryny'], c:0, why:'To nagłówek HTTP, nie ma go w HTML.'},{q:'Ctrl+U pokazuje…', a:['Kod z serwera przed wykonaniem JavaScriptu','Kod po JavaScripcie','Szybkość'], c:0, why:'Kod po JS zobaczysz w Elements.'},{q:'Linki do usług są w DevTools → Elements, ale nie ma ich w Ctrl+U. Co to oznacza?', a:['Linki dodaje JavaScript; Google zobaczy je dopiero po renderowaniu','Linki nie istnieją','To błąd przeglądarki'], c:0, why:'Ctrl+U pokazuje surowy HTML z serwera, Elements pokazuje DOM po skryptach. Treść pojawiająca się dopiero po JS indeksuje się wolniej i bardziej ryzykownie.'},{q:'Co otwiera Ctrl+Shift+M w DevTools?', a:['Tryb urządzenia mobilnego','Konsolę','Kod źródłowy'], c:0, why:'Device Toolbar pokazuje stronę jak na telefonie.'}],
 scenes:[
  {t:'Ctrl+U', app:'view-source', url:'mosty.com.ua/uslugy/notarialnyi-pereklad/', rows:['> <title>Tłumaczenie notarialne w Kijowie…</title>','> <meta name="robots" content="index, follow">','> <link rel="canonical" href="https://mosty.com.ua/uslugy/notarialnyi-pereklad/">'], hl:2, say:'Ctrl+U, a potem Ctrl+F: znajdujemy title, robots i canonical.'},
  {t:'Network', app:'Chrome DevTools', url:'F12 → Network', side:['Elements','Network','Console'], sel:1, rows:['|! Name | Status','| notarialnyi-pereklad/ | 200','# Headers: x-robots-tag (brak) ✓'], hl:1, say:'Network pokazuje kod odpowiedzi i nagłówki serwera.'},
  {t:'Console', app:'Chrome DevTools', url:'F12 → Console', side:['Console'], sel:0, rows:['! Mixed Content: http://mosty.com.ua/img/logo.png','! 404 /js/old.js'], hl:0, say:'Console pokazuje błędy: mieszaną zawartość i brakujące pliki.'}]},

{id:'c2-audit', after:'c2-03', title:'Audyt techniczny: pełna lista kontrolna', dur:'20 min', yt:'audyt techniczny SEO lista kontrolna',
 what:'Audyt to przejście przez jedną listę kontroli, a nie chaotyczne szukanie. Większość punktów sprawdza się jednym skanem w **Screaming Frog** lub **Netpeak** oraz raportami **Search Console**. Wynik: tabela „problem → przykładowe URL → rozwiązanie → priorytet”.',
 svg:[['audit',0,0,'Kolejność pracy.'],['priority',0,0,'Priorytety poprawek.']],
 nav:['Screaming Frog → Start → Crawl Analysis → Issues → Bulk Export','Search Console → Strony / Podstawowe wskaźniki internetowe / Bezpieczeństwo i ręczne działania','Arkusze Google → arkusz „Audyt”'],
 steps:['Zeskanuj stronę (Googlebot Smartphone, z mapą witryny) → Crawl Analysis.','Przejdź listę kontrolną poniżej, zaznaczając „tak / nie” z przykładowymi URL.','Dodaj dane Search Console: Strony, Podstawowe wskaźniki internetowe, ręczne działania.','Każdemu problemowi nadaj priorytet: krytyczny, wysoki, średni, niski.','Sformułuj zadanie: co zrobić, gdzie, jak sprawdzić.','Po poprawkach zeskanuj ponownie i porównaj.'],
 example:[{table:[['Kontrola','Gdzie','Norma'],['http, www → jedna wersja','Redirect Path','Jedno 301'],['robots.txt','/robots.txt, GSC','Brak Disallow: /, jest Sitemap'],['WordPress: widoczność','Ustawienia → Czytanie','Pole odznaczone'],['Mapa witryny','GSC → Mapy witryn; SF → Sitemaps','Powodzenie, tylko 200 + index'],['4xx / 5xx','SF → Response Codes','Brak w linkach wewnętrznych'],['Łańcuchy przekierowań','SF → Reports → Redirect Chains','Brak'],['noindex','SF → Directives','Tylko strony techniczne'],['canonical','SF → Canonicals','Jest, na 200'],['Duplikaty title / H1 / stron','SF → Page Titles, H1, Content','Brak'],['hreflang','SF → Hreflang','Bez błędów'],['Dane strukturalne','Test wyników z elementami rozszerzonymi','Bez błędów'],['HTTPS i mieszana zawartość','DevTools Console; SF → Security','Brak'],['Szybkość','PageSpeed, GSC Podstawowe wskaźniki','LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1'],['Obrazy','SF → Images','Do 100–200 KB, z alt'],['Sieroty, głębokość','SF → Orphan URLs, Crawl Depth','Brak sierot, głębokość ≤ 3'],['Indeksowanie','GSC → Strony (przesłane)','Ważne strony w indeksie'],['Kary','GSC → Ręczne działania','Nie wykryto problemów']]},{table:[['Priorytet','Przykłady'],['Krytyczny (dziś)','noindex lub Disallow na całej stronie, 5xx, HTTPS nie działa'],['Wysoki (w tym tygodniu)','Usługi poza indeksem, 404 w menu, duplikaty'],['Średni (w tym miesiącu)','Duplikaty title, wolny LCP, ciężkie zdjęcia'],['Niski','Długie title, drobne ostrzeżenia']]}],
 mistakes:['Wysłanie programiście „popraw błędy” bez przykładowych URL i rozwiązania.','Poprawianie niskich priorytetów przed krytycznymi.','Brak ponownego skanu po poprawkach.'],
 check:['Przeszedłem wszystkie punkty listy','Dodałem dane Search Console','Nadałem priorytety','Sformułowałem zadania z przykładowymi URL','Zeskanowałem ponownie po poprawkach'],
 quiz:{q:'Co robimy najpierw?', a:['Krytyczne: strona zablokowana przed indeksowaniem, 5xx','Długie title','Alt w starych zdjęciach'], c:0, why:'Problemy krytyczne całkowicie usuwają stronę z wyszukiwarki.'},
 tests:[{q:'Co musi zawierać zadanie dla programisty?', a:['Problem, przykładowe URL, rozwiązanie, sposób sprawdzenia','Tylko „popraw”','Zrzut ekranu bez wyjaśnień'], c:0, why:'Zadanie musi być zrozumiałe bez telefonu.'},{q:'Gdzie znaleźć większość problemów technicznych jednym kliknięciem?', a:['Screaming Frog → Issues','Google Trends','GA4'], c:0, why:'Issues zbiera problemy skanu z priorytetem.'},{q:'Co z poniższych ma priorytet krytyczny?', a:['Brak alt w 40 obrazach','noindex na całej stronie po pracach deweloperskich','Title dłuższy niż 60 znaków'], c:1, why:'noindex na całej stronie całkowicie usuwa ją z wyszukiwarki. Naprawia się to natychmiast, reszta może poczekać.'},{q:'Gdzie zobaczyć, jakie kody otrzymuje Googlebot na stronie?', a:['Ustawienia → Statystyki indeksowania','Skuteczność','Linki'], c:0, why:'Raport pokazuje rozkład odpowiedzi serwera.'}],
 scenes:[
  {t:'Skan', app:'Screaming Frog', url:'Issues', side:['Overview','Issues'], sel:1, rows:['|! Issue | Priority | URLs','| Internal Client Error (4xx) | High | 6','| Canonicalised | Medium | 4'], hl:1, say:'Skanujemy stronę i bierzemy listę problemów z karty Issues.'},
  {t:'Tabela audytu', app:'Arkusze Google', url:'Audyt', rows:['|! Problem | Przykład | Rozwiązanie | Priorytet','| 404 w menu | /kontakt | → /kontakty/ | wysoki'], hl:1, say:'Każdy problem staje się wierszem: przykład, rozwiązanie, priorytet.'},
  {t:'Search Console', app:'Search Console', url:'Strony', rows:['| Wykluczona za pomocą tagu „noindex” | 6 (usługi!)','| Ręczne działania | Nie wykryto problemów'], hl:0, say:'Dodajemy dane Search Console o indeksowaniu i karach.'}]},

{id:'c2-https', after:'c2-04', title:'HTTPS i mieszana zawartość', dur:'10 min', yt:'mieszana zawartość WordPress https',
 what:'Strona ma działać tylko na **https**, a wszystkie obrazy, skrypty i linki też mają się wczytywać przez https. Jeśli coś idzie przez http, to **mieszana zawartość** (mixed content): przeglądarka pokazuje „Niezabezpieczona” lub blokuje skrypty.',
 svg:[['url',0,0,'Wszystkie wersje domeny prowadzą do jednego adresu z https.']],
 nav:['Chrome → ikona obok adresu → Certyfikat','F12 → Console → „Mixed Content”','Screaming Frog → Security → HTTP URLs / Mixed Content','WordPress → Ustawienia → Ogólne → adresy z https','WordPress → Better Search Replace → http://mosty.com.ua → https://mosty.com.ua → przebieg próbny'],
 steps:['Sprawdź certyfikat: ważny i odnawiany automatycznie (u hostingodawcy lub w Vercel).','http i www → jedno 301 na https (Redirect Path).','F12 → Console na stronie głównej, usłudze, artykule: czy jest „Mixed Content”?','Screaming Frog → Security: masowo strony z mieszaną zawartością.','WordPress: kopia zapasowa → Better Search Replace → zamień [[http://mosty.com.ua]] na [[https://mosty.com.ua]] → najpierw przebieg próbny.','Wyczyść cache i sprawdź Console ponownie.','Strona statyczna: znajdź [[http://]] w plikach przez Ctrl+Shift+F w VS Code i zamień.'],
 example:[{code:`Źle:    <img src="http://mosty.com.ua/img/logo.png">
Dobrze: <img src="https://mosty.com.ua/img/logo.png">
Dobrze: <img src="/img/logo.png">`, lang:'html'}],
 mistakes:['Zamiana adresów w bazie bez kopii i bez przebiegu próbnego.','Wygasły certyfikat: strona pokazuje ostrzeżenie.','Adres witryny w WordPressie nadal z http.'],
 check:['Certyfikat ważny','http i www → https jednym 301','Brak Mixed Content w Console','Security w Screaming Frog czysty'],
 quiz:{q:'Gdzie zobaczyć mieszaną zawartość?', a:['F12 → Console','robots.txt','GA4'], c:0, why:'Przeglądarka zapisuje ostrzeżenie „Mixed Content” w konsoli.'},
 tests:[{q:'Jak masowo zamienić http na https w WordPressie?', a:['Better Search Replace po kopii zapasowej, najpierw przebieg próbny','Ręcznie w każdym artykule','Nie da się'], c:0, why:'Wtyczka zamienia adresy w bazie danych.'},{q:'Strona jest na https, ale logo wczytuje się przez http. Co to jest?', a:['Mieszana zawartość','Norma','Przekierowanie'], c:0, why:'Wszystkie zasoby muszą wczytywać się przez https.'},{q:'Strona otwiera się przez https, ale konsola pokazuje „Mixed Content … http://mosty.com.ua/uploads/banner.jpg”. Co robić?', a:['Nic, strona jest na https','Zmienić linki do zasobów z http na https (w bazie, motywie lub ustawieniach)','Wyłączyć https'], c:1, why:'Zasoby przez http czynią stronę częściowo niezabezpieczoną, a skrypty są blokowane. Linki trzeba poprawić na https.'},{q:'Jak zamienić http na https w bazie WordPressa?', a:['Better Search Replace z przebiegiem próbnym','Ręcznie w każdym artykule','Nie da się'], c:0, why:'Wtyczka zamienia ciągi w tabelach bazy.'}],
 scenes:[
  {t:'Console', app:'Chrome DevTools', url:'F12 → Console', side:['Console'], sel:0, rows:['! Mixed Content: http://mosty.com.ua/img/logo.png'], hl:0, say:'Console pokazuje zasób, który wczytuje się przez http.'},
  {t:'Zamiana', app:'WordPress · Better Search Replace', url:'Narzędzia', rows:['= Szukaj: http://mosty.com.ua','= Zamień na: https://mosty.com.ua','☑ Przebieg próbny','+ Znaleziono 214 zamian'], hl:3, say:'Better Search Replace zmienia adresy w bazie. Najpierw przebieg próbny.'},
  {t:'Sprawdzenie', app:'Screaming Frog', url:'Security', rows:['| HTTP URLs | 0','| Mixed Content | 0'], hl:1, say:'Po zamianie Screaming Frog nie znajduje mieszanej zawartości.'}]},

{id:'c2-rules', after:'c2-14', title:'Zasady Google: czego nie wolno', dur:'10 min', yt:'zasady Google dotyczące spamu ręczne działania',
 what:'Google karze za manipulacje: **kupowanie linków**, **upychanie słów kluczowych**, **ukryty tekst**, **kopiowanie treści**, **fałszywe dane strukturalne**, **masowe strony „miasto + usługa”** z tym samym tekstem. Skutek: spadek pozycji lub **ręczne działanie**.',
 svg:[['backlinks',0,0,'Ryzykowne linki oznaczono na czerwono.']],
 nav:['Search Console → Bezpieczeństwo i ręczne działania → Ręczne działania','Search Console → Bezpieczeństwo i ręczne działania → Problemy dotyczące bezpieczeństwa','developers.google.com/search/docs/essentials/spam-policies'],
 steps:['Raz w miesiącu sprawdzaj Search Console → Ręczne działania: powinno być „Nie wykryto problemów”.','Sprawdź Problemy dotyczące bezpieczeństwa (włamanie, wirus).','Sprawdź stronę pod kątem obcych stron: Google [[site:mosty.com.ua kasyno]].','Jeśli jest kara: usuń przyczynę → w raporcie „Poproś o ponowne rozpatrzenie” z wyjaśnieniem.'],
 example:[{table:[['Zabronione','Dlaczego'],['Kupowanie linków bez rel="sponsored"','Manipulacja linkami'],['Fraza w każdym zdaniu, biały tekst na białym','Upychanie i ukrywanie tekstu'],['100 stron „tłumaczenie + miasto” z jednym tekstem','Strony przejściowe (doorway)'],['Kopiowanie tekstów konkurencji','Brak własnej wartości'],['Znaczniki FAQ, oceny, ceny, których nie ma na stronie','Spam w danych strukturalnych'],['Pokazywanie Google innej treści niż ludziom','Cloaking']]}],
 mistakes:['Kupowanie „pakietu 100 linków”.','Generowanie setek identycznych stron miast.','Niesprawdzanie Ręcznych działań latami.'],
 check:['Znam główne naruszenia','Co miesiąc sprawdzam Ręczne działania','Sprawdzam stronę pod kątem włamania'],
 quiz:{q:'Gdzie sprawdzić, czy jest kara?', a:['Search Console → Bezpieczeństwo i ręczne działania','Serpstat','Vercel'], c:0, why:'Ręczne działania Google pokazuje tylko tam.'},
 tests:[{q:'50 stron „tłumaczenie notarialne + miasto” z tym samym tekstem. Ryzyko?', a:['Tak, to strony przejściowe','Nie, to dobrze','Tylko dla bloga'], c:0, why:'Masowe identyczne strony łamią zasady.'},{q:'Płatny link trzeba oznaczyć…', a:['rel="sponsored"','rel="canonical"','rel="alternate"'], c:0, why:'Inaczej to manipulacja linkami.'},{q:'Który link jest najbardziej wartościowy?', a:['Ze strony-katalogu z tysiącem linków w stopce','Z artykułu na tematycznym blogu z prawdziwym ruchem, w tekście, z naturalnym anchorem','Z 200 forów w jeden dzień z tym samym anchorem'], c:1, why:'Wartość dają tematyczność, prawdziwy ruch domeny linkującej, umieszczenie w treści i naturalny anchor.'},{q:'Jakim atrybutem oznacza się płatny link?', a:['rel="sponsored"','rel="canonical"','rel="alternate"'], c:0, why:'Google wymaga oznaczania płatnych linków.'}],
 scenes:[
  {t:'Ręczne działania', app:'Search Console', url:'Bezpieczeństwo i ręczne działania', side:['Ręczne działania','Problemy dotyczące bezpieczeństwa'], sel:0, rows:['+ Nie wykryto problemów'], hl:0, say:'Raz w miesiącu sprawdzamy, czy nie ma ręcznych działań.'},
  {t:'Włamanie', app:'Google', url:'site:mosty.com.ua kasyno', rows:['~ Brak wyników ✓'], hl:0, say:'Sprawdzamy, czy na stronie nie ma obcych stron spamowych.'},
  {t:'Jeśli jest kara', app:'Search Console', url:'Ręczne działania', rows:['! Nienaturalne linki do Twojej witryny','~ Usuń przyczynę','[Poproś o ponowne rozpatrzenie]'], hl:2, say:'Jeśli jest kara, usuwamy przyczynę i prosimy o ponowne rozpatrzenie.'}]}
);
