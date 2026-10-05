window.LANDGAME=window.LANDGAME||{};
LANDGAME.uk = {
 "title": "🇬🇧 How is UK land actually used? - Guessing Game",
 "code": "uk",
 "iso": "826",
 "alpha2": "gb",
 "lon": -2.5,
 "lat": 54,
 "ha": 24300000,
 "sol100Ha": 297000,
 "demandTwh": 330,
 "accent": "#639922",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · DLUHC · DESNZ · Lancaster Univ.",
 "sources": "Sources: <a href=\"https://www.gov.uk/government/collections/land-use-change-statistics\" target=\"_blank\">MHCLG Land Use Change Statistics</a> · <a href=\"https://www.gov.uk/government/statistics/solar-photovoltaics-deployment\" target=\"_blank\">DESNZ Solar PV Deployment 2024</a> · <a href=\"https://commonslibrary.parliament.uk/research-briefings/cbp-7434/\" target=\"_blank\">House of Commons Library: Planning for solar farms</a> · <a href=\"https://www.gov.uk/government/organisations/ministry-of-housing-communities-local-government\" target=\"_blank\">DLUHC / MHCLG</a> · <a href=\"https://www.gov.uk/government/organisations/department-for-energy-security-and-net-zero\" target=\"_blank\">DESNZ</a> · <a href=\"https://www.lancaster.ac.uk/\" target=\"_blank\">Lancaster University</a> · UK total land area ~24.3M ha.",
 "cats": {
  "en": [
   {
    "id": "farm",
    "icon": "🌾",
    "name": "Farmland",
    "desc": "Fields, orchards, crops, pasture",
    "answer": 48.32,
    "color": "#639922",
    "max": 75,
    "step": 0.5,
    "answerHa": 11741760
   },
   {
    "id": "nat",
    "icon": "🏔️",
    "name": "Natural & semi-natural",
    "desc": "Moors, heath, bogs, rough grassland",
    "answer": 29.34,
    "color": "#888780",
    "max": 50,
    "step": 0.5,
    "answerHa": 7129620
   },
   {
    "id": "wood",
    "icon": "🌲",
    "name": "Woodland & forest",
    "desc": "Managed forests, plantations",
    "answer": 11.22,
    "color": "#3B6D11",
    "max": 30,
    "step": 0.5,
    "answerHa": 2726460
   },
   {
    "id": "built",
    "icon": "🏗️",
    "name": "Built on",
    "desc": "Roads, buildings, airports, quarries",
    "answer": 5.18,
    "color": "#73726c",
    "max": 20,
    "step": 0.5,
    "answerHa": 1258740
   },
   {
    "id": "grn",
    "icon": "🌳",
    "name": "Parks & gardens",
    "desc": "Public parks and private residential gardens",
    "answer": 3.02,
    "color": "#9FE1CB",
    "max": 12,
    "step": 0.5,
    "answerHa": 733860
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Golf courses across the UK (~2,500 courses)",
    "answer": 1.55,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.5,
    "answerHa": 376650
   },
   {
    "id": "h2o",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Rivers, lakes, reservoirs, canals",
    "answer": 1.29,
    "color": "#378ADD",
    "max": 8,
    "step": 0.5,
    "answerHa": 313470
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (Sep 2024)",
    "answer": 0.07,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 17010,
    "isSolar": true,
    "solarNote": "Hint: surprisingly tiny"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power the entire UK national grid 24/7 (~330 TWh/yr) - the UK's overcast climate is comparable to Germany's, requiring similar land per TWh",
    "answer": 1.22,
    "color": "#BA7517",
    "max": 5,
    "step": 0.05,
    "answerHa": 296460,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/gb.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is UK land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of UK land for each category - sliders are capped at 100% total. Submit to see how you did and reveal the proportional area map.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. Real-world energy planning requires diverse renewable sources - the UK's wind resource (onshore and offshore) is among the best in Europe and will likely do far more heavy lifting than solar in any credible net-zero scenario.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Land use figures are approximate and sourced from official statistics; always consult primary sources before drawing conclusions.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "undefined",
   "out_of": "accuracy score",
   "map_answer": "Actual UK land use - proportional area map",
   "grades": [
    [
     85,
     "🏆 Land use expert - you know your countryside!"
    ],
    [
     65,
     "🌿 Very strong - sharp sense of the UK landscape."
    ],
    [
     44,
     "🏘️ Not bad! Most people overestimate how built-up the UK is."
    ],
    [
     22,
     "🌫️ The UK is greener than it feels - 94% is NOT built on."
    ],
    [
     0,
     "🤔 Surprising, right? The UK is overwhelmingly rural from the air."
    ]
   ],
   "sol100_reveal": "The UK averages ~1,000 kWh/kWp/yr - similar to Germany given comparable cloud cover and latitude. At 900 ha/TWh, 1.22% of UK land is needed. Storage overcapacity roughly doubles the land vs panels alone.",
   "country_label": "UK",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if UK alone powered the whole world?",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only.",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using UK's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{pct}%</strong> of UK's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using UK's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{mult}× the entire country</strong>. The circle below shows that area centred on UK - it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability."
  },
  "haStyle": "word",
  "millionWord": {
   "en": "million"
  }
 }
};
