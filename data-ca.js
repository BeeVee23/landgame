window.LANDGAME=window.LANDGAME||{};
LANDGAME.ca = {
 "title": "🇨🇦 How is Canada's land actually used? - Guessing Game",
 "code": "ca",
 "iso": "124",
 "alpha2": "ca",
 "lon": -106,
 "lat": 56,
 "ha": 998000000,
 "sol100Ha": 576000,
 "demandTwh": 640,
 "accent": "#378ADD",
 "langs": [
  "en",
  "fr"
 ],
 "dataInfo": "Data: <strong>2022–2026</strong> · Natural Resources Canada · CCFM · World Bank/FAO · Canada Energy Regulator · IEA",
 "sources": "Sources: <a href=\"https://natural-resources.canada.ca/forests-forestry/state-canada-forests/much-forest-does-canada-have\" target=\"_blank\">Natural Resources Canada: Forests</a> · <a href=\"https://www.ccfm.org/healthy-forests/vast-and-abundant-forests/\" target=\"_blank\">Canadian Council of Forest Ministers</a> · <a href=\"https://data.worldbank.org/indicator/AG.LND.AGRI.ZS?locations=CA\" target=\"_blank\">World Bank/FAO: Canada Land Use</a> · <a href=\"https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/provincial-territorial-energy-profiles/provincial-territorial-energy-profiles-canada.html\" target=\"_blank\">Canada Energy Regulator</a> · <a href=\"https://www.fao.org/faostat/\" target=\"_blank\">FAO</a> · <a href=\"https://www.iea.org/\" target=\"_blank\">IEA</a> · Canada total land area ~998M ha (9,984,670 km²).",
 "cats": {
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Canada's boreal forest alone is bigger than the entire land area of India - the country holds 9% of the world's forest, the third-largest forest area of any nation after Russia and Brazil, with 92% publicly owned",
    "answer": 37,
    "color": "#3B6D11",
    "max": 60,
    "step": 0.5,
    "answerHa": 369260000
   },
   {
    "id": "tundra",
    "icon": "🏔️",
    "name": "Tundra & other northern land",
    "desc": "Vast stretches of Arctic tundra and barren land across Nunavut and the northern territories, beyond the treeline where only dwarf vegetation survives - a huge share of the country most Canadians never visit",
    "answer": 46.285,
    "color": "#8a7860",
    "max": 70,
    "step": 0.5,
    "answerHa": 461924300
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Wheat, canola and pasture across the Prairie provinces (Saskatchewan, Alberta, Manitoba) - Canada is a top-5 global exporter of wheat and canola despite farmland covering less than 7% of this enormous country",
    "answer": 6.8,
    "color": "#639922",
    "max": 20,
    "step": 0.3,
    "answerHa": 67864000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Lakes & rivers",
    "desc": "Around 2 million lakes, including the Canadian share of the Great Lakes - Canada holds roughly 20% of the world's fresh water, and lakes alone cover close to a tenth of the entire country",
    "answer": 9,
    "color": "#378ADD",
    "max": 15,
    "step": 0.1,
    "answerHa": 89820000
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Toronto, Montreal, Vancouver and the rest of Canada's cities, towns and road network - despite the country's vast size, over 80% of Canadians live within 150km of the US border, leaving most of the land empty",
    "answer": 0.9,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 8982000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 2,300 courses - more than any country except the United States, a legacy of a climate and landscape well suited to the sport across the populated southern strip",
    "answer": 0.012,
    "color": "#5DCAA5",
    "max": 0.1,
    "step": 0.002,
    "answerHa": 119760,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Utility-scale solar remains a small share of the mix, concentrated in southern Ontario - solar supplied only around 1% of Canada's electricity generation, dwarfed by hydropower and nuclear",
    "answer": 0.003,
    "color": "#EF9F27",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 29940,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: Canada's electricity is already about 85% non-emitting without much solar at all - hydropower (~60%) and nuclear (~15%, concentrated in Ontario) do almost all the work"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Canada's entire national grid 24/7 (~640 TWh/yr), using a hedged national-average estimate given the country's huge range of latitudes",
    "answer": 0.0577,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 576000,
    "dp": 4,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Canada's solar yield varies hugely by latitude, but weighted toward the populated south it's roughly 900 ha/TWh on a hedged estimate, similar to the UK. At that rate the whole grid needs just 0.058% of Canada's vast land. Canada is also a top-5 global oil exporter, yet its own electricity grid barely touches oil at all - Alberta's oil sands output is mostly exported, while domestic power comes overwhelmingly from hydropower and nuclear instead"
   }
  ],
  "fr": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forêt",
    "desc": "La forêt boréale du Canada, à elle seule, est plus vaste que la totalité du territoire de l'Inde - le pays détient 9% des forêts mondiales, la troisième plus grande superficie forestière au monde après la Russie et le Brésil, dont 92% appartient au domaine public",
    "answer": 37,
    "color": "#3B6D11",
    "max": 60,
    "step": 0.5,
    "answerHa": 369260000
   },
   {
    "id": "tundra",
    "icon": "🏔️",
    "name": "Toundra et autres terres nordiques",
    "desc": "De vastes étendues de toundra arctique et de terres arides au Nunavut et dans les territoires du nord, au-delà de la limite des arbres, où seule une végétation naine survit - une part immense du pays que la plupart des Canadiens ne visitent jamais",
    "answer": 46.285,
    "color": "#8a7860",
    "max": 70,
    "step": 0.5,
    "answerHa": 461924300
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Terres agricoles",
    "desc": "Blé, canola et pâturages dans les provinces des Prairies (Saskatchewan, Alberta, Manitoba) - le Canada figure parmi les cinq premiers exportateurs mondiaux de blé et de canola, bien que les terres agricoles couvrent moins de 7% de cet immense pays",
    "answer": 6.8,
    "color": "#639922",
    "max": 20,
    "step": 0.3,
    "answerHa": 67864000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Lacs et rivières",
    "desc": "Environ 2 millions de lacs, incluant la part canadienne des Grands Lacs - le Canada détient environ 20% de l'eau douce mondiale, et les lacs seuls couvrent près d'un dixième de l'ensemble du pays",
    "answer": 9,
    "color": "#378ADD",
    "max": 15,
    "step": 0.1,
    "answerHa": 89820000
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Zones bâties et routes",
    "desc": "Toronto, Montréal, Vancouver et le reste des villes, villages et réseau routier du Canada - malgré l'immensité du pays, plus de 80% des Canadiens vivent à moins de 150 km de la frontière américaine, laissant la majeure partie du territoire inhabitée",
    "answer": 0.9,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 8982000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Terrains de golf",
    "desc": "Environ 2 300 terrains - plus que tout autre pays à l'exception des États-Unis, un héritage d'un climat et d'un paysage particulièrement adaptés à ce sport dans la bande sud peuplée du pays",
    "answer": 0.012,
    "color": "#5DCAA5",
    "max": 0.1,
    "step": 0.002,
    "answerHa": 119760,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Centrales solaires (actuelles)",
    "desc": "L'énergie solaire à grande échelle reste une part modeste du mix énergétique, concentrée dans le sud de l'Ontario - le solaire n'a fourni qu'environ 1% de la production électrique du Canada, largement dominé par l'hydroélectricité et le nucléaire",
    "answer": 0.003,
    "color": "#EF9F27",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 29940,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Indice : l'électricité canadienne est déjà non émettrice à environ 85% sans beaucoup de solaire du tout - l'hydroélectricité (~60%) et le nucléaire (~15%, concentré en Ontario) font presque tout le travail"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solaire et batterie pour 100% de l'électricité",
    "desc": "Surface nécessaire en centrales solaires à grande échelle avec stockage pour alimenter tout le réseau électrique canadien 24 heures sur 24 (environ 640 TWh/an), selon une estimation prudente compte tenu de l'immense étendue de latitudes du pays",
    "answer": 0.0577,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 576000,
    "dp": 4,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Le rendement solaire du Canada varie énormément selon la latitude, mais pondéré vers le sud peuplé, il est d'environ 900 ha/TWh selon une estimation prudente, similaire au Royaume-Uni. À ce taux, l'ensemble du réseau ne nécessiterait que 0,058% du vaste territoire canadien. Le Canada est aussi l'un des cinq premiers exportateurs mondiaux de pétrole, et pourtant son propre réseau électrique n'y recourt presque pas - la production des sables bitumineux de l'Alberta est en grande partie exportée, tandis que l'électricité domestique provient massivement de l'hydroélectricité et du nucléaire"
   }
  ]
 },
 "strings": {
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ca.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Canada's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Canadian land for each category - sliders are capped at 100% total. Canada is a top-5 global oil exporter, yet its own electricity grid is already about 85% non-emitting thanks to hydropower and nuclear.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. Land use figures from Natural Resources Canada, the Canadian Council of Forest Ministers and the World Bank/FAO; electricity figures from the Canada Energy Regulator and IEA, 2023-2025.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Canada is a genuinely unusual case: it's one of the world's top-5 oil exporters (mostly via Alberta's oil sands), yet its own domestic electricity grid is already about 85% non-emitting - roughly 60% hydropower and 15% nuclear, concentrated in Ontario, with wind and solar making up most of the rest. That's not a contradiction so much as two separate systems: oil sands production is overwhelmingly exported rather than burned for Canadian power, while the electricity grid was built out around hydropower and nuclear decades ago, largely independent of the oil industry. The result is one of the cleanest electricity grids in the G7, alongside one of the world's largest oil export industries, operating side by side rather than in tension.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Canadian land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Canada's solar yield varies hugely by latitude, but weighted toward the populated south it's roughly 900 ha/TWh on a hedged estimate, similar to the UK. At that rate the whole grid needs just 0.058% of Canada's vast land. Canada is also a top-5 global oil exporter, yet its own electricity grid barely touches oil at all - Alberta's oil sands output is mostly exported, while domestic power comes overwhelmingly from hydropower and nuclear instead",
   "grades": [
    [
     86,
     "🇨🇦 Expert! You know Canada's land balance with impressive precision."
    ],
    [
     64,
     "🌲 Very strong - sharp grasp of just how much forest and tundra this country holds."
    ],
    [
     43,
     "💧 Not bad! Most people underestimate how much of Canada is covered by lakes."
    ],
    [
     21,
     "⛳ Did you know? Canada has more golf courses than any country except the United States."
    ],
    [
     0,
     "🤔 Surprising? Canada is a top-5 oil exporter, yet its own electricity grid is about 85% non-emitting thanks to hydropower and nuclear."
    ]
   ],
   "btn_label": "Français",
   "country_label": "Canada",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  },
  "fr": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ca.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Comment le territoire du Canada est-il vraiment utilisé?",
   "subtitle": "Inspiré par le <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">court extrait YouTube du Dr Simon Clark</a> (en anglais). Devinez le pourcentage du territoire canadien pour chaque catégorie - la somme des curseurs ne peut dépasser 100%. Le Canada figure parmi les cinq premiers exportateurs mondiaux de pétrole, et pourtant son propre réseau électrique est déjà non émetteur à environ 85% grâce à l'hydroélectricité et au nucléaire.",
   "disclaimer": "Les chiffres de solaire et de batteries constituent une expérience de pensée générée avec l'aide de l'IA, et non une recommandation politique. Tous les chiffres solaires concernent des installations de grande échelle connectées au réseau. Données d'occupation des sols de Ressources naturelles Canada, du Conseil canadien des ministres des forêts et de la Banque mondiale/FAO; données électriques de la Régie de l'énergie du Canada et de l'AIE, 2023-2025.",
   "noteLabel": "Remarque",
   "contextLabel": "Contexte du pays",
   "countryNote": "Le Canada représente un cas véritablement singulier : il figure parmi les cinq premiers exportateurs mondiaux de pétrole (principalement via les sables bitumineux de l'Alberta), et pourtant son propre réseau électrique domestique est déjà non émetteur à environ 85% - environ 60% d'hydroélectricité et 15% de nucléaire, concentré en Ontario, l'éolien et le solaire complétant l'essentiel du reste. Il ne s'agit pas tant d'une contradiction que de deux systèmes distincts : la production des sables bitumineux est massivement exportée plutôt que brûlée pour produire de l'électricité canadienne, tandis que le réseau électrique a été bâti autour de l'hydroélectricité et du nucléaire il y a des décennies, largement indépendant de l'industrie pétrolière. Le résultat est l'un des réseaux électriques les plus propres du G7, coexistant avec l'une des plus importantes industries d'exportation pétrolière au monde, sans que les deux ne s'opposent.",
   "submit": "Envoyer toutes les réponses",
   "play_again": "Rejouer",
   "score": "Pointage",
   "land_used": "Terrain utilisé",
   "remaining": "Restant",
   "map_guess": "Vos réponses - carte de superficie proportionnelle (mise à jour en glissant)",
   "map_answer": "Utilisation réelle du territoire canadien - carte de superficie proportionnelle",
   "allocated": "/ 100% attribué",
   "reveal": "Révélé après l'envoi.",
   "out_of": "score de précision",
   "sol100_reveal": "Le rendement solaire du Canada varie énormément selon la latitude, mais pondéré vers le sud peuplé, il est d'environ 900 ha/TWh selon une estimation prudente, similaire au Royaume-Uni. À ce taux, l'ensemble du réseau ne nécessiterait que 0,058% du vaste territoire canadien. Le Canada est aussi l'un des cinq premiers exportateurs mondiaux de pétrole, et pourtant son propre réseau électrique n'y recourt presque pas - la production des sables bitumineux de l'Alberta est en grande partie exportée, tandis que l'électricité domestique provient massivement de l'hydroélectricité et du nucléaire",
   "grades": [
    [
     86,
     "🇨🇦 Expert! Vous connaissez la répartition des terres du Canada avec une précision impressionnante."
    ],
    [
     64,
     "🌲 Très fort - excellente idée de la place qu'occupent la forêt et la toundra."
    ],
    [
     43,
     "💧 Pas mal! La plupart des gens sous-estiment la surface couverte par les lacs au Canada."
    ],
    [
     21,
     "⛳ Saviez-vous que le Canada compte plus de terrains de golf que tout autre pays, sauf les États-Unis?"
    ],
    [
     0,
     "🤔 Surprenant? Le Canada figure parmi les cinq premiers exportateurs mondiaux de pétrole, et pourtant son propre réseau électrique est non émetteur à environ 85% grâce à l'hydroélectricité et au nucléaire."
    ]
   ],
   "btn_label": "English",
   "country_label": "Canada",
   "circle_label": "Superficie requise",
   "zoomed": "Vue rapprochée"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Canada alone powered the whole world?",
   "fit": "Using a hedged national-average estimate of Canada's solar yield (~900 ha/TWh, weighted toward the populated south), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - just <strong>{pct}% of Canada's land area</strong>, shown below as a circle of equivalent area. Canada's sheer size means this fits comfortably, even with fairly ordinary sunshine.",
   "stat2": "Unlike its smaller, similarly high-latitude neighbours like Denmark or the UK, Canada's vast land area means the numbers work out easily despite unremarkable solar conditions - the circle needed is a small fraction of the country. It's a reminder that total land area and per-hectare solar quality are entirely separate variables, and either one alone can carry a country's world-solar thought experiment.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting."
  },
  "fr": {
   "head": "🌍 Et si le Canada alimentait le monde entier en électricité?",
   "fit": "Avec une estimation prudente du rendement solaire moyen national du Canada (environ 900 ha/TWh, pondérée vers le sud peuplé), couvrir l'ensemble de la <strong>demande électrique mondiale</strong> (environ 31 000 TWh/an) nécessiterait environ <strong>{haM} millions d'hectares</strong> - soit seulement <strong>{pct}% du territoire canadien</strong>, représenté ci-dessous par un cercle d'aire équivalente. L'immensité du Canada permet à cela de tenir aisément, même avec un ensoleillement plutôt ordinaire.",
   "stat2": "Contrairement à ses voisins plus petits et à latitude comparable comme le Danemark ou le Royaume-Uni, l'immensité du territoire canadien permet aux chiffres de fonctionner aisément malgré des conditions solaires ordinaires - le cercle nécessaire ne représente qu'une infime fraction du pays. Un rappel que la superficie totale et la qualité solaire par hectare sont deux variables entièrement distinctes, et que l'une ou l'autre peut à elle seule porter l'expérience de pensée solaire mondiale d'un pays.",
   "foot": "Le cercle en pointillé est purement illustratif - sa taille correspond à la surface exacte requise, mais il ne s'agit pas d'un emplacement réellement proposé."
  }
 }
};
