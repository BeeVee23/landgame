window.LANDGAME=window.LANDGAME||{};
LANDGAME.cd = {
 "title": "🇨🇩 How is DR Congo's land actually used? - Guessing Game",
 "code": "cd",
 "iso": "180",
 "alpha2": "cd",
 "lon": 23.5,
 "lat": -2.5,
 "ha": 234486000,
 "sol100Ha": 5320,
 "demandTwh": 9.5,
 "accent": "#639922",
 "langs": [
  "fr",
  "en"
 ],
 "dataInfo": "Data: <strong>2023–2026</strong> · Africa Energy Portal · FAO · IEA · Enerdata",
 "sources": "Sources: <a href=\"https://africa-energy-portal.org/aep/country/congo-democratic-republic\" target=\"_blank\">Africa Energy Portal: DRC</a> · <a href=\"https://www.iea.org/articles/democratic-republic-of-the-congo-energy-outlook\" target=\"_blank\">IEA DRC Energy Outlook</a> · <a href=\"https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries\" target=\"_blank\">IEA Global EV Outlook 2026</a> · <a href=\"https://www.wilsoncenter.org/blog-post/drc-mining-industry-child-labor-and-formalization-small-scale-mining\" target=\"_blank\">Wilson Center: DRC Mining &amp; Child Labor</a> · <a href=\"https://www.fao.org/faostat/\" target=\"_blank\">FAO</a> · <a href=\"https://www.enerdata.net/\" target=\"_blank\">Enerdata</a> · DRC total land area ~234.5M ha (2,344,858 km²).",
 "cats": {
  "fr": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forêt",
    "desc": "La forêt tropicale du bassin du Congo, la deuxième plus grande forêt tropicale du monde après l'Amazonie - la RDC abrite à elle seule environ les deux tiers de cette forêt, un réservoir de biodiversité et de carbone d'importance mondiale",
    "answer": 67,
    "color": "#3B6D11",
    "max": 85,
    "step": 0.5,
    "answerHa": 157105620
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Terres agricoles",
    "desc": "Manioc, maïs, plantains et riz cultivés majoritairement par de petits exploitants de subsistance - malgré environ 80 millions d'hectares de terres théoriquement arables (l'un des plus grands potentiels agricoles au monde), seule une fraction est effectivement cultivée",
    "answer": 10,
    "color": "#639922",
    "max": 30,
    "step": 0.5,
    "answerHa": 23448600
   },
   {
    "id": "other",
    "icon": "🏞️",
    "name": "Autres terres (savane, plateaux)",
    "desc": "Les savanes et hauts plateaux du sud et du sud-est - notamment le Katanga, riche en cuivre et en cobalt - ainsi que les zones montagneuses de l'est, marquées par des décennies de conflit armé",
    "answer": 18.399,
    "color": "#c4b8a0",
    "max": 30,
    "step": 0.5,
    "answerHa": 43143079
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Cours d'eau et lacs",
    "desc": "Le fleuve Congo, deuxième fleuve le plus puissant du monde par son débit, ainsi que les lacs Tanganyika, Mai-Ndombe et Édouard - un réseau fluvial qui reste la principale voie de transport du pays faute de routes",
    "answer": 3.6,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 8441496
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Zones bâties et routes",
    "desc": "Kinshasa - l'une des plus grandes villes d'Afrique - Lubumbashi et Goma, ainsi qu'un réseau routier extrêmement limité au vu de la taille du pays, qui fait près de la moitié de l'Europe de l'Ouest",
    "answer": 1,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 2344860
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Terrains de golf",
    "desc": "Une poignée de terrains, essentiellement à Kinshasa et Lubumbashi - un sport marginal dans un pays où l'accès à l'électricité elle-même reste un luxe pour la grande majorité de la population",
    "answer": 0.0005,
    "color": "#5DCAA5",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 1172,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Centrales solaires (actuelles)",
    "desc": "Capacité solaire de réseau pratiquement inexistante - le pays mise presque entièrement sur l'hydroélectricité, avec des projets solaires majeurs comme Green Giant (1 000 MW) encore au stade de développement",
    "answer": 0.0005,
    "color": "#EF9F27",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 1172,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Indice : la RDC produit déjà entre 95 et 99% de son électricité à partir de sources renouvelables - mais presque exclusivement hydroélectriques, pas solaires. L'énergie solaire de réseau reste embryonnaire, malgré un potentiel considérable"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solaire+batterie pour 100% de l'électricité",
    "desc": "Surface nécessaire en centrales solaires à grande échelle avec stockage pour alimenter l'ensemble du réseau électrique congolais 24h/24 (environ 9,5 TWh/an, une estimation prudente compte tenu du très faible taux d'accès actuel)",
    "answer": 0.00227,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 5320,
    "dp": 5,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "La RDC bénéficie d'un ensoleillement correct mais pas exceptionnel (environ 560 ha/TWh), en partie freiné par la nébulosité de la forêt équatoriale. Ce chiffre reflète cependant une demande actuelle très faible : moins d'un Congolais sur cinq a accès à l'électricité, contre moins de 2% en zone rurale. Le potentiel hydroélectrique du seul site d'Inga (fleuve Congo) dépasse 40 gigawatts - largement de quoi électrifier tout le pays et exporter vers ses neuf voisins - mais moins de 3% de ce potentiel national est exploité à ce jour"
   }
  ],
  "en": [
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Congo Basin rainforest, the world's second-largest tropical forest after the Amazon - the DRC alone holds roughly two-thirds of it, a reservoir of biodiversity and carbon storage of genuinely global importance",
    "answer": 67,
    "color": "#3B6D11",
    "max": 85,
    "step": 0.5,
    "answerHa": 157105620
   },
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Cassava, maize, plantain and rice grown mostly by subsistence smallholders - despite roughly 80 million hectares of theoretically arable land (one of the largest agricultural potentials on Earth), only a small fraction is actually farmed",
    "answer": 10,
    "color": "#639922",
    "max": 30,
    "step": 0.5,
    "answerHa": 23448600
   },
   {
    "id": "other",
    "icon": "🏞️",
    "name": "Other land (savanna, plateau)",
    "desc": "Savanna and highland plateau across the south and southeast - including copper- and cobalt-rich Katanga - plus the mountainous eastern regions, marked by decades of armed conflict",
    "answer": 18.399,
    "color": "#c4b8a0",
    "max": 30,
    "step": 0.5,
    "answerHa": 43143079
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Rivers & lakes",
    "desc": "The Congo River, the world's second most powerful river by discharge, plus lakes Tanganyika, Mai-Ndombe and Edward - the river network remains the country's primary transport route given how limited its roads are",
    "answer": 3.6,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 8441496
   },
   {
    "id": "settle",
    "icon": "🏙️",
    "name": "Settlement & roads",
    "desc": "Kinshasa - one of Africa's largest cities - Lubumbashi and Goma, plus an extremely sparse road network given the country's size, which is roughly half that of Western Europe",
    "answer": 1,
    "color": "#73726c",
    "max": 5,
    "step": 0.1,
    "answerHa": 2344860
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "A handful of courses, mostly in Kinshasa and Lubumbashi - a marginal sport in a country where electricity access itself remains out of reach for most of the population",
    "answer": 0.0005,
    "color": "#5DCAA5",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 1172,
    "dp": 3
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar farms (current)",
    "desc": "Grid-scale solar capacity is essentially negligible - the country relies almost entirely on hydropower instead, with major solar projects like the Green Giant (1,000 MW) still in early development",
    "answer": 0.0005,
    "color": "#EF9F27",
    "max": 0.02,
    "step": 0.0005,
    "answerHa": 1172,
    "dp": 3,
    "isSolar": true,
    "solarNote": "Hint: the DRC already generates 95-99% of its electricity from renewable sources - but almost entirely hydropower, not solar. Grid-scale solar remains almost undeveloped, despite considerable potential"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power the DRC's entire national grid 24/7 (~9.5 TWh/yr, a conservative estimate given how little electricity is currently consumed)",
    "answer": 0.00227,
    "color": "#BA7517",
    "max": 0.5,
    "step": 0.005,
    "answerHa": 5320,
    "dp": 5,
    "isSolar": true,
    "readOnly": true,
    "solarNote": "The DRC has decent, if not exceptional, solar conditions (~560 ha/TWh), partly limited by rainforest cloud cover. This figure reflects today's very low demand: fewer than one in five Congolese has electricity access, and under 2% in rural areas. The Inga site alone on the Congo River has over 40 GW of hydropower potential - enough to electrify the whole country and export to all nine neighbours - yet less than 3% of the DRC's national hydropower potential has been developed"
   }
  ]
 },
 "strings": {
  "fr": {
   "h1": "<img src=\"https://flagcdn.com/32x24/cd.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Comment les terres de la RD Congo sont-elles vraiment utilisées ?",
   "subtitle": "Inspiré par le <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">court extrait YouTube du Dr Simon Clark</a> (en anglais). Devinez le pourcentage des terres congolaises pour chaque catégorie - la somme des curseurs ne peut dépasser 100%. La RDC détient l'essentiel des réserves mondiales de cobalt, indispensable aux batteries de véhicules électriques actuelles - et pourtant, moins d'un Congolais sur cinq a accès à l'électricité.",
   "disclaimer": "Les chiffres de solaire et de batteries constituent une expérience de pensée générée avec l'aide de l'IA, et non une recommandation politique. Tous les chiffres solaires concernent des installations de grande échelle raccordées au réseau ; la consommation électrique de la RDC est une estimation approximative, les données nationales fiables étant rares. Données d'occupation des sols issues de l'Africa Energy Portal, de la FAO et d'évaluations académiques de couverture terrestre ; données électriques de l'AIE, de l'Africa Energy Portal et d'Enerdata, 2023-2026.",
   "noteLabel": "Remarque",
   "contextLabel": "Contexte du pays",
   "countryNote": "La RDC détient plus de la moitié des réserves mondiales de cobalt et en assure environ les deux tiers de la production mondiale - un minerai indispensable aux batteries de véhicules électriques actuelles. Environ 15 à 30% de cette production provient de l'exploitation minière artisanale à petite échelle, où l'on estime que 40 000 enfants travaillent, certains dès l'âge de six ans, souvent pour moins de 2 dollars par jour. Mais la donne évolue rapidement côté demande : les batteries LFP, sans cobalt, représentent désormais plus de la moitié du volume mondial des batteries de véhicules électriques et plus de 90% du stockage sur réseau ; certains analystes du secteur prévoient que les chimies contenant du cobalt pourraient représenter moins de 10% du marché d'ici une décennie, même si la demande globale de véhicules électriques continue de croître. Les quotas d'exportation imposés par la RDC en 2025 ont tout de même fait grimper les prix du cobalt à court terme (le pays en fournit près des deux tiers au niveau mondial), mais la tendance de fond va vers une dépendance moindre à cette ressource, pas l'inverse. Il convient également de noter que les batteries de véhicules électriques sont loin d'être le premier ni le plus important usage du cobalt : les catalyseurs cobalt-molybdène constituent la méthode standard pour éliminer le soufre du diesel et d'autres carburants depuis les années 1950-60, bien avant que les batteries de véhicules électriques n'existent à grande échelle, et ce, avec beaucoup moins d'attention publique malgré le recours à la même chaîne d'approvisionnement congolaise. La comparaison n'est toutefois pas parfaitement nette. Le cobalt n'est pas un réactif de raffinage à proprement parler mais un catalyseur, ce qui signifie qu'il n'est pas chimiquement consommé - mais en pratique, les catalyseurs de raffinerie se désactivent et sont généralement jetés ou régénérés environ tous les un à deux ans, et une grande partie de ce catalyseur usé a historiquement fini en décharge plutôt que d'être récupérée. Une batterie de véhicule électrique, en revanche, conserve son cobalt en usage actif pendant 10 à 20 ans - même s'il convient d'être honnête sur le fait que les taux réels de recyclage des batteries restent aujourd'hui faibles en pratique (moins de 5% aux États-Unis, selon les estimations du Département de l'Énergie), bien que la technologie permettant de récupérer plus de 90% du cobalt d'une batterie existe déjà et se développe à mesure que le parc de véhicules électriques vieillit. Par ailleurs, la situation électrique du pays lui-même est une tout autre histoire, et frappante : avec un accès au réseau inférieur à 20% (et à moins de 2% en zone rurale), la plupart des foyers congolais nouvellement électrifiés le sont via des systèmes solaires domestiques payés au jour le jour, plutôt que par un raccordement au réseau. Ces systèmes coûtent relativement peu comparés à une infrastructure de réseau, mais les paiements quotidiens représentent un véritable arbitrage face à la nourriture et aux autres besoins essentiels pour des foyers extrêmement pauvres - et lorsque les paiements s'interrompent, l'électricité est coupée immédiatement. C'est l'un des rares cas où le solaire constitue déjà une réponse pratique et fonctionnelle à la pauvreté énergétique, même dans un pays dont l'avenir électrique se dessine surtout autour de l'hydroélectricité, et non du solaire.",
   "submit": "Envoyer toutes les réponses",
   "play_again": "Rejouer",
   "score": "Score",
   "land_used": "Surface utilisée",
   "remaining": "Restant",
   "map_guess": "Vos réponses - carte de surface proportionnelle (mise à jour en glissant)",
   "map_answer": "Occupation réelle des sols en RDC - carte de surface proportionnelle",
   "allocated": "/ 100% attribué",
   "reveal": "Révélé après envoi.",
   "out_of": "score de précision",
   "sol100_reveal": "La RDC bénéficie d'un ensoleillement correct mais pas exceptionnel (environ 560 ha/TWh), en partie freiné par la nébulosité de la forêt équatoriale. Ce chiffre reflète cependant une demande actuelle très faible : moins d'un Congolais sur cinq a accès à l'électricité, contre moins de 2% en zone rurale. Le potentiel hydroélectrique du seul site d'Inga (fleuve Congo) dépasse 40 gigawatts - largement de quoi électrifier tout le pays et exporter vers ses neuf voisins - mais moins de 3% de ce potentiel national est exploité à ce jour",
   "grades": [
    [
     86,
     "🇨🇩 Expert·e ! Vous connaissez la répartition des terres de la RDC avec une précision impressionnante."
    ],
    [
     64,
     "🌳 Très fort - excellente idée de la place immense qu'occupe la forêt tropicale ici."
    ],
    [
     43,
     "💡 Pas mal ! La plupart des gens sous-estiment à quel point l'accès à l'électricité est limité en RDC."
    ],
    [
     21,
     "💧 Le saviez-vous ? Le fleuve Congo, à lui seul, possède un potentiel hydroélectrique bien supérieur aux besoins nationaux."
    ],
    [
     0,
     "🤔 Surprenant ? La RDC détient l'essentiel des réserves mondiales de cobalt, et pourtant moins d'un Congolais sur cinq a accès à l'électricité."
    ]
   ],
   "btn_label": "English",
   "country_label": "RD Congo",
   "circle_label": "Surface nécessaire",
   "zoomed": "Vue rapprochée"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/cd.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is DR Congo's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of Congolese land for each category - sliders are capped at 100% total. The DRC holds most of the world's cobalt reserves, essential to today's EV batteries - yet fewer than one in five Congolese has access to electricity.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar figures refer to utility-scale, grid-connected systems; the DRC's electricity demand figure is a rough estimate, since reliable national consumption data is scarce. Land use figures from Africa Energy Portal, FAO and academic land-cover assessments; electricity figures from IEA, Africa Energy Portal and Enerdata, 2023-2026.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "The DRC holds over half the world's cobalt reserves and produces roughly two-thirds of global supply - essential for today's EV batteries. Around 15-30% of that comes from artisanal, small-scale mining, where an estimated 40,000 children work, some as young as six, often for under $2 a day. But the demand picture is shifting fast: cobalt-free LFP batteries now account for over half of global EV battery volume and more than 90% of grid storage, and industry analysts project cobalt-containing chemistries could fall below 10% of the battery mix within a decade - even as overall EV demand keeps growing. The DRC's 2025 export quotas still spiked cobalt prices short-term (it supplies nearly two-thirds of the world's cobalt), but the longer arc points toward less reliance on this resource, not more. It's also worth noting that EV batteries are far from cobalt's first or largest use: cobalt-molybdenum catalysts have been the standard method for stripping sulphur out of diesel and other fuels since the 1950s-60s, decades before EV batteries existed at any scale, and have drawn far less public scrutiny despite drawing on the same DRC supply chain. The comparison isn't perfectly clean, though. Cobalt isn't a fuel-refining reagent so much as a catalyst, meaning it isn't chemically consumed - but in practice, refinery catalysts deactivate and are typically discarded or regenerated roughly every one to two years, and historically much of that spent catalyst has gone to landfill rather than being recovered. An EV battery, by contrast, keeps its cobalt in active use for 10-20 years - though it's worth being honest that actual battery recycling rates today remain low in practice (under 5% in the US, per Department of Energy estimates), even though the technology to recover over 90% of a battery's cobalt already exists and is scaling as the EV fleet ages. Meanwhile the country's own electricity story is separate and stark: with grid access under 20% (and under 2% in rural areas), most newly electrified Congolese households get power through pay-as-you-go solar home systems rather than any grid connection. These systems cost relatively little compared to grid infrastructure, but the daily payments are still a real trade-off against food and other basics for extremely poor households - and when payments lapse, the power switches off immediately. It's a rare case where solar is already the practical, working answer to energy poverty, even in a country whose grid future is actually shaping up to be hydropower, not solar.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual Congolese land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "The DRC has decent, if not exceptional, solar conditions (~560 ha/TWh), partly limited by rainforest cloud cover. This figure reflects today's very low demand: fewer than one in five Congolese has electricity access, and under 2% in rural areas. The Inga site alone on the Congo River has over 40 GW of hydropower potential - enough to electrify the whole country and export to all nine neighbours - yet less than 3% of the DRC's national hydropower potential has been developed",
   "grades": [
    [
     86,
     "🇨🇩 Expert! You know the DRC's land balance with impressive precision."
    ],
    [
     64,
     "🌳 Very strong - sharp grasp of just how much rainforest this country holds."
    ],
    [
     43,
     "💡 Not bad! Most people underestimate how little of the DRC has electricity access."
    ],
    [
     21,
     "💧 Did you know? The Congo River alone has more hydropower potential than the DRC could ever use domestically."
    ],
    [
     0,
     "🤔 Surprising? The DRC holds most of the world's cobalt reserves, yet fewer than one in five Congolese has electricity."
    ]
   ],
   "btn_label": "Français",
   "country_label": "DR Congo",
   "circle_label": "Land area needed",
   "zoomed": "Zoomed view"
  }
 },
 "world": {
  "fr": {
   "head": "🌍 Et si la RD Congo alimentait le monde entier en électricité ?",
   "fit": "Avec les conditions solaires de la RDC (environ 560 ha/TWh), couvrir l'ensemble de la <strong>demande mondiale d'électricité</strong> (environ 31 000 TWh/an) nécessiterait environ <strong>{haM} millions d'hectares</strong> - soit seulement <strong>{pct}% du territoire de la RDC</strong>, représenté ci-dessous par un cercle de surface équivalente. Ce cercle tient aisément à l'intérieur de l'immense territoire du pays.",
   "stat2": "La taille considérable de la RDC - presque celle de l'Europe de l'Ouest - permet à cette expérience de pensée de rester tout à fait réaliste physiquement, malgré un ensoleillement correct sans être exceptionnel. L'ironie la plus profonde est qu'un pays disposant d'autant de terres disponibles et de potentiel renouvelable, hydroélectrique comme solaire, affiche pourtant l'un des taux d'accès à l'électricité les plus bas au monde : ce qui a toujours manqué, ce ne sont pas les ressources, mais l'investissement, les infrastructures et la stabilité.",
   "foot": "Le cercle en pointillé est purement illustratif - sa taille correspond à la surface exacte requise, mais il ne s'agit pas d'un emplacement réellement proposé."
  },
  "en": {
   "head": "🌍 What if DR Congo alone powered the whole world?",
   "fit": "At the DRC's solar conditions (~560 ha/TWh), powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) would need about <strong>{haM} million hectares</strong> - just <strong>{pct}% of the DRC's land area</strong>, shown below as a circle of equivalent area. That circle fits comfortably within the country's own vast territory.",
   "stat2": "The DRC's sheer size - nearly the size of Western Europe - means this thought experiment stays well within physical bounds despite only decent (not exceptional) sunshine. The deeper irony is that a country with this much spare land and renewable potential, both hydro and solar, still has one of the lowest electricity access rates on Earth: the missing ingredient has never been resources, but investment, infrastructure and stability.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, not an actual proposed siting."
  }
 }
};
