/*
  Landgame v6 — Country Data
  ==========================
  All land-use figures are sourced from governmental or highly-cited
  international bodies (FAO FAOSTAT, national statistical offices,
  OECD, World Bank, IEA, etc.).

  To add a country: copy the template at the bottom, fill in categories,
  context, and sources. Categories should sum to approximately 100%.
*/

const COUNTRIES = {

/* ================================================================
   CANADA — fully sourced from Statistics Canada Land Cover Register
   2020 and Natural Resources Canada State of Canada's Forests 2025.
   ================================================================ */
ca: {
  name: "Canada",
  flag: "🇨🇦",
  alpha2: "ca",
  numeric: "124",
  languages: ["en", "fr"],
  areaHa: 998467000,
  areaDesc: "Canada total land area ~998.5M ha",
  electricityTWh: 650,
  dataYear: "2020",
  context: {
    en: `Canada's electricity grid is already among the world's cleanest — roughly 60% hydro and 15% nuclear — yet fossil fuel entanglement in government runs deep. The federal government owns the Trans Mountain Pipeline expansion (TMX), purchased after Kinder Morgan withdrew in 2018; costs ballooned from an initial $5.4 billion to $34.2 billion by 2024. An International Institute for Sustainable Development analysis found the government charges oil shippers less than half the tolls a private investor would require, constituting an estimated $18.8 billion fossil fuel subsidy under the government's own framework. The Canadian Association of Petroleum Producers (CAPP) was the most active federal lobbyist in 2025 with 138 registered meetings, while Enbridge logged 107. Prime Minister Mark Carney has met with fossil fuel lobbyists 17 times since the 2025 election. The Canada Pension Plan Investment Board, managing retirement savings for 22 million Canadians, abandoned its net-zero commitment in 2025 and directed over $6 billion into new fossil fuel assets that same year, even as four young Canadians sued the fund for failing to protect their pensions from climate risk. The 2025 federal budget adopted industry language — "decarbonized oil" and the Pathways Plus CCS project — traceable directly to oil sands lobbying campaigns. Alberta's oil sands remain the world's third-largest proven crude reserve, and the province's economy is structurally dependent on their expansion.`,
    fr: `Le réseau électrique canadien est déjà parmi les plus propres au monde — environ 60 % hydroélectrique et 15 % nucléaire — pourtant l'ingérence des combustibles fossiles dans le gouvernement est profonde. Le gouvernement fédéral possède l'expansion du pipeline Trans Mountain (TMX), achetée après le retrait de Kinder Morgan en 2018; les coûts sont passés de 5,4 milliards $ à 34,2 milliards $ d'ici 2024. Une analyse de l'Institut international du développement durable a révélé que le gouvernement facture aux expéditeurs de pétrole moins de la moitié des tarifs qu'un investisseur privé exigerait, constituant une subvention aux combustibles fossiles estimée à 18,8 milliards $ selon les propres critères du gouvernement. L'Association canadienne des producteurs pétroliers (ACPP) a été le lobbyiste fédéral le plus actif en 2025 avec 138 réunions enregistrées, tandis qu'Enbridge en a comptabilisé 107. Le premier ministre Mark Carney a rencontré des lobbyistes des combustibles fossiles 17 fois depuis l'élection de 2025. L'Office d'investissement du Régime de pensions du Canada, qui gère l'épargne-retraite de plus de 22 millions de Canadiens, a abandonné son engagement net zéro en 2025 et a dirigé plus de 6 milliards $ vers de nouveaux actifs fossiles la même année, alors que quatre jeunes Canadiens poursuivaient l'office pour ne pas protéger leurs pensions des risques climatiques. Le budget fédéral de 2025 a adopté le langage de l'industrie — "pétrole décarboné" et le projet Pathways Plus CCS — directement attribuable aux campagnes de lobbying des sables bitumineux. Les sables bitumineux de l'Alberta restent la troisième plus grande réserve prouvée de pétrole brut au monde, et l'économie de la province dépend structurellement de leur expansion.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Real-world Canadian energy planning will continue to lean on hydro, nuclear, and wind; solar is a growing but geographically limited contributor given high-latitude winter insolation.`,
    fr: `<strong>Note :</strong> Les chiffres solaire+batterie sont une expérience de pensée générée avec l'aide d'une IA, pas une recommandation politique. Tous les chiffres solaire+batterie concernent des systèmes utilitaires au sol, raccordés au réseau. La planification énergétique canadienne réelle continuera de s'appuyer sur l'hydro, le nucléaire et l'éolien ; le solaire est un contributeur croissant mais géographiquement limité en raison de l'insolation hivernale des hautes latitudes.`
  },
  categories: [
    { id: "forest", emoji: "🌲", answer: 36.9, step: 0.1, color: "#166534",
      en: { name: "Forest", desc: "Treed area including boreal forest, montane, and temperate rainforest — 9% of global forest cover, 369M ha (NRCan 2024)." },
      fr: { name: "Forêt", desc: "Zones boisées incluant la forêt boréale, montagnarde et pluviale tempérée — 9 % de la couverture forestière mondiale, 369 M ha (RNCan 2024)." } },
    { id: "grass", emoji: "🌿", answer: 19.1, step: 0.1, color: "#65a30d",
      en: { name: "Grassland & shrubland", desc: "Taiga understory, tundra transition, prairie rangeland, and alpine meadows — 190M ha (StatsCan LCR 2020)." },
      fr: { name: "Prairies et arbustes", desc: "Sous-bois de taïga, transition de toundra, pâturages des prairies et alpages — 190 M ha (StatCan REC 2020)." } },
    { id: "wet", emoji: "💧", answer: 12.7, step: 0.1, color: "#0ea5e9",
      en: { name: "Wetlands", desc: "Non-treed wetlands — bogs, fens, marshes, and the Hudson Bay Lowlands, among the largest intact wetland complexes on Earth — 127M ha (StatsCan LCR 2020)." },
      fr: { name: "Milieux humides", desc: "Milieux humides non boisés — tourbières, marais, et les basses-terres de la baie d'Hudson, parmi les plus vastes intactes sur Terre — 127 M ha (StatCan REC 2020)." } },
    { id: "water", emoji: "🌊", answer: 12.6, step: 0.1, color: "#2563eb",
      en: { name: "Freshwater lakes & rivers", desc: "Inland water bodies — Canada holds roughly 20% of the planet's renewable freshwater — 126M ha (StatsCan LCR 2020)." },
      fr: { name: "Lacs et rivières", desc: "Plans d'eau intérieurs — le Canada détient environ 20 % de l'eau douce renouvelable de la planète — 126 M ha (StatCan REC 2020)." } },
    { id: "barren", emoji: "🏔️", answer: 13.7, step: 0.1, color: "#78716c",
      en: { name: "Barren land, rock & ice", desc: "Arctic barrens, exposed rock, scree, sparsely vegetated tundra, and permanent snow/ice fields (~1.8%) — 136M ha (StatsCan LCR 2020)." },
      fr: { name: "Terres stériles, roches et glace", desc: "Landes arctiques, roches exposées, éboulis, toundre à végétation clairsemée et champs de neige/glace permanents (~1,8 %) — 136 M ha (StatCan REC 2020)." } },
    { id: "crop", emoji: "🌾", answer: 4.3, step: 0.1, color: "#d97706",
      en: { name: "Cropland", desc: "Annual and perennial crops — 95% concentrated in the Prairie, Boreal Plains and Mixedwood Plains ecozones — 43M ha (StatsCan LCR 2020)." },
      fr: { name: "Terres cultivées", desc: "Cultures annuelles et pérennes — 95 % concentrées dans les écozones des Prairies, des Plaines boréales et des Plaines mixtes — 43 M ha (StatCan REC 2020)." } },
    { id: "urban", emoji: "🏙️", answer: 0.7, step: 0.1, color: "#7c3aed",
      en: { name: "Urban & built-up", desc: "Cities, towns, roads, mines, and infrastructure — less than 1% of inland area; 97.6% is in the southernmost ecozones — 6.8M ha (StatsCan LCR 2020)." },
      fr: { name: "Zones urbaines et aménagées", desc: "Villes, villages, routes, mines et infrastructures — moins de 1 % de la superficie intérieure; 97,6 % dans les écozones les plus méridionales — 6,8 M ha (StatCan REC 2020)." } },
    { id: "golf", emoji: "⛳", answer: 0.001, step: 0.001, color: "#16a34a",
      en: { name: "Golf courses", desc: "~2,300–2,400 golf courses across Canada, from coastal British Columbia to Newfoundland — ~150,000 ha (Golf Canada / industry estimates)." },
      fr: { name: "Terrains de golf", desc: "~2 300 à 2 400 terrains de golf à travers le Canada, de la côte de la Colombie-Britannique à Terre-Neuve — ~150 000 ha (Golf Canada / estimations industrielles)." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.001, step: 0.001, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Utility-scale ground-mounted solar PV with battery storage, grid-connected (~4 GW, ~60,000 ha total footprint) — CER / NRCan 2024." },
      fr: { name: "Solaire+batterie (actuel)", desc: "Solaire PV utilitaire au sol avec stockage par batterie, raccordé au réseau (~4 GW, ~60 000 ha d'empreinte totale) — REC / RNCan 2024." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.009, step: 0.001, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "Land needed for utility-scale solar+battery to power Canada's entire national grid 24/7 (~650 TWh/yr) — ~866,000 ha." },
      fr: { name: "Solaire+batterie pour 100 % électricité", desc: "Surface nécessaire en solaire utilitaire+batterie pour alimenter l'ensemble du réseau national canadien 24h/24 (~650 TWh/an) — ~866 000 ha." } }
  ],
  worldCard: {
    sol100Ha: 866000,
    en: {
      title: "What if Canada alone powered Canada with solar+battery?",
      body: `Canada consumes roughly 650 TWh of electricity per year. Utility-scale solar+battery to meet that demand 24/7 would need about <strong>866,000 hectares</strong> — just <strong>0.09%</strong> of Canada's land. On the map below, that circle is almost invisible at national scale. In practice, Canada's grid is already ~75% non-emitting (hydro + nuclear), so this is a thought experiment, not a plan.`
    },
    fr: {
      title: "Et si le Canada seul alimentait le Canada en solaire+batterie ?",
      body: `Le Canada consomme environ 650 TWh d'électricité par an. Du solaire utilitaire+batterie pour répondre à cette demande 24h/24 nécessiterait environ <strong>866 000 hectares</strong> — seulement <strong>0,09 %</strong> du territoire canadien. Sur la carte ci-dessous, ce cercle est presque invisible à l'échelle nationale. En pratique, le réseau canadien est déjà à ~75 % sans émissions (hydro + nucléaire), donc ceci est une expérience de pensée, pas un plan.`
    }
  },
  sources: {
    en: "Statistics Canada Land Cover Register 2020 (16-510-X) · Natural Resources Canada State of Canada's Forests Annual Report 2025 · IISD Assessment of Fossil Fuel Subsidies in Canada 2024 · Canada Energy Regulator · InfluenceMap / Environmental Defence Big Oil's Lobbying Playbook 2025 · Shift Action for Pension Wealth & Planet Health. Canada total land area ~998.5M ha.",
    fr: "Registre de couverture terrestre de Statistique Canada 2020 (16-510-X) · Ressources naturelles Canada Rapport annuel sur l'état des forêts 2025 · IISD Évaluation des subventions aux combustibles fossiles au Canada 2024 · Régie de l'énergie du Canada · InfluenceMap / Environmental Defence Big Oil's Lobbying Playbook 2025 · Shift Action. Superficie totale du Canada ~998,5 M ha."
  }
},

/* ================================================================
   UNITED KINGDOM — sourced from DLUHC, DESNZ, Lancaster University.
   ================================================================ */
uk: {
  name: "United Kingdom",
  flag: "🇬🇧",
  alpha2: "uk",
  numeric: "826",
  languages: ["en"],
  areaHa: 24300000,
  areaDesc: "UK total land area ~24.3M ha",
  electricityTWh: 110,
  dataYear: "2022–2024",
  context: {
    en: `The UK has one of the most land-constrained geographies in the game: England in particular is densely populated and intensively farmed. Offshore wind — not solar — is the backbone of the UK's net-zero strategy, with installed capacity exceeding 30 GW by 2025. The country context box covers the post-Brexit agricultural transition and the tension between food security, rewilding, and housing development.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. The UK's wind resource (onshore and offshore) will likely do far more heavy lifting than solar in any credible net-zero scenario.`
  },
  categories: [
    { id: "agri", emoji: "🚜", answer: 71.0, step: 0.1, color: "#d97706",
      en: { name: "Agricultural land", desc: "Farmland, rough grazing, and pasture — the dominant land use across England, Wales, Scotland and Northern Ireland." } },
    { id: "forest", emoji: "🌲", answer: 13.0, step: 0.1, color: "#166534",
      en: { name: "Forest", desc: "Woodland and forest cover — significantly lower than European neighbours, though expanding through planting schemes." } },
    { id: "urban", emoji: "🏙️", answer: 6.0, step: 0.1, color: "#7c3aed",
      en: { name: "Urban & built-up", desc: "Cities, towns, roads, airports, and infrastructure — England is one of the most densely populated large countries in Europe." } },
    { id: "fresh", emoji: "💧", answer: 2.0, step: 0.1, color: "#2563eb",
      en: { name: "Freshwater & inland water", desc: "Lakes, reservoirs, rivers, and canals." } },
    { id: "golf", emoji: "⛳", answer: 0.15, step: 0.01, color: "#16a34a",
      en: { name: "Golf courses", desc: "The UK has over 2,000 golf courses — more per capita than almost any country on Earth." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.08, step: 0.01, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Utility-scale ground-mounted solar PV with battery storage, grid-connected — the UK has rapidly expanded solar farms on former agricultural land." } },
    { id: "sol100", emoji: "⚡🔋", answer: 1.2, step: 0.1, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "Land needed for utility-scale solar+battery to power the entire UK national grid 24/7 (~300 TWh/yr) — the UK's cloudy maritime climate makes this one of the larger relative footprints in the game." } },
    { id: "other", emoji: "🌿", answer: 7.57, step: 0.1, color: "#65a30d",
      en: { name: "Other land", desc: "Heathland, moorland, mountains, coastal margins, and land not classified elsewhere." } }
  ],
  worldCard: {
    sol100Ha: 297000,
    en: {
      title: "What if the UK alone powered the UK with solar+battery?",
      body: `The UK consumes roughly 300 TWh of electricity per year. Utility-scale solar+battery to meet that demand 24/7 would need about <strong>297,000 hectares</strong> — roughly <strong>1.2%</strong> of UK land. That's an area about the size of Cornwall.`
    }
  },
  sources: {
    en: "DLUHC Land Use Statistics England 2022 · DESNZ Solar PV Deployment Sep 2024 · Lancaster University / Progress in Energy (2024) · House of Commons Library CBP-7434 (2026). UK total land area ~24.3M ha."
  }
},

/* ================================================================
   UNITED STATES — sourced from USDA ERS Major Uses of Land 2017.
   ================================================================ */
us: {
  name: "United States",
  flag: "🇺🇸",
  alpha2: "us",
  numeric: "840",
  languages: ["en"],
  areaHa: 915000000,
  areaDesc: "US total land area ~915M ha",
  electricityTWh: 4300,
  dataYear: "2017–2024",
  context: {
    en: `The US has exceptional diversity of renewable resources — wind across the Great Plains, hydro in the Pacific Northwest, geothermal in the West, and offshore wind on both coasts — and a realistic clean energy transition will draw on all of them. Land use figures are approximate and sourced from official statistics; always consult primary sources before drawing conclusions.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems.`
  },
  categories: [
    { id: "grass", emoji: "🌿", answer: 27.0, step: 0.1, color: "#65a30d",
      en: { name: "Grassland & rangeland", desc: "Pasture, range, and grazing land across the Great Plains and West — the largest single land use category in the contiguous US." } },
    { id: "forest", emoji: "🌲", answer: 33.0, step: 0.1, color: "#166534",
      en: { name: "Forest", desc: "Forest-use land, timberland, and grazed forestland — from the Maine woods to the Pacific Northwest." } },
    { id: "crop", emoji: "🌾", answer: 17.0, step: 0.1, color: "#d97706",
      en: { name: "Cropland", desc: "Harvested crops, idle cropland, and cropland pasture — the Corn Belt, Great Plains wheat, and California's Central Valley." } },
    { id: "parks", emoji: "🏞️", answer: 14.0, step: 0.1, color: "#059669",
      en: { name: "Parks & special uses", desc: "National parks, wildlife refuges, wilderness areas, military land, and conservation reserves." } },
    { id: "misc", emoji: "🌊", answer: 8.0, step: 0.1, color: "#0ea5e9",
      en: { name: "Miscellaneous", desc: "Wetlands, tundra, bare rock, unproductive woodlands, desert — including Alaska's vast wildlands." } },
    { id: "golf", emoji: "⛳", answer: 0.1, step: 0.01, color: "#16a34a",
      en: { name: "Golf courses", desc: "The US has ~16,150 golf courses — more than any other country, almost as many as the rest of the world combined." } },
    { id: "urban", emoji: "🏙️", answer: 3.0, step: 0.1, color: "#7c3aed",
      en: { name: "Urban areas", desc: "Cities, suburbs, roads, airports, built infrastructure — still a small share of total land despite America's urban sprawl." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.04, step: 0.01, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Utility-scale ground-mounted solar PV with battery storage, grid-connected (end 2024, ~121 GW)." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.26, step: 0.01, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "Land needed for utility-scale solar+battery to power the entire US national grid 24/7 (~4,300 TWh/yr) — the US has excellent solar resources, especially across the Southwest." } }
  ],
  worldCard: {
    sol100Ha: 2400000,
    en: {
      title: "What if the US alone powered the US with solar+battery?",
      body: `The US consumes roughly 4,300 TWh of electricity per year. Utility-scale solar+battery to meet that demand 24/7 would need about <strong>2.4 million hectares</strong> — just <strong>0.26%</strong> of US land. That's roughly the size of Vermont.`
    }
  },
  sources: {
    en: "USDA ERS Major Uses of Land in the US, 2017 (EIB-275) · EIA Solar Energy Data 2024 · NREL. US total land area ~915M ha."
  }
},

/* ================================================================
   FRANCE — sourced from Agreste-Teruti, RTE, UNEF.
   ================================================================ */
fr: {
  name: "France",
  flag: "🇫🇷",
  alpha2: "fr",
  numeric: "250",
  languages: ["fr", "en"],
  areaHa: 55000000,
  areaDesc: "France métropolitaine total land area ~55M ha",
  electricityTWh: 500,
  dataYear: "2023–2025",
  context: {
    fr: `La France dispose d'un mix énergétique diversifié — nucléaire, éolien, hydraulique — et le solaire n'en est qu'une composante. Les chiffres d'utilisation des sols sont approximatifs et issus de statistiques officielles ; consultez toujours les sources primaires avant de tirer des conclusions.`,
    en: `France's energy future will require diverse renewables — wind (onshore and offshore) and hydropower will likely do more heavy lifting than solar. Land use figures are approximate and sourced from official statistics; always consult primary sources before drawing conclusions.`
  },
  disclaimer: {
    fr: `<strong>Note :</strong> Les chiffres solaire+batterie sont une expérience de pensée générée avec l'aide d'une IA, pas une recommandation politique. Tous les chiffres solaire+batterie concernent des systèmes utilitaires au sol, raccordés au réseau.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems.`
  },
  categories: [
    { id: "agri", emoji: "🚜", answer: 52.0, step: 0.1, color: "#d97706",
      fr: { name: "Terres agricoles", desc: "Terres arables, cultures permanentes et prairies — la France est le premier pays agricole de l'UE." },
      en: { name: "Agricultural land", desc: "Arable land, permanent crops, and pasture — France is the EU's largest agricultural producer." } },
    { id: "forest", emoji: "🌲", answer: 31.0, step: 0.1, color: "#166534",
      fr: { name: "Forêt", desc: "Forêts et boisements — en expansion grâce à l'abandon des terres agricoles marginales." },
      en: { name: "Forest", desc: "Forest and woodland — expanding through marginal farmland abandonment." } },
    { id: "urban", emoji: "🏙️", answer: 8.0, step: 0.1, color: "#7c3aed",
      fr: { name: "Zones urbaines", desc: "Villes, banlieues, routes, aéroports et infrastructure." },
      en: { name: "Urban areas", desc: "Cities, suburbs, roads, airports, and infrastructure." } },
    { id: "golf", emoji: "⛳", answer: 0.1, step: 0.01, color: "#16a34a",
      fr: { name: "Terrains de golf", desc: "La France compte plus de 700 terrains de golf." },
      en: { name: "Golf courses", desc: "France has over 700 golf courses." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.2, step: 0.01, color: "#f59e0b",
      fr: { name: "Solaire+batterie (actuel)", desc: "Solaire PV utilitaire au sol avec stockage — la France a dépassé 20 GW de solaire installé fin 2024." },
      en: { name: "Solar+battery (current)", desc: "Utility-scale ground-mounted solar PV with battery storage — France surpassed 20 GW of installed solar by end-2024." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.61, step: 0.01, color: "#ea580c",
      fr: { name: "Solaire+batterie pour 100 % électricité", desc: "Surface nécessaire pour alimenter la France entière 24h/24 (~500 TWh/an)." },
      en: { name: "Solar+battery for 100% electricity", desc: "Land needed to power all of France 24/7 (~500 TWh/yr)." } },
    { id: "other", emoji: "🌿", answer: 8.69, step: 0.1, color: "#65a30d",
      fr: { name: "Autres terres", desc: "Landes, garrigues, zones humides, et terres non classifiées." },
      en: { name: "Other land", desc: "Heathland, scrub, wetlands, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 336000,
    fr: {
      title: "Et si la France seule alimentait la France en solaire+batterie ?",
      body: `La France consomme environ 500 TWh d'électricité par an. Du solaire utilitaire+batterie pour répondre à cette demande 24h/24 nécessiterait environ <strong>336 000 hectares</strong> — environ <strong>0,61 %</strong> du territoire français.`
    },
    en: {
      title: "What if France alone powered France with solar+battery?",
      body: `France consumes roughly 500 TWh of electricity per year. Utility-scale solar+battery to meet that demand 24/7 would need about <strong>336,000 hectares</strong> — roughly <strong>0.61%</strong> of French land.`
    }
  },
  sources: {
    fr: "Agreste Teruti 2021–2023 · RTE Bilan électrique 2024 · UNEF. France métropolitaine total land area ~55M ha.",
    en: "Agreste Teruti 2021–2023 · RTE Bilan électrique 2024 · UNEF. France métropolitaine total land area ~55M ha."
  }
},

/* ================================================================
   GERMANY — sourced from Destatis / Eurostat.
   ================================================================ */
de: {
  name: "Germany",
  flag: "🇩🇪",
  alpha2: "de",
  numeric: "276",
  languages: ["de", "en"],
  areaHa: 35700000,
  areaDesc: "Germany total land area ~35.7M ha",
  electricityTWh: 520,
  dataYear: "2023–2024",
  context: {
    de: `Deutschland hat eine der höchsten Solaranteile der Welt am Strommix (2024: ~14 %). Die Automobilindustrie steht jedoch vor einem tiefen Umbruch: VW kündigte 35.000 Stellenstreichungen an, die EV-Verkäufe gingen 2024 um 27 % zurück.`,
    en: `Germany has one of the highest solar shares of electricity generation in the world (~14% in 2024). However, the automotive industry faces a deep transition: VW announced 35,000 job cuts, and EV sales fell 27% in 2024.`
  },
  disclaimer: {
    de: `<strong>Hinweis:</strong> Die Solar+Batterie-Zahlen sind ein Gedankenexperiment, keine Politikempfehlung.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "agri", emoji: "🚜", answer: 50.0, step: 0.1, color: "#d97706",
      de: { name: "Landwirtschaft", desc: "Ackerland, Dauergrünland und Weinberge — fast die Hälfte Deutschlands." },
      en: { name: "Agricultural land", desc: "Arable land, permanent grassland, and vineyards — almost half of Germany." } },
    { id: "forest", emoji: "🌲", answer: 32.0, step: 0.1, color: "#166534",
      de: { name: "Wald", desc: "Waldflächen — die Waldschäden durch Stürme und Käferbefall haben zugenommen." },
      en: { name: "Forest", desc: "Forest area — storm and bark beetle damage has increased significantly." } },
    { id: "urban", emoji: "🏙️", answer: 14.0, step: 0.1, color: "#7c3aed",
      de: { name: "Siedlungen", desc: "Städte, Verkehrsflächen, Industrie und Infrastruktur." },
      en: { name: "Settlement & transport", desc: "Cities, transport, industry, and infrastructure." } },
    { id: "water", emoji: "💧", answer: 2.0, step: 0.1, color: "#2563eb",
      de: { name: "Gewässer", desc: "Seen, Flüsse und Stauseen." },
      en: { name: "Water bodies", desc: "Lakes, rivers, and reservoirs." } },
    { id: "golf", emoji: "⛳", answer: 0.05, step: 0.01, color: "#16a34a",
      de: { name: "Golfplätze", desc: "~750 Golfplätze in Deutschland." },
      en: { name: "Golf courses", desc: "~750 golf courses in Germany." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.5, step: 0.01, color: "#f59e0b",
      de: { name: "Solar+Batterie (aktuell)", desc: "Utility-Scale Solar-PV mit Batteriespeicher — Deutschland hat 2024 über 100 GW Solar überschritten." },
      en: { name: "Solar+battery (current)", desc: "Utility-scale solar PV with battery storage — Germany crossed 100 GW of solar in 2024." } },
    { id: "sol100", emoji: "⚡🔋", answer: 1.5, step: 0.1, color: "#ea580c",
      de: { name: "Solar+Batterie für 100 % Strom", desc: "Fläche für Solar+Batterie, um ganz Deutschland 24/7 zu versorgen (~520 TWh/Jahr)." },
      en: { name: "Solar+battery for 100% electricity", desc: "Land for solar+battery to power all of Germany 24/7 (~520 TWh/yr)." } },
    { id: "other", emoji: "🌿", answer: 1.45, step: 0.1, color: "#65a30d",
      de: { name: "Sonstiges", desc: "Heiden, Moore, Küsten und unklassifiziertes Land." },
      en: { name: "Other land", desc: "Heathland, moorland, coast, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 535000,
    de: {
      title: "Was, wenn Deutschland allein Deutschland mit Solar+Batterie versorgt?",
      body: `Deutschland verbraucht etwa 520 TWh Strom pro Jahr. Solar+Batterie im Utility-Maßstab für 24/7-Versorgung würde etwa <strong>535.000 Hektar</strong> benötigen — rund <strong>1,5 %</strong> der deutschen Landesfläche.`
    },
    en: {
      title: "What if Germany alone powered Germany with solar+battery?",
      body: `Germany consumes roughly 520 TWh of electricity per year. Utility-scale solar+battery to meet that demand 24/7 would need about <strong>535,000 hectares</strong> — roughly <strong>1.5%</strong> of German land.`
    }
  },
  sources: {
    de: "Destatis / Eurostat · Bundesamt für Naturschutz · Fraunhofer ISE. Deutschland Gesamtfläche ~35,7 Mio. ha.",
    en: "Destatis / Eurostat · German Federal Agency for Nature Conservation · Fraunhofer ISE. Germany total land area ~35.7M ha."
  }
},

/* ================================================================
   DENMARK — sourced from Statistics Denmark.
   ================================================================ */
dk: {
  name: "Denmark",
  flag: "🇩🇰",
  alpha2: "dk",
  numeric: "208",
  languages: ["da", "en"],
  areaHa: 4300000,
  areaDesc: "Denmark total land area ~4.3M ha",
  electricityTWh: 35,
  dataYear: "2023–2024",
  context: {
    da: `Danmark har verdens højeste andel af landbrugsjord (>62 %). Golfbaner og solceller er næsten lige store sliver. Vindkraft dækker ~55 % af elforbruget.`,
    en: `Denmark has the world's highest share of farmland (>62%). Golf courses and utility solar are similar-sized slivers. Wind covers ~55% of its electricity.`
  },
  disclaimer: {
    da: `<strong>Bemærk:</strong> Sol+batteri-tallene er et tankeeksperiment, ikke en politik anbefaling.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "agri", emoji: "🚜", answer: 62.0, step: 0.1, color: "#d97706",
      da: { name: "Landbrug", desc: "Agerskud, græsarealer og permanent græs — Danmark er et af verdens mest intensivt dyrkede lande." },
      en: { name: "Agricultural land", desc: "Arable land, leys, and permanent grass — Denmark is one of the most intensively farmed countries on Earth." } },
    { id: "forest", emoji: "🌲", answer: 15.0, step: 0.1, color: "#166534",
      da: { name: "Skov", desc: "Skovarealer — Danmark har relativt lidt skov sammenlignet med nabolandene." },
      en: { name: "Forest", desc: "Forest area — Denmark has relatively little forest compared to its neighbours." } },
    { id: "urban", emoji: "🏙️", answer: 10.0, step: 0.1, color: "#7c3aed",
      da: { name: "Byer og infrastruktur", desc: "Byer, veje, lufthavne og industri." },
      en: { name: "Urban & infrastructure", desc: "Cities, roads, airports, and industry." } },
    { id: "water", emoji: "💧", answer: 3.0, step: 0.1, color: "#2563eb",
      da: { name: "Vand", desc: "Søer, fjorde og vandløb." },
      en: { name: "Water", desc: "Lakes, fjords, and watercourses." } },
    { id: "golf", emoji: "⛳", answer: 0.1, step: 0.01, color: "#16a34a",
      da: { name: "Golfbaner", desc: "~200 golfbaner i Danmark." },
      en: { name: "Golf courses", desc: "~200 golf courses in Denmark." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.2, step: 0.01, color: "#f59e0b",
      da: { name: "Sol+batteri (aktuelt)", desc: "Utility-scale sol PV med batterilagring." },
      en: { name: "Solar+battery (current)", desc: "Utility-scale solar PV with battery storage." } },
    { id: "sol100", emoji: "⚡🔋", answer: 3.5, step: 0.1, color: "#ea580c",
      da: { name: "Sol+batteri for 100 % el", desc: "Areal til sol+batteri for at dække hele Danmarks elforbrug 24/7 (~35 TWh/år)." },
      en: { name: "Solar+battery for 100% electricity", desc: "Land for solar+battery to cover all of Denmark's electricity 24/7 (~35 TWh/yr)." } },
    { id: "other", emoji: "🌿", answer: 9.7, step: 0.1, color: "#65a30d",
      da: { name: "Andet", desc: "Heder, kyster, vådområder og uklassificeret land." },
      en: { name: "Other", desc: "Heathland, coast, wetlands, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 150000,
    da: {
      title: "Hvad hvis Danmark alene forsynede Danmark med sol+batteri?",
      body: `Danmark forbruger ca. 35 TWh el om året. Sol+batterie i utility-skala for 24/7-dækning ville kræve ca. <strong>150.000 hektar</strong> — omkring <strong>3,5 %</strong> af Danmarks areal.`
    },
    en: {
      title: "What if Denmark alone powered Denmark with solar+battery?",
      body: `Denmark consumes roughly 35 TWh of electricity per year. Utility-scale solar+battery for 24/7 coverage would need about <strong>150,000 hectares</strong> — around <strong>3.5%</strong> of Denmark's land.`
    }
  },
  sources: {
    da: "Danmarks Statistik · Energistyrelsen. Danmark total areal ~4,3 M ha.",
    en: "Statistics Denmark · Danish Energy Agency. Denmark total land area ~4.3M ha."
  }
},

/* ================================================================
   GREENLAND — sourced from Statistics Greenland / NRCan.
   ================================================================ */
gl: {
  name: "Greenland",
  flag: "🇬🇱",
  alpha2: "gl",
  numeric: "304",
  languages: ["en"],
  areaHa: 216600000,
  areaDesc: "Greenland total land area ~216.6M ha",
  electricityTWh: 0.5,
  dataYear: "2020–2024",
  context: {
    en: `79% of the world's largest island is buried under the second-largest ice sheet on Earth, reaching 3 km thick. The remaining coastal fringe is tundra, bare rock and sheep pastures. Greenland already generates 87% of its electricity from hydropower (Nukissiorfiit), using glacial meltwater from the retreating ice sheet.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "ice", emoji: "🧊", answer: 79.0, step: 0.1, color: "#93c5fd",
      en: { name: "Ice sheet", desc: "The Greenland Ice Sheet — second-largest on Earth after Antarctica, up to 3 km thick." } },
    { id: "barren", emoji: "🏔️", answer: 15.0, step: 0.1, color: "#78716c",
      en: { name: "Barren & tundra", desc: "Exposed rock, scree, and tundra along the ice-free coastal fringe." } },
    { id: "water", emoji: "🌊", answer: 3.0, step: 0.1, color: "#2563eb",
      en: { name: "Freshwater & fjords", desc: "Rivers, lakes, and fjords — many fed by glacial melt." } },
    { id: "pasture", emoji: "🌿", answer: 2.0, step: 0.1, color: "#65a30d",
      en: { name: "Pasture & sheep farming", desc: "South Greenland sheep pastures — one of the world's northernmost farming areas." } },
    { id: "urban", emoji: "🏙️", answer: 0.01, step: 0.001, color: "#7c3aed",
      en: { name: "Settlement", desc: "Nuuk, Sisimiut, Ilulissat, and smaller towns — no roads connect settlements." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.0, step: 0.001, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Negligible — Greenland's latitude makes solar impractical for winter months; hydropower dominates." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.05, step: 0.001, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "Technically ~3,500 ha, but practically irrelevant — Greenland already runs on 87% hydro." } }
  ],
  worldCard: {
    sol100Ha: 3500,
    en: {
      title: "What if Greenland alone powered Greenland with solar+battery?",
      body: `The solar circle technically fits within Greenland's outline at <strong>0.05%</strong> of total land — but represents <strong>91%</strong> of all ice-free land on the island, essentially the entire exposed coastline. Greenland already generates 87% of its electricity from hydropower.`
    }
  },
  sources: {
    en: "Statistics Greenland · Natural Resources Canada · Nukissiorfiit. Greenland total land area ~216.6M ha."
  }
},

/* ================================================================
   HUNGARY — sourced from Hungarian Central Statistical Office.
   ================================================================ */
hu: {
  name: "Hungary",
  flag: "🇭🇺",
  alpha2: "hu",
  numeric: "348",
  languages: ["hu", "en"],
  areaHa: 9300000,
  areaDesc: "Hungary total land area ~9.3M ha",
  electricityTWh: 35,
  dataYear: "2024",
  context: {
    hu: `Magyarország 2024-ben a világ egyik legmagasabb napelem-arányú országa volt az áramtermelésben (24 %). Az áprilisi 2026-os választáson Magyar Péter Tisza pártja legyőzte Orbán Viktor Fideszét 16 év után.`,
    en: `Hungary had one of the highest solar shares of electricity generation in the world in 2024 (24%). The April 2026 election saw Péter Magyar's Tisza party defeat Viktor Orbán's Fidesz after 16 years in power.`
  },
  disclaimer: {
    hu: `<strong>Megjegyzés:</strong> A napelem+akkumulátor számok egy gondolatkísérlet, nem politikai ajánlás.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "agri", emoji: "🚜", answer: 57.0, step: 0.1, color: "#d97706",
      hu: { name: "Mezőgazdasági terület", desc: "Szántók, legelők és ültetvények — Magyarország földjének több mint fele." },
      en: { name: "Agricultural land", desc: "Arable land, pastures, and plantations — more than half of Hungary." } },
    { id: "forest", emoji: "🌲", answer: 21.1, step: 0.1, color: "#166534",
      hu: { name: "Erdő", desc: "Erdőterületek — 2024 végén évszázados rekord." },
      en: { name: "Forest", desc: "Forest area — a century-long record as of end-2024." } },
    { id: "urban", emoji: "🏙️", answer: 7.0, step: 0.1, color: "#7c3aed",
      hu: { name: "Városi területek", desc: "Budapest, Debrecen, Szeged és más városok." },
      en: { name: "Urban areas", desc: "Budapest, Debrecen, Szeged, and other cities." } },
    { id: "water", emoji: "💧", answer: 3.0, step: 0.1, color: "#2563eb",
      hu: { name: "Víz", desc: "A Balaton, a Duna és egyéb vizek." },
      en: { name: "Water", desc: "Lake Balaton, the Danube, and other waters." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.5, step: 0.01, color: "#f59e0b",
      hu: { name: "Napelem+akkumulátor (jelenlegi)", desc: "Utility-scale napelemek akkumulátorral — 2024-ben a napenergia adta az áramtermelés 24 %-át." },
      en: { name: "Solar+battery (current)", desc: "Utility-scale solar with battery — solar provided 24% of electricity generation in 2024." } },
    { id: "sol100", emoji: "⚡🔋", answer: 2.5, step: 0.1, color: "#ea580c",
      hu: { name: "Napelem+akkumulátor 100 %-os áramellátáshoz", desc: "Szükséges terület Magyarország teljes áramellátásához 24/7 (~35 TWh/év)." },
      en: { name: "Solar+battery for 100% electricity", desc: "Land needed to power all of Hungary 24/7 (~35 TWh/yr)." } },
    { id: "other", emoji: "🌿", answer: 10.9, step: 0.1, color: "#65a30d",
      hu: { name: "Egyéb", desc: "Mocsarak, puszták és nem besorolt területek." },
      en: { name: "Other", desc: "Swamps, steppe, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 230000,
    hu: {
      title: "Mi lenne, ha Magyarország egyedül látná el Magyarországot napelemmel?",
      body: `Magyarország évi ~35 TWh áramot fogyaszt. Napelem+akkumulátor a teljes 24/7 ellátáshoz kb. <strong>230.000 hektárt</strong> igényelne — kb. <strong>2,5 %</strong> az ország területéből.`
    },
    en: {
      title: "What if Hungary alone powered Hungary with solar+battery?",
      body: `Hungary consumes roughly 35 TWh of electricity per year. Solar+battery for full 24/7 supply would need about <strong>230,000 hectares</strong> — roughly <strong>2.5%</strong> of Hungary's land.`
    }
  },
  sources: {
    hu: "Központi Statisztikai Hivatal · Magyar Energetikai és Közmű-szabályozási Hivatal. Magyarország teljes területe ~9,3 M ha.",
    en: "Hungarian Central Statistical Office · Hungarian Energy and Public Utility Regulatory Authority. Hungary total land area ~9.3M ha."
  }
},

/* ================================================================
   ICELAND — sourced from Icelandic Environment Agency / NRCan.
   ================================================================ */
is: {
  name: "Iceland",
  flag: "🇮🇸",
  alpha2: "is",
  numeric: "352",
  languages: ["en"],
  areaHa: 10300000,
  areaDesc: "Iceland total land area ~10.3M ha",
  electricityTWh: 20,
  dataYear: "2023–2024",
  context: {
    en: `Around 62% barren volcanic highland and 10% glacier, with agricultural land almost entirely sheep pasture rather than crops. Iceland has the most golf courses per capita of any country on Earth. Given Iceland's far-northern latitude, solar power could only ever be a minor, supplementary contributor — insolation collapses for months around midwinter. That's not a problem: Iceland already generates virtually 100% of its electricity from hydropower (~70%) and geothermal energy (~30%), neither of which depends on the sun.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "barren", emoji: "🏔️", answer: 62.0, step: 0.1, color: "#78716c",
      en: { name: "Barren volcanic highland", desc: "Lava fields, volcanic desert, and exposed rock — the dominant landscape of Iceland's interior." } },
    { id: "glacier", emoji: "🧊", answer: 10.0, step: 0.1, color: "#93c5fd",
      en: { name: "Glacier & ice cap", desc: "Vatnajökull, Langjökull, Hofsjökull, and other ice caps — Europe's largest glacier by volume." } },
    { id: "grass", emoji: "🌿", answer: 23.0, step: 0.1, color: "#65a30d",
      en: { name: "Grassland & pasture", desc: "Lowland meadows and sheep pasture — almost all of Iceland's agriculture is grazing, not crops." } },
    { id: "wetland", emoji: "💧", answer: 3.0, step: 0.1, color: "#0ea5e9",
      en: { name: "Wetlands", desc: "Bogs, fens, and marshy lowlands." } },
    { id: "urban", emoji: "🏙️", answer: 0.2, step: 0.1, color: "#7c3aed",
      en: { name: "Urban & infrastructure", desc: "Reykjavík, Akureyri, and smaller towns — 80% of the population lives in the capital region." } },
    { id: "golf", emoji: "⛳", answer: 0.01, step: 0.001, color: "#16a34a",
      en: { name: "Golf courses", desc: "Iceland has the most golf courses per capita of any country on Earth — ~65 courses for 380,000 people." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.0, step: 0.001, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Negligible — Iceland's latitude and cloudy maritime climate make solar a minor contributor." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.5, step: 0.1, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "~50,000 ha theoretically, but irrelevant — Iceland already runs on ~100% renewable hydro and geothermal." } }
  ],
  worldCard: {
    sol100Ha: 50000,
    en: {
      title: "What if Iceland alone powered Iceland with solar+battery?",
      body: `Iceland is one of the most dramatic overflow cases in the game, needing a circle over <strong>4.5×</strong> its own land area for world solar — a deliberate illustration that "renewable" doesn't have to mean solar.`
    }
  },
  sources: {
    en: "Icelandic Environment Agency · National Land Survey of Iceland · Landsvirkjun. Iceland total land area ~10.3M ha."
  }
},

/* ================================================================
   JAPAN — sourced from MAFF Japan / Forestry Agency.
   ================================================================ */
jp: {
  name: "Japan",
  flag: "🇯🇵",
  alpha2: "jp",
  numeric: "392",
  languages: ["ja", "en"],
  areaHa: 37800000,
  areaDesc: "Japan total land area ~37.8M ha",
  electricityTWh: 950,
  dataYear: "2023–2024",
  context: {
    ja: `日本の森林は国土の約66%を占めるが、多くは傾斜が急しくアクセスが困難な山岳地帯です。太陽光+蓄電池による100%電力供給は、日本の比較的低い日射量のため、ゲーム中で最も大きな土地需要の一つとなります。`,
    en: `Forests cover 66% of Japan's land yet most is inaccessible mountain terrain; solar+battery for 100% electricity is the largest land requirement in the game due to Japan's lower solar irradiance.`
  },
  disclaimer: {
    ja: `<strong>注記：</strong>太陽光+蓄電池の数値はAIを用いて生成された思考実験であり、政策提言ではありません。`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation.`
  },
  categories: [
    { id: "forest", emoji: "🌲", answer: 66.0, step: 0.1, color: "#166534",
      ja: { name: "森林", desc: "針葉樹林、広葉樹林、人工林 — 国土の約3分の2を占めるが、多くは急峻な山岳地帯。" },
      en: { name: "Forest", desc: "Coniferous, broadleaf, and plantation forests — covering about two-thirds of Japan, mostly steep mountain terrain." } },
    { id: "agri", emoji: "🚜", answer: 12.0, step: 0.1, color: "#d97706",
      ja: { name: "農地", desc: "水田、畑作、果樹園 — 平地の少ない日本では集約的な耕作が行われる。" },
      en: { name: "Agricultural land", desc: "Rice paddies, fields, and orchards — intensive cultivation on limited flat land." } },
    { id: "urban", emoji: "🏙️", answer: 5.0, step: 0.1, color: "#7c3aed",
      ja: { name: "都市・人工地面", desc: "東京、大阪、名古屋などの大都市圏とインフラ。" },
      en: { name: "Urban & built-up", desc: "Greater Tokyo, Osaka, Nagoya, and infrastructure — among the most densely populated urban areas on Earth." } },
    { id: "water", emoji: "💧", answer: 2.0, step: 0.1, color: "#2563eb",
      ja: { name: "水域", desc: "湖沼、河川、貯水池。" },
      en: { name: "Water bodies", desc: "Lakes, rivers, and reservoirs." } },
    { id: "golf", emoji: "⛳", answer: 0.3, step: 0.01, color: "#16a34a",
      ja: { name: "ゴルフ場", desc: "日本には約2,400のゴルフ場がある。" },
      en: { name: "Golf courses", desc: "Japan has ~2,400 golf courses — one of the highest counts in Asia." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.1, step: 0.01, color: "#f59e0b",
      ja: { name: "太陽光+蓄電池（現状）", desc: "大規模太陽光発電所と蓄電池 — 日本はFIT/FIP制度で太陽光を急速に拡大させた。" },
      en: { name: "Solar+battery (current)", desc: "Utility-scale solar with battery — Japan rapidly expanded solar under the FIT/FIP scheme." } },
    { id: "sol100", emoji: "⚡🔋", answer: 4.0, step: 0.1, color: "#ea580c",
      ja: { name: "太陽光+蓄電池による100%電力供給", desc: "日本の年間電力需要（約950 TWh）を24時間365日賄うための土地 — ゲーム中で最も大きな相対的フットプリントの一つ。" },
      en: { name: "Solar+battery for 100% electricity", desc: "Land to meet Japan's annual electricity demand (~950 TWh) 24/7 — one of the largest relative footprints in the game due to lower irradiance." } },
    { id: "other", emoji: "🌿", answer: 14.6, step: 0.1, color: "#65a30d",
      ja: { name: "その他", desc: "湿地、草原、砂浜など。" },
      en: { name: "Other", desc: "Wetlands, grassland, beaches, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 1510000,
    ja: {
      title: "もし日本だけで日本の電力を太陽光+蓄電池で賄ったら？",
      body: `日本の年間電力需要は約950 TWh。24時間365日賄うための大規模太陽光+蓄電池には約<strong>151万ヘクタール</strong> — 日本の国土の約<strong>4.0%</strong>が必要となる。`
    },
    en: {
      title: "What if Japan alone powered Japan with solar+battery?",
      body: `Japan's annual electricity demand is ~950 TWh. Utility-scale solar+battery to meet this 24/7 would need about <strong>1.51 million hectares</strong> — roughly <strong>4.0%</strong> of Japan's land.`
    }
  },
  sources: {
    ja: "農林水産省 · 林野庁 · METI. 日本の総面積 ~3,780万ha。",
    en: "Ministry of Agriculture, Forestry and Fisheries Japan · Forestry Agency · METI. Japan total land area ~37.8M ha."
  }
},

/* ================================================================
   MEXICO — sourced from INEGI / SIAP.
   ================================================================ */
mx: {
  name: "Mexico",
  flag: "🇲🇽",
  alpha2: "mx",
  numeric: "484",
  languages: ["es", "en"],
  areaHa: 196400000,
  areaDesc: "Mexico total land area ~196.4M ha",
  electricityTWh: 340,
  dataYear: "2023–2024",
  context: {
    es: `México tiene una diversidad ecológica extraordinaria — desde selvas tropicales hasta desiertos áridos. La ganadería extensiva es el uso del suelo más extendido.`,
    en: `Mexico has extraordinary ecological diversity — from tropical rainforests to arid deserts. Extensive livestock grazing is the most widespread land use.`
  },
  disclaimer: {
    es: `<strong>Nota:</strong> Las cifras de solar+batería son un experimento de pensamiento, no una recomendación de política.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "pasture", emoji: "🌿", answer: 41.7, step: 0.1, color: "#65a30d",
      es: { name: "Pastizales", desc: "Pastoreo extensivo de ganado — el uso del suelo más extendido en México." },
      en: { name: "Pastureland", desc: "Extensive livestock grazing — the most widespread land use in Mexico." } },
    { id: "forest", emoji: "🌲", answer: 33.0, step: 0.1, color: "#166534",
      es: { name: "Bosque", desc: "Bosques tropicales, templados y de coníferas — un tercio del país a pesar de la deforestación." },
      en: { name: "Forest", desc: "Tropical, temperate, and coniferous forests — a third of the country despite deforestation pressures." } },
    { id: "crop", emoji: "🌾", answer: 13.0, step: 0.1, color: "#d97706",
      es: { name: "Tierra de cultivo", desc: "Maíz, trigo, aguacate, café y otros cultivos." },
      en: { name: "Cropland", desc: "Corn, wheat, avocado, coffee, and other crops." } },
    { id: "urban", emoji: "🏙️", answer: 2.0, step: 0.1, color: "#7c3aed",
      es: { name: "Urbano e infraestructura", desc: "Ciudad de México, Guadalajara, Monterrey y otras ciudades." },
      en: { name: "Urban & infrastructure", desc: "Mexico City, Guadalajara, Monterrey, and other cities." } },
    { id: "water", emoji: "💧", answer: 1.0, step: 0.1, color: "#2563eb",
      es: { name: "Cuerpos de agua", desc: "Lagos, ríos y embalses." },
      en: { name: "Water bodies", desc: "Lakes, rivers, and reservoirs." } },
    { id: "golf", emoji: "⛳", answer: 0.01, step: 0.001, color: "#16a34a",
      es: { name: "Campos de golf", desc: "~200 campos de golf en México." },
      en: { name: "Golf courses", desc: "~200 golf courses in Mexico." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.02, step: 0.001, color: "#f59e0b",
      es: { name: "Solar+batería (actual)", desc: "Solar PV a gran escala con almacenamiento — México tiene excelente recurso solar en el norte." },
      en: { name: "Solar+battery (current)", desc: "Utility-scale solar PV with battery storage — Mexico has excellent solar resource in the north." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.3, step: 0.01, color: "#ea580c",
      es: { name: "Solar+batería para 100% electricidad", desc: "Tierra necesaria para alimentar todo México 24/7 (~340 TWh/año)." },
      en: { name: "Solar+battery for 100% electricity", desc: "Land needed to power all of Mexico 24/7 (~340 TWh/yr)." } },
    { id: "other", emoji: "🏔️", answer: 9.07, step: 0.1, color: "#78716c",
      es: { name: "Otro", desc: "Desierto, matorral, humedales y tierra no clasificada." },
      en: { name: "Other", desc: "Desert, scrubland, wetlands, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 590000,
    es: {
      title: "¿Y si México solo abasteciera a México con solar+batería?",
      body: `México consume aproximadamente 340 TWh de electricidad al año. Solar+batería a gran escala para cubrir esta demanda 24/7 necesitaría unos <strong>590.000 hectáreas</strong> — aproximadamente el <strong>0,3%</strong> del territorio mexicano.`
    },
    en: {
      title: "What if Mexico alone powered Mexico with solar+battery?",
      body: `Mexico consumes roughly 340 TWh of electricity per year. Utility-scale solar+battery to meet this demand 24/7 would need about <strong>590,000 hectares</strong> — roughly <strong>0.3%</strong> of Mexican land.`
    }
  },
  sources: {
    es: "INEGI · SIAP · CONAFOR. México superficie total ~196,4 M ha.",
    en: "INEGI · SIAP · CONAFOR. Mexico total land area ~196.4M ha."
  }
},

/* ================================================================
   NIGERIA — sourced from FAO FAOSTAT / National Bureau of Statistics.
   ================================================================ */
ng: {
  name: "Nigeria",
  flag: "🇳🇬",
  alpha2: "ng",
  numeric: "566",
  languages: ["en"],
  areaHa: 92376800,
  areaDesc: "Nigeria total land area ~92.4M ha",
  electricityTWh: 35,
  dataYear: "2023–2024",
  context: {
    en: `Africa's most populous nation (220 million) and largest oil producer, yet generating less grid electricity than Norway. 46% farmland, 22% forest (rapidly declining — one of the world's highest deforestation rates), 25% savanna. Golf courses cover more land than all utility-scale solar farms combined.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "crop", emoji: "🌾", answer: 46.0, step: 0.1, color: "#d97706",
      en: { name: "Farmland", desc: "Smallholder farms, cocoa, cassava, yam, and maize — feeding 220 million people." } },
    { id: "savanna", emoji: "🌿", answer: 25.0, step: 0.1, color: "#65a30d",
      en: { name: "Savanna", desc: "Guinea and Sudan savanna — grasslands with scattered trees across the north and centre." } },
    { id: "forest", emoji: "🌲", answer: 22.0, step: 0.1, color: "#166534",
      en: { name: "Forest", desc: "Tropical rainforest in the south — one of the world's highest deforestation rates." } },
    { id: "urban", emoji: "🏙️", answer: 3.0, step: 0.1, color: "#7c3aed",
      en: { name: "Urban & built-up", desc: "Lagos, Kano, Ibadan, Abuja, and sprawling informal settlements." } },
    { id: "water", emoji: "💧", answer: 2.0, step: 0.1, color: "#2563eb",
      en: { name: "Water bodies", desc: "The Niger River, Lake Chad (greatly diminished), and coastal lagoons." } },
    { id: "golf", emoji: "⛳", answer: 0.01, step: 0.001, color: "#16a34a",
      en: { name: "Golf courses", desc: "Golf courses cover more land than all utility-scale solar farms combined." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.001, step: 0.001, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Minimal utility-scale solar — Nigeria's grid is dominated by gas, with frequent blackouts." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.2, step: 0.01, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "~185,000 ha — Nigeria's exceptional solar resources (Sokoto gets 7.5 peak sun hours/day) mean the world's electricity could theoretically be powered from 18% of Nigeria's land." } },
    { id: "other", emoji: "🏔️", answer: 1.789, step: 0.1, color: "#78716c",
      en: { name: "Other", desc: "Wetlands, mangroves, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 185000,
    en: {
      title: "What if Nigeria alone powered Nigeria with solar+battery?",
      body: `Nigeria's exceptional solar resources (Sokoto gets 7.5 peak sun hours/day) mean the world's electricity could theoretically be powered from <strong>18%</strong> of Nigeria's land — roughly the same area Nigeria already uses for cities and roads.`
    }
  },
  sources: {
    en: "FAO FAOSTAT · National Bureau of Statistics Nigeria · World Bank. Nigeria total land area ~92.4M ha."
  }
},

/* ================================================================
   RUSSIA — sourced from FAO FAOSTAT 2022.
   ================================================================ */
ru: {
  name: "Russia",
  flag: "🇷🇺",
  alpha2: "ru",
  numeric: "643",
  languages: ["ru", "en"],
  areaHa: 1709820000,
  areaDesc: "Russia total land area ~1,710M ha",
  electricityTWh: 1100,
  dataYear: "2022",
  context: {
    ru: `Почти половина крупнейшей страны мира покрыта бореальными лесами — большими, чем весь Амазон. Россия владеет ~20% мировых лесов и величайшими запасами пресной воды, но вырабатывает всего 0,28% электроэнергии от солнца (ИРЕНА 2023), полагаясь вместо этого на газ (~47%), ядерную (~20%) и гидро (~18%).`,
    en: `Nearly half of the world's largest country is boreal forest — bigger than the entire Amazon. Russia holds ~20% of global forest cover and the world's greatest freshwater reserves, yet generates just 0.28% of its electricity from solar (IRENA 2023), relying instead on gas (~47%), nuclear (~20%) and hydro (~18%).`
  },
  disclaimer: {
    ru: `<strong>Примечание:</strong> Цифры солнечная+батарея являются мысленным экспериментом, а не политической рекомендацией.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "forest", emoji: "🌲", answer: 49.8, step: 0.1, color: "#166534",
      ru: { name: "Лес", desc: "Бореальные леса Сибири и Дальнего Востока — больше, чем весь Амазон." },
      en: { name: "Forest", desc: "Siberian and Far Eastern boreal forests — larger than the entire Amazon." } },
    { id: "other", emoji: "🏔️", answer: 32.8, step: 0.1, color: "#78716c",
      ru: { name: "Прочие земли", desc: "Тундра, болота, скалы, пустыни и необработанные земли." },
      en: { name: "Other land", desc: "Tundra, marsh, rock, desert, and uncultivated land." } },
    { id: "agri", emoji: "🚜", answer: 13.0, step: 0.1, color: "#d97706",
      ru: { name: "Сельскохозяйственные угодья", desc: "Пахотные земли и пастбища в южной части страны." },
      en: { name: "Agricultural land", desc: "Arable land and pasture in the southern belt." } },
    { id: "water", emoji: "💧", answer: 2.9, step: 0.1, color: "#2563eb",
      ru: { name: "Водные объекты", desc: "Озера Байкал, Ладога, Онежское и тысячи других." },
      en: { name: "Water bodies", desc: "Lake Baikal, Ladoga, Onega, and thousands more." } },
    { id: "urban", emoji: "🏙️", answer: 1.5, step: 0.1, color: "#7c3aed",
      ru: { name: "Населённые пункты и дороги", desc: "Москва, Санкт-Петербург и 13 других городов-миллионников." },
      en: { name: "Settlement & roads", desc: "Moscow, St. Petersburg, and 13 other million-plus cities." } },
    { id: "golf", emoji: "⛳", answer: 0.0001, step: 0.0001, color: "#16a34a",
      ru: { name: "Поля для гольфа", desc: "~35 клубов × ~65 га ≈ 1,700 га — примерно столько же, сколько все солнечные электростанции России вместе взятые." },
      en: { name: "Golf courses", desc: "~35 clubs × ~65 ha ≈ 1,700 ha — roughly the same area as all of Russia's solar farms combined." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.0001, step: 0.0001, color: "#f59e0b",
      ru: { name: "Солнечная+батарея (текущая)", desc: "Незначительно — Россия вырабатывает всего 0,28% электроэнергии от солнца (ИРЕНА 2023)." },
      en: { name: "Solar+battery (current)", desc: "Negligible — Russia generates just 0.28% of its electricity from solar (IRENA 2023)." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.01, step: 0.001, color: "#ea580c",
      ru: { name: "Солнечная+батарея для 100% электричества", desc: "~170,000 га — южные степи России теоретически могли бы обеспечить электроэнергией весь мир, используя всего 1,5% её территории." },
      en: { name: "Solar+battery for 100% electricity", desc: "~170,000 ha — the southern steppes could theoretically power the whole world with just 1.5% of Russia's land." } }
  ],
  worldCard: {
    sol100Ha: 170000,
    ru: {
      title: "Что если Россия одна обеспечила бы мир солнечной+батареей?",
      body: `Южные степи России теоретически могли бы обеспечить электроэнергией весь мир, используя всего <strong>1,5%</strong> её территории.`
    },
    en: {
      title: "What if Russia alone powered the world with solar+battery?",
      body: `Despite minimal current solar, the southern steppes could power the whole world with just <strong>1.5%</strong> of Russia's land.`
    }
  },
  sources: {
    ru: "ФАО ФАОСТАТ 2022 · ИРЕНА 2023. Общая площадь России ~1,710 млн га.",
    en: "FAO FAOSTAT 2022 · IRENA 2023. Russia total land area ~1,710M ha."
  }
},

/* ================================================================
   DR CONGO — sourced from FAO FAOSTAT.
   ================================================================ */
cd: {
  name: "DR Congo",
  flag: "🇨🇩",
  alpha2: "cd",
  numeric: "180",
  languages: ["fr", "en"],
  areaHa: 234485800,
  areaDesc: "DR Congo total land area ~234.5M ha",
  electricityTWh: 12,
  dataYear: "2023–2024",
  context: {
    fr: `Les deux tiers du pays sont couverts par la forêt tropicale du bassin du Congo, la deuxième plus grande forêt tropicale au monde après l'Amazonie. La boîte de contexte couvre l'extraction artisanale du cobalt et le déplacement vers les batteries LFP sans cobalt.`,
    en: `Two-thirds of the country is covered by the Congo Basin rainforest, the world's second-largest tropical forest after the Amazon. The country context box covers artisanal cobalt mining and the shift to cobalt-free LFP batteries.`
  },
  disclaimer: {
    fr: `<strong>Note :</strong> Les chiffres solaire+batterie sont une expérience de pensée, pas une recommandation politique.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "forest", emoji: "🌲", answer: 66.0, step: 0.1, color: "#166534",
      fr: { name: "Forêt tropicale", desc: "Forêt du bassin du Congo — la deuxième plus grande forêt tropicale du monde." },
      en: { name: "Tropical rainforest", desc: "Congo Basin rainforest — the world's second-largest tropical forest after the Amazon." } },
    { id: "savanna", emoji: "🌿", answer: 20.0, step: 0.1, color: "#65a30d",
      fr: { name: "Savane", desc: "Savanes boisées et prairies dans le sud et le centre." },
      en: { name: "Savanna", desc: "Wooded savanna and grassland in the south and centre." } },
    { id: "crop", emoji: "🌾", answer: 5.0, step: 0.1, color: "#d97706",
      fr: { name: "Terres cultivées", desc: "Manioc, maïs, riz et cultures vivrières à petite échelle." },
      en: { name: "Cropland", desc: "Cassava, maize, rice, and small-scale subsistence farming." } },
    { id: "wetland", emoji: "💧", answer: 5.0, step: 0.1, color: "#0ea5e9",
      fr: { name: "Zones humides", desc: "Le bassin du Congo contient d'immenses zones humides et tourbières." },
      en: { name: "Wetlands", desc: "The Congo Basin contains vast wetlands and peatlands." } },
    { id: "urban", emoji: "🏙️", answer: 0.5, step: 0.1, color: "#7c3aed",
      fr: { name: "Urbain", desc: "Kinshasa, Lubumbashi, Mbuji-Mayi et autres villes." },
      en: { name: "Urban", desc: "Kinshasa, Lubumbashi, Mbuji-Mayi, and other cities." } },
    { id: "water", emoji: "🌊", answer: 3.0, step: 0.1, color: "#2563eb",
      fr: { name: "Eau", desc: "Le fleuve Congo et ses affluents." },
      en: { name: "Water", desc: "The Congo River and its tributaries." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.001, step: 0.001, color: "#f59e0b",
      fr: { name: "Solaire+batterie (actuel)", desc: "Négligeable — moins de 10% de la population a accès au réseau électrique." },
      en: { name: "Solar+battery (current)", desc: "Negligible — less than 10% of the population has grid electricity access." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.05, step: 0.01, color: "#ea580c",
      fr: { name: "Solaire+batterie pour 100% électricité", desc: "~117,000 ha — la vaste taille de la RDC garde cette expérience de pensée dans des limites physiques raisonnables." },
      en: { name: "Solar+battery for 100% electricity", desc: "~117,000 ha — DRC's vast size keeps this thought experiment within physically reasonable bounds." } },
    { id: "other", emoji: "🏔️", answer: 0.449, step: 0.1, color: "#78716c",
      fr: { name: "Autre", desc: "Montagnes, zones minieres et terres non classifiées." },
      en: { name: "Other", desc: "Mountains, mining areas, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 117000,
    fr: {
      title: "Et si la RDC seule alimentait le monde en solaire+batterie ?",
      body: `La vaste taille de la RDC garde cette expérience de pensée dans des limites physiques raisonnables malgré un ensoleillement modéré sous la canopée de la forêt tropicale.`
    },
    en: {
      title: "What if DR Congo alone powered the world with solar+battery?",
      body: `DRC's vast size keeps the thought experiment well within physical bounds despite only moderate rainforest-dampened sunshine.`
    }
  },
  sources: {
    fr: "FAO FAOSTAT · Banque mondiale. Superficie totale de la RDC ~234,5 M ha.",
    en: "FAO FAOSTAT · World Bank. DR Congo total land area ~234.5M ha."
  }
},

/* ================================================================
   ZAMBIA — sourced from FAO FAOSTAT / Zambia Statistics Agency.
   ================================================================ */
zm: {
  name: "Zambia",
  flag: "🇿🇲",
  alpha2: "zm",
  numeric: "894",
  languages: ["en"],
  areaHa: 75261000,
  areaDesc: "Zambia total land area ~75.3M ha",
  electricityTWh: 17,
  dataYear: "2023–2024",
  context: {
    en: `60% forest (miombo woodland, being cleared for charcoal at over 170,000 hectares a year), with national parks covering roughly 30% of the country. Zambia has essentially no oil; its resource wealth is copper and cobalt critical to the global EV/battery supply chain, while its own electricity grid — 85% dependent on a single drought-exposed lake — suffered blackouts of up to 21 hours a day during the 2023-24 crisis.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "forest", emoji: "🌲", answer: 60.0, step: 0.1, color: "#166534",
      en: { name: "Forest", desc: "Miombo woodland — being cleared for charcoal at over 170,000 hectares a year." } },
    { id: "savanna", emoji: "🌿", answer: 25.0, step: 0.1, color: "#65a30d",
      en: { name: "Savanna & grassland", desc: "Open grasslands and wooded savanna across the plateau." } },
    { id: "crop", emoji: "🌾", answer: 7.0, step: 0.1, color: "#d97706",
      en: { name: "Cropland", desc: "Maize, cassava, and subsistence farming — the staple crop is maize." } },
    { id: "water", emoji: "💧", answer: 2.0, step: 0.1, color: "#2563eb",
      en: { name: "Water bodies", desc: "Lake Kariba, Lake Bangweulu, and the Kafue River." } },
    { id: "urban", emoji: "🏙️", answer: 1.0, step: 0.1, color: "#7c3aed",
      en: { name: "Urban & built-up", desc: "Lusaka, Kitwe, Ndola, and the Copperbelt." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.01, step: 0.001, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Growing rapidly after the 2023-24 hydropower crisis exposed grid vulnerability." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.1, step: 0.01, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "~75,000 ha — Zambia's excellent solar resource and large land area make this a physically credible scenario." } },
    { id: "other", emoji: "🏔️", answer: 4.89, step: 0.1, color: "#78716c",
      en: { name: "Other", desc: "Wetlands, floodplains, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 75000,
    en: {
      title: "What if Zambia alone powered Zambia with solar+battery?",
      body: `Zambia's excellent solar resource and large land area make this a physically credible scenario at just <strong>0.1%</strong> of its land.`
    }
  },
  sources: {
    en: "FAO FAOSTAT · Zambia Statistics Agency · ZESCO. Zambia total land area ~75.3M ha."
  }
},

/* ================================================================
   OMAN — sourced from FAO FAOSTAT / NCSI Oman.
   ================================================================ */
om: {
  name: "Oman",
  flag: "🇴🇲",
  alpha2: "om",
  numeric: "512",
  languages: ["ar", "en"],
  areaHa: 30950000,
  areaDesc: "Oman total land area ~31M ha",
  electricityTWh: 35,
  dataYear: "2023–2024",
  context: {
    ar: `أكثر من أربعة أخماس الصحراء والحصى، مع الزراعة والاستيطان مقتصرين على هامش ساحلي رقيق يرويه نظام الفلاج القديم.`,
    en: `Over four-fifths desert and gravel plains, with agriculture and settlement confined to a thin coastal fringe watered by the millennium-old falaj irrigation system.`
  },
  disclaimer: {
    ar: `<strong>ملاحظة:</strong> أرقام الطاقة الشمسية+البطارية هي تجربة فكرية، وليست توصية سياسية.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "desert", emoji: "🏜️", answer: 82.0, step: 0.1, color: "#f59e0b",
      ar: { name: "صحراء وأراضي قاحلة", desc: "الصحراء الرملية والسهول الحصوية التي تغطي معظم عمان." },
      en: { name: "Desert & barren", desc: "Sand desert and gravel plains covering most of Oman." } },
    { id: "mountain", emoji: "⛰️", answer: 10.0, step: 0.1, color: "#78716c",
      ar: { name: "جبال", desc: "جبال الحجر وجبال ظفار." },
      en: { name: "Mountains", desc: "The Hajar Mountains and Dhofar ranges." } },
    { id: "agri", emoji: "🚜", answer: 3.0, step: 0.1, color: "#d97706",
      ar: { name: "أراضي زراعية", desc: "واحات الساحل المروية بنظام الفلاج القديم." },
      en: { name: "Agricultural land", desc: "Coastal oases irrigated by the ancient falaj system." } },
    { id: "urban", emoji: "🏙️", answer: 2.0, step: 0.1, color: "#7c3aed",
      ar: { name: "مناطق حضرية", desc: "مسقط وصحار وصلالة." },
      en: { name: "Urban areas", desc: "Muscat, Sohar, and Salalah." } },
    { id: "water", emoji: "💧", answer: 0.5, step: 0.1, color: "#2563eb",
      ar: { name: "مياه", desc: "لا توجد أنهار دائمة — المياه الجوفية والتحلية هي المصدر الرئيسي." },
      en: { name: "Water", desc: "No permanent rivers — groundwater and desalination are the main sources." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.1, step: 0.01, color: "#f59e0b",
      ar: { name: "طاقة شمسية+بطارية (حالية)", desc: "عُمان لديها أعلى إشعاع شمسي في العالم (~429 هكتار/تيراواط ساعة)." },
      en: { name: "Solar+battery (current)", desc: "Oman has among the highest solar irradiance on Earth (~429 ha/TWh)." } },
    { id: "sol100", emoji: "⚡🔋", answer: 1.4, step: 0.1, color: "#ea580c",
      ar: { name: "طاقة شمسية+بطارية لـ100% كهرباء", desc: "~434,000 هكتار — أشعة الشمس الاستثنائية لعُمان تعني أن كهرباء العالم بأكمله يمكن أن تأتي من 43% من أراضيها." },
      en: { name: "Solar+battery for 100% electricity", desc: "~434,000 ha — Oman's exceptional solar irradiance means the whole world's electricity could theoretically come from 43% of Oman's land." } },
    { id: "other", emoji: "🌿", answer: 1.4, step: 0.1, color: "#65a30d",
      ar: { name: "أخرى", desc: "سهول الساحل والأراضي غير المصنفة." },
      en: { name: "Other", desc: "Coastal plains and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 434000,
    ar: {
      title: "ماذا لو قامت عُمان وحدها بتزويد العالم بالطاقة الشمسية+البطارية؟",
      body: `أشعة الشمس الاستثنائية لعُمان تعني أن كهرباء العالم بأكمله يمكن أن تأتي من <strong>43%</strong> من أراضيها.`
    },
    en: {
      title: "What if Oman alone powered the world with solar+battery?",
      body: `Oman's exceptional solar irradiance (~429 ha/TWh, among the best on Earth) means the whole world's electricity could theoretically come from <strong>43%</strong> of Oman's land.`
    }
  },
  sources: {
    ar: "الفاو فاوستات · المركز الوطني للإحصاء والمعلومات عُمان. المساحة الإجمالية ~31 مليون هكتار.",
    en: "FAO FAOSTAT · NCSI Oman. Oman total land area ~31M ha."
  }
},

/* ================================================================
   PAKISTAN — sourced from FAO FAOSTAT / Pakistan Bureau of Statistics.
   ================================================================ */
pk: {
  name: "Pakistan",
  flag: "🇵🇰",
  alpha2: "pk",
  numeric: "586",
  languages: ["ur", "en"],
  areaHa: 79610000,
  areaDesc: "Pakistan total land area ~79.6M ha",
  electricityTWh: 140,
  dataYear: "2023–2024",
  context: {
    ur: `پاکستان میں تقریباً 47% زمین زرعی ہے، صرف 4.7% جنگلات۔ تھار اور چولستان کے صحرائے بڑے حصے پر پھیلے ہوئے ہیں۔`,
    en: `~47% farmland, just 4.7% forest, with the Thar and Cholistan deserts covering much of the rest. The solar category highlights Pakistan's extraordinary rooftop solar boom: in 2024 alone it imported more solar panels than almost any country bar China and the US — nearly all onto existing rooftops, adding essentially zero new land use.`
  },
  disclaimer: {
    ur: `<strong>نوٹ:</strong> سولر+بیٹری کے اعداد و شمار ایک سوچ کا تجربہ ہیں، کوئی پالیسی سفارش نہیں۔`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "crop", emoji: "🌾", answer: 47.0, step: 0.1, color: "#d97706",
      ur: { name: "زرعی زمین", desc: "گندم، چاول، گنے اور دیگر فصلیں — دریائے سندھ کے وسیع نظام آبپاشی پر انحصار۔" },
      en: { name: "Farmland", desc: "Wheat, rice, sugarcane, and other crops — dependent on the vast Indus River irrigation system." } },
    { id: "barren", emoji: "🏜️", answer: 38.0, step: 0.1, color: "#f59e0b",
      ur: { name: "صحرا اور بنجر", desc: "تھار اور چولستان کے صحرائے، اور کوہستانی علاقے۔" },
      en: { name: "Desert & barren", desc: "The Thar and Cholistan deserts, and mountainous terrain." } },
    { id: "forest", emoji: "🌲", answer: 4.7, step: 0.1, color: "#166534",
      ur: { name: "جنگل", desc: "الپائن، نیم حارہی اور ساحلی جنگلات — تیزی سے کم ہو رہے ہیں۔" },
      en: { name: "Forest", desc: "Alpine, subtropical, and coastal forests — rapidly declining." } },
    { id: "urban", emoji: "🏙️", answer: 3.0, step: 0.1, color: "#7c3aed",
      ur: { name: "شہری علاقے", desc: "کراچی، لاہور، راولپنڈی، فیصل آباد اور دیگر شہری مراکز۔" },
      en: { name: "Urban areas", desc: "Karachi, Lahore, Rawalpindi, Faisalabad, and other urban centres." } },
    { id: "water", emoji: "💧", answer: 2.0, step: 0.1, color: "#2563eb",
      ur: { name: "پانی", desc: "دریائے سندھ، دریائے جہلم، منگلا اور تربیلا جھیلیں۔" },
      en: { name: "Water bodies", desc: "The Indus River, Jhelum River, and the Mangla and Tarbela reservoirs." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.1, step: 0.01, color: "#f59e0b",
      ur: { name: "سولر+بیٹری (موجودہ)", desc: "2024 میں غیرمعمولی چھت پر سولر بوم — تقریباً تمام چھتوں پر، نئی زمین کے استعمال کے بغیر۔" },
      en: { name: "Solar+battery (current)", desc: "Extraordinary rooftop solar boom in 2024 — almost all on rooftops, adding zero new land use." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.5, step: 0.01, color: "#ea580c",
      ur: { name: "سولر+بیٹری برائے 100% بجلی", desc: "~398,000 ہیکٹر — پاکستان کے صحرے نظریاتی طور پر پوری دنیا کو بجلی فراہم کر سکتے ہیں۔" },
      en: { name: "Solar+battery for 100% electricity", desc: "~398,000 ha — Pakistan's deserts could theoretically power the whole world from just ~23% of its own land." } },
    { id: "other", emoji: "🌿", answer: 5.2, step: 0.1, color: "#65a30d",
      ur: { name: "دیگر", desc: "نمکین زمین، دلتائی علاقے اور غیر درجہ بند زمین۔" },
      en: { name: "Other", desc: "Salt flats, deltaic areas, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 398000,
    ur: {
      title: "اگر پاکستان اکیلا پاکستان کو سولر+بیٹری سے چلائے؟",
      body: `پاکستان کے صحرے نظریاتی طور پر پوری دنیا کو بجلی فراہم کر سکتے ہیں صرف اپنی زمین کے <strong>23%</strong> سے۔`
    },
    en: {
      title: "What if Pakistan alone powered Pakistan with solar+battery?",
      body: `Pakistan's deserts could theoretically power the whole world from just <strong>23%</strong> of its own land.`
    }
  },
  sources: {
    ur: "ایف اے او فاؤسٹیٹ · پاکستان بیورو آف سٹیٹسٹکس۔ پاکستان کل رقبہ ~79.6 ملین ہیکٹر۔",
    en: "FAO FAOSTAT · Pakistan Bureau of Statistics. Pakistan total land area ~79.6M ha."
  }
},

/* ================================================================
   QATAR — sourced from FAO FAOSTAT / PSA Qatar.
   ================================================================ */
qa: {
  name: "Qatar",
  flag: "🇶🇦",
  alpha2: "qa",
  numeric: "634",
  languages: ["ar", "en"],
  areaHa: 1160000,
  areaDesc: "Qatar total land area ~1.16M ha",
  electricityTWh: 50,
  dataYear: "2023–2024",
  context: {
    ar: `ما يقرب من 80% صحراء وأراضٍ قاحلة، مع أكثر من 99% من السكان يعيشون في الهامش الحضري حول الدوحة.`,
    en: `Nearly 80% desert and barren land, with over 99% of the population living in the urban fringe around Doha.`
  },
  disclaimer: {
    ar: `<strong>ملاحظة:</strong> أرقام الطاقة الشمسية+البطارية هي تجربة فكرية، وليست توصية سياسية.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "desert", emoji: "🏜️", answer: 80.0, step: 0.1, color: "#f59e0b",
      ar: { name: "صحراء وأراضٍ قاحلة", desc: "صحراء قطر الرملية والحصوية." },
      en: { name: "Desert & barren", desc: "Qatar's sand and gravel desert." } },
    { id: "agri", emoji: "🚜", answer: 0.4, step: 0.1, color: "#d97706",
      ar: { name: "أراضي زراعية", desc: "الزراعة المائية والبيوت المحمية بعد الحصار 2017 — بَلَدْنَا وصلت إلى الاكتفاء الذاتي تقريبًا في منتجات الألبان والدواجن الطازجة." },
      en: { name: "Agricultural land", desc: "Hydroponic greenhouses and modern dairy/poultry operations like Baladna, which reached near-total self-sufficiency in dairy and fresh poultry despite the country's tiny arable land area." } },
    { id: "urban", emoji: "🏙️", answer: 15.0, step: 0.1, color: "#7c3aed",
      ar: { name: "مناطق حضرية", desc: "الدوحة والمناطق المحيطة بها — يعيش هنا أكثر من 99% من السكان." },
      en: { name: "Urban areas", desc: "Doha and surrounding areas — over 99% of the population lives here." } },
    { id: "water", emoji: "💧", answer: 0.5, step: 0.1, color: "#2563eb",
      ar: { name: "مياه", desc: "لا أنهار دائمة — التحلية هي المصدر الرئيسي للمياه العذبة." },
      en: { name: "Water", desc: "No permanent rivers — desalination is the main source of freshwater." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.5, step: 0.01, color: "#f59e0b",
      ar: { name: "طاقة شمسية+بطارية (حالية)", desc: "قطر لديها ظروف شمسية عالمية المستوى (~375 هكتار/تيراواط ساعة)." },
      en: { name: "Solar+battery (current)", desc: "Qatar has world-class solar conditions (~375 ha/TWh)." } },
    { id: "sol100", emoji: "⚡🔋", answer: 40.0, step: 0.1, color: "#ea580c",
      ar: { name: "طاقة شمسية+بطارية لـ100% كهرباء", desc: "~464,000 هكتار — الدائرة اللازمة لكهرباء العالم أكبر من مساحة قطر بأكثر من 1000 مرة." },
      en: { name: "Solar+battery for 100% electricity", desc: "~464,000 ha — the circle needed for world electricity demand is over 1,000× the size of the entire country." } },
    { id: "other", emoji: "🌿", answer: 3.6, step: 0.1, color: "#65a30d",
      ar: { name: "أخرى", desc: "سهول ساحلية وأراضٍ غير مصنفة." },
      en: { name: "Other", desc: "Coastal plains and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 464000,
    ar: {
      title: "ماذا لو قامت قطر وحدها بتزويد العالم بالطاقة الشمسية+البطارية؟",
      body: `على الرغم من ظروفها الشمسية الاستثنائية (~375 هكتار/تيراواط ساعة)، إلا أن المساحة الصغيرة لقطر تعني أن الدائرة اللازمة لطلب كهرباء العالم أكبر من مساحة قطر بأكثر من <strong>1000 مرة</strong>.`
    },
    en: {
      title: "What if Qatar alone powered the world with solar+battery?",
      body: `Despite near-uniform, world-class solar conditions (~375 ha/TWh), Qatar's tiny land area means the circle needed for world electricity demand is over <strong>1,000×</strong> the size of the entire country.`
    }
  },
  sources: {
    ar: "الفاو فاوستات · الهيئة العامة للإحصاء قطر. المساحة الإجمالية ~1.16 مليون هكتار.",
    en: "FAO FAOSTAT · PSA Qatar. Qatar total land area ~1.16M ha."
  }
},

/* ================================================================
   THAILAND — sourced from FAO FAOSTAT / OAE Thailand.
   ================================================================ */
th: {
  name: "Thailand",
  flag: "🇹🇭",
  alpha2: "th",
  numeric: "764",
  languages: ["th", "en"],
  areaHa: 51300000,
  areaDesc: "Thailand total land area ~51.3M ha",
  electricityTWh: 200,
  dataYear: "2023–2024",
  context: {
    th: `ประเทศไทยเป็นผู้ส่งออกข้าวรายใหญ่ของโลก มีพื้นที่ทำการเกษตร 41% และป่าไม้ 37% แม้จะมีการพัฒนามาหลายทศวรรษ`,
    en: `41% farmland (a top global rice exporter), 37% forest despite decades of development, and over 250 golf courses making it one of Asia's top golf tourism destinations. Highlights EGAT's floating solar programme on Sirindhorn Dam — the world's largest hydro-floating solar hybrid.`
  },
  disclaimer: {
    th: `<strong>หมายเหตุ:</strong> ตัวเลขโซลาร์+แบตเตอรี่เป็นการทดลองทางความคิด ไม่ใช่คำแนะนำเชิงนโยบาย`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "crop", emoji: "🌾", answer: 41.0, step: 0.1, color: "#d97706",
      th: { name: "พื้นที่เกษตรกรรม", desc: "นา ไร่ สวนยางพารา และพืชผลอื่นๆ — ประเทศไทยเป็นผู้ส่งออกข้าวรายใหญ่ของโลก" },
      en: { name: "Agricultural land", desc: "Rice paddies, fields, rubber plantations, and other crops — Thailand is a top global rice exporter." } },
    { id: "forest", emoji: "🌲", answer: 37.0, step: 0.1, color: "#166534",
      th: { name: "ป่าไม้", desc: "ป่าดิบชื้น ป่าเบญจพรรณ และป่าสน — ลดลงอย่างต่อเนื่องจากการตัดไม้ทำลายป่า" },
      en: { name: "Forest", desc: "Rainforest, deciduous forest, and pine forest — steadily declining from logging." } },
    { id: "urban", emoji: "🏙️", answer: 3.0, step: 0.1, color: "#7c3aed",
      th: { name: "พื้นที่เมือง", desc: "กรุงเทพมหานคร เชียงใหม่ ภูเก็ต และเมืองอื่นๆ" },
      en: { name: "Urban areas", desc: "Bangkok, Chiang Mai, Phuket, and other cities." } },
    { id: "water", emoji: "💧", answer: 3.0, step: 0.1, color: "#2563eb",
      th: { name: "แหล่งน้ำ", desc: "แม่น้ำเจ้าพระยา แม่น้ำโขง และเขื่อนต่างๆ" },
      en: { name: "Water bodies", desc: "The Chao Phraya River, Mekong tributaries, and reservoirs." } },
    { id: "golf", emoji: "⛳", answer: 0.1, step: 0.01, color: "#16a34a",
      th: { name: "สนามกอล์ฟ", desc: "ประเทศไทยมีสนามกอล์ฟกว่า 250 แห่ง — เป็นจุดหมายปลายทางการท่องเที่ยวกอล์ฟชั้นนำของเอเชีย" },
      en: { name: "Golf courses", desc: "Thailand has over 250 golf courses — one of Asia's top golf tourism destinations." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.1, step: 0.01, color: "#f59e0b",
      th: { name: "โซลาร์+แบตเตอรี่ (ปัจจุบัน)", desc: "โซลาร์ลอยน้ำบนเขื่อนสิรินธร — โซลาร์ลอยน้ำผสมผสานที่ใหญ่ที่สุดในโลก" },
      en: { name: "Solar+battery (current)", desc: "Floating solar on Sirindhorn Dam — the world's largest hydro-floating solar hybrid." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.6, step: 0.01, color: "#ea580c",
      th: { name: "โซลาร์+แบตเตอรี่สำหรับไฟฟ้า 100%", desc: "~308,000 เฮกตาร์ — ทรัพยากรแสงอาทิตย์เขตร้อนและพื้นที่ขนาดใหญ่ทำให้เป็นหนึ่งในกรณีที่มีพื้นฐานทางกายภาพมากที่สุดในเกม" },
      en: { name: "Solar+battery for 100% electricity", desc: "~308,000 ha — Thailand's tropical solar resource and reasonably large land area make this one of the more physically grounded cases in the game." } },
    { id: "other", emoji: "🌿", answer: 15.3, step: 0.1, color: "#65a30d",
      th: { name: "อื่นๆ", desc: "ทุ่งหญ้า ชายฝั่ง และพื้นที่ไม่ได้จัดประเภท" },
      en: { name: "Other", desc: "Grassland, coast, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 308000,
    th: {
      title: "ถ้าประเทศไทยผลิตไฟฟ้า 100% จากโซลาร์+แบตเตอรี่ได้อย่างไร?",
      body: `ทรัพยากรแสงอาทิตย์เขตร้อนและพื้นที่ขนาดใหญ่ทำให้เป็นหนึ่งในกรณีที่มีพื้นฐานทางกายภาพมากที่สุดในเกม ต้องใช้พื้นที่เพียง <strong>0.6%</strong> ของประเทศไทย`
    },
    en: {
      title: "What if Thailand alone powered Thailand with solar+battery?",
      body: `Thailand's tropical solar resource and reasonably large land area make this one of the more physically grounded "fits within the country" cases in the game at just <strong>0.6%</strong> of its land.`
    }
  },
  sources: {
    th: "FAO FAOSTAT · สำนักงานเศรษฐกิจการเกษตร (OAE). พื้นที่ประเทศไทยรวม ~51.3 ล้านเฮกตาร์",
    en: "FAO FAOSTAT · Office of Agricultural Economics (OAE) Thailand. Thailand total land area ~51.3M ha."
  }
},

/* ================================================================
   TUVALU — sourced from FAO FAOSTAT / Tuvalu Government.
   ================================================================ */
tv: {
  name: "Tuvalu",
  flag: "🇹🇻",
  alpha2: "tv",
  numeric: "798",
  languages: ["en"],
  areaHa: 2600,
  areaDesc: "Tuvalu total land area ~2,600 ha",
  electricityTWh: 0.01,
  dataYear: "2023–2024",
  context: {
    en: `One of the four smallest countries on Earth at just 26 km² (2,600 ha), averaging under 2 metres above sea level. Categories highlight the existential threat of sea-level rise for low-lying Pacific nations: pulaka swamp-taro gardens poisoned by saltwater intrusion from below, a freshwater lens contaminated by encroaching seawater, and engineered land built by the Tuvalu Coastal Adaptation Project because there is no higher ground to retreat to.`
  },
  disclaimer: {
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "coconut", emoji: "🥥", answer: 40.0, step: 0.1, color: "#65a30d",
      en: { name: "Coconut & vegetation", desc: "Coconut palms, pandanus, and scrub vegetation across the atolls." } },
    { id: "settlement", emoji: "🏙️", answer: 20.0, step: 0.1, color: "#7c3aed",
      en: { name: "Settlement & infrastructure", desc: "Funafuti, Vaiaku, and smaller villages — no point on Tuvalu is more than a few metres above sea level." } },
    { id: "pulaka", emoji: "🌿", answer: 15.0, step: 0.1, color: "#d97706",
      en: { name: "Pulaka pits & agriculture", desc: "Traditional swamp-taro gardens, increasingly poisoned by saltwater intrusion from below." } },
    { id: "water", emoji: "💧", answer: 10.0, step: 0.1, color: "#2563eb",
      en: { name: "Lagoon & freshwater lens", desc: "The central lagoon and the thin freshwater lens, both threatened by rising seas." } },
    { id: "coast", emoji: "🌊", answer: 10.0, step: 0.1, color: "#0ea5e9",
      en: { name: "Reef & coastal margin", desc: "Coral reefs and the narrow coastal strip — Tuvalu's first line of defence against the ocean." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.5, step: 0.1, color: "#f59e0b",
      en: { name: "Solar+battery (current)", desc: "Small-scale solar with battery storage on each atoll — the primary source of electricity." } },
    { id: "sol100", emoji: "⚡🔋", answer: 5.0, step: 0.1, color: "#ea580c",
      en: { name: "Solar+battery for 100% electricity", desc: "~130 ha — Tuvalu's entire national territory would fit inside the land needed for world solar over 6,400 times." } },
    { id: "other", emoji: "🏔️", answer: 0.0, step: 0.1, color: "#78716c",
      en: { name: "Other", desc: "There is almost no 'other' land on Tuvalu — every hectare is spoken for." } }
  ],
  worldCard: {
    sol100Ha: 130,
    en: {
      title: "What if Tuvalu alone powered Tuvalu with solar+battery?",
      body: `Tuvalu's entire national territory would fit inside the land needed for world solar over <strong>6,400 times</strong> — the starkest scale mismatch in the game, underlining just how small and vulnerable this nation of 11,000 people truly is.`
    }
  },
  sources: {
    en: "Tuvalu Government · FAO FAOSTAT · Tuvalu Coastal Adaptation Project. Tuvalu total land area ~2,600 ha."
  }
},

/* ================================================================
   VENEZUELA — sourced from FAO FAOSTAT / INE Venezuela.
   ================================================================ */
ve: {
  name: "Venezuela",
  flag: "🇻🇪",
  alpha2: "ve",
  numeric: "862",
  languages: ["es", "en"],
  areaHa: 91200000,
  areaDesc: "Venezuela total land area ~91.2M ha",
  electricityTWh: 80,
  dataYear: "2023–2024",
  context: {
    es: `52% bosque, 24% sabana de los Llanos y tierras de cultivo, con electricidad ya ~78% limpia gracias a la represa del Guri sola.`,
    en: `52% forest, 24% Llanos savanna and farmland, with electricity already ~78% clean thanks to the Guri Dam alone.`
  },
  disclaimer: {
    es: `<strong>Nota:</strong> Las cifras de solar+batería son un experimento de pensamiento, no una recomendación de política.`,
    en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.`
  },
  categories: [
    { id: "forest", emoji: "🌲", answer: 52.0, step: 0.1, color: "#166534",
      es: { name: "Bosque", desc: "Bosques tropicales del Amazonas y del escudo guayanés." },
      en: { name: "Forest", desc: "Amazon rainforest and Guiana Shield tropical forests." } },
    { id: "savanna", emoji: "🌿", answer: 24.0, step: 0.1, color: "#65a30d",
      es: { name: "Sabana de los Llanos", desc: "Extensas sabanas y tierras de cultivo en los Llanos orientales." },
      en: { name: "Llanos savanna & farmland", desc: "Vast savanna and cropland in the eastern Llanos." } },
    { id: "urban", emoji: "🏙️", answer: 2.0, step: 0.1, color: "#7c3aed",
      es: { name: "Urbano", desc: "Caracas, Maracaibo, Valencia y otras ciudades." },
      en: { name: "Urban", desc: "Caracas, Maracaibo, Valencia, and other cities." } },
    { id: "water", emoji: "💧", answer: 3.0, step: 0.1, color: "#2563eb",
      es: { name: "Agua", desc: "El lago de Maracaibo, el río Orinoco y la represa del Guri." },
      en: { name: "Water", desc: "Lake Maracaibo, the Orinoco River, and the Guri Dam reservoir." } },
    { id: "solar", emoji: "☀️🔋", answer: 0.01, step: 0.001, color: "#f59e0b",
      es: { name: "Solar+batería (actual)", desc: "Mínimo — Venezuela ya genera ~78% de su electricidad de hidroeléctrica." },
      en: { name: "Solar+battery (current)", desc: "Minimal — Venezuela already generates ~78% of its electricity from hydropower." } },
    { id: "sol100", emoji: "⚡🔋", answer: 0.3, step: 0.01, color: "#ea580c",
      es: { name: "Solar+batería para 100% electricidad", desc: "~274,000 ha — a diferencia del petróleo, la luz solar no necesita dilución ni décadas de inversión de capital." },
      en: { name: "Solar+battery for 100% electricity", desc: "~274,000 ha — unlike the oil, sunlight needs no dilution or decades of capital investment." } },
    { id: "other", emoji: "🏔️", answer: 18.69, step: 0.1, color: "#78716c",
      es: { name: "Otro", desc: "Montañas, humedales y tierra no clasificada." },
      en: { name: "Other", desc: "Mountains, wetlands, and unclassified land." } }
  ],
  worldCard: {
    sol100Ha: 274000,
    es: {
      title: "¿Y si Venezuela sola abasteciera al mundo con solar+batería?",
      body: `A diferencia del petróleo, la luz solar no necesita dilución ni décadas de inversión de capital — el área y el recurso solar tropical de Venezuela significan que toda la electricidad del mundo podría provenir teóricamente de solo el <strong>18.5%</strong> de su territorio.`
    },
    en: {
      title: "What if Venezuela alone powered the world with solar+battery?",
      body: `Unlike the oil, sunlight needs no dilution or decades of capital investment — Venezuela's land area and solid tropical solar resource mean the whole world's electricity could theoretically come from just <strong>18.5%</strong> of its territory.`
    }
  },
  sources: {
    es: "FAO FAOSTAT · INE Venezuela. Venezuela superficie total ~91.2 M ha.",
    en: "FAO FAOSTAT · INE Venezuela. Venezuela total land area ~91.2M ha."
  }
},

/* ================================================================
   STUB COUNTRIES — metadata only. Migrate category data from your
   original v5 xx-land-use-game.html files into this structure.
   ================================================================ */

au: {
  name: "Australia",
  flag: "🇦🇺",
  alpha2: "au",
  numeric: "036",
  languages: ["en"],
  areaHa: 769202000,
  areaDesc: "Australia total land area ~769.2M ha",
  electricityTWh: 250,
  dataYear: "2023–2024",
  context: { en: "STUB — migrate from original au-land-use-game.html" },
  disclaimer: { en: `<strong>Note:</strong> The solar+battery figures are a thought experiment, not a policy recommendation.` },
  categories: [],
  worldCard: { sol100Ha: 0, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { en: "ABARES · ABS. Australia total land area ~769.2M ha." }
},

br: {
  name: "Brazil",
  flag: "🇧🇷",
  alpha2: "br",
  numeric: "076",
  languages: ["pt", "en"],
  areaHa: 851490000,
  areaDesc: "Brazil total land area ~851.5M ha",
  electricityTWh: 700,
  dataYear: "2023–2024",
  context: { pt: "STUB — migrar do arquivo original br-land-use-game.html", en: "STUB — migrate from original br-land-use-game.html" },
  disclaimer: { pt: `<strong>Nota:</strong> Os números de solar+bateria são um experimento de pensamento.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, pt: { title: "STUB", body: "Migrar do arquivo original." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { pt: "IBGE / MapBiomas. Brasil área total ~851,5 M ha.", en: "IBGE / MapBiomas. Brazil total land area ~851.5M ha." }
},

cn: {
  name: "China",
  flag: "🇨🇳",
  alpha2: "cn",
  numeric: "156",
  languages: ["zh", "en"],
  areaHa: 960000000,
  areaDesc: "China total land area ~960M ha",
  electricityTWh: 9200,
  dataYear: "2023–2024",
  context: { zh: "STUB — 从原始 cn-land-use-game.html 迁移", en: "STUB — migrate from original cn-land-use-game.html" },
  disclaimer: { zh: `<strong>注意：</strong>太阳能+电池数据是思想实验，并非政策建议。`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, zh: { title: "STUB", body: "从原始文件迁移。" }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { zh: "国家统计局 · 自然资源部。中国总面积 ~9.6亿公顷。", en: "National Bureau of Statistics China · Ministry of Natural Resources. China total land area ~960M ha." }
},

eg: {
  name: "Egypt",
  flag: "🇪🇬",
  alpha2: "eg",
  numeric: "818",
  languages: ["ar", "en"],
  areaHa: 100245000,
  areaDesc: "Egypt total land area ~100.2M ha",
  electricityTWh: 200,
  dataYear: "2023–2024",
  context: { ar: "STUB — انقل من الملف الأصلي eg-land-use-game.html", en: "STUB — migrate from original eg-land-use-game.html" },
  disclaimer: { ar: `<strong>ملاحظة:</strong> أرقام الطاقة الشمسية+البطارية هي تجربة فكرية.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, ar: { title: "STUB", body: "انقل من الملف الأصلي." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { ar: "الفاو فاوستات · الجهاز المركزي للتعبئة العامة والإحصاء. مصر المساحة الإجمالية ~100.2 مليون هكتار.", en: "FAO FAOSTAT · CAPMAS. Egypt total land area ~100.2M ha." }
},

es: {
  name: "Spain",
  flag: "🇪🇸",
  alpha2: "es",
  numeric: "724",
  languages: ["es", "en"],
  areaHa: 50590000,
  areaDesc: "Spain total land area ~50.6M ha",
  electricityTWh: 260,
  dataYear: "2023–2024",
  context: { es: "STUB — migrar del archivo original es-land-use-game.html", en: "STUB — migrate from original es-land-use-game.html" },
  disclaimer: { es: `<strong>Nota:</strong> Las cifras de solar+batería son un experimento de pensamiento.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, es: { title: "STUB", body: "Migrar del archivo original." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { es: "MITECO / MAPA. España superficie total ~50,6 M ha.", en: "MITECO / MAPA. Spain total land area ~50.6M ha." }
},

in: {
  name: "India",
  flag: "🇮🇳",
  alpha2: "in",
  numeric: "356",
  languages: ["hi", "en"],
  areaHa: 328726000,
  areaDesc: "India total land area ~328.7M ha",
  electricityTWh: 1700,
  dataYear: "2023–2024",
  context: { hi: "STUB — मूल in-land-use-game.html से माइग्रेट करें", en: "STUB — migrate from original in-land-use-game.html" },
  disclaimer: { hi: `<strong>नोट:</strong> सोलर+बैटरी के आंकड़े एक विचार प्रयोग हैं।`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, hi: { title: "STUB", body: "मूल फ़ाइल से माइग्रेट करें।" }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { hi: "FAO FAOSTAT · भारत सरकार कृषि मंत्रालय। भारत कुल भूमि क्षेत्र ~328.7M हेक्टेयर।", en: "FAO FAOSTAT · Ministry of Agriculture India. India total land area ~328.7M ha." }
},

ke: {
  name: "Kenya",
  flag: "🇰🇪",
  alpha2: "ke",
  numeric: "404",
  languages: ["sw", "en"],
  areaHa: 59100000,
  areaDesc: "Kenya total land area ~59.1M ha",
  electricityTWh: 12,
  dataYear: "2023–2024",
  context: { sw: "STUB — hamia kutoka faili la awali ke-land-use-game.html", en: "STUB — migrate from original ke-land-use-game.html" },
  disclaimer: { sw: `<strong>Kumbuka:</strong> Takwimu za solar+battery ni majaribio ya mawazo.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, sw: { title: "STUB", body: "Hamia kutoka faili la awali." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { sw: "FAO FAOSTAT · Shirika la Takwimu la Kenya. Kenya eneo la ardhi jumla ~59.1M ha.", en: "FAO FAOSTAT · Kenya National Bureau of Statistics. Kenya total land area ~59.1M ha." }
},

lb: {
  name: "Lebanon",
  flag: "🇱🇧",
  alpha2: "lb",
  numeric: "422",
  languages: ["ar", "en"],
  areaHa: 1045000,
  areaDesc: "Lebanon total land area ~1.05M ha",
  electricityTWh: 18,
  dataYear: "2023–2024",
  context: { ar: "STUB — انقل من الملف الأصلي lb-land-use-game.html", en: "STUB — migrate from original lb-land-use-game.html" },
  disclaimer: { ar: `<strong>ملاحظة:</strong> أرقام الطاقة الشمسية+البطارية هي تجربة فكرية.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, ar: { title: "STUB", body: "انقل من الملف الأصلي." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { ar: "الفاو فاوستات · المديرية المركزية للإحصاء. لبنان المساحة الإجمالية ~1.05 مليون هكتار.", en: "FAO FAOSTAT · Central Administration of Statistics Lebanon. Lebanon total land area ~1.05M ha." }
},

ma: {
  name: "Morocco",
  flag: "🇲🇦",
  alpha2: "ma",
  numeric: "504",
  languages: ["ar", "fr", "en"],
  areaHa: 44630000,
  areaDesc: "Morocco total land area ~44.6M ha",
  electricityTWh: 40,
  dataYear: "2023–2024",
  context: { ar: "STUB — انقل من الملف الأصلي ma-land-use-game.html", fr: "STUB — migrer du fichier original ma-land-use-game.html", en: "STUB — migrate from original ma-land-use-game.html" },
  disclaimer: { ar: `<strong>ملاحظة:</strong> أرقام الطاقة الشمسية+البطارية هي تجربة فكرية.`, fr: `<strong>Note :</strong> Les chiffres solaire+batterie sont une expérience de pensée.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, ar: { title: "STUB", body: "انقل من الملف الأصلي." }, fr: { title: "STUB", body: "Migrer du fichier original." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { ar: "الفاو فاوستات · المندوبية السامية للتخطيط. المغرب المساحة الإجمالية ~44.6 مليون هكتار.", fr: "FAO FAOSTAT · Haut Commissariat au Plan. Maroc superficie totale ~44,6 M ha.", en: "FAO FAOSTAT · Haut Commissariat au Plan. Morocco total land area ~44.6M ha." }
},

mg: {
  name: "Madagascar",
  flag: "🇲🇬",
  alpha2: "mg",
  numeric: "450",
  languages: ["mg", "fr", "en"],
  areaHa: 58729500,
  areaDesc: "Madagascar total land area ~58.7M ha",
  electricityTWh: 4,
  dataYear: "2023–2024",
  context: { mg: "STUB — afindra avy amin'ny rakitra taloha mg-land-use-game.html", fr: "STUB — migrer du fichier original mg-land-use-game.html", en: "STUB — migrate from original mg-land-use-game.html" },
  disclaimer: { mg: `<strong>Fanamarihana:</strong> Ny isa solar+bateria dia fanandramana eritreritra.`, fr: `<strong>Note :</strong> Les chiffres solaire+batterie sont une expérience de pensée.`, en: `<strong>Note:</strong> The solar+battery figures are a thought experiment.` },
  categories: [],
  worldCard: { sol100Ha: 0, mg: { title: "STUB", body: "Afindra avy amin'ny rakitra taloha." }, fr: { title: "STUB", body: "Migrer du fichier original." }, en: { title: "STUB", body: "Migrate from original file." } },
  sources: { mg: "FAO FAOSTAT · INSTAT. Madagasikara velaran-tany ~58.7M ha.", fr: "FAO FAOSTAT · INSTAT. Madagascar superficie totale ~58,7 M ha.", en: "FAO FAOSTAT · INSTAT. Madagascar total land area ~58.7M ha." }
}

}; // end COUNTRIES

/* ================================================================
   Ordered list for dropdown / map / stats
   ================================================================ */
const COUNTRY_LIST = [
  {code:"au", name:"Australia", flag:"🇦🇺"},
  {code:"br", name:"Brazil", flag:"🇧🇷"},
  {code:"ca", name:"Canada", flag:"🇨🇦"},
  {code:"cd", name:"DR Congo", flag:"🇨🇩"},
  {code:"cn", name:"China", flag:"🇨🇳"},
  {code:"de", name:"Germany", flag:"🇩🇪"},
  {code:"dk", name:"Denmark", flag:"🇩🇰"},
  {code:"eg", name:"Egypt", flag:"🇪🇬"},
  {code:"es", name:"Spain", flag:"🇪🇸"},
  {code:"fr", name:"France", flag:"🇫🇷"},
  {code:"gl", name:"Greenland", flag:"🇬🇱"},
  {code:"hu", name:"Hungary", flag:"🇭🇺"},
  {code:"in", name:"India", flag:"🇮🇳"},
  {code:"is", name:"Iceland", flag:"🇮🇸"},
  {code:"jp", name:"Japan", flag:"🇯🇵"},
  {code:"ke", name:"Kenya", flag:"🇰🇪"},
  {code:"lb", name:"Lebanon", flag:"🇱🇧"},
  {code:"ma", name:"Morocco", flag:"🇲🇦"},
  {code:"mg", name:"Madagascar", flag:"🇲🇬"},
  {code:"mx", name:"Mexico", flag:"🇲🇽"},
  {code:"ng", name:"Nigeria", flag:"🇳🇬"},
  {code:"om", name:"Oman", flag:"🇴🇲"},
  {code:"pk", name:"Pakistan", flag:"🇵🇰"},
  {code:"qa", name:"Qatar", flag:"🇶🇦"},
  {code:"ru", name:"Russia", flag:"🇷🇺"},
  {code:"th", name:"Thailand", flag:"🇹🇭"},
  {code:"tv", name:"Tuvalu", flag:"🇹🇻"},
  {code:"uk", name:"United Kingdom", flag:"🇬🇧"},
  {code:"us", name:"United States", flag:"🇺🇸"},
  {code:"ve", name:"Venezuela", flag:"🇻🇪"},
  {code:"zm", name:"Zambia", flag:"🇿🇲"}
];
