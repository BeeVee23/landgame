window.LANDGAME=window.LANDGAME||{};
LANDGAME.br = {
 "title": "🇧🇷 How is Brazil's land actually used? — Guessing Game",
 "code": "br",
 "iso": "076",
 "alpha2": "br",
 "lon": -53,
 "lat": -10,
 "ha": 851000000,
 "sol100Ha": 350000,
 "demandTwh": 700,
 "accent": "#639922",
 "langs": [
  "pt",
  "en"
 ],
 "dataInfo": "Data: <strong>2022–2024</strong> · IBGE · MapBiomas · ABSOLAR · World Bank",
 "sources": "Sources: <a href=\"https://www.ibge.gov.br/en/statistics/economic/agriculture-forestry-and-fishing.html\" target=\"_blank\">IBGE Agriculture &amp; Forestry Statistics</a> · <a href=\"https://brasil.mapbiomas.org/en/\" target=\"_blank\">MapBiomas Land Use &amp; Cover 2023</a> · <a href=\"https://data.worldbank.org/country/BR\" target=\"_blank\">World Bank Development Indicators 2023</a> · <a href=\"https://mapbiomas.org/en\" target=\"_blank\">MapBiomas</a> · <a href=\"https://www.absolar.org.br/\" target=\"_blank\">ABSOLAR</a> · Brazil total land area ~851M ha.",
 "cats": {
  "pt": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Floresta e vegetação nativa",
    "desc": "Amazônia, Mata Atlântica, Pantanal e Cerrado — o maior sistema de floresta tropical do mundo",
    "answer": 59,
    "color": "#3B6D11",
    "max": 75,
    "step": 0.5,
    "answerHa": 502090000
   },
   {
    "id": "past",
    "icon": "🐄",
    "name": "Pastagem manejada",
    "desc": "Pecuária — o Brasil é o maior exportador de carne bovina do mundo; as pastagens se expandiram dramaticamente desde 2000",
    "answer": 19.5,
    "color": "#a8c46e",
    "max": 35,
    "step": 0.5,
    "answerHa": 165945000
   },
   {
    "id": "crop",
    "icon": "🌾",
    "name": "Lavouras",
    "desc": "Soja, milho, cana-de-açúcar, algodão e outras culturas — principalmente no Cerrado e estados do sul",
    "answer": 11.5,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 97865000
   },
   {
    "id": "prot",
    "icon": "🏞️",
    "name": "Terras protegidas e indígenas",
    "desc": "Unidades de conservação, territórios indígenas e quilombolas — legalmente protegidos do desenvolvimento",
    "answer": 6.5,
    "color": "#5DCAA5",
    "max": 15,
    "step": 0.5,
    "answerHa": 55315000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Águas interiores",
    "desc": "Rios da bacia amazônica, áreas úmidas do Pantanal, reservatórios — o Brasil detém 12% da água doce superficial do mundo",
    "answer": 2,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 17020000
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Áreas urbanas e infraestrutura",
    "desc": "São Paulo, Rio, Brasília e outras cidades — densas pelos padrões latino-americanos, mas pequenas como % do território total",
    "answer": 1.5,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 12765000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+bateria (atual)",
    "desc": "Solar fotovoltaico de grande escala com armazenamento em bateria (~16,5 GW no final de 2024) — crescendo em ritmo recorde",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.2,
    "step": 0.0005,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Dica: o Brasil tem 16,5 GW em escala industrial — mas 851 M ha é enorme"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+bateria para 100% da eletricidade",
    "desc": "Área necessária para solar+bateria de grande escala abastecer toda a rede elétrica nacional 24h/dia (~700 TWh/ano) — pequena graças à excelente irradiância solar",
    "answer": 0.04,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 340400,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest & natural vegetation",
    "desc": "Amazon, Atlantic Forest, Pantanal and Cerrado native vegetation — the world's largest tropical forest system",
    "answer": 59,
    "color": "#3B6D11",
    "max": 75,
    "step": 0.5,
    "answerHa": 502090000
   },
   {
    "id": "past",
    "icon": "🐄",
    "name": "Managed pasture",
    "desc": "Cattle ranching — Brazil is the world's largest beef exporter; pasture has expanded dramatically since 2000",
    "answer": 19.5,
    "color": "#a8c46e",
    "max": 35,
    "step": 0.5,
    "answerHa": 165945000
   },
   {
    "id": "crop",
    "icon": "🌾",
    "name": "Cropland",
    "desc": "Soy, maize, sugarcane, cotton and other crops — mostly in the Cerrado and southern states",
    "answer": 11.5,
    "color": "#639922",
    "max": 25,
    "step": 0.5,
    "answerHa": 97865000
   },
   {
    "id": "prot",
    "icon": "🏞️",
    "name": "Protected & indigenous land",
    "desc": "Conservation units, indigenous territories and quilombola lands — legally protected from development",
    "answer": 6.5,
    "color": "#5DCAA5",
    "max": 15,
    "step": 0.5,
    "answerHa": 55315000
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Inland water",
    "desc": "Amazon basin rivers, Pantanal wetlands, reservoirs — Brazil holds 12% of world fresh surface water",
    "answer": 2,
    "color": "#378ADD",
    "max": 6,
    "step": 0.1,
    "answerHa": 17020000
   },
   {
    "id": "urban",
    "icon": "🏙️",
    "name": "Urban & infrastructure",
    "desc": "Sao Paulo, Rio, Brasilia and other cities — dense by Latin American standards but small as % of total land",
    "answer": 1.5,
    "color": "#73726c",
    "max": 6,
    "step": 0.1,
    "answerHa": 12765000
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale grid-connected solar PV with battery storage (~16.5 GW end 2024) — growing at record pace",
    "answer": 0,
    "color": "#EF9F27",
    "max": 0.2,
    "step": 0.0005,
    "answerHa": 0,
    "isSolar": true,
    "solarNote": "Hint: Brazil has 16.5 GW utility-scale — but 851M ha is enormous"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Brazil's entire national grid 24/7 (~700 TWh/yr) — tiny thanks to exceptional solar irradiance",
    "answer": 0.04,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 340400,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "pt": {
   "h1": "<img src=\"https://flagcdn.com/32x24/br.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Como o Brasil usa suas terras?",
   "subtitle": "Inspirado no <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">vídeo curto do Dr. Simon Clark no YouTube</a> (em inglês). Adivinhe a porcentagem do território brasileiro para cada categoria — os controles são limitados a 100% no total. O Brasil contém a maior floresta tropical do mundo e é um dos mais importantes produtores agrícolas do planeta.",
   "disclaimer": "Os valores de solar+bateria são um experimento mental gerado com o auxílio de uma IA, não uma recomendação de política. Todos os valores referem-se a sistemas de grande escala conectados à rede. O Brasil já possui uma das grades elétricas mais limpas do mundo — a hidrelétrica cobre ~60% da geração. Os dados de uso do solo são aproximados.",
   "noteLabel": "Nota",
   "contextLabel": "Contexto do país",
   "countryNote": "O Brasil já possui uma das redes elétricas mais limpas do mundo — a hidrelétrica cobre cerca de 60% da geração, e a energia eólica e solar estão se expandindo rapidamente. A irradiação solar excepcional do Brasil significa que a terra necessária para 100% de eletricidade solar é notavelmente pequena. O desmaltamento na Amazônia é o principal desafio de uso da terra do país. Os dados de uso da terra são aproximados e provêm do IBGE e do Banco Mundial.",
   "submit": "Enviar respostas",
   "play_again": "Jogar novamente",
   "score": "Pontuação",
   "land_used": "Território usado",
   "remaining": "Restante",
   "map_guess": "Suas estimativas — mapa proporcional (atualiza ao mover)",
   "map_answer": "Uso real do território brasileiro — mapa proporcional",
   "allocated": "/ 100% alocados",
   "reveal": "Revelado após o envio.",
   "out_of": "pontuação de precisão",
   "sol100_reveal": "a sobrecapacidade de armazenamento para noites e períodos nublados dobra a área necessária em relação apenas aos painéis. A excelente irradiância solar do Brasil torna isso um dos menores valores de sol100 no jogo.",
   "grades": [
    [
     93,
     "🏆 Especialista no Brasil — você conhece a história das terras amazônicas em detalhes notáveis!"
    ],
    [
     70,
     "🌳 Muito bem — visão aguçada da vasta e complexa paisagem brasileira."
    ],
    [
     46,
     "🐆 Não está mal! O equilíbrio entre floresta e agricultura no Brasil surpreende a maioria."
    ],
    [
     23,
     "🌱 O Brasil é 59% floresta — mas o desmatamento está mudando isso rapidamente."
    ],
    [
     0,
     "🤔 Surpreendente? O Brasil alimenta o mundo enquanto ainda preserva a maior floresta tropical."
    ]
   ],
   "btn_label": "English",
   "country_label": "Brasil",
   "circle_label": "Área de terra necessária",
   "zoomed": "'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/br.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Brazil's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Brazilian land for each category — sliders are capped at 100% total. Brazil contains the world's largest tropical rainforest and is one of the planet's most important agricultural producers.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Brazil already has one of the world's cleanest electricity grids — hydropower covers ~60% of generation, and wind and solar are expanding rapidly. Brazil's exceptional solar irradiance means the land needed for 100% solar electricity is remarkably small. Deforestation in the Amazon is the country's defining land use challenge. Land use figures are approximate and sourced from IBGE and World Bank data.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Brazil already has one of the world's cleanest electricity grids — hydropower covers ~60% of generation, and wind and solar are expanding rapidly. Brazil's exceptional solar irradiance means the land needed for 100% solar electricity is remarkably small. Deforestation in the Amazon is the country's defining land use challenge. Land use figures are approximate and sourced from IBGE and World Bank data.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses — proportional area map (updates as you slide)",
   "map_answer": "Actual Brazilian land use — proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "storage overcapacity for nights and cloudy periods doubles the land needed vs panels alone. Brazil's exceptional solar irradiance makes this one of the smallest sol100 figures in the game.",
   "grades": [
    [
     93,
     "🏆 Brazil expert — you know the Amazon's land story in remarkable detail!"
    ],
    [
     70,
     "🌳 Very strong — sharp sense of Brazil's vast and complex landscape."
    ],
    [
     46,
     "🐆 Not bad! Brazil's balance of forest and agriculture surprises most people."
    ],
    [
     23,
     "🌱 Brazil is 59% forest — but deforestation is changing that fast."
    ],
    [
     0,
     "🤔 Surprising? Brazil feeds the world while still holding the largest tropical forest."
    ]
   ],
   "btn_label": "Português",
   "country_label": "Brazil",
   "circle_label": "Land area needed",
   "zoomed": "'Zoomed view'"
  }
 },
 "world": {
  "pt": {
   "head": "🌍 E se o Brasil sozinho abastecesse o mundo inteiro?",
   "fit": "Abastecer toda a <strong>demanda elétrica mundial</strong> (~31.000 TWh/ano) usando as próprias condições solares do Brasil exigiria cerca de <strong>{haM} hectares</strong> — <strong>{pct}%</strong> do território brasileiro, mostrado abaixo como um círculo de área equivalente.",
   "overflow": "Abastecer toda a <strong>demanda elétrica mundial</strong> (~31.000 TWh/ano) usando as próprias condições solares do Brasil exigiria cerca de <strong>{haM} hectares</strong> — <strong>{mult}× todo o território nacional</strong>. O círculo abaixo, centrado no Brasil, ultrapassa amplamente suas fronteiras, mostrando que a geografia solar e o clima importam tanto quanto a disponibilidade de terras.",
   "foot": "O círculo tracejado é ilustrativo — dimensionado pela área correta, mas não é um local realmente proposto. Ele se sobrepõe a fronteiras existentes apenas para dar escala."
  },
  "en": {
   "head": "🌍 What if Brazil alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Brazil's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{pct}%</strong> of Brazil's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Brazil's own solar conditions would need about <strong>{haM} hectares</strong> — <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Brazil — it spills well beyond the country's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative — sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "pt": "milhões",
   "en": "million"
  }
 }
};
