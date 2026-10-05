window.LANDGAME=window.LANDGAME||{};
LANDGAME.ru = {
 "title": "🇷🇺 How is Russia's land actually used? - Guessing Game",
 "code": "ru",
 "iso": "643",
 "alpha2": "ru",
 "lon": 105,
 "lat": 62,
 "ha": 1709820000,
 "sol100Ha": 938000,
 "demandTwh": 1147,
 "accent": "#3B6D11",
 "langs": [
  "ru",
  "en"
 ],
 "dataInfo": "Data: <strong>2023</strong> · FAO FAOSTAT · World Bank · IRENA Energy Profile Russia 2023",
 "sources": "Sources: <a href=\"https://www.fao.org/faostat/en/#data/RL\" target=\"_blank\">FAO FAOSTAT Land Use 2023</a> · <a href=\"https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=RU\" target=\"_blank\">World Bank Forest Area 2023</a> · <a href=\"https://www.irena.org/-/media/Files/IRENA/Agency/Statistics/Statistical_Profiles/Eurasia/Russian-Federation_Eurasia_RE_SP.pdf\" target=\"_blank\">IRENA Energy Profile Russia 2023</a> · Russia total land area ~1,709.8M ha.",
 "cats": {
  "ru": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Лес и тайга",
    "desc": "Около 20% мирового лесного покрова - крупнейший лесной массив на Земле, больше Амазонки. Бореальная тайга простирается от Урала до Тихого океана, служа важнейшим мировым поглотителем углерода",
    "answer": 49.8,
    "color": "#3B6D11",
    "max": 70,
    "step": 0.5,
    "answerHa": 851324000
   },
   {
    "id": "other",
    "icon": "🏔️",
    "name": "Прочие земли (тундра, вечная мерзлота, степи, горы)",
    "desc": "Арктическая тундра и вечная мерзлота на севере, плодородные чернозёмные степи на юге, горные хребты Кавказа, Урала и Сибири и обширные бореальные болота Западной Сибири",
    "answer": 32.8,
    "color": "#b8a07a",
    "max": 60,
    "step": 0.5,
    "answerHa": 561025000
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Сельскохозяйственные угодья",
    "desc": "Пашни, постоянные культуры и пастбища по всей стране - Россия входит в число ведущих мировых производителей пшеницы, ячменя, подсолнечника и сахарной свёклы",
    "answer": 13,
    "color": "#639922",
    "max": 30,
    "step": 0.2,
    "answerHa": 222478000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Водоёмы",
    "desc": "Крупнейшее в мире хранилище пресной воды: Байкал (содержит ~20% мировых запасов поверхностной пресной воды), Волга, Обь, Лена и тысячи других рек и озёр",
    "answer": 2.9,
    "color": "#378ADD",
    "max": 10,
    "step": 0.1,
    "answerHa": 50190000
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Населённые пункты и дороги",
    "desc": "Города, посёлки, деревни, дороги и инфраструктура на огромной территории России - включая Москву (12 млн жителей), Санкт-Петербург (5 млн) и ещё 13 городов с населением свыше одного миллиона человек",
    "answer": 1.5,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 25647000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Гольф-клубы",
    "desc": "Около 35 гольф-клубов по всей России - большинство в Московской области. Совокупная площадь всех российских гольф-полей примерно равна площади всех солнечных электростанций страны, что наглядно показывает, насколько мала доля солнечной энергетики в России",
    "answer": 0.0001,
    "color": "#5DCAA5",
    "max": 0.005,
    "step": 0.00005,
    "answerHa": 1700,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Солнечные электростанции (текущие)",
    "desc": "Сетевые солнечные электростанции с накопителями - по данным IRENA (2023), Россия имеет лишь ~2,1 ГВт солнечных мощностей: одна из самых низких показателей в мире для крупной экономики",
    "answer": 0.0003,
    "color": "#EF9F27",
    "max": 0.01,
    "step": 0.0001,
    "answerHa": 5250,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Подсказка: в 2023 году солнечная генерация обеспечила лишь 0,28% электроэнергии России (IRENA). Страна по-прежнему зависит от ископаемого топлива (~66% мощностей) и гидроэнергетики (~18%)"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Солнечная энергия для 100% электричества",
    "desc": "Площадь под крупные солнечные электростанции с накопителями для обеспечения всего потребления электроэнергии в России 24/7 (~1147 ТВт·ч/год) - в солнечных южных степях",
    "answer": 0.055,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 938000,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Южные степи России получают ~1100 кВт·ч/кВт·п в год (уровень Германии). При 818 га/ТВт·ч для всей сети России нужно лишь 0,055% территории страны. Накопители примерно удваивают площадь по сравнению с одними панелями. На практике Россия производит ~81% электроэнергии из ископаемого топлива и газа; солнечная генерация остаётся незначительной (0,28% в 2023 г. по данным IRENA)"
   }
  ],
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & taiga",
    "desc": "About 20% of the world's total forest cover - the largest forest on Earth, bigger than the Amazon. The boreal taiga stretches from the Urals to the Pacific, functioning as a critical global carbon sink",
    "answer": 49.8,
    "color": "#3B6D11",
    "max": 70,
    "step": 0.5,
    "answerHa": 851324000
   },
   {
    "id": "other",
    "icon": "🏔️",
    "name": "Other land (tundra, permafrost, steppe, mountains)",
    "desc": "Arctic tundra and permafrost in the north, the fertile black-soil steppes in the south, the mountain ranges of the Caucasus, Urals and Siberia, and the vast boggy lowlands of West Siberia",
    "answer": 32.8,
    "color": "#b8a07a",
    "max": 60,
    "step": 0.5,
    "answerHa": 561025000
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Cropland, permanent crops and pasture - Russia is one of the world's largest producers of wheat, barley, sunflower and sugar beet, feeding much of the world from its vast black-soil belt",
    "answer": 13,
    "color": "#639922",
    "max": 30,
    "step": 0.2,
    "answerHa": 222478000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "The world's greatest reservoir of fresh water: Lake Baikal alone holds ~20% of global surface fresh water, plus the Volga, Ob, Lena and thousands of other rivers and lakes",
    "answer": 2.9,
    "color": "#378ADD",
    "max": 10,
    "step": 0.1,
    "answerHa": 50190000
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Settlement & roads",
    "desc": "Cities, towns, villages, roads and infrastructure across Russia's vast territory - including Moscow (12 million), Saint Petersburg (5 million), and 13 other cities with over a million inhabitants",
    "answer": 1.5,
    "color": "#73726c",
    "max": 8,
    "step": 0.1,
    "answerHa": 25647000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Around 35 golf clubs across Russia, mostly in the Moscow region. The total area of all Russian golf courses is roughly equal to the total area of all Russia's solar farms - a vivid illustration of just how small Russia's solar industry currently is",
    "answer": 0.0001,
    "color": "#5DCAA5",
    "max": 0.005,
    "step": 0.00005,
    "answerHa": 1700,
    "dp": 4
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-connected utility solar PV with battery storage - Russia has just ~2.1 GW of solar capacity (IRENA 2023), one of the lowest figures in the world for a major economy",
    "answer": 0.0003,
    "color": "#EF9F27",
    "max": 0.01,
    "step": 0.0001,
    "answerHa": 5250,
    "dp": 4,
    "isSolar": true,
    "solarNote": "Hint: solar provided just 0.28% of Russia's electricity in 2023 (IRENA). Russia still relies heavily on fossil fuels (~66% of capacity) and hydropower (~18%)"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Russia's entire national grid 24/7 (~1,147 TWh/yr, IRENA 2023) - sited in the sunnier southern steppes",
    "answer": 0.055,
    "color": "#BA7517",
    "max": 1,
    "step": 0.005,
    "answerHa": 938000,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "Russia's southern steppes get ~1,100 kWh/kWp/yr (similar to Germany). At 818 ha/TWh the whole grid needs just 0.055% of Russia's land. Storage overcapacity roughly doubles land vs panels alone. In practice Russia generates ~81% of electricity from fossil fuels and fossil gas; solar remains negligible at 0.28% in 2023 (IRENA)"
   }
  ]
 },
 "strings": {
  "ru": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ru.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Как на самом деле используются земли России?",
   "subtitle": "Вдохновлено <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">коротким видео доктора Саймона Кларка на YouTube</a> (на английском). Угадайте процент российских земель для каждой категории - сумма ползунков ограничена 100%. Россия содержит около 20% мировых лесов и крупнейшие запасы пресной воды в мире - однако получает лишь 0,28% электроэнергии от солнечных установок.",
   "disclaimer": "Цифры по солнечной энергии и накопителям - это мысленный эксперимент, подготовленный с помощью ИИ, а не политическая рекомендация. Все данные по солнечной энергии относятся к сетевым установкам промышленного масштаба.",
   "noteLabel": "Примечание",
   "contextLabel": "Контекст страны",
   "countryNote": "Электроэнергетика России доминируется ископаемым газом (~47 %) и углём (~14 %), атомной (~20%) и гидроэнергетикой (~18%); доля ВИЭ (ветер+солнце) ниже 1% (IRENA 2023). Данные о землепользовании: FAO FAOSTAT 2023 и Всемирный банк. Солнечные мощности: IRENA 2023. Производство электроэнергии: Энергетический профиль России IRENA 2023.",
   "submit": "Отправить все ответы",
   "play_again": "Играть снова",
   "score": "Счёт",
   "land_used": "Использовано земли",
   "remaining": "Остаток",
   "map_guess": "Ваши ответы - карта площадей (обновляется при перетаскивании)",
   "map_answer": "Фактическое землепользование России - карта площадей",
   "allocated": "/ 100% распределено",
   "reveal": "Будет раскрыто после отправки.",
   "out_of": "точность ответов",
   "sol100_reveal": "Южные степи России получают ~1100 кВт·ч/кВт·п в год (уровень Германии). При 818 га/ТВт·ч для всей сети России нужно лишь 0,055% территории страны. Накопители примерно удваивают площадь по сравнению с одними панелями. На практике Россия производит ~81% электроэнергии из ископаемого топлива и газа; солнечная генерация остаётся незначительной (0,28% в 2023 г. по данным IRENA)",
   "grades": [
    [
     86,
     "🌲 Эксперт! Вы с удивительной точностью знаете распределение земель России."
    ],
    [
     64,
     "🐻 Очень хорошо - отличное понимание того, насколько Россия покрыта лесами."
    ],
    [
     43,
     "❄️ Неплохо! Большинство людей не осознают, что почти половина России - бореальный лес."
    ],
    [
     21,
     "🌾 Знаете ли вы? Российская тайга - крупнейший лес в мире, больше всей Амазонки."
    ],
    [
     0,
     "🤔 Удивлены? Почти половина России - крупнейшей страны мира - это бореальные леса."
    ]
   ],
   "btn_label": "English",
   "country_label": "Россия",
   "circle_label": "Необходимая площадь",
   "zoomed": "Увеличенный вид"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/ru.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Russia's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Russian land for each category - sliders are capped at 100% total. Russia contains about 20% of the world's forests and the world's greatest freshwater reserves - yet generates just 0.28% of its electricity from solar.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Russia's electricity mix is dominated by fossil gas (~47 %) and coal (~14 %), nuclear (~20%) and hydropower (~18%), with renewables (wind+solar) below 1% (IRENA 2023). Russia plans to raise renewables to 12.5% of capacity by 2042. Land use data from FAO FAOSTAT 2023 and World Bank. Solar capacity from IRENA 2023. Electricity generation from IRENA Energy Profile Russia 2023.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Russian land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Russia's southern steppes get ~1,100 kWh/kWp/yr (similar to Germany). At 818 ha/TWh the whole grid needs just 0.055% of Russia's land. Storage overcapacity roughly doubles land vs panels alone. In practice Russia generates ~81% of electricity from fossil fuels and fossil gas; solar remains negligible at 0.28% in 2023 (IRENA)",
   "grades": [
    [
     86,
     "🌲 Expert! You know Russia's colossal land distribution with impressive precision."
    ],
    [
     64,
     "🐻 Very strong - great grasp of just how forested Russia really is."
    ],
    [
     43,
     "❄️ Not bad! Most people don't realise nearly half of Russia is boreal forest."
    ],
    [
     21,
     "🌾 Did you know? Russia's taiga is the world's largest forest - bigger than the entire Amazon."
    ],
    [
     0,
     "🤔 Surprising? Almost half of Russia - the world's largest country - is boreal forest."
    ]
   ],
   "btn_label": "Русский",
   "country_label": "Russia",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "ru": {
   "head": "🌍 Что если бы Россия одна снабжала электроэнергией весь мир?",
   "fit": "При солнечных условиях южных степей России (~818 га/ТВт·ч) для обеспечения всего <strong>мирового спроса на электроэнергию</strong> (~31 000 ТВт·ч/год) потребуется около <strong>{haM} гектаров</strong> - всего <strong>{pct}% площади России</strong>, что показано ниже в виде круга эквивалентной площади. Весь этот участок умещается в пределах южной России.",
   "stat2": "Несмотря на то что сегодня Россия практически не вырабатывает солнечную электроэнергию, её огромные размеры означают, что теоретически небольшая часть южных степей могла бы обеспечить всю мировую потребность в электроэнергии за счёт солнца. На практике энергетическая стратегия России ориентирована на экспорт ископаемого топлива и развитие атомной энергетики, а не на солнечную генерацию.",
   "foot": "Пунктирный круг носит иллюстративный характер - его размер соответствует правильной площади, но это не реальное предлагаемое место размещения. При использовании более солнечных южных регионов России мысленный эксперимент физически обоснован, хотя политически и логистически маловероятен с учётом нынешних энергетических приоритетов страны."
  },
  "en": {
   "head": "🌍 What if Russia alone powered the whole world?",
   "fit": "At the solar conditions of Russia's southern steppes (~818 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} hectares</strong> - just <strong>{pct}% of Russia's land area</strong>, shown below as a circle of equivalent area. That entire patch fits within southern Russia.",
   "stat2": "Despite generating barely any solar electricity today, Russia's sheer size means it could - in theory - host the world's entire solar power supply in a fraction of its southern steppe. In practice, Russia's energy strategy centres on fossil fuel exports and nuclear expansion, not solar.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting. Using southern Russia's sunnier regions, the thought experiment is physically reasonable, though politically and logistically far-fetched given Russia's current energy priorities."
  }
 }
};
