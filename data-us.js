window.LANDGAME=window.LANDGAME||{};
LANDGAME.us = {
 "title": "🇺🇸 How is US land actually used? — Guessing Game",
 "code": "us",
 "iso": "840",
 "alpha2": "us",
 "lon": -98,
 "lat": 39,
 "ha": 915000000,
 "sol100Ha": 2408000,
 "demandTwh": 4300,
 "accent": "#639922",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2017–2024</strong> · USDA ERS · EIA · NREL",
 "sources": "Sources: <a href=\"https://www.ers.usda.gov/publications/109970\" target=\"_blank\">USDA ERS Major Uses of Land in the US, 2017 (EIB-275)</a> · <a href=\"https://www.eia.gov/energyexplained/solar/\" target=\"_blank\">EIA Solar Energy Data 2024</a> · <a href=\"https://www.nrel.gov/\" target=\"_blank\">NREL</a> · US total land area ~915M ha.",
 "cats": {
  "en": [
   {
    "id": "grass",
    "icon": "🌿",
    "name": "Grassland & rangeland",
    "desc": "Pasture, range, and grazing land across the Great Plains and West",
    "answer": 28.99,
    "color": "#8db84a",
    "max": 50,
    "step": 0.5,
    "answerHa": 265258500
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Forest-use land, timberland, and grazed forestland",
    "answer": 27.99,
    "color": "#3B6D11",
    "max": 50,
    "step": 0.5,
    "answerHa": 256108500
   },
   {
    "id": "crop",
    "icon": "🌾",
    "name": "Cropland",
    "desc": "Harvested crops, idle cropland, and cropland pasture",
    "answer": 16.99,
    "color": "#639922",
    "max": 35,
    "step": 0.5,
    "answerHa": 155458500
   },
   {
    "id": "spec",
    "icon": "🏞️",
    "name": "Parks & special uses",
    "desc": "National parks, wildlife refuges, wilderness areas, military land",
    "answer": 13.99,
    "color": "#5DCAA5",
    "max": 30,
    "step": 0.5,
    "answerHa": 128008500
   },
   {
    "id": "misc",
    "icon": "🌊",
    "name": "Miscellaneous",
    "desc": "Wetlands, tundra, bare rock, unproductive woodlands, desert",
    "answer": 8.87,
    "color": "#888780",
    "max": 20,
    "step": 0.5,
    "answerHa": 81160500
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "The US has ~16,150 golf courses — more than any other country, almost as many as the rest of the world combined",
    "answer": 0.13,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 1189500
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban areas",
    "desc": "Cities, suburbs, roads, airports, built infrastructure",
    "answer": 3,
    "color": "#73726c",
    "max": 15,
    "step": 0.5,
    "answerHa": 27450000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (end 2024, ~121 GW)",
    "answer": 0.05,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.001,
    "answerHa": 457500,
    "isSolar": true,
    "solarNote": "Hint: utility-scale grid-connected only — the US is huge"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power the entire US national grid 24/7 (~4,300 TWh/yr) — the US has excellent solar resources, especially across the Southwest",
    "answer": 0.26,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 2379000,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/us.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is US land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of US land for each category — sliders are capped at 100% total. Submit to see how you did and reveal the proportional area map.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "The US has exceptional diversity of renewable resources — wind across the Great Plains, hydro in the Pacific Northwest, geothermal in the West, and offshore wind on both coasts — and a realistic clean energy transition will draw on all of them. Land use figures are approximate and sourced from official statistics; always consult primary sources before drawing conclusions.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "undefined",
   "out_of": "accuracy score",
   "map_answer": "Actual US land use — proportional area map",
   "grades": [
    [
     72,
     "🏆 Land use expert — you really know your continent!"
    ],
    [
     54,
     "🌿 Very strong — sharp sense of the American landscape."
    ],
    [
     35,
     "🏘️ Not bad! Most people overestimate how built-up the US is."
    ],
    [
     16,
     "🌾 The US is far greener and wilder than it might seem."
    ],
    [
     0,
     "🤔 Surprising, right? Cities cover only 3% — the US is overwhelmingly rural."
    ]
   ],
   "sol100_reveal": "The US has some of the world's best utility solar conditions (~1,600 kWh/kWp/yr national average, much higher in the Southwest). At 560 ha/TWh, powering the whole country needs just 0.26% of US land. Storage overcapacity roughly doubles the land vs panels alone.",
   "country_label": "US",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if US alone powered the whole world?",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only.",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using US's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of US's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using US's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on US — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability."
  },
  "haStyle": "word",
  "millionWord": {
   "en": "million"
  }
 }
};
