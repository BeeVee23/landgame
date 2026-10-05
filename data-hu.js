window.LANDGAME=window.LANDGAME||{};
LANDGAME.hu = {
 "title": "🇭🇺 How is Hungary's land actually used? - Guessing Game",
 "code": "hu",
 "iso": "348",
 "alpha2": "hu",
 "lon": 19.5,
 "lat": 47,
 "ha": 9303000,
 "sol100Ha": 28971,
 "demandTwh": 37,
 "accent": "#639922",
 "langs": [
  "hu",
  "en"
 ],
 "dataInfo": "Data: <strong>2024–2026</strong> · FAO FAOSTAT · KSH (Hungarian Central Statistical Office) · Clean Energy Wire · IEA Hungary",
 "sources": "Sources: <a href=\"https://www.fao.org/faostat/en/#data/RL\" target=\"_blank\">FAO FAOSTAT Land Use</a> · <a href=\"https://www.ksh.hu/energy\" target=\"_blank\">KSH Hungary Energy Statistics</a> · <a href=\"https://www.cleanenergywire.org/factsheets/clew-guide-hungary-energy-transition\" target=\"_blank\">Clean Energy Wire: Hungary Energy Transition</a> · <a href=\"https://www.iea.org/countries/hungary\" target=\"_blank\">IEA Hungary</a> · Hungary total land area ~9.3M ha (93,030 km²).",
 "cats": {
  "hu": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Mezőgazdasági terület",
    "desc": "Szántóföld, ültetvények és legelők a Kárpát-medence termékeny síkságain - Magyarország a régió vezető búza-, kukorica- és napraforgó-exportőre, a talaj kiválóan alkalmas gabonatermesztésre",
    "answer": 57,
    "color": "#639922",
    "max": 80,
    "step": 0.5,
    "answerHa": 5302710
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Erdő",
    "desc": "Az elmúlt évszázad tudatos erdősítési programjai révén az erdőterület jelentősen megnőtt - 2024 végén Magyarország erdőterülete elérte a valaha mért legmagasabb, 1,96 millió hektáros szintet",
    "answer": 21.1,
    "color": "#3B6D11",
    "max": 35,
    "step": 0.5,
    "answerHa": 1962933
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Település és úthálózat",
    "desc": "Budapest (kb. 1,7 millió lakos), Debrecen, Szeged és Magyarország sűrű vasúti és közúti hálózata - az ország Közép-Európa egyik legjobban összekapcsolt vasúti rendszerével rendelkezik",
    "answer": 6.7,
    "color": "#73726c",
    "max": 15,
    "step": 0.2,
    "answerHa": 623301
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Vízfelületek",
    "desc": "A Duna és a Tisza folyók, valamint a Balaton - Közép-Európa legnagyobb tava, amely nyaranta több millió turistát vonz a magyar tópartra",
    "answer": 2,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 186060
   },
   {
    "id": "other",
    "icon": "🌿",
    "name": "Egyéb terület",
    "desc": "Gyepek, vizes élőhelyek, kopár és átmeneti területek, amelyek nem tartoznak a fenti kategóriákba - beleértve a Hortobágy pusztai tájait is",
    "answer": 13.044,
    "color": "#c4b8a0",
    "max": 25,
    "step": 0.5,
    "answerHa": 1213745
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golfpályák",
    "desc": "Mindössze néhány golfpálya működik Magyarországon - a sport itthon jóval kevésbé népszerű, mint Nyugat-Európában, így a golfpályák által elfoglalt terület elenyésző",
    "answer": 0.006,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 558,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Naperőművek (jelenlegi)",
    "desc": "Hálózatra kapcsolt, nagyüzemi napelemparkok - Magyarországon a napenergia 2024-ben a villamosenergia-termelés 24%-át adta, ami a zöldáram több mint háromnegyedét jelentette, és az egyik legmagasabb arány a világon",
    "answer": 0.15,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.01,
    "answerHa": 14000,
    "dp": 2,
    "isSolar": true,
    "solarNote": "Tipp: Magyarország napenergia-aránya (24%) a villamosenergia-termelésben az egyik legmagasabb a világon - a bővülés nagy része az elmúlt öt évben történt, ötszörösére nőtt a kapacitás"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Napenergia+akkumulátor 100%-os villamosenergia-ellátáshoz",
    "desc": "Mekkora terület kellene nagyüzemi naperőműhöz és akkumulátoros tároláshoz, hogy Magyarország teljes villamosenergia-igényét (kb. 37 TWh/év) éjjel-nappal fedezze?",
    "answer": 0.312,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 28971,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Magyarország napkitermelése kb. 1150 kWh/kWp/év - hasonló Németországhoz. 783 ha/TWh mellett a teljes hálózat ellátásához az ország területének mindössze 0,31%-a kellene. Magyarország már ma is világelső a napenergia arányában (24% 2024-ben), miközben az atomenergia (42%, a Paks II bővítéssel tovább nő) adja a villamosenergia törzsét"
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Cropland, orchards and pasture across the fertile Carpathian Basin plains - Hungary is a leading regional exporter of wheat, maize and sunflower, with soil exceptionally well suited to grain production",
    "answer": 57,
    "color": "#639922",
    "max": 80,
    "step": 0.5,
    "answerHa": 5302710
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "A century of deliberate afforestation programmes sharply increased forest cover - by the end of 2024 Hungary's forest area reached a century-long record of 1.96 million hectares",
    "answer": 21.1,
    "color": "#3B6D11",
    "max": 35,
    "step": 0.5,
    "answerHa": 1962933
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Budapest (~1.7 million), Debrecen, Szeged and Hungary's dense rail and road network - the country has one of Central Europe's most tightly connected rail systems",
    "answer": 6.7,
    "color": "#73726c",
    "max": 15,
    "step": 0.2,
    "answerHa": 623301
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "The Danube and Tisza rivers, plus Lake Balaton - Central Europe's largest lake, drawing millions of tourists to its shores every summer",
    "answer": 2,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 186060
   },
   {
    "id": "other",
    "icon": "🌿",
    "name": "Other land",
    "desc": "Grassland, wetlands, bare and transitional land not captured above - including the puszta grasslands of Hortobágy National Park",
    "answer": 13.044,
    "color": "#c4b8a0",
    "max": 25,
    "step": 0.5,
    "answerHa": 1213745
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Only a handful of golf courses operate in Hungary - the sport remains far less popular here than in Western Europe, so the land they occupy is tiny",
    "answer": 0.006,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 558,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected, utility-scale solar arrays - in 2024, solar supplied 24% of Hungary's electricity generation, over three-quarters of its green electricity, one of the highest shares anywhere in the world",
    "answer": 0.15,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.01,
    "answerHa": 14000,
    "dp": 2,
    "isSolar": true,
    "solarNote": "Hint: Hungary's 24% solar share of electricity generation is one of the highest in the world - most of that growth happened in the last five years, with capacity roughly quintupling"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Hungary's entire national grid 24/7 (~37 TWh/yr)",
    "answer": 0.312,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 28971,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Hungary's solar yield is roughly 1,150 kWh/kWp/yr, similar to Germany. At 783 ha/TWh, powering the whole grid needs just 0.31% of the country's land. Hungary is already a world leader in solar's electricity share (24% in 2024), while nuclear (42%, growing further with the Paks II expansion) forms the backbone of its grid"
   }
  ]
 },
 "strings": {
  "hu": {
   "h1": "<img src=\"https://flagcdn.com/32x24/hu.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Valójában hogyan használjuk Magyarország területét?",
   "subtitle": "Dr. Simon Clark <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">YouTube-videója</a> (angolul) inspirálta. Becsüld meg Magyarország területének százalékos megoszlását az egyes kategóriák szerint - a csúszkák összege legfeljebb 100% lehet. Magyarország villamosenergiájának már most is közel negyede napenergiából származik - ez az egyik legmagasabb arány a világon.",
   "disclaimer": "A napenergia+akkumulátor adatok mesterséges intelligencia segítségével készült gondolatkísérletet jelentenek, nem szakpolitikai ajánlást. Minden napenergia-adat nagyüzemi, hálózatra kapcsolt rendszerekre vonatkozik.",
   "noteLabel": "Megjegyzés",
   "contextLabel": "Országos kontextus",
   "countryNote": "Politikai háttér: a játékot Magyarország 2026. áprilisi parlamenti választása után frissítettük, amelyen Magyar Péter Tisza pártja legyőzte Orbán Viktor Fideszét, véget vetve Orbán 16 éves kormányzásának. Az új kormány, amely 2026 májusában állt fel, azóta feloldotta Magyarország vétóját Ukrajna EU-csatlakozásával kapcsolatban, és lépéseket tett a korábbi kormányzat alatt meggyengült igazságszolgáltatási és intézményi függetlenség helyreállítására. Energia- és klímapolitikája még formálódott e szöveg írásakor, így az itt szereplő adatok az örökölt energiarendszert tükrözik, nem az új kormányzat politikáját. Területhasználati adatok: FAO FAOSTAT, Központi Statisztikai Hivatal (KSH) és Clean Energy Wire, 2026. Villamosenergia-adatok: KSH és IEA Magyarország, 2024.",
   "submit": "Összes válasz beküldése",
   "play_again": "Új játék",
   "score": "Pontszám",
   "land_used": "Felhasznált terület",
   "remaining": "Hátralévő",
   "map_guess": "A te becsléseid - arányos területi térkép (csúsztatáskor frissül)",
   "map_answer": "Magyarország tényleges területhasználata - arányos területi térkép",
   "allocated": "/ 100% kiosztva",
   "reveal": "Beküldés után derül ki.",
   "out_of": "pontossági eredmény",
   "sol100_reveal": "Magyarország napkitermelése kb. 1150 kWh/kWp/év - hasonló Németországhoz. 783 ha/TWh mellett a teljes hálózat ellátásához az ország területének mindössze 0,31%-a kellene. Magyarország már ma is világelső a napenergia arányában (24% 2024-ben), miközben az atomenergia (42%, a Paks II bővítéssel tovább nő) adja a villamosenergia törzsét",
   "grades": [
    [
     86,
     "🇭🇺 Szakértő! Lenyűgöző pontossággal ismered Magyarország területi megoszlását."
    ],
    [
     64,
     "🌾 Nagyon erős - kiváló ráérzés arra, mennyire mezőgazdasági jellegű a Kárpát-medence."
    ],
    [
     43,
     "☀️ Nem rossz! A legtöbben alábecsülik, meddig jutott Magyarország napenergia-fellendülése."
    ],
    [
     21,
     "🌲 Tudtad? Magyarország erdőterülete 2024-ben évszázados csúcsot ért el."
    ],
    [
     0,
     "🤔 Meglepő? Magyarország villamosenergiájának már most is közel negyede napenergiából származik - ez az egyik legmagasabb arány a világon."
    ]
   ],
   "btn_label": "English",
   "country_label": "Magyarország",
   "circle_label": "Szükséges terület",
   "zoomed": "Nagyított nézet"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/hu.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Hungary's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Hungarian land for each category - sliders are capped at 100% total. Hungary already gets roughly a quarter of its electricity from solar - one of the highest shares of any country in the world.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Note on political context: this game was updated after Hungary's April 2026 parliamentary election, in which Péter Magyar's Tisza party defeated Viktor Orbán's Fidesz, ending Orbán's 16 years in power. The new government, which took office in May 2026, has since dropped Hungary's veto on Ukraine's EU accession and moved to restore judicial and institutional independence eroded under the previous government. Its energy and climate policies were still taking shape at the time of writing, so the figures here reflect the energy system Hungary inherited rather than any policy of the incoming administration. Land use figures from FAO FAOSTAT, Hungarian Central Statistical Office (KSH) and Clean Energy Wire 2026. Electricity figures from KSH and IEA Hungary 2024.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Hungarian land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Hungary's solar yield is roughly 1,150 kWh/kWp/yr, similar to Germany. At 783 ha/TWh, powering the whole grid needs just 0.31% of the country's land. Hungary is already a world leader in solar's electricity share (24% in 2024), while nuclear (42%, growing further with the Paks II expansion) forms the backbone of its grid",
   "grades": [
    [
     86,
     "🇭🇺 Expert! You know Hungary's land balance with impressive precision."
    ],
    [
     64,
     "🌾 Very strong - solid grasp of just how agricultural the Carpathian Basin really is."
    ],
    [
     43,
     "☀️ Not bad! Most people underestimate how far Hungary's solar boom has come."
    ],
    [
     21,
     "🌲 Did you know? Hungary's forest cover reached a century-long record in 2024."
    ],
    [
     0,
     "🤔 Surprising? Hungary already gets roughly a quarter of its electricity from solar - one of the highest shares on Earth."
    ]
   ],
   "btn_label": "Magyar",
   "country_label": "Hungary",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "hu": {
   "head": "🌍 Mi történne, ha egyedül Magyarország látná el árammal az egész világot?",
   "fit": "Magyarország napenergia-adottságai mellett (~783 ha/TWh) a teljes <strong>globális villamosenergia-igény</strong> (~31 000 TWh/év) fedezéséhez körülbelül <strong>{haM} millió hektár</strong> kellene - <strong>Magyarország területének {pct}%-a</strong>, amit az alábbi, egyenlő területű kör mutat. Ez a kör jócskán túlnyúlik Magyarország határain a szomszédos országokba.",
   "stat2": "Magyarország felhősebb kontinentális éghajlata és viszonylag kis területe miatt saját területének több mint kétszerese kellene ahhoz, hogy egyedül napenergiával lássa el a világot - ez hasonló mértékű túlnyúlás, mint Németország esetében. A valóságban Magyarország villamosenergia-mixe már most is nagymértékben támaszkodik az atomenergiára (42%) a gyorsan növekvő napenergia-arány mellett.",
   "foot": "A szaggatott kör csak szemléltető célt szolgál - a helyes területnagyságot mutatja, nem valós telepítési javaslatot. A meglévő határokkal való átfedés kizárólag a méretarány érzékeltetését szolgálja."
  },
  "en": {
   "head": "🌍 What if Hungary alone powered the whole world?",
   "fit": "At Hungary's solar conditions (~783 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - <strong>{pct}% of Hungary's land area</strong>, shown below as a circle of equivalent area. That circle spills well beyond Hungary's borders into its neighbours.",
   "stat2": "Hungary's cloudier continental climate and relatively small land area mean it would need well over twice its own territory to power the whole world with solar - a similar overflow scale to Germany. In reality, Hungary's electricity mix already leans heavily on nuclear power (42%) alongside its rapidly growing solar share.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting. It overlaps existing borders for scale only."
  }
 }
};
