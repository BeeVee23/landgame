window.LANDGAME=window.LANDGAME||{};
LANDGAME.jp = {
 "title": "🇯🇵 How is Japan's land actually used? — Guessing Game",
 "code": "jp",
 "iso": "392",
 "alpha2": "jp",
 "lon": 138,
 "lat": 37,
 "ha": 37800000,
 "sol100Ha": 750000,
 "demandTwh": 950,
 "accent": "#639922",
 "langs": [
  "ja",
  "en"
 ],
 "dataInfo": "Data: <strong>2020–2024</strong> · MLIT · MAFF · METI / Agency for Natural Resources and Energy",
 "sources": "Sources: <a href=\"https://www.mlit.go.jp/totikensangyo/content/001908011.pdf\" target=\"_blank\">MLIT Fiscal Year 2024 Trends Concerning Land</a> · <a href=\"https://www.maff.go.jp/e/data/stat/index.html\" target=\"_blank\">MAFF Agriculture and Forestry Statistics 2023</a> · <a href=\"https://www.meti.go.jp/english/policy/energy_environment/renewable/index.html\" target=\"_blank\">METI Renewable Energy Policy 2024</a> · Japan total land area ~37.8M ha.",
 "cats": {
  "ja": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "森林・林野",
    "desc": "天然林と人工林 — 日本の山岳地帯の大部分を占めるが、大半はアクセス困難",
    "answer": 66.14,
    "color": "#3B6D11",
    "max": 80,
    "step": 0.5,
    "answerHa": 25000920
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "農地",
    "desc": "水田、畑作、果樹園など — 谷間や沿岸平野に集中",
    "answer": 11.57,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 4373460
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "市街地・住宅地",
    "desc": "都市、住宅、商業・工業地帯 — 沿岸低地に集中",
    "answer": 5.79,
    "color": "#73726c",
    "max": 15,
    "step": 0.5,
    "answerHa": 2188620
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "ゴルフ場",
    "desc": "日本には約2,300のゴルフ場がある — 世界最多水準の一人当たりゴルフ場数",
    "answer": 1.2,
    "color": "#5DCAA5",
    "max": 6,
    "step": 0.1,
    "answerHa": 453600
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "内水面",
    "desc": "河川、湖沼、貯水池、水田灌漑施設",
    "answer": 1.5,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 567000
   },
   {
    "id": "misc",
    "icon": "🌊",
    "name": "その他の土地",
    "desc": "道路、裸地、その他上記以外の用途",
    "answer": 13.57,
    "color": "#888780",
    "max": 25,
    "step": 0.5,
    "answerHa": 5129460
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "太陽光+蓄電池（現状）",
    "desc": "系統連系の産業用地上設置型太陽光（蓄電池付き） — 日本には別途屋根置き太陽光（約55GW）もあるが、ここでは含まない",
    "answer": 0.24,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 90720,
    "isSolar": true,
    "solarNote": "ヒント：系統連系の産業用のみ — 日本には別途約55GWの屋根置きがあります"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "100%電力のための太陽光+蓄電池",
    "desc": "日本の電力系統全体を24時間365日まかなうための産業用太陽光+蓄電池の必要面積（年間約950TWh） — 日射量が少ないため他国より大きい",
    "answer": 2,
    "color": "#BA7517",
    "max": 6,
    "step": 0.1,
    "answerHa": 756000,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & woodland",
    "desc": "Natural and planted forest — covers most of Japan's mountainous interior, largely inaccessible",
    "answer": 66.14,
    "color": "#3B6D11",
    "max": 80,
    "step": 0.5,
    "answerHa": 25000920
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Farmland",
    "desc": "Paddy fields, upland crops, orchards and other cultivated land — squeezed into valleys and coastal plains",
    "answer": 11.57,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 4373460
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & residential",
    "desc": "Cities, towns, housing, commercial and industrial zones — concentrated in coastal lowlands",
    "answer": 5.79,
    "color": "#73726c",
    "max": 15,
    "step": 0.5,
    "answerHa": 2188620
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Japan has ~2,300 golf courses — among the most per capita in the world",
    "answer": 1.2,
    "color": "#5DCAA5",
    "max": 6,
    "step": 0.1,
    "answerHa": 453600
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Rivers, lakes, reservoirs and paddy irrigation systems",
    "answer": 1.5,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 567000
   },
   {
    "id": "misc",
    "icon": "🌊",
    "name": "Other land",
    "desc": "Roads, bare land and other uses not classified above",
    "answer": 13.57,
    "color": "#888780",
    "max": 25,
    "step": 0.5,
    "answerHa": 5129460
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected — Japan also has a large rooftop sector (~55 GW) not counted here",
    "answer": 0.24,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 90720,
    "isSolar": true,
    "solarNote": "Hint: utility-scale grid-connected only — Japan also has ~55 GW of rooftop"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Japan's entire national grid 24/7 (~950 TWh/yr) — larger than most due to Japan's lower solar irradiance",
    "answer": 2,
    "color": "#BA7517",
    "max": 6,
    "step": 0.1,
    "answerHa": 756000,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "ja": {
   "h1": "<img src=\"https://flagcdn.com/32x24/jp.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> 日本の土地はどのように使われているか？",
   "subtitle": "<a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">サイモン・クラーク博士のYouTubeショート</a>（英語）に着想を得て。各カテゴリの日本の土地の割合を推測してください — スライダーは合計100%に制限されています。日本は世界で最も森林に覆われた国のひとつであり、同時に最も人口密度が高い国のひとつです。",
   "disclaimer": "太陽光+蓄電池の数値はAIの支援を受けて生成された思考実験であり、政策提言ではありません。すべての数値は電力系統に接続された産業規模のシステムを指しています。日本のエネルギーの未来には多様な再生可能エネルギーが必要です。土地利用データは日本政府の公式統計に基づいています。",
   "noteLabel": "注記",
   "contextLabel": "国別背景",
   "countryNote": "日本の将来のエネルギー構成には多様な再生可能エネルギーが必要となる——平地が限られていることから、洋上風力が鍵となる技術と見なされており、水素、地熱、潮力エネルギーにも積極的に投資が行われている。日本の山がちな地形は大規模な地上設置型太陽光発電を難しくしており、これは必要な土地面積が比較的大きいことに反映されている。土地利用データは概算であり、日本政府の公式統計に基づく。",
   "submit": "回答を送信する",
   "play_again": "もう一度プレイ",
   "score": "スコア",
   "land_used": "使用済み土地",
   "remaining": "残り",
   "map_guess": "あなたの推測 — 面積比較マップ（スライド時に更新）",
   "map_answer": "日本の実際の土地利用 — 面積比較マップ",
   "allocated": "/ 100% 割当済み",
   "reveal": "送信後に公開されます。",
   "out_of": "正確度スコア",
   "sol100_reveal": "日本の太陽光発電量が低く、平坦な土地が限られているため、このゲームの中で一人当たりの土地面積が最も大きい数値となっています。",
   "grades": [
    [
     93,
     "🏆 日本通 — この素晴らしい島国の詳細な姿を知っています！"
    ],
    [
     70,
     "🌲 とても優秀 — 日本の地形をよく知っています。"
    ],
    [
     46,
     "🗾 まあまあです！日本の極端な森林率はほとんどの人を驚かせます。"
    ],
    [
     23,
     "🏔️ 日本は66%が森林 — しかし大半は人が入れない山岳地帯です。"
    ],
    [
     0,
     "🤔 意外でしたか？日本は高密度の都市があるにもかかわらず、世界有数の森林国です。"
    ]
   ],
   "btn_label": "English",
   "country_label": "日本",
   "circle_label": "必要な土地面積",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/jp.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Japan's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Japanese land for each category — sliders are capped at 100% total. Japan is one of the world's most forested nations, yet also one of its most densely populated.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Japan's energy future will require diverse renewables — offshore wind is considered the key technology given Japan's limited flat land, and the country is also investing heavily in hydrogen, geothermal, and tidal energy. Japan's mountainous terrain makes large-scale ground-mounted solar challenging, which is reflected in the relatively large land area needed. Land use figures are approximate and sourced from official Japanese government statistics.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Japan's energy future will require diverse renewables — offshore wind is considered the key technology given Japan's limited flat land, and the country is also investing heavily in hydrogen, geothermal, and tidal energy. Japan's mountainous terrain makes large-scale ground-mounted solar challenging, which is reflected in the relatively large land area needed. Land use figures are approximate and sourced from official Japanese government statistics.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Japanese land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Japan's lower solar irradiance and limited flat land make this the largest sol100 figure in the game per capita.",
   "grades": [
    [
     93,
     "🏆 Japan expert — you have a detailed picture of this remarkable island nation!"
    ],
    [
     70,
     "🌲 Very strong — you know Japan's landscape well."
    ],
    [
     46,
     "🗾 Not bad! Japan's extreme forest cover surprises most people."
    ],
    [
     23,
     "🏔️ Japan is 66% forest — yet most of it is inaccessible mountain terrain."
    ],
    [
     0,
     "🤔 Surprising? Japan is one of the world's most forested nations despite its dense cities."
    ]
   ],
   "btn_label": "日本語",
   "country_label": "Japan",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "ja": {
   "head": "🌍 もし日本だけで世界中に電力を供給したら？",
   "fit": "日本独自の太陽光発電条件を使って<strong>世界の電力需要</strong>（年間約31,000TWh）すべてをまかなうには、約<strong>{haM}ヘクタール</strong>が必要です — これは日本の国土面積の<strong>{pct}%</strong>に相当し、下図では同等の面積を持つ円として示されています。",
   "overflow": "日本独自の太陽光発電条件を使って<strong>世界の電力需要</strong>（年間約31,000TWh）すべてをまかなうには、約<strong>{haM}ヘクタール</strong>が必要です — これは<strong>国土面積の{mult}倍</strong>に相当します。下の円は日本を中心に表示されていますが、国境を大きく超えて広がっており、太陽光発電においては土地の有無と同じくらい地理や気候が重要であることを示しています。",
   "foot": "点線の円はあくまで説明用です — 正しい面積に基づいたサイズですが、実際の設置候補地ではありません。規模を示すためだけに既存の国境と重なっています。"
  },
  "en": {
   "head": "🌍 What if Japan alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Japan's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Japan's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Japan's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Japan — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "ja": "百万",
   "en": "million"
  }
 }
};
