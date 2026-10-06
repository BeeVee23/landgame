window.LANDGAME=window.LANDGAME||{};
LANDGAME.pa = {
 "title": "🇵🇦 How is Panama's land actually used? - Guessing Game",
 "code": "pa",
 "iso": "591",
 "alpha2": "pa",
 "lon": -80.1,
 "lat": 8.5,
 "ha": 7541700,
 "sol100Ha": 8150,
 "demandTwh": 13.15,
 "accent": "#2a6fb0",
 "langs": [
  "es",
  "en"
 ],
 "dataInfo": "Data: <strong>2021–2026</strong> · World Bank · ASEP Panama · pv magazine · Global Energy Monitor · IRENA · Panama Canal Authority (via Infobae and La Estrella) · Wikipedia",
 "sources": "Sources: <a href=\"https://www.theglobaleconomy.com/Panama/agricultural_land/\" target=\"_blank\">World Bank agricultural land data for Panama (via TheGlobalEconomy)</a> · <a href=\"https://statisticsoftheworld.com/country/panama/forest-area\" target=\"_blank\">World Bank forest area for Panama (via Statistics of the World)</a> · <a href=\"https://en.wikipedia.org/wiki/Geography_of_Panama\" target=\"_blank\">Wikipedia: Geography of Panama</a> · <a href=\"https://asep.gob.pa/wp-content/uploads/electricidad/estadisticas/2024/segundo_semestre/oferta.pdf\" target=\"_blank\">ASEP Panama: electricity supply statistics 2024</a> · <a href=\"https://www.pv-magazine.com/2025/03/24/panama-installs-143-4-mw-of-new-solar-in-2024/\" target=\"_blank\">pv magazine: Panama installs 143.4 MW of new solar in 2024</a> · <a href=\"https://www.gem.wiki/Energy_profile:_Panama\" target=\"_blank\">Global Energy Monitor: Energy profile of Panama</a> · <a href=\"https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2024/Jul/IRENA_Energy_sector_Panama_2024.pdf\" target=\"_blank\">IRENA: The energy sector of Panama, climate change adaptation challenges (2024)</a> · <a href=\"https://www.infobae.com/panama/2026/06/07/una-planta-solar-impulsara-parte-de-las-operaciones-del-canal-de-panama-desde-2027/\" target=\"_blank\">Infobae: a solar plant will power part of the Panama Canal from 2027</a> · <a href=\"https://www.laestrella.com.pa/economia/paneles-solares-apuesta-flotantes-DXLE48317\" target=\"_blank\">La Estrella de Panamá: floating solar panels at the Canal</a> · <a href=\"https://en.wikipedia.org/wiki/Panama_Canal_locks\" target=\"_blank\">Wikipedia: Panama Canal locks</a> · <a href=\"https://panamaequity.com/exploring-living-in-panama/panama-golf-courses\" target=\"_blank\">Panama Equity: golf courses in Panama</a> · Panama total area ~7.54M ha (75,417 km²). Percentages are from land area and have been rescaled to total area; settlement and golf shares are approximate estimates, and the last category is what remains.",
 "cats": {
  "es": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Tierras agrícolas y pastos",
    "desc": "Pastos para ganado, arroz, caña de azúcar, banano y piña, sobre todo en el lado Pacífico, más seco - mucha más superficie es pastizal que cultivo",
    "answer": 29,
    "color": "#639922",
    "max": 60,
    "step": 0.5,
    "answerHa": 2187093
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Bosques",
    "desc": "Selva tropical y bosque nublado, desde el Darién en la frontera con Colombia hasta las tierras altas de Talamanca - Panamá es uno de los países más verdes de Centroamérica, y los bosques alrededor del Canal captan además la lluvia que llena sus lagos",
    "answer": 55.5,
    "color": "#3B6D11",
    "max": 90,
    "step": 0.5,
    "answerHa": 4185644
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Zonas urbanas y carreteras",
    "desc": "Ciudad de Panamá, Colón, David y la Carretera Panamericana - cerca de la mitad de los ~4,5 millones de habitantes vive en el área metropolitana de la capital, además de los puertos y el ferrocarril del Canal. Es una estimación, porque esta categoría se mide de forma imprecisa",
    "answer": 1.5,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 113126
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Cuerpos de agua",
    "desc": "El lago Gatún (unas 42.500 ha, creado en 1913 al represar el río Chagres), los lagos Alajuela y Bayano, y los ríos - los mismos lagos abastecen las esclusas del Canal, la hidroelectricidad y el agua potable de cerca de la mitad del país",
    "answer": 1.43,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 107846,
    "dp": 2
   },
   {
    "id": "other",
    "icon": "🌿",
    "name": "Manglares, humedales, matorral y otras tierras",
    "desc": "Manglares en ambas costas, sabana, matorral, playas y suelo desnudo - lo que queda una vez contados bosques, tierras agrícolas, ciudades y agua",
    "answer": 12.545,
    "color": "#8aa87a",
    "max": 40,
    "step": 0.5,
    "answerHa": 946106
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Campos de golf",
    "desc": "Unos nueve campos, sobre todo en la costa del Pacífico y alrededor de la Ciudad de Panamá, como Coronado, Buenaventura y Summit - un nicho pequeño, pero visible",
    "answer": 0.007,
    "color": "#5DCAA5",
    "max": 0.03,
    "step": 0.001,
    "answerHa": 528,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Parques solares (actuales)",
    "desc": "Parques solares a escala comercial, sobre todo en el lado Pacífico, donde la estación seca es larga, y una pequeña instalación flotante en el lago Gatún que usa la Autoridad del Canal - unos 0,7 GW instalados y creciendo con rapidez",
    "answer": 0.018,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.005,
    "answerHa": 1358,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Pista: la energía solar ya aporta cerca del 8 % de la electricidad de Panamá, pero la hidroeléctrica sigue siendo la columna vertebral, con alrededor del 60 % - por eso las sequías importan tanto."
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+batería para el 100 % de la electricidad",
    "desc": "Superficie necesaria de solar+batería a escala comercial para abastecer toda la red de Panamá las 24 horas (~13 TWh/año), con un sol tropical de unos 1.500 kWh/kWp/año, limitado por una larga estación lluviosa nublada",
    "answer": 0.108,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 8150,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "El sol tropical de Panamá es bueno pero no excepcional, porque la estación lluviosa es nublada. Con unas 620 ha/TWh, toda la red necesitaría el 0,108 % del territorio - unas 8.150 ha, menos de una quinta parte de la superficie del lago Gatún. El propio Canal es un cliente pequeño (unos 170 GWh al año según nuestra estimación, cerca del 1 % de la generación nacional), así que cubrir su consumo exigiría solo unas 100 ha."
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land & pasture",
    "desc": "Cattle pasture, rice, sugar cane, bananas and pineapples, mostly on the drier Pacific side - far more of it is grazing land than cropland",
    "answer": 29,
    "color": "#639922",
    "max": 60,
    "step": 0.5,
    "answerHa": 2187093
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Tropical rainforest and cloud forest, from Darién on the Colombian border to the Talamanca highlands - Panama is one of the greenest countries in Central America, and the forests around the Canal also catch the rain that fills its lakes",
    "answer": 55.5,
    "color": "#3B6D11",
    "max": 90,
    "step": 0.5,
    "answerHa": 4185644
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Panama City, Colón, David and the Pan-American Highway - roughly half of Panama's ~4.5 million people live in the Panama City metropolitan area, plus the Canal's own ports and rail line. An estimate, since this is a loosely measured category",
    "answer": 1.5,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 113126
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Gatún Lake (about 42,500 ha, created in 1913 by damming the Chagres River), Alajuela and Bayano lakes, and rivers - the same lakes supply the Canal's locks, hydropower and drinking water for around half the country",
    "answer": 1.43,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 107846,
    "dp": 2
   },
   {
    "id": "other",
    "icon": "🌿",
    "name": "Mangroves, wetlands, scrub & other land",
    "desc": "Mangrove swamps on both coasts, savanna, scrubland, beaches and bare ground - what is left once forest, farmland, towns and water are counted",
    "answer": 12.545,
    "color": "#8aa87a",
    "max": 40,
    "step": 0.5,
    "answerHa": 946106
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around nine courses, mostly on the Pacific coast and around Panama City, such as Coronado, Buenaventura and Summit - a small niche, but a visible one",
    "answer": 0.007,
    "color": "#5DCAA5",
    "max": 0.03,
    "step": 0.001,
    "answerHa": 528,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Utility-scale solar parks, mostly on the Pacific side where the dry season is long, plus a small floating array on Gatún Lake used by the Canal Authority - about 0.7 GW installed, and growing quickly",
    "answer": 0.018,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.005,
    "answerHa": 1358,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: solar already supplies about 8% of Panama's electricity, but hydropower is still the backbone at around 60% - which is why droughts matter so much."
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Panama's entire grid 24/7 (~13 TWh/yr), with tropical sunshine of about 1,500 kWh/kWp/yr, held back by a long cloudy rainy season",
    "answer": 0.108,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 8150,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Panama's tropical sun is good but not exceptional, because the rainy season is cloudy. At about 620 ha/TWh, the whole grid would need 0.108% of the country's land - roughly 8,150 ha, less than a fifth of Gatún Lake's surface. The Canal itself is a small customer (about 170 GWh a year by our estimate, around 1% of national generation), so covering its own use would take only about 100 ha."
   }
  ]
 },
 "strings": {
  "es": {
   "h1": "<img src=\"https://flagcdn.com/32x24/pa.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> ¿Cómo se usa realmente el territorio de Panamá?",
   "subtitle": "Inspirado en el <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">vídeo corto de YouTube del Dr. Simon Clark</a> (en inglés). Adivina el porcentaje del territorio panameño de cada categoría - los controles deslizantes suman como máximo el 100 %. Panamá es el estrecho puente de tierra entre dos océanos, sede de un canal por el que pasa cerca del 3 % del comercio mundial - y de una red eléctrica que ya es en su mayoría renovable, pero que depende de la lluvia.",
   "disclaimer": "Las cifras de solar+batería son un experimento mental elaborado con ayuda de una IA, no una recomendación política. Todas las cifras solares se refieren a instalaciones a escala comercial conectadas a la red, salvo el piloto flotante mencionado. El consumo eléctrico del Canal es una estimación propia, derivada de la afirmación de la Autoridad del Canal de que su futura planta solar cubrirá cerca del 15 % de su consumo.",
   "noteLabel": "Nota",
   "contextLabel": "Contexto del país",
   "countryNote": "<strong>La electricidad de Panamá ya es renovable en cerca del 73 %</strong> (2024: hidroeléctrica 60 %, solar 8 %, eólica 5 %, térmica 27 %) - pero es una apuesta por el clima. Los mismos lagos abastecen la hidroelectricidad, las esclusas del Canal y el agua potable, de modo que una sequía golpea las tres cosas a la vez, como en 2015 y en el episodio de El Niño de 2023-24, cuando el Canal tuvo que restringir los tránsitos. Panamá tampoco tiene petróleo ni gas propios e importa más del 80 % de su energía, así que sus centrales térmicas queman combustibles fósiles importados. <strong>El Canal no es un gran consumidor de electricidad</strong>: las esclusas se llenan por gravedad, y la electricidad se necesita sobre todo para los motores de compuertas y válvulas (dos motores de 19 kW mueven cada hoja de compuerta), las locomotoras eléctricas de las esclusas originales y los sistemas de control. La Autoridad del Canal opera su propia central térmica en Miraflores, ha probado una instalación solar flotante de 22 kW en el lago Gatún (2017, con un proyecto posterior de 10 MW y 10 ha previsto) y espera una planta solar de 26 GWh al año desde 2027 que cubrirá cerca del 15 % de su propio consumo. Cifras de uso del suelo del Banco Mundial, reescaladas a la superficie total de Panamá.",
   "submit": "Enviar mis estimaciones",
   "play_again": "Jugar de nuevo",
   "score": "Puntuación",
   "land_used": "Territorio usado",
   "remaining": "Restante",
   "map_guess": "Tus estimaciones - mapa proporcional (se actualiza al mover)",
   "map_answer": "Uso real del suelo en Panamá - mapa de áreas proporcionales",
   "allocated": "/ 100% asignados",
   "reveal": "Revelado al enviar.",
   "out_of": "puntuación de precisión",
   "sol100_reveal": "El sol tropical de Panamá es bueno pero no excepcional, porque la estación lluviosa es nublada. Con unas 620 ha/TWh, toda la red (~13 TWh) necesitaría solo el 0,108 % del territorio - unas 8.150 ha. Es superficie que se podría encontrar en pastizales ya despejados, y es menos de una quinta parte de la superficie del lago Gatún; los paneles flotantes allí son posibles, pero compiten con la navegación, el agua potable y la ecología del lago, así que la tierra es el camino más fácil. Hoy cerca del 27 % de la red aún quema combustibles fósiles importados, sobre todo cuando los embalses están bajos; la solar y las baterías complementan de forma natural a la hidroeléctrica porque la estación seca es la soleada. El propio Canal es un cliente pequeño (unos 170 GWh al año según nuestra estimación): su consumo podría cubrirse con unas 100 ha",
   "grades": [
    [
     86,
     "🇵🇦 ¡Experto! Conoces el equilibrio del suelo de Panamá con una precisión impresionante."
    ],
    [
     64,
     "🌳 Muy bien - tienes claro lo verde que sigue siendo Panamá."
    ],
    [
     43,
     "☀️ ¡No está mal! La solar ya aporta cerca del 8 % de la electricidad de Panamá, por detrás de la hidroeléctrica, con cerca del 60 %."
    ],
    [
     21,
     "⛳ ¿Sabías que? Panamá tiene solo unos nueve campos de golf - y un Canal que depende de la misma lluvia que su hidroelectricidad."
    ],
    [
     0,
     "🤔 ¿Sorprendente? Más de la mitad de Panamá sigue siendo bosque, y las esclusas del Canal funcionan con agua por gravedad."
    ]
   ],
   "btn_label": "English",
   "country_label": "Panamá",
   "circle_label": "Superficie necesaria",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/pa.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Panama's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Panamanian land for each category - sliders are capped at 100% total. Panama is the narrow land bridge between two oceans, home to a canal that moves about 3% of world trade - and a grid that is already mostly renewable, but depends on the rain.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems, apart from the floating pilot mentioned. The Canal's electricity use is our own estimate, derived from the Canal Authority's statement that its planned solar plant will cover about 15% of its use.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "<strong>Panama's electricity is already about 73% renewable</strong> (2024: hydropower 60%, solar 8%, wind 5%, thermal 27%) - but it is a weather bet. The same lakes supply hydropower, the Canal's locks and drinking water, so a drought hits all three at once, as in 2015 and the 2023-24 El Niño, when the Canal had to restrict transits. Panama also has no oil or gas of its own and imports more than 80% of its energy, so its thermal plants burn imported fossil fuels. <strong>The Canal is not a big power user</strong>: the locks fill by gravity, with electricity needed mainly for gate and valve motors (two 19 kW motors move each gate leaf), the electric locomotives of the original locks and the control systems. The Canal Authority runs its own thermal power station at Miraflores, has trialled a 22 kW floating solar array on Gatún Lake (2017, with a 10 MW / 10 ha follow-up planned), and expects a 26 GWh-a-year solar plant from 2027 covering about 15% of its own use. Land use figures from World Bank data, rescaled to Panama's total area.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Panamanian land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Panama's tropical sun is good but not exceptional, because the rainy season is cloudy. At about 620 ha/TWh, the whole grid (~13 TWh) would need just 0.108% of the country's land - roughly 8,150 ha. That is land that could be found on cleared pasture, and it is less than a fifth of the surface of Gatún Lake; floating panels there are possible but compete with shipping, drinking water and the lake's ecology, so land is the easier route. Today about 27% of the grid still burns imported fossil fuel, mostly when the reservoirs are low; solar and batteries are a natural complement to hydropower because the dry season is the sunny one. The Canal itself is a small customer (about 170 GWh a year by our estimate): its own use could be covered with about 100 ha",
   "grades": [
    [
     86,
     "🇵🇦 Expert! You know Panama's land balance with impressive precision."
    ],
    [
     64,
     "🌳 Very strong - sharp grasp of how green Panama still is."
    ],
    [
     43,
     "☀️ Not bad! Solar already supplies about 8% of Panama's electricity, behind hydropower at about 60%."
    ],
    [
     21,
     "⛳ Did you know? Panama has only around nine golf courses - and a Canal that depends on the same rain as its hydropower."
    ],
    [
     0,
     "🤔 Surprising? Over half of Panama is still forest, and the Canal's locks run on gravity-fed water."
    ]
   ],
   "btn_label": "Español",
   "country_label": "Panama",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "en": {
   "head": "🌍 What if Panama alone powered the whole world?",
   "fit": "At Panama's tropical solar conditions (~620 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - just <strong>{pct}% of Panama's land area</strong>, shown below as a circle of equivalent area.",
   "overflow": "At Panama's tropical solar conditions (~620 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - <strong>{mult}x the entire country</strong>. The circle below shows that area centred on Panama, spilling far into the Pacific and the Caribbean.",
   "stat2": "The question closer to home is whether Panama could run itself on solar, and the land is not the obstacle. The whole national grid needs only about 8,150 ha, around a fifth of the surface of Gatún Lake - so floating panels could in principle do it, but the lake is the Canal's navigation channel and the drinking water for about half the country, so cleared pasture is the easier site. Floating arrays suit hydropower reservoirs better, where panels and turbines can share the same grid connection. The Canal's own appetite is small: its planned 26 GWh solar plant covers about 15% of its use, and replacing the fossil-fuelled Miraflores plant outright would take only about 100 ha of panels plus batteries for the night.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting."
  },
  "es": {
   "head": "🌍 ¿Y si Panamá sola abasteciera al mundo entero?",
   "fit": "Con las condiciones solares tropicales de Panamá (~620 ha/TWh), abastecer toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) necesitaría unos <strong>{haM} millones de hectáreas</strong> - solo el <strong>{pct} % de la superficie de Panamá</strong>, mostrada abajo como un círculo de área equivalente.",
   "overflow": "Con las condiciones solares tropicales de Panamá (~620 ha/TWh), abastecer toda la <strong>demanda eléctrica mundial</strong> (~31.000 TWh/año) necesitaría unos <strong>{haM} millones de hectáreas</strong> - <strong>{mult} veces todo el país</strong>. El círculo de abajo muestra esa superficie centrada en Panamá, desbordándose sobre el Pacífico y el Caribe.",
   "stat2": "La pregunta más cercana es si Panamá podría funcionar con energía solar, y la superficie no es el obstáculo. Toda la red nacional necesita solo unas 8.150 ha, alrededor de una quinta parte de la superficie del lago Gatún - así que los paneles flotantes podrían hacerlo en principio, pero el lago es el canal de navegación y el agua potable de cerca de la mitad del país, de modo que los pastizales ya despejados son el sitio más fácil. Las instalaciones flotantes encajan mejor en embalses hidroeléctricos, donde paneles y turbinas pueden compartir la misma conexión a la red. El apetito del propio Canal es pequeño: su futura planta solar de 26 GWh cubre cerca del 15 % de su consumo, y sustituir por completo la central fósil de Miraflores exigiría solo unas 100 ha de paneles más baterías para la noche.",
   "foot": "El círculo punteado es ilustrativo - tiene el tamaño correcto de superficie, pero no es una ubicación realmente propuesta."
  }
 }
};
