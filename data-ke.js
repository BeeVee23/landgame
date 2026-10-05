window.LANDGAME=window.LANDGAME||{};
LANDGAME.ke = {
 "title": "🇰🇪 How is Kenya's land actually used? - Guessing Game",
 "code": "ke",
 "iso": "404",
 "alpha2": "ke",
 "lon": 37.9,
 "lat": 0,
 "ha": 58000000,
 "sol100Ha": 8000,
 "demandTwh": 12,
 "accent": "#639922",
 "langs": [
  "sw",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · World Bank · FAO · EPRA Kenya",
 "sources": "Sources: <a href=\"https://data.worldbank.org/country/KE\" target=\"_blank\">World Bank Development Indicators 2023</a> · <a href=\"https://www.fao.org/countryprofiles/index/en/?iso3=KEN\" target=\"_blank\">FAO Kenya Country Profile</a> · <a href=\"https://www.epra.go.ke/electricity/\" target=\"_blank\">EPRA Kenya Electricity Report 2024</a> · Kenya total land area ~58.0M ha.",
 "cats": {
  "sw": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Ardhi ya kilimo",
    "desc": "Mashamba, chai, kahawa na mazao ya kudumu - yaliyojilimbikizia kwenye nyanda za juu za kati na magharibi mwa Kenya",
    "answer": 28.5,
    "color": "#639922",
    "max": 45,
    "step": 0.5,
    "answerHa": 16530000
   },
   {
    "id": "past",
    "icon": "🐄",
    "name": "Malisho ya kudumu",
    "desc": "Nyasi na malisho - jamii za Maasai na wafugaji wengine katika Bonde la Ufa na maeneo ya kusini",
    "answer": 21,
    "color": "#a8c46e",
    "max": 40,
    "step": 0.5,
    "answerHa": 12180000
   },
   {
    "id": "arid",
    "icon": "🏜️",
    "name": "Ardhi kame na nusu kame",
    "desc": "Vichaka, savanna na jangwa kaskazini na mashariki mwa Kenya - zaidi ya theluthi moja ya nchi",
    "answer": 36.5,
    "color": "#c9a85c",
    "max": 55,
    "step": 0.5,
    "answerHa": 21170000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Misitu",
    "desc": "Hasa misitu ya nyanda za juu ikiwemo Mlima Kenya, Aberdares na Mau - minara muhimu ya maji kwa mkoa",
    "answer": 6.2,
    "color": "#3B6D11",
    "max": 15,
    "step": 0.5,
    "answerHa": 3596000
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Maeneo ya mjini",
    "desc": "Nairobi, Mombasa na miji mingine pamoja na barabara na miundombinu",
    "answer": 4,
    "color": "#73726c",
    "max": 12,
    "step": 0.5,
    "answerHa": 2320000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Maji ya ndani",
    "desc": "Maziwa (Victoria, Turkana, Nakuru), mito na maeneo ya maji",
    "answer": 2.3,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 1334000
   },
   {
    "id": "prot",
    "icon": "🦁",
    "name": "Maeneo ya hifadhi",
    "desc": "Hifadhi za taifa - Maasai Mara, Amboseli, Tsavo, inayofunika ~12% ya ardhi",
    "answer": 1.5,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.5,
    "answerHa": 870000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+betri (sasa)",
    "desc": "Solar ya kiwanda iliyounganishwa na gridi (~340 MW mwisho wa 2024) - gridi ya Kenya inatawaliwa na jotoardhi na maji",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.2,
    "step": 0.0001,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Kidokezo: gridi ya Kenya inafanya kazi zaidi kwa jotoardhi - solar bado ni ndogo"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+betri kwa umeme 100%",
    "desc": "Ardhi inayohitajika kwa solar+betri ya kiwanda kulisha gridi yote ya taifa ya Kenya 24/7 (~12 TWh/mwaka)",
    "answer": 0.014,
    "color": "#BA7517",
    "max": 0.3,
    "step": 0.001,
    "answerHa": 8120,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Cropland, tea, coffee and permanent crops - concentrated in the fertile central highlands and western Kenya",
    "answer": 28.5,
    "color": "#639922",
    "max": 45,
    "step": 0.5,
    "answerHa": 16530000
   },
   {
    "id": "past",
    "icon": "🐄",
    "name": "Permanent pasture",
    "desc": "Grassland and grazing - Maasai and other pastoral communities across the Rift Valley and southern rangelands",
    "answer": 21,
    "color": "#a8c46e",
    "max": 40,
    "step": 0.5,
    "answerHa": 12180000
   },
   {
    "id": "arid",
    "icon": "🏜️",
    "name": "Arid & semi-arid land",
    "desc": "Dryland scrub, savanna and desert in northern and eastern Kenya - over a third of the country",
    "answer": 36.5,
    "color": "#c9a85c",
    "max": 55,
    "step": 0.5,
    "answerHa": 21170000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Mainly highland forests including Mount Kenya, Aberdares and Mau - critical water towers for the region",
    "answer": 6.2,
    "color": "#3B6D11",
    "max": 15,
    "step": 0.5,
    "answerHa": 3596000
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & built",
    "desc": "Nairobi, Mombasa and other cities plus roads and infrastructure",
    "answer": 4,
    "color": "#73726c",
    "max": 12,
    "step": 0.5,
    "answerHa": 2320000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Lakes (Victoria, Turkana, Nakuru), rivers and wetlands",
    "answer": 2.3,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 1334000
   },
   {
    "id": "prot",
    "icon": "🦁",
    "name": "Protected areas",
    "desc": "National parks and game reserves - Maasai Mara, Amboseli, Tsavo, covering ~12% of the land",
    "answer": 1.5,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.5,
    "answerHa": 870000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale grid-connected solar PV (~340 MW end 2024) - Kenya's grid is dominated by geothermal and hydro",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.2,
    "step": 0.0001,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Hint: Kenya's grid runs mostly on geothermal - solar is still small"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Kenya's entire national grid 24/7 (~12 TWh/yr)",
    "answer": 0.014,
    "color": "#BA7517",
    "max": 0.3,
    "step": 0.001,
    "answerHa": 8120,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "sw": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ke.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Ardhi ya Kenya inatumiwaje?",
   "subtitle": "Ilipata msukumo kutoka <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">video fupi ya Dkt. Simon Clark kwenye YouTube</a> (kwa Kiingereza). Kadiria asilimia ya ardhi ya Kenya kwa kila kategoria - vitetemeko vimewekewa kikomo cha 100% jumla.",
   "disclaimer": "Takwimu za solar+betri ni jaribio la mawazo lililoundwa kwa msaada wa AI, si mapendekezo ya sera. Takwimu zote zinahusu mifumo ya kiwango cha viwanda iliyounganishwa na gridi. Kenya tayari inazalisha 85% ya umeme wake kutoka kwa nishati mbadala.",
   "noteLabel": "Kumbuka",
   "contextLabel": "Muktadha wa nchi",
   "countryNote": "Kenya tayari inazalisha 85% ya umeme wake wa gridi kutoka vyanzo mbadala, huku jotoardhi ikiwa msingi mkuu. Nishati ya jua bado haijatumika ipasavyo kulingana na uwezo wake - lakini upepo na jotoardhi zinatarajiwa kuendelea kuwa nguzo kuu za mustakabali wa nishati safi nchini Kenya. Takwimu za matumizi ya ardhi ni makadirio na zimetokana na data za Benki ya Dunia na FAO.",
   "submit": "Wasilisha makadirio yako",
   "play_again": "Cheza tena",
   "score": "Alama",
   "land_used": "Ardhi iliyotumika",
   "remaining": "Iliyobaki",
   "map_guess": "Makadirio yako - ramani ya uwiano (inasasishwa unapotelezesha)",
   "map_answer": "Matumizi halisi ya ardhi ya Kenya - ramani ya uwiano",
   "allocated": "/ 100% imegawanywa",
   "reveal": "Itafunuliwa baada ya kuwasilisha.",
   "out_of": "alama ya usahihi",
   "sol100_reveal": "uwezo wa ziada wa hifadhi kwa usiku na vipindi vya mawingu huongeza mara mbili eneo linalohitajika. Kenya tayari inapata 85% ya umeme wake wa gridi kutoka kwa nishati mbadala.",
   "grades": [
    [
     81,
     "🏆 Mtaalamu wa Kenya - unajua hadithi ya ardhi ya Afrika Mashariki kwa undani!"
    ],
    [
     61,
     "🌍 Imara sana - unaijua vizuri mandhari tofauti ya Kenya."
    ],
    [
     40,
     "🦁 Si mbaya! Wingi wa ardhi kame ya Kenya hushangazea watu wengi."
    ],
    [
     20,
     "🌵 Kenya ni kame zaidi inavyoonekana - zaidi ya theluthi moja ni kame au nusu kame."
    ],
    [
     0,
     "🤔 Inashangaza? Kenya ni moja wa viongozi wa nishati mbadala barani Afrika licha ya kuwa kame."
    ]
   ],
   "btn_label": "English",
   "country_label": "Kenya",
   "circle_label": "Ardhi inayohitajika",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ke.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Kenya's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Kenyan land for each category - sliders are capped at 100% total. Kenya is East Africa's most advanced energy market and a world leader in geothermal power.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Kenya already generates 85% of its grid electricity from renewables, with geothermal as the backbone. Solar is underdeployed relative to its potential - but wind and geothermal are likely to remain the cornerstones of Kenya's clean energy future. Land use figures are approximate and sourced from World Bank and FAO data.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Kenya already generates 85% of its grid electricity from renewables, with geothermal as the backbone. Solar is underdeployed relative to its potential - but wind and geothermal are likely to remain the cornerstones of Kenya's clean energy future. Land use figures are approximate and sourced from World Bank and FAO data.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Kenyan land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "storage overcapacity for nights and cloudy periods doubles the land needed vs panels alone. Kenya already gets 85% of its grid power from renewables - geothermal is its real superpower.",
   "grades": [
    [
     81,
     "🏆 Kenya expert - you know East Africa's most dynamic land story!"
    ],
    [
     61,
     "🌍 Very strong - sharp sense of Kenya's diverse landscape."
    ],
    [
     40,
     "🦁 Not bad! Kenya's semi-arid majority surprises most people."
    ],
    [
     20,
     "🌵 Kenya is drier than it looks - over a third is arid or semi-arid."
    ],
    [
     0,
     "🤔 Surprising? Kenya is one of Africa's renewable energy leaders despite being mostly dry."
    ]
   ],
   "btn_label": "Kiswahili",
   "country_label": "Kenya",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "sw": {
   "head": "🌍 Je, Kenya pekee ingeweza kuupa nguvu ulimwengu mzima?",
   "fit": "Kutoa nguvu kwa <strong>mahitaji yote ya umeme duniani</strong> (~TWh 31,000/mwaka) kwa kutumia hali ya jua ya Kenya yenyewe kungehitaji takriban <strong>hekta {haM}</strong> - <strong>{pct}%</strong> ya ardhi ya Kenya, inayoonyeshwa hapa chini kama duara la eneo sawa.",
   "overflow": "Kutoa nguvu kwa <strong>mahitaji yote ya umeme duniani</strong> (~TWh 31,000/mwaka) kwa kutumia hali ya jua ya Kenya yenyewe kungehitaji takriban <strong>hekta {haM}</strong> - mara <strong>{mult}× ya nchi nzima</strong>. Duara hapa chini, lililowekwa katikati ya Kenya, linaenea zaidi ya mipaka yake, likionyesha kuwa jiografia ya jua na hali ya hewa ni muhimu kama upatikanaji wa ardhi.",
   "foot": "Duara lenye mistari ni la mfano tu - lina ukubwa sahihi wa eneo, lakini si eneo halisi lililopendekezwa. Linapishana na mipaka iliyopo kwa ajili ya kipimo tu."
  },
  "en": {
   "head": "🌍 What if Kenya alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Kenya's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{pct}%</strong> of Kenya's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Kenya's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Kenya - it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "sw": "milioni",
   "en": "million"
  }
 }
};
