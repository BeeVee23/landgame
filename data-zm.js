window.LANDGAME=window.LANDGAME||{};
LANDGAME.zm = {
 "title": "🇿🇲 How is Zambia's land actually used? — Guessing Game",
 "code": "zm",
 "iso": "894",
 "alpha2": "zm",
 "lon": 27.8,
 "lat": -13.5,
 "ha": 75261000,
 "sol100Ha": 7926,
 "demandTwh": 15.542,
 "accent": "#639922",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2026</strong> · FAO · Zambia Ministry of Energy · Africa Energy Portal · EIA/statbase.org",
 "sources": "Sources: <a href=\"https://openknowledge.fao.org/server/api/core/bitstreams/fa434a41-5b66-4cb9-9081-95af9bc22b10/content\" target=\"_blank\">FAO Zambia Country Profile</a> · <a href=\"https://www.moe.gov.zm/?page_id=2198\" target=\"_blank\">Zambia Ministry of Energy</a> · <a href=\"https://africa-energy-portal.org/aep/country/zambia\" target=\"_blank\">Africa Energy Portal: Zambia</a> · <a href=\"https://en.wikipedia.org/wiki/Itimpi_Solar_Power_Station\" target=\"_blank\">Itimpi Solar Power Station</a> · <a href=\"https://africacenter.org/spotlight/en-elections-2026/zambia/\" target=\"_blank\">Africa Center: Zambia Elections 2026</a> · <a href=\"https://www.fao.org/faostat/\" target=\"_blank\">FAO</a> · <a href=\"https://www.eia.gov/\" target=\"_blank\">EIA</a> · <a href=\"https://www.statbase.org/\" target=\"_blank\">statbase.org</a> · Zambia total land area ~75.3M ha (752,610 km²).",
 "cats": {
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & woodland",
    "desc": "Miombo woodland covers most of the country — one of Africa's largest and least-known forest biomes, though it is being cleared for charcoal and farmland at over 170,000 hectares a year, among the fastest deforestation rates on the continent",
    "answer": 60,
    "color": "#3B6D11",
    "max": 80,
    "step": 0.5,
    "answerHa": 45156600
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Maize, cassava and tobacco smallholdings plus commercial farms along the 'line of rail' corridor from Livingstone to the Copperbelt — agriculture employs the majority of Zambia's workforce, though it contributes a modest share of GDP next to copper",
    "answer": 20,
    "color": "#639922",
    "max": 40,
    "step": 0.5,
    "answerHa": 15052200
   },
   {
    "id": "other",
    "icon": "🏞️",
    "name": "Other land (plateau, national parks)",
    "desc": "The high central plateau and wildlife-rich savanna of South Luangwa and Kafue National Parks — Zambia's national parks cover roughly 30% of the country, among the highest protected-land shares in Africa",
    "answer": 12.1988,
    "color": "#c4b8a0",
    "max": 30,
    "step": 0.5,
    "answerHa": 9180939
   },
   {
    "id": "wetland",
    "icon": "🌿",
    "name": "Wetlands & dambos",
    "desc": "Seasonally flooded grassy dambos and larger wetland systems like the Bangweulu Swamps and Kafue Flats — these support Zambia's traditional dry-season grazing and fishing and are a defining feature of the country's hydrology",
    "answer": 4.8,
    "color": "#8ba888",
    "max": 10,
    "step": 0.2,
    "answerHa": 3612528
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Lusaka, the Copperbelt towns of Kitwe and Ndola, and the national road network — Zambia is landlocked, so all imports and exports move overland or by rail through neighbouring countries",
    "answer": 1,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 752610
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Lake Kariba — one of the world's largest reservoirs by volume, shared with Zimbabwe — plus Lake Tanganyika's southern tip and the Zambezi, Kafue and Luangwa rivers",
    "answer": 2,
    "color": "#378ADD",
    "max": 5,
    "step": 0.1,
    "answerHa": 1505220
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "A handful of courses, mostly colonial-era clubs in Lusaka and the Copperbelt mining towns — a minor legacy sport tied to the region's mining and expatriate history",
    "answer": 0.001,
    "color": "#5DCAA5",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 753,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected utility solar remains tiny — the Itimpi and Riverside plants near Kitwe (94 MW combined) are Zambia's largest, built specifically to help copper mines cope with hydropower shortages during the 2023-24 drought crisis",
    "answer": 0.0002,
    "color": "#EF9F27",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 151,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: solar supplied only about 1% of Zambia's electricity generation in 2023 (164 GWh) — but that's rapidly changing as mining companies invest directly in solar to escape drought-driven hydropower blackouts"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Zambia's entire national grid 24/7 (~15.5 TWh/yr), using the country's solid tropical/subtropical solar resource",
    "answer": 0.0105,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 7926,
    "dp": 4,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Zambia's solar yield is roughly 510 ha/TWh, similar to Kenya or Nigeria. At that rate, powering the entire national grid would need just 0.011% of Zambia's land — a rounding error next to the 60% currently under forest. The barrier isn't land, sunlight, or even money in any absolute sense: it's that Zambia's power sector has spent decades built entirely around one resource (Lake Kariba's water level), which climate change is making dangerously unreliable"
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/zm.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Zambia's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Zambian land for each category — sliders are capped at 100% total. Zambia has essentially no oil — its resource wealth is copper and cobalt, critical to the global energy transition — yet its own electricity grid, 85% dependent on a single drought-exposed lake, has faced repeated multi-year blackout crises.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. Land use figures from FAO and national forestry assessments; electricity figures from Zambia's Ministry of Energy, the Africa Energy Portal, and EIA data via statbase.org, 2023–2024.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Zambia holds Africa's second-largest copper reserves and, together with the DRC, an estimated 70% of the minerals needed globally for battery and EV production — but it has essentially no oil, importing 100% of its petroleum. President Hakainde Hichilema, elected in 2021 on a platform of economic reform after Zambia's 2020 sovereign debt default, seeks re-election on August 13, 2026; he is widely favoured to win, citing debt stabilisation and a new free-education policy that returned 2.5 million children to school, though some observers have raised concerns about the fairness of the electoral playing field. The deeper story here is energy: with 85% of electricity from hydropower, the catastrophic 2023-24 drought (Lake Kariba fell below 3% capacity) forced blackouts of up to 21 hours a day and cut mining output nationwide — triggering a genuine solar investment boom as mining companies now build their own solar capacity to de-risk from an increasingly unreliable single water source.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "map_answer": "Actual Zambian land use — proportional area map",
   "grades": [
    [
     86,
     "🇿🇲 Expert! You know Zambia's land balance with impressive precision."
    ],
    [
     64,
     "🌲 Very strong — sharp grasp of just how much miombo woodland covers this country."
    ],
    [
     43,
     "💧 Not bad! Most people don't realise how completely Zambia depends on a single lake for power."
    ],
    [
     21,
     "🦁 Did you know? Zambia's national parks cover roughly 30% of the country."
    ],
    [
     0,
     "🤔 Surprising? Zambia has no meaningful oil reserves at all — its resource wealth is copper and cobalt, not fossil fuels."
    ]
   ],
   "sol100_reveal": "Zambia's solar yield is roughly 510 ha/TWh, similar to Kenya or Nigeria. At that rate, powering the entire national grid would need just 0.011% of Zambia's land — a rounding error next to the 60% currently under forest. The barrier isn't land, sunlight, or even money in any absolute sense: it's that Zambia's power sector has spent decades built entirely around one resource (Lake Kariba's water level), which climate change is making dangerously unreliable",
   "country_label": "Zambia",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Zambia alone powered the whole world?",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting.",
   "stat2": "Zambia's decent tropical sunshine and large land area keep this thought experiment physically reasonable. The deeper point is the contrast with reality: Zambia's own tiny electricity grid regularly goes dark for lack of capacity, not for lack of land or sun — the missing ingredient has been investment, not physics.",
   "fit": "At Zambia's solar conditions (~510 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — <strong>{pct}% of Zambia's land area</strong>, shown below as a circle of equivalent area. That circle fits comfortably within Zambia's own borders."
  }
 }
};
