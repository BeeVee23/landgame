window.LANDGAME=window.LANDGAME||{};
LANDGAME.de = {
 "title": "🇩🇪 How is Germany's land actually used? - Guessing Game",
 "code": "de",
 "iso": "276",
 "alpha2": "de",
 "lon": 10.5,
 "lat": 51.2,
 "ha": 35800000,
 "sol100Ha": 425000,
 "demandTwh": 512,
 "accent": "#639922",
 "langs": [
  "de",
  "en"
 ],
 "dataInfo": "Data: <strong>2024</strong> · Destatis · Fraunhofer ISE · BSW Solar · Bundesnetzagentur",
 "sources": "Sources: <a href=\"https://www.destatis.de/EN/Themes/Economic-Sectors-Enterprises/Agriculture-Forestry-Fisheries/Land-Use/settlement-transportation-purposes.html\" target=\"_blank\">Destatis Land Use Statistics 2024</a> · <a href=\"https://www.ise.fraunhofer.de/en/press-media/press-releases/2026/german-public-electricity-generation-in-2025-wind-and-solar-power-take-the-lead.html\" target=\"_blank\">Fraunhofer ISE Electricity Generation 2025</a> · <a href=\"https://www.enerdata.net/publications/daily-energy-news/germany-reached-100-gw-solar-capacity-end-2024.html\" target=\"_blank\">Enerdata: Germany reaches 100 GW solar 2024</a> · <a href=\"https://www.solarwirtschaft.de/\" target=\"_blank\">BSW Solar</a> · <a href=\"https://www.bundesnetzagentur.de/\" target=\"_blank\">Bundesnetzagentur</a> · Germany total land area ~35.8M ha.",
 "cats": {
  "de": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Landwirtschaftsfläche",
    "desc": "Ackerland, Dauerkulturen und Dauergrünland - Deutschland ist Europas flächenmäßig größter Agrarerzeuger mit über 276.000 Betrieben und durchschnittlich 61 ha je Betrieb",
    "answer": 50.02,
    "color": "#639922",
    "max": 70,
    "step": 0.5,
    "answerHa": 17907160
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Wald",
    "desc": "Wirtschaftswälder und Naturschutzgebiete - Schwarzwald, Bayerischer Wald und Harz sind die bekanntesten; rund 35 % befinden sich in einem naturnahen Zustand",
    "answer": 29.79,
    "color": "#3B6D11",
    "max": 45,
    "step": 0.5,
    "answerHa": 10664820
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Siedlung und Verkehr",
    "desc": "Bebaute Flächen, Straßen, Schiene, Industrie und Flughäfen - wächst um ca. 56 Hektar pro Tag durch Zersiedelung; Deutschland hat eines der dichtesten Straßennetze Europas",
    "answer": 14.55,
    "color": "#73726c",
    "max": 25,
    "step": 0.5,
    "answerHa": 5208900
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Gewässer",
    "desc": "Flüsse, Seen, Kanäle und Küstengewässer - darunter Rhein, Elbe, Donau und Bodensee",
    "answer": 2.39,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 855620
   },
   {
    "id": "other",
    "icon": "🌿",
    "name": "Sonstige Flächen",
    "desc": "Heide, Moor, Bergbauflächen und sonstige nicht klassifizierte Freiflächen",
    "answer": 2.89,
    "color": "#888780",
    "max": 10,
    "step": 0.1,
    "answerHa": 1034620
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golfplätze",
    "desc": "Deutschland hat ca. 750 Golfplätze - beinahe genau die gleiche Fläche wie aktuelle Freiflächensolaranlagen, was den Vergleich hier besonders anschaulich macht",
    "answer": 0.16,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 57280
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+Batterie (aktuell)",
    "desc": "Netzgekoppelte Freiflächen-Photovoltaik mit Batteriespeicher (~30 GW Ende 2024 von insgesamt 100 GW - der Rest sind Dachanlagen)",
    "answer": 0.21,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 75180,
    "isSolar": true,
    "solarNote": "Hinweis: 30 GW Freifläche von 100 GW gesamt - der Großteil der deutschen Solarenergie ist auf Dächern"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+Batterie für 100 % Strom",
    "desc": "Fläche für netzgekoppelte Solar+Batterie zur vollständigen Versorgung des deutschen Stromnetzes 24/7 (~512 TWh/Jahr) - größer als in sonnigeren südeuropäischen Ländern wegen der deutschen Bewölkung und längeren Winternächte",
    "answer": 1.19,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 426020,
    "isSolar": true,
    "readOnly": true
   }
  ],
  "en": [
   {
    "id": "agri",
    "icon": "🌾",
    "name": "Agricultural land",
    "desc": "Arable land, permanent crops and permanent pasture - Germany is Europe's largest agricultural producer by area, with over 276,000 farms averaging 61 ha each",
    "answer": 50.02,
    "color": "#639922",
    "max": 70,
    "step": 0.5,
    "answerHa": 17907160
   },
   {
    "id": "forest",
    "icon": "🌲",
    "name": "Forest",
    "desc": "Managed production forests and nature reserves - the Black Forest, Bavarian Forest and Harz are Germany's most iconic; about 35% is in a near-natural state",
    "answer": 29.79,
    "color": "#3B6D11",
    "max": 45,
    "step": 0.5,
    "answerHa": 10664820
   },
   {
    "id": "settle",
    "icon": "🏗️",
    "name": "Settlement & transport",
    "desc": "Built-up areas, roads, rail, industry and airports - growing at about 56 hectares per day due to urban sprawl; Germany has one of Europe's densest road networks",
    "answer": 14.55,
    "color": "#73726c",
    "max": 25,
    "step": 0.5,
    "answerHa": 5208900
   },
   {
    "id": "water",
    "icon": "💧",
    "name": "Water bodies",
    "desc": "Rivers, lakes, canals and coastal waters - including the Rhine, Elbe, Danube, and Lake Constance",
    "answer": 2.39,
    "color": "#378ADD",
    "max": 8,
    "step": 0.1,
    "answerHa": 855620
   },
   {
    "id": "other",
    "icon": "🌿",
    "name": "Other land",
    "desc": "Heathland, moorland, mining areas and other open land not classified above",
    "answer": 2.89,
    "color": "#888780",
    "max": 10,
    "step": 0.1,
    "answerHa": 1034620
   },
   {
    "id": "golf",
    "icon": "⛳",
    "name": "Golf courses",
    "desc": "Germany has ~750 golf courses - almost exactly the same footprint as current utility-scale solar, which makes the comparison particularly striking here",
    "answer": 0.16,
    "color": "#5DCAA5",
    "max": 1,
    "step": 0.01,
    "answerHa": 57280
   },
   {
    "id": "solar",
    "icon": "☀️🔋",
    "name": "Solar+battery (current)",
    "desc": "Utility-scale ground-mounted solar PV with battery storage, grid-connected (~30 GW end 2024 out of 100 GW total - the rest is rooftop)",
    "answer": 0.21,
    "color": "#EF9F27",
    "max": 2,
    "step": 0.01,
    "answerHa": 75180,
    "isSolar": true,
    "solarNote": "Hint: 30 GW utility-scale out of 100 GW total - most of Germany's solar is rooftop"
   },
   {
    "id": "sol100",
    "icon": "⚡🔋",
    "name": "Solar+battery for 100% electricity",
    "desc": "Land needed for utility-scale solar+battery to power Germany's entire national grid 24/7 (~512 TWh/yr) - more than sunnier southern European countries due to Germany's cloud cover and longer winter nights",
    "answer": 1.19,
    "color": "#BA7517",
    "max": 4,
    "step": 0.05,
    "answerHa": 426020,
    "isSolar": true,
    "readOnly": true
   }
  ]
 },
 "strings": {
  "de": {
   "h1": "<img src=\"https://flagcdn.com/32x24/de.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> Wie wird Deutschlands Fläche genutzt?",
   "subtitle": "Inspiriert von <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clarks YouTube-Kurzfilm</a> (auf Englisch). Schätze den prozentualen Anteil der deutschen Landfläche für jede Kategorie - die Regler sind auf 100 % begrenzt. Deutschland ist Europas größte Volkswirtschaft und das Geburtsland des modernen Automobils - jetzt im größten Wandel seit einem Jahrhundert.",
   "disclaimer": "Die Solar+Batterie-Zahlen sind ein mit KI-Unterstützung erstelltes Gedankenexperiment, keine politische Empfehlung. Alle Zahlen beziehen sich auf netzgekoppelte Großanlagen. Deutschland erreichte Ende 2024 100 GW installierte Solarkapazität - davon ist jedoch der Großteil Dachanlagen, Freiflächenanlagen kommen auf ca. 30 GW. Außerdem: Volkswagen, BMW und Mercedes beschäftigen direkt 780.000 Menschen und stehen für 6 % des BIP. E-Auto-Verkäufe brachen 2024 um 27 % ein, und VW allein streicht bis 2030 35.000 Stellen, während chinesische Konkurrenten aufholen. Der Wandel von Verbrenner zu Elektro formt nicht nur die Landschaft, sondern auch die Arbeitswelt. Landnutzungsdaten vom Statistischen Bundesamt (Destatis) 2024.",
   "noteLabel": "Hinweis",
   "contextLabel": "Länderkontext",
   "countryNote": "Deutschland erreichte Ende 2024 eine gesamte Solarkapazität von 100 GW, doch der Großteil davon sind Dachanlagen - die großflächige, freistehende Solarenergie liegt bei etwa 30 GW. Das bewölktere Klima Deutschlands bedeutet, dass pro TWh mehr Fläche benötigt wird als in Spanien oder Australien; Windkraft (insbesondere Offshore in der Nordsee) dürfte den größeren Beitrag leisten als Solarenergie allein. Zu beachten: Deutschlands Automobilindustrie - Volkswagen, BMW, Mercedes - beschäftigt direkt 780.000 Menschen und macht 6% des BIP aus. Die E-Auto-Verkäufe fielen 2024 um 27%, und allein VW streicht bis 2030 35.000 Stellen, während chinesische Konkurrenten aufholen. Der Übergang vom Verbrennungsmotor zum Elektroauto verändert nicht nur die Flächennutzung, sondern auch die Arbeitswelt. Landnutzungsdaten stammen vom Statistischen Bundesamt (Destatis), 2024.",
   "submit": "Antworten absenden",
   "play_again": "Nochmal spielen",
   "score": "Punkte",
   "land_used": "Fläche genutzt",
   "remaining": "Verbleibend",
   "map_guess": "Deine Schätzungen - proportionale Flächenkarte (aktualisiert beim Verschieben)",
   "map_answer": "Tatsächliche Flächennutzung in Deutschland - proportionale Karte",
   "allocated": "/ 100 % zugeteilt",
   "reveal": "Wird nach dem Absenden angezeigt.",
   "out_of": "Genauigkeitswert",
   "sol100_reveal": "Deutschlands wolkenreiches Klima erfordert ca. 830 ha/TWh - mehr als in Spanien oder Australien (je ca. 615 ha/TWh). Die Speicherüberdimensionierung verdoppelt den Flächenbedarf gegenüber reinen Solarmodulen.",
   "grades": [
    [
     86,
     "🏆 Deutschland-Experte - du kennst dieses Industrieherz in beeindruckenden Details!"
    ],
    [
     64,
     "🌲 Sehr gut - du hast ein scharfes Gespür für Deutschlands überraschend grüne Landschaft."
    ],
    [
     43,
     "🚗 Nicht schlecht! Deutschland ist grüner als seine Autoindustrie vermuten lässt - 80 % sind Wald oder Ackerland."
    ],
    [
     21,
     "🏭 Deutschlands Industrieruf verdeckt, wie landwirtschaftlich das Land wirklich ist."
    ],
    [
     0,
     "🤔 Überraschend? Deutschland ist zu 50 % Ackerland und zu 30 % Wald - viel grüner als seine Städte vermuten lassen."
    ]
   ],
   "btn_label": "English",
   "country_label": "Deutschland",
   "circle_label": "Benötigte Fläche",
   "zoomed": "currentLang === 'local' ? 'Vergrößerte Ansicht' : 'Zoomed view'"
  },
  "en": {
   "h1": "<img src=\"https://flagcdn.com/32x24/de.png\" alt=\"\" style=\"height:0.75em;vertical-align:0.1em;margin-right:0.2em\"> How is Germany's land actually used?",
   "subtitle": "Inspired by <a href=\"https://www.youtube.com/shorts/CgeTvQPwNCg\" target=\"_blank\" style=\"color:var(--text-secondary)\">Dr. Simon Clark's YouTube short</a>. Guess the percentage of German land for each category - sliders are capped at 100% total. Germany is Europe's largest economy and the birthplace of the modern car industry - now facing its most turbulent transition in a century.",
   "disclaimer": "The solar+battery figures are a thought experiment generated with the aid of an AI, not a policy recommendation. All solar+battery figures refer to utility-scale, grid-connected systems. Germany reached 100 GW of total solar capacity at the end of 2024, but most is rooftop - utility-scale ground-mounted is roughly 30 GW. Germany's cloudier climate means more land is needed per TWh than in Spain or Australia; wind power (especially offshore in the North Sea) is likely to do more heavy lifting than solar alone. Note also: Germany's car industry - Volkswagen, BMW, Mercedes - directly employs 780,000 people and represents 6% of GDP. EV sales fell 27% in 2024 and VW alone is cutting 35,000 jobs by 2030 as Chinese rivals overtake it. The transition from ICE to EV is reshaping not just the land but the workforce. Land use figures sourced from Destatis (Federal Statistical Office) 2024.",
   "noteLabel": "Note",
   "contextLabel": "Country context",
   "countryNote": "Germany reached 100 GW of total solar capacity at the end of 2024, but most is rooftop - utility-scale ground-mounted is roughly 30 GW. Germany's cloudier climate means more land is needed per TWh than in Spain or Australia; wind power (especially offshore in the North Sea) is likely to do more heavy lifting than solar alone. Note also: Germany's car industry - Volkswagen, BMW, Mercedes - directly employs 780,000 people and represents 6% of GDP. EV sales fell 27% in 2024 and VW alone is cutting 35,000 jobs by 2030 as Chinese rivals overtake it. The transition from ICE to EV is reshaping not just the land but the workforce. Land use figures sourced from Destatis (Federal Statistical Office) 2024.",
   "submit": "Submit all guesses",
   "play_again": "Play again",
   "score": "Score",
   "land_used": "Land used",
   "remaining": "Remaining",
   "map_guess": "Your guesses - proportional area map (updates as you slide)",
   "map_answer": "Actual German land use - proportional area map",
   "allocated": "/ 100% allocated",
   "reveal": "Revealed after you submit.",
   "out_of": "accuracy score",
   "sol100_reveal": "Germany's cloudier climate means roughly 830 ha/TWh - more than Spain (615 ha/TWh) or Australia (615 ha/TWh). Storage overcapacity roughly doubles the land needed vs panels alone.",
   "grades": [
    [
     86,
     "🏆 Germany expert - you know this industrial heartland in remarkable detail!"
    ],
    [
     64,
     "🌲 Very strong - sharp sense of Germany's surprisingly green landscape."
    ],
    [
     43,
     "🚗 Not bad! Germany is greener than its car industry suggests - 80% is forest or farmland."
    ],
    [
     21,
     "🏭 Germany's industrial reputation hides just how agricultural it really is."
    ],
    [
     0,
     "🤔 Surprising? Germany is 50% farmland and 30% forest - far greener than its cities suggest."
    ]
   ],
   "btn_label": "Deutsch",
   "country_label": "Germany",
   "circle_label": "Land area needed",
   "zoomed": "currentLang === 'local' ? 'Vergrößerte Ansicht' : 'Zoomed view'"
  }
 },
 "world": {
  "de": {
   "head": "🌍 Was wäre, wenn Deutschland allein die ganze Welt mit Strom versorgte?",
   "fit": "Den gesamten <strong>weltweiten Strombedarf</strong> (~31.000 TWh/Jahr) mit deutschen Solarbedingungen zu decken, würde etwa <strong>{haM} Hektar</strong> benötigen - <strong>{pct}%</strong> der deutschen Landfläche, unten als flächengleicher Kreis dargestellt.",
   "overflow": "Den gesamten <strong>weltweiten Strombedarf</strong> (~31.000 TWh/Jahr) mit deutschen Solarbedingungen zu decken, würde etwa <strong>{haM} Hektar</strong> benötigen - <strong>{mult}× die Fläche des gesamten Landes</strong>. Der Kreis unten zeigt dieses Gebiet, zentriert auf Deutschland - er reicht über Deutschlands Grenzen hinaus und verdeutlicht, dass die Solargeographie und das Klima genauso wichtig sind wie die Flächenverfügbarkeit.",
   "foot": "Der gestrichelte Kreis ist illustrativ - auf die korrekte Landfläche bemessen, aber kein tatsächlicher Vorschlag. Er überlappt bestehende Grenzen nur zur Maßstabsdarstellung."
  },
  "en": {
   "head": "🌍 What if Germany alone powered the whole world?",
   "fit": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Germany's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{pct}%</strong> of Germany's land area, shown below as a circle of equivalent area.",
   "overflow": "Powering all of <strong>global electricity demand</strong> (~31,000 TWh/yr) using Germany's own solar conditions would need about <strong>{haM} hectares</strong> - <strong>{mult}× the entire country</strong>. The circle below shows that area centred on Germany - it spills beyond Germany's own borders, illustrating that solar geography and climate matter as much as land availability.",
   "foot": "The dashed circle is illustrative - sized to the correct land area, but not an actual proposed siting. It overlaps existing borders for scale only."
  },
  "haStyle": "word",
  "millionWord": {
   "de": "Millionen",
   "en": "million"
  }
 }
};
