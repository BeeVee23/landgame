window.LANDGAME=window.LANDGAME||{};
LANDGAME.au = {
 "title": "🇦🇺 How is Australian land actually used? — Guessing Game",
 "code": "au",
 "iso": "036",
 "alpha2": "au",
 "lon": 134,
 "lat": -25,
 "ha": 769600000,
 "sol100Ha": 160000,
 "demandTwh": 260,
 "accent": "#639922",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2020–21</strong> · ABARES · Clean Energy Council · IEA",
 "sources": "Sources: <a href=\"https://www.agriculture.gov.au/abares/aclump/land-use/land-use-of-australia-2010-11-to-2020-21\" target=\"_blank\">ABARES Land Use of Australia 2020–21 (2024)</a> · <a href=\"https://cleanenergycouncil.org.au/news-resources/clean-energy-australia-report-2025\" target=\"_blank\">Clean Energy Council 2024</a> · <a href=\"https://www.iea.org/\" target=\"_blank\">IEA</a> · Australian total land area ~769.6M ha.",
 "cats": {
  "en": [
   {
    "id": "graze",
    "icon": "🐄",
    "name": "Grazing — native vegetation",
    "desc": "Livestock grazing on unmodified native pasture — the dominant land use",
    "answer": 48,
    "color": "#c9a85c",
    "max": 65,
    "step": 0.5,
    "answerHa": 369408000
   },
   {
    "id": "prot",
    "icon": "🌿",
    "name": "Protected & minimal use",
    "desc": "Nature conservation, managed resource protection, and minimal-use land",
    "answer": 33.7,
    "color": "#5DCAA5",
    "max": 50,
    "step": 0.5,
    "answerHa": 259355200
   },
   {
    "id": "modgrz",
    "icon": "🐑",
    "name": "Grazing — modified pastures",
    "desc": "Livestock grazing on sown or improved pasture",
    "answer": 6.86,
    "color": "#a8c46e",
    "max": 20,
    "step": 0.5,
    "answerHa": 52794560
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water",
    "desc": "Rivers, lakes, reservoirs, wetlands and coastal waters",
    "answer": 3.88,
    "color": "#378ADD",
    "max": 10,
    "step": 0.5,
    "answerHa": 29860480
   },
   {
    "id": "crop",
    "icon": "🌾",
    "name": "Dryland cropping",
    "desc": "Wheat, barley, canola and other broadacre crops without irrigation",
    "answer": 5.21,
    "color": "#639922",
    "max": 15,
    "step": 0.5,
    "answerHa": 40096160
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forestry",
    "desc": "Native production forests and commercial timber plantations",
    "answer": 1.55,
    "color": "#3B6D11",
    "max": 8,
    "step": 0.5,
    "answerHa": 11928800
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Australia has ~1,500 golf courses — one of the highest counts per capita in the world",
    "answer": 0.02,
    "color": "#5DCAA5",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 153920
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & intensive uses",
    "desc": "Cities, towns, mining, industry, irrigated agriculture",
    "answer": 0.78,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 6002880
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (2024, ~13.4 GW)",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.0005,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Hint: utility-scale grid-connected only — Australia is huge and very sunny"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Australia's entire national grid 24/7 — the smallest sol100 in the game thanks to exceptional solar irradiance",
    "answer": 0.021,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.001,
    "answerHa": 161616,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/au.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Australian land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Australian land for each category — sliders are capped at 100% total. Submit to see how you did and reveal the proportional area map.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Australia's solar resource is genuinely exceptional — more than any other country in this game — and solar+battery is widely considered the backbone of Australia's energy future. Wind (particularly in southern states) and pumped hydro (Snowy 2.0) will also play important roles. Land use figures are approximate and sourced from official statistics.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "undefined",
   "out_of": "accuracy score",
   "map_answer": "Actual Australian land use — proportional area map",
   "grades": [
    [
     72,
     "🏆 Outback expert — you know your continent!"
    ],
    [
     53,
     "🌿 Very strong — sharp sense of the Australian landscape."
    ],
    [
     34,
     "🦘 Not bad! Australia surprises most people."
    ],
    [
     17,
     "🏜️ The vast interior is hard to picture from the cities."
    ],
    [
     0,
     "🤔 Surprising? Over 70% of Australia is used for grazing or conservation."
    ]
   ],
   "sol100_reveal": "storage overcapacity for nights and cloudy days roughly doubles the land needed vs panels alone. Australia's exceptional solar resource means this is the smallest sol100 figure in the game.",
   "country_label": "Australia",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Australia alone powered the whole world?",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only.",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Australia's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Australia's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Australia's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Australia — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability."
  },
  "haStyle": "word",
  "millionWord": {
   "en": "million"
  }
 }
};
