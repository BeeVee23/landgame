window.LANDGAME=window.LANDGAME||{};
LANDGAME.ma = {
 "title": "🇲🇦 How is Morocco's land actually used? — Guessing Game",
 "code": "ma",
 "iso": "504",
 "alpha2": "ma",
 "lon": -6,
 "lat": 31.5,
 "ha": 44630000,
 "sol100Ha": 18450,
 "demandTwh": 41,
 "accent": "#c4a96b",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2026</strong> · FAO FAOSTAT · World Bank · IRENA Morocco Country Profile · Enerdata",
 "sources": "Sources: <a href=\"https://www.fao.org/faostat/en/#data/RL\" target=\"_blank\">FAO FAOSTAT Land Use 2023</a> · <a href=\"https://data.worldbank.org/country/morocco\" target=\"_blank\">World Bank Morocco</a> · <a href=\"https://www.irena.org/-/media/Files/IRENA/Agency/Statistics/Statistical_Profiles/Africa/Morocco_Africa_RE_SP.pdf\" target=\"_blank\">IRENA Morocco Country Profile 2023</a> · <a href=\"https://en.wikipedia.org/wiki/Xlinks_Morocco%E2%80%93UK_Power_Project\" target=\"_blank\">Xlinks Morocco-UK Power Project</a> · <a href=\"https://www.enerdata.net/\" target=\"_blank\">Enerdata</a> · Morocco total land area ~44.6M ha (446,300 km², excl. Western Sahara).",
 "cats": {
  "ar": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "الأراضي الزراعية والمراعي",
    "desc": "تشمل هذه الفئة الأراضي المزروعة والمراعي شبه القاحلة الشاسعة التي تغطي جزءًا كبيرًا من المغرب — فالمراعي وحدها تمثل الجزء الأكبر منها، وليس الحقول المزروعة فقط، مما يجعل هذا الرقم أعلى بكثير مما يتوقعه معظم الناس",
    "answer": 66.74,
    "color": "#639922",
    "max": 85,
    "step": 0.5,
    "answerHa": 29793842
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "الغابات",
    "desc": "غابات جبال الأطلس والريف، وأشجار الأرز والصنوبر والفلين — المغرب من أقل دول شمال إفريقيا تحرجًا نسبةً إلى مساحته، إذ يواجه ضغطًا مستمرًا من الرعي الجائر والتصحر",
    "answer": 12.94,
    "color": "#3B6D11",
    "max": 25,
    "step": 0.3,
    "answerHa": 5775782
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "المناطق العمرانية والطرق",
    "desc": "الدار البيضاء والرباط ومراكش وفاس، وشبكة الطرق والسكك الحديدية المتنامية بسرعة — تتركز غالبية سكان المغرب على طول الساحل الأطلسي والمتوسطي",
    "answer": 2.5,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 1115750
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المسطحات المائية",
    "desc": "أنهار وبحيرات وسدود محدودة نسبيًا — يعاني المغرب من ندرة مائية متزايدة، وقد شيّد مئات السدود لتخزين مياه الأمطار الموسمية غير المنتظمة",
    "answer": 0.3,
    "color": "#378ADD",
    "max": 3,
    "step": 0.05,
    "answerHa": 133890
   },
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "الصحراء والجبال والأراضي القاحلة الأخرى",
    "desc": "الامتداد الشمالي للصحراء الكبرى جنوبًا وشرقًا، إلى جانب المرتفعات الجبلية القاحلة — هذه الفئة تضم الأراضي القاحلة الحقيقية غير المصنفة كمراعي",
    "answer": 17.504,
    "color": "#c4a96b",
    "max": 35,
    "step": 0.5,
    "answerHa": 7814311
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ملاعب الغولف",
    "desc": "حوالي 45 ملعب غولف — كان الملك الراحل الحسن الثاني من عشاق هذه الرياضة، مما جعل المغرب وجهة راسخة لسياحة الغولف في شمال إفريقيا",
    "answer": 0.006,
    "color": "#5DCAA5",
    "max": 0.03,
    "step": 0.001,
    "answerHa": 2678,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "محطات الطاقة الشمسية (الحالية)",
    "desc": "محطات كبرى متصلة بالشبكة، تشمل مجمع نور ورزازات — أحد أكبر مجمعات الطاقة الشمسية المركزة (CSP) في العالم، إلى جانب مجمع نور ميدلت الذي يجمع بين الألواح الكهروضوئية والطاقة الشمسية المركزة",
    "answer": 0.01,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.005,
    "answerHa": 4500,
    "dp": 3,
    "isSolar": true,
    "solarNote": "تلميح: رغم أن الطاقة الشمسية تحظى باهتمام إعلامي كبير في المغرب، فإنها لا تزال تمثل نسبة صغيرة نسبيًا (حوالي 2%) من إجمالي توليد الكهرباء — إذ تهيمن طاقة الرياح على مزيج الطاقات المتجددة حاليًا"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "طاقة شمسية لتوليد 100% من الكهرباء",
    "desc": "المساحة اللازمة من محطات الطاقة الشمسية الكبرى مع أنظمة التخزين لتزويد الشبكة الكهربائية المغربية بالكامل على مدار الساعة (حوالي 41 تيراواط ساعة سنويًا)، باستخدام الإشعاع الشمسي الاستثنائي في المناطق المتاخمة للصحراء",
    "answer": 0.041,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 18450,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "تتمتع المناطق الجنوبية الشرقية للمغرب، المتاخمة للصحراء الكبرى، بإشعاع شمسي مباشر استثنائي يصل إلى نحو 2000 كيلوواط ساعة لكل كيلوواط ذروة سنويًا — أفضل حتى من مصر. عند معدل 450 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها إلى 0.041% فقط من مساحة المغرب. ورغم هذه الإمكانات الهائلة، ألغت الحكومة البريطانية في أوائل 2026 مشروع الكابل البحري الرائد Xlinks الذي كان سيصدّر الكهرباء المغربية إلى المملكة المتحدة، مما يمثل نكسة لطموح المغرب في أن يصبح \"دولة كهربائية\" تصدّر الطاقة النظيفة"
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land & pasture",
    "desc": "This category includes cultivated cropland and the vast semi-arid rangeland that covers much of Morocco — pasture alone makes up most of this figure, not just farmed fields, which is why the number is far higher than most people expect",
    "answer": 66.74,
    "color": "#639922",
    "max": 85,
    "step": 0.5,
    "answerHa": 29793842
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Atlas and Rif Mountain forests, cedar, pine and cork oak — Morocco has one of the lowest forest shares relative to its size in North Africa, under continuous pressure from overgrazing and desertification",
    "answer": 12.94,
    "color": "#3B6D11",
    "max": 25,
    "step": 0.3,
    "answerHa": 5775782
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Casablanca, Rabat, Marrakech and Fez, plus a rapidly expanding road and rail network — the great majority of Morocco's population is concentrated along the Atlantic and Mediterranean coasts",
    "answer": 2.5,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 1115750
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Relatively limited rivers, lakes and dams — Morocco faces growing water scarcity, and has built hundreds of dams to capture erratic seasonal rainfall",
    "answer": 0.3,
    "color": "#378ADD",
    "max": 3,
    "step": 0.05,
    "answerHa": 133890
   },
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert, mountain & other barren land",
    "desc": "The northern fringe of the Sahara extending south and east, plus barren high-altitude terrain — this category captures genuinely arid land not classified as rangeland",
    "answer": 17.504,
    "color": "#c4a96b",
    "max": 35,
    "step": 0.5,
    "answerHa": 7814311
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 45 golf courses — the late King Hassan II was a passionate golfer, cementing Morocco's status as North Africa's established golf tourism destination",
    "answer": 0.006,
    "color": "#5DCAA5",
    "max": 0.03,
    "step": 0.001,
    "answerHa": 2678,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected utility-scale solar, including the Noor Ouarzazate complex — one of the world's largest concentrated solar power (CSP) sites — and the hybrid PV+CSP Noor Midelt complex",
    "answer": 0.01,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.005,
    "answerHa": 4500,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: despite heavy media attention, solar still supplies a relatively modest share (~2%) of Morocco's total electricity generation — wind currently dominates the renewables mix"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Morocco's entire national grid 24/7 (~41 TWh/yr), using the exceptional solar irradiance of its Sahara-adjacent southeast",
    "answer": 0.041,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 18450,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Morocco's southeastern regions, bordering the Sahara, receive exceptional direct solar irradiance of roughly 2,000 kWh/kWp/yr — even better than Egypt's. At 450 ha/TWh, powering the whole grid needs just 0.041% of Morocco's land. Despite this huge potential, the UK government abandoned the flagship Xlinks subsea cable project in early 2026, which would have exported Moroccan renewable electricity to Britain — a setback for Morocco's ambition to become a clean-energy exporting 'electrostate'"
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ma.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي المغرب فعلاً؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو قصير على يوتيوب لدكتور سايمون كلارك</a> (بالإنجليزية). خمّن نسبة أراضي المغرب لكل فئة — مجموع المحددات لا يتجاوز 100%. راهن المغرب على مستقبله كـ\"دولة كهربائية\" نظيفة، تصدّر الطاقة الشمسية وطاقة الرياح إلى الخارج — رغم إلغاء مشروعه الرائد لتصدير الكهرباء إلى بريطانيا في عام 2026. ملاحظة: تعتمد الأرقام على مساحة المغرب المعترف بها دوليًا، ولا تشمل إقليم الصحراء الغربية المتنازع عليه.",
   "disclaimer": "أرقام الطاقة الشمسية والبطاريات هي تجربة فكرية أُعدّت بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. تشير جميع أرقام الطاقة الشمسية إلى أنظمة كبرى متصلة بالشبكة.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "يستهدف المغرب أن تبلغ حصة الطاقة المتجددة من القدرة الكهربائية المركبة 52% بحلول 2030، وقد أنشأ مشاريع كبرى منها مجمع نور ورزازات للطاقة الشمسية المركزة. وفي أوائل عام 2026، ألغت الحكومة البريطانية مشروع Xlinks المغربي البريطاني البالغة تكلفته 24 مليار جنيه إسترليني، والذي كان سيصدّر 3.6 غيغاواط من الطاقة الشمسية وطاقة الرياح المغربية عبر أطول كابل بحري في العالم — وهي نكسة كبيرة لطموحات المغرب كمصدّر للطاقة المتجددة، رغم استمرار التوسع المحلي في الطاقات المتجددة. بيانات استخدام الأراضي من FAO FAOSTAT والبنك الدولي 2023؛ يُلاحظ أن رقم \"الأراضي الزراعية\" في المغرب يشمل مساحات شاسعة من المراعي شبه القاحلة، وليس الأراضي المزروعة فقط. بيانات الكهرباء من الملف القطري لوكالة إيرينا للمغرب 2023 وإنيرداتا. ملاحظة إقليمية: تعتمد الأرقام على مساحة المغرب المعترف بها دوليًا (446,300 كم²) ولا تشمل الصحراء الغربية، وهي إقليم غير متمتع بالحكم الذاتي بحسب تصنيف الأمم المتحدة، تديره المغرب لكنه غير معترف به عالميًا كأرض مغربية ذات سيادة.",
   "submit": "إرسال جميع الإجابات",
   "play_again": "العب مرة أخرى",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك — خريطة مساحة تناسبية (تتحدث عند التمرير)",
   "map_answer": "استخدام الأراضي الفعلي في المغرب — خريطة مساحة تناسبية",
   "allocated": "/ 100% مخصص",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "نتيجة الدقة",
   "sol100_reveal": "تتمتع المناطق الجنوبية الشرقية للمغرب، المتاخمة للصحراء الكبرى، بإشعاع شمسي مباشر استثنائي يصل إلى نحو 2000 كيلوواط ساعة لكل كيلوواط ذروة سنويًا — أفضل حتى من مصر. عند معدل 450 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها إلى 0.041% فقط من مساحة المغرب. ورغم هذه الإمكانات الهائلة، ألغت الحكومة البريطانية في أوائل 2026 مشروع الكابل البحري الرائد Xlinks الذي كان سيصدّر الكهرباء المغربية إلى المملكة المتحدة، مما يمثل نكسة لطموح المغرب في أن يصبح \"دولة كهربائية\" تصدّر الطاقة النظيفة",
   "grades": [
    [
     86,
     "🇲🇦 خبير! أنت تعرف توازن الأراضي في المغرب بدقة مثيرة للإعجاب."
    ],
    [
     64,
     "🌾 قوي جدًا — فهم دقيق لمدى اتساع المراعي شبه القاحلة في المغرب."
    ],
    [
     43,
     "☀️ ليس سيئًا! يبالغ معظم الناس في تقدير حصة الطاقة الشمسية الحالية من كهرباء المغرب."
    ],
    [
     21,
     "⛳ هل تعلم؟ يضم المغرب نحو 45 ملعب غولف، إرثًا من شغف الملك الراحل الحسن الثاني بهذه الرياضة."
    ],
    [
     0,
     "🤔 مفاجأة؟ ثلثا مساحة المغرب مصنفة كأراضٍ زراعية — معظمها مراعٍ شبه قاحلة، وليست حقولًا مزروعة."
    ]
   ],
   "btn_label": "English",
   "country_label": "المغرب",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "عرض مكبّر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ma.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Morocco's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Moroccan land for each category — sliders are capped at 100% total. Morocco has staked its future on becoming a clean-energy 'electrostate', exporting solar and wind power abroad — though its flagship UK export project was abandoned in 2026. Note: figures use Morocco's internationally recognized area, excluding the disputed territory of Western Sahara.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Morocco targets 52% renewable electricity capacity by 2030 and has built major projects including the Noor Ouarzazate CSP complex. In early 2026, the UK government abandoned the £24bn Xlinks Morocco-UK power project, which would have exported 3.6 GW of Moroccan solar and wind power via the world's longest subsea cable — a significant setback to Morocco's ambitions as a renewable energy exporter, though domestic renewable expansion continues. Land use figures from FAO FAOSTAT and World Bank 2023; note that Morocco's 'agricultural land' figure includes vast semi-arid pasture, not just cropland. Electricity figures from IRENA Morocco Country Profile 2023 and Enerdata. Territorial note: figures use Morocco's internationally recognized area (446,300 km²) and exclude Western Sahara, a UN-designated non-self-governing territory administered by Morocco but not universally recognized as Moroccan sovereign territory.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Moroccan land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Morocco's southeastern regions, bordering the Sahara, receive exceptional direct solar irradiance of roughly 2,000 kWh/kWp/yr — even better than Egypt's. At 450 ha/TWh, powering the whole grid needs just 0.041% of Morocco's land. Despite this huge potential, the UK government abandoned the flagship Xlinks subsea cable project in early 2026, which would have exported Moroccan renewable electricity to Britain — a setback for Morocco's ambition to become a clean-energy exporting 'electrostate'",
   "grades": [
    [
     86,
     "🇲🇦 Expert! You know Morocco's land balance with impressive precision."
    ],
    [
     64,
     "🌾 Very strong — sharp grasp of how much of Morocco is semi-arid rangeland."
    ],
    [
     43,
     "☀️ Not bad! Most people overestimate how much of Morocco's electricity is already solar."
    ],
    [
     21,
     "⛳ Did you know? Morocco has around 45 golf courses, a legacy of King Hassan II's passion for the sport."
    ],
    [
     0,
     "🤔 Surprising? Two-thirds of Morocco is classified as agricultural land — almost all of it semi-arid grazing, not cropland."
    ]
   ],
   "btn_label": "عربي",
   "country_label": "Morocco",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو أمدّت المغرب وحدها العالم بالكهرباء؟",
   "fit": "بفضل الظروف الشمسية الاستثنائية في المغرب (نحو 450 هكتار لكل تيراواط ساعة)، فإن تغطية <strong>الطلب العالمي على الكهرباء</strong> بأكمله (نحو 31,000 تيراواط ساعة سنويًا) تحتاج إلى نحو <strong>{haM} مليون هكتار</strong> — أي <strong>{pct}% فقط من مساحة المغرب</strong>، موضحة أدناه كدائرة بمساحة مكافئة. تقع هذه الدائرة بأكملها داخل حدود المغرب بسهولة.",
   "stat2": "يجعل مزيج الموارد الشمسية العالمية المستوى مع مساحة أرض كبيرة نسبيًا هذه التجربة الفكرية من أكثر التجارب مصداقية فيزيائية في اللعبة — على غرار تايلاند أو الولايات المتحدة من حيث الحجم. وهذه الإمكانات بالذات هي ما استند إليه طموح المغرب كـ\"دولة كهربائية\"، لكن إلغاء مشروع Xlinks يُظهر أن تصدير الطاقة النظيفة على نطاق واسع لا يزال صعبًا تجاريًا وسياسيًا، حتى عندما تكون المعطيات الفيزيائية مواتية.",
   "foot": "الدائرة المنقّطة توضيحية فقط — بحجم المساحة الصحيحة، وليست موقعًا مقترحًا فعليًا. بالنظر إلى المورد الشمسي الاستثنائي للمغرب، فإن هذه التجربة الفكرية أكثر واقعية فيزيائيًا مقارنة بمعظم الدول الأخرى في اللعبة."
  },
  "en": {
   "head": "🌍 What if Morocco alone powered the whole world?",
   "fit": "At Morocco's exceptional solar conditions (~450 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — just <strong>{pct}% of Morocco's land area</strong>, shown below as a circle of equivalent area. That entire circle fits comfortably within Morocco's own borders.",
   "stat2": "Morocco's combination of world-class solar resources and a reasonably large land area makes this one of the more physically credible thought experiments in the game — similar in scale to Thailand or the US. It's precisely this potential that underpinned Morocco's electrostate ambitions, though the cancelled Xlinks project shows that exporting clean power at scale remains commercially and politically difficult, even when the physics work out.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting. Given Morocco's exceptional solar resource, this thought experiment is more physically grounded than for most countries in the game."
  }
 }
};
