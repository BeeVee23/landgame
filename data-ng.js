window.LANDGAME=window.LANDGAME||{};
LANDGAME.ng = {
 "title": "🇳🇬 How is Nigeria's land actually used? - Guessing Game",
 "code": "ng",
 "iso": "566",
 "alpha2": "ng",
 "lon": 8,
 "lat": 9.5,
 "ha": 91077000,
 "sol100Ha": 17000,
 "demandTwh": 32,
 "accent": "#639922",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · FAO FAOSTAT · World Bank · IRENA · Nigeria Energy Transition Plan",
 "sources": "Sources: <a href=\"https://www.fao.org/faostat/en/#data/RL\" target=\"_blank\">FAO FAOSTAT Land Use 2022</a> · <a href=\"https://data.worldbank.org/country/nigeria\" target=\"_blank\">World Bank Nigeria</a> · <a href=\"https://www.irena.org/Countries/Nigeria\" target=\"_blank\">IRENA Nigeria 2024</a> · <a href=\"https://www.energytransition.gov.ng/\" target=\"_blank\">Nigeria Energy Transition Plan 2022</a> · Nigeria total land area ~91.1M ha (910,770 km²).",
 "cats": {
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Farmland & crops",
    "desc": "Cropland and permanent crops including cassava, maize, yam, sorghum, oil palm and cocoa - Nigeria is a top-10 global producer of several staple crops, yet most farms are smallholdings of under 2 hectares with yields well below potential",
    "answer": 46,
    "color": "#639922",
    "max": 70,
    "step": 0.5,
    "answerHa": 41896000
   },
   {
    "id": "savanna",
    "icon": "🌿",
    "name": "Savanna, grassland & pasture",
    "desc": "The Guinea savanna belt across central Nigeria and the drier Sahel scrubland approaching Lake Chad in the far north - transitioning from dense woodland savanna in the south to near-desert conditions at the northern border",
    "answer": 25,
    "color": "#b8a07a",
    "max": 45,
    "step": 0.5,
    "answerHa": 22770000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & woodland",
    "desc": "Tropical rainforest in the south (Cross River, Ondo), mangroves in the Niger Delta, and drier woodland further north. Nigeria has one of the world's highest deforestation rates - forest cover has halved since 1990, driven by fuel wood demand, farming expansion and logging",
    "answer": 22,
    "color": "#3B6D11",
    "max": 40,
    "step": 0.5,
    "answerHa": 20037000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "The Niger-Benue confluence, Lake Chad (Nigeria holds a shrinking share - the lake has lost 90% of its 1960s area), the Niger Delta wetlands, and Nigeria's many rivers and reservoirs",
    "answer": 3,
    "color": "#378ADD",
    "max": 10,
    "step": 0.1,
    "answerHa": 2732000
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Lagos (~16 million), Kano, Ibadan, Abuja, Port Harcourt and hundreds of other cities - Nigeria is Africa's most populous nation at 220 million people, with one of the continent's fastest-growing urban populations",
    "answer": 4,
    "color": "#73726c",
    "max": 12,
    "step": 0.1,
    "answerHa": 3643000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 25 golf clubs - Ikoyi Club (Lagos), Abuja Golf Club, RCCG City of God, and courses in Kano, Port Harcourt and Kaduna. Colonial-era clubs now serve Nigeria's business elite. Total area is actually larger than all utility-scale solar farms combined",
    "answer": 0.0018,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.0005,
    "answerHa": 1625,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected utility-scale solar PV - Nigeria had only ~385 MWp total solar installed by end of 2024 (IRENA), much of it off-grid. Nigeria has an estimated 210 GW of solar potential but has deployed less than 0.2% of it",
    "answer": 0.0011,
    "color": "#EF9F27",
    "max": 0.05,
    "step": 0.0005,
    "answerHa": 1000,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: Nigeria had ~385 MWp total solar by end of 2024 (IRENA) - less than the UK adds in a single month. Northern states like Sokoto receive ~7.5 peak sun hours per day, among the best solar resources on Earth"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Nigeria's entire on-grid electricity supply 24/7 (~32 TWh/yr) - using the exceptional solar irradiance of northern Nigeria",
    "answer": 0.019,
    "color": "#BA7517",
    "max": 1,
    "step": 0.001,
    "answerHa": 17000,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Nigeria's north receives ~1,700 kWh/kWp/yr nationally, with Sokoto and Borno states exceeding 1,900. At 531 ha/TWh, powering Nigeria's on-grid supply needs just 0.019% of its land. The paradox: Nigeria has 210 GW of solar potential and some of the world's best solar resources, yet 80–90 million Nigerians lack reliable grid electricity. Total grid generation (~32 TWh) is less than Norway's, despite 220 million people. Nigeria targets 30 GW of renewable energy by 2030"
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ng.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Nigeria's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Nigerian land for each category - sliders are capped at 100% total. Nigeria is Africa's most populous nation and largest oil producer - yet generates less grid electricity than Norway, and has 80+ million people without reliable power. Note: this game is in English - Nigeria's official language and lingua franca across its 250+ ethnic groups - rather than any single indigenous language such as Hausa, Yoruba or Igbo, none of which represents the nation as a whole.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Nigeria's electricity situation is complex: official grid generation is ~32 TWh/yr, but total electricity consumption including off-grid diesel generators may be closer to 110 TWh/yr (IRENA 2015 estimate extrapolated). The sol100 figure uses grid electricity only. Nigeria has ~385 MWp of total solar installed (IRENA 2024), mostly off-grid and rooftop. Land use figures from FAO FAOSTAT 2022 and World Bank. Solar resource from IRENA and Nigeria Energy Transition Plan 2022.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "map_answer": "Actual Nigerian land use - proportional area map",
   "grades": [
    [
     86,
     "🌟 Expert! You know Nigeria's intricate land balance with impressive precision."
    ],
    [
     64,
     "🌾 Very strong - solid grasp of Nigeria's agricultural and forest profile."
    ],
    [
     43,
     "⚡ Not bad! Most people underestimate how electricity-poor Nigeria is despite its vast oil wealth."
    ],
    [
     21,
     "🛢️ Did you know? Nigeria is Africa's largest oil producer yet generates less grid electricity than Norway."
    ],
    [
     0,
     "🤔 Surprising? 220 million people, world-class solar resources - yet 80+ million Nigerians lack reliable grid electricity."
    ]
   ],
   "sol100_reveal": "Nigeria's north receives ~1,700 kWh/kWp/yr nationally, with Sokoto and Borno states exceeding 1,900. At 531 ha/TWh, powering Nigeria's on-grid supply needs just 0.019% of its land. The paradox: Nigeria has 210 GW of solar potential and some of the world's best solar resources, yet 80–90 million Nigerians lack reliable grid electricity. Total grid generation (~32 TWh) is less than Norway's, despite 220 million people. Nigeria targets 30 GW of renewable energy by 2030",
   "country_label": "Nigeria",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Nigeria alone powered the whole world?",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting. Given Nigeria's exceptional solar irradiance in the north, the thought experiment is physically sound, though grid infrastructure and storage investment at this scale would be enormous.",
   "stat2": "The area needed for world solar is roughly what Nigeria already uses for cities and roads. Nigeria's northern states - Sokoto, Katsina, Borno - receive up to 7.5 peak sun hours per day, among the finest solar resources on Earth. The central paradox: a country with 210 GW of solar potential and a land area that could theoretically host world solar currently generates less grid electricity per person than almost any other large economy.",
   "fit": "At Nigeria's national solar conditions (~531 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - just <strong>{pct}% of Nigeria's land area</strong>, shown below as a circle of equivalent area. That circle fits entirely within Nigeria."
  }
 }
};
