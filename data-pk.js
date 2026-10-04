window.LANDGAME=window.LANDGAME||{};
LANDGAME.pk = {
 "title": "🇵🇰 How is Pakistan's land actually used? — Guessing Game",
 "code": "pk",
 "iso": "586",
 "alpha2": "pk",
 "lon": 69.3,
 "lat": 30,
 "ha": 77088000,
 "sol100Ha": 81490,
 "demandTwh": 145,
 "accent": "#639922",
 "langs": [
  "ur",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2026</strong> · World Bank/FAO · Pakistan Bureau of Statistics · Ember · WRI",
 "sources": "Sources: <a href=\"https://data.worldbank.org/country/pakistan\" target=\"_blank\">World Bank/FAO 2023</a> · <a href=\"https://www.pbs.gov.pk/\" target=\"_blank\">Pakistan Bureau of Statistics</a> · <a href=\"https://www.wri.org/insights/pakistan-solar-energy-boom\" target=\"_blank\">WRI: Pakistan's Solar Boom</a> · <a href=\"https://ember-energy.org/latest-insights/global-electricity-review-2025/\" target=\"_blank\">Ember Global Electricity Review 2025</a> · <a href=\"https://www.fao.org/faostat/\" target=\"_blank\">FAO</a> · Pakistan total land area ~77.1M ha.",
 "cats": {
  "ur": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "زرعی اراضی",
    "desc": "وادیٔ سندھ بھر میں فصلوں اور چراگاہوں کی زمین — دنیا کے سب سے بڑے مسلسل آبپاشی نظاموں میں سے ایک کی بدولت یہ زمین کے سب سے زیادہ شدت سے سیراب شدہ کھیتوں میں شامل ہے",
    "answer": 46.7,
    "color": "#639922",
    "max": 70,
    "step": 0.5,
    "answerHa": 36000000
   },
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "صحرا، پہاڑ اور دیگر بنجر زمین",
    "desc": "تھر اور چولستان کے صحرا، بلوچستان کا سطح مرتفع، اور قراقرم و ہمالیہ کی بلند چوٹیاں — پاکستان میں 7000 میٹر سے بلند چوٹیوں کی تعداد دنیا میں کہیں سے بھی زیادہ ہے",
    "answer": 42.8,
    "color": "#c4a96b",
    "max": 70,
    "step": 0.5,
    "answerHa": 32995000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "جنگلات",
    "desc": "پاکستان دنیا کے کم جنگلات والے بڑے ممالک میں شامل ہے؛ 2014 سے 'بلین ٹری سونامی' اور اس کے بعد کے 'ٹین بلین ٹری سونامی' منصوبے تباہ شدہ پہاڑی ڈھلوانوں کو بحال کر رہے ہیں",
    "answer": 4.7,
    "color": "#3B6D11",
    "max": 20,
    "step": 0.2,
    "answerHa": 3623000
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "آبادی اور سڑکیں",
    "desc": "کراچی، لاہور، اسلام آباد اور پاکستان کے دیگر شہر، قصبے اور سڑکوں کا جال — 24 کروڑ سے زائد آبادی کا گھر، دنیا کے سب سے زیادہ آبادی والے ممالک میں سے ایک",
    "answer": 3,
    "color": "#73726c",
    "max": 15,
    "step": 0.2,
    "answerHa": 2313000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "آبی ذخائر",
    "desc": "دریائے سندھ اور اس کی معاون ندیاں، نیز تربیلا اور منگلا جیسے آبی ذخائر — دنیا کے سب سے بڑے مٹی کے بند ڈیموں میں شامل",
    "answer": 2.8,
    "color": "#378ADD",
    "max": 10,
    "step": 0.1,
    "answerHa": 2159000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "گالف کورسز",
    "desc": "تقریباً ایک درجن گالف کورسز، زیادہ تر لاہور، راولپنڈی، کراچی اور اسلام آباد کی فوجی چھاؤنیوں سے منسلک",
    "answer": 0.0008,
    "color": "#5DCAA5",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 600,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "سولر فارمز (موجودہ)",
    "desc": "بڑے پیمانے کے، گرڈ سے منسلک سولر پی وی بمعہ بیٹری ذخیرہ — یہ پاکستان کے زبردست چھتوں پر سولر بوم سے الگ ہے جس نے تقریباً کوئی اضافی زمین استعمال نہیں کی",
    "answer": 0.0036,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.0005,
    "answerHa": 2750,
    "dp": 4,
    "isSolar": true,
    "solarNote": "اشارہ: صرف 2024 میں پاکستان نے چین اور امریکہ کے سوا کسی بھی ملک سے زیادہ سولر پینل درآمد کیے — مگر تقریباً سب پہلے سے موجود چھتوں پر نصب ہوئے، نئی زمین پر نہیں"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "100% بجلی کے لیے سولر",
    "desc": "پاکستان کے پورے قومی گرڈ کو چوبیس گھنٹے (تقریباً 145 TWh/سال) چلانے کے لیے بڑے پیمانے کے سولر+بیٹری کی درکار زمین — تھر اور چولستان کے صحراؤں کی شدید دھوپ میں",
    "answer": 0.106,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 81490,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "پاکستان کے صحراؤں میں تقریباً 1600 kWh/kWp/سال دھوپ ملتی ہے، امریکی جنوب مغرب کے برابر۔ 562 ہیکٹر/TWh کی شرح پر، پورے گرڈ کو ملک کی صرف 0.11% زمین درکار ہے۔ ذخیرہ کاری کی اضافی گنجائش زمین تقریباً دوگنی کر دیتی ہے۔ دریں اثنا پاکستان کا اصل سولر بوم تقریباً مکمل طور پر چھتوں پر رہا ہے — 2026 تک 50 گیگاواٹ سے زائد پینل درآمد ہو چکے، اسے دنیا کی سب سے بڑی سولر منڈیوں میں سے ایک بنا گیا، اس زمین کے بغیر۔"
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Cropland and pasture across the Indus Plain — fed by one of the world's largest contiguous irrigation systems, among the most intensively irrigated farmland on Earth",
    "answer": 46.7,
    "color": "#639922",
    "max": 70,
    "step": 0.5,
    "answerHa": 36000000
   },
   {
    "id": "desert",
    "icon": "🏜️",
    "name": "Desert, mountains & other barren land",
    "desc": "The Thar and Cholistan deserts, the Balochistan plateau, and the high peaks of the Karakoram and Himalaya — Pakistan has more peaks over 7,000m than almost anywhere else on Earth",
    "answer": 42.8,
    "color": "#c4a96b",
    "max": 70,
    "step": 0.5,
    "answerHa": 32995000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "One of the world's most lightly forested large countries; the national 'Billion Tree Tsunami' and follow-up 'Ten Billion Tree Tsunami' have been restoring degraded hillsides since 2014",
    "answer": 4.7,
    "color": "#3B6D11",
    "max": 20,
    "step": 0.2,
    "answerHa": 3623000
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Settlement & roads",
    "desc": "Karachi, Lahore, Islamabad and Pakistan's other cities, towns and road network — home to over 240 million people, one of the most populous nations on Earth",
    "answer": 3,
    "color": "#73726c",
    "max": 15,
    "step": 0.2,
    "answerHa": 2313000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "The Indus River and its tributaries, plus reservoirs like Tarbela and Mangla — among the largest earth-filled dams in the world",
    "answer": 2.8,
    "color": "#378ADD",
    "max": 10,
    "step": 0.1,
    "answerHa": 2159000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around a dozen golf courses, mostly attached to military cantonments in Lahore, Rawalpindi, Karachi and Islamabad",
    "answer": 0.0008,
    "color": "#5DCAA5",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 600,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Utility-scale, grid-connected solar PV with battery storage — distinct from Pakistan's enormous rooftop solar boom, which used almost no extra land at all",
    "answer": 0.0036,
    "color": "#EF9F27",
    "max": 0.1,
    "step": 0.0005,
    "answerHa": 2750,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: in 2024 alone Pakistan imported more solar panels than any country except China and the US — but nearly all of it went onto existing rooftops, not new land"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Pakistan's entire national grid 24/7 (~145 TWh/yr) — in the intense sunshine of the Thar and Cholistan deserts",
    "answer": 0.106,
    "color": "#BA7517",
    "max": 2,
    "step": 0.01,
    "answerHa": 81490,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Pakistan's deserts get ~1,600 kWh/kWp/yr, similar to the US Southwest. At 562 ha/TWh, the whole grid needs just 0.11% of the country's land. Storage overcapacity roughly doubles the land vs panels alone. Meanwhile Pakistan's real solar boom has been almost entirely rooftop: over 50 GW of panels imported by 2026, making it one of the world's largest solar markets in just a few years — without needing this land at all."
   }
  ]
 },
 "strings": {
  "ur": {
   "h1": "<img src=\"https://flagcdn.com/32x24/pk.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> پاکستان کی زمین واقعی کیسے استعمال ہوتی ہے؟",
   "subtitle": "ڈاکٹر سائمن کلارک کے <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">یوٹیوب شارٹ ویڈیو</a> (بالانگریزی) سے متاثر ہو کر۔ ہر زمرے کے لیے پاکستانی زمین کا فیصد اندازہ لگائیں — سلائیڈرز کا مجموعہ 100% تک محدود ہے۔ پاکستان دنیا کی تیزی سے ترقی کرنے والی سولر منڈیوں میں سے ایک بن چکا ہے، 2024 میں کسی بھی دوسرے ملک سے زیادہ سولر پینل درآمد کیے — تقریباً مکمل طور پر موجودہ چھتوں پر۔",
   "disclaimer": "سولر+بیٹری کے اعداد و شمار مصنوعی ذہانت کی مدد سے تیار کردہ ایک فکری تجربہ ہیں، پالیسی کی سفارش نہیں۔ تمام سولر فارم اور sol100 اعداد و شمار بڑے پیمانے کے، گرڈ سے منسلک نظاموں کا حوالہ دیتے ہیں جنہیں نئی زمین درکار ہوتی ہے۔",
   "noteLabel": "نوٹ",
   "contextLabel": "ملک کا پس منظر",
   "countryNote": "پاکستان کی اصل سولر کہانی مختلف ہے: بلند بجلی کے نرخوں اور غیر یقینی گرڈ کی وجہ سے، گھرانوں اور کاروباروں نے صرف 2024 میں 17 گیگاواٹ سے زیادہ پینل درآمد کیے — برطانیہ یا کینیڈا کی پانچ سالہ مجموعی تنصیب سے بھی زیادہ — تقریباً مکمل طور پر پہلے سے موجود چھتوں پر، نئی زمین تقریباً صفر استعمال کرتے ہوئے۔ زمین کے استعمال کے اعداد و شمار ورلڈ بینک/FAO 2023 اور پاکستان بیورو آف سٹیٹسٹکس سے۔",
   "submit": "تمام جوابات جمع کروائیں",
   "play_again": "دوبارہ کھیلیں",
   "score": "سکور",
   "land_used": "استعمال شدہ زمین",
   "remaining": "باقی",
   "map_guess": "آپ کے اندازے — متناسب رقبہ نقشہ (سلائیڈ کرنے پر اپ ڈیٹ ہوتا ہے)",
   "map_answer": "پاکستان میں زمین کا اصل استعمال — متناسب رقبہ نقشہ",
   "allocated": "/ 100% مختص",
   "reveal": "جمع کروانے کے بعد ظاہر ہوگا۔",
   "out_of": "درستگی کا سکور",
   "sol100_reveal": "پاکستان کے صحراؤں میں تقریباً 1600 kWh/kWp/سال دھوپ ملتی ہے، امریکی جنوب مغرب کے برابر۔ 562 ہیکٹر/TWh کی شرح پر، پورے گرڈ کو ملک کی صرف 0.11% زمین درکار ہے۔ ذخیرہ کاری کی اضافی گنجائش زمین تقریباً دوگنی کر دیتی ہے۔ دریں اثنا پاکستان کا اصل سولر بوم تقریباً مکمل طور پر چھتوں پر رہا ہے — 2026 تک 50 گیگاواٹ سے زائد پینل درآمد ہو چکے، اسے دنیا کی سب سے بڑی سولر منڈیوں میں سے ایک بنا گیا، اس زمین کے بغیر۔",
   "grades": [
    [
     86,
     "🏏 ماہر! آپ پاکستان کی غیر معمولی زمین کی تقسیم انتہائی درستگی سے جانتے ہیں۔"
    ],
    [
     64,
     "🌾 بہت عمدہ — وادیٔ سندھ کی زرعی اہمیت کی گہری سمجھ۔"
    ],
    [
     43,
     "🏔️ برا نہیں! بیشتر لوگ پاکستان کے بنجر اور پہاڑی رقبے کو کم سمجھتے ہیں۔"
    ],
    [
     21,
     "☀️ کیا آپ جانتے ہیں؟ پاکستان دنیا کی تیز ترین سولر منڈیوں میں سے ایک بن چکا ہے۔"
    ],
    [
     0,
     "🤔 حیران کن؟ پاکستان کا تقریباً 43% رقبہ صحرا، پہاڑ یا بنجر زمین پر مشتمل ہے۔"
    ]
   ],
   "btn_label": "English",
   "country_label": "پاکستان",
   "circle_label": "درکار رقبہ",
   "zoomed": "بڑا منظر"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/pk.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Pakistan's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Pakistani land for each category — sliders are capped at 100% total. Pakistan has become one of the fastest-growing solar markets on Earth, importing more solar panels in 2024 than almost any other country — almost entirely onto existing rooftops.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery 'farm' and 'sol100' figures refer to utility-scale, grid-connected systems that require new land.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Pakistan's real solar story is different: driven by high tariffs and an unreliable grid, households and businesses imported over 17 GW of panels in 2024 alone — more than the UK or Canada have installed in five years combined — overwhelmingly onto rooftops that already existed, adding essentially zero new land use. Land use figures from World Bank/FAO 2023 and the Pakistan Bureau of Statistics.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Pakistani land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Pakistan's deserts get ~1,600 kWh/kWp/yr, similar to the US Southwest. At 562 ha/TWh, the whole grid needs just 0.11% of the country's land. Storage overcapacity roughly doubles the land vs panels alone. Meanwhile Pakistan's real solar boom has been almost entirely rooftop: over 50 GW of panels imported by 2026, making it one of the world's largest solar markets in just a few years — without needing this land at all.",
   "grades": [
    [
     86,
     "🏏 Expert! You know Pakistan's extraordinary land split with remarkable precision."
    ],
    [
     64,
     "🌾 Very strong — great grasp of how dominant the Indus Plain really is."
    ],
    [
     43,
     "🏔️ Not bad! Most people underestimate how much of Pakistan is barren or mountainous."
    ],
    [
     21,
     "☀️ Did you know? Pakistan has become one of the fastest-growing solar markets on Earth."
    ],
    [
     0,
     "🤔 Surprising? Nearly 43% of Pakistan is desert, mountain or other barren land."
    ]
   ],
   "btn_label": "اردو",
   "country_label": "Pakistan",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ur": {
   "head": "🌍 اگر پاکستان اکیلا پوری دنیا کو بجلی فراہم کرے تو؟",
   "fit": "پاکستان کے سولر حالات (~562 ہیکٹر/TWh) کے مطابق، پوری <strong>عالمی بجلی کی طلب</strong> (~31,000 TWh/سال) پوری کرنے کے لیے تقریباً <strong>{haM} ہیکٹر</strong> درکار ہوں گے — یعنی <strong>پاکستان کے رقبے کا صرف {pct}%</strong>، جو نیچے مساوی رقبے کے ایک دائرے کی صورت دکھایا گیا ہے۔ یہ دائرہ مکمل طور پر پاکستان کے اپنے صحراؤں کے اندر سما جاتا ہے۔",
   "stat2": "پاکستان کے وسیع تھر اور چولستان صحراؤں اور شدید دھوپ کا امتزاج اسے اس کھیل کے سب سے زیادہ قابلِ یقین سولر تصورات میں سے ایک بناتا ہے۔ حقیقت میں، پاکستان پہلے ہی چھتوں پر سولر کے ذریعے دنیا کی تیز ترین توانائی کی منتقلیوں میں سے ایک سے گزر رہا ہے۔",
   "foot": "نقطہ دار دائرہ محض وضاحتی ہے — درست رقبے کے مطابق سائز کیا گیا ہے، مگر کوئی حقیقی تجویز کردہ مقام نہیں۔ پاکستان کے غیر معمولی سولر وسائل اور وسیع صحراؤں کے پیش نظر، یہ فکری تجربہ بیشتر ممالک کی نسبت کم تصوراتی ہے۔"
  },
  "en": {
   "head": "🌍 What if Pakistan alone powered the whole world?",
   "fit": "At Pakistan's solar conditions (~562 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} hectares</strong> — just <strong>{pct}% of Pakistan's land area</strong>, shown below as a circle of equivalent area. That entire patch fits within Pakistan's own deserts.",
   "stat2": "Pakistan's combination of vast desert (Thar, Cholistan) and exceptional sunshine makes this one of the most compelling solar thought experiments in the game. In reality, Pakistan is already living through one of the world's fastest energy transitions via rooftop solar.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. Given Pakistan's exceptional solar resource and vast deserts, this thought experiment is less fanciful than for most countries."
  }
 }
};
