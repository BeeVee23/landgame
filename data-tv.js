window.LANDGAME=window.LANDGAME||{};
LANDGAME.tv = {
 "title": "🇹🇻 How is Tuvalu's land actually used? — Guessing Game",
 "code": "tv",
 "iso": "798",
 "alpha2": "tv",
 "lon": 179.2,
 "lat": -8,
 "ha": 2600,
 "sol100Ha": 7,
 "demandTwh": 0.013,
 "accent": "#378ADD",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · Tuvalu Bureau of Statistics · UNDP Tuvalu Coastal Adaptation Project · IRENA · IPCC AR6",
 "sources": "Sources: <a href=\"https://www.undp.org/pacific/projects/tuvalu-coastal-adaptation-project\" target=\"_blank\">UNDP Tuvalu Coastal Adaptation Project</a> · <a href=\"https://www.irena.org/-/media/Files/IRENA/Agency/Statistics/Statistical_Profiles/Oceania/Tuvalu_Oceania_RE_SP.pdf\" target=\"_blank\">IRENA Tuvalu Renewable Energy Profile</a> · <a href=\"https://en.wikipedia.org/wiki/Climate_change_in_Tuvalu\" target=\"_blank\">Climate Change in Tuvalu — overview</a> · <a href=\"https://www.ipcc.ch/report/ar6/wg2/\" target=\"_blank\">IPCC AR6 WG2</a> · Tuvalu total land area ~2,600 ha (26 km²), one of the four smallest countries on Earth.",
 "cats": {
  "en": [
   {
    "id": "veg",
    "icon": "🌴",
    "name": "Coconut palms & vegetation",
    "desc": "Coconut, breadfruit and pandanus groves that have sustained Tuvaluans for centuries. Rising saltwater is now poisoning root systems from below — trees can look healthy above ground while dying underneath",
    "answer": 46,
    "color": "#639922",
    "max": 65,
    "step": 0.5,
    "answerHa": 1196
   },
   {
    "id": "settle",
    "icon": "🛬",
    "name": "Settlement, roads & runway",
    "desc": "Villages, roads and Funafuti International Airport — whose single runway occupies roughly a fifth of the main islet and doubles as Tuvalu's public gathering space, since there is nowhere else flat enough to build",
    "answer": 27,
    "color": "#73726c",
    "max": 40,
    "step": 0.5,
    "answerHa": 702
   },
   {
    "id": "pulaka",
    "icon": "🥔",
    "name": "Pulaka pits",
    "desc": "Traditional swamp-taro gardens, hand-dug down to the freshwater lens beneath the atoll. Many pits are now too saline to farm — rising seas are poisoning food crops from underground before a single wave ever reaches them",
    "answer": 5,
    "color": "#8a6d4a",
    "max": 15,
    "step": 0.2,
    "answerHa": 130
   },
   {
    "id": "bare",
    "icon": "🏖️",
    "name": "Bare, reclaimed & tidal flat land",
    "desc": "Exposed reef flat plus newly engineered land, including a 7.3-hectare platform built by the Tuvalu Coastal Adaptation Project to stay dry beyond 2100. Unlike a mountainous nation, Tuvalu has no higher ground to retreat to — so it is building its own",
    "answer": 18,
    "color": "#c4b8a0",
    "max": 35,
    "step": 0.5,
    "answerHa": 468
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Freshwater lens & lagoon margin",
    "desc": "The freshwater lens — a thin layer of rainwater floating on denser seawater beneath the atoll — is Tuvalu's only natural groundwater source. Saltwater intrusion is contaminating it, forcing growing reliance on rainwater tanks and desalination",
    "answer": 3.98,
    "color": "#378ADD",
    "max": 10,
    "step": 0.1,
    "answerHa": 103
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar installations (current)",
    "desc": "Rooftop and ground-mounted panels plus the Pacific's first floating solar array, launched on Funafuti's Tafua Pond in 2023 — deliberately sited on water and rooftops to avoid using any of Tuvalu's desperately scarce land",
    "answer": 0.02,
    "color": "#EF9F27",
    "max": 0.3,
    "step": 0.005,
    "answerHa": 1,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: Tuvalu had ~5 MW of solar capacity by 2023 (IRENA) — about 18% of its tiny electricity output — but most of it sits on rooftops or floats on the lagoon, adding almost no new land use at all"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Tuvalu's entire national grid 24/7 (~13 GWh/yr — one of the smallest electricity demands of any country on Earth)",
    "answer": 0.27,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 7,
    "dp": 2,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Tuvalu's near-equatorial sun yields roughly 538 ha/TWh — similar to Nigeria or Egypt. But Tuvalu's total electricity demand is so tiny that 100% solar+battery needs just ~7 hectares — smaller than the airport runway. Despite this, diesel generators still supply much of Tuvalu's power today; the barrier isn't land or sunlight, but the enormous cost of shipping in and maintaining equipment for a nation of 11,000 people spread across nine remote atolls"
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/tv.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Tuvalu's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Tuvalu's land for each category — sliders are capped at 100% total. Tuvalu is one of the smallest and lowest-lying nations on Earth — a total land area of just 26 km², averaging under 2 metres above sea level. For Tuvalu and other low-lying Pacific island nations, encroaching seawater is not an abstract future risk: it is an existential threat to the nation's continued existence.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Tuvalu's total electricity demand (~13 GWh/yr) is minute by world standards — smaller than a single large factory elsewhere. Sea-level projections suggest up to half of the capital, Funafuti, could face regular tidal flooding by 2050, and up to 95% of national land by 2100 without adaptation. In 2023, Tuvalu signed the Falepili Union treaty with Australia, the world's first bilateral climate mobility agreement, and in 2022 declared itself the first 'digital nation', preserving statehood and culture in the metaverse should its physical territory become uninhabitable. Land use figures are approximate, drawing on Tuvalu Bureau of Statistics, UNDP Tuvalu Coastal Adaptation Project reporting, and satellite land-cover estimates. Note: Tuvalu has no golf courses — there simply isn't room.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "map_answer": "Actual Tuvaluan land use — proportional area map",
   "grades": [
    [
     86,
     "🌊 Expert! You know one of the smallest, most vulnerable nations on Earth with remarkable precision."
    ],
    [
     64,
     "🥥 Very strong — sharp grasp of how tightly packed Tuvalu's land really is."
    ],
    [
     43,
     "🛬 Not bad! Most people don't realise the airport runway takes up a fifth of the main island."
    ],
    [
     21,
     "🏝️ Did you know? Tuvalu is one of the four smallest countries on Earth by land area — just 26 km² in total."
    ],
    [
     0,
     "🤔 Surprising? Tuvalu's entire national territory is smaller than most airports — and it is disappearing."
    ]
   ],
   "sol100_reveal": "Tuvalu's near-equatorial sun yields roughly 538 ha/TWh — similar to Nigeria or Egypt. But Tuvalu's total electricity demand is so tiny that 100% solar+battery needs just ~7 hectares — smaller than the airport runway. Despite this, diesel generators still supply much of Tuvalu's power today; the barrier isn't land or sunlight, but the enormous cost of shipping in and maintaining equipment for a nation of 11,000 people spread across nine remote atolls",
   "country_label": "Tuvalu",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Tuvalu alone powered the whole world?",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting. Given Tuvalu's minute size, the circle vastly exceeds the country's borders; this is the point, not an error. Tuvalu's ocean territory (EEZ) is enormous by comparison — 749,790 km², nearly 29,000× its land area — but this doesn't solve the puzzle. Open-ocean floating solar has to survive cyclones, constant wave action and biofouling, none of which are solved problems anywhere in the world today. Offshore wind is more mature technology in general, but Tuvalu's atolls drop into deep water almost immediately offshore, ruling out fixed-bottom turbines, and its wind resource is moderate rather than exceptional. The EEZ's real value to Tuvalu is tuna fishing licence fees, not energy.",
   "stat2": "No other country in this game shows a starker mismatch between land area and global demand. It underlines just how small Tuvalu truly is — a nation of 11,000 people on 26 km² of low-lying atoll, already living with the daily reality of a rising ocean that most of the world only debates in the abstract.",
   "fit": "At Tuvalu's near-equatorial solar conditions (~538 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — a circle over <strong>{mult}&times; the size of Tuvalu's entire national territory</strong>. Put another way: Tuvalu's whole country could fit inside that circle more than {mult} times over."
  }
 }
};
