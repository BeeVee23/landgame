window.LANDGAME=window.LANDGAME||{};
LANDGAME.fr = {
 "title": "🇫🇷 How is France's land actually used? - Guessing Game",
 "code": "fr",
 "iso": "250",
 "alpha2": "fr",
 "lon": 2.5,
 "lat": 46.5,
 "ha": 55000000,
 "sol100Ha": 336000,
 "demandTwh": 480,
 "accent": "#639922",
 "langs": [
  "fr",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2025</strong> · Agreste-Teruti · RTE · UNEF",
 "sources": "Sources: <a href=\"https://agreste.agriculture.gouv.fr/agreste-web/download/publication/publie/Chd2415/cd2024-15_teruti_2022.pdf\" target=\"_blank\">Agreste Teruti 2021–2023</a> · <a href=\"https://analysesetdonnees.rte-france.com/bilan-electrique-2024/synthese\" target=\"_blank\">RTE Bilan électrique 2024</a> · <a href=\"https://www.rte-france.com/en\" target=\"_blank\">RTE</a> · <a href=\"https://unef.es/\" target=\"_blank\">UNEF</a> · France métropolitaine total land area ~55M ha.",
 "cats": {
  "fr": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Terres agricoles",
    "desc": "Champs, vergers, cultures, pâturages",
    "answer": 51.97,
    "color": "#639922",
    "max": 75,
    "step": 0.5,
    "answerHa": 28583500
   },
   {
    "id": "foret",
    "icon": "🌲",
    "name": "Forêts & bois",
    "desc": "Forêts, plantations, boisements",
    "answer": 30.98,
    "color": "#3B6D11",
    "max": 50,
    "step": 0.5,
    "answerHa": 17039000
   },
   {
    "id": "artif",
    "icon": "🏗️",
    "name": "Sols artificialisés",
    "desc": "Routes, bâtiments, zones industrielles, aéroports",
    "answer": 8.29,
    "color": "#73726c",
    "max": 20,
    "step": 0.5,
    "answerHa": 4559500
   },
   {
    "id": "nat",
    "icon": "🏔️",
    "name": "Zones naturelles",
    "desc": "Landes, tourbières, zones humides, montagne",
    "answer": 4.5,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 2475000
   },
   {
    "id": "vigne",
    "icon": "🍇",
    "name": "Vignes & vergers",
    "desc": "Vignobles, cultures fruitières permanentes",
    "answer": 1.8,
    "color": "#D4537E",
    "max": 8,
    "step": 0.5,
    "answerHa": 990000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golfs & parcs urbains",
    "desc": "Terrains de golf, parcs et jardins urbains",
    "answer": 1.5,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.5,
    "answerHa": 825000
   },
   {
    "id": "eau",
    "icon": "💧",
    "name": "Eaux intérieures",
    "desc": "Rivières, lacs, étangs, canaux",
    "answer": 0.9,
    "color": "#378ADD",
    "max": 6,
    "step": 0.5,
    "answerHa": 495000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solaire+batterie (actuel)",
    "desc": "Parcs photovoltaïques de grande échelle au sol avec stockage (début 2025) - raccordés au réseau",
    "answer": 0.07,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 38500,
    "isSolar": true,
    "solarNote": "Indice : étonnamment petit pour un pays si ensoleillé"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solaire+batterie pour 100% élec.",
    "desc": "Surface nécessaire pour alimenter l'intégralité du réseau électrique national français 24h/24 - le sud de la France rivalise avec l'Espagne ; la moyenne nationale est d'environ 1 350 kWh/kWc/an",
    "answer": 0.61,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 335500,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Fields, orchards, crops, pasture",
    "answer": 51.97,
    "color": "#639922",
    "max": 75,
    "step": 0.5,
    "answerHa": 28583500
   },
   {
    "id": "foret",
    "icon": "🌲",
    "name": "Forest & woodland",
    "desc": "Forests, plantations",
    "answer": 30.98,
    "color": "#3B6D11",
    "max": 50,
    "step": 0.5,
    "answerHa": 17039000
   },
   {
    "id": "artif",
    "icon": "🏗️",
    "name": "Artificialised land",
    "desc": "Roads, buildings, industrial zones, airports",
    "answer": 8.29,
    "color": "#73726c",
    "max": 20,
    "step": 0.5,
    "answerHa": 4559500
   },
   {
    "id": "nat",
    "icon": "🏔️",
    "name": "Natural areas",
    "desc": "Heathland, bogs, wetlands, mountain",
    "answer": 4.5,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 2475000
   },
   {
    "id": "vigne",
    "icon": "🍇",
    "name": "Vineyards & orchards",
    "desc": "Vineyards, fruit growing - France has the world's largest wine region",
    "answer": 1.8,
    "color": "#D4537E",
    "max": 8,
    "step": 0.5,
    "answerHa": 990000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf & urban parks",
    "desc": "Golf courses, parks and urban gardens",
    "answer": 1.5,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.5,
    "answerHa": 825000
   },
   {
    "id": "eau",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Rivers, lakes, reservoirs, canals",
    "answer": 0.9,
    "color": "#378ADD",
    "max": 6,
    "step": 0.5,
    "answerHa": 495000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (early 2025)",
    "answer": 0.07,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 38500,
    "isSolar": true,
    "solarNote": "Hint: surprisingly tiny for such a sunny country"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power France's entire national grid 24/7 (~480 TWh/yr) - France's south rivals Spain for sunshine; the national average is ~1,350 kWh/kWp/yr",
    "answer": 0.61,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 335500,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "fr": {
   "h1": "<img src=\"https://flagcdn.com/32x24/fr.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Comment la France utilise-t-elle ses terres ?",
   "subtitle": "Inspiré par <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">le court-métrage YouTube du Dr Simon Clark</a> (en anglais). Devinez le pourcentage du territoire français pour chaque catégorie - les curseurs sont bloqués à 100% au total.",
   "disclaimer": "Les chiffres solaire+batterie sont une expérience de pensée générée avec l'aide d'une IA, et non une recommandation politique. Toutes les données se réfèrent à des systèmes de grande échelle raccordés au réseau. Les données d'utilisation des terres sont approximatives et issues de statistiques officielles.",
   "noteLabel": "Remarque",
   "contextLabel": "Contexte du pays",
   "countryNote": "L'avenir énergétique de la France nécessitera des énergies renouvelables diversifiées - l'éolien (terrestre et en mer) et l'hydroélectricité contribueront probablement davantage que le solaire seul. Les données d'utilisation des terres sont approximatives et proviennent d'Agreste et de la Banque mondiale.",
   "submit": "Valider mes estimations",
   "play_again": "Rejouer",
   "score": "Score",
   "land_used": "Territoire alloué",
   "remaining": "Restant",
   "map_guess": "Vos estimations - carte proportionnelle (mise à jour en temps réel)",
   "map_answer": "Utilisation réelle du territoire français - carte proportionnelle",
   "allocated": "/ 100% alloués",
   "reveal": "Révélé après validation.",
   "out_of": "Score de précision",
   "sol100_reveal": "La France atteint environ 1 350 kWh/kWc/an en moyenne nationale - mieux que l'Allemagne, en dessous de l'Espagne. À 670 ha/TWh, alimenter la France nécessite 0,61 % de son territoire. La surcapacité de stockage double environ la superficie par rapport aux seuls panneaux.",
   "grades": [
    [
     85,
     "🏆 Expert en territoire ! Vous connaissez la campagne française dans les détails !"
    ],
    [
     65,
     "🌿 Très bien - vous avez une bonne vision du paysage français."
    ],
    [
     44,
     "🏘️ Pas mal ! La plupart des gens sous-estiment la part agricole de la France."
    ],
    [
     22,
     "🌾 La France est bien plus verte qu'elle ne le paraît en ville."
    ],
    [
     0,
     "🤔 Surprenant ? Plus de 80% de la France est agricole, forestière ou naturelle."
    ]
   ],
   "btn_label": "English",
   "country_label": "France",
   "circle_label": "Surface nécessaire",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/fr.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is France's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of French land for each category - sliders are capped at 100% total.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. France's energy future will require diverse renewables - wind (onshore and offshore) and hydropower will likely do more heavy lifting than solar. Land use figures are approximate and sourced from Agreste and World Bank data.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "France's energy future will require diverse renewables - wind (onshore and offshore) and hydropower will likely do more heavy lifting than solar. Land use figures are approximate and sourced from Agreste and World Bank data.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual French land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "France averages ~1,350 kWh/kWp/yr nationally - better than Germany, below Spain. At 670 ha/TWh, powering France needs 0.61% of its land. Storage overcapacity roughly doubles the land vs panels alone.",
   "grades": [
    [
     85,
     "🏆 Land use expert - you know France's countryside in detail!"
    ],
    [
     65,
     "🌿 Very strong - sharp sense of the French landscape."
    ],
    [
     44,
     "🏘️ Not bad! Most people underestimate how much of France is farmland."
    ],
    [
     22,
     "🌫️ France is greener than its cities suggest - 52% is agricultural."
    ],
    [
     0,
     "🤔 Surprising? Over 80% of France is farmland, forest, or natural areas."
    ]
   ],
   "btn_label": "Français",
   "country_label": "France",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "fr": {
   "head": "🌍 Et si la France seule alimentait le monde entier ?",
   "fit": "Alimenter toute la <strong>demande mondiale d'électricité</strong> (~31 000 TWh/an) avec les conditions solaires propres à la France nécessiterait environ <strong>{haM} hectares</strong> - <strong>{pct}%</strong> du territoire français, représenté ci-dessous par un cercle de surface équivalente.",
   "overflow": "Alimenter toute la <strong>demande mondiale d'électricité</strong> (~31 000 TWh/an) avec les conditions solaires propres à la France nécessiterait environ <strong>{haM} hectares</strong> - soit <strong>{mult}× le territoire national</strong>. Le cercle ci-dessous, centré sur la France, déborde largement de ses frontières, illustrant que la géographie solaire et le climat comptent autant que la disponibilité des terres.",
   "foot": "Le cercle en pointillés est illustratif - dimensionné selon la surface réelle, mais ce n'est pas un emplacement réellement proposé. Il chevauche les frontières existantes uniquement à des fins d'échelle."
  },
  "en": {
   "head": "🌍 What if France alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using France's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{pct}%</strong> of France's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using France's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{mult}× the entire country</strong>. The circle below shows that area centred on France - it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "fr": "millions",
   "en": "million"
  }
 }
};
