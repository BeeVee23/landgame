window.LANDGAME=window.LANDGAME||{};
LANDGAME.eg = {
 "title": "🇪🇬 How is Egypt's land actually used? - Guessing Game",
 "code": "eg",
 "iso": "818",
 "alpha2": "eg",
 "lon": 30,
 "lat": 26.5,
 "ha": 100145000,
 "sol100Ha": 96250,
 "demandTwh": 175,
 "accent": "#c4a96b",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · FAO FAOSTAT · CAPMAS Egypt · IRENA · IEA",
 "sources": "Sources: <a href=\"https://www.fao.org/faostat/en/\" target=\"_blank\">FAO FAOSTAT 2022</a> · <a href=\"https://www.capmas.gov.eg/\" target=\"_blank\">CAPMAS Egypt</a> · <a href=\"https://www.irena.org/countries/Egypt\" target=\"_blank\">IRENA Egypt 2024</a> · <a href=\"https://www.iea.org/countries/egypt\" target=\"_blank\">IEA Egypt 2024</a> · Egypt total land area ~100.1M ha (excl. territorial waters).",
 "cats": {
  "ar": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "الصحراء والأراضي القاحلة",
    "desc": "الصحراء الغربية والصحراء الشرقية وصحراء سيناء - مصر إحدى أكثر دول العالم جفافاً؛ يُصنَّف معظمها ضمن مناطق مفرطة الجفاف تقلّ أمطارها السنوية عن 25 ملم",
    "answer": 92,
    "color": "#c4a96b",
    "max": 100,
    "step": 0.5,
    "answerHa": 92133400
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "الأراضي الزراعية",
    "desc": "وادي النيل ودلتاه - يُعدّ أخصب أراضٍ على وجه الأرض بفضل الطمي الذي يرسبه النيل منذ آلاف السنين؛ ويُغذّي هذا الشريط الضيق من الأرض أكثر من 105 ملايين نسمة",
    "answer": 3.6,
    "color": "#639922",
    "max": 10,
    "step": 0.1,
    "answerHa": 3605220
   },
   {
    "id": "scrub",
    "icon": "🌵",
    "name": "أراضٍ طبيعية وشبه قاحلة",
    "desc": "السواحل الشمالية والأراضي الهامشية وواحات الصحراء الغربية - تضمّ هذه الأراضي غطاءً نباتياً متفرقاً والمنطقة الساحلية المتوسطية بين الإسكندرية والحدود الليبية",
    "answer": 3,
    "color": "#b8a07a",
    "max": 10,
    "step": 0.1,
    "answerHa": 3004350
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "المناطق المبنية والطرق",
    "desc": "القاهرة الكبرى والإسكندرية والمدن الرئيسية وشبكة الطرق - تعدّ القاهرة الكبرى من أكثر مدن العالم كثافةً سكانية، وتضمّ نحو 20 مليون نسمة على مساحة ضيقة",
    "answer": 0.7,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 701015
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المسطحات المائية",
    "desc": "بحيرة ناصر ونهر النيل والبحيرات الساحلية في الدلتا - تبلغ مساحة بحيرة ناصر وحدها نحو 525,000 هكتار، مما يجعلها من أكبر البحيرات الصناعية في العالم",
    "answer": 0.7,
    "color": "#378ADD",
    "max": 4,
    "step": 0.1,
    "answerHa": 701015
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ملاعب الغولف",
    "desc": "حوالي 20 ملعب غولف في مصر - في القاهرة (نادي المعادي، كتامية داونز، دريم لاند) وفي المنتجعات السياحية على البحر الأحمر (شرم الشيخ، الغردقة، الجونة، العين السخنة). من أقدم الملاعب على الإطلاق في أفريقيا",
    "answer": 0.0013,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 1300,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "محطات الطاقة الشمسية (الحالية)",
    "desc": "الطاقة الشمسية الكهروضوئية الكبرى المتصلة بالشبكة مع بطاريات تخزين؛ تضمّ محطة بنبان بأسوان (~1.8 جيجاواط على 37 كم²) واحدةً من أكبر محطات الطاقة الشمسية في العالم",
    "answer": 0.01,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 10000,
    "isSolar": true,
    "solarNote": "تلميح: بنبان وحدها (~37 كم²) تشكّل معظم الطاقة الشمسية الكبرى في مصر"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "طاقة شمسية لـ 100% من الكهرباء",
    "desc": "المساحة اللازمة من الطاقة الشمسية + التخزين لتوليد كامل احتياجات مصر الكهربائية على مدار الساعة (~175 TWh/سنة) - في منطقة شمسية استثنائية كالصحراء الغربية",
    "answer": 0.096,
    "color": "#BA7517",
    "max": 5,
    "step": 0.005,
    "answerHa": 96250,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "يبلغ مناخ مصر المشمس ~550 هكتار/TWh - أفضل بكثير من ألمانيا (830) أو المملكة المتحدة (3333). تضاعف الطاقة الاحتياطية للتخزين المساحة مقارنةً بالألواح الشمسية وحدها. تمتلك مصر بالفعل محطة بنبان (~1.8 جيجاواط)، وتستهدف 42% من الطاقة المتجددة بحلول 2030"
   }
  ],
  "en": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert & arid land",
    "desc": "The Western Desert, Eastern Desert and Sinai - Egypt is one of the most arid countries on Earth; most of its territory is classified as hyperarid, receiving under 25 mm of rain per year",
    "answer": 92,
    "color": "#c4a96b",
    "max": 100,
    "step": 0.5,
    "answerHa": 92133400
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "The Nile Valley and Delta - among the most fertile on Earth, enriched by millennia of Nile silt deposits; this narrow green strip feeds over 105 million people in a country that is nearly all desert",
    "answer": 3.6,
    "color": "#639922",
    "max": 10,
    "step": 0.1,
    "answerHa": 3605220
   },
   {
    "id": "scrub",
    "icon": "🌵",
    "name": "Natural & semi-arid land",
    "desc": "Northern coastal margins, scattered oases and desert transitional zones - includes the Mediterranean coastal strip between Alexandria and the Libyan border, and the oases of the Western Desert",
    "answer": 3,
    "color": "#b8a07a",
    "max": 10,
    "step": 0.1,
    "answerHa": 3004350
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Greater Cairo, Alexandria and Egypt's cities, towns and road network - Greater Cairo alone houses ~20 million people in an extraordinarily dense urban zone along the Nile",
    "answer": 0.7,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 701015
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Lake Nasser, the Nile River and the Delta coastal lagoons - Lake Nasser alone covers ~525,000 ha, making it one of the world's largest artificial lakes, formed by the Aswan High Dam",
    "answer": 0.7,
    "color": "#378ADD",
    "max": 4,
    "step": 0.1,
    "answerHa": 701015
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 20 golf courses in Egypt - in Cairo (Maadi Club, Katameya Dunes, Dreamland) and Red Sea resorts (Sharm el-Sheikh, Hurghada, El Gouna, Ain Sokhna). Maadi Sporting Club is one of the oldest golf clubs in Africa",
    "answer": 0.0013,
    "color": "#5DCAA5",
    "max": 0.05,
    "step": 0.001,
    "answerHa": 1300,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Utility-scale grid-connected solar PV with battery storage; includes Benban Solar Park near Aswan (~1.8 GW across 37 km²), one of the world's largest solar installations",
    "answer": 0.01,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 10000,
    "isSolar": true,
    "solarNote": "Hint: Benban alone (~37 km²) accounts for most of Egypt's utility solar"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Egypt's entire grid 24/7 (~175 TWh/yr) - in Egypt's exceptional desert sunshine, this is a much smaller area than you might expect",
    "answer": 0.096,
    "color": "#BA7517",
    "max": 5,
    "step": 0.005,
    "answerHa": 96250,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Egypt's sunny climate needs ~550 ha/TWh - far less than Germany (830) or the UK (3,333). Storage overcapacity roughly doubles the land vs panels alone. Egypt already has Benban (~1.8 GW) and targets 42% renewable electricity by 2030"
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/eg.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي مصر فعلاً؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو قصير على يوتيوب لدكتور سايمون كلارك</a> (بالإنجليزية). خمّن نسبة أراضي مصر لكل فئة - مجموع المحددات لا يتجاوز 100%. مصر من أكثر المناظر الطبيعية تبايناً في العالم: شريط أخضر رفيع من الحضارة على طول النيل تحيط به صحراء شاسعة.",
   "disclaimer": "أرقام الطاقة الشمسية + التخزين هي تجربة فكرية أُعدّت بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. تشير جميع الأرقام إلى منظومات طاقة شمسية كبرى متصلة بالشبكة.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "يتمتع مصر بمورد شمسي استثنائي: محطة بنبان (~1.8 جيجاواط، 37 كم²) قرب أسوان من أكبر منشآت الطاقة الشمسية في العالم. تستهدف مصر 42% طاقة متجددة في الكهرباء بحلول 2030، معظمها من الرياح (خليج السويس) والطاقة الشمسية. بيانات استخدام الأراضي من فاو FAOSTAT 2022 والجهاز المركزي للتعبئة العامة والإحصاء (كابماس).",
   "submit": "إرسال جميع الإجابات",
   "play_again": "العب مرة أخرى",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك - خريطة مساحة تناسبية (تتحدث عند التمرير)",
   "map_answer": "استخدام الأراضي الفعلي في مصر - خريطة مساحة تناسبية",
   "allocated": "/ 100٪ مُخصَّص",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "نتيجة الدقة",
   "sol100_reveal": "يحتاج المناخ المشمس في مصر ~550 هكتار/TWh - أقل بكثير من ألمانيا (830) أو المملكة المتحدة (3333). تضاعف الطاقة الاحتياطية للتخزين المساحة مقارنةً بالألواح الشمسية وحدها. تمتلك مصر بالفعل محطة بنبان (~1.8 جيجاواط) وتستهدف 42% طاقة متجددة بحلول 2030.",
   "grades": [
    [
     86,
     "🌍 خبير! أنت تعرف توزيع أراضي مصر الاستثنائي بدقة مدهشة."
    ],
    [
     64,
     "☀️ ممتاز جداً - فهم رائع لمدى هيمنة الصحراء على مصر."
    ],
    [
     43,
     "🏜️ ليس سيئاً! معظم الناس يُقلّلون من ضآلة الأراضي المزروعة في مصر."
    ],
    [
     21,
     "🌾 هل تعلم؟ تُزرع 3.6٪ فقط من أراضي مصر - ومع ذلك تُطعم 105 ملايين نسمة."
    ],
    [
     0,
     "🤔 مفاجأة؟ أكثر من 92٪ من مصر صحراء. وادي النيل من أشد مناطق الزراعة كثافةً على وجه الأرض."
    ]
   ],
   "btn_label": "English",
   "country_label": "مصر",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "عرض مكبّر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/eg.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Egypt's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Egyptian land for each category - sliders are capped at 100% total. Egypt is one of the world's most dramatically divided landscapes: a thin green ribbon of civilisation along the Nile surrounded by vast desert.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Egypt's solar resource is exceptional: Benban Solar Park (~1.8 GW, 37 km²) near Aswan is one of the world's largest solar installations. Egypt targets 42% renewable electricity by 2030, mostly through wind (Gulf of Suez) and solar. Land use figures from FAO FAOSTAT 2022 and Egypt's Central Agency for Public Mobilization and Statistics (CAPMAS).",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Egyptian land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Egypt's sunny climate needs ~550 ha/TWh - far less than Germany (830 ha/TWh) or the UK (3,333 ha/TWh). Storage overcapacity roughly doubles the land vs panels alone. Egypt already has Benban (~1.8 GW) and targets 42% renewable electricity by 2030.",
   "grades": [
    [
     86,
     "🌍 Expert! You know Egypt's extraordinary land split with impressive precision."
    ],
    [
     64,
     "☀️ Very strong - great grasp of just how dominant the desert really is."
    ],
    [
     43,
     "🏜️ Not bad! Most people underestimate how little of Egypt is actually cultivated."
    ],
    [
     21,
     "🌾 Did you know? Only 3.6% of Egypt is farmed - yet it feeds 105 million people."
    ],
    [
     0,
     "🤔 Surprising? Over 92% of Egypt is desert. The Nile Valley is one of Earth's most intensively farmed zones."
    ]
   ],
   "btn_label": "عربي",
   "country_label": "Egypt",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو أمدّت مصر وحدها العالم بالكهرباء؟",
   "fit": "باستخدام الظروف الشمسية لمصر (~550 هكتار/TWh)، يحتاج تغطية <strong>الطلب العالمي على الكهرباء</strong> (~31,000 TWh/سنة) إلى حوالي <strong>{haM} هكتار</strong> - أي <strong>{pct}٪ فقط من مساحة أراضي مصر</strong>، موضحة أدناه كدائرة بمساحة مكافئة. تقع تلك المساحة بأكملها داخل الصحراء الغربية المصرية.",
   "stat2": "يجعل مزيجُ الصحراء الشاسعة والشمس الاستثنائية في مصر (~2,200 كيلوواط ساعة/م²/سنة) هذه التجربة الفكرية الأكثر إقناعاً في اللعبة. في الواقع، تستثمر مصر بكثافة في الطاقة الشمسية والرياح (خليج السويس)، وتُصدّر الكهرباء بالفعل إلى الدول المجاورة.",
   "foot": "الدائرة المنقّطة توضيحية - بحجم المساحة الصحيحة، وليست موقعاً مقترحاً فعلياً. بالنظر إلى المورد الشمسي الاستثنائي لمصر وصحرائها الشاسعة الفارغة، فإن هذه التجربة الفكرية أقل خيالاً مما هي عليه في معظم البلدان."
  },
  "en": {
   "head": "🌍 What if Egypt alone powered the whole world?",
   "fit": "At Egypt's solar conditions (~550 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} hectares</strong> - just <strong>{pct}% of Egypt's land area</strong>, shown below as a circle of equivalent area. That entire patch sits within Egypt's own Western Desert.",
   "stat2": "Egypt's combination of vast empty desert and exceptional sunshine (~2,200 kWh/m²/yr) makes this the most compelling solar thought experiment in the game. In reality, Egypt is investing heavily in solar and wind (Gulf of Suez), and already exports electricity to neighbouring countries.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. Given Egypt's extraordinary solar resource and vast empty desert, this thought experiment is less fanciful than for most countries."
  }
 }
};
