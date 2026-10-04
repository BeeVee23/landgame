window.LANDGAME=window.LANDGAME||{};
LANDGAME.dk = {
 "title": "🇩🇰 How is Denmark's land actually used? — Guessing Game",
 "code": "dk",
 "iso": "208",
 "alpha2": "dk",
 "lon": 10,
 "lat": 56.3,
 "ha": 4310000,
 "sol100Ha": 33250,
 "demandTwh": 35,
 "accent": "#639922",
 "langs": [
  "da",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · Eurostat LUCAS · Danmarks Statistik · Energistyrelsen · DEA",
 "sources": "Sources: <a href=\"https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Land_use_statistics\" target=\"_blank\">Eurostat LUCAS Land Use Survey 2022</a> · <a href=\"https://www.dst.dk/en\" target=\"_blank\">Danmarks Statistik</a> · <a href=\"https://ens.dk/en\" target=\"_blank\">Danish Energy Agency (Energistyrelsen) 2024</a> · <a href=\"https://www.iea.org/countries/denmark\" target=\"_blank\">IEA Denmark 2024</a> · Denmark total land area ~4.31M ha.",
 "cats": {
  "da": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Landbrugsjord",
    "desc": "Markjord, flerårige afgrøder og græsarealer — Danmark har verdens højeste andel af dyrkbar jord, med ca. 60.000 landbrug der producerer korn, raps, mælk og svinekød",
    "answer": 62.46,
    "color": "#639922",
    "max": 85,
    "step": 0.5,
    "answerHa": 2692026
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Skov",
    "desc": "Driftsskov og naturskov — Danmark var næsten fuldstændig skovryddet i 1800, men et århundrede med plantning har tredoblet skovdækningen; bøg og rødgran dominerer nu Jyllands indre",
    "answer": 15.74,
    "color": "#3B6D11",
    "max": 35,
    "step": 0.5,
    "answerHa": 678394
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Bebyggelse og transport",
    "desc": "Bebyggede arealer, veje, jernbane, industri og lufthavne — Københavns metro og cykelinfrastruktur er verdensberømt, men de fleste danskere bor i lavtæt forstadsbebyggelse i Jylland",
    "answer": 12.95,
    "color": "#73726c",
    "max": 25,
    "step": 0.5,
    "answerHa": 558145
   },
   {
    "id": "nat",
    "icon": "🌿",
    "name": "Naturarealer",
    "desc": "Hede, mose, klitter, strande og andet åbent land — den blæsende jyske hede var engang udbredt; nu er beskyttede rester mål for vandrere og naturelskere",
    "answer": 5.98,
    "color": "#888780",
    "max": 20,
    "step": 0.5,
    "answerHa": 257738
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Vandarealer",
    "desc": "Søer, åer, vådområder, fjorde og kystlaguner — Danmarks kystlinje er en af Europas længste i forhold til landarealet",
    "answer": 2.49,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 107319
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golfbaner",
    "desc": "Danmark har ca. 180 golfklubber, de fleste i Jylland og langs øernes kyster — golf spilles her i en udstrækning, der ville overraske mange udefrakommende",
    "answer": 0.24,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 10344
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Sol+batteri (nuværende)",
    "desc": "Storskalasol med batterilager, nettilsluttet (~2,4 GW storskalasol ud af 4 GW i alt i 2024 — resten er taganlæg)",
    "answer": 0.14,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 6034,
    "isSolar": true,
    "solarNote": "Tip: 2,4 GW storskalasol ud af 4 GW i alt — størstedelen af Danmarks solenergi sidder på tage"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Sol+batteri til 100% el",
    "desc": "Areal til storskalasol+batteri for at drive Danmarks samlede elnet 24/7 (~35 TWh/år) — Danmark ligger på ~56°N med betydeligt skydække og kræver langt mere jord pr. TWh end solrigere sydlige lande",
    "answer": 0.77,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 33187,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Arable land, permanent crops and pasture — Denmark has the highest share of arable land of any country in the world, with roughly 60,000 farms producing cereals, rapeseed, dairy and pork",
    "answer": 62.46,
    "color": "#639922",
    "max": 85,
    "step": 0.5,
    "answerHa": 2692026
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Managed woodland and nature forests — Denmark was almost entirely deforested by 1800, but a century of planting has tripled forest cover; beech and spruce now dominate Jutland's interior",
    "answer": 15.74,
    "color": "#3B6D11",
    "max": 35,
    "step": 0.5,
    "answerHa": 678394
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Settlement & transport",
    "desc": "Built-up areas, roads, rail, industry and airports — Copenhagen's metro and cycling infrastructure are world-famous, but most Danes live in low-density Jutland suburbs",
    "answer": 12.95,
    "color": "#73726c",
    "max": 25,
    "step": 0.5,
    "answerHa": 558145
   },
   {
    "id": "nat",
    "icon": "🌿",
    "name": "Natural areas",
    "desc": "Heathland, bogs, dunes, beaches and other open land — the windswept Jutland heathland was once vast; now protected remnants draw hikers and ecologists alike",
    "answer": 5.98,
    "color": "#888780",
    "max": 20,
    "step": 0.5,
    "answerHa": 257738
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Lakes, rivers, wetlands, fjords and coastal inlets — Denmark's intricate coastline is one of the longest in Europe relative to land area",
    "answer": 2.49,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 107319
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Denmark has around 180 golf clubs, most in Jutland and along the island coastlines — golf is played here at a rate that would surprise many outsiders",
    "answer": 0.24,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 10344
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (~2.4 GW utility-scale out of 4 GW total in 2024 — the remainder is rooftop)",
    "answer": 0.14,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 6034,
    "isSolar": true,
    "solarNote": "Hint: 2.4 GW utility-scale out of 4 GW total — most of Denmark's solar is on rooftops"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Denmark's entire grid 24/7 (~35 TWh/yr) — Denmark sits at ~56°N with considerable cloud cover, requiring substantially more land per TWh than sunnier southern nations",
    "answer": 0.77,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 33187,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "da": {
   "h1": "<img src=\"https://flagcdn.com/32x24/dk.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Hvordan bruges Danmarks jord egentlig?",
   "subtitle": "Inspireret af <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clarks YouTube-kort</a> (på engelsk). Gæt den procentdel af det danske areal for hver kategori — reglementer er begrænset til 100 % i alt. Danmark er en af verdens mest intensivt dyrkede nationer — og alligevel en global pioner inden for vindenergi, der producerer mere end halvdelen af sin elektricitet fra vindmøller.",
   "disclaimer": "Solar+batteri-tallene er et tankeeksperiment udarbejdet med hjælp fra en AI og er ikke en politisk anbefaling. Alle solar+batteri-tal henviser til storskalasol, nettilsluttede anlæg. Danmark nåede 4 GW samlet solkapacitet i slutningen af 2024 — det meste er taganlæg; storskalasol på terræn udgør ca. 2,4 GW. Danmarks høje breddegrad (~56°N) og hyppige skydække betyder, at der kræves mere jord pr. TWh end i Sydeuropa; i praksis leverer vindkraft allerede ~55 % af dansk el, og havvind forventes at gøre det tunge løft. Arealanvendelsesdata fra Eurostat LUCAS 2022 og Danmarks Statistik.",
   "noteLabel": "Bemærk",
   "contextLabel": "Landekontekst",
   "countryNote": "Danmark nåede en samlet solcellekapacitet på 4 GW ved udgangen af 2024 — størstedelen er tagmonteret; den store, jordbaserede solenergi udgør cirka 2,4 GW. Danmarks høje breddegrad (~56°N) og hyppige skydække betyder, at der kræves mere areal pr. TWh end i Sydeuropa; i praksis leverer vindkraft allerede omkring 55% af dansk elektricitet, og havvind forventes at yde det største bidrag fremover. Arealanvendelsesdata er hentet fra Eurostats LUCAS-undersøgelse 2022 og Danmarks Statistik.",
   "submit": "Indsend alle svar",
   "play_again": "Spil igen",
   "score": "Point",
   "land_used": "Areal brugt",
   "remaining": "Resterende",
   "map_guess": "Dine gæt — proportionel arealfigur (opdateres når du glider)",
   "map_answer": "Faktisk arealanvendelse i Danmark — proportionel arealfigur",
   "allocated": "/ 100 % fordelt",
   "reveal": "Afsløres efter indsendelse.",
   "out_of": "nøjagtigheds-score",
   "sol100_reveal": "Danmarks overskyede, nordlige klima kræver ca. 950 ha/TWh — mere end Tyskland (830 ha/TWh) eller UK. Lagringsoverdimensionering ca. fordobler arealkravet i forhold til solceller alene. I virkeligheden leverer vind allerede ~55 % af dansk el; Danmark er langt bedre egnet til at eksportere vind end sol.",
   "grades": [
    [
     86,
     "🌬️ Danmark-ekspert — du kender dette intensivt dyrkede ørige i bemærkelsesværdig detalje!"
    ],
    [
     64,
     "🌾 Meget stærkt — skarp fornemmelse for, hvor landbrugspræget Danmark virkelig er."
    ],
    [
     43,
     "🚲 Ikke dårligt! Danmark er grønnere end dets cykelbyer antyder — over 78 % er agerland eller skov."
    ],
    [
     21,
     "🌊 Danmarks maritime image skjuler dets status som en af Europas store landbrugsnationer."
    ],
    [
     0,
     "🤔 Overraskende? Over 62 % af Danmark er agerland — en af de højeste andele i verden."
    ]
   ],
   "btn_label": "English",
   "country_label": "Danmark",
   "circle_label": "Nødvendigt areal",
   "zoomed": "currentLang === 'local' ? 'Forstørret visning' : 'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/dk.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Denmark's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Danish land for each category — sliders are capped at 100% total. Denmark is one of the world's most intensively farmed nations — yet it is also a global pioneer in wind energy, generating more than half its electricity from turbines.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Denmark reached 4 GW of total solar capacity at the end of 2024 — most is rooftop; utility-scale ground-mounted is roughly 2.4 GW. Denmark's high latitude (~56°N) and frequent cloud cover mean more land is needed per TWh than in southern Europe; in practice, wind power already supplies ~55% of Danish electricity and offshore wind is expected to do most of the heavy lifting. Land use figures sourced from Eurostat LUCAS survey 2022 and Danmarks Statistik.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Denmark reached 4 GW of total solar capacity at the end of 2024 — most is rooftop; utility-scale ground-mounted is roughly 2.4 GW. Denmark's high latitude (~56°N) and frequent cloud cover mean more land is needed per TWh than in southern Europe; in practice, wind power already supplies ~55% of Danish electricity and offshore wind is expected to do most of the heavy lifting. Land use figures sourced from Eurostat LUCAS survey 2022 and Danmarks Statistik.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Danish land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Denmark's cloudy, high-latitude climate requires roughly 950 ha/TWh — more than Germany (830 ha/TWh) or the UK. Storage overcapacity roughly doubles the land needed vs panels alone. In reality, wind already supplies ~55% of Danish electricity; Denmark is far better suited to exporting wind than solar.",
   "grades": [
    [
     86,
     "🌬️ Danish expert — you know this intensely farmed archipelago in remarkable detail!"
    ],
    [
     64,
     "🌾 Very strong — sharp sense of just how agricultural Denmark really is."
    ],
    [
     43,
     "🚲 Not bad! Denmark is greener than its cycling cities suggest — over 78% is farmland or forest."
    ],
    [
     21,
     "🌊 Denmark's maritime image hides its status as one of Europe's great farming nations."
    ],
    [
     0,
     "🤔 Surprising? Over 62% of Denmark is farmland — among the highest shares of any country on Earth."
    ]
   ],
   "btn_label": "Dansk",
   "country_label": "Denmark",
   "circle_label": "Land area needed",
   "zoomed": "currentLang === 'local' ? 'Forstørret visning' : 'Zoomed view'"
  }
 },
 "world": {
  "da": {
   "head": "🌍 Hvad hvis Danmark alene skulle forsyne verden med strøm?",
   "fit": "At dække hele <strong>det globale elforbrug</strong> (~31.000 TWh/år) med Danmarks egne solforhold ville kræve ca. <strong>{haM} hektar</strong> — <strong>{pct}%</strong> af Danmarks landareal, vist nedenfor som en cirkel med tilsvarende areal.",
   "overflow": "At dække hele <strong>det globale elforbrug</strong> (~31.000 TWh/år) med Danmarks egne solforhold ville kræve ca. <strong>{haM} hektar</strong> — <strong>{mult}× hele landet</strong>. Cirklen nedenfor viser dette areal centreret på Danmark — den rækker langt ud over Danmarks grænser og illustrerer, hvor meget breddegrad og skydække betyder for solgeografi.",
   "foot": "Den stiplede cirkel er illustrativ — skaleret til det korrekte areal, men ikke et faktisk forslag. Den overlapper eksisterende grænser udelukkende for at give en fornemmelse af størrelse."
  },
  "en": {
   "head": "🌍 What if Denmark alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Denmark's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Denmark's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Denmark's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Denmark — it spills far beyond Denmark's own borders, illustrating how much latitude and cloud cover matter for solar geography.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "da": "millioner",
   "en": "million"
  }
 }
};
