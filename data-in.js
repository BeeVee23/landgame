window.LANDGAME=window.LANDGAME||{};
LANDGAME.in = {
 "title": "🇮🇳 How is India's land actually used? — Guessing Game",
 "code": "in",
 "iso": "356",
 "alpha2": "in",
 "lon": 79,
 "lat": 22,
 "ha": 328700000,
 "sol100Ha": 1200000,
 "demandTwh": 1900,
 "accent": "#639922",
 "langs": [
  "hi",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–23</strong> · DA&amp;FW · MNRE · Mercom India",
 "sources": "Sources: <a href=\"https://desagri.gov.in/document-report-category/land-use-statistics-at-a-glance/\" target=\"_blank\">DA&amp;FW Land Use Statistics at a Glance 2022–23</a> · <a href=\"https://mnre.gov.in/en/annual-report/\" target=\"_blank\">Ministry of New and Renewable Energy (MNRE) 2024</a> · India total land area ~328.7M ha.",
 "cats": {
  "hi": [
   {
    "id": "crop",
    "icon": "🌾",
    "name": "बुवाई क्षेत्र",
    "desc": "किसी भी वर्ष वास्तव में फसल के अंतर्गत भूमि — भारतीय कृषि की रीढ़",
    "answer": 44.77,
    "color": "#639922",
    "max": 60,
    "step": 0.5,
    "answerHa": 147158990
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "वन",
    "desc": "आरक्षित वन, संरक्षित वन और अवर्गीकृत वनों सहित दर्ज वन क्षेत्र",
    "answer": 24.99,
    "color": "#3B6D11",
    "max": 40,
    "step": 0.5,
    "answerHa": 82142130
   },
   {
    "id": "fallow",
    "icon": "🟤",
    "name": "परती और कृषि योग्य बंजर",
    "desc": "अस्थायी रूप से परती कृषि भूमि, पुरानी परती, और फसल के अंतर्गत लाई जा सकने वाली भूमि",
    "answer": 11.45,
    "color": "#c9a85c",
    "max": 25,
    "step": 0.5,
    "answerHa": 37636150
   },
   {
    "id": "barren",
    "icon": "🏔️",
    "name": "बंजर और अकृष्ट भूमि",
    "desc": "बंजर पथरीली भूमि, खड़ी पर्वत ढलानें, मरुस्थल और अकृष्य भूमि",
    "answer": 6.25,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 20543750
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "गैर-कृषि उपयोग",
    "desc": "शहरी क्षेत्र, सड़कें, रेलवे, उद्योग, नहरें — सभी निर्मित और बुनियादी ढाँचे की भूमि",
    "answer": 5.21,
    "color": "#73726c",
    "max": 15,
    "step": 0.5,
    "answerHa": 17125270
   },
   {
    "id": "pasture",
    "icon": "🐄",
    "name": "स्थायी चरागाह",
    "desc": "स्थायी चरागाह, अन्य चराई भूमि और उपवन",
    "answer": 4.16,
    "color": "#a8c46e",
    "max": 12,
    "step": 0.5,
    "answerHa": 13673920
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "वृक्ष फसलें व जल",
    "desc": "विविध वृक्ष फसलें, उपवन और अंतर्देशीय जल निकाय",
    "answer": 3.12,
    "color": "#378ADD",
    "max": 10,
    "step": 0.5,
    "answerHa": 10255440
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "सौर+बैटरी (वर्तमान)",
    "desc": "उपयोगिता-स्तर ग्राउंड-माउंटेड सौर PV बैटरी भंडारण के साथ, ग्रिड-कनेक्टेड (2024 अंत, ~79 GW)",
    "answer": 0.05,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.005,
    "answerHa": 164350,
    "isSolar": true,
    "solarNote": "संकेत: केवल उपयोगिता-स्तर ग्रिड-कनेक्टेड — भारत विशाल है"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "100% बिजली के लिए सौर+बैटरी",
    "desc": "भारत के पूरे राष्ट्रीय ग्रिड को 24/7 बिजली देने के लिए उपयोगिता-स्तर सौर+बैटरी के लिए आवश्यक भूमि (~1,900 TWh/वर्ष)",
    "answer": 0.37,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 1216190,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "crop",
    "icon": "🌾",
    "name": "Net area sown",
    "desc": "Land actually under crops in any given year — the backbone of Indian agriculture",
    "answer": 44.77,
    "color": "#639922",
    "max": 60,
    "step": 0.5,
    "answerHa": 147158990
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Recorded forest area including reserved forests, protected forests and unclassed forests",
    "answer": 24.99,
    "color": "#3B6D11",
    "max": 40,
    "step": 0.5,
    "answerHa": 82142130
   },
   {
    "id": "fallow",
    "icon": "🟤",
    "name": "Fallow & culturable waste",
    "desc": "Temporarily fallow cropland, old fallows, and land capable of being brought under crops",
    "answer": 11.45,
    "color": "#c9a85c",
    "max": 25,
    "step": 0.5,
    "answerHa": 37636150
   },
   {
    "id": "barren",
    "icon": "🏔️",
    "name": "Barren & uncultured land",
    "desc": "Barren rocky land, steep mountain slopes, desert, and unculturable land",
    "answer": 6.25,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 20543750
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Non-agricultural use",
    "desc": "Urban areas, roads, railways, industry, canals — all built and infrastructure land",
    "answer": 5.21,
    "color": "#73726c",
    "max": 15,
    "step": 0.5,
    "answerHa": 17125270
   },
   {
    "id": "pasture",
    "icon": "🐄",
    "name": "Permanent pastures",
    "desc": "Permanent pastures, other grazing land and groves",
    "answer": 4.16,
    "color": "#a8c46e",
    "max": 12,
    "step": 0.5,
    "answerHa": 13673920
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Misc. tree crops & water",
    "desc": "Miscellaneous tree crops, groves, and inland water bodies",
    "answer": 3.12,
    "color": "#378ADD",
    "max": 10,
    "step": 0.5,
    "answerHa": 10255440
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (end 2024, ~79 GW utility-scale)",
    "answer": 0.05,
    "color": "#EF9F27",
    "max": 1,
    "step": 0.005,
    "answerHa": 164350,
    "isSolar": true,
    "solarNote": "Hint: utility-scale grid-connected only — India is huge"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power India's entire national grid 24/7 (~1,900 TWh/yr) — roughly 2x panels-only due to storage overcapacity",
    "answer": 0.37,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 1216190,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "hi": {
   "h1": "<img src=\"https://flagcdn.com/32x24/in.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> भारत की भूमि का उपयोग कैसे होता है?",
   "subtitle": "<a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">डॉ. साइमन क्लार्क के YouTube शॉर्ट</a> (अंग्रेज़ी में) से प्रेरित। प्रत्येक श्रेणी के लिए भारतीय भूमि का प्रतिशत अनुमान लगाएं — स्लाइडर 100% तक सीमित हैं। भारत दुनिया का सबसे अधिक आबादी वाला देश और सबसे बड़े कृषि उत्पादकों में से एक है।",
   "disclaimer": "सौर+बैटरी के आँकड़े AI की सहायता से उत्पन्न एक विचार प्रयोग हैं, नीति अनुशंसा नहीं। सभी आँकड़े उपयोगिता-स्तर, ग्रिड-कनेक्टेड प्रणालियों से संबंधित हैं। भूमि उपयोग के आँकड़े भारत सरकार के आधिकारिक आँकड़ों पर आधारित हैं।",
   "noteLabel": "नोट",
   "contextLabel": "देश का संदर्भ",
   "countryNote": "भारत के ऊर्जा भविष्य के लिए विविध नवीकरणीय स्रोतों की आवश्यकता होगी — इसके पास असाधारण पवन संसाधन हैं (विशेष रूप से तटों और राजस्थान में), महत्वपूर्ण जलविद्युत क्षमता है, और यह सौर व पवन ऊर्जा दोनों का तेज़ी से विस्तार कर रहा है। भूमि उपयोग के आंकड़े अनुमानित हैं और भारत सरकार के आधिकारिक आंकड़ों से लिए गए हैं।",
   "submit": "अनुमान जमा करें",
   "play_again": "फिर खेलें",
   "score": "स्कोर",
   "land_used": "भूमि उपयोग",
   "remaining": "शेष",
   "map_guess": "आपके अनुमान — आनुपातिक क्षेत्र मानचित्र (स्लाइड करते समय अपडेट होता है)",
   "map_answer": "भारत का वास्तविक भूमि उपयोग — आनुपातिक क्षेत्र मानचित्र",
   "allocated": "/ 100% आवंटित",
   "reveal": "जमा करने के बाद प्रकट होगा।",
   "out_of": "सटीकता स्कोर",
   "sol100_reveal": "रातों और बादल के दिनों के लिए भंडारण की अतिरिक्त क्षमता, केवल पैनलों की तुलना में आवश्यक भूमि को लगभग दोगुना कर देती है।",
   "grades": [
    [
     81,
     "🏆 भारत विशेषज्ञ — आप दुनिया की सबसे जटिल भूमि उपयोग कहानियों में से एक को विस्तार से जानते हैं!"
    ],
    [
     61,
     "🌾 बहुत अच्छा — भारतीय उपमहाद्वीप की तीक्ष्ण समझ।"
    ],
    [
     40,
     "🌿 बुरा नहीं! भारत का भूमि उपयोग एक अरब से अधिक लोगों को उल्लेखनीय दक्षता के साथ संतुलित करता है।"
    ],
    [
     20,
     "🏙️ भारत अपने शहरों से कहीं अधिक कृषि प्रधान और वनाच्छादित है।"
    ],
    [
     0,
     "🤔 आश्चर्यजनक? भारत का लगभग आधा हिस्सा 1.4 अरब लोगों को खिलाता है — एक असाधारण उपलब्धि।"
    ]
   ],
   "btn_label": "English",
   "country_label": "भारत",
   "circle_label": "आवश्यक भूमि क्षेत्र",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/in.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is India's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Indian land for each category — sliders are capped at 100% total. India is the world's most populous country and one of its largest agricultural producers.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. India's energy future will require diverse renewables — it has exceptional wind resources (particularly along the coasts and in Rajasthan), significant hydropower, and is rapidly expanding both solar and wind. Land use figures are approximate and sourced from Government of India official statistics.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "India's energy future will require diverse renewables — it has exceptional wind resources (particularly along the coasts and in Rajasthan), significant hydropower, and is rapidly expanding both solar and wind. Land use figures are approximate and sourced from Government of India official statistics.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Indian land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "storage overcapacity for nights and cloudy days roughly doubles the land needed vs panels alone.",
   "grades": [
    [
     81,
     "🏆 India expert — you know one of the world's most complex land use stories!"
    ],
    [
     61,
     "🌾 Very strong — sharp sense of the Indian subcontinent."
    ],
    [
     40,
     "🌿 Not bad! India's land use balances a billion+ people with remarkable efficiency."
    ],
    [
     20,
     "🏙️ India is more agricultural and forested than its cities suggest."
    ],
    [
     0,
     "🤔 Surprising? Nearly half of India feeds 1.4 billion people — an extraordinary achievement."
    ]
   ],
   "btn_label": "हिन्दी",
   "country_label": "India",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "hi": {
   "head": "🌍 अगर भारत अकेले पूरी दुनिया को बिजली दे, तो क्या होगा?",
   "fit": "<strong>वैश्विक बिजली मांग</strong> (~31,000 TWh/वर्ष) को भारत की अपनी सौर परिस्थितियों का उपयोग करके पूरा करने के लिए लगभग <strong>{haM} हेक्टेयर</strong> की आवश्यकता होगी — भारत के भूमि क्षेत्र का <strong>{pct}%</strong>, नीचे समतुल्य क्षेत्रफल के एक वृत्त के रूप में दिखाया गया है।",
   "overflow": "<strong>वैश्विक बिजली मांग</strong> (~31,000 TWh/वर्ष) को भारत की अपनी सौर परिस्थितियों का उपयोग करके पूरा करने के लिए लगभग <strong>{haM} हेक्टेयर</strong> की आवश्यकता होगी — यानी <strong>पूरे देश का {mult}× गुना</strong>। नीचे का वृत्त, भारत पर केंद्रित, देश की अपनी सीमाओं से काफी आगे फैलता है, जो दर्शाता है कि सौर भूगोल और जलवायु भूमि उपलब्धता जितनी ही महत्वपूर्ण हैं।",
   "foot": "बिंदीदार वृत्त केवल उदाहरणात्मक है — सही भूमि क्षेत्र के अनुसार आकार दिया गया है, लेकिन यह कोई वास्तविक प्रस्तावित स्थान नहीं है। यह केवल पैमाने के लिए मौजूदा सीमाओं को ओवरलैप करता है।"
  },
  "en": {
   "head": "🌍 What if India alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using India's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of India's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using India's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on India — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "hi": "मिलियन",
   "en": "million"
  }
 }
};
