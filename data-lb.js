window.LANDGAME=window.LANDGAME||{};
LANDGAME.lb = {
 "title": "🇱🇧 How is Lebanon's land actually used? — Guessing Game",
 "code": "lb",
 "iso": "422",
 "alpha2": "lb",
 "lon": 35.8,
 "lat": 33.9,
 "ha": 1040000,
 "sol100Ha": 10000,
 "demandTwh": 15,
 "accent": "#639922",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2024</strong> · World Bank · FAO · LCEC · IRENA",
 "sources": "Sources: <a href=\"https://data.worldbank.org/country/LB\" target=\"_blank\">World Bank Development Indicators 2023</a> · <a href=\"https://www.fao.org/countryprofiles/index/en/?iso3=LBN\" target=\"_blank\">FAO Lebanon Country Profile</a> · Lebanon total land area ~1.04M ha.",
 "cats": {
  "ar": [
   {
    "id": "past",
    "icon": "🐄",
    "name": "مراعٍ دائمة",
    "desc": "أراضي رعوية ومروج وأعشاب جبلية — تهيمن على سهل البقاع والمنحدرات الجبلية",
    "answer": 39.29,
    "color": "#a8c46e",
    "max": 60,
    "step": 0.5,
    "answerHa": 408616
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "أراضٍ زراعية",
    "desc": "محاصيل الحبوب والخضروات وبساتين الفاكهة والأراضي المتروكة مؤقتاً",
    "answer": 25.54,
    "color": "#639922",
    "max": 45,
    "step": 0.5,
    "answerHa": 265616
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "غابات وأحراج",
    "desc": "غابات طبيعية وأرز لبنان ومناطق إعادة التشجير — تتعافى بعد عقود من الخسارة",
    "answer": 13.75,
    "color": "#3B6D11",
    "max": 30,
    "step": 0.5,
    "answerHa": 143000
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "مناطق حضرية",
    "desc": "بيروت وطرابلس وصيدا والامتداد العمراني المحيط — كثيف بالمعايير الإقليمية",
    "answer": 13.75,
    "color": "#73726c",
    "max": 30,
    "step": 0.5,
    "answerHa": 143000
   },
   {
    "id": "nat",
    "icon": "🏔️",
    "name": "صخور عارية ومناطق طبيعية",
    "desc": "تضاريس جبلية عالية ومنحدرات صخرية وأراضٍ غير صالحة للزراعة",
    "answer": 4.03,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 41912
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المياه الداخلية",
    "desc": "أنهار وبحيرات (بما فيها بحيرة القرعون) وخزانات",
    "answer": 1.77,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 18408
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "الطاقة الشمسية+البطاريات (الحالية)",
    "desc": "الطاقة الشمسية على الأسطح والمنشآت الصغيرة — استجابة مدنية لأزمة الكهرباء (~1 GW نهاية 2024). ملاحظة: معظمها على الأسطح وغير متصلة بالشبكة",
    "answer": 1.87,
    "color": "#EF9F27",
    "max": 8,
    "step": 0.1,
    "answerHa": 19448,
    "isSolar": true,
    "solarNote": "ملاحظة: هذا طاقة شمسية على الأسطح — وليس طاقة شمسية متصلة بالشبكة"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "الطاقة الشمسية+البطاريات لـ100% كهرباء",
    "desc": "الأرض اللازمة لتوفير طاقة شمسية+بطاريات لتغطية كامل الطلب على الكهرباء اللبنانية 24/7 — قابل للتحقيق بشكل ملحوظ نظراً للموارد الشمسية اللبنانية",
    "answer": 1,
    "color": "#BA7517",
    "max": 5,
    "step": 0.1,
    "answerHa": 10400,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "past",
    "icon": "🐄",
    "name": "Permanent pasture",
    "desc": "Grazing land, meadows and rough pasture — dominates the Bekaa Valley and mountain slopes",
    "answer": 39.29,
    "color": "#a8c46e",
    "max": 60,
    "step": 0.5,
    "answerHa": 408616
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Arable land & crops",
    "desc": "Cereal crops, vegetables, fruit orchards and temporarily fallow land",
    "answer": 25.54,
    "color": "#639922",
    "max": 45,
    "step": 0.5,
    "answerHa": 265616
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & woodland",
    "desc": "Natural forests, cedar reserves and reforested areas — recovering after decades of loss",
    "answer": 13.75,
    "color": "#3B6D11",
    "max": 30,
    "step": 0.5,
    "answerHa": 143000
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & built-up",
    "desc": "Beirut, Tripoli, Sidon and surrounding urban sprawl — dense by regional standards",
    "answer": 13.75,
    "color": "#73726c",
    "max": 30,
    "step": 0.5,
    "answerHa": 143000
   },
   {
    "id": "nat",
    "icon": "🏔️",
    "name": "Bare rock & natural areas",
    "desc": "High mountain terrain, rocky slopes and uncultivable land",
    "answer": 4.03,
    "color": "#888780",
    "max": 15,
    "step": 0.5,
    "answerHa": 41912
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Rivers, lakes (including Lake Qaraoun) and reservoirs",
    "answer": 1.77,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 18408
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Rooftop and small-scale solar PV — citizen-led response to the grid crisis (~1 GW end 2024). Note: mostly off-grid rooftop, not utility-scale",
    "answer": 1.87,
    "color": "#EF9F27",
    "max": 8,
    "step": 0.1,
    "answerHa": 19448,
    "isSolar": true,
    "solarNote": "Note: this is rooftop/small-scale — not grid-connected utility solar"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to reliably cover all Lebanese electricity demand 24/7 — remarkably achievable given Lebanon's solar resource",
    "answer": 1,
    "color": "#BA7517",
    "max": 5,
    "step": 0.1,
    "answerHa": 10400,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/lb.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي لبنان؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو الدكتور سايمون كلارك على يوتيوب</a> (بالإنجليزية). خمّن نسبة الأراضي اللبنانية لكل فئة — الشرائح محدودة بـ 100% إجمالاً. لبنان صغير جداً (~1 مليون هكتار، أصغر من يوركشاير) لذا تبدو النسب مختلفة هنا.",
   "disclaimer": "أرقام الطاقة الشمسية+البطاريات هي تجربة فكرية بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. جميع الأرقام تشير إلى أنظمة متصلة بالشبكة على نطاق واسع. الطاقة الشمسية اللبنانية الحالية هي بصورة شبه كاملة على الأسطح وغير متصلة بالشبكة.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "الطاقة الشمسية الحالية في لبنان هي في معظمها أسطح منازل غير متصلة بالشبكة — وهي مثيرة للإعجاب من حيث الصمود، لكنها ليست بديلاً عن شبكة وطنية فعّالة. يتطلب مستقبل طاقة واقعي للبنان إعادة بناء الشبكة، وتنويع مصادر الطاقة المتجددة بما في ذلك الرياح، واستثمارات دولية كبيرة.",
   "submit": "إرسال تخميناتي",
   "play_again": "العب مجدداً",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك — خريطة نسبية (تتحدث أثناء التمرير)",
   "map_answer": "الاستخدام الفعلي للأراضي اللبنانية — خريطة نسبية",
   "allocated": "/ 100% موزّعة",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "درجة الدقة",
   "sol100_reveal": "لشبكة كهربائية وطنية تعمل بشكل كامل. لبنان لديه بالفعل ~1.9% طاقة شمسية على الأسطح، لكنها غير متصلة بالشبكة ولا يمكنها تعويض الطاقة الشمسية على نطاق واسع.",
   "grades": [
    [
     93,
     "🏆 خبير في لبنان — تعرف هذا البلد الصغير بتفاصيل رائعة!"
    ],
    [
     70,
     "🌿 قوي جداً — إدراك حاد للمشهد اللبناني."
    ],
    [
     46,
     "🌄 ليس سيئاً! تنوع لبنان يفاجئ كثيرين — جبال وساحل وسهل في بلد صغير."
    ],
    [
     23,
     "🏔️ لبنان يحوي الكثير في 10,000 كم² — إنه أكثر زراعياً مما يتوقع معظم الناس."
    ],
    [
     0,
     "🤔 مفاجئ؟ رغم صغره ومظهره الحضري، معظم لبنان مراعٍ وأراضٍ زراعية."
    ]
   ],
   "btn_label": "English",
   "country_label": "لبنان",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/lb.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Lebanon's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Lebanese land for each category — sliders are capped at 100% total. Lebanon is tiny (~1M ha, smaller than Yorkshire) so percentages feel very different here.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Lebanon's existing solar is almost entirely off-grid rooftop — impressive for resilience, but not a substitute for a functioning national grid. A realistic energy future for Lebanon will require grid reconstruction, diverse renewables including wind, and significant international investment.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Lebanon's existing solar is almost entirely off-grid rooftop — impressive for resilience, but not a substitute for a functioning national grid. A realistic energy future for Lebanon will require grid reconstruction, diverse renewables including wind, and significant international investment.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Lebanese land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "for a fully functioning grid. Lebanon already has ~1.9% in rooftop solar, but that's off-grid and can't substitute for utility-scale grid power.",
   "grades": [
    [
     93,
     "🏆 Lebanon expert — you know this small country in remarkable detail!"
    ],
    [
     70,
     "🌿 Very strong — sharp sense of the Lebanese landscape."
    ],
    [
     46,
     "🌄 Not bad! Lebanon's diversity surprises many — mountains, coast, and valley all in one tiny country."
    ],
    [
     23,
     "🏔️ Lebanon packs a lot into 10,000 km² — it's more agricultural than most expect."
    ],
    [
     0,
     "🤔 Surprising? Despite being so small and urban-feeling, Lebanon is mostly pasture and farmland."
    ]
   ],
   "btn_label": "العربية",
   "country_label": "Lebanon",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو زوّد لبنان وحده العالم بأكمله بالكهرباء؟",
   "fit": "تزويد كامل <strong>الطلب العالمي على الكهرباء</strong> (~31,000 تيراواط ساعة/سنة) باستخدام ظروف لبنان الشمسية الخاصة سيحتاج إلى حوالي <strong>{haM} هكتار</strong> — <strong>{pct}%</strong> من مساحة لبنان، موضحة أدناه كدائرة بمساحة معادلة.",
   "overflow": "تزويد كامل <strong>الطلب العالمي على الكهرباء</strong> (~31,000 تيراواط ساعة/سنة) باستخدام ظروف لبنان الشمسية الخاصة سيحتاج إلى حوالي <strong>{haM} هكتار</strong> — أي <strong>{mult}× مساحة البلاد بأكملها</strong>. الدائرة أدناه، المتمركزة حول لبنان، تمتد بكثير خارج حدوده، مما يوضح أن الجغرافيا الشمسية والمناخ مهمان بقدر أهمية توفر الأرض.",
   "foot": "الدائرة المنقطة توضيحية — بالحجم الصحيح للمساحة، لكنها ليست موقعاً مقترحاً فعلياً. تتداخل مع الحدود الحالية لأغراض المقياس فقط."
  },
  "en": {
   "head": "🌍 What if Lebanon alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Lebanon's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Lebanon's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Lebanon's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Lebanon — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "ar": "مليون",
   "en": "million"
  }
 }
};
