window.LANDGAME=window.LANDGAME||{};
LANDGAME.mx = {
 "title": "🇲🇽 How is Mexico's land actually used? — Guessing Game",
 "code": "mx",
 "iso": "484",
 "alpha2": "mx",
 "lon": -102,
 "lat": 23,
 "ha": 196000000,
 "sol100Ha": 230000,
 "demandTwh": 360,
 "accent": "#639922",
 "langs": [
  "es",
  "en"
 ],
 "dataInfo": "Data: <strong>2018–2024</strong> · CIA World Factbook · CFE · GlobalData · World Bank",
 "sources": "Sources: <a href=\"https://www.indexmundi.com/mexico/land_use.html\" target=\"_blank\">Mexico Land Use Statistics (CIA World Factbook basis)</a> · <a href=\"https://en.wikipedia.org/wiki/Solar_power_in_Mexico\" target=\"_blank\">Solar Power in Mexico 2024</a> · <a href=\"https://en.wikipedia.org/wiki/Electricity_sector_in_Mexico\" target=\"_blank\">Electricity Sector in Mexico 2024</a> · Mexico total land area ~196M ha.",
 "cats": {
  "es": [
   {
    "id": "past",
    "icon": "🐄",
    "name": "Pastizales permanentes",
    "desc": "Tierra de pastoreo para ganado — el mayor uso individual del suelo en México, especialmente en el norte y centro",
    "answer": 41.7,
    "color": "#a8c46e",
    "max": 60,
    "step": 0.5,
    "answerHa": 81732000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Bosque",
    "desc": "Selva tropical en el sur, bosque de pino-encino en las tierras altas, y bosque seco en el oeste",
    "answer": 33.3,
    "color": "#3B6D11",
    "max": 50,
    "step": 0.5,
    "answerHa": 65268000
   },
   {
    "id": "arable",
    "icon": "🌾",
    "name": "Tierra cultivable",
    "desc": "Maíz, frijol, trigo y otros cultivos anuales — concentrados en valles irrigados del norte y el Bajío",
    "answer": 11.8,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 23128000
   },
   {
    "id": "other",
    "icon": "🏜️",
    "name": "Otras tierras",
    "desc": "Desiertos, áreas urbanas, montañas áridas y agua — incluye la Ciudad de México y otros grandes centros urbanos",
    "answer": 11.79,
    "color": "#888780",
    "max": 25,
    "step": 0.5,
    "answerHa": 23108400
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Campos de golf",
    "desc": "México tiene ~250 campos de golf, concentrados en destinos turísticos como Cancún y Los Cabos",
    "answer": 0.01,
    "color": "#5DCAA5",
    "max": 0.2,
    "step": 0.001,
    "answerHa": 19600
   },
   {
    "id": "perm",
    "icon": "🍊",
    "name": "Cultivos permanentes",
    "desc": "Cítricos, café, aguacate y otros cultivos arbóreos — México es el mayor exportador de aguacate del mundo",
    "answer": 1.4,
    "color": "#c9a85c",
    "max": 8,
    "step": 0.1,
    "answerHa": 2744000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+batería (actual)",
    "desc": "Solar fotovoltaico de gran escala con almacenamiento en batería, conectado a la red (~12 GW a finales de 2024)",
    "answer": 0.01,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.001,
    "answerHa": 19600,
    "isSolar": true,
    "solarNote": "Pista: México tiene un recurso solar excepcional, pero 196 M ha es enorme"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+batería para el 100% eléc.",
    "desc": "Superficie necesaria para alimentar toda la red eléctrica nacional mexicana 24h/día mediante solar+batería (~360 TWh/año)",
    "answer": 0.12,
    "color": "#BA7517",
    "max": 1,
    "step": 0.01,
    "answerHa": 235200,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "past",
    "icon": "🐄",
    "name": "Permanent pasture",
    "desc": "Grazing land for cattle — the largest single land use in Mexico, especially across the north and centre",
    "answer": 41.7,
    "color": "#a8c46e",
    "max": 60,
    "step": 0.5,
    "answerHa": 81732000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Tropical rainforest in the south, pine-oak forest in the highlands, and dry forest in the west",
    "answer": 33.3,
    "color": "#3B6D11",
    "max": 50,
    "step": 0.5,
    "answerHa": 65268000
   },
   {
    "id": "arable",
    "icon": "🌾",
    "name": "Arable land",
    "desc": "Maize, beans, wheat and other annual crops — concentrated in irrigated northern valleys and the Bajío",
    "answer": 11.8,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 23128000
   },
   {
    "id": "other",
    "icon": "🏜️",
    "name": "Other land",
    "desc": "Deserts, urban areas, barren mountains, and water — includes Mexico City and other major urban centres",
    "answer": 11.79,
    "color": "#888780",
    "max": 25,
    "step": 0.5,
    "answerHa": 23108400
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Mexico has ~250 golf courses, concentrated around resort destinations like Cancún and Los Cabos",
    "answer": 0.01,
    "color": "#5DCAA5",
    "max": 0.2,
    "step": 0.001,
    "answerHa": 19600
   },
   {
    "id": "perm",
    "icon": "🍊",
    "name": "Permanent crops",
    "desc": "Citrus, coffee, avocado and other tree crops — Mexico is the world's largest avocado exporter",
    "answer": 1.4,
    "color": "#c9a85c",
    "max": 8,
    "step": 0.1,
    "answerHa": 2744000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (~12 GW end 2024)",
    "answer": 0.01,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.001,
    "answerHa": 19600,
    "isSolar": true,
    "solarNote": "Hint: Mexico has exceptional solar resource, but 196M ha is vast"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Mexico's entire national grid 24/7 (~360 TWh/yr)",
    "answer": 0.12,
    "color": "#BA7517",
    "max": 1,
    "step": 0.01,
    "answerHa": 235200,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "es": {
   "h1": "<img src=\"https://flagcdn.com/32x24/mx.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> ¿Cómo se usa el suelo en México?",
   "subtitle": "Inspirado en <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">el vídeo corto del Dr. Simon Clark en YouTube</a> (en inglés). Adivina el porcentaje del territorio mexicano para cada categoría — los controles están limitados al 100% en total. México abarca desiertos, selva tropical y uno de los mejores recursos solares del mundo.",
   "disclaimer": "Las cifras de solar+batería son un experimento mental generado con la ayuda de una IA, no una recomendación política. Todas las cifras se refieren a sistemas de gran escala conectados a la red. México tiene una irradiancia solar excepcional en gran parte del país (hasta 6,3 kWh/m²/día en el norte) y fuertes recursos eólicos en Oaxaca y Tamaulipas. Las metas de Transición Energética 2024 de México buscan un 35% de electricidad limpia. Los datos de uso del suelo son aproximados.",
   "noteLabel": "Nota",
   "contextLabel": "Contexto del país",
   "countryNote": "México cuenta con una irradiación solar excepcional en gran parte de su territorio (hasta 6.3 kWh/m²/día en el norte) y con importantes recursos eólicos en Oaxaca y Tamaulipas. Las metas de la Transición Energética 2024 de México buscan alcanzar 35% de electricidad limpia, con la energía solar y eólica liderando las nuevas incorporaciones de capacidad hasta 2035. Los datos de uso del suelo son aproximados y proceden de estadísticas oficiales.",
   "submit": "Enviar mis estimaciones",
   "play_again": "Jugar de nuevo",
   "score": "Puntuación",
   "land_used": "Territorio usado",
   "remaining": "Restante",
   "map_guess": "Tus estimaciones — mapa proporcional (se actualiza al mover)",
   "map_answer": "Uso real del territorio mexicano — mapa proporcional",
   "allocated": "/ 100% asignados",
   "reveal": "Revelado al enviar.",
   "out_of": "puntuación de precisión",
   "sol100_reveal": "la sobrecapacidad de almacenamiento para noches y períodos nublados duplica aproximadamente la superficie necesaria frente a solo paneles. El excepcional recurso solar de México mantiene esta cifra relativamente pequeña.",
   "grades": [
    [
     86,
     "🏆 Experto en México — ¡conoces este vasto y variado país en detalle!"
    ],
    [
     64,
     "🌵 Muy bien — visión aguda del diverso paisaje mexicano."
    ],
    [
     41,
     "🥑 ¡No está mal! El predominio de los pastizales en México sorprende a la mayoría."
    ],
    [
     20,
     "🌳 México es más verde de lo que sugieren sus desiertos — un tercio es bosque."
    ],
    [
     0,
     "🤔 ¿Sorprendente? México es mayormente pastizal y bosque, no desierto como muchos asumen."
    ]
   ],
   "btn_label": "English",
   "country_label": "México",
   "circle_label": "Superficie necesaria",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/mx.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Mexico's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Mexican land for each category — sliders are capped at 100% total. Mexico spans deserts, tropical rainforest, and some of the world's best solar resource.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Mexico has exceptional solar irradiance across much of the country (up to 6.3 kWh/m²/day in the north) and strong wind resources in Oaxaca and Tamaulipas. Mexico's 2024 Energy Transition targets call for 35% clean electricity, with solar and wind expected to lead new capacity additions through 2035. Land use figures are approximate and sourced from official statistics.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Mexico has exceptional solar irradiance across much of the country (up to 6.3 kWh/m²/day in the north) and strong wind resources in Oaxaca and Tamaulipas. Mexico's 2024 Energy Transition targets call for 35% clean electricity, with solar and wind expected to lead new capacity additions through 2035. Land use figures are approximate and sourced from official statistics.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Mexican land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "storage overcapacity for nights and cloudy periods roughly doubles the land needed vs panels alone. Mexico's exceptional solar resource keeps this figure relatively small.",
   "grades": [
    [
     86,
     "🏆 Mexico expert — you know this vast and varied country in detail!"
    ],
    [
     64,
     "🌵 Very strong — sharp sense of Mexico's diverse landscape."
    ],
    [
     41,
     "🥑 Not bad! Mexico's pastureland dominance surprises most people."
    ],
    [
     20,
     "🌳 Mexico is greener than its deserts suggest — a third is forest."
    ],
    [
     0,
     "🤔 Surprising? Mexico is mostly pasture and forest, not desert as many assume."
    ]
   ],
   "btn_label": "Español",
   "country_label": "Mexico",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "es": {
   "head": "🌍 ¿Y si México solo abasteciera al mundo entero?",
   "fit": "Abastecer toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) usando las condiciones solares propias de México necesitaría unas <strong>{haM} hectáreas</strong> — el <strong>{pct}%</strong> del territorio mexicano, representado abajo como un círculo de superficie equivalente.",
   "overflow": "Abastecer toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) usando las condiciones solares propias de México necesitaría unas <strong>{haM} hectáreas</strong> — <strong>{mult}× el territorio nacional</strong>. El círculo de abajo, centrado en México, se extiende ampliamente más allá de sus fronteras, mostrando que la geografía solar y el clima importan tanto como la disponibilidad de suelo.",
   "foot": "El círculo punteado es ilustrativo — tiene el tamaño correcto, pero no es una ubicación realmente propuesta. Se superpone a fronteras existentes solo para dar escala."
  },
  "en": {
   "head": "🌍 What if Mexico alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Mexico's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Mexico's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Mexico's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Mexico — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "es": "millones",
   "en": "million"
  }
 }
};
