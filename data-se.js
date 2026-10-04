window.LANDGAME=window.LANDGAME||{};
LANDGAME.se = {
 "title": "🇸🇪 How is Sweden's land actually used? — Guessing Game",
 "code": "se",
 "iso": "752",
 "alpha2": "se",
 "lon": 16,
 "lat": 62.5,
 "ha": 45029500,
 "sol100Ha": 135000,
 "demandTwh": 135,
 "accent": "#378ADD",
 "langs": [
  "sv",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2026</strong> · Swedish Forest Industries Federation · SLU Riksskogstaxeringen · World Bank/FAO · Swedish Energy Agency · IEA",
 "sources": "Sources: <a href=\"https://www.forestindustries.se/forest-industry/forest-management/forest-definitions/forest/\" target=\"_blank\">Swedish Forest Industries Federation</a> · <a href=\"https://www.slu.se/en/about-slu/organisation/departments/forest-resource-management/miljoanalys/nfi/our-data/the-latest-statistics/all-land/\" target=\"_blank\">SLU National Forest Inventory</a> · <a href=\"https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=SE\" target=\"_blank\">World Bank/FAO: Sweden Land Use</a> · <a href=\"https://www.energimyndigheten.se/en/\" target=\"_blank\">Swedish Energy Agency</a> · <a href=\"https://finance.yahoo.com/news/lyten-acquires-northvolt-swedish-battery-173427103.html\" target=\"_blank\">Lyten Acquires Northvolt (2026)</a> · Sweden total land area ~45.0M ha (450,295 km², incl. major lakes).",
 "cats": {
  "sv": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Skog",
    "desc": "Barrskog av gran och tall dominerar från söder till norr — Sveriges skogsvolym har mer än fördubblats sedan 1920-talet tack vare aktivt skogsbruk, och skogsindustrin (papper, massa, timmer) är en av landets viktigaste exportnäringar",
    "answer": 68.9,
    "color": "#3B6D11",
    "max": 85,
    "step": 0.5,
    "answerHa": 31025326
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Jordbruksmark",
    "desc": "Spannmål, raps och betesmark, koncentrerad till de bördiga slätterna i Skåne och Mälardalen — jordbruksmarken har minskat stadigt i decennier i takt med att skog och tätorter breder ut sig",
    "answer": 6.8,
    "color": "#639922",
    "max": 25,
    "step": 0.3,
    "answerHa": 3062006
   },
   {
    "id": "mountain",
    "icon": "🏔️",
    "name": "Fjäll och övrig mark",
    "desc": "Fjällkedjan längs norska gränsen samt övrig obebyggd mark som inte klassas som skog, jordbruk eller våtmark — hem för Sveriges enda vildrensstammar och stora delar av samernas renskötselområden",
    "answer": 6.52,
    "color": "#8a7860",
    "max": 25,
    "step": 0.5,
    "answerHa": 2935923
   },
   {
    "id": "wetland",
    "icon": "🌿",
    "name": "Våtmarker och myrar",
    "desc": "Vidsträckta myrar och torvmarker, särskilt i Norrland — bland Europas mest omfattande våtmarksområden, viktiga för både biologisk mångfald och kollagring",
    "answer": 6,
    "color": "#8ba888",
    "max": 15,
    "step": 0.2,
    "answerHa": 2701770
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Sjöar och vattendrag",
    "desc": "Omkring 100 000 sjöar, inklusive Vänern och Vättern, två av Europas största — sjöar täcker en påfallande stor del av landets yta och har historiskt varit avgörande för både transport och vattenkraft",
    "answer": 8.7,
    "color": "#378ADD",
    "max": 15,
    "step": 0.1,
    "answerHa": 3917566
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Bebyggelse och vägar",
    "desc": "Stockholm, Göteborg och Malmö, samt landets väg- och järnvägsnät — endast omkring tre procent av Sveriges yta är bebyggd, trots att över 85 procent av befolkningen bor i städer",
    "answer": 3,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 1350885
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golfbanor",
    "desc": "Omkring 450–500 banor — Sverige har fler golfbanor per invånare än nästan något annat land i Europa, ett arv från golfboomen på 1980- och 90-talen",
    "answer": 0.06,
    "color": "#5DCAA5",
    "max": 0.3,
    "step": 0.005,
    "answerHa": 27018,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solkraft (nuvarande)",
    "desc": "Storskalig, nätansluten solkraft utgör en liten men växande del av elmixen — solel stod för endast omkring 1–2 procent av Sveriges elproduktion, långt efter vattenkraft, kärnkraft och vindkraft",
    "answer": 0.02,
    "color": "#EF9F27",
    "max": 0.3,
    "step": 0.005,
    "answerHa": 9006,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Tips: Sveriges elproduktion är redan till största delen fossilfri utan solkraft — vattenkraft (cirka 40 procent), kärnkraft (cirka 27–29 procent) och vindkraft (cirka 19–23 procent) står tillsammans för mer än 90 procent av elmixen"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Sol och batteri för 100 procent el",
    "desc": "Yta som skulle krävas för storskalig solkraft med batterilagring för att försörja hela Sveriges elnät dygnet runt (cirka 135 TWh/år), med Sveriges relativt måttliga nordiska solinstrålning",
    "answer": 0.2998,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 135000,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Sveriges solinstrålning är måttlig och varierar kraftigt mellan årstiderna på grund av landets nordliga läge — ungefär 1000 ha/TWh enligt en försiktig uppskattning, sämre än länder som Tyskland men bättre än Island. Vid den nivån skulle hela elnätet endast kräva omkring 0,3 procent av Sveriges yta. Men Sverige behöver knappast solkraft för att vara fossilfritt: vattenkraft, kärnkraft och vindkraft täcker redan över 90 procent av elproduktionen utan någon sol alls"
   }
  ],
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Spruce and pine forest dominates from south to north — Sweden's standing timber volume has more than doubled since the 1920s thanks to active forestry, and the forest industry (paper, pulp, timber) is one of the country's most important export sectors",
    "answer": 68.9,
    "color": "#3B6D11",
    "max": 85,
    "step": 0.5,
    "answerHa": 31025326
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Grain, oilseed rape and pasture, concentrated on the fertile plains of Skåne and around Lake Mälaren — farmland has been shrinking steadily for decades as forest and urban areas expand",
    "answer": 6.8,
    "color": "#639922",
    "max": 25,
    "step": 0.3,
    "answerHa": 3062006
   },
   {
    "id": "mountain",
    "icon": "🏔️",
    "name": "Mountains & other land",
    "desc": "The mountain range along the Norwegian border, plus other unbuilt land not classed as forest, farmland or wetland — home to Sweden's only wild reindeer herds and much of the Sámi reindeer-herding territory",
    "answer": 6.52,
    "color": "#8a7860",
    "max": 25,
    "step": 0.5,
    "answerHa": 2935923
   },
   {
    "id": "wetland",
    "icon": "🌿",
    "name": "Wetlands & mires",
    "desc": "Extensive peat bogs and mires, especially across Norrland in the north — among the most extensive wetland areas in Europe, important both for biodiversity and carbon storage",
    "answer": 6,
    "color": "#8ba888",
    "max": 15,
    "step": 0.2,
    "answerHa": 2701770
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Lakes & rivers",
    "desc": "Around 100,000 lakes, including Vänern and Vättern, two of Europe's largest — lakes cover a strikingly large share of the country and have historically been vital for both transport and hydropower",
    "answer": 8.7,
    "color": "#378ADD",
    "max": 15,
    "step": 0.1,
    "answerHa": 3917566
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Stockholm, Gothenburg and Malmö, plus the national road and rail network — only around 3% of Sweden's land is built up, despite over 85% of the population living in cities",
    "answer": 3,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 1350885
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 450-500 courses — Sweden has more golf courses per capita than almost any other country in Europe, a legacy of the golf boom of the 1980s and 90s",
    "answer": 0.06,
    "color": "#5DCAA5",
    "max": 0.3,
    "step": 0.005,
    "answerHa": 27018,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Utility-scale, grid-connected solar remains a small but growing share of the mix - solar supplied only around 1-2% of Sweden's electricity generation, far behind hydro, nuclear and wind",
    "answer": 0.02,
    "color": "#EF9F27",
    "max": 0.3,
    "step": 0.005,
    "answerHa": 9006,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: Sweden's electricity is already mostly fossil-free without solar - hydropower (~40%), nuclear (~27-29%) and wind (~19-23%) together supply over 90% of the mix"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Sweden's entire national grid 24/7 (~135 TWh/yr), given the country's fairly moderate Nordic solar resource",
    "answer": 0.2998,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 135000,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Sweden's solar resource is moderate and swings hard with the seasons given its northern latitude - roughly 1,000 ha/TWh on a hedged estimate, worse than Germany but better than Iceland. At that rate, the whole grid would need only about 0.3% of Sweden's land. But Sweden hardly needs solar to be fossil-free: hydropower, nuclear and wind already cover over 90% of generation without any sun at all"
   }
  ]
 },
 "strings": {
  "sv": {
   "h1": "<img src=\"https://flagcdn.com/32x24/se.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Hur används egentligen Sveriges mark?",
   "subtitle": "Inspirerat av <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clarks korta YouTube-klipp</a> (på engelska). Gissa hur stor andel av Sveriges yta som tillhör varje kategori — reglagen får sammanlagt uppgå till högst 100 procent. Sveriges elproduktion är redan över 90 procent fossilfri tack vare vattenkraft, kärnkraft och vindkraft — solkraft spelar knappt någon roll alls.",
   "disclaimer": "Siffrorna för sol och batterier är ett tankeexperiment framtaget med hjälp av AI, inte en politisk rekommendation. Alla solsiffror avser storskaliga, nätanslutna system; Sveriges elbehov är ett ungefärligt, långsiktigt typvärde. Markanvändningsdata från Skogsindustrierna, Riksskogstaxeringen (SLU) och Världsbanken/FAO; elsiffror från Energimyndigheten och IEA, 2023-2025.",
   "noteLabel": "Obs",
   "contextLabel": "Landskontext",
   "countryNote": "Sverige var hem för Northvolt, som länge sågs som Europas bästa chans till en egen batterijätte för elbilar, med stöd från EU-finansiering och ett stort partnerskap med Volvo. Bolaget gick i konkurs i mars 2025 efter att ha slut på både pengar och tid, vilket kostade omkring 5 000 jobb vid gigafabriken i Skellefteå. Historien slutade dock inte där: i februari 2026 slutförde det Kalifornien-baserade bolaget Lyten ett förvärv värt omkring 5 miljarder dollar av Northvolts anläggningar i Skellefteå och Västerås, med produktionsstart och kommersiella leveranser väntade under andra halvan av 2026, samt ett återanställningsprogram med målet över 600 nya tjänster under det första året. Värt att notera: Northvolts celler använde nickel-mangan-kobolt-kemi (NMC), vilket innebar att de fortfarande var beroende av kobolt (ofta med ursprung i Kongo-Kinshasa) snarare än de koboltfria LFP-batterier som alltmer dominerar den globala elbilsmarknaden. Sveriges egen energiproduktion ser för övrigt inte alls ut som ett land som jagar solkraft: vattenkraft, kärnkraft och vindkraft levererar redan ett elnät som är över 90 procent fossilfritt.",
   "submit": "Skicka in alla svar",
   "play_again": "Spela igen",
   "score": "Poäng",
   "land_used": "Använd yta",
   "remaining": "Återstår",
   "map_guess": "Dina svar — proportionell areakarta (uppdateras när du drar)",
   "map_answer": "Faktisk svensk markanvändning — proportionell areakarta",
   "allocated": "/ 100% fördelat",
   "reveal": "Visas efter att du skickat in.",
   "out_of": "träffsäkerhet",
   "sol100_reveal": "Sveriges solinstrålning är måttlig och varierar kraftigt mellan årstiderna på grund av landets nordliga läge — ungefär 1000 ha/TWh enligt en försiktig uppskattning, sämre än länder som Tyskland men bättre än Island. Vid den nivån skulle hela elnätet endast kräva omkring 0,3 procent av Sveriges yta. Men Sverige behöver knappast solkraft för att vara fossilfritt: vattenkraft, kärnkraft och vindkraft täcker redan över 90 procent av elproduktionen utan någon sol alls",
   "grades": [
    [
     86,
     "🇸🇪 Expert! Du känner till Sveriges markanvändning med imponerande precision."
    ],
    [
     64,
     "🌲 Mycket bra — god känsla för hur skogsdominerat landet faktiskt är."
    ],
    [
     43,
     "🏌️ Inte illa! De flesta inser inte att Sverige har en av Europas högsta tätheter av golfbanor."
    ],
    [
     21,
     "💧 Visste du att Sverige har omkring 100 000 sjöar, inklusive två av Europas största?"
    ],
    [
     0,
     "🤔 Överraskande? Sveriges elproduktion är redan över 90 procent fossilfri, helt utan nämnvärd solkraft."
    ]
   ],
   "btn_label": "English",
   "country_label": "Sverige",
   "circle_label": "Yta som krävs",
   "zoomed": "Förstorad vy"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/se.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Sweden's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Swedish land for each category — sliders are capped at 100% total. Sweden's electricity is already over 90% fossil-free thanks to hydropower, nuclear and wind — solar barely features at all.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems; Sweden's electricity demand figure is an approximate, long-run typical value. Land use figures from the Swedish Forest Industries Federation, the Swedish National Forest Inventory (SLU) and the World Bank/FAO; electricity figures from the Swedish Energy Agency and IEA, 2023-2025.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Sweden was home to Northvolt, once seen as Europe's best hope for a homegrown EV battery champion, backed by EU funding and a major Volvo partnership. It filed for bankruptcy in March 2025 after running out of money and time, costing around 5,000 jobs at its Skellefteå gigafactory. The story didn't end there: in February 2026, California-based Lyten completed a roughly $5bn acquisition of Northvolt's Skellefteå and Västerås sites, restarting production with commercial shipments expected in the second half of 2026 and a rehiring programme targeting over 600 new positions in the first year. Worth noting: Northvolt's cells used nickel-manganese-cobalt (NMC) chemistry, meaning they still relied on cobalt (often DRC-sourced) rather than the cobalt-free LFP batteries increasingly dominating the wider EV market. Separately, Sweden's own domestic energy story looks nothing like a country chasing solar: hydropower, nuclear and wind already deliver a grid that's over 90% fossil-free.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Swedish land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Sweden's solar resource is moderate and swings hard with the seasons given its northern latitude - roughly 1,000 ha/TWh on a hedged estimate, worse than Germany but better than Iceland. At that rate, the whole grid would need only about 0.3% of Sweden's land. But Sweden hardly needs solar to be fossil-free: hydropower, nuclear and wind already cover over 90% of generation without any sun at all",
   "grades": [
    [
     86,
     "🇸🇪 Expert! You know Sweden's land balance with impressive precision."
    ],
    [
     64,
     "🌲 Very strong — sharp grasp of just how forested this country really is."
    ],
    [
     43,
     "🏌️ Not bad! Most people don't realise Sweden has one of the highest golf-course densities in Europe."
    ],
    [
     21,
     "💧 Did you know? Sweden has roughly 100,000 lakes, including two of Europe's largest."
    ],
    [
     0,
     "🤔 Surprising? Sweden's electricity is already over 90% fossil-free without any meaningful solar power at all."
    ]
   ],
   "btn_label": "Svenska",
   "country_label": "Sweden",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "sv": {
   "head": "🌍 Tänk om Sverige ensamt skulle förse hela världen med el?",
   "fit": "Med en försiktig uppskattning av Sveriges måttliga, nordliga solinstrålning (cirka 1000 ha/TWh) skulle det krävas ungefär <strong>{haM} miljoner hektar</strong> för att täcka hela den <strong>globala elförbrukningen</strong> (cirka 31 000 TWh/år) — <strong>{pct}% av Sveriges landyta</strong>, visat nedan som en cirkel med motsvarande area. Det är merparten av landet, men det ryms ändå knappt inom Sveriges betydande storlek.",
   "stat2": "Sveriges berättelse skiljer sig från Danmarks eller Islands: solförhållandena är på liknande sätt blygsamma, men landets betydande yta (bland de största i Europa) gör att siffrorna ändå knappt går ihop, till skillnad från de mindre nordiska grannländerna där cirkeln skulle sträcka sig långt utanför landets gränser. Oavsett är det en rent akademisk fråga inom landet - Sveriges eget elnät är redan till övervägande del rent, helt utan behov av solkraft i någon större skala.",
   "foot": "Den streckade cirkeln är enbart illustrativ — dess storlek motsvarar rätt yta, men den utgör inte en faktiskt föreslagen plats."
  },
  "en": {
   "head": "🌍 What if Sweden alone powered the whole world?",
   "fit": "Using a hedged estimate of Sweden's moderate, high-latitude solar yield (~1,000 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — <strong>{pct}% of Sweden's land area</strong>, shown below as a circle of equivalent area. That's the majority of the country, but it still just about fits within Sweden's own substantial size.",
   "stat2": "Sweden's story is different from Denmark or Iceland: its solar conditions are similarly modest, but its sheer land area (among the largest in Europe) means the numbers still just about work out, unlike its smaller Nordic neighbours where the circle would spill far outside the country's borders. Either way, it's a moot point domestically - Sweden's own grid is already overwhelmingly clean without needing solar power at any scale.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting."
  }
 }
};
