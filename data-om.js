window.LANDGAME=window.LANDGAME||{};
LANDGAME.om = {
 "title": "🇴🇲 How is Oman's land actually used? — Guessing Game",
 "code": "om",
 "iso": "512",
 "alpha2": "om",
 "lon": 56.5,
 "lat": 20.5,
 "ha": 30950000,
 "sol100Ha": 17160,
 "demandTwh": 40,
 "accent": "#c4a96b",
 "langs": [
  "ar",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2026</strong> · FAO/AQUASTAT · World Bank · IEA · Enerdata · Carnegie Endowment",
 "sources": "Sources: <a href=\"https://www.fao.org/aquastat/en/countries-and-basins/country-profiles/country/OMN\" target=\"_blank\">FAO AQUASTAT Oman</a> · <a href=\"https://data.worldbank.org/country/oman\" target=\"_blank\">World Bank Oman</a> · <a href=\"https://www.iea.org/countries/oman\" target=\"_blank\">IEA Oman</a> · <a href=\"https://carnegieendowment.org/research/2024/05/morocco-oman-energy-transition-oil-exporting-renewable\" target=\"_blank\">Carnegie Endowment: Oman &amp; Morocco Energy Transition</a> · Oman total land area ~30.95M ha (309,500 km²).",
 "cats": {
  "ar": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "الصحراء والسهول الحصوية الداخلية",
    "desc": "امتداد شاسع من السهول الحصوية والرملية يغطي أكثر من أربعة أخماس مساحة عُمان، بما في ذلك جزء من الربع الخالي — أحد أكبر امتدادات الرمال المتصلة في العالم",
    "answer": 81.9624,
    "color": "#c4a96b",
    "max": 95,
    "step": 0.5,
    "answerHa": 25367363
   },
   {
    "id": "mountain",
    "icon": "⛰️",
    "name": "الجبال",
    "desc": "سلسلة جبال الحجر في الشمال، التي تصل قممها إلى نحو 3000 متر عند جبل شمس، وجبال ظفار في الجنوب — وهي الجبال الوحيدة في شبه الجزيرة العربية المتأثرة بالرياح الموسمية الصيفية",
    "answer": 15,
    "color": "#8a7860",
    "max": 25,
    "step": 0.5,
    "answerHa": 4642500
   },
   {
    "id": "agri",
    "icon": "🌴",
    "name": "الأراضي الزراعية",
    "desc": "مزارع النخيل والمحاصيل المروية على طول سهل الباطنة الساحلي الشمالي وواحات المناطق الداخلية، تُروى غالبًا عبر نظام الأفلاج التقليدي الذي يعود عمره إلى أكثر من ألف عام",
    "answer": 0.33,
    "color": "#639922",
    "max": 3,
    "step": 0.02,
    "answerHa": 102135
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "المناطق العمرانية والطرق",
    "desc": "مسقط الكبرى وصحار وصلالة، إلى جانب شبكة طرق حديثة تربط بين المحافظات الساحلية والداخلية المتباعدة",
    "answer": 1.5,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 464250
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "المسطحات المائية والسبخات الساحلية",
    "desc": "الأودية الموسمية (الوديان) والخُورات الساحلية والسبخات الملحية — لا توجد أنهار دائمة في عُمان، وتعتمد البلاد بشكل شبه كامل على المياه الجوفية",
    "answer": 1.2,
    "color": "#378ADD",
    "max": 4,
    "step": 0.1,
    "answerHa": 371400
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ملاعب الغولف",
    "desc": "ملعبان أو ثلاثة فقط في عُمان، أبرزها ملعب الموج في مسقط — رياضة الغولف لا تزال محدودة الانتشار مقارنة بجيران عُمان الخليجيين",
    "answer": 0.0006,
    "color": "#5DCAA5",
    "max": 0.01,
    "step": 0.0002,
    "answerHa": 186,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "محطات الطاقة الشمسية (الحالية)",
    "desc": "محطات كبرى متصلة بالشبكة، أبرزها محطة عبري 2 (500 ميغاواط)، إحدى أكبر محطات الطاقة الشمسية في المنطقة، إلى جانب مشاريع قيد الإنشاء في منح والدقم",
    "answer": 0.007,
    "color": "#EF9F27",
    "max": 0.15,
    "step": 0.005,
    "answerHa": 2250,
    "dp": 3,
    "isSolar": true,
    "solarNote": "تلميح: رغم التصريحات الطموحة، لم تتجاوز الطاقة الشمسية نسبة 4% من إجمالي توليد الكهرباء في عُمان بحلول 2023 — إذ لا يزال الغاز الطبيعي يشكل نحو 92% من مزيج الطاقة"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "طاقة شمسية لتوليد 100% من الكهرباء",
    "desc": "المساحة اللازمة من محطات الطاقة الشمسية الكبرى مع أنظمة التخزين لتزويد الشبكة الكهربائية العُمانية بالكامل على مدار الساعة (نحو 40 تيراواط ساعة سنويًا)، باستخدام الإشعاع الشمسي الاستثنائي الذي يتجاوز 300 يوم مشمس سنويًا",
    "answer": 0.0554,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 17160,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "تتمتع عُمان بواحدة من أعلى معدلات الإشعاع الشمسي المباشر في العالم، بمعدل يقارب 2100 كيلوواط ساعة لكل كيلوواط ذروة سنويًا. عند معدل 429 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها إلى 0.055% فقط من مساحة عُمان. لكن المفارقة الكبرى: تقدّر عُمان أنها ستحتاج إلى نحو 50 تيراواط ساعة من الكهرباء المتجددة لتحقيق أهدافها الخاصة بالهيدروجين الأخضر بحلول 2030 وحدها — وهي كمية تفوق كامل نظامها الكهربائي الحالي (نحو 40 تيراواط ساعة). فالتحدي ليس في الأرض أو الشمس، بل في بناء نظام طاقة متجددة أكبر مما هو قائم اليوم بالكامل، من الصفر تقريبًا"
   }
  ],
  "en": [
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert & internal gravel plains",
    "desc": "A vast expanse of gravel and sand plains covering over four-fifths of Oman, including part of the Rub' al Khali (Empty Quarter) — one of the largest contiguous sand deserts on Earth",
    "answer": 81.9624,
    "color": "#c4a96b",
    "max": 95,
    "step": 0.5,
    "answerHa": 25367363
   },
   {
    "id": "mountain",
    "icon": "⛰️",
    "name": "Mountains",
    "desc": "The Hajar range in the north, reaching about 3,000m at Jabal Shams, and the Dhofar mountains in the south — the only mountains on the Arabian Peninsula affected by the summer monsoon",
    "answer": 15,
    "color": "#8a7860",
    "max": 25,
    "step": 0.5,
    "answerHa": 4642500
   },
   {
    "id": "agri",
    "icon": "🌴",
    "name": "Agricultural land",
    "desc": "Date palm groves and irrigated crops along the northern Batinah coastal plain and interior oases, largely watered by the millennium-old traditional falaj irrigation system",
    "answer": 0.33,
    "color": "#639922",
    "max": 3,
    "step": 0.02,
    "answerHa": 102135
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Greater Muscat, Sohar and Salalah, plus a modern road network linking Oman's widely dispersed coastal and interior governorates",
    "answer": 1.5,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 464250
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies & coastal sabkha",
    "desc": "Seasonal wadis, coastal khwars (lagoons) and salt flats (sabkha) — Oman has no permanent rivers, and relies almost entirely on groundwater",
    "answer": 1.2,
    "color": "#378ADD",
    "max": 4,
    "step": 0.1,
    "answerHa": 371400
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Only two or three courses in Oman, most notably Al Mouj Golf in Muscat — the sport remains far less established here than in Oman's Gulf neighbours",
    "answer": 0.0006,
    "color": "#5DCAA5",
    "max": 0.01,
    "step": 0.0002,
    "answerHa": 186,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected utility-scale solar, led by the 500 MW Ibri II plant — one of the region's largest — plus projects under construction at Manah and Duqm",
    "answer": 0.007,
    "color": "#EF9F27",
    "max": 0.15,
    "step": 0.005,
    "answerHa": 2250,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: despite ambitious announcements, solar still supplied only about 4% of Oman's total electricity generation by 2023 — natural gas still accounts for roughly 92% of the mix"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Oman's entire national grid 24/7 (~40 TWh/yr), using exceptional solar irradiance across more than 300 sunny days a year",
    "answer": 0.0554,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 17160,
    "dp": 3,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Oman has some of the highest direct solar irradiance on Earth, roughly 2,100 kWh/kWp/yr. At 429 ha/TWh, powering the whole grid needs just 0.055% of Oman's land. But here's the real paradox: Oman estimates it will need roughly 50 TWh of renewable electricity just to meet its own 2030 green hydrogen targets alone — more than its entire current electricity system (~40 TWh). The challenge isn't land or sunlight; it's building a renewable power system larger than what exists today, essentially from scratch"
   }
  ]
 },
 "strings": {
  "ar": {
   "h1": "<img src=\"https://flagcdn.com/32x24/om.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> كيف تُستخدم أراضي عُمان فعلاً؟",
   "subtitle": "مستوحى من <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">فيديو قصير على يوتيوب لدكتور سايمون كلارك</a> (بالإنجليزية). خمّن نسبة أراضي عُمان لكل فئة — مجموع المحددات لا يتجاوز 100%. لا تزال عُمان تعتمد على المحروقات في نحو 75% من إيرادات الحكومة، لكنها تراهن بقوة على الطاقة الشمسية وطاقة الرياح وصادرات الهيدروجين الأخضر لإعادة تشكيل اقتصادها بحلول 2040.",
   "disclaimer": "أرقام الطاقة الشمسية والبطاريات هي تجربة فكرية أُعدّت بمساعدة الذكاء الاصطناعي، وليست توصية سياسية. تشير جميع أرقام الطاقة الشمسية إلى أنظمة كبرى متصلة بالشبكة.",
   "noteLabel": "ملاحظة",
   "contextLabel": "سياق الدولة",
   "countryNote": "تستهدف عُمان الوصول إلى 30% من الكهرباء المتجددة بحلول 2030 (مقارنة بـ4% فقط في 2023)، وتسعى لأن تصبح مُصدّرًا رئيسيًا للهيدروجين الأخضر بموجب استراتيجيتها الخاصة بالهيدروجين الأخضر، عبر مشاريع مثل Hyport Duqm ومزادات هيدروم الوطنية. تشير تحليلات مستقلة إلى أن أهداف عُمان للهيدروجين الأخضر بحلول 2030 وحدها ستحتاج إلى نحو 50 تيراواط ساعة من الكهرباء المتجددة — أي أكثر من كامل نظامها الكهربائي الحالي. مثّلت المحروقات نحو 75% من الإيرادات المالية الحكومية و68% من الصادرات في 2024. بيانات استخدام الأراضي من FAO/AQUASTAT والبنك الدولي؛ يُلاحظ أن جغرافية عُمان تهيمن عليها الصحراء (82%) والجبال (15%)، بينما تنحصر الزراعة والعمران والمياه في شريط ساحلي وواحات ضيقة. بيانات الكهرباء من الوكالة الدولية للطاقة وإنيرداتا ومصادر أكاديمية 2022–2024.",
   "submit": "إرسال جميع الإجابات",
   "play_again": "العب مرة أخرى",
   "score": "النتيجة",
   "land_used": "الأرض المستخدمة",
   "remaining": "المتبقي",
   "map_guess": "تخميناتك — خريطة مساحة تناسبية (تتحدث عند التمرير)",
   "map_answer": "استخدام الأراضي الفعلي في عُمان — خريطة مساحة تناسبية",
   "allocated": "/ 100% مخصص",
   "reveal": "يُكشف بعد الإرسال.",
   "out_of": "نتيجة الدقة",
   "sol100_reveal": "تتمتع عُمان بواحدة من أعلى معدلات الإشعاع الشمسي المباشر في العالم، بمعدل يقارب 2100 كيلوواط ساعة لكل كيلوواط ذروة سنويًا. عند معدل 429 هكتارًا لكل تيراواط ساعة، يحتاج تزويد الشبكة بأكملها إلى 0.055% فقط من مساحة عُمان. لكن المفارقة الكبرى: تقدّر عُمان أنها ستحتاج إلى نحو 50 تيراواط ساعة من الكهرباء المتجددة لتحقيق أهدافها الخاصة بالهيدروجين الأخضر بحلول 2030 وحدها — وهي كمية تفوق كامل نظامها الكهربائي الحالي (نحو 40 تيراواط ساعة). فالتحدي ليس في الأرض أو الشمس، بل في بناء نظام طاقة متجددة أكبر مما هو قائم اليوم بالكامل، من الصفر تقريبًا",
   "grades": [
    [
     86,
     "🇴🇲 خبير! أنت تعرف توازن الأراضي في عُمان بدقة مثيرة للإعجاب."
    ],
    [
     64,
     "🏜️ قوي جدًا — فهم دقيق لمدى هيمنة الصحراء على عُمان."
    ],
    [
     43,
     "☀️ ليس سيئًا! يبالغ معظم الناس في تقدير حصة الطاقة الشمسية الحالية من كهرباء عُمان."
    ],
    [
     21,
     "⛰️ هل تعلم؟ عُمان هي البلد الوحيد في شبه الجزيرة العربية الذي تتأثر جباله بالرياح الموسمية."
    ],
    [
     0,
     "🤔 مفاجأة؟ طموحات عُمان في الهيدروجين الأخضر وحدها تحتاج كهرباء أكثر مما تنتجه شبكتها الحالية بالكامل."
    ]
   ],
   "btn_label": "English",
   "country_label": "عُمان",
   "circle_label": "المساحة المطلوبة",
   "zoomed": "عرض مكبّر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/om.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Oman's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Omani land for each category — sliders are capped at 100% total. Oman still relies on hydrocarbons for around 75% of government revenue, but is betting heavily on solar, wind and green hydrogen exports to reshape its economy by 2040.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Oman targets 30% renewable electricity by 2030 (up from just 4% in 2023) and aims to become a major green hydrogen exporter under its Green Hydrogen Strategy, with projects like Hyport Duqm and Hydrom's national auctions. Independent analysis suggests Oman's 2030 green hydrogen targets alone would require roughly 50 TWh of renewable electricity — exceeding its entire current electricity system. Hydrocarbons represented about 75% of government fiscal revenue and 68% of exports in 2024. Land use figures from FAO/AQUASTAT and World Bank; note that Oman's physiographic land is dominated by desert (82%) and mountains (15%), with agriculture, settlement and water confined to a narrow coastal and oasis fringe. Electricity figures from IEA, Enerdata and academic sources 2022–2024.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Omani land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Oman has some of the highest direct solar irradiance on Earth, roughly 2,100 kWh/kWp/yr. At 429 ha/TWh, powering the whole grid needs just 0.055% of Oman's land. But here's the real paradox: Oman estimates it will need roughly 50 TWh of renewable electricity just to meet its own 2030 green hydrogen targets alone — more than its entire current electricity system (~40 TWh). The challenge isn't land or sunlight; it's building a renewable power system larger than what exists today, essentially from scratch",
   "grades": [
    [
     86,
     "🇴🇲 Expert! You know Oman's land balance with impressive precision."
    ],
    [
     64,
     "🏜️ Very strong — sharp grasp of just how desert-dominated Oman really is."
    ],
    [
     43,
     "☀️ Not bad! Most people overestimate how much of Oman's electricity is already solar."
    ],
    [
     21,
     "⛰️ Did you know? Oman is the only country on the Arabian Peninsula with monsoon-affected mountains."
    ],
    [
     0,
     "🤔 Surprising? Oman's green hydrogen ambitions alone would require more electricity than its entire current grid produces."
    ]
   ],
   "btn_label": "عربي",
   "country_label": "Oman",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ar": {
   "head": "🌍 ماذا لو أمدّت عُمان وحدها العالم بالكهرباء؟",
   "fit": "بفضل الظروف الشمسية الاستثنائية في عُمان (نحو 429 هكتار لكل تيراواط ساعة، من بين الأفضل على وجه الأرض)، فإن تغطية <strong>الطلب العالمي على الكهرباء</strong> بأكمله (نحو 31,000 تيراواط ساعة سنويًا) تحتاج إلى نحو <strong>{haM} مليون هكتار</strong> — أي <strong>{pct}% من مساحة عُمان</strong>، موضحة أدناه كدائرة بمساحة مكافئة. تقع هذه الدائرة داخل الصحراء الداخلية الشاسعة في عُمان.",
   "stat2": "يجعل مزيج الإشعاع الشمسي الرائد عالميًا مع الداخل الصحراوي الواسع في عُمان هذه التجربة الفكرية من أكثر التجارب مصداقية فيزيائية في اللعبة — إلا أن طموحات عُمان المحلية في الهيدروجين الأخضر وحدها ستتجاوز بالفعل كامل نظامها الكهربائي الحالي. الفجوة بين الإمكانات الفيزيائية والبنية التحتية المُنشأة فعليًا — وليس أشعة الشمس أو الأرض — هي ما يفصل عُمان عن أن تصبح \"دولة كهربائية\" حقيقية مصدّرة للطاقة النظيفة.",
   "foot": "الدائرة المنقّطة توضيحية فقط — بحجم المساحة الصحيحة، وليست موقعًا مقترحًا فعليًا. بالنظر إلى المورد الشمسي الاستثنائي لعُمان، فإن هذه التجربة الفكرية أكثر واقعية فيزيائيًا مقارنة بمعظم الدول الأخرى في اللعبة."
  },
  "en": {
   "head": "🌍 What if Oman alone powered the whole world?",
   "fit": "At Oman's exceptional solar conditions (~429 ha/TWh, among the best on Earth), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> — <strong>{pct}% of Oman's land area</strong>, shown below as a circle of equivalent area. That circle fits within Oman's own vast desert interior.",
   "stat2": "Oman's combination of world-leading solar irradiance and a large desert interior makes this one of the most physically credible thought experiments in the game — yet Oman's own domestic green hydrogen ambitions alone would already exceed its entire current electricity system. The gap between physical potential and built infrastructure, not sunlight or land, is what stands between Oman and becoming a true clean-energy exporting electrostate.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, not an actual proposed siting. Given Oman's exceptional solar resource, this thought experiment is more physically grounded than for most countries in the game."
  }
 }
};
