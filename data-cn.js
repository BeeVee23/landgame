window.LANDGAME=window.LANDGAME||{};
LANDGAME.cn = {
 "title": "🇨🇳 How is China's land actually used? - Guessing Game",
 "code": "cn",
 "iso": "156",
 "alpha2": "cn",
 "lon": 104,
 "lat": 35,
 "ha": 960000000,
 "sol100Ha": 6000000,
 "demandTwh": 9850,
 "accent": "#639922",
 "langs": [
  "zh",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2024</strong> · NBS China · World Bank · EIA · NEA",
 "sources": "Sources: <a href=\"https://www.stats.gov.cn/english/\" target=\"_blank\">National Bureau of Statistics of China 2024</a> · <a href=\"https://data.worldbank.org/country/CN\" target=\"_blank\">World Bank Development Indicators 2023</a> · <a href=\"https://www.eia.gov/todayinenergy/detail.php?id=65064\" target=\"_blank\">EIA: China's solar capacity grew rapidly in 2024</a> · <a href=\"https://www.nea.gov.cn/\" target=\"_blank\">NEA</a> · China total land area ~960M ha.",
 "cats": {
  "zh": [
   {
    "id": "grass",
    "icon": "🌿",
    "name": "草地与牧场",
    "desc": "广阔的草原、高山草甸和荒漠草地--主要分布在内蒙古、西藏和新疆；大部分已退化",
    "answer": 41.72,
    "color": "#8db84a",
    "max": 60,
    "step": 0.5,
    "answerHa": 400512000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "森林",
    "desc": "天然林主要分布在中国东北和西南，加上大规模国家造林计划--中国植树数量居世界之首",
    "answer": 22.26,
    "color": "#3B6D11",
    "max": 35,
    "step": 0.5,
    "answerHa": 213696000
   },
   {
    "id": "other",
    "icon": "🏔️",
    "name": "荒漠、冻原与裸地",
    "desc": "戈壁、塔克拉玛干及其他荒漠，西藏高原裸地--部分已被改造用于太阳能发电",
    "answer": 13.97,
    "color": "#888780",
    "max": 25,
    "step": 0.5,
    "answerHa": 134112000
   },
   {
    "id": "crop",
    "icon": "🌾",
    "name": "耕地",
    "desc": "水稻田、小麦和玉米分布在东部平原和长江流域--集中在最肥沃的地区",
    "answer": 12.88,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 123648000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "高尔夫球场",
    "desc": "中国仅有约700个高尔夫球场--自2004年起官方因土地和水资源问题对该运动加以限制",
    "answer": 0,
    "color": "#5DCAA5",
    "max": 0.2,
    "step": 0.001,
    "answerHa": 0
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "城市与建成区",
    "desc": "世界上规模最大的城镇化扩张--100多个人口超百万的城市，仍在快速增长",
    "answer": 3.99,
    "color": "#73726c",
    "max": 12,
    "step": 0.5,
    "answerHa": 38304000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "内陆水体",
    "desc": "长江、黄河、主要湖泊以及世界上规模最大的水电水库网络",
    "answer": 2.79,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 26784000
   },
   {
    "id": "prot",
    "icon": "🐼",
    "name": "保护区与湿地",
    "desc": "国家自然保护区、湿地和生物多样性保护区--大熊猫和雪豹的家园",
    "answer": 2.2,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.1,
    "answerHa": 21120000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "太阳能+储能（现状）",
    "desc": "公用事业级并网太阳能光伏（2024年底880吉瓦）--全球最大的太阳能装机，主要分布在阳光充足的西北地区",
    "answer": 0.18,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 1728000,
    "isSolar": true,
    "solarNote": "提示：880吉瓦公用事业级太阳能--但中国幅员辽阔（9.6亿公顷）"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "太阳能+储能覆盖100%用电",
    "desc": "公用事业级太阳能+储能全天候供应中国全国电网所需土地（约9850太瓦时/年）--因储能超额配置约为纯光伏的两倍",
    "answer": 0.63,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 6048000,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "grass",
    "icon": "🌿",
    "name": "Grassland & pasture",
    "desc": "Vast steppes, alpine meadows and desert grasslands - mainly in Inner Mongolia, Tibet and Xinjiang; much is degraded",
    "answer": 41.72,
    "color": "#8db84a",
    "max": 60,
    "step": 0.5,
    "answerHa": 400512000
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Natural forest mainly in NE and SW China, plus extensive state plantation programmes - China plants more trees than any other country",
    "answer": 22.26,
    "color": "#3B6D11",
    "max": 35,
    "step": 0.5,
    "answerHa": 213696000
   },
   {
    "id": "other",
    "icon": "🏔️",
    "name": "Desert, tundra & barren",
    "desc": "Gobi, Taklamakan and other deserts, Tibetan plateau barren land - some now being repurposed for solar",
    "answer": 13.97,
    "color": "#888780",
    "max": 25,
    "step": 0.5,
    "answerHa": 134112000
   },
   {
    "id": "crop",
    "icon": "🌾",
    "name": "Arable & cropland",
    "desc": "Paddy fields, wheat and maize in the eastern plains and Yangtze valley - concentrated in the most fertile regions",
    "answer": 12.88,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 123648000
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "China has only ~700 golf courses - the sport has faced official restrictions since 2004 over land and water use concerns",
    "answer": 0,
    "color": "#5DCAA5",
    "max": 0.2,
    "step": 0.001,
    "answerHa": 0
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & built-up",
    "desc": "The world's most extensive urban expansion - 100+ cities with over 1 million inhabitants, growing rapidly",
    "answer": 3.99,
    "color": "#73726c",
    "max": 12,
    "step": 0.5,
    "answerHa": 38304000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Yangtze, Yellow River, major lakes and the world's largest network of hydropower reservoirs",
    "answer": 2.79,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 26784000
   },
   {
    "id": "prot",
    "icon": "🐼",
    "name": "Protected & wetlands",
    "desc": "National nature reserves, wetlands and protected biodiversity areas - home to the giant panda and snow leopard",
    "answer": 2.2,
    "color": "#5DCAA5",
    "max": 8,
    "step": 0.1,
    "answerHa": 21120000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale grid-connected solar PV (880 GW end 2024) - the largest solar fleet in the world by far, mostly in the sunny northwest",
    "answer": 0.18,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 1728000,
    "isSolar": true,
    "solarNote": "Hint: 880 GW utility-scale - but China is enormous (960M ha)"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power China's entire national grid 24/7 (~9,850 TWh/yr) - roughly 2x panels-only due to storage overcapacity",
    "answer": 0.63,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 6048000,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "zh": {
   "h1": "<img src=\"https://flagcdn.com/32x24/cn.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> 中国的土地是如何使用的？",
   "subtitle": "受<a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">西蒙·克拉克博士YouTube短片</a>（英文）启发。猜测中国各类土地的百分比--滑块总计上限为100%。中国是世界上人口最多的国家，也是可再生能源发展最迅速的国家。",
   "disclaimer": "太阳能+储能数据是借助AI生成的思维实验，并非政策建议。所有数据均指与电网相连的公用事业规模系统。中国的能源转型是历史上最快的，但煤炭仍供应超过60%的电力。数据来源于国家统计局和世界银行。",
   "noteLabel": "注",
   "contextLabel": "国家背景",
   "countryNote": "中国的能源转型是历史上速度最快的--但煤炭目前仍占电力供应的60%以上。风能、水电和核能都在与太阳能一同扩张。中国广袤的沙漠已经开始被太阳能电站覆盖。土地利用数据为近似值，来源于世界银行和国家统计局。",
   "submit": "提交答案",
   "play_again": "再玩一次",
   "score": "得分",
   "land_used": "已分配土地",
   "remaining": "剩余",
   "map_guess": "您的猜测 - 比例面积图（拖动时更新）",
   "map_answer": "中国实际土地利用 - 比例面积图",
   "allocated": "/ 已分配100%",
   "reveal": "提交后揭晓。",
   "out_of": "准确度得分",
   "sol100_reveal": "中国目前已有0.18%的土地覆盖了太阳能，以当前的建设速度，这一目标在十年内看起来很有可能实现。",
   "grades": [
    [
     72,
     "🏆 中国专家--您深入了解这个世界上最具戏剧性的土地与能源故事！"
    ],
    [
     54,
     "🌏 非常优秀--对中国辽阔多样的地貌有敏锐的把握。"
    ],
    [
     36,
     "🐼 不错！中国草地占主导的现实让大多数人感到意外。"
    ],
    [
     18,
     "☀️ 中国正在转型--仅2024年安装的太阳能就超过了美国全部装机容量。"
    ],
    [
     0,
     "🤔 出乎意料？中国42%是草地和草原--却也是世界太阳能超级大国。"
    ]
   ],
   "btn_label": "English",
   "solar_banner": "中国的太阳能革命：仅在2024年，中国就安装了277吉瓦的公用事业级太阳能--超过整个美国太阳能装机容量的两倍，而美国是历经数十年才建成的。截至2025年5月，中国太阳能总装机容量突破1太瓦，单月新增装机量超过其他任何国家一整年的安装量。中国到2030年实现1200吉瓦太阳能+风能的目标已在2024年提前近六年完成。",
   "country_label": "中国",
   "circle_label": "所需土地面积",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/cn.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is China's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Chinese land for each category - sliders are capped at 100% total. China is the world's most populous nation and its most dramatic renewable energy story.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. China's energy transition is the fastest in history - but coal still supplies over 60% of electricity. Wind, hydro, and nuclear are all expanding alongside solar. China's vast deserts are already being covered with solar farms. Land use figures are approximate and sourced from World Bank and National Bureau of Statistics data.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "China's energy transition is the fastest in history - but coal still supplies over 60% of electricity. Wind, hydro, and nuclear are all expanding alongside solar. China's vast deserts are already being covered with solar farms. Land use figures are approximate and sourced from World Bank and National Bureau of Statistics data.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Chinese land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "yet China already has 0.18% covered in solar and is building at a pace that makes this target look very achievable within a decade.",
   "grades": [
    [
     72,
     "🏆 China expert - you know the world's most dramatic land and energy story!"
    ],
    [
     54,
     "🌏 Very strong - sharp sense of China's vast and varied landscape."
    ],
    [
     36,
     "🐼 Not bad! China's grassland dominance surprises most people."
    ],
    [
     18,
     "☀️ China is transforming - solar installed in 2024 alone exceeded the entire US fleet."
    ],
    [
     0,
     "🤔 Surprising? China is 42% grassland and steppe - yet also the world's solar superpower."
    ]
   ],
   "btn_label": "中文",
   "solar_banner": "China's solar revolution: In 2024 alone, China installed 277 GW of utility-scale solar - more than twice the entire US solar fleet, built over decades. By May 2025 China crossed 1 terawatt of total solar capacity, installing more in a single month than any other country manages in a year. China's 2030 target of 1,200 GW of solar+wind was met in 2024, nearly six years early.",
   "country_label": "China",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "zh": {
   "head": "🌍 如果仅由中国一国为全世界供电会怎样？",
   "fit": "仅使用中国自身的太阳能条件来满足<strong>全球电力需求</strong>（每年约31,000太瓦时），大约需要<strong>{haM}公顷</strong>--相当于中国国土面积的<strong>{pct}%</strong>，下方以等面积的圆圈表示。",
   "overflow": "仅使用中国自身的太阳能条件来满足<strong>全球电力需求</strong>（每年约31,000太瓦时），大约需要<strong>{haM}公顷</strong>--相当于<strong>整个国家面积的{mult}倍</strong>。下方以中国为中心绘制的圆圈明显超出了国界，这说明太阳能地理条件和气候与土地可用性同样重要。",
   "foot": "虚线圆圈仅作示意--按正确的土地面积绘制，但并非实际拟议选址。它与现有国界重叠仅用于比例参考。"
  },
  "en": {
   "head": "🌍 What if China alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using China's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{pct}%</strong> of China's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using China's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{mult}× the entire country</strong>. The circle below shows that area centred on China - it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "zh": "百万",
   "en": "million"
  }
 }
};
