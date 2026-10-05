window.LANDGAME=window.LANDGAME||{};
LANDGAME.gl = {
 "title": "🇬🇱 How is Greenland's land actually used? - Guessing Game",
 "code": "gl",
 "iso": "304",
 "alpha2": "gl",
 "lon": -42,
 "lat": 72,
 "ha": 216600000,
 "sol100Ha": 600,
 "demandTwh": 0.5,
 "accent": "#b0cce8",
 "langs": [
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2024</strong> · Statistics Greenland (Grønlands Statistik) · NSIDC · Nukissiorfiit · FAO",
 "sources": "Sources: <a href=\"https://stat.gl/publ/en/GF/LAN/201301GF01EN.pdf\" target=\"_blank\">Statistics Greenland Land Use 2023</a> · <a href=\"https://nsidc.org/data/nsidc-0714/versions/1\" target=\"_blank\">NSIDC Ice Sheet Extent</a> · <a href=\"https://www.nukissiorfiit.gl/en/\" target=\"_blank\">Nukissiorfiit Annual Report 2024</a> · <a href=\"https://www.irena.org/Countries/Greenland\" target=\"_blank\">IRENA Greenland</a> · <a href=\"https://www.fao.org/faostat/\" target=\"_blank\">FAO</a> · Greenland total land area ~216.6M ha (2,166,086 km²).",
 "cats": {
  "en": [
   {
    "id": "ice",
    "icon": "🧊",
    "name": "Inland ice sheet",
    "desc": "The Greenland Ice Sheet is the world's second-largest body of ice - 1,710,000 km² averaging 1.5 km thick, reaching 3 km at its centre. If it melted entirely, global sea levels would rise by 7.4 metres. It has been losing mass every year since the late 1990s",
    "answer": 79,
    "color": "#b0cce8",
    "max": 95,
    "step": 0.5,
    "answerHa": 171020000
   },
   {
    "id": "rock",
    "icon": "🗿",
    "name": "Ice-free tundra, rock & coastal land",
    "desc": "The narrow coastal fringe of bare granite, gravel plains and polar desert exposed by retreating glaciers. Climate change is steadily widening this zone - more new ice-free land has appeared here in recent decades than almost anywhere on Earth",
    "answer": 19.3,
    "color": "#8a7e72",
    "max": 30,
    "step": 0.5,
    "answerHa": 41793800
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Proglacial lakes, meltwater rivers and coastal lagoons. These are among the fastest-changing water bodies on Earth - many lakes have appeared within decades as glaciers retreat, and rivers shift course as the ice margin moves",
    "answer": 1,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 2166000
   },
   {
    "id": "agri",
    "icon": "🐑",
    "name": "Pasture & agriculture",
    "desc": "Sheep farming in the relatively mild fjord valleys of South Greenland, mainly around Qaqortoq and Narsarsuaq - the northernmost commercial sheep-farming region in the world. A handful of farms also grow vegetables in sheltered spots",
    "answer": 0.7,
    "color": "#639922",
    "max": 5,
    "step": 0.1,
    "answerHa": 1516200
   },
   {
    "id": "settle",
    "icon": "🏘️",
    "name": "Settlement & infrastructure",
    "desc": "Nuuk (~20,000), Sisimiut, Ilulissat and ~75 other coastal towns and settlements - home to 56,000 people in total. There are no roads between towns; all long-distance travel is by boat, plane or helicopter",
    "answer": 0.02,
    "color": "#73726c",
    "max": 0.5,
    "step": 0.001,
    "answerHa": 43320,
    "dp": 3
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "How much of Greenland's land would need to be covered in solar+battery to power Greenland's entire electricity supply 24/7 (~0.5 TWh/yr)? Remember: the polar night limits winter generation significantly",
    "answer": 0.0003,
    "color": "#BA7517",
    "max": 0.01,
    "step": 0.0001,
    "answerHa": 600,
    "dp": 4,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Greenland's coastal areas receive ~750 kWh/kWp/yr as an annual average - but the polar night makes this deeply misleading for solar. Ilulissat (69°N) gets no direct sun for 5 weeks in winter; Qaanaaq (77°N) gets none for 4 months. Bridging that gap with batteries is not a matter of 'more storage' - it requires months of energy reserve, making year-round solar alone physically impractical at these latitudes. The ~600 ha figure is a land-area thought experiment using annual averages, not a realistic generation proposal. In practice, 87% of Greenland's electricity already comes from hydropower - glacial meltwater is a far better fit for the Arctic than solar."
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/gl.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Greenland's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Greenland's land for each category - sliders are capped at 100% total. Greenland is the world's largest island, but over 79% of it is buried under the second-largest ice sheet on Earth. Note: Kalaallisut (Greenlandic) has been the sole official language of Greenland since 2009 - Danish, which carries colonial baggage that many Greenlanders are actively pushing back against, is no longer official. This game is in English rather than Kalaallisut because Kalaallisut is a polysynthetic language where a single word can encode what English expresses in a whole sentence, and generating it from training data without a native speaker to verify would risk embarrassing errors.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Greenland already generates ~87% of its electricity from hydropower (Nukissiorfiit 2024), using glacial meltwater - one of the world's cleanest electricity grids. The polar night makes year-round solar challenging, requiring large battery storage. Land use figures from Statistics Greenland (Grønlands Statistik) and the National Snow and Ice Data Center (NSIDC). Electricity from Statistics Greenland 2023.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "map_answer": "Actual Greenlandic land use - proportional area map",
   "grades": [
    [
     86,
     "🧊 Expert! You know this almost-entirely-frozen island with remarkable precision."
    ],
    [
     64,
     "🐧 Very strong - sharp grasp of how completely the ice sheet dominates Greenland."
    ],
    [
     43,
     "🌊 Not bad! Most people don't realise less than 21% of Greenland is ever ice-free."
    ],
    [
     21,
     "❄️ Did you know? Over 79% of the world's largest island is buried under ice up to 3 km thick."
    ],
    [
     0,
     "🤔 Surprising? Greenland is almost entirely a vast ice sheet - the thin coastal strip is all that's exposed."
    ]
   ],
   "sol100_reveal": "Greenland's coastal areas receive ~750 kWh/kWp/yr as an annual average - but the polar night makes this deeply misleading for solar. Ilulissat (69°N) gets no direct sun for 5 weeks in winter; Qaanaaq (77°N) gets none for 4 months. Bridging that gap with batteries is not a matter of 'more storage' - it requires months of energy reserve, making year-round solar alone physically impractical at these latitudes. The ~600 ha figure is a land-area thought experiment using annual averages, not a realistic generation proposal. In practice, 87% of Greenland's electricity already comes from hydropower - glacial meltwater is a far better fit for the Arctic than solar.",
   "country_label": "Greenland",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Greenland alone powered the whole world?",
   "foot": "The dashed circle is a land-area illustration only - it shows how much ground would be needed at annual average solar yields, not a realistic generation proposal. Greenland's polar night makes year-round solar alone impractical; the circle exists to show scale, not feasibility. Land area calculated on total territory for consistency with all other countries in this game.",
   "stat2": "The circle represents ~91% of all ice-free land - essentially the entire exposed coastline - which illustrates how land-constrained any large-scale solar project here would be, even before the polar night problem. In practice, Greenland is already a renewables champion for a different reason: glacial meltwater from the retreating ice sheet powers 87% of its electricity. Hydropower, not solar, is Greenland's natural energy advantage.",
   "fit": "Using Greenland's annual average solar yield (~1,200 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - <strong>{pct}% of Greenland's total land area</strong>, shown as a circle below. But this is a <strong>land-area thought experiment, not a feasibility claim</strong>: the polar night means Greenland receives zero sun for weeks to months in winter, making year-round solar alone physically impractical - the battery storage required to bridge the gap would be enormous."
  }
 }
};
