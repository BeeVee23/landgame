window.LANDGAME=window.LANDGAME||{};
LANDGAME.ae = {
 "title": "🇦🇪 How is the UAE's land actually used? — Guessing Game",
 "code": "ae",
 "iso": "784",
 "alpha2": "ae",
 "lon": 54.3,
 "lat": 24,
 "ha": 8360000,
 "sol100Ha": 51300,
 "demandTwh": 135,
 "accent": "#c4a96b",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2021–2026</strong> · CIA World Factbook · EIA · Enerdata · Masdar",
 "sources": "Sources: <a href=\"https://en.wikipedia.org/wiki/Geography_of_the_United_Arab_Emirates\" target=\"_blank\">Geography of the UAE</a> · <a href=\"https://www.eia.gov/international/content/analysis/countries_long/United_Arab_Emirates\" target=\"_blank\">EIA: UAE Energy Overview</a> · <a href=\"https://www.enerdata.net/estore/energy-market/united-arab-emirates/\" target=\"_blank\">Enerdata: UAE Energy Information</a> · <a href=\"https://masdar.ae/en/news\" target=\"_blank\">Masdar</a> · <a href=\"https://www.barakah.ae/en/\" target=\"_blank\">Barakah Nuclear Energy Plant</a> · <a href=\"https://www.cia.gov/the-world-factbook/\" target=\"_blank\">CIA World Factbook</a> · UAE total land area ~8.36M ha (83,600 km²).",
 "cats": {
  "ar": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "الصحراء والكثبان الرملية",
    "desc": "سهول صحراوية مسطحة تمتد إلى كثبان رملية متموجة تغطي الجزء الأكبر من دولة الإمارات — تُعد كثبان ليوا في الربع الخالي من بين أعلى الكثبان الرملية في العالم",
    "answer": 92.1185,
    "color": "#c4a96b",
    "max": 100,
    "step": 0.5,
    "answerHa": 7701107
   },
   {
    "id": "mountain",
    "icon": "⛰️",
    "name": "جبال الحجر",
    "desc": "امتداد سلسلة جبال الحجر في الفجيرة ورأس الخيمة، حيث يقع أعلى قمم الإمارات — منطقة جبلية استثنائية داخل بلد يغلب عليه المشهد الصحراوي المسطح",
    "answer": 3,
    "color": "#8a7860",
    "max": 10,
    "step": 0.2,
    "answerHa": 250800
   },
   {
    "id": "agri",
    "icon": "🌴",
    "name": "الأراضي الزراعية",
    "desc": "مزارع النخيل والواحات المروية، معظمها بالقرب من العين والفجيرة — الزراعة محدودة للغاية بسبب شح المياه العذبة الطبيعية، إذ تعتمد الإمارات بشكل شبه كامل على تحلية مياه البحر",
    "answer": 0.6,
    "color": "#639922",
    "max": 3,
    "step": 0.05,
    "answerHa": 50160
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "المناطق العمرانية والطرق",
    "desc": "دبي وأبوظبي والشارقة، إلى جانب شبكة طرق حديثة كثيفة — تُعد الإمارات من أكثر دول العالم تحضّرًا، إذ يعيش أكثر من 87% من سكانها في المناطق الحضرية رغم صغر المساحة العمرانية نسبيًا",
    "answer": 4,
    "color": "#73726c",
    "max": 10,
    "step": 0.2,
    "answerHa": 334400
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المسطحات المائية والسبخات",
    "desc": "سبخة مطي الساحلية وبحيرة زاخر الاصطناعية — لا توجد أنهار دائمة في الإمارات، وتعتمد البلاد بالكامل تقريبًا على محطات تحلية المياه لتلبية احتياجاتها من المياه العذبة",
    "answer": 0.1,
    "color": "#378ADD",
    "max": 1,
    "step": 0.02,
    "answerHa": 8360,
    "dp": 3
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ملاعب الغولف",
    "desc": "أكثر من 30 ملعبًا فاخرًا، معظمها في دبي — تُروى بمياه معالَجة نظرًا لندرة المياه العذبة، وتجذب سياحة الغولف من جميع أنحاء العالم رغم موقعها في قلب الصحراء",
    "answer": 0.0215,
    "color": "#5DCAA5",
    "max": 0.1,
    "step": 0.002,
    "answerHa": 1797,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "محطات الطاقة الشمسية (الحالية)",
    "desc": "محطات كبرى متصلة بالشبكة، تشمل مجمع محمد بن راشد آل مكتوم للطاقة الشمسية في دبي (سيصبح أكبر محطة طاقة شمسية أحادية الموقع في العالم عند اكتماله) ومحطتي نور أبوظبي والظفرة",
    "answer": 0.16,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.01,
    "answerHa": 13376,
    "dp": 3,
    "isSolar": true,
    "solarNote": "تلميح: تمتلك الإمارات بالفعل واحدة من أعلى نسب الطاقة الشمسية الكبرى في الخليج، إذ تجمع بين مجمع محمد بن راشد ومحطتي نور أبوظبي والظفرة أكثر من 5 غيغاواط من السعة التشغيلية"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "طاقة شمسية لتوليد 100% من الكهرباء",
    "desc": "المساحة اللازمة من محطات الطاقة الشمسية الكبرى مع أنظمة التخزين لتزويد شبكة الإمارات الكهربائية بالكامل على مدار الساعة (نحو 135 تيراواط ساعة سنويًا)، باستخدام الإشعاع الشمسي الاستثنائي في صحراء الإمارات",
    "answer": 0.6136,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 51300,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "تتمتع صحراء الإمارات بإشعاع شمسي مباشر استثنائي يقارب 2000 كيلوواط ساعة لكل كيلوواط ذروة سنويًا. عند معدل 380 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها إلى 0.61% فقط من مساحة الإمارات. لكن الإمارات لا تراهن على الطاقة الشمسية وحدها: محطة براكة النووية — أول محطة نووية في العالم العربي — توفر بالفعل نحو ربع كهرباء الإمارات، وقد بُنيت خصيصًا لتحرير كميات أكبر من الغاز الطبيعي للتصدير بدلاً من حرقه محليًا"
   }
  ],
  "en": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert & sand dunes",
    "desc": "Flat desert plains rising into rolling sand dunes across most of the UAE — the dunes of Liwa in the Empty Quarter are among the tallest on Earth",
    "answer": 92.1185,
    "color": "#c4a96b",
    "max": 100,
    "step": 0.5,
    "answerHa": 7701107
   },
   {
    "id": "mountain",
    "icon": "⛰️",
    "name": "Hajar Mountains",
    "desc": "The extension of the Hajar range through Fujairah and Ras Al Khaimah, home to the UAE's highest peaks - a genuine mountain landscape inside an otherwise overwhelmingly flat, desert country",
    "answer": 3,
    "color": "#8a7860",
    "max": 10,
    "step": 0.2,
    "answerHa": 250800
   },
   {
    "id": "agri",
    "icon": "🌴",
    "name": "Agricultural land",
    "desc": "Date palm groves and irrigated oases, mostly near Al Ain and Fujairah - farming is severely constrained by a lack of natural fresh water, with the UAE relying almost entirely on seawater desalination",
    "answer": 0.6,
    "color": "#639922",
    "max": 3,
    "step": 0.05,
    "answerHa": 50160
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Dubai, Abu Dhabi and Sharjah, plus a dense modern road network - the UAE is one of the most urbanised countries on Earth, with over 87% of the population living in cities despite a relatively small built-up footprint",
    "answer": 4,
    "color": "#73726c",
    "max": 10,
    "step": 0.2,
    "answerHa": 334400
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies & sabkha",
    "desc": "Sabkhat Matti coastal salt flats and the artificial Lake Zakher - the UAE has no permanent rivers, relying almost entirely on desalination plants for fresh water",
    "answer": 0.1,
    "color": "#378ADD",
    "max": 1,
    "step": 0.02,
    "answerHa": 8360,
    "dp": 3
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Over 30 lavish courses, mostly in Dubai - irrigated with treated wastewater given the scarcity of fresh water, and a genuine draw for golf tourism despite sitting in the middle of a desert",
    "answer": 0.0215,
    "color": "#5DCAA5",
    "max": 0.1,
    "step": 0.002,
    "answerHa": 1797,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected utility-scale solar, including the Mohammed bin Rashid Al Maktoum Solar Park in Dubai (set to become the world's largest single-site solar park once complete) plus the Noor Abu Dhabi and Al Dhafra plants",
    "answer": 0.16,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.01,
    "answerHa": 13376,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: the UAE already has one of the highest shares of utility-scale solar in the Gulf - the Mohammed bin Rashid park plus Noor Abu Dhabi and Al Dhafra together exceed 5 GW of operating capacity"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power the UAE's entire national grid 24/7 (~135 TWh/yr), using the exceptional solar irradiance of the Emirati desert",
    "answer": 0.6136,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 51300,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "The UAE's desert receives exceptional direct solar irradiance of roughly 2,000 kWh/kWp/yr. At 380 ha/TWh, powering the whole grid needs just 0.61% of the UAE's land. But the UAE isn't betting on solar alone: the Barakah nuclear plant - the Arab world's first - already supplies roughly a quarter of UAE electricity, built specifically to free up more natural gas for export rather than burning it domestically"
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ae.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي الإمارات فعلاً؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو قصير على يوتيوب لدكتور سايمون كلارك</a> (بالإنجليزية). خمّن نسبة أراضي الإمارات لكل فئة — مجموع المحددات لا يتجاوز 100%. تستخدم الإمارات ثروتها النفطية لتمويل فصل جديد: الطاقة النووية، والطاقة الشمسية على نطاق صحراوي واسع، وذراع استثماري للطاقة النظيفة نشط في أكثر من 40 دولة.",
   "disclaimer": "أرقام الطاقة الشمسية والبطاريات هي تجربة فكرية أُعدّت بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. تشير جميع أرقام الطاقة الشمسية إلى أنظمة كبرى متصلة بالشبكة. تستهدف الإمارات أن تبلغ حصة الطاقة النظيفة (المتجددة والنووية) 32% من مزيج الكهرباء بحلول 2030، و44% من إجمالي استهلاك الطاقة من مصادر متجددة بحلول 2050. بيانات استخدام الأراضي هي تقديرات تقريبية مبنية على طبيعة تضاريس الإمارات (وكالة المخابرات المركزية، مصادر جغرافية وطنية)؛ بيانات الكهرباء من وكالة معلومات الطاقة الأمريكية وإنيرداتا، 2021-2025.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "انقلب اقتصاد الإمارات بهدوء: كان النفط يشكل نحو 90% من الناتج المحلي الإجمالي عام 1980، لكن القطاعات غير النفطية تمثل اليوم أكثر من 70%. هذا التحول تموّله ثروة النفط، لا يلغيها. توفر محطة براكة النووية — أول محطة نووية في العالم العربي وتضم أربعة مفاعلات — بالفعل نحو ربع كهرباء الإمارات، وقد بُنيت خصيصًا لتحرير كميات أكبر من الغاز الطبيعي للتصدير بدلاً من حرقه محليًا. أما مصدر، الذراع الاستثماري للطاقة النظيفة المدعوم من الدولة، فتمتلك اليوم قدرة متجددة في أكثر من 40 دولة، نمت من 20 غيغاواط في 2022 إلى 65 غيغاواط بحلول يناير 2026، وتستهدف 100 غيغاواط بحلول 2030 — ما يجعل الإمارات فعليًا قوة طاقة لدول أخرى عبر الاستثمار، لا عبر تصدير النفط فقط. الهيدروجين الأخضر هو الفصل التالي: تستهدف الإمارات تجاوز غيغاواط واحد من القدرة الإنتاجية بحلول 2026، موجّهة جزئيًا للتصدير، لتمدد بذلك دورها كمصدّر للطاقة إلى عصر الطاقة النظيفة. لكن هذا لا يعني التخلي عن النفط: لا تزال أدنوك توسّع طاقتها الإنتاجية نحو نحو 5 ملايين برميل يوميًا بحلول أواخر العقد. الاستراتيجية ليست نفطًا مقابل طاقة نظيفة، بل ثروة نفطية تموّل عملية تصدير طاقة موازية وثانية.",
   "submit": "إرسال جميع الإجابات",
   "play_again": "العب مرة أخرى",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك — خريطة مساحة تناسبية (تتحدث عند التمرير)",
   "map_answer": "استخدام الأراضي الفعلي في الإمارات — خريطة مساحة تناسبية",
   "allocated": "/ 100% مخصص",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "نتيجة الدقة",
   "sol100_reveal": "تتمتع صحراء الإمارات بإشعاع شمسي مباشر استثنائي يقارب 2000 كيلوواط ساعة لكل كيلوواط ذروة سنويًا. عند معدل 380 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها إلى 0.61% فقط من مساحة الإمارات. لكن الإمارات لا تراهن على الطاقة الشمسية وحدها: محطة براكة النووية — أول محطة نووية في العالم العربي — توفر بالفعل نحو ربع كهرباء الإمارات، وقد بُنيت خصيصًا لتحرير كميات أكبر من الغاز الطبيعي للتصدير بدلاً من حرقه محليًا",
   "grades": [
    [
     86,
     "🇦🇪 خبير! أنت تعرف توازن الأراضي في الإمارات بدقة مثيرة للإعجاب."
    ],
    [
     64,
     "🏜️ قوي جدًا — فهم دقيق لمدى هيمنة الصحراء على البلاد."
    ],
    [
     43,
     "⛰️ ليس سيئًا! يجهل كثيرون وجود سلسلة جبلية حقيقية في الفجيرة ورأس الخيمة."
    ],
    [
     21,
     "⛳ هل تعلم؟ تُروى ملاعب الغولف في دبي بمياه معالَجة، وليس بمياه عذبة."
    ],
    [
     0,
     "🤔 مفاجأة؟ توفر محطة براكة النووية بالفعل نحو ربع كهرباء الإمارات — بُنيت لتحرير الغاز للتصدير، لا لتعويض ثروة النفط."
    ]
   ],
   "btn_label": "English",
   "country_label": "الإمارات",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "عرض مكبّر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ae.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is the UAE's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Emirati land for each category — sliders are capped at 100% total. The UAE is using its oil wealth to fund a second act: nuclear power, desert-scale solar, and a clean-energy investment arm active in over 40 countries.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. The UAE targets 32% clean electricity (renewables plus nuclear) by 2030 and 44% of total energy consumption from renewables by 2050. Land use figures are approximate estimates based on the UAE's terrain profile (CIA World Factbook, national geographic sources); electricity figures from the EIA and Enerdata, 2021-2025.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "The UAE's economy has quietly flipped: oil made up roughly 90% of GDP in 1980, but non-oil sectors now account for over 70%. That shift is being funded, not abandoned, by oil wealth. The Barakah nuclear plant - the Arab world's first, with four reactors - already supplies about a quarter of the UAE's electricity, built explicitly to free up more natural gas for export rather than burning it domestically. Masdar, the UAE's state-backed clean energy investor, now has renewable capacity across 40+ countries that grew from 20 GW in 2022 to 65 GW by January 2026, targeting 100 GW by 2030 - effectively making the UAE an energy power for other nations through investment, not just oil exports. Green hydrogen is the next act: the UAE is targeting over 1 GW of production capacity by 2026, aimed partly at export, extending its role as an energy exporter into the clean-energy era. None of this means abandoning oil, though - ADNOC is still expanding production capacity toward roughly 5 million barrels a day by the late 2020s. The strategy isn't oil versus clean energy; it's oil wealth funding a second, parallel energy export business.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Emirati land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "The UAE's desert receives exceptional direct solar irradiance of roughly 2,000 kWh/kWp/yr. At 380 ha/TWh, powering the whole grid needs just 0.61% of the UAE's land. But the UAE isn't betting on solar alone: the Barakah nuclear plant - the Arab world's first - already supplies roughly a quarter of UAE electricity, built specifically to free up more natural gas for export rather than burning it domestically",
   "grades": [
    [
     86,
     "🇦🇪 Expert! You know the UAE's land balance with impressive precision."
    ],
    [
     64,
     "🏜️ Very strong — sharp grasp of just how desert-dominated the country really is."
    ],
    [
     43,
     "⛰️ Not bad! Most people don't realise the UAE has a genuine mountain range in Fujairah and Ras Al Khaimah."
    ],
    [
     21,
     "⛳ Did you know? Dubai's golf courses are irrigated with treated wastewater, not fresh water."
    ],
    [
     0,
     "🤔 Surprising? The Barakah nuclear plant already supplies about a quarter of the UAE's electricity - built to free up gas for export, not to replace oil wealth."
    ]
   ],
   "btn_label": "عربي",
   "country_label": "UAE",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو أمدّت الإمارات وحدها العالم بالكهرباء؟",
   "fit": "بفضل الظروف الشمسية الصحراوية الاستثنائية في الإمارات (نحو 380 هكتار لكل تيراواط ساعة، من بين الأفضل على وجه الأرض)، فإن تغطية <strong>الطلب العالمي على الكهرباء</strong> بأكمله (نحو 31,000 تيراواط ساعة سنويًا) تحتاج إلى نحو <strong>{haM} مليون هكتار</strong> — أي دائرة تفوق مساحتها <strong>{mult} ضعف مساحة الإمارات بأكملها</strong>. حتى مع شمس عالمية المستوى، تبقى الإمارات ببساطة بلدًا أصغر من أن تتسع هذه التجربة الفكرية داخل حدودها.",
   "stat2": "هذه حالة تجاوز طفيف — المورد الشمسي في الإمارات عالمي المستوى بالفعل، ولو كانت المساحة أكبر قليلًا بنفس الظروف الشمسية لكانت قادرة على تزويد العالم بأكمله بالكهرباء من داخل حدودها بارتياح. إنها تذكير مفيد بأن حتى أشعة الشمس الاستثنائية لكل هكتار لا يمكنها أن تعوّض بالكامل عن صغر المساحة الإجمالية للأرض.",
   "foot": "الدائرة المنقّطة توضيحية فقط — بحجم المساحة الصحيحة، وليست موقعًا مقترحًا فعليًا. نظرًا للتجاوز الكبير، لا يمكن عرض سوى قوس صغير من الدائرة بالقرب من موقع الإمارات نفسها."
  },
  "en": {
   "head": "🌍 What if the UAE alone powered the whole world?",
   "fit": "At the UAE's exceptional desert solar conditions (~380 ha/TWh, among the best on Earth), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — a circle over <strong>{mult}&times; the size of the UAE's entire land area</strong>. Even with world-class sunshine, the UAE is simply too small a country for this thought experiment to fit within its own borders.",
   "stat2": "This is a near-miss overflow case — the UAE's solar resource is genuinely world-class, and a slightly larger country with the same conditions would comfortably power the whole world from within its own borders. It's a useful reminder that even exceptional sunshine per hectare can't fully compensate for a small total land area.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting. Given the vast overflow, only a small arc of the circle can be shown near the UAE's own location."
  }
 }
};
