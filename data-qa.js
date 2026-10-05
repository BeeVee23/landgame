window.LANDGAME=window.LANDGAME||{};
LANDGAME.qa = {
 "title": "🇶🇦 How is Qatar's land actually used? - Guessing Game",
 "code": "qa",
 "iso": "634",
 "alpha2": "qa",
 "lon": 51.2,
 "lat": 25.3,
 "ha": 1158600,
 "sol100Ha": 21000,
 "demandTwh": 56,
 "accent": "#c4a96b",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2026</strong> · GIS land suitability studies · Enerdata · TheGlobalEconomy.com · GCC energy assessments",
 "sources": "Sources: <a href=\"https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2024.1272993/full\" target=\"_blank\">GIS-Based Renewable Energy Land Suitability, Qatar</a> · <a href=\"https://www.enerdata.net/estore/energy-market/qatar/\" target=\"_blank\">Enerdata Qatar Energy Information</a> · <a href=\"https://totalenergies.com/company/projects/solar/al-kharsaah-solar-power-plant-qatar\" target=\"_blank\">Al Kharsaah Solar Power Plant</a> · <a href=\"https://www.bakerinstitute.org/sites/default/files/2026-02/20260226-Gulf%20Energy%20Transition.pdf\" target=\"_blank\">Baker Institute: Gulf Energy Transition</a> · <a href=\"https://www.gulf-times.com/article/720940/qatar/qatar-nears-food-self-sufficiency-after-growth-decade\" target=\"_blank\">Qatar Food Self-Sufficiency, Gulf Times</a> · <a href=\"https://www.theglobaleconomy.com/\" target=\"_blank\">TheGlobalEconomy.com</a> · Qatar total land area ~1.16M ha (11,586 km²).",
 "cats": {
  "ar": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "الصحراء والأراضي القاحلة",
    "desc": "سهول صحراوية مسطحة إلى متموجة تغطي الجزء الأكبر من شبه الجزيرة القطرية - لا توجد أنهار أو بحيرات دائمة، والإشعاع الشمسي شبه موحّد في جميع أنحاء البلاد تقريبًا",
    "answer": 79.19399999999999,
    "color": "#c4a96b",
    "max": 95,
    "step": 0.5,
    "answerHa": 917542
   },
   {
    "id": "agri",
    "icon": "🌱",
    "name": "الأراضي الزراعية",
    "desc": "مزارع محمية ومستزرعات هيدروبونية، إلى جانب مزارع الألبان والدواجن الحديثة مثل بلدنا - بعد حصار 2017 حوّلت قطر بسرعة إنتاجها المحلي، ووصلت اليوم إلى اكتفاء ذاتي شبه كامل في الألبان والدواجن الطازجة، وحوالي 42% في الخضروات",
    "answer": 0.4,
    "color": "#639922",
    "max": 2,
    "step": 0.02,
    "answerHa": 4634
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "المناطق العمرانية والطرق",
    "desc": "الدوحة الكبرى ومدينة لوسيل ومنطقة الوكرة، إلى جانب شبكة طرق حديثة كثيفة - قطر من أعلى دول العالم كثافة سكانية حضرية، إذ يعيش أكثر من 99% من سكانها في المناطق الحضرية",
    "answer": 20,
    "color": "#73726c",
    "max": 30,
    "step": 0.5,
    "answerHa": 232000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المسطحات المائية والسبخات الساحلية",
    "desc": "خور العديد وسبخات ساحلية متناثرة - لا توجد مياه سطحية دائمة في قطر، وتعتمد البلاد بالكامل تقريبًا على تحلية مياه البحر لتلبية احتياجاتها من المياه العذبة",
    "answer": 0.3,
    "color": "#378ADD",
    "max": 2,
    "step": 0.05,
    "answerHa": 3476
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ملاعب الغولف",
    "desc": "عدد قليل من الملاعب في الدوحة، أبرزها نادي الدوحة للغولف - رياضة نخبوية صغيرة النطاق في بلد صحراوي شديد الحرارة معظم أيام السنة",
    "answer": 0.02,
    "color": "#5DCAA5",
    "max": 0.2,
    "step": 0.005,
    "answerHa": 232,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "محطات الطاقة الشمسية (الحالية)",
    "desc": "محطة العشرية الشمسية (800 ميغاواط) على مساحة 1000 هكتار غرب الدوحة - أول وأكبر محطة طاقة شمسية كبرى في قطر، توفر نحو 10% من ذروة الطلب على الكهرباء",
    "answer": 0.086,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.01,
    "answerHa": 1000,
    "dp": 3,
    "isSolar": true,
    "solarNote": "تلميح: رغم امتلاك قطر لبعض من أفضل ظروف الإشعاع الشمسي على وجه الأرض، فإن الغاز الأحفوري المسال لا يزال يهيمن على استراتيجيتها الاقتصادية - إذ تخطط لزيادة إنتاجها من الغاز المسال بنسبة 85% بحلول 2030"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "طاقة شمسية لتوليد 100% من الكهرباء",
    "desc": "المساحة اللازمة من محطات الطاقة الشمسية الكبرى مع أنظمة التخزين لتزويد شبكة قطر الكهربائية بالكامل على مدار الساعة (نحو 56 تيراواط ساعة سنويًا)، باستخدام الإشعاع الشمسي شبه الموحد في جميع أنحاء البلاد",
    "answer": 1.8125,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 21000,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "تتمتع قطر بظروف شمسية استثنائية شبه موحدة في جميع أنحاء البلاد، عند معدل يقارب 375 هكتارًا لكل تيراواط ساعة - من بين الأفضل على وجه الأرض. عند هذا المعدل، يحتاج تزويد شبكة قطر بأكملها إلى نحو 1.8% فقط من مساحتها الصغيرة أصلًا. لكن قطر - على عكس بعض جيرانها الخليجيين - اختارت مقاربة \"أكثر تدرجًا\" تجاه الطاقة المتجددة، إذ يبقى الغاز الأحفوري المسال محور استراتيجيتها الاقتصادية؛ فحصة الطاقة المتجددة في قطر لا تزال متأخرة عن السعودية والإمارات، اللتين تتصدران وتيرة التحول في الخليج"
   }
  ],
  "en": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert & barren land",
    "desc": "Flat to gently undulating desert plains cover the great majority of the Qatar peninsula - there are no permanent rivers or lakes, and solar irradiance is nearly uniform across almost the entire country",
    "answer": 79.19399999999999,
    "color": "#c4a96b",
    "max": 95,
    "step": 0.5,
    "answerHa": 917542
   },
   {
    "id": "agri",
    "icon": "🌱",
    "name": "Agricultural land",
    "desc": "Protected farms and hydroponic greenhouses, plus modern dairy and poultry operations like Baladna - after the 2017 blockade, Qatar rapidly built up domestic production, reaching near-total self-sufficiency in dairy and fresh poultry, and around 42% in vegetables",
    "answer": 0.4,
    "color": "#639922",
    "max": 2,
    "step": 0.02,
    "answerHa": 4634
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Greater Doha, Lusail City and Al Wakrah, plus a dense modern road network - Qatar has one of the highest urban population shares on Earth, with over 99% of residents living in urban areas",
    "answer": 20,
    "color": "#73726c",
    "max": 30,
    "step": 0.5,
    "answerHa": 232000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies & coastal sabkha",
    "desc": "Khor Al Adaid (the Inland Sea) and scattered coastal salt flats (sabkha) - Qatar has no permanent surface freshwater, relying almost entirely on seawater desalination",
    "answer": 0.3,
    "color": "#378ADD",
    "max": 2,
    "step": 0.05,
    "answerHa": 3476
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "A handful of courses in Doha, most notably Doha Golf Club - a small, elite sport in a desert country that is extremely hot for most of the year",
    "answer": 0.02,
    "color": "#5DCAA5",
    "max": 0.2,
    "step": 0.005,
    "answerHa": 232,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "The 800 MW Al Kharsaah solar plant on 1,000 hectares west of Doha - Qatar's first and largest utility-scale solar facility, supplying about 10% of peak electricity demand",
    "answer": 0.086,
    "color": "#EF9F27",
    "max": 0.5,
    "step": 0.01,
    "answerHa": 1000,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: despite having some of the best solar conditions on Earth, LNG still dominates Qatar's economic strategy - the country plans an 85% increase in LNG production capacity by 2030"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Qatar's entire national grid 24/7 (~56 TWh/yr), using the near-uniform exceptional solar irradiance found across the country",
    "answer": 1.8125,
    "color": "#BA7517",
    "max": 3,
    "step": 0.01,
    "answerHa": 21000,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Qatar has exceptional, near-uniform solar conditions country-wide, at roughly 375 ha/TWh - among the best on Earth. At that rate, powering Qatar's entire grid needs just 1.8% of its already-small land area. But unlike some Gulf neighbours, Qatar has taken a more measured approach to renewables: LNG remains the core of its economic strategy, and Qatar's renewable energy share still lags behind Saudi Arabia and the UAE, which are leading the pace of the Gulf's energy transition"
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/qa.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي قطر فعلاً؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو قصير على يوتيوب لدكتور سايمون كلارك</a> (بالإنجليزية). خمّن نسبة أراضي قطر لكل فئة - مجموع المحددات لا يتجاوز 100%. تمتلك قطر بعضًا من أفضل الظروف الشمسية على وجه الأرض، لكنها - على عكس السعودية والإمارات - تبنّت مقاربة أبطأ بشكل ملحوظ تجاه الطاقة المتجددة، مفضّلة مضاعفة إنتاج الغاز المسال بدلًا من ذلك.",
   "disclaimer": "أرقام الطاقة الشمسية والبطاريات هي تجربة فكرية أُعدّت بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. تشير جميع أرقام الطاقة الشمسية إلى أنظمة كبرى متصلة بالشبكة. بلغت حصة الطاقة المتجددة من إجمالي مزيج الطاقة في قطر نحو 7% في تقييمات حديثة لدول مجلس التعاون الخليجي، وهي نسبة مشابهة لعُمان لكنها متأخرة عن برنامج السعودية الأسرع توسعًا. يستهدف قطر بحلول 2030 أن توفر الطاقة المتجددة 20% من توليد الكهرباء، صعودًا من قاعدة قريبة من الصفر في 2022 من حيث الطاقة الشمسية الكبرى (لم تدخل محطة العشرية حيز التشغيل إلا في 2022). في الوقت نفسه، توسّع قطر إنتاجها من الغاز الأحفوري المسال بنسبة 85% (من 77 إلى 142 مليون طن سنويًا) بحلول 2030، مما يؤكد أن المحروقات لا تزال محور استراتيجيتها الاقتصادية. وقد صرّح وزير الطاقة القطري علنًا بأن التحول في الطاقة لا يمكن أن يحدث دون الوقود الأحفوري. بيانات استخدام الأراضي من دراسات أكاديمية لملاءمة الأراضي باستخدام نظم المعلومات الجغرافية وهيئات التخطيط القطرية؛ بيانات الكهرباء من إنيرداتا وذا غلوبال إيكونومي 2023–2024.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "تمّت تحديثات هذه اللعبة بعد استعلامين مباشرين: هل قطر هي دولة أوبك الأسرع تحولًا نحو الطاقة المتجددة؟ لا - رغم ظروفها الشمسية الاستثنائية، تبنّت قطر مقاربة أكثر تدرجًا مقارنة بالسعودية والإمارات، اللتين تتصدران وتيرة التحول في الخليج، بينما تراهن قطر على توسيع إنتاجها من الغاز المسال بنسبة 85% بحلول 2030. وهل تستورد قطر كل غذائها؟ ليس بعد الآن - فبعد حصار 2017، بنت قطر بسرعة قطاعًا زراعيًا محليًا حقيقيًا (رغم صغر مساحته)، ووصلت إلى اكتفاء ذاتي شبه كامل في الألبان والدواجن الطازجة.",
   "submit": "إرسال جميع الإجابات",
   "play_again": "العب مرة أخرى",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك - خريطة مساحة تناسبية (تتحدث عند التمرير)",
   "map_answer": "استخدام الأراضي الفعلي في قطر - خريطة مساحة تناسبية",
   "allocated": "/ 100% مخصص",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "نتيجة الدقة",
   "sol100_reveal": "تتمتع قطر بظروف شمسية استثنائية شبه موحدة في جميع أنحاء البلاد، عند معدل يقارب 375 هكتارًا لكل تيراواط ساعة - من بين الأفضل على وجه الأرض. عند هذا المعدل، يحتاج تزويد شبكة قطر بأكملها إلى نحو 1.8% فقط من مساحتها الصغيرة أصلًا. لكن قطر - على عكس بعض جيرانها الخليجيين - اختارت مقاربة \"أكثر تدرجًا\" تجاه الطاقة المتجددة، إذ يبقى الغاز الأحفوري المسال محور استراتيجيتها الاقتصادية؛ فحصة الطاقة المتجددة في قطر لا تزال متأخرة عن السعودية والإمارات، اللتين تتصدران وتيرة التحول في الخليج",
   "grades": [
    [
     86,
     "🇶🇦 خبير! أنت تعرف توازن الأراضي في قطر بدقة مثيرة للإعجاب."
    ],
    [
     64,
     "🏜️ قوي جدًا - فهم دقيق لمدى هيمنة الصحراء على شبه الجزيرة القطرية."
    ],
    [
     43,
     "☀️ ليس سيئًا! يبالغ معظم الناس في تقدير حصة الطاقة الشمسية الحالية من كهرباء قطر."
    ],
    [
     21,
     "🏙️ هل تعلم؟ يعيش أكثر من 99% من سكان قطر في مناطق حضرية - من أعلى النسب على وجه الأرض."
    ],
    [
     0,
     "🤔 مفاجأة؟ تمتلك قطر بعضًا من أفضل الظروف الشمسية على وجه الأرض، لكنها لا تزال تعتمد على توسيع الغاز المسال بدلًا من الطاقة المتجددة."
    ]
   ],
   "btn_label": "English",
   "country_label": "قطر",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "عرض مكبّر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/qa.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Qatar's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Qatari land for each category - sliders are capped at 100% total. Qatar has some of the best solar conditions on Earth, yet - unlike Saudi Arabia and the UAE - has taken a notably slower approach to renewables, doubling down on LNG expansion instead.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems. Qatar's renewable energy share of its total energy mix stood at roughly 7% in recent GCC assessments, similar to Oman but behind Saudi Arabia's faster-scaling programme. Qatar's 2030 target is for renewables to supply 20% of power generation, up from a 2022 baseline near zero utility-scale solar (Al Kharsaah only came online in 2022). Qatar is simultaneously expanding LNG production capacity by 85% (from 77 to 142 million tonnes/year) by 2030, underscoring that hydrocarbons remain central to its economic strategy. Qatar's own energy minister has publicly stated the energy transition cannot happen without fossil fuels. Land use figures from academic GIS-based land suitability studies and Qatar planning authorities; electricity figures from Enerdata and TheGlobalEconomy.com 2023–2024.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "This game was updated after two direct questions. Is Qatar the fastest-transitioning OPEC country on renewables? No - despite exceptional solar conditions, Qatar has taken a more measured approach than Saudi Arabia and the UAE, which lead the pace of the Gulf's transition, while Qatar bets instead on an 85% expansion of LNG production by 2030. And does Qatar import all its food? Not anymore - after the 2017 blockade, Qatar rapidly built a real (if tiny) domestic agricultural sector, reaching near-total self-sufficiency in dairy and fresh poultry.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Qatari land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Qatar has exceptional, near-uniform solar conditions country-wide, at roughly 375 ha/TWh - among the best on Earth. At that rate, powering Qatar's entire grid needs just 1.8% of its already-small land area. But unlike some Gulf neighbours, Qatar has taken a more measured approach to renewables: LNG remains the core of its economic strategy, and Qatar's renewable energy share still lags behind Saudi Arabia and the UAE, which are leading the pace of the Gulf's energy transition",
   "grades": [
    [
     86,
     "🇶🇦 Expert! You know Qatar's land balance with impressive precision."
    ],
    [
     64,
     "🏜️ Very strong - sharp grasp of just how desert-dominated the peninsula really is."
    ],
    [
     43,
     "☀️ Not bad! Most people overestimate how much of Qatar's electricity is already solar."
    ],
    [
     21,
     "🏙️ Did you know? Over 99% of Qatar's population lives in urban areas - one of the highest shares on Earth."
    ],
    [
     0,
     "🤔 Surprising? Qatar has some of the best solar conditions on Earth, yet still leans on LNG expansion over renewables."
    ]
   ],
   "btn_label": "عربي",
   "country_label": "Qatar",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو أمدّت قطر وحدها العالم بالكهرباء؟",
   "fit": "بفضل الظروف الشمسية الاستثنائية في قطر (نحو 375 هكتار لكل تيراواط ساعة، من بين الأفضل على الإطلاق على وجه الأرض)، فإن تغطية <strong>الطلب العالمي على الكهرباء</strong> بأكمله (نحو 31,000 تيراواط ساعة سنويًا) تحتاج إلى نحو <strong>{haM} مليون هكتار</strong> - أي دائرة تفوق مساحتها <strong>{mult} ضعف مساحة قطر بأكملها</strong>. قطر ببساطة بلد أصغر من أن تتسع هذه التجربة الفكرية داخل حدودها، مهما كانت شمسها استثنائية.",
   "stat2": "تُعد هذه واحدة من أكثر حالات التجاوز دراماتيكية في اللعبة بأكملها: مورد قطر الشمسي عالمي المستوى بالفعل، إلا أن مساحتها الصغيرة للغاية - أصغر من ولاية كونيتيكت الأمريكية - تجعل من المستحيل فيزيائيًا أن تتسع هذه التجربة داخل حدودها، مهما كانت شمسها استثنائية. إنها تذكير مفيد بأن إمكانات الطاقة الشمسية لكل هكتار ومساحة الأرض الإجمالية للبلد سؤالان منفصلان تمامًا.",
   "foot": "الدائرة المنقّطة توضيحية فقط - بحجم المساحة الصحيحة، وليست موقعًا مقترحًا فعليًا. نظرًا للتجاوز الهائل، لا يمكن عرض سوى قوس صغير من الدائرة بالقرب من موقع قطر نفسه."
  },
  "en": {
   "head": "🌍 What if Qatar alone powered the whole world?",
   "fit": "At Qatar's exceptional solar conditions (~375 ha/TWh, among the very best on Earth), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - a circle over <strong>{mult}&times; the size of Qatar's entire land area</strong>. Qatar is simply too small a country for this thought experiment to fit inside its own borders, however good its sunshine.",
   "stat2": "This is one of the most dramatic overflow cases in the entire game: Qatar's solar resource is genuinely world-class, but its land area is simply too small - smaller than Connecticut - for the physics to ever fit within its own borders, no matter how good the sunshine. It's a useful reminder that a country's solar potential per hectare and its total land area are two entirely separate questions.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting. Given the vast overflow, only a small arc of the circle can be shown near Qatar's own location."
  }
 }
};
