window.LANDGAME=window.LANDGAME||{};
LANDGAME.mg = {
 "title": "🇲🇬 How is Madagascar's land actually used? - Guessing Game",
 "code": "mg",
 "iso": "450",
 "alpha2": "mg",
 "lon": 47,
 "lat": -19,
 "ha": 58700000,
 "sol100Ha": 1800,
 "demandTwh": 3,
 "accent": "#639922",
 "langs": [
  "mg",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2023</strong> · World Bank · FAO · IRENA",
 "sources": "Sources: <a href=\"https://data.worldbank.org/country/MG\" target=\"_blank\">World Bank Development Indicators 2023</a> · <a href=\"https://www.fao.org/countryprofiles/index/en/?iso3=MDG\" target=\"_blank\">FAO Country Profile Madagascar</a> · <a href=\"https://www.irena.org/Energy-Transition/Country-Profiles/Madagascar\" target=\"_blank\">IRENA Madagascar country profile</a> · Madagascar total land area ~58.7M ha.",
 "cats": {
  "mg": [
   {
    "id": "past",
    "icon": "🐄",
    "name": "Ahitra sy toeram-pifehezana",
    "desc": "Ahitra maharitra sy fiandrasana biby - fampiasana tany lehibe indrindra any amin'ny Havoana Afovoany",
    "answer": 48.8,
    "color": "#a8c46e",
    "max": 65,
    "step": 0.5,
    "answerHa": 28645600
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Tanimboly sy voly maharitra",
    "desc": "Tanimbary, manioka, vanila, jirofo ary voly hafa any amin'ny faritra ambany sy morontsiraka",
    "answer": 16.2,
    "color": "#639922",
    "max": 30,
    "step": 0.5,
    "answerHa": 9509400
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Ala",
    "desc": "Ala voajanahary sisa - efa nanarona ny nosy manontolo, ankehitriny sisa mangina amin'ny andrefana sy atsinanana ihany",
    "answer": 21.3,
    "color": "#3B6D11",
    "max": 40,
    "step": 0.5,
    "answerHa": 12503100
   },
   {
    "id": "scrub",
    "icon": "🌿",
    "name": "Hazo madinika sy tany simba",
    "desc": "Savana, tany simba, lavaka ary faritra manavao taorian'ny tavy",
    "answer": 10.2,
    "color": "#888780",
    "max": 20,
    "step": 0.5,
    "answerHa": 5987400
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Tanana sy fotodrafitrasa",
    "desc": "Antananarivo sy tanàna hafa, lalana, ary fotodrafitrasa",
    "answer": 2,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 1174000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Rano anatiny",
    "desc": "Farihy, renirano ary tahiry - Lac Alaotra no toerana lehibe indrindra amin'ny fambolena vary",
    "answer": 1.5,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 880500
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+bateria (ankehitriny)",
    "desc": "Solar fotovoltaika lehibe mifandray amin'ny tambajotrana - setrasetra kely, ankamaroan'ny fametrahana kely tsy mifandray (~100 MW)",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.0001,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Torohevitra: ny solar lehibe eto Madagasikara dia kely dia kely - saika tsy misy tambajotrana"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+bateria ho an'ny herinaratra 100%",
    "desc": "Tany ilaina ho an'ny solar+bateria lehibe hamelona tambajotran'ny firenen-kerana 24h/7 - ny filana herinaratra ao Madagasikara dia ambany be (~3 TWh/taona)",
    "answer": 0.003,
    "color": "#BA7517",
    "max": 0.1,
    "step": 0.001,
    "answerHa": 1761,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "past",
    "icon": "🐄",
    "name": "Pastures & grazing",
    "desc": "Permanent meadows and rough grazing - dominant land use across the central highlands",
    "answer": 48.8,
    "color": "#a8c46e",
    "max": 65,
    "step": 0.5,
    "answerHa": 28645600
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Arable & permanent crops",
    "desc": "Rice paddies, cassava, vanilla, cloves and other crops in lowlands and coastal zones",
    "answer": 16.2,
    "color": "#639922",
    "max": 30,
    "step": 0.5,
    "answerHa": 9509400
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Remaining natural forest - once covered the whole island, now only eastern and western strips survive",
    "answer": 21.3,
    "color": "#3B6D11",
    "max": 40,
    "step": 0.5,
    "answerHa": 12503100
   },
   {
    "id": "scrub",
    "icon": "🌿",
    "name": "Shrubland & degraded",
    "desc": "Savanna, degraded land, lavaka erosion gullies and areas recovering from slash-and-burn",
    "answer": 10.2,
    "color": "#888780",
    "max": 20,
    "step": 0.5,
    "answerHa": 5987400
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & infrastructure",
    "desc": "Antananarivo and other cities, roads, and built infrastructure",
    "answer": 2,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 1174000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Lakes, rivers and reservoirs - Lake Alaotra is the largest rice-growing area",
    "answer": 1.5,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 880500
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale grid-connected solar PV - nascent sector, mostly small off-grid installations (~100 MW total)",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.0001,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Hint: Madagascar's grid-scale solar is tiny - the grid barely exists"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power a fully functioning national grid 24/7 - Madagascar's electricity demand is very low (~3 TWh/yr)",
    "answer": 0.003,
    "color": "#BA7517",
    "max": 0.1,
    "step": 0.001,
    "answerHa": 1761,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "mg": {
   "h1": "<img src=\"https://flagcdn.com/32x24/mg.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Ahoana no ampiasana ny tany eto Madagasikara?",
   "subtitle": "Nomen'ny <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">video fohy nataon'ny Dr. Simon Clark</a> (amin'ny teny anglisy). Andrandrao ny tahan'ny tany malagasy ho an'ny sokajy tsirairay - voafetra amin'ny 100% ny totalin'ny slider.",
   "disclaimer": "Ny isa solar+bateria dia fanatanjahan-tsaina nataon'ny AI, fa tsy torohevitry ny fanjakana. Ny isa rehetra dia mikasika rafitra solar-bateria lehibe mifandray amin'ny tambajotram-pamoahana herinaratra. Voafetra be ny tambajotran'i Madagasikara - latsaky ny 20% ny mponina no mahazo herinaratra.",
   "noteLabel": "Fanamarihana",
   "contextLabel": "Toe-javatra momba ny firenena",
   "countryNote": "Ny tambajotra elektrika eto Madagasikara dia voafetra be - latsaky ny 20% ny mponina no manana fidirana amin'ny herinaratra. Ny hoavin'ny angovo azo antoka dia mitaky fifangaroan'ny rano, masoandro ary rivotra, miaraka amin'ny fampiasam-bola lehibe amin'ny tambajotra. Ny fandripahana ala vokatry ny tavy no olana lehibe indrindra momba ny fampiasana ny tany eto amin'ny firenena. Ny angon-drakitra momba ny fampiasana ny tany dia tombana ary avy amin'ny Banky Iraisam-pirenena sy ny FAO.",
   "submit": "Alefa ny fanontaniana",
   "play_again": "Hilalao indray",
   "score": "Isa",
   "land_used": "Tany nampiasana",
   "remaining": "Sisa",
   "map_guess": "Ny andrandrainao - sarintany mifandraika (miova rehefa mameha)",
   "map_answer": "Fampiasana tany tena misy eto Madagasikara",
   "allocated": "/ 100% nozaraina",
   "reveal": "Haseho aorian'ny fandefasana.",
   "out_of": "isa fahamarinana",
   "sol100_reveal": "ny fitahirizana mitombo amin'ny alina sy andro rahona dia manohina indroa ny habaka ilaina raha oharina amin'ny panel irery. Saika tsy misy tambajotran'i Madagasikara - ny solar+bateria dia afaka manitsaka ny filàna tambajotran'andalan'ny fanaovana.",
   "grades": [
    [
     93,
     "🏆 Manam-pahaizana momba an'i Madagasikara - fantatrao tsara io nosy manokana io!"
    ],
    [
     70,
     "🌳 Tsara be - mahay tsara ny toe-piainana mora simba ao Madagasikara."
    ],
    [
     46,
     "🦎 Tsy ratsy! Ny fiainana voajanahary very eto Madagasikara dia isan'ny maika indrindra eran-tany."
    ],
    [
     23,
     "🌿 Mihoatra ny 70% fambolena - fa ankamaroan'ny dia osavin'ny fihemorana sy ny tavy."
    ],
    [
     0,
     "🤔 Mahagaga? I Madagasikara dia very mihoatra ny 90% ny alany tany am-boalohany."
    ]
   ],
   "btn_label": "English",
   "country_label": "Madagasikara",
   "circle_label": "Tany ilaina",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/mg.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Madagascar's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Malagasy land for each category - sliders are capped at 100% total. Madagascar is one of the world's most biodiverse islands, yet also one of the most heavily deforested.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Madagascar's grid is extremely limited - fewer than 20% of the population has access to electricity. A realistic energy future will require a mix of hydro, solar, and wind, alongside major grid investment. Deforestation driven by slash-and-burn agriculture (tavy) is the country's most urgent land use crisis. Land use figures are approximate and sourced from World Bank and FAO data.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Madagascar's grid is extremely limited - fewer than 20% of the population has access to electricity. A realistic energy future will require a mix of hydro, solar, and wind, alongside major grid investment. Deforestation driven by slash-and-burn agriculture (tavy) is the country's most urgent land use crisis. Land use figures are approximate and sourced from World Bank and FAO data.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Malagasy land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "storage overcapacity for nights and cloudy days doubles the land needed vs panels alone. Madagascar's grid barely exists - solar+battery could leapfrog the need for a conventional grid.",
   "grades": [
    [
     93,
     "🏆 Madagascar expert - you know this extraordinary island intimately!"
    ],
    [
     70,
     "🌳 Very strong - sharp sense of Madagascar's fragile landscape."
    ],
    [
     46,
     "🦎 Not bad! Madagascar's deforestation story is one of the world's most urgent."
    ],
    [
     23,
     "🌿 Over 70% agricultural - but most is threatened by erosion and slash-and-burn."
    ],
    [
     0,
     "🤔 Surprising? Madagascar has lost over 90% of its original forest to deforestation."
    ]
   ],
   "btn_label": "Malagasy",
   "country_label": "Madagascar",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "mg": {
   "head": "🌍 Ahoana raha i Madagasikara irery no manome herinaratra an'izao tontolo izao?",
   "fit": "Ny famatsiana ny <strong>filàna herinaratra eran-tany</strong> (~31.000 TWh/taona) amin'ny fampiasana ny toetry ny masoandron'i Madagasikara manokana dia mila tany efitra <strong>{haM} hekitara</strong> - <strong>{pct}%</strong> amin'ny faritanin'i Madagasikara, aseho eto ambany ho faribolana mitovy velarana.",
   "overflow": "Ny famatsiana ny <strong>filàna herinaratra eran-tany</strong> (~31.000 TWh/taona) amin'ny fampiasana ny toetry ny masoandron'i Madagasikara manokana dia mila tany efitra <strong>{haM} hekitara</strong> - <strong>{mult}× ny firenena manontolo</strong>. Ny faribolana eto ambany, mifantoka eo Madagasikara, dia mihoatra lavitra ny sisin-tanin'ny firenena, mampiseho fa ny jeografia masoandro sy ny toetr'andro dia zava-dehibe tahaka ny fisian'ny tany.",
   "foot": "Ny faribolana misy tsipika tapatapaka dia fanoharana fotsiny - voarefy araka ny velaran-tany marina, fa tsy toerana tena natolotra. Mifangaro amin'ny sisin-tany efa misy ho an'ny fandrefesana fotsiny."
  },
  "en": {
   "head": "🌍 What if Madagascar alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Madagascar's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{pct}%</strong> of Madagascar's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Madagascar's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Madagascar - it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "mg": "tapitrisa",
   "en": "million"
  }
 }
};
