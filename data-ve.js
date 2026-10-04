window.LANDGAME=window.LANDGAME||{};
LANDGAME.ve = {
 "title": "🇻🇪 How is Venezuela's land actually used? — Guessing Game",
 "code": "ve",
 "iso": "862",
 "alpha2": "ve",
 "lon": -66,
 "lat": 8,
 "ha": 88205000,
 "sol100Ha": 29657,
 "demandTwh": 56.49,
 "accent": "#639922",
 "langs": [
  "es",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2026</strong> · FAO/Wikipedia land data · IRENA · aenert.com energy statistics",
 "sources": "Sources: <a href=\"https://en.wikipedia.org/wiki/Geography_of_Venezuela\" target=\"_blank\">Geography of Venezuela</a> · <a href=\"https://aenert.com/countries/america/energy-industry-in-venezuela/\" target=\"_blank\">Energy Industry in Venezuela, aenert.com</a> · <a href=\"https://www.irena.org/-/media/Files/IRENA/Agency/Statistics/Statistical_Profiles/South-America/Venezuela-Bolivarian-Republic-of_South-America_RE_SP.pdf\" target=\"_blank\">IRENA Venezuela Country Profile</a> · <a href=\"https://lasvegassun.com/news/2026/jan/11/benefiting-from-venezuelas-impure-oil-is-no-simple/\" target=\"_blank\">Venezuela's Extra-Heavy Crude, coverage 2026</a> · <a href=\"https://commonslibrary.parliament.uk/research-briefings/cbp-10452/\" target=\"_blank\">UK Parliament: US Capture of Maduro</a> · Venezuela total land area ~88.2M ha (882,050 km²).",
 "cats": {
  "es": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Bosques",
    "desc": "Selva amazónica al sur, bosques tropicales secos y húmedos que cubren gran parte del país — Venezuela alberga una de las mayores extensiones de selva tropical intacta de Sudamérica fuera de la propia Amazonía brasileña",
    "answer": 52.3,
    "color": "#3B6D11",
    "max": 70,
    "step": 0.5,
    "answerHa": 46131215
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Tierras agrícolas y llanos",
    "desc": "Los Llanos —extensas sabanas tropicales en el centro del país— dedicadas al ganado y cultivos, junto con tierras de cultivo en los valles andinos y la región de Guárico y Portuguesa",
    "answer": 24.4,
    "color": "#639922",
    "max": 40,
    "step": 0.5,
    "answerHa": 21522020
   },
   {
    "id": "other",
    "icon": "🏔️",
    "name": "Tierras altas, tepuyes y otras zonas",
    "desc": "El Macizo Guayanés al sureste —con sus icónicos tepuyes de cima plana, incluido el Salto Ángel, la catarata más alta del mundo— y la cordillera de los Andes al oeste",
    "answer": 20.2,
    "color": "#8a7860",
    "max": 40,
    "step": 0.5,
    "answerHa": 17817410
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Asentamientos y carreteras",
    "desc": "Caracas, Maracaibo, Valencia y la red de carreteras del país — más del 88% de los venezolanos vive en áreas urbanas, concentradas principalmente en la franja costera y andina del norte",
    "answer": 2.5,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 2205125
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Cuerpos de agua",
    "desc": "El lago de Maracaibo —el más grande de Sudamérica— además del río Orinoco y el embalse de Guri, que alimenta una de las mayores centrales hidroeléctricas del mundo",
    "answer": 0.5,
    "color": "#378ADD",
    "max": 3,
    "step": 0.05,
    "answerHa": 441025
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Campos de golf",
    "desc": "Un puñado de campos, en su mayoría en Caracas y Maracaibo — el golf sigue siendo un deporte minoritario en Venezuela en comparación con otros países de la región",
    "answer": 0.002,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 1764,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Plantas solares (actuales)",
    "desc": "Capacidad solar prácticamente nula a escala de red — apenas 5 MW en 2023, sin crecimiento significativo en la última década, ya que el país ha dependido casi por completo de la hidroelectricidad del Guri",
    "answer": 0.098,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.01,
    "answerHa": 86441,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Pista: la energía solar en Venezuela lleva más de una década estancada en apenas 5 MW — una fracción minúscula frente a los 10.200 MW de la represa de Guri, que por sí sola genera más electricidad que todo el resto del sistema combinado"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+batería para el 100% de la electricidad",
    "desc": "Superficie necesaria en plantas solares a gran escala con almacenamiento para abastecer toda la red eléctrica venezolana las 24 horas (unos 56,5 TWh/año), aprovechando la radiación solar tropical del país",
    "answer": 0.0336,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 29657,
    "dp": 4,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Venezuela recibe una radiación solar tropical sólida, de unos 525 ha/TWh — comparable a Nigeria o Tailandia. A ese ritmo, abastecer toda la red eléctrica necesitaría apenas un 0,034% del territorio venezolano. El país ya obtiene cerca del 78% de su electricidad de forma limpia gracias a la hidroeléctrica de Guri: el potencial solar existe, pero la atención política actual está en el petróleo, no en las renovables"
   }
  ],
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Amazon rainforest in the south, plus tropical dry and moist forest covering much of the country — Venezuela holds one of South America's largest expanses of intact tropical forest outside the Brazilian Amazon itself",
    "answer": 52.3,
    "color": "#3B6D11",
    "max": 70,
    "step": 0.5,
    "answerHa": 46131215
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land & Llanos",
    "desc": "The Llanos — vast tropical savanna plains across central Venezuela — used for cattle ranching and crops, plus farmland in the Andean valleys and the Guárico and Portuguesa regions",
    "answer": 24.4,
    "color": "#639922",
    "max": 40,
    "step": 0.5,
    "answerHa": 21522020
   },
   {
    "id": "other",
    "icon": "🏔️",
    "name": "Highlands, tepuis & other terrain",
    "desc": "The Guiana Highlands in the southeast — home to the iconic flat-topped tepuis, including Angel Falls, the world's tallest waterfall — and the Andes mountains to the west",
    "answer": 20.2,
    "color": "#8a7860",
    "max": 40,
    "step": 0.5,
    "answerHa": 17817410
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Caracas, Maracaibo, Valencia and the national road network — over 88% of Venezuelans live in urban areas, concentrated mainly along the northern coastal and Andean strip",
    "answer": 2.5,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 2205125
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Lake Maracaibo — the largest lake in South America — plus the Orinoco River and the Guri reservoir, which feeds one of the world's largest hydroelectric plants",
    "answer": 0.5,
    "color": "#378ADD",
    "max": 3,
    "step": 0.05,
    "answerHa": 441025
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "A handful of courses, mostly in Caracas and Maracaibo — golf remains a minority sport in Venezuela compared with other countries in the region",
    "answer": 0.002,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 1764,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Essentially negligible grid-scale solar capacity — just 5 MW in 2023, with no meaningful growth in over a decade, as the country has relied almost entirely on Guri hydropower instead",
    "answer": 0.098,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.01,
    "answerHa": 86441,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: Venezuela's solar capacity has been stuck at just 5 MW for over a decade — a tiny fraction of the Guri Dam's 10,200 MW, which alone generates more electricity than the rest of the entire grid combined"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Venezuela's entire national grid 24/7 (~56.5 TWh/yr), using the country's solid tropical solar resource",
    "answer": 0.0336,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 29657,
    "dp": 4,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Venezuela gets a solid tropical solar resource, roughly 525 ha/TWh — comparable to Nigeria or Thailand. At that rate, powering the entire grid would need just 0.034% of Venezuela's land. The country already gets about 78% of its electricity cleanly from Guri hydropower: the solar potential exists, but current political attention is fixed on oil, not renewables"
   }
  ]
 },
 "strings": {
  "es": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ve.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> ¿Cómo se usa realmente el territorio de Venezuela?",
   "subtitle": "Inspirado en el <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">video corto de YouTube del Dr. Simon Clark</a> (en inglés). Adivina el porcentaje del territorio venezolano en cada categoría — la suma de los controles no puede superar el 100%. Venezuela posee las mayores reservas de petróleo probadas del mundo, y sin embargo su red eléctrica ya funciona principalmente con hidroelectricidad limpia procedente de una sola represa.",
   "disclaimer": "Las cifras de energía solar y baterías son un experimento mental generado con ayuda de IA, no una recomendación política. Todas las cifras solares se refieren a sistemas de gran escala conectados a la red. Datos de uso del suelo de FAO/Wikipedia y estudios académicos de potencial solar; datos eléctricos de IRENA y estadísticas energéticas de aenert.com, 2023.",
   "noteLabel": "Nota",
   "contextLabel": "Contexto del país",
   "countryNote": "El 3 de enero de 2026, fuerzas estadounidenses capturaron al presidente venezolano Nicolás Maduro en una operación militar en Caracas; el presidente Trump anunció que Estados Unidos \"dirigiría el país\" durante una transición, y su administración ha impulsado desde entonces una rápida expansión de la extracción petrolera venezolana, prometiendo acceso a empresas estadounidenses y una meta de inversión de 100.000 millones de dólares. Pero cerca del 90% de las reservas venezolanas son crudo extrapesado y agrio de la Faja del Orinoco — un petróleo similar al alquitrán que debe diluirse y ser sometido a mejoramiento químico o mezclado con crudos más ligeros antes de poder refinarse en productos como gasolina, diésel, combustible de aviación o materia prima para amoníaco. Los costes de equilibrio superan los 80 dólares por barril, muy por encima del crudo pesado comparable de Canadá (~55 dólares), y restaurar la producción plena tomaría años y más de 100.000 millones de dólares. Compara esto con el potencial solar de Venezuela más abajo: a diferencia del petróleo, la luz solar no necesita dilución, mejoramiento ni décadas de inversión de capital para convertirse en electricidad útil.",
   "submit": "Enviar todas las respuestas",
   "play_again": "Jugar de nuevo",
   "score": "Puntuación",
   "land_used": "Terreno usado",
   "remaining": "Restante",
   "map_guess": "Tus respuestas — mapa de área proporcional (se actualiza al deslizar)",
   "map_answer": "Uso real del territorio venezolano — mapa de área proporcional",
   "allocated": "/ 100% asignado",
   "reveal": "Se revela después de enviar.",
   "out_of": "puntuación de precisión",
   "sol100_reveal": "Venezuela recibe una radiación solar tropical sólida, de unos 525 ha/TWh — comparable a Nigeria o Tailandia. A ese ritmo, abastecer toda la red eléctrica necesitaría apenas un 0,034% del territorio venezolano. El país ya obtiene cerca del 78% de su electricidad de forma limpia gracias a la hidroeléctrica de Guri: el potencial solar existe, pero la atención política actual está en el petróleo, no en las renovables",
   "grades": [
    [
     86,
     "🇻🇪 ¡Experto! Conoces el reparto del territorio venezolano con una precisión impresionante."
    ],
    [
     64,
     "🌳 Muy bien — buena idea de cuán boscoso es realmente este país."
    ],
    [
     43,
     "🐄 ¡No está mal! Mucha gente subestima cuánto territorio ocupan los Llanos."
    ],
    [
     21,
     "💧 ¿Sabías que la represa del Guri por sí sola suministra la mayor parte de la electricidad de Venezuela, y es casi toda limpia?"
    ],
    [
     0,
     "🤔 ¿Sorprendido? Venezuela tiene las mayores reservas de petróleo del mundo, y sin embargo su red eléctrica depende casi por completo de una sola central hidroeléctrica."
    ]
   ],
   "btn_label": "English",
   "country_label": "Venezuela",
   "circle_label": "Terreno necesario",
   "zoomed": "Vista ampliada"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ve.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Venezuela's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Venezuelan land for each category — sliders are capped at 100% total. Venezuela holds the world's largest proven oil reserves, yet its electricity grid already runs mostly on clean hydropower from a single dam.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. Land use figures from FAO/Wikipedia land area data and academic solar-potential studies; electricity figures from IRENA and aenert.com energy statistics, 2023.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "On January 3, 2026, US forces captured Venezuelan President Nicolás Maduro in a military raid on Caracas; President Trump announced the US would \"run the country\" during a transition, and his administration has since pushed to rapidly expand Venezuelan oil drilling, with US firms promised access and a $100 billion investment target. But roughly 90% of Venezuela's reserves are extra-heavy, sour crude from the Orinoco Belt — a tarlike oil that must be diluted and either chemically upgraded or blended with lighter crudes before it can be refined into products like petrol, diesel, jet fuel or ammonia feedstock. Breakeven costs exceed $80/barrel, well above Canada's comparable heavy oil (~$55), and restoring full production would take years and over $100 billion. Compare that to Venezuela's solar potential below: unlike the oil, sunlight needs no dilution, upgrading, or decades-long capital investment to become useful electricity.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Venezuelan land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Venezuela gets a solid tropical solar resource, roughly 525 ha/TWh — comparable to Nigeria or Thailand. At that rate, powering the entire grid would need just 0.034% of Venezuela's land. The country already gets about 78% of its electricity cleanly from Guri hydropower: the solar potential exists, but current political attention is fixed on oil, not renewables",
   "grades": [
    [
     86,
     "🇻🇪 Expert! You know Venezuela's land balance with impressive precision."
    ],
    [
     64,
     "🌳 Very strong — sharp grasp of just how forested this country really is."
    ],
    [
     43,
     "🐄 Not bad! Most people underestimate how much of Venezuela is Llanos grassland."
    ],
    [
     21,
     "💧 Did you know? The Guri Dam alone supplies most of Venezuela's electricity — and it's almost entirely clean."
    ],
    [
     0,
     "🤔 Surprising? Venezuela's oil reserves are the largest on Earth, yet its electricity grid is mostly powered by a single hydroelectric dam."
    ]
   ],
   "btn_label": "Español",
   "country_label": "Venezuela",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "es": {
   "head": "🌍 ¿Y si Venezuela abasteciera de electricidad a todo el mundo?",
   "fit": "Con las condiciones solares tropicales de Venezuela (~525 ha/TWh), cubrir toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) requeriría unos <strong>{haM} millones de hectáreas</strong> — <strong>el {pct}% del territorio venezolano</strong>, mostrado abajo como un círculo de área equivalente. Ese círculo cabe cómodamente dentro de las propias fronteras de Venezuela.",
   "stat2": "La combinación de un territorio amplio y una insolación tropical sólida —aunque no excepcional— hace de esto un experimento mental físicamente razonable, a diferencia de su petróleo, que requiere un capital y un procesamiento enormes antes de poder usarse como combustible. Resulta irónico que el país mejor posicionado para beneficiarse de un impulso petrolero global también tenga uno de los caminos más directos hacia una economía de energía limpia, si la inversión alguna vez apuntara en esa dirección.",
   "foot": "El círculo punteado es meramente ilustrativo — su tamaño corresponde al área correcta, pero no representa una ubicación real propuesta."
  },
  "en": {
   "head": "🌍 What if Venezuela alone powered the whole world?",
   "fit": "At Venezuela's tropical solar conditions (~525 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — <strong>{pct}% of Venezuela's land area</strong>, shown below as a circle of equivalent area. That circle fits comfortably within Venezuela's own borders.",
   "stat2": "Venezuela's combination of a large land area and solid (if not exceptional) tropical sunshine makes this a physically reasonable thought experiment — unlike its oil, which requires enormous capital and processing before it can fuel anything. Ironically, the country best positioned to profit from a global oil drilling push also has one of the most straightforward paths to a clean-energy economy, if investment ever pointed that way.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting."
  }
 }
};
