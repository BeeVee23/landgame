window.LANDGAME=window.LANDGAME||{};
LANDGAME.is = {
 "title": "🇮🇸 How is Iceland's land actually used? - Guessing Game",
 "code": "is",
 "iso": "352",
 "alpha2": "is",
 "lon": -19,
 "lat": 65,
 "ha": 10300000,
 "sol100Ha": 30360,
 "demandTwh": 20.24,
 "accent": "#b0cce8",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2018–2026</strong> · CIA World Factbook · Icelandic Government · Landsvirkjun · Statistics Iceland",
 "sources": "Sources: <a href=\"https://www.indexmundi.com/iceland/land_use.html\" target=\"_blank\">CIA World Factbook: Iceland Land Use</a> · <a href=\"https://government.is/topics/business-and-industry/energy/\" target=\"_blank\">Government of Iceland: Energy</a> · <a href=\"https://en.wikipedia.org/wiki/Energy_in_Iceland\" target=\"_blank\">Energy in Iceland</a> · <a href=\"https://guidetoiceland.is/best-of-iceland/the-ultimate-guide-to-golf-in-iceland\" target=\"_blank\">Golf in Iceland</a> · <a href=\"https://www.cia.gov/the-world-factbook/\" target=\"_blank\">CIA World Factbook</a> · <a href=\"https://www.landsvirkjun.com/\" target=\"_blank\">Landsvirkjun</a> · <a href=\"https://statice.is/\" target=\"_blank\">Statistics Iceland</a> · Iceland total land area ~10.3M ha (103,000 km²).",
 "cats": {
  "en": [
   {
    "id": "barren",
    "icon": "🌋",
    "name": "Barren lava, ash & highland desert",
    "desc": "The uninhabited central highlands - vast fields of basaltic lava and volcanic ash with less than 5-10% plant cover, shaped by more than 30 active volcanic systems. Less than a quarter of Iceland is inhabited at all",
    "answer": 61.7829,
    "color": "#8a7860",
    "max": 80,
    "step": 0.5,
    "answerHa": 6363639
   },
   {
    "id": "agri",
    "icon": "🐑",
    "name": "Agricultural land",
    "desc": "Almost entirely permanent pasture for sheep and cattle - Iceland is self-sufficient in meat, dairy and eggs, but genuine arable cropland is a mere sliver, confined to narrow coastal lowlands, since the volcanic soil and cold climate rule out most crop farming",
    "answer": 18.7,
    "color": "#639922",
    "max": 30,
    "step": 0.5,
    "answerHa": 1926100
   },
   {
    "id": "glaciers",
    "icon": "🧊",
    "name": "Glaciers",
    "desc": "Vatnajökull, Europe's largest glacier by volume, plus Langjökull, Hofsjökull and dozens of smaller ice caps - glacier cover has already shrunk noticeably since 2008 as the climate warms",
    "answer": 10.3,
    "color": "#b0cce8",
    "max": 20,
    "step": 0.2,
    "answerHa": 1060900
   },
   {
    "id": "heath",
    "icon": "🌿",
    "name": "Heath, moss & tundra (unfarmed)",
    "desc": "Sparse moss heath and dryland tundra vegetation outside farmed areas - vivid green moss famously blankets many lava fields, but it's slow-growing and easily damaged, taking decades to recover if disturbed",
    "answer": 4.3,
    "color": "#8ba888",
    "max": 15,
    "step": 0.2,
    "answerHa": 442900
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Lakes, rivers & wetlands",
    "desc": "Glacial rivers like Þjórsá and Tungnaá, which power much of the country's hydroelectric capacity, plus numerous lakes and extensive wetlands - Iceland has no shortage of fresh water",
    "answer": 3,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 309000
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Reykjavík and its surrounding capital region, home to over 60% of Iceland's population, plus a scattering of small coastal towns and a limited road network - much of the interior has no roads at all",
    "answer": 1.9,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 195700
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 65-71 courses for a population of under 400,000 - Iceland has the most golf courses per capita of any country on Earth, including the world's northernmost 18-hole course, with summer rounds played under the midnight sun",
    "answer": 0.017,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 1751,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Essentially none - Iceland has no meaningful grid-scale solar capacity at all, because it has never needed any: the country already generates virtually 100% of its electricity from hydropower and geothermal energy",
    "answer": 0.0001,
    "color": "#EF9F27",
    "max": 0.01,
    "step": 0.0002,
    "answerHa": 10,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: Iceland's electricity mix is already about 70% hydropower and 30% geothermal, with under 0.1% from anything else, fossil fuels included - one of the cleanest, most complete renewable grids on Earth, achieved without any solar power at all"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Iceland's entire national grid 24/7 (~20.2 TWh/yr) - but see the note below on why this figure is more theoretical than practical at this latitude",
    "answer": 0.2948,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 30360,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "At roughly 64-66°N, Iceland has genuinely poor solar geometry: the sun barely rises above the horizon for weeks around midwinter, while in summer the midnight sun delivers light around the clock but at a low angle and often through heavy cloud. Even using a rough, hedged estimate of ~1,500 ha/TWh (among the least favourable of any country in this game), only about 0.29% of Iceland's land would technically be needed on paper. But land was never really the constraint here - the constraint is that solar output would collapse to near zero for months at a time, making it structurally unsuited to being anything more than a minor, supplementary contributor to Iceland's energy mix, however much land you gave it. That's absolutely fine: Iceland's grid is already effectively 100% renewable without any solar power at all, using hydropower and geothermal energy that don't depend on the sun being out."
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/is.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Iceland's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Icelandic land for each category - sliders are capped at 100% total. Iceland has the most golf courses per capita of any country in the world, and already generates virtually all its electricity from hydropower and geothermal energy - solar barely features at all, and given the country's far-northern latitude, it never really could.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. Note on language: this game is presented in English only. Icelandic is a linguistically conservative language largely unchanged since medieval times, with limited representation in most AI training data, so producing it here risked errors significant enough to misinform rather than help. Land use figures from the CIA World Factbook, academic vegetation surveys and Icelandic geographic sources; electricity figures from the Icelandic government, Landsvirkjun and Statistics Iceland, 2025.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Given how far north Iceland sits and how little of its land is even usable, it's worth being upfront: solar power could only ever be a minor contributor here, not a primary energy source. The country's insolation is poor for months at a stretch around midwinter, and even summer's midnight sun arrives at a shallow angle through frequent cloud. None of that matters for Iceland's climate credentials, though - the country already generates close to 100% of its electricity from hydropower (about 70%) and geothermal energy (about 30%), resources that don't depend on sunlight at all. It's a useful reminder that 'renewable' doesn't have to mean solar: Iceland reached one of the cleanest electricity grids on Earth by building around what it actually has plenty of - glacial rivers and volcanic heat - rather than chasing a resource poorly suited to its latitude.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "map_answer": "Actual Icelandic land use - proportional area map",
   "grades": [
    [
     86,
     "🇮🇸 Expert! You know Iceland's land balance with impressive precision."
    ],
    [
     64,
     "🌋 Very strong - sharp grasp of just how much barren highland this country holds."
    ],
    [
     43,
     "⛳ Not bad! Most people don't realise Iceland has the most golf courses per capita on Earth."
    ],
    [
     21,
     "🌍 Did you know? Iceland already generates virtually 100% of its electricity from hydropower and geothermal energy - no solar required."
    ],
    [
     0,
     "🤔 Surprising? Sheep pasture, not crops, makes up almost all of Iceland's agricultural land - the volcanic soil and cold climate rule out most farming."
    ]
   ],
   "sol100_reveal": "At roughly 64-66°N, Iceland has genuinely poor solar geometry: the sun barely rises above the horizon for weeks around midwinter, while in summer the midnight sun delivers light around the clock but at a low angle and often through heavy cloud. Even using a rough, hedged estimate of ~1,500 ha/TWh (among the least favourable of any country in this game), only about 0.29% of Iceland's land would technically be needed on paper. But land was never really the constraint here - the constraint is that solar output would collapse to near zero for months at a time, making it structurally unsuited to being anything more than a minor, supplementary contributor to Iceland's energy mix, however much land you gave it. That's absolutely fine: Iceland's grid is already effectively 100% renewable without any solar power at all, using hydropower and geothermal energy that don't depend on the sun being out.",
   "country_label": "Iceland",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Iceland alone powered the whole world?",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting. Given the vast overflow, only a small arc of the circle can be shown near Iceland's own location.",
   "stat2": "This overflow isn't really about Iceland being small - Denmark, with similar total electricity demand, needs a circle only about 6.4× its own area. It's specifically about how poor solar conditions get this far north. Iceland's real climate achievement has nothing to do with solar at all: hydropower and geothermal energy already get it to a virtually 100% renewable grid without needing the sun to cooperate.",
   "fit": "Using a rough, hedged estimate of Iceland's poor high-latitude solar yield (~1,500 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - a circle over <strong>{mult}&times; the size of Iceland's entire land area</strong>. Iceland's latitude makes it one of the least solar-suited countries in this entire game."
  }
 }
};
