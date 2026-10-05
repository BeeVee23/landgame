window.LANDGAME=window.LANDGAME||{};
LANDGAME.dz = {
 "title": "🇩🇿 How is Algeria's land actually used? - Guessing Game",
 "code": "dz",
 "iso": "012",
 "alpha2": "dz",
 "lon": 2.6,
 "lat": 28,
 "ha": 238174100,
 "sol100Ha": 38700,
 "demandTwh": 86,
 "accent": "#2f9e6b",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2020–2026</strong> · FAO FAOSTAT · World Bank · Wikipedia (Energy in Algeria, Geography of Algeria) · pv magazine · Enerdata · Algerian Ministry of Energy (via Capmad)",
 "sources": "Sources: <a href=\"https://www.fao.org/faostat/en/#data/RL\" target=\"_blank\">FAO FAOSTAT Land Use</a> · <a href=\"https://www.theglobaleconomy.com/Algeria/agricultural_land/\" target=\"_blank\">World Bank agricultural land data for Algeria (via TheGlobalEconomy)</a> · <a href=\"https://statisticsoftheworld.com/country/algeria/forest-area\" target=\"_blank\">World Bank forest area for Algeria (via Statistics of the World)</a> · <a href=\"https://en.wikipedia.org/wiki/Geography_of_Algeria\" target=\"_blank\">Wikipedia: Geography of Algeria</a> · <a href=\"https://en.wikipedia.org/wiki/Energy_in_Algeria\" target=\"_blank\">Wikipedia: Energy in Algeria</a> · <a href=\"https://www.pv-magazine.com/2024/11/07/a-turning-point-for-algerian-solar/\" target=\"_blank\">pv magazine: A turning point for Algerian solar</a> · <a href=\"https://www.enerdata.net/estore/energy-market/algeria/\" target=\"_blank\">Enerdata: Algeria</a> · <a href=\"https://www.capmad.com/post/energy-revenues-rise-in-algeria-in-2025\" target=\"_blank\">Capmad: Energy revenues rise in Algeria in 2025</a> · Algeria total area ~238.2M ha (2,381,741 km²). Settlement and water shares are approximate estimates.",
 "cats": {
  "ar": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "الأراضي الزراعية والمراعي",
    "desc": "الأراضي المزروعة والمراعي السهبية في الهضاب العليا - لا يزيد الصالح للزراعة عن 3% تقريبًا من مساحة الجزائر، ومعظم رقم الأراضي الزراعية مراعٍ شبه قاحلة، أما الشريط الخصب فرقيق على امتداد ساحل المتوسط",
    "answer": 17.36,
    "color": "#639922",
    "max": 40,
    "step": 0.5,
    "answerHa": 41347024
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "الغابات",
    "desc": "صنوبر حلب وبلوط الفلين وأرز الأطلس في الجبال الشمالية، إضافة إلى حزام \"السد الأخضر\" - تُعدّ نسبة الغابات في الجزائر من الأدنى في العالم، وتتعرض غاباتها الشمالية لحرائق مدمرة كل صيف",
    "answer": 0.82,
    "color": "#3B6D11",
    "max": 5,
    "step": 0.1,
    "answerHa": 1953028
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "المناطق العمرانية والطرق",
    "desc": "الجزائر العاصمة ووهران وقسنطينة والشريط الساحلي المكتظ حيث يعيش معظم سكان الجزائر البالغ عددهم نحو 46 مليون نسمة، إضافة إلى شبكة الطرق العابرة للصحراء - تقدير تقريبي لأنها أقل الفئات قياسًا",
    "answer": 0.5,
    "color": "#73726c",
    "max": 3,
    "step": 0.1,
    "answerHa": 1190871
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المسطحات المائية",
    "desc": "خزانات السدود في الشمال وبعض البحيرات - الجزائر من أكثر دول العالم إجهادًا مائيًا، وتُحتسب السبخات الملحية (الشطوط) أرضًا قاحلة لا مياهًا",
    "answer": 0.05,
    "color": "#378ADD",
    "max": 0.5,
    "step": 0.01,
    "answerHa": 119087,
    "dp": 2
   },
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "الصحراء والجبال والأراضي القاحلة الأخرى",
    "desc": "تغطي الصحراء الكبرى أكثر من 80% من مساحة الجزائر - أكبر دول إفريقيا - إضافة إلى كتلتي الهقار والطاسيلي القاحلتين والسبخات الشمالية؛ وهي ما يتبقى بعد احتساب كل الفئات الأخرى",
    "answer": 81.2695,
    "color": "#c4a96b",
    "max": 100,
    "step": 0.5,
    "answerHa": 193562900
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ملاعب الغولف",
    "desc": "عدد قليل من الملاعب، أشهرها نادي الجزائر للغولف (دالي إبراهيم) ووهران - الغولف رياضة هامشية جدًا هنا، لذا فهذا من أصغر الأرقام في اللعبة",
    "answer": 0.0001,
    "color": "#5DCAA5",
    "max": 0.001,
    "step": 0.0001,
    "answerHa": 238,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "محطات الطاقة الشمسية (الحالية)",
    "desc": "محطات شمسية متصلة بالشبكة في الهضاب العليا والجنوب، أُنشئت منذ عام 2012 - لا يتجاوز المركّب منها نحو 0.6 غيغاواط من أصل نحو 27 غيغاواط، رغم ترسية مناقصة بقدرة 3 غيغاواط عام 2023",
    "answer": 0.0004,
    "color": "#EF9F27",
    "max": 0.005,
    "step": 0.0001,
    "answerHa": 953,
    "dp": 4,
    "isSolar": true,
    "solarNote": "تلميح: لا تغطي الطاقة الشمسية سوى نحو 1% من كهرباء الجزائر. أما نحو 99% فيأتي من حرق الغاز الأحفوري."
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "طاقة شمسية لتوليد 100% من الكهرباء",
    "desc": "المساحة اللازمة من محطات الطاقة الشمسية الكبرى مع أنظمة التخزين لتزويد الشبكة الكهربائية الجزائرية بالكامل على مدار الساعة (حوالي 86 تيراواط ساعة سنويًا)، باستخدام الإشعاع الاستثنائي للصحراء - حتى نحو 2260 كيلوواط ساعة/م² سنويًا في الجنوب",
    "answer": 0.016,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 38700,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "تتمتع صحراء الجزائر بواحد من أقوى مستويات الإشعاع الشمسي على الأرض. وعند معدل 450 هكتارًا لكل تيراواط ساعة، تحتاج الشبكة بأكملها إلى 0.016% فقط من مساحة البلاد. ومع ذلك يأتي اليوم نحو 99% من كهرباء الجزائر من الغاز الأحفوري."
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land & pasture",
    "desc": "Cropland plus the steppe rangeland of the high plateaus - only about 3% of Algeria is arable; most of the farmland figure is semi-arid grazing, and the fertile strip is a thin band along the Mediterranean coast",
    "answer": 17.36,
    "color": "#639922",
    "max": 40,
    "step": 0.5,
    "answerHa": 41347024
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Aleppo pine, cork oak and Atlas cedar in the northern mountains, plus the 'Green Dam' tree belt - Algeria has one of the lowest forest shares in the world, and wildfires hit the north hard each summer",
    "answer": 0.82,
    "color": "#3B6D11",
    "max": 5,
    "step": 0.1,
    "answerHa": 1953028
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Algiers, Oran, Constantine and the crowded coastal strip, where most of Algeria's ~46 million people live, plus the trans-Saharan road network - an estimate, since this is the least well-measured category",
    "answer": 0.5,
    "color": "#73726c",
    "max": 3,
    "step": 0.1,
    "answerHa": 1190871
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Reservoirs behind dams in the north and a few lakes - Algeria is among the most water-stressed countries in the world, and the salt flats (chotts) are counted as barren land, not water",
    "answer": 0.05,
    "color": "#378ADD",
    "max": 0.5,
    "step": 0.01,
    "answerHa": 119087,
    "dp": 2
   },
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert, mountain & other barren land",
    "desc": "The Sahara covers more than 80% of Algeria - the largest country in Africa - plus the barren Hoggar and Tassili massifs and the salt flats of the north; this is what is left after everything else is counted",
    "answer": 81.2695,
    "color": "#c4a96b",
    "max": 100,
    "step": 0.5,
    "answerHa": 193562900
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "A handful of courses, most notably Algiers Golf Club (Dely Ibrahim) and Oran - golf is a tiny niche here, so this is among the smallest numbers in the game",
    "answer": 0.0001,
    "color": "#5DCAA5",
    "max": 0.001,
    "step": 0.0001,
    "answerHa": 238,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected solar parks in the Hauts Plateaux and the south, built since 2012 - only ~0.6 GW is installed against ~27 GW of total capacity, though a 3 GW tender was awarded in 2023",
    "answer": 0.0004,
    "color": "#EF9F27",
    "max": 0.005,
    "step": 0.0001,
    "answerHa": 953,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: solar supplies only around 1% of Algeria's electricity. Roughly 99% comes from burning fossil gas."
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Algeria's entire national grid 24/7 (~86 TWh/yr), using the exceptional irradiance of the Sahara - up to ~2,260 kWh/m²/yr in the south",
    "answer": 0.016,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 38700,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Algeria's Sahara receives some of the strongest sunshine on Earth. At 450 ha/TWh, the whole grid needs only 0.016% of the country's land. Yet today roughly 99% of Algeria's electricity comes from fossil gas."
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/dz.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي الجزائر فعلاً؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو قصير على يوتيوب لدكتور سايمون كلارك</a> (بالإنجليزية). خمّن نسبة أراضي الجزائر لكل فئة - مجموع المحددات لا يتجاوز 100%. الجزائر أكبر دول إفريقيا وتقع على الصحراء الكبرى، وتولّد نحو <strong>99% من كهربائها بحرق الغاز الأحفوري</strong> - في واحدة من أكثر مناطق العالم سطوعًا بالشمس.",
   "disclaimer": "أرقام الطاقة الشمسية والبطاريات هي تجربة فكرية أُعدّت بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. تشير جميع أرقام الطاقة الشمسية إلى أنظمة كبرى متصلة بالشبكة. وأي شبكة حقيقية ستستخدم الرياح ومصادر أخرى أيضًا، ورقم قيمة الغاز الأحفوري تقدير تقريبي.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "<strong>تولّد الجزائر نحو 99% من كهربائها من الغاز الأحفوري</strong> (حوالي 86 تيراواط ساعة عام 2023؛ ولم يكن متجددًا سوى نحو 0.6 غيغاواط من قدرتها البالغة نحو 27 غيغاواط عام 2024). <strong>هذا الغاز الأحفوري غير مستورد</strong> - فالجزائر من كبار منتجي الغاز الأحفوري في العالم (نحو 101 مليار م³ عام 2023) وتصدّره إلى أوروبا عبر الأنابيب وعلى شكل غاز مسال. وهنا بيت القصيد من الناحية المالية: تمثل المحروقات أكثر من 90% من إيرادات الجزائر من الصادرات (قرابة 31 مليار دولار في الأشهر الثمانية الأولى من 2025)، فكل متر مكعب يُحرق داخل البلاد هو متر كان يمكن بيعه في الخارج. وتقديرنا التقريبي أن محطات الكهرباء تحرق نحو 18–23 مليار م³ من الغاز الأحفوري سنويًا، تبلغ قيمتها نحو <strong>5–8 مليارات دولار سنويًا بأسعار التصدير الأخيرة</strong> - رقم مستخلص من 86 تيراواط ساعة وكفاءة المحطات المعتادة، وليس إحصاءً رسميًا. والطاقة الشمسية بديل واضح: فقد جاءت مناقصة بقدرة 3 غيغاواط عام 2023 بسعر 0.54–0.81 يورو للواط، والهدف الوطني 15 غيغاواط بحلول 2035. بيانات استخدام الأراضي من الفاو والبنك الدولي؛ أما نسبتا العمران والمياه فتقديرات تقريبية، ونسبة الأراضي القاحلة هي ما يتبقى بعد احتساب كل شيء آخر.",
   "submit": "إرسال جميع الإجابات",
   "play_again": "العب مرة أخرى",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك - خريطة مساحة تناسبية (تتحدث عند التمرير)",
   "map_answer": "استخدام الأراضي الفعلي في الجزائر - خريطة مساحة تناسبية",
   "allocated": "/ 100% مخصص",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "نتيجة الدقة",
   "sol100_reveal": "تتمتع صحراء الجزائر بواحد من أقوى مستويات الإشعاع الشمسي على الأرض (حتى نحو 2260 كيلوواط ساعة/م² سنويًا في الجنوب). وعند معدل 450 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها (نحو 86 تيراواط ساعة) إلى 0.016% فقط من مساحة البلاد. ومع ذلك <strong>يُولَّد نحو 99% من كهرباء الجزائر بحرق الغاز الأحفوري</strong>. وهذا الغاز الأحفوري محلي وليس مستوردًا - لكن كل متر مكعب يُحرق داخل البلاد هو متر لا يُباع في الخارج: نحو 18–23 مليار م³ سنويًا، بقيمة تقارب <strong>5–8 مليارات دولار</strong> بأسعار التصدير الأخيرة (تقديرنا). وسيكلّف بناء طاقة شمسية مع تخزين للشبكة بأكملها نحو 47 مليار دولار بالافتراضات الافتراضية أدناه - ويمكن نظريًا استرداده في أقل من عقد بفضل الغاز الأحفوري الذي يتحرر للتصدير",
   "grades": [
    [
     86,
     "🇩🇿 خبير! أنت تعرف توازن الأراضي في الجزائر بدقة مثيرة للإعجاب."
    ],
    [
     64,
     "🏜️ قوي جدًا - فهم دقيق لمدى اتساع الصحراء في الجزائر."
    ],
    [
     43,
     "☀️ ليس سيئًا! الطاقة الشمسية في الواقع نحو 1% فقط من كهرباء الجزائر - والغاز الأحفوري يوفّر نحو 99%."
    ],
    [
     21,
     "⛽ هل تعلم؟ تحرق الجزائر نحو 18–23 مليار م³ من غازها الأحفوري كل عام لتوليد الكهرباء - غاز كان يمكن تصديره."
    ],
    [
     0,
     "🤔 مفاجأة؟ أكثر من 80% من الجزائر صحراء، وأقل من 20% أراضٍ زراعية ومراعٍ."
    ]
   ],
   "btn_label": "English",
   "country_label": "الجزائر",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "عرض مكبّر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/dz.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Algeria's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Algerian land for each category - sliders are capped at 100% total. Algeria is Africa's largest country, sits on the Sahara, and makes about <strong>99% of its electricity by burning fossil gas</strong> - in one of the sunniest places on Earth.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. A real grid would also use wind and other sources, and the fossil gas-value figure is a rough estimate.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "<strong>Algeria generates about 99% of its electricity from fossil gas</strong> (≈86 TWh in 2023; only ~0.6 GW of its ~27 GW capacity was renewable in 2024). <strong>This fossil gas is not imported</strong> - Algeria is one of the world's major fossil gas producers (≈101 bcm in 2023) and exports it to Europe by pipeline and as LNG. That is exactly the financial point: hydrocarbons make up over 90% of Algeria's export revenue (nearly $31 billion in the first eight months of 2025), so every cubic metre burned at home is one that could have been sold abroad. Our rough estimate is that power stations burn around 18–23 billion m³ of fossil gas a year, worth roughly <strong>$5–8 billion a year at recent export prices</strong> - a figure derived from the 86 TWh and typical plant efficiency, not an official statistic. Solar is the obvious alternative: a 3 GW tender in 2023 came in at €0.54–0.81 per watt, and the national target is 15 GW by 2035. Land use figures from FAO and World Bank data; the settlement and water shares are approximate estimates, and the barren-land share is what remains after everything else.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Algerian land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Algeria's Sahara receives some of the strongest sunshine on Earth (up to ~2,260 kWh/m²/yr in the south). At 450 ha/TWh, powering the whole grid (~86 TWh) needs just 0.016% of the country's land. Yet <strong>about 99% of Algeria's electricity is made by burning fossil gas</strong>. That fossil gas is domestic, not imported - but every cubic metre burned at home is one not sold abroad: roughly 18–23 bcm a year, worth about <strong>$5–8 billion</strong> at recent export prices (our estimate). Building solar+battery for the entire grid would cost around $47 billion at the default assumptions below - on paper, repaid in under a decade by the fossil gas freed up for export",
   "grades": [
    [
     86,
     "🇩🇿 Expert! You know Algeria's land balance with impressive precision."
    ],
    [
     64,
     "🏜️ Very strong - sharp grasp of how much of Algeria is Sahara."
    ],
    [
     43,
     "☀️ Not bad! In reality solar is only ~1% of Algeria's electricity - fossil gas supplies about 99%."
    ],
    [
     21,
     "⛽ Did you know? Algeria burns around 18–23 billion m³ of its own fossil gas for electricity every year - fossil gas that could be exported."
    ],
    [
     0,
     "🤔 Surprising? Over 80% of Algeria is desert, and less than 20% is farmland or pasture."
    ]
   ],
   "btn_label": "عربي",
   "country_label": "Algeria",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو أمدّت الجزائر وحدها العالم بالكهرباء؟",
   "fit": "بفضل الظروف الشمسية الاستثنائية في صحراء الجزائر (نحو 450 هكتار لكل تيراواط ساعة)، فإن تغطية <strong>الطلب العالمي على الكهرباء</strong> بأكمله (نحو 31,000 تيراواط ساعة سنويًا) تحتاج إلى نحو <strong>{haM} مليون هكتار</strong> - أي <strong>{pct}% فقط من مساحة الجزائر</strong>، موضحة أدناه كدائرة بمساحة مكافئة. تقع هذه الدائرة بأكملها داخل حدود الجزائر.",
   "stat2": "المقارنة الأكثر لفتًا للنظر هي في الداخل. فالجزائر تحرق بالفعل نحو 18–23 مليار م³ من غازها الأحفوري لتوليد الكهرباء - نحو 99% من إمداداتها - وهو غاز كان يمكن بيعه في الخارج بنحو 5–8 مليارات دولار سنويًا (تقديرنا). وتشغيل الشبكة الوطنية بالطاقة الشمسية مع التخزين لا يتطلب سوى 0.016% من مساحة البلاد، وتُظهر لوحة التكلفة أدناه أن البناء يكلّف عشرات المليارات من الدولارات، وهي فاتورة لمرة واحدة مقابل دخل تصدير يتكرر كل عام.",
   "foot": "الدائرة المنقّطة توضيحية فقط - بحجم المساحة الصحيحة، وليست موقعًا مقترحًا فعليًا."
  },
  "en": {
   "head": "🌍 What if Algeria alone powered the whole world?",
   "fit": "At Algeria's exceptional Saharan solar conditions (~450 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - just <strong>{pct}% of Algeria's land area</strong>, shown below as a circle of equivalent area. That entire circle fits within Algeria's own borders.",
   "stat2": "The more striking comparison is at home. Algeria already burns around 18–23 billion m³ of its own fossil gas to make electricity - about 99% of its supply - fossil gas it could sell abroad for roughly $5–8 billion a year (our estimate). Running the national grid on solar+battery needs only 0.016% of the country's land, and the cost panel below puts the build-out at tens of billions of dollars, a one-off bill set against export income that recurs every year.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting."
  }
 }
};
