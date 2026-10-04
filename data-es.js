window.LANDGAME=window.LANDGAME||{};
LANDGAME.es = {
 "title": "🇪🇸 How is Spain's land actually used? — Guessing Game",
 "code": "es",
 "iso": "724",
 "alpha2": "es",
 "lon": -3.7,
 "lat": 40,
 "ha": 50500000,
 "sol100Ha": 160000,
 "demandTwh": 260,
 "accent": "#639922",
 "langs": [
  "es",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2024</strong> · MAPA · Red Eléctrica · UNEF · World Bank",
 "sources": "Sources: <a href=\"https://www.mapa.gob.es/en/agricultura/temas/sistema-de-informacion-geografica-de-datos-agrarios/mca\" target=\"_blank\">MAPA Mapa de Cultivos y Aprovechamientos de España</a> · <a href=\"https://www.sistemaelectrico-ree.es/sites/default/files/2025-03/ISE_2024.pdf\" target=\"_blank\">Red Eléctrica Informe del sistema eléctrico 2024</a> · <a href=\"https://www.ree.es/en\" target=\"_blank\">Red Eléctrica</a> · <a href=\"https://unef.es/\" target=\"_blank\">UNEF</a> · <a href=\"https://data.worldbank.org/\" target=\"_blank\">World Bank</a> · Spain total land area ~50.5M ha.",
 "cats": {
  "es": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Tierras de cultivo",
    "desc": "Cultivos de secano y regadío, cereales, hortalizas",
    "answer": 26.34,
    "color": "#639922",
    "max": 45,
    "step": 0.5,
    "answerHa": 13301700
   },
   {
    "id": "past",
    "icon": "🐄",
    "name": "Praderas y pastizales",
    "desc": "Pastos permanentes, prados y pastizales naturales",
    "answer": 16.85,
    "color": "#a8c46e",
    "max": 30,
    "step": 0.5,
    "answerHa": 8509250
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Bosques y montes arbolados",
    "desc": "Bosques, repoblaciones forestales y monte bajo arbolado",
    "answer": 38.98,
    "color": "#3B6D11",
    "max": 55,
    "step": 0.5,
    "answerHa": 19684900
   },
   {
    "id": "scrub",
    "icon": "🌿",
    "name": "Matorral y vegetación natural",
    "desc": "Monte bajo, matorral mediterráneo, zonas de transición",
    "answer": 5.27,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 2661350
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Campos de golf",
    "desc": "España tiene ~497 campos de golf, sobre todo en la Costa del Sol y la Costa Blanca",
    "answer": 0.08,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 40400
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Suelo urbano e industrial",
    "desc": "Ciudades, carreteras, aeropuertos, zonas industriales",
    "answer": 4.77,
    "color": "#73726c",
    "max": 12,
    "step": 0.5,
    "answerHa": 2408850
   },
   {
    "id": "olive",
    "icon": "🫒",
    "name": "Olivares y viñedos",
    "desc": "Cultivos permanentes — España tiene el mayor olivar del mundo",
    "answer": 6.32,
    "color": "#c9a85c",
    "max": 15,
    "step": 0.5,
    "answerHa": 3191600
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Zonas húmedas y aguas",
    "desc": "Ríos, embalses, lagunas, marismas y zonas húmedas",
    "answer": 1.26,
    "color": "#378ADD",
    "max": 6,
    "step": 0.5,
    "answerHa": 636300
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+batería (actual)",
    "desc": "Parques fotovoltaicos de gran escala al suelo con almacenamiento (32 GW a finales de 2024) — conectados a la red",
    "answer": 0.14,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 70700,
    "isSolar": true,
    "solarNote": "Pista: sorprendentemente pequeño para un país tan soleado"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+batería para el 100% eléc.",
    "desc": "Superficie necesaria para alimentar toda la red eléctrica nacional española 24h/día mediante solar+batería",
    "answer": 0.32,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 161600,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Arable land",
    "desc": "Dryland and irrigated crops, cereal, vegetables",
    "answer": 26.34,
    "color": "#639922",
    "max": 45,
    "step": 0.5,
    "answerHa": 13301700
   },
   {
    "id": "past",
    "icon": "🐄",
    "name": "Pasture & meadows",
    "desc": "Permanent pastures, meadows and natural grazing land",
    "answer": 16.85,
    "color": "#a8c46e",
    "max": 30,
    "step": 0.5,
    "answerHa": 8509250
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & woodland",
    "desc": "Forests, reforestation and scrubland woodland",
    "answer": 38.98,
    "color": "#3B6D11",
    "max": 55,
    "step": 0.5,
    "answerHa": 19684900
   },
   {
    "id": "scrub",
    "icon": "🌿",
    "name": "Scrubland & natural",
    "desc": "Mediterranean scrub, heathland, transition zones",
    "answer": 5.27,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 2661350
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Spain has ~497 golf courses, mostly along the Costa del Sol and Costa Blanca",
    "answer": 0.08,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 40400
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & industrial",
    "desc": "Cities, roads, airports, industrial zones",
    "answer": 4.77,
    "color": "#73726c",
    "max": 12,
    "step": 0.5,
    "answerHa": 2408850
   },
   {
    "id": "olive",
    "icon": "🫒",
    "name": "Olive groves & vineyards",
    "desc": "Permanent crops — Spain has the world's largest olive grove area",
    "answer": 6.32,
    "color": "#c9a85c",
    "max": 15,
    "step": 0.5,
    "answerHa": 3191600
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Wetlands & water",
    "desc": "Rivers, reservoirs, wetlands and marshes",
    "answer": 1.26,
    "color": "#378ADD",
    "max": 6,
    "step": 0.5,
    "answerHa": 636300
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (32 GW end 2024)",
    "answer": 0.14,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 70700,
    "isSolar": true,
    "solarNote": "Hint: surprisingly small for such a sunny country"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Spain's entire national grid 24/7",
    "answer": 0.32,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 161600,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "es": {
   "h1": "<img src=\"https://flagcdn.com/32x24/es.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> ¿Cómo se usa el suelo en España?",
   "subtitle": "Inspirado en <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">el vídeo de YouTube del Dr. Simon Clark</a> (en inglés). Adivina el porcentaje del territorio español para cada categoría — los controles están limitados al 100% en total.",
   "disclaimer": "Las cifras de solar+batería son un experimento mental generado con la ayuda de una IA, no una recomendación política. Todas las cifras se refieren a sistemas de gran escala conectados a la red. España tiene un excelente recurso eólico (especialmente en Galicia y Castilla), así como potencial hidráulico y geotérmico. El apagón del 28 de abril de 2025 ilustra la importancia de una gestión sólida de la red, independientemente de las fuentes de energía.",
   "noteLabel": "Nota",
   "contextLabel": "Contexto del país",
   "countryNote": "España cuenta con excelentes recursos eólicos (especialmente en Galicia y Castilla), además de potencial hidroeléctrico y geotérmico. El apagón del 28 de abril de 2025 puso de manifiesto la importancia de una gestión sólida de la red eléctrica, independientemente de las fuentes de energía. Los datos de uso del suelo son aproximados y proceden de estadísticas oficiales.",
   "submit": "Enviar mis estimaciones",
   "play_again": "Jugar de nuevo",
   "score": "Puntuación",
   "land_used": "Territorio usado",
   "remaining": "Restante",
   "map_guess": "Tus estimaciones — mapa proporcional (se actualiza al mover)",
   "map_answer": "Uso real del suelo en España — mapa proporcional",
   "allocated": "/ 100% asignados",
   "reveal": "Revelado al enviar.",
   "out_of": "puntuación de precisión",
   "sol100_reveal": "el almacenamiento para noches y días nublados duplica la superficie necesaria respecto a solo paneles.",
   "grades": [
    [
     72,
     "🏆 ¡Experto en territorio! Conoces España a la perfección."
    ],
    [
     54,
     "🌿 Muy bien — tienes una buena visión del paisaje español."
    ],
    [
     36,
     "🫒 ¡No está mal! El olivar sorprende a casi todo el mundo."
    ],
    [
     18,
     "🌄 España es más verde de lo que parece — principalmente bosque y agricultura."
    ],
    [
     0,
     "🤔 ¿Sorprendente? Más de la mitad de España es bosque o tierra agrícola."
    ]
   ],
   "btn_label": "English",
   "country_label": "España",
   "circle_label": "Superficie necesaria",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/es.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Spain's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Spanish land for each category — sliders are capped at 100% total.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Spain has excellent wind resources (especially in Galicia and Castile), plus hydro and geothermal potential. The April 28, 2025 blackout illustrated the importance of robust grid management, independent of energy sources. Land use figures are approximate and sourced from official statistics.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Spain has excellent wind resources (especially in Galicia and Castile), plus hydro and geothermal potential. The April 28, 2025 blackout illustrated the importance of robust grid management, independent of energy sources. Land use figures are approximate and sourced from official statistics.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Spanish land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "storage overcapacity for nights and cloudy days roughly doubles the land needed vs panels alone.",
   "grades": [
    [
     72,
     "🏆 Land use expert — you know Spain's countryside in detail!"
    ],
    [
     54,
     "🌿 Very strong — sharp sense of the Spanish landscape."
    ],
    [
     36,
     "🫒 Not bad! The olive groves surprise almost everyone."
    ],
    [
     18,
     "🌄 Spain is greener than it feels — mostly forest and farmland."
    ],
    [
     0,
     "🤔 Surprising? More than half of Spain is forest or agricultural land."
    ]
   ],
   "btn_label": "Español",
   "country_label": "Spain",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "es": {
   "head": "🌍 ¿Y si España sola abasteciera al mundo entero?",
   "fit": "Abastecer toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) usando las condiciones solares propias de España necesitaría unas <strong>{haM} hectáreas</strong> — el <strong>{pct}%</strong> del territorio español, representado abajo como un círculo de superficie equivalente.",
   "overflow": "Abastecer toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) usando las condiciones solares propias de España necesitaría unas <strong>{haM} hectáreas</strong> — <strong>{mult}× el territorio nacional</strong>. El círculo de abajo, centrado en España, se extiende ampliamente más allá de sus fronteras, mostrando que la geografía solar y el clima importan tanto como la disponibilidad de suelo.",
   "foot": "El círculo punteado es ilustrativo — tiene el tamaño correcto, pero no es una ubicación realmente propuesta. Se superpone a fronteras existentes solo para dar escala."
  },
  "en": {
   "head": "🌍 What if Spain alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Spain's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Spain's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Spain's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Spain — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "es": "millones",
   "en": "million"
  }
 }
};
