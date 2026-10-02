import { Innovation } from '../types/innovation';
import { batch1Innovations } from './innovations-batch1';
import { batch2Innovations } from './innovations-batch2';
import { batch3Innovations } from './innovations-batch3';
import { batch4Innovations } from './innovations-batch4';
import { batch5Innovations } from './innovations-batch5';
import { batch6Innovations } from './innovations-batch6';

const baseInnovations: Innovation[] = [
  // ==========================================
  // 1. FOUNDATIONAL & PREHISTORY
  // ==========================================
  {
    id: 'stone-tools',
    name: 'Oldowan & Acheulean Stone Tools',
    aliases: ['Lithic technology', 'Flintknapping', 'Handaxe'],
    date: '~2.6 Million BCE',
    date_numeric: -2600000,
    date_precision: 'approximate',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'Tool System',
    region: 'East Africa (Rift Valley)',
    civilization: 'Early Hominins (Homo habilis / Homo erectus)',
    lat: 0.1769,
    lng: 37.9083,
    overview: 'The earliest documented deliberate manipulation of inorganic materials to manufacture sharp cutting edges through controlled percussive flaking.',
    why_it_matters: 'Marked the dawn of technology and externalized biological function into manufactured physical tools, transforming hominin nutrition and brain development.',
    problem_solved: 'Human teeth and nails could not pierce thick animal hides, crack marrow-rich bones, or carve wood efficiently.',
    mechanism: 'Hard stone hammerstones strike cobbles (flint, basalt, or chert) at acute angles (less than 90°) to detach sharp conchoidal flakes.',
    historical_development: [
      { stage: 'Oldowan Industry', period: '~2.6 – 1.7 Mya', description: 'Simple river cobbles struck to produce sharp flakes and chopper cores (Gona, Ethiopia).' },
      { stage: 'Acheulean Bifacial Design', period: '~1.76 Mya – 100 Kya', description: 'Homo erectus standardizes symmetrical teardrop handaxes with bilateral flaking.' },
      { stage: 'Levallois Prepared-Core', period: '~300 – 40 Kya', description: 'Neanderthals and archaic Homo sapiens pre-shape stone cores to produce predetermined, highly refined blades.' }
    ],
    contributors: [
      { name: 'Early Homo populations', role: 'inventor', periodOrLifespan: 'Plio-Pleistocene', affiliationOrRegion: 'East Africa', contributionNote: 'Discovered conchoidal fracture mechanics.' }
    ],
    predecessors: [],
    successors: ['controlled-fire', 'clothing-needles', 'metallurgy-copper'],
    modern_legacy: 'Foundation of all subtractive manufacturing, machining, and material processing.',
    sources: [
      { source: 'Nature: 2.6-million-year-old stone tools from Gona, Ethiopia', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1038/17572', confidenceNote: 'Radiometrically dated via argon-argon volcanic tephra.' },
      { source: 'Smithsonian Human Origins Program', sourceType: 'institutional', sourceUrl: 'https://humanorigins.si.edu/evidence/behavior/stone-tools', confidenceNote: 'Comprehensive archaeological physical record.' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bifaz_de_San_Isidro_%28M.A.N._1980-84-257%29_01.jpg/800px-Bifaz_de_San_Isidro_%28M.A.N._1980-84-257%29_01.jpg',
      caption: 'Acheulean flint biface handaxe showing deliberate flaking patterns.',
      attribution: 'Luis García / Museo Arqueológico Nacional (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical artifacts radiometrically and stratigraphically verified at multiple East African sites.'
  },
  {
    id: 'controlled-fire',
    name: 'Controlled Fire',
    aliases: ['Pyrotechnology', 'Domestication of fire'],
    date: '~1 Million – 400,000 BCE',
    date_numeric: -1000000,
    date_precision: 'approximate',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'Process / Pyrotechnology',
    region: 'East & Southern Africa, Levant',
    civilization: 'Homo erectus / Archaic Hominins',
    lat: -27.5375,
    lng: 23.3667,
    overview: 'The deliberate sparking, maintenance, fuel management, and containment of combustion for heat, light, protection, and cooking.',
    why_it_matters: 'Cooking predigested complex proteins and starches, dramatically reducing caloric digestion costs and fueling rapid hominin encephalization.',
    problem_solved: 'Exposure to lethal nocturnal predators, hypothermia in cold latitudes, and inability to safely digest toxic raw tubers or pathogen-laden meat.',
    mechanism: 'Sustained thermal chain reactions utilizing percussion of pyrite against flint or friction of dry wood against a wooden hearth, sustained by lignocellulosic biomass.',
    historical_development: [
      { stage: 'Opportunistic Harvesting', period: '~1.5 Mya', description: 'Capturing naturally occurring brushfire embers.' },
      { stage: 'Deliberate Hearth Maintenance', period: '~1.0 Mya – 400 Kya', description: 'Documented burned bone and wood ash layers in deep caves like Wonderwerk (South Africa) and Qesem (Israel).' },
      { stage: 'Routine Fire Production', period: '~100 Kya', description: 'Systematic friction drills and iron pyrite strike-a-lights.' }
    ],
    contributors: [
      { name: 'Homo erectus groups', role: 'collective_culture', periodOrLifespan: 'Middle Pleistocene', affiliationOrRegion: 'Africa / Eurasia', contributionNote: 'Maintained hearths at Wonderwerk Cave.' }
    ],
    predecessors: ['stone-tools'],
    successors: ['pottery', 'metallurgy-copper', 'agriculture-domestication'],
    modern_legacy: 'Every thermal power cycle, internal combustion engine, metallurgy process, and chemical synthesis reactor originates from pyrotechnology.',
    sources: [
      { source: 'Proceedings of the National Academy of Sciences (Wonderwerk Cave)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1073/pnas.1117620109', confidenceNote: 'Spectroscopic evidence of in situ burning at 1.0 Mya.' },
      { source: 'Wrangham, R. Catching Fire: How Cooking Made Us Human', sourceType: 'academic', confidenceNote: 'Metabolic energetics of human evolution.' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Fire_at_night.jpg/800px-Fire_at_night.jpg',
      caption: 'Controlled biomass combustion hearth.',
      attribution: 'Public Domain / Wikimedia',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'DOCUMENTED',
    confidence_note: 'Earliest exact date debated between 1.5 Mya and 400 Kya, but in situ combustion by 400 Kya is universally verified.'
  },
  {
    id: 'clothing-needles',
    name: 'Fitted Clothing & Eyed Needles',
    aliases: ['Sewing', 'Tailored garments'],
    date: '~45,000 – 30,000 BCE',
    date_numeric: -40000,
    date_precision: 'approximate',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'Manufacturing System',
    region: 'Siberia, Denisova Cave, Upper Paleolithic Europe',
    civilization: 'Upper Paleolithic Humans / Denisovans',
    lat: 51.3975,
    lng: 84.6761,
    overview: 'The invention of bone and ivory eyed needles capable of threading animal sinew to stitch tailored, multi-layered, insulating garments.',
    why_it_matters: 'Allowed hominins to endure sub-zero temperatures, enabling human colonization of high-latitude Arctic Eurasia and crossing the Beringian bridge to the Americas.',
    problem_solved: 'Loose draped animal skins let thermal body heat escape via convection and provided no moisture-wicking protection in periglacial environments.',
    mechanism: 'Polished bone/antler needles pierced animal hides with micro-perforations, drawing threaded sinew tight into airtight, fitted thermal enclosures.',
    historical_development: [
      { stage: 'Bone Awls', period: '~70 – 50 Kya', description: 'Punching holes in hides without continuous threading.' },
      { stage: 'Eyed Needles at Denisova', period: '~45 Kya', description: 'Finely carved bird-bone needles with micro-drilled eyes found in Altai Mountains.' },
      { stage: 'Gravettian Multilayer Parkas', period: '~30 Kya', description: 'Fitted hooded parkas, trousers, and moccasins depicted in paleolithic figurines.' }
    ],
    contributors: [
      { name: 'Denisovan & Cro-Magnon Artisans', role: 'collective_culture', periodOrLifespan: 'Upper Paleolithic', affiliationOrRegion: 'Siberia / Eurasia', contributionNote: 'Pioneered micro-drilled bone needles.' }
    ],
    predecessors: ['stone-tools', 'controlled-fire'],
    successors: ['agriculture-domestication'],
    modern_legacy: 'Textile engineering, composite materials, space suits, and automated industrial apparel manufacturing.',
    sources: [
      { source: 'Science: The emergence of eyed needles and tailored clothing', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1126/science.1147571', confidenceNote: 'Comprehensive review of Paleolithic bone artifacts.' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Aiguille_%C3%A0_chas_Gourdan_MHNT_PRE.2009.0.240.2.jpg/800px-Aiguille_%C3%A0_chas_Gourdan_MHNT_PRE.2009.0.240.2.jpg',
      caption: 'Paleolithic bone eyed needle discovered in Gourdan Cave (France).',
      attribution: 'Didier Descouens / Muséum de Toulouse (CC BY-SA 4.0)',
      license: 'CC BY-SA 4.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Multiple eyed bone needles preserved in permafrost and cave strata dated between 45 Kya and 20 Kya.'
  },
  {
    id: 'agriculture-domestication',
    name: 'Neolithic Agriculture & Plant Domestication',
    aliases: ['Agricultural Revolution', 'Neolithic Transition', 'Farming'],
    date: '~10,000 – 8,000 BCE',
    date_numeric: -9500,
    date_precision: 'approximate',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'Biotechnological System',
    region: 'Fertile Crescent (Levant & Anatolia), Yangtze, Mesoamerica',
    civilization: 'Early Neolithic Settlements (Natufian / Pre-Pottery Neolithic)',
    lat: 37.2232,
    lng: 38.9224,
    overview: 'The artificial selection, cultivation, and intentional propagation of cereal grasses (einkorn, emmer wheat, barley, rice) and pulse crops.',
    why_it_matters: 'Created caloric surpluses per hectare 10 to 100 times greater than foraging, ending nomadic mobility and triggering the growth of permanent villages, cities, and states.',
    problem_solved: 'Nomadic foraging subjected populations to severe seasonal caloric bottlenecks and strictly capped human demographic density.',
    mechanism: 'Systematic replanting of mutant grains with non-shattering rachises, selecting for larger seed sizes, thinner hulls, and synchronized germination.',
    historical_development: [
      { stage: 'Proto-cultivation & Wild Harvesting', period: '~12,000 BCE', description: 'Natufian sickles harvesting wild stands of cereal grasses.' },
      { stage: 'Domestication at Göbekli Tepe / Karacadag', period: '~9,500 BCE', description: 'Genetic divergence of domesticated einkorn and emmer wheat.' },
      { stage: 'Global Independent Centers', period: '~8,000 – 4,000 BCE', description: 'Independent domestication of rice in the Yangtze River, maize in Mesoamerica, and potatoes in the Andes.' }
    ],
    contributors: [
      { name: 'Neolithic Farmers of Southwest Asia', role: 'collective_culture', periodOrLifespan: '~10,000 – 8000 BCE', affiliationOrRegion: 'Fertile Crescent', contributionNote: 'Domesticated the founder crops of Eurasian civilization.' }
    ],
    predecessors: ['controlled-fire', 'stone-tools'],
    successors: ['pottery', 'animal-domestication', 'aqueducts-water-systems', 'the-wheel'],
    modern_legacy: 'Global food security, agricultural machinery, agronomy, genetic crop engineering, and modern urban civilization.',
    sources: [
      { source: 'Science: Genome sequencing tracing wheat domestication to Karacadag', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1126/science.278.5341.1318', confidenceNote: 'Genetic profiling of wild and domestic Triticum monococcum.' },
      { source: 'Encyclopaedia Britannica: Neolithic Agricultural Revolution', sourceType: 'encyclopedic', sourceUrl: 'https://www.britannica.com/topic/agricultural-revolution' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ploughing_and_sowing_in_ancient_Egypt.jpg/800px-Ploughing_and_sowing_in_ancient_Egypt.jpg',
      caption: 'Neolithic agricultural practices depicted in ancient tomb fresco.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Macro-botanical seed morphology and ancient DNA directly track domestic phenotypic mutations.'
  },
  {
    id: 'animal-domestication',
    name: 'Animal Domestication & Secondary Products',
    aliases: ['Pastoralism', 'Livestock breeding', 'Beasts of burden'],
    date: '~9,000 – 4,000 BCE',
    date_numeric: -8500,
    date_precision: 'approximate',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'Biotechnological System',
    region: 'Southwest Asia, Central Asian Steppes, South Asia',
    civilization: 'Neolithic Pastoralists',
    lat: 36.1972,
    lng: 44.0092,
    overview: 'The taming, breeding, and husbandry of animals (goats, sheep, cattle, pigs, and later horses) for meat, secondary products (milk, wool), and mechanical traction.',
    why_it_matters: 'Introduced non-human kinetic muscle power into production systems, allowed transport across steppe environments, and enabled dairy pastoralism.',
    problem_solved: 'Humans were limited strictly to their own physical muscle labor for hauling, tilling, and transport.',
    mechanism: 'Artificial reproductive control selecting for docility, reduced flight distance, retention of juvenile traits (neoteny), and herd-following behavior.',
    historical_development: [
      { stage: 'Dog Domestication', period: '~20,000 – 15,000 BCE', description: 'Canis lupus domesticated for hunting cooperation and camp sentinel duties.' },
      { stage: 'Ungulate Meat Husbandry', period: '~8,500 BCE', description: 'Goats, sheep, and cattle penned in the Zagros and Taurus mountains.' },
      { stage: 'Secondary Products Revolution', period: '~4,000 BCE', description: 'Milking, wool shearing, and ox-traction harnessing for plows and carts.' },
      { stage: 'Horse Domestication', period: '~3,500 BCE', description: 'Botai culture domesticates horses for transport on the Eurasian steppes.' }
    ],
    contributors: [
      { name: 'Eurasian Pastoralists', role: 'collective_culture', periodOrLifespan: '~9000 – 3500 BCE', affiliationOrRegion: 'Near East & Eurasian Steppes', contributionNote: 'Selective breeding of herd ungulates.' }
    ],
    predecessors: ['agriculture-domestication'],
    successors: ['the-wheel', 'the-wheel', 'paved-roads-network'],
    modern_legacy: 'Animal husbandry, veterinary science, immunology (cowpox-vaccines), and biological transport mechanics.',
    sources: [
      { source: 'Nature: The evolutionary history of dogs and domestic ungulates', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1038/nature12726' },
      { source: 'Sherratt, A. The Secondary Products Revolution in Old World Agriculture', sourceType: 'academic', confidenceNote: 'Standard archaeological paradigm for traction and dairy.' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Domestic_sheep_in_New_Zealand.jpg/800px-Domestic_sheep_in_New_Zealand.jpg',
      caption: 'Domestic livestock: sheep bred for docile behavior and wool retention.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Documented by osteological changes in fossil animal skeletons and milk residue in ceramic pots.'
  },
  {
    id: 'pottery',
    name: 'Ceramics & Ceramic Pyrotechnology',
    aliases: ['Pottery', 'Kiln firing', 'Terracotta'],
    date: '~18,000 – 6,000 BCE',
    date_numeric: -16000,
    date_precision: 'approximate',
    era: 'PREHISTORY',
    domain: 'MATERIALS',
    type: 'Chemical Transformation',
    region: 'East Asia (Xianrendong Cave, China / Jomon, Japan), Fertile Crescent',
    civilization: 'Late Paleolithic / Neolithic Cultures',
    lat: 28.7333,
    lng: 117.1833,
    overview: 'The chemical transformation of hydrous aluminium phyllosilicates (clays) via kiln firing at 600°C–1200°C into permanent, impermeable, heat-resistant stone-like structures.',
    why_it_matters: 'Enabled vermin-proof grain storage, long-term liquid fermentation, boiling food directly over flame, and laid the thermal kiln foundation for metal smelting.',
    problem_solved: 'Organic vessels (skins, gourds, woven baskets) could not be placed directly on open flames for prolonged boiling and quickly rotted.',
    mechanism: 'Heating clay expels molecular water, collapsing crystalline lattices and inducing vitrification (glassy phase formation) that fuses grains irreversibly.',
    historical_development: [
      { stage: 'Hunter-Gatherer Ceramic Vessels', period: '~18,000 – 14,000 BCE', description: 'Coiled clay pots in Xianrendong Cave, China, and early Jomon culture in Japan used for boiling fish.' },
      { stage: 'Neolithic Kiln Development', period: '~6,000 BCE', description: 'Updraft enclosed kilns achieving temperatures over 1000°C across the Near East.' },
      { stage: 'Potter’s Fast Wheel', period: '~3,500 BCE', description: 'Rotational kinetic momentum used to shape symmetrical vessels rapidly in Mesopotamia.' }
    ],
    contributors: [
      { name: 'Xianrendong Foragers', role: 'collective_culture', periodOrLifespan: '~18,000 BCE', affiliationOrRegion: 'Jiangxi, China', contributionNote: 'Manufactured the oldest known pottery vessels.' }
    ],
    predecessors: ['controlled-fire'],
    successors: ['metallurgy-copper', 'the-wheel', 'pottery'],
    modern_legacy: 'Refractory furnace linings, advanced structural ceramics, semiconductor ceramic capacitors, and heat shields on orbital spacecraft.',
    sources: [
      { source: 'Science: Early pottery at 20,000 years ago in Xianrendong Cave, China', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1126/science.1218643', confidenceNote: 'Radiocarbon dating of bone collagen and charcoal.' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/JomonPottery.jpg/800px-JomonPottery.jpg',
      caption: 'Middle Jōmon period ceramic vessel with elaborate flame-style rim (Japan).',
      attribution: 'PHGCOM / Tokyo National Museum (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical pottery sherds verified via thermoluminescence and stratigraphically associated charcoal C-14.'
  },
  {
    id: 'metallurgy-copper',
    name: 'Extractive Metallurgy & Smelting (Copper to Bronze)',
    aliases: ['Smelting', 'Chalcolithic', 'Bronze Age', 'Alloy casting'],
    date: '~5,500 – 3,300 BCE',
    date_numeric: -5000,
    date_precision: 'approximate',
    era: 'ANCIENT_WORLD',
    domain: 'MATERIALS',
    type: 'Chemical / Thermal Engineering',
    region: 'Balkans (Vinca culture), Anatolia, Mesopotamia',
    civilization: 'Vinca Culture / Sumerian / Near Eastern Bronze Age',
    lat: 44.7619,
    lng: 20.6225,
    overview: 'The thermal and chemical reduction of copper carbonate/oxide ores (malachite, azurite) inside charcoal-reducing furnaces, followed by intentional tin-alloying into bronze.',
    why_it_matters: 'Replaced brittle stone tools with ductile, re-meltable, hard metallic blades and castings, revolutionizing warfare, agriculture, and craftsmanship.',
    problem_solved: 'Flint and bone tools chipped and could not be repaired; when broken, the entire tool had to be discarded.',
    mechanism: 'Carbon monoxide produced by incomplete charcoal combustion reacts with metal ores: CuO + CO → Cu + CO2 at temperatures above 1,085°C. Adding 10% tin creates bronze with lower melting point and superior hardness.',
    historical_development: [
      { stage: 'Native Copper Cold-Hammering', period: '~7,000 BCE', description: 'Shaping naturally occurring metallic nuggets without melting (Çayönü Tepesi).' },
      { stage: 'Smelting Copper Ores', period: '~5,000 BCE', description: 'Furnaces in Plocnik (Serbia) and Belovode achieve reduction of malachite ores.' },
      { stage: 'Bronze Alloy Era', period: '~3,300 BCE', description: 'Intentional smelting of copper with cassiterite (tin oxide) in the Near East and Indus Valley.' }
    ],
    contributors: [
      { name: 'Vinca & Near Eastern Metallurgists', role: 'collective_culture', periodOrLifespan: '~5500 – 3000 BCE', affiliationOrRegion: 'Balkans & Southwest Asia', contributionNote: 'Developed reduction smelting and lost-wax mold casting.' }
    ],
    predecessors: ['controlled-fire', 'pottery'],
    successors: ['metallurgy-iron', 'the-wheel', 'writing-cuneiform'],
    modern_legacy: 'Modern materials science, structural alloys, copper electrical wiring, pipeline fittings, and aerospace metallurgy.',
    sources: [
      { source: 'Journal of Archaeological Science: Early metallurgy in the Balkans', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1016/j.jas.2010.06.012' },
      { source: 'Tylecote, R.F. A History of Metallurgy', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Axe-axe-adze_copper_Vinca_culture.jpg/800px-Axe-axe-adze_copper_Vinca_culture.jpg',
      caption: 'Cast copper axe-adze from the Vinča culture (c. 4500 BCE).',
      attribution: 'National Museum of Serbia / Wikimedia (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Slag analysis, tuyeres, and crucible residues chemically confirm intentional reduction smelting.'
  },
  {
    id: 'the-wheel',
    name: 'The Wheel & Axle',
    aliases: ['Vehicular wheel', 'Potter wheel', 'Rotary axle'],
    date: '~3,500 BCE',
    date_numeric: -3500,
    date_precision: 'approximate',
    era: 'ANCIENT_WORLD',
    domain: 'ENGINEERING',
    type: 'Mechanical Mechanism',
    region: 'Mesopotamia (Uruk), Northern Caucasus (Maykop), Cucuteni-Trypillia',
    civilization: 'Sumerian / Maykop Culture',
    lat: 31.3222,
    lng: 45.6361,
    overview: 'The pairing of a circular rotating disk with a cylindrical axle bearing to transform sliding friction into rolling resistance for transport and mechanical kinetic rotation.',
    why_it_matters: 'Multiplied overland freight payload capacities by an order of magnitude, enabling large-scale trade, wheeled war chariots, and rotational machinery (waterwheels, gears, pulleys).',
    problem_solved: 'Hauling heavy cargo on sledges produced immense frictional drag, severely limiting payload weights and requiring hundreds of laborers.',
    mechanism: 'Replaces surface-on-surface sliding friction (coefficient ~0.5) with rolling friction (coefficient <0.02) while supporting structural loads through a central greased hub or fixed rotating axle.',
    historical_development: [
      { stage: 'Potter’s Rotational Wheel', period: '~4,000 BCE', description: 'Horizontal stone turntable for forming pottery vessels in Mesopotamia.' },
      { stage: 'Solid Wood Vehicular Wheel', period: '~3,500 BCE', description: 'Three plank-cut wooden disks clamped together, fitted with an axle (Ljubljana Marshes Wheel, Bronocice pot depiction).' },
      { stage: 'Spoked Wheels & Light Chariots', period: '~2,000 BCE', description: 'Sintashta culture develops steam-bent spoked wheels, vastly reducing rotational inertia.' }
    ],
    contributors: [
      { name: 'Sumerian & Eurasian Steppe Engineers', role: 'collective_culture', periodOrLifespan: '~3500 BCE', affiliationOrRegion: 'Mesopotamia / Steppes', contributionNote: 'Invented load-bearing wheel and axle assemblies.' }
    ],
    predecessors: ['metallurgy-copper', 'pottery', 'animal-domestication'],
    successors: ['paved-roads-network', 'mechanical-clock', 'steam-locomotive', 'internal-combustion-engine'],
    modern_legacy: 'All rolling ground transportation, gear trains, turbines, rolling bearings, gyroscopes, and hard-drive rotational spindles.',
    sources: [
      { source: 'Antiquity: The Ljubljana Marshes Wheel (3350–3100 BC)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1017/S0003598X0009187X', confidenceNote: 'Dendrochronologically and radiocarbon dated preserved ash-wood wheel.' },
      { source: 'Piggott, S. The Earliest Wheeled Transport: From the Atlantic Coast to the Caspian Sea', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ljubljansko_barje_kolo_01.jpg/800px-Ljubljansko_barje_kolo_01.jpg',
      caption: 'The Ljubljana Marshes Wheel with oak axle, dated to ~3150 BCE.',
      attribution: 'City Museum of Ljubljana / Petar Milošević (CC BY-SA 4.0)',
      license: 'CC BY-SA 4.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical wooden wheels preserved in waterlogged marsh sediments in Slovenia and Germany.'
  },

  // ==========================================
  // 2. KNOWLEDGE, MATH & ASTRONOMY
  // ==========================================
  {
    id: 'writing-cuneiform',
    name: 'Cuneiform & Writing Systems',
    aliases: ['Sumerian cuneiform', 'Invention of writing', 'Epigraphy'],
    date: '~3,400 – 3,200 BCE',
    date_numeric: -3300,
    date_precision: 'century',
    era: 'ANCIENT_WORLD',
    domain: 'KNOWLEDGE',
    type: 'Symbolic Information System',
    region: 'Sumer (Uruk, Mesopotamia)',
    civilization: 'Sumerian Civilization',
    lat: 31.3222,
    lng: 45.6361,
    overview: 'The external recording of human speech and administrative transactions using wedge-shaped stylus impressions on moist clay tablets.',
    why_it_matters: 'Decoupled human memory from biological mortality, allowing legal codes, grain accounts, scientific observations, and cultural epics to persist across centuries.',
    problem_solved: 'Biological human memory was fallible, could not be audited, and collapsed whenever key elders died, limiting the administrative scale of early states.',
    mechanism: 'A cut reed stylus pressed triangular impressions into soft alluvial clay tablets, evolving from pictographic tokens into abstract phonetic phonograms (rebus principle).',
    historical_development: [
      { stage: 'Clay Accounting Bullae & Tokens', period: '~4,000 BCE', description: 'Three-dimensional geometric clay tokens sealed in hollow clay envelopes to record livestock.' },
      { stage: 'Proto-Cuneiform Pictographs', period: '~3,300 BCE', description: 'Two-dimensional incisions representing commodities and numerical quantities (Uruk IV tablets).' },
      { stage: 'Phonetic Cuneiform & Literature', period: '~2,600 BCE', description: 'Full phonetic rendering expressing grammar, culminating in the Epic of Gilgamesh and Code of Hammurabi.' }
    ],
    contributors: [
      { name: 'Uruk Temple Administrators', role: 'collective_culture', periodOrLifespan: '~3400 – 3100 BCE', affiliationOrRegion: 'Sumer, Southern Mesopotamia', contributionNote: 'Systematized proto-cuneiform bookkeeping tablets.' }
    ],
    predecessors: ['pottery', 'agriculture-domestication'],
    successors: ['mathematics-base60', 'writing-cuneiform', 'papyrus-paper'],
    modern_legacy: 'All digital code, textual databases, legal jurisprudence, contracts, libraries, and written communication.',
    sources: [
      { source: 'British Museum: The Origin of Writing', sourceType: 'institutional', sourceUrl: 'https://www.britishmuseum.org/collection/egypt/origin-writing' },
      { source: 'Nissen, H.J. Archaic Bookkeeping: Early Writing and Techniques of Economic Administration in the Ancient Near East', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Cuneiform_script2.jpg/800px-Cuneiform_script2.jpg',
      caption: 'Clay tablet with cuneiform inscription documenting administrative allocations.',
      attribution: 'British Museum / Wikimedia Commons',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Tens of thousands of excavated clay tablets in museum archives dated to 3300 BCE onwards.'
  },
  {
    id: 'mathematics-base60',
    name: 'Positional Mathematics & Base Systems',
    aliases: ['Sexagesimal system', 'Babylonian mathematics', 'Arithmetic place-value'],
    date: '~2,000 – 1,800 BCE',
    date_numeric: -1900,
    date_precision: 'century',
    era: 'ANCIENT_WORLD',
    domain: 'KNOWLEDGE',
    type: 'Mathematical System',
    region: 'Mesopotamia (Babylonia)',
    civilization: 'Babylonian Civilization',
    lat: 32.5363,
    lng: 44.4208,
    overview: 'The development of the first true positional place-value numerical system using base-60 (sexagesimal), enabling complex multiplication, division, fractions, and quadratic algebra.',
    why_it_matters: 'Gave humanity the 360-degree circle, 60-minute hour, and 60-second minute still universally used today, and computed square roots accurate to six decimal digits.',
    problem_solved: 'Additive counting (like Roman or Egyptian tallies) required inventing ever-larger arbitrary symbols and made division and fraction arithmetic nearly impossible.',
    mechanism: 'The value of each digit depends on its horizontal column position (powers of 60: 60^0, 60^1, 60^2). Tablet Plimpton 322 proves Babylonian knowledge of Pythagorean triplets a millennium before Pythagoras.',
    historical_development: [
      { stage: 'Sumerian Metrology', period: '~3,000 BCE', description: 'Weights and measures using factors of 6 and 10.' },
      { stage: 'Old Babylonian Place Value', period: '~1,900 BCE', description: 'True abstract base-60 place-value notation with reciprocal tables for division.' },
      { stage: 'Plimpton 322 Trigonometric Table', period: '~1,800 BCE', description: 'Clay tablet recording 15 pairs of Pythagorean triangles using sexagesimal fractions.' }
    ],
    contributors: [
      { name: 'Old Babylonian Scribes', role: 'collective_culture', periodOrLifespan: '~1900 – 1600 BCE', affiliationOrRegion: 'Babylon, Mesopotamia', contributionNote: 'Authored mathematical tablets Plimpton 322 and YBC 7289.' }
    ],
    predecessors: ['writing-cuneiform'],
    successors: ['geometry-euclidean', 'astronomy-astrolabe', 'cartography-maps', 'decimal-zero-algebra'],
    modern_legacy: 'Angular measurement (360°), chronometry (60 seconds, 60 minutes), geographical latitude/longitude coordinate systems.',
    sources: [
      { source: 'Historia Mathematica: Plimpton 322 as Babylonian exact ratio trigonometry', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1016/j.hm.2017.08.001' },
      { source: 'Neugebauer, O. The Exact Sciences in Antiquity', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ybc7289-bw.jpg/800px-Ybc7289-bw.jpg',
      caption: 'Babylonian clay tablet YBC 7289 computing the square root of 2 to four sexagesimal digits (approx. 1.414213).',
      attribution: 'Yale Babylonian Collection / Bill Casselman (Public Domain)',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Direct physical clay tablets preserved at Columbia University (Plimpton 322) and Yale University.'
  },
  {
    id: 'geometry-euclidean',
    name: 'Axiomatic Geometry & Deductive Logic',
    aliases: ['Euclidean geometry', 'Euclid Elements', 'Axiomatic method'],
    date: '~300 BCE',
    date_numeric: -300,
    date_precision: 'decade',
    era: 'CLASSICAL_PERIOD',
    domain: 'KNOWLEDGE',
    type: 'Formal Logical Framework',
    region: 'Alexandria, Egypt (Hellenistic world)',
    civilization: 'Hellenistic Greece / Ptolemaic Egypt',
    lat: 31.2001,
    lng: 29.9187,
    overview: 'The rigorous formulation of geometry based on five foundational axioms and deductive proofs, established in Euclid’s treatise "Elements".',
    why_it_matters: 'Introduced the standard of deductive mathematical proof to human thought, serving as the universal foundation for physics, engineering, surveying, and computer algorithm verification.',
    problem_solved: 'Prior Egyptian and Babylonian geometry consisted of empirical rules of thumb with no formal guarantees of universal truth or boundary conditions.',
    mechanism: 'From five simple postulates (e.g. a straight line can be drawn between any two points), hundreds of theorems are systematically derived via deductive propositional logic.',
    historical_development: [
      { stage: 'Pythagorean & Platonic Foundations', period: '~500 – 350 BCE', description: 'Proof of irrationality and geometric theorem collections.' },
      { stage: 'Euclid’s Elements at the Library of Alexandria', period: '~300 BCE', description: 'Systematization of plane geometry, proportion theory, and proof of prime infinitude.' },
      { stage: 'Archimedean Infinitesimals', period: '~250 BCE', description: 'Calculation of pi and parabolic area bounds, prefiguring the integral calculus.' }
    ],
    contributors: [
      { name: 'Euclid of Alexandria', role: 'inventor', periodOrLifespan: '~325 – 265 BCE', affiliationOrRegion: 'Library of Alexandria', contributionNote: 'Authored the thirteen books of the Elements.' }
    ],
    predecessors: ['mathematics-base60'],
    successors: ['cartography-maps', 'astronomy-astrolabe', 'calculus', 'scientific-method'],
    modern_legacy: 'Computer-aided design (CAD), 3D computer graphics engines, architectural structural modeling, and formal logic verification.',
    sources: [
      { source: 'Heath, T.L. The Thirteen Books of Euclid’s Elements', sourceType: 'academic', sourceUrl: 'https://archive.org/details/thirteenbooksofe01eucl' },
      { source: 'Stanford Encyclopedia of Philosophy: Ancient Greek Geometry', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Oxyrhynchus_papyrus_with_Euclid%27s_Elements.jpg/800px-Oxyrhynchus_papyrus_with_Euclid%27s_Elements.jpg',
      caption: 'Papyrus Oxyrhynchus 29 containing a fragment of Book II, Proposition 5 of Euclid’s Elements (~75–125 CE).',
      attribution: 'Penn Museum / Public Domain',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Extensive papyrus fragments and ancient Byzantine/Arabic manuscript lineages.'
  },
  {
    id: 'astronomy-astrolabe',
    name: 'Systematic Astronomy & The Astrolabe',
    aliases: ['Astrolabe', 'Celestial sphere modeling', 'Hellenistic / Islamic Astrolabes'],
    date: '~150 BCE – 800 CE',
    date_numeric: 200,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'SCIENCE',
    type: 'Scientific Instrument / Analog Computer',
    region: 'Alexandria (Hipparchus/Ptolemy) & Islamic Golden Age (Baghdad)',
    civilization: 'Hellenistic Greece / Islamic Golden Age',
    lat: 33.3152,
    lng: 44.3661,
    overview: 'An analog two-dimensional model of the celestial sphere using stereographic projection, allowing astronomers and navigators to calculate time, celestial positions, and latitude.',
    why_it_matters: 'The first handheld analog computing device, enabling accurate timekeeping by day or night and founding the mathematical basis of astronomical navigation.',
    problem_solved: 'Measuring celestial coordinates and predicting planetary/stellar positions required cumbersome spherical trigonometry tables in the field.',
    mechanism: 'A rotating openwork plate (rete) with stellar pointers rotates over an engraved geographic latitude plate (tympan), mechanically projecting 3D celestial coordinates onto a 2D plane.',
    historical_development: [
      { stage: 'Stereographic Projection Discovery', period: '~150 BCE', description: 'Hipparchus establishes stereographic projection geometry preserving circles.' },
      { stage: 'Byzantine Instrument Evolution', period: '~500 CE', description: 'Theon of Alexandria writes the earliest surviving treatise on astrolabe construction.' },
      { stage: 'Islamic Golden Age Refinements', period: '~800 – 1000 CE', description: 'Maryam al-Ijliya, al-Khwarizmi, and al-Biruni refine universal astrolabes, azimuth lines, and sine quadrants.' }
    ],
    contributors: [
      { name: 'Hipparchus of Nicaea', role: 'theoretical_precursor', periodOrLifespan: '~190 – 120 BCE', affiliationOrRegion: 'Rhodes / Alexandria', contributionNote: 'Invented stereographic projection.' },
      { name: 'Maryam al-Ijliya (al-Asturlabiya)', role: 'co-developer', periodOrLifespan: '10th century CE', affiliationOrRegion: 'Aleppo, Syria', contributionNote: 'Renowned astrolabe maker in the court of Sayf al-Dawla.' }
    ],
    predecessors: ['mathematics-base60', 'geometry-euclidean'],
    successors: ['cartography-maps', 'navigation-maritime', 'mechanical-clock', 'satellites-gps'],
    modern_legacy: 'Planisphere maps, astronomical coordinate calculators, celestial navigation backup systems for spacecraft, and mechanical analog computers.',
    sources: [
      { source: 'King, D.A. In Synchrony with the Heavens: Studies in Astronomical Timekeeping and Instrumentation', sourceType: 'academic' },
      { source: 'Smithsonian National Air and Space Museum: History of Navigation', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Astrolabe_IMG_1523.jpg/800px-Astrolabe_IMG_1523.jpg',
      caption: '18th-century brass astrolabe preserved in the Whipple Museum of the History of Science (Cambridge).',
      attribution: 'Andrew Dunn / Wikimedia Commons (CC BY-SA 2.0)',
      license: 'CC BY-SA 2.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical instruments preserved from the 9th century CE onward in museums worldwide.'
  },
  {
    id: 'cartography-maps',
    name: 'Scientific Cartography & Coordinate Projection',
    aliases: ['Mapmaking', 'Ptolemaic cartography', 'Mercator projection'],
    date: '~150 CE – 1569 CE',
    date_numeric: 150,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'KNOWLEDGE',
    type: 'Information / Spatial Science',
    region: 'Alexandria, Egypt (Ptolemy) → Flanders (Mercator)',
    civilization: 'Hellenistic / Early Modern Europe',
    lat: 31.2001,
    lng: 29.9187,
    overview: 'The systematic mathematical projection of the spherical Earth onto flat media using latitude, longitude, and conformal angle-preserving geometry.',
    why_it_matters: 'Turned the Earth into a measurable, calculable grid, enabling global maritime exploration, international trade routes, geopolitical treaties, and digital mapping.',
    problem_solved: 'Mariners and travelers relied on coastal landmark memory; a flat map without conformal projection caused massive bearing distortion and fatal shipwrecks.',
    mechanism: 'Projecting 3D spherical coordinates (phi, lambda) onto 2D planes; Gerardus Mercator’s 1569 projection stretches latitude lines in proportion to secant(latitude) so that lines of constant compass bearing (rhumb lines) become straight lines.',
    historical_development: [
      { stage: 'Ptolemy’s Geographia', period: '~150 CE', description: 'Introduced 8,000 geocoded locations with latitude and longitude coordinates and conical projections.' },
      { stage: 'Islamic World Maps', period: '~1154 CE', description: 'Muhammad al-Idrisi produces the Tabula Rogeriana for King Roger II of Sicily, combining Arab and Greek knowledge.' },
      { stage: 'Mercator Conformal Projection', period: '1569 CE', description: 'Gerardus Mercator publishes Nova et Aucta Orbis Terrae Descriptio ad Usum Navigantium.' }
    ],
    contributors: [
      { name: 'Claudius Ptolemy', role: 'inventor', periodOrLifespan: '~100 – 170 CE', affiliationOrRegion: 'Alexandria, Roman Egypt', contributionNote: 'Defined latitude and longitude coordinate grids in Geographia.' },
      { name: 'Gerardus Mercator', role: 'co-developer', periodOrLifespan: '1512 – 1594 CE', affiliationOrRegion: 'Flanders / Holy Roman Empire', contributionNote: 'Created the conformal cylindrical rhumb-line projection.' }
    ],
    predecessors: ['geometry-euclidean', 'mathematics-base60', 'astronomy-astrolabe'],
    successors: ['magnetic-compass', 'navigation-maritime', 'chronometer-longitude', 'satellites-gps'],
    modern_legacy: 'Web Mercator projection (Google Maps, OpenStreetMap), GIS geospatial analytics, and satellite vector navigation.',
    sources: [
      { source: 'Library of Congress: Ptolemy’s Geography and Renaissance Cartography', sourceType: 'institutional', sourceUrl: 'https://www.loc.gov/exhibits/world/earth.html' },
      { source: 'Monmonier, M. Rhumb Lines and Map Wars: A Social History of the Mercator Projection', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/PtolemyWorldMap.jpg/800px-PtolemyWorldMap.jpg',
      caption: '15th-century engraving of Claudius Ptolemy’s world map from Geographia.',
      attribution: 'Public Domain / British Library',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Original Greek manuscripts and Renaissance print impressions preserved in major national archives.'
  },
  {
    id: 'magnetic-compass',
    name: 'The Magnetic Compass',
    aliases: ['Luo Pan', 'Mariner compass', 'Magnetic navigation'],
    date: '~200 BCE – 1100 CE',
    date_numeric: 1040,
    date_precision: 'century',
    era: 'MEDIEVAL_PERIOD',
    domain: 'NAVIGATION',
    type: 'Scientific Instrument',
    region: 'China (Han to Song Dynasties)',
    civilization: 'Ancient & Imperial China',
    lat: 34.3416,
    lng: 108.9398,
    overview: 'The utilization of geomagnetic fields to align suspended lodestone or magnetized iron needles toward magnetic North for orientation independent of celestial visibility.',
    why_it_matters: 'Liberated mariners from staying within sight of coastlines or waiting for clear night skies, enabling transoceanic navigation across storm-shrouded open waters.',
    problem_solved: 'When clouds, fog, or storms obscured the Sun and Polaris, navigators were completely blinded and frequently drifted into lethal shoals.',
    mechanism: 'A magnetized steel needle suspended on a pivot or floating on water aligns with the horizontal component of Earth’s dipole magnetic field.',
    historical_development: [
      { stage: 'Han Dynasty Lodestone Spoon', period: '~200 BCE', description: 'Carved lodestone spoon balanced on a polished bronze divination board (sinan).' },
      { stage: 'Thermoremanence Magnetization', period: '1044 CE', description: 'Wujing Zongyao describes heating iron fish-shaped sheets and quenching them in Earth’s magnetic field.' },
      { stage: 'Song Dynasty Mariner Compass', period: '~1088 – 1119 CE', description: 'Shen Kuo documents magnetic declination; Zhu Yu records naval pilots steering by magnetic needles in open sea.' }
    ],
    contributors: [
      { name: 'Chinese Taoist & Military Engineers', role: 'collective_culture', periodOrLifespan: '~200 BCE – 1088 CE', affiliationOrRegion: 'China (Han/Song Dynasties)', contributionNote: 'Discovered lodestone polarity and artificial thermomagnetization.' },
      { name: 'Shen Kuo', role: 'contributor', periodOrLifespan: '1031 – 1095 CE', affiliationOrRegion: 'Song Dynasty China', contributionNote: 'First documented magnetic needle suspended on silk and magnetic declination in Dream Pool Essays.' }
    ],
    predecessors: ['metallurgy-iron', 'cartography-maps'],
    successors: ['navigation-maritime', 'electromagnetism-maxwell', 'radar', 'satellites-gps'],
    modern_legacy: 'Inertial and electronic fluxgate magnetometers found inside every smartphone, drone, satellite attitude sensor, and aircraft avionics bay.',
    sources: [
      { source: 'Needham, J. Science and Civilisation in China, Volume 4, Physics and Physical Technology', sourceType: 'academic' },
      { source: 'Encyclopaedia Britannica: Compass', sourceType: 'encyclopedic', sourceUrl: 'https://www.britannica.com/technology/compass-navigational-instrument' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Model_sun_spoon_Han_dynasty.jpg/800px-Model_sun_spoon_Han_dynasty.jpg',
      caption: 'Reconstruction of a Han Dynasty Chinese south-pointing lodestone spoon compass.',
      attribution: 'Daniel Schwen / Wikimedia Commons (CC BY-SA 4.0)',
      license: 'CC BY-SA 4.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Unambiguously described in 11th-century Chinese military and scientific treatises.'
  },
  {
    id: 'navigation-maritime',
    name: 'Transoceanic Maritime Navigation',
    aliases: ['Dead reckoning', 'Celestial navigation', 'Latitude sailing'],
    date: '~1400 – 1600 CE',
    date_numeric: 1450,
    date_precision: 'century',
    era: 'EARLY_MODERN',
    domain: 'TRANSPORTATION',
    type: 'Integrated Technological System',
    region: 'Iberian Peninsula, Sagres, Mediterranean & Polynesians',
    civilization: 'Early Modern European / Polynesian',
    lat: 37.0097,
    lng: -8.9328,
    overview: 'The synthesis of the magnetic compass, cross-staff/astrolabe latitude sights, Mercator charts, and caravel ship rigging into a complete system for traversing open oceans.',
    why_it_matters: 'Interconnected all continents for the first time in human history, initiating the Columbian Exchange, global commerce networks, and world history.',
    problem_solved: 'Vessels were historically bound to cabotage (coastal hopping) and could not venture across the Atlantic, Pacific, or Indian Oceans without catastrophic loss.',
    mechanism: 'Determining latitude by measuring the meridian altitude of Polaris or the noontime Sun with a quadrant/cross-staff; maintaining heading via gimballed magnetic compass; estimating speed with chip logs.',
    historical_development: [
      { stage: 'Polynesian Wayfinding', period: '~1000 BCE – 1200 CE', description: 'Remarkable oceanic navigation using ocean swell patterns, zenith stars, and avian migratory flight.' },
      { stage: 'Prince Henry’s School of Sagres', period: '~1419 CE', description: 'Systematization of navigational charts, ephemerides tables, and lateen caravel naval architecture in Portugal.' },
      { stage: 'Global Circumnavigations', period: '1492 – 1522 CE', description: 'Columbus reaches the Americas; Magellan–Elcano expedition achieves first planetary circumnavigation.' }
    ],
    contributors: [
      { name: 'Portuguese & Spanish Navigators', role: 'collective_culture', periodOrLifespan: '15th – 16th Century', affiliationOrRegion: 'Iberian Peninsula', contributionNote: 'Standardized celestial sight tables (Regimento do Astrolábio).' },
      { name: 'Polynesian Wayfinders', role: 'collective_culture', periodOrLifespan: 'Pre-Columbian', affiliationOrRegion: 'Pacific Ocean', contributionNote: 'Colonized Hawaii, New Zealand, and Easter Island through non-instrument ocean swell navigation.' }
    ],
    predecessors: ['magnetic-compass', 'cartography-maps', 'astronomy-astrolabe'],
    successors: ['chronometer-longitude', 'radio-telecommunication', 'satellites-gps', 'autonomous-navigation'],
    modern_legacy: 'Global maritime shipping container supply chains, IMO standards, automated vessel traffic routing, and underwater sonar navigation.',
    sources: [
      { source: 'Smithsonian Institution: Ocean Navigation in the Age of Sail', sourceType: 'institutional', sourceUrl: 'https://americanhistory.si.edu/collections/subjects/navigation' },
      { source: 'Parry, J.H. The Discovery of the Sea', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Nao_Victoria_replica_%28side_view%29.JPG/800px-Nao_Victoria_replica_%28side_view%29.JPG',
      caption: 'Replica of Victoria, the only surviving ship of Ferdinand Magellan’s circumnavigation expedition (1519–1522).',
      attribution: 'Stan Shebs / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Fully documented through surviving ship logs, treaties (Tordesillas), and museum navigational instruments.'
  },
  {
    id: 'mechanical-clock',
    name: 'Mechanical Escapement Horology',
    aliases: ['Mechanical clock', 'Verge and foliot', 'Pendulum clock'],
    date: '~1280 – 1656 CE',
    date_numeric: 1300,
    date_precision: 'century',
    era: 'MEDIEVAL_PERIOD',
    domain: 'ENGINEERING',
    type: 'Precision Mechanical System',
    region: 'Medieval Western Europe (Italy, England) → Netherlands',
    civilization: 'Medieval Europe',
    lat: 45.4642,
    lng: 9.1900,
    overview: 'The invention of oscillating mechanical escapements that regulate the release of stored gravitational potential energy (falling weights) into discrete, audible, uniform beats.',
    why_it_matters: 'Transformed time from an organic, solar phenomenon into an abstract, universally synchronized, quantified metric, laying the operational basis for modern industrial society.',
    problem_solved: 'Water clocks froze in winter, sundials failed on overcast days and nights, and candle clocks lacked accuracy, preventing synchronized civic and scientific operations.',
    mechanism: 'The verge and foliot escapement alternates the engagement of two pallets with a crown toothed wheel. In 1656, Christiaan Huygens applied Galileo’s pendulum isochronism, reducing clock drift from 15 minutes/day to under 15 seconds/day.',
    historical_development: [
      { stage: 'Tower Verge & Foliot Clocks', period: '~1280 – 1320 CE', description: 'Weight-driven iron turret clocks in Salisbury and Milan cathedrals.' },
      { stage: 'Galileo’s Isochronism Discovery', period: '1582 – 1602 CE', description: 'Galileo Galilei determines that a pendulum’s period of oscillation depends only on length, not swing amplitude.' },
      { stage: 'Huygens Pendulum Clock', period: '1656 CE', description: 'Christiaan Huygens patents the first mathematically regulated pendulum clock mechanism.' }
    ],
    contributors: [
      { name: 'Christiaan Huygens', role: 'inventor', periodOrLifespan: '1629 – 1695 CE', affiliationOrRegion: 'Dutch Republic', contributionNote: 'Built the first operational pendulum clock and invented the balance spring.' },
      { name: 'Galileo Galilei', role: 'theoretical_precursor', periodOrLifespan: '1564 – 1642 CE', affiliationOrRegion: 'Pisa / Florence, Italy', contributionNote: 'Discovered the isochronous law of the pendulum.' }
    ],
    predecessors: ['the-wheel', 'metallurgy-iron'],
    successors: ['chronometer-longitude', 'steam-engine', 'calculus', 'satellites-gps'],
    modern_legacy: 'Quartz oscillators, atomic clocks (cesium fountain standards), CPU clock cycles in microprocessors, and GPS orbital nanosecond synchronization.',
    sources: [
      { source: 'Science Museum London: The Verge Escapement and Medieval Clocks', sourceType: 'institutional', sourceUrl: 'https://collection.sciencemuseumgroup.org.uk/objects/co58045/salisbury-cathedral-clock-clocks' },
      { source: 'Landes, D.S. Revolution in Time: Clocks and the Making of the Modern World', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Salisbury_Cathedral_clock.jpg/800px-Salisbury_Cathedral_clock.jpg',
      caption: 'Salisbury Cathedral clock (c. 1386), one of the oldest working mechanical clocks in the world.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical 14th-century iron clock mechanisms still operational and preserved.'
  },
  {
    id: 'chronometer-longitude',
    name: 'Marine Chronometer & The Longitude Solution',
    aliases: ['Harrison H4', 'Marine chronometer', 'Solving longitude'],
    date: '1761 CE',
    date_numeric: 1761,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'NAVIGATION',
    type: 'Precision Instrument',
    region: 'London, Great Britain',
    civilization: 'Industrial Britain',
    lat: 51.5074,
    lng: -0.1278,
    overview: 'A portable, temperature-compensated mechanical spring watch capable of keeping reference Greenwich Mean Time to within fractions of a second during rolling voyages across months at sea.',
    why_it_matters: 'Solved the deadly "longitude problem" that had caused historic naval disasters (such as the 1707 Scilly naval crash), providing exact East-West positioning across the globe.',
    problem_solved: 'Navigators could easily find latitude from stars, but had zero reliable method to measure longitude at sea; a 4-minute time error produced a 1-degree (60 nautical mile) positional error at the equator.',
    mechanism: 'Utilizes a fast-beating bi-metallic temperature-compensated balance wheel spring, maintaining constant oscillation period regardless of tropical heat or arctic cold, decoupled from ship motion.',
    historical_development: [
      { stage: 'British Longitude Act of 1714', period: '1714 CE', description: 'Parliament offers a £20,000 prize (~£3 million today) for a method determining longitude within half a degree.' },
      { stage: 'Harrison’s Sea Clocks H1 to H3', period: '1735 – 1757 CE', description: 'John Harrison constructs large, spring-counterbalanced sea clocks.' },
      { stage: 'The H4 Pocket Watch Masterpiece', period: '1761 CE', description: 'Harrison tests H4 on HMS Deptford to Jamaica; after 81 days at sea, it had lost only 5.1 seconds, easily winning the prize standard.' }
    ],
    contributors: [
      { name: 'John Harrison', role: 'inventor', periodOrLifespan: '1693 – 1776 CE', affiliationOrRegion: 'Yorkshire / London, Great Britain', contributionNote: 'Carpenter and clockmaker who built H1, H2, H3, and H4.' }
    ],
    predecessors: ['mechanical-clock', 'navigation-maritime', 'cartography-maps'],
    successors: ['radio-telecommunication', 'satellites-gps', 'radar'],
    modern_legacy: 'GPS satellite positioning (which is essentially Harrison’s method carried out by four orbiting atomic clocks broadcasting timestamps).',
    sources: [
      { source: 'Royal Museums Greenwich: John Harrison and the Longitude Problem', sourceType: 'institutional', sourceUrl: 'https://www.rmg.co.uk/stories/topics/john-harrison-clockwork' },
      { source: 'Sobel, D. Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/H4_Harrison_chronometer.jpg/800px-H4_Harrison_chronometer.jpg',
      caption: 'John Harrison’s H4 marine chronometer (1759), preserved at the Royal Observatory, Greenwich.',
      attribution: 'National Maritime Museum / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The original H1, H2, H3, and H4 instruments are preserved in working condition at the Royal Observatory, Greenwich.'
  },
  {
    id: 'printing-press',
    name: 'Movable Type Printing Press',
    aliases: ['Gutenberg press', 'Movable metal type', 'Print revolution'],
    date: '1440 – 1455 CE',
    date_numeric: 1450,
    date_precision: 'decade',
    era: 'EARLY_MODERN',
    domain: 'COMMUNICATION',
    type: 'Mechanical Mass Media System',
    region: 'Mainz, Holy Roman Empire (Germany)',
    civilization: 'Renaissance Europe / Early Modern',
    lat: 49.9929,
    lng: 8.2473,
    overview: 'The mechanization of text reproduction combining durable hand-cast lead-tin-antimony alloy type, oil-based ink, and a wooden screw press.',
    why_it_matters: 'Democratized knowledge by slashing book production costs by over 90%, fueling the Protestant Reformation, Scientific Revolution, and Enlightenment.',
    problem_solved: 'Scribes took months or years to hand-copy a single manuscript on animal vellum, restricting literacy and intellectual discourse to tiny clerical elites.',
    mechanism: 'A two-piece adjustable hand mold rapidly casts thousands of identical, interchangeable lead-antimony-tin alloy letters. Formes are inked with linseed oil-soot ink and pressed against dampened rag paper via a wooden screw mechanism.',
    historical_development: [
      { stage: 'Bi Sheng Ceramic Movable Type', period: '~1040 CE', description: 'Bi Sheng in Song Dynasty China invents baked-clay movable type characters.' },
      { stage: 'Goryeo Dynasty Cast Metal Type', period: '1234 – 1377 CE', description: 'Korean printers cast bronze movable type characters to print the Jikji.' },
      { stage: 'Gutenberg’s Complete Mechanized Press', period: '1440 – 1455 CE', description: 'Johannes Gutenberg in Mainz creates the integrated system: alloy hand mold, viscous oil ink, and heavy screw press, printing 180 copies of the Gutenberg Bible.' }
    ],
    contributors: [
      { name: 'Johannes Gutenberg', role: 'inventor', periodOrLifespan: '~1400 – 1468 CE', affiliationOrRegion: 'Mainz, Holy Roman Empire', contributionNote: 'Invented the adjustable type casting mold, oil ink, and mechanical press.' },
      { name: 'Bi Sheng', role: 'theoretical_precursor', periodOrLifespan: '~990 – 1051 CE', affiliationOrRegion: 'Song Dynasty China', contributionNote: 'Pioneered ceramic movable type.' }
    ],
    predecessors: ['metallurgy-copper', 'papyrus-paper', 'writing-cuneiform'],
    successors: ['scientific-method', 'electric-telegraph', 'personal-computer', 'internet-arpanet'],
    modern_legacy: 'Mass media, digital typesetting (PostScript, Unicode), open-source dissemination of scientific software, and the World Wide Web.',
    sources: [
      { source: 'British Library: The Gutenberg Bible', sourceType: 'institutional', sourceUrl: 'https://www.bl.uk/treasures/gutenberg' },
      { source: 'Eisenstein, E.L. The Printing Press as an Agent of Change', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Print_shop_in_the_16th_century.jpg/800px-Print_shop_in_the_16th_century.jpg',
      caption: '16th-century print shop showing composition, inking, and screw press operation.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical Gutenberg Bibles and surviving historical printer guild archives.'
  },
  {
    id: 'papyrus-paper',
    name: 'Papermaking (Cai Lun Process)',
    aliases: ['Paper', 'Rag paper', 'Cellulose pulp sheet'],
    date: '105 CE',
    date_numeric: 105,
    date_precision: 'exact',
    era: 'CLASSICAL_PERIOD',
    domain: 'MATERIALS',
    type: 'Chemical & Mechanical Material',
    region: 'Luoyang, Han Dynasty China',
    civilization: 'Ancient & Imperial China',
    lat: 34.6197,
    lng: 112.4540,
    overview: 'The suspension of macerated plant and rag cellulose fibers in water, drained through a fine mesh sieve to form felted, uniform, flexible sheets for writing.',
    why_it_matters: 'Replaced heavy clay tablets, fragile papyrus, and expensive animal parchment with an inexpensive, lightweight, compact information storage medium.',
    problem_solved: 'Silk was too expensive for mass record keeping; bamboo slips were too heavy and cumbersome (a scholar needed a cart to transport a few books).',
    mechanism: 'Plant fibers (mulberry bark, hemp rags, fishnets) are boiled with wood ash, beaten with wooden mallets into a fine pulp slurry, captured on a woven bamboo screen, pressed, and dried.',
    historical_development: [
      { stage: 'Archaeological Hemp Fiber Mats', period: '~200 BCE', description: 'Coarse packing paper found in Western Han tombs (Fangmatan).' },
      { stage: 'Cai Lun’s Standardized Formulation', period: '105 CE', description: 'Han court official Cai Lun reports improved papermaking process to Emperor He.' },
      { stage: 'Islamic Diffusion (Battle of Talas)', period: '751 CE', description: 'Chinese papermakers captured at the Battle of Talas introduce papermaking to Samarkand and Baghdad, spreading to Europe via Spain and Italy.' }
    ],
    contributors: [
      { name: 'Cai Lun', role: 'inventor', periodOrLifespan: '~50 – 121 CE', affiliationOrRegion: 'Luoyang, Han Dynasty China', contributionNote: 'Systematized the raw material formula and screen drainage process.' }
    ],
    predecessors: ['pottery', 'writing-cuneiform'],
    successors: ['printing-press', 'cartography-maps', 'calculus'],
    modern_legacy: 'Packaging paperboard, filter membranes, currency substrates, archival preservation, and cellulose chemical feedstocks.',
    sources: [
      { source: 'Needham, J. Science and Civilisation in China, Volume 5, Chemistry and Chemical Technology: Paper and Printing', sourceType: 'academic' },
      { source: 'Bloom, J.M. Paper Before Print: The History and Impact of Paper in the Islamic World', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cai_Lun.jpg/800px-Cai_Lun.jpg',
      caption: 'Traditional Chinese depiction of Cai Lun inspecting finished sheets of paper.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical paper specimens with Chinese calligraphy excavated from arid Dunhuang and Turpan sites dated to the 2nd century CE.'
  },

  // ==========================================
  // 3. SCIENTIFIC REVOLUTION & PHYSICS
  // ==========================================
  {
    id: 'scientific-method',
    name: 'The Empirical Scientific Method',
    aliases: ['Novum Organum', 'Hypothetico-deductive method', 'Empiricism'],
    date: '1620 CE',
    date_numeric: 1620,
    date_precision: 'year',
    era: 'EARLY_MODERN',
    domain: 'SCIENCE',
    type: 'Epistemological Framework',
    region: 'England / Italy',
    civilization: 'Scientific Revolution Europe',
    lat: 51.5074,
    lng: -0.1278,
    overview: 'The formal epistemological method of acquiring empirical knowledge through systematic observation, controlled experimentation, mathematical modeling, and hypothesis falsification.',
    why_it_matters: 'Ended millennia of dogmatic scholasticism and deference to ancient authority, establishing humanity’s most effective engine for discovering natural laws and curing diseases.',
    problem_solved: 'Natural philosophy relied on Aristotelian scholastic syllogisms and religious dogma without testing whether claims matched empirical physical reality.',
    mechanism: 'Iterative loop: Systematic empirical observation → Formulation of falsifiable mathematical hypothesis → Execution of controlled reproducible experiments → Confirmation or refutation of hypothesis.',
    historical_development: [
      { stage: 'Ibn al-Haytham’s Experimental Optics', period: '~1021 CE', description: 'Book of Optics mandates controlled experimental repetition and ray verification.' },
      { stage: 'Francis Bacon’s Novum Organum', period: '1620 CE', description: 'Articulates inductive logic, eliminating confirmation bias ("idols of the mind").' },
      { stage: 'Galileo & Newton’s Mathematical Physics', period: '1638 – 1687 CE', description: 'Merges controlled physical experimentation with rigorous mathematical formulation.' }
    ],
    contributors: [
      { name: 'Francis Bacon', role: 'inventor', periodOrLifespan: '1561 – 1626 CE', affiliationOrRegion: 'London, England', contributionNote: 'Articulated the inductive empirical method in Novum Organum.' },
      { name: 'Ibn al-Haytham (Alhazen)', role: 'theoretical_precursor', periodOrLifespan: '~965 – 1040 CE', affiliationOrRegion: 'Cairo, Fatimid Caliphate', contributionNote: 'Pioneered controlled optical experiments and optical falsification.' },
      { name: 'Galileo Galilei', role: 'co-developer', periodOrLifespan: '1564 – 1642 CE', affiliationOrRegion: 'Pisa / Florence', contributionNote: 'Combined quantitative measurement with mathematical laws.' }
    ],
    predecessors: ['printing-press', 'geometry-euclidean'],
    successors: ['classical-mechanics-newton', 'calculus', 'germ-theory', 'evolution-natural-selection'],
    modern_legacy: 'All modern scientific disciplines, clinical double-blind drug trials, peer review protocols, and technology development pipelines.',
    sources: [
      { source: 'Stanford Encyclopedia of Philosophy: Scientific Method', sourceType: 'academic', sourceUrl: 'https://plato.stanford.edu/entries/scientific-method/' },
      { source: 'Gaukroger, S. The Emergence of a Scientific Culture: Science and the Shaping of Modernity 1210-1685', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Novum_Organum_title_page.jpg/800px-Novum_Organum_title_page.jpg',
      caption: 'Title page of Francis Bacon’s Novum Organum (1620), showing a ship sailing past the Pillars of Hercules.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Primary printed philosophical and scientific treatises preserved in historical archives.'
  },
  {
    id: 'optics-microscope-telescope',
    name: 'Compound Optics: Microscope & Telescope',
    aliases: ['Optical telescope', 'Compound microscope', 'Refracting lens systems'],
    date: '1608 – 1610 CE',
    date_numeric: 1609,
    date_precision: 'year',
    era: 'EARLY_MODERN',
    domain: 'SCIENCE',
    type: 'Scientific Instrument System',
    region: 'Middelburg, Dutch Republic → Venice / Florence, Italy',
    civilization: 'Early Modern Europe',
    lat: 51.4988,
    lng: 3.6109,
    overview: 'The precise combination of curved glass convex and concave lenses inside optical tubes to magnify distant celestial bodies and microscopic cellular organisms.',
    why_it_matters: 'Shattered human sensory limitations in both cosmic and cellular directions, revealing Jupiter’s moons, lunar craters, and living microbiological cells.',
    problem_solved: 'The human eye has an angular resolution limit of ~1 arcminute and cannot resolve structures smaller than 0.1 mm, blinding humans to microbes and the cosmos.',
    mechanism: 'Light rays refract at glass-air interfaces according to Snell’s law: n1 sin(theta1) = n2 sin(theta2). Objective lenses form real images that are magnified by secondary eyepiece lenses.',
    historical_development: [
      { stage: 'Dutch Spectacle Makers', period: '1608 CE', description: 'Hans Lippershey and Zacharias Janssen file patents for spyglasses in Middelburg.' },
      { stage: 'Galileo’s Sidereus Nuncius', period: '1610 CE', description: 'Galileo grinds 30x lenses, discovering the four Galilean moons of Jupiter and phases of Venus.' },
      { stage: 'Van Leeuwenhoek’s Microbiology', period: '1674 CE', description: 'Antonie van Leeuwenhoek grinds high-power single bead lenses, observing bacteria and spermatozoa ("animalcules").' }
    ],
    contributors: [
      { name: 'Hans Lippershey', role: 'inventor', periodOrLifespan: '1570 – 1619 CE', affiliationOrRegion: 'Middelburg, Dutch Republic', contributionNote: 'Constructed the first recorded refracting spyglass in 1608.' },
      { name: 'Galileo Galilei', role: 'co-developer', periodOrLifespan: '1564 – 1642 CE', affiliationOrRegion: 'Padua / Florence', contributionNote: 'First to deploy telescope systematically for astronomical discovery.' },
      { name: 'Antonie van Leeuwenhoek', role: 'contributor', periodOrLifespan: '1632 – 1723 CE', affiliationOrRegion: 'Delft, Dutch Republic', contributionNote: 'Father of microbiology; first to observe microscopic bacteria.' }
    ],
    predecessors: ['scientific-method', 'geometry-euclidean'],
    successors: ['germ-theory', 'classical-mechanics-newton', 'quantum-mechanics', 'satellites-gps'],
    modern_legacy: 'Space telescopes (Hubble, JWST), laser lithography scanners producing microchips, electron microscopes, and endoscopic surgery.',
    sources: [
      { source: 'Galileo Galilei: Sidereus Nuncius (Starry Messenger, 1610)', sourceType: 'academic' },
      { source: 'Royal Society of London: Philosophical Transactions (Leeuwenhoek letters)', sourceType: 'primary_archive' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Galileo%27s_telescope.jpg/800px-Galileo%27s_telescope.jpg',
      caption: 'Surviving telescopes built by Galileo Galilei, preserved at the Museo Galileo, Florence.',
      attribution: 'Museo Galileo / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical instruments built by Galileo and Leeuwenhoek preserved in European museums.'
  },
  {
    id: 'classical-mechanics-newton',
    name: 'Newtonian Classical Mechanics & Universal Gravitation',
    aliases: ['Philosophiae Naturalis Principia Mathematica', 'Newtonian physics', 'Laws of motion'],
    date: '1687 CE',
    date_numeric: 1687,
    date_precision: 'exact',
    era: 'EARLY_MODERN',
    domain: 'SCIENCE',
    type: 'Theoretical Physical Framework',
    region: 'Cambridge, Kingdom of England',
    civilization: 'Scientific Revolution Europe',
    lat: 52.2053,
    lng: 0.1218,
    overview: 'The mathematical unification of terrestrial and celestial motion under three universal laws of motion and the inverse-square law of universal gravitation: F = G(m1 m2)/r^2.',
    why_it_matters: 'Proved for the first time that the same physical laws govern an apple falling from a tree and planets orbiting the Sun, providing the predictive mathematical foundation for all modern engineering.',
    problem_solved: 'Physics had been bifurcated since Aristotle into imperfect, corruptible earthly motion and allegedly divine, circular celestial physics.',
    mechanism: 'Three laws: 1. Inertia (F = 0 implies dv/dt = 0); 2. Force proportional to rate of momentum change (F = ma); 3. Equal and opposite reaction (F_AB = -F_BA). Combined with universal inverse-square gravitational attraction.',
    historical_development: [
      { stage: 'Kepler’s Empirical Planetary Laws', period: '1609 – 1619 CE', description: 'Johannes Kepler mathematically describes elliptical orbits from Tycho Brahe’s observational data.' },
      { stage: 'Newton’s Principia Mathematica', period: '1687 CE', description: 'Sir Isaac Newton derives Kepler’s laws directly from inverse-square gravitation and calculus.' },
      { stage: 'Lagrangian & Hamiltonian Reformulation', period: '1788 – 1834 CE', description: 'Analytical mechanics expressed via principle of least action.' }
    ],
    contributors: [
      { name: 'Sir Isaac Newton', role: 'inventor', periodOrLifespan: '1642 – 1727 CE', affiliationOrRegion: 'Trinity College, Cambridge', contributionNote: 'Authored Principia Mathematica; formulated the laws of motion and gravitation.' },
      { name: 'Johannes Kepler', role: 'theoretical_precursor', periodOrLifespan: '1571 – 1630 CE', affiliationOrRegion: 'Holy Roman Empire', contributionNote: 'Formulated empirical laws of planetary motion.' }
    ],
    predecessors: ['scientific-method', 'geometry-euclidean', 'calculus'],
    successors: ['thermodynamics', 'electromagnetism-maxwell', 'special-general-relativity', 'rocketry-spaceflight'],
    modern_legacy: 'Orbital mechanics guiding every satellite and Mars rover trajectory, structural bridge and skyscraper engineering, and aerospace flight dynamics.',
    sources: [
      { source: 'Newton, I. Philosophiae Naturalis Principia Mathematica (1687)', sourceType: 'academic', sourceUrl: 'https://cudl.lib.cam.ac.uk/view/PR-ADV-B-00039-00001/1' },
      { source: 'Cambridge University Library: Digital Newton Papers', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Principia_title_page.png/800px-Principia_title_page.png',
      caption: 'Title page of Newton’s Principia Mathematica (1687), licensed by Samuel Pepys as President of the Royal Society.',
      attribution: 'Public Domain / Cambridge University Library',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Newton’s handwritten manuscripts and original 1687 first editions in Cambridge archives.'
  },
  {
    id: 'calculus',
    name: 'Infinitesimal Calculus',
    aliases: ['Differential and integral calculus', 'Leibniz-Newton calculus', 'Fluxions'],
    date: '1665 – 1684 CE',
    date_numeric: 1675,
    date_precision: 'decade',
    era: 'EARLY_MODERN',
    domain: 'KNOWLEDGE',
    type: 'Mathematical Framework',
    region: 'England (Newton) & Germany (Leibniz)',
    civilization: 'Scientific Revolution Europe',
    lat: 52.2053,
    lng: 0.1218,
    overview: 'The mathematical study of continuous change, integrating differential rates of change (derivatives) with cumulative totals under curves (integrals) via the Fundamental Theorem of Calculus.',
    why_it_matters: 'The universal language of all dynamic physical systems. Without calculus, physics, aerodynamics, electrical engineering, financial econometrics, and machine learning backpropagation cannot exist.',
    problem_solved: 'Classical algebra could only compute static states and average speeds; it could not compute instantaneous rates of change or areas under arbitrary curves.',
    mechanism: 'Defines functions in terms of infinite limits of infinitesimal differences: df/dx = lim(h->0) [f(x+h) - f(x)] / h. The fundamental theorem proves differentiation and integration are inverse operations.',
    historical_development: [
      { stage: 'Archimedean Method of Exhaustion', period: '~250 BCE', description: 'Ancient precursor bounding areas with inscribed and circumscribed polygons.' },
      { stage: 'Newton’s Method of Fluxions', period: '1665 – 1666 CE', description: 'Newton develops calculus to solve orbital mechanics during the Great Plague of London.' },
      { stage: 'Leibniz’s Differential Calculus', period: '1675 – 1684 CE', description: 'Gottfried Wilhelm Leibniz publishes the superior modern notation (dx, integral sign) independently.' }
    ],
    contributors: [
      { name: 'Sir Isaac Newton', role: 'inventor', periodOrLifespan: '1642 – 1727 CE', affiliationOrRegion: 'Woolsthorpe / Cambridge, England', contributionNote: 'Developed fluxions and fluents for physical mechanics.' },
      { name: 'Gottfried Wilhelm Leibniz', role: 'inventor', periodOrLifespan: '1646 – 1716 CE', affiliationOrRegion: 'Hanover, Holy Roman Empire', contributionNote: 'Independently invented differential notation and published first in Acta Eruditorum (1684).' }
    ],
    predecessors: ['geometry-euclidean', 'mathematics-base60'],
    successors: ['classical-mechanics-newton', 'electromagnetism-maxwell', 'quantum-mechanics', 'neural-networks-backprop'],
    modern_legacy: 'Machine learning gradient descent, aerodynamic fluid simulation (Navier-Stokes), structural stress analysis, and quantitative finance.',
    sources: [
      { source: 'Boyer, C.B. The History of the Calculus and Its Conceptual Development', sourceType: 'academic' },
      { source: 'Acta Eruditorum: Leibniz, G.W. Nova Methodus pro Maximis et Minimis (1684)', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Leibniz_integral.svg/800px-Leibniz_integral.svg.png',
      caption: 'Fundamental theorem of calculus illustrating integration as continuous summation.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Extensive original manuscripts from both Newton and Leibniz preserved and subjected to historical Royal Society inquiry.'
  },

  // ==========================================
  // 4. INDUSTRIAL REVOLUTION & ENERGY
  // ==========================================
  {
    id: 'steam-engine',
    name: 'Condensing Steam Engine',
    aliases: ['Watt steam engine', 'Newcomen atmospheric engine', 'Steam power'],
    date: '1712 – 1769 CE',
    date_numeric: 1769,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'ENERGY',
    type: 'Thermodynamic Power System',
    region: 'Cornwall & Birmingham, Great Britain',
    civilization: 'Industrial Britain',
    lat: 52.4862,
    lng: -1.8904,
    overview: 'The thermodynamic conversion of chemical energy stored in coal into continuous rotary and reciprocal mechanical power through high-pressure steam expansion and separate condensation.',
    why_it_matters: 'The prime mover of the Industrial Revolution. Liberated human industry from the biological limits of animal muscles and the geographic constraints of watermills and wind.',
    problem_solved: 'Deep coal and tin mines flooded rapidly once reaching water tables; animal-driven pumps could not pump out water fast enough to prevent abandonment.',
    mechanism: 'Water is boiled into expanding steam inside a boiler. James Watt added a separate condensing cylinder kept permanently cold, preventing the primary cylinder from repeatedly heating and cooling, slashing fuel consumption by 75%.',
    historical_development: [
      { stage: 'Thomas Newcomen Atmospheric Engine', period: '1712 CE', description: 'First commercial piston engine pumping water from mines, utilizing atmospheric pressure against condensing steam.' },
      { stage: 'James Watt’s Separate Condenser', period: '1769 CE', description: 'Watt patents the separate condenser and sun-and-planet gear for rotary shaft power.' },
      { stage: 'Trevithick High-Pressure Steam', period: '1801 CE', description: 'Eliminates condenser to build lightweight high-pressure mobile locomotives.' }
    ],
    contributors: [
      { name: 'James Watt', role: 'inventor', periodOrLifespan: '1736 – 1819 CE', affiliationOrRegion: 'University of Glasgow / Soho, Birmingham', contributionNote: 'Patented the separate condenser, rotary drive, and steam governor.' },
      { name: 'Thomas Newcomen', role: 'theoretical_precursor', periodOrLifespan: '1664 – 1729 CE', affiliationOrRegion: 'Dartmouth, Devon, England', contributionNote: 'Built the first working atmospheric steam pumping engine.' },
      { name: 'Matthew Boulton', role: 'co-developer', periodOrLifespan: '1728 – 1809 CE', affiliationOrRegion: 'Soho Manufactory, Birmingham', contributionNote: 'Industrialist partner who financed and mass-manufactured Watt’s engines.' }
    ],
    predecessors: ['metallurgy-iron', 'controlled-fire', 'mechanical-clock'],
    successors: ['steam-locomotive', 'thermodynamics', 'electrical-generator', 'internal-combustion-engine'],
    modern_legacy: 'Over 65% of global electricity is still generated by steam expansion turning steam turbines (coal, natural gas, and nuclear power plants).',
    sources: [
      { source: 'Science Museum London: Watt Beam Engine Collections', sourceType: 'institutional', sourceUrl: 'https://collection.sciencemuseumgroup.org.uk/objects/co56360/boulton-and-watt-steam-engine-beam-engine' },
      { source: 'Rolt, L.T.C. James Watt', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/SteamEngine_Boulton%26Watt_1784.png/800px-SteamEngine_Boulton%26Watt_1784.png',
      caption: 'Diagram of a Boulton & Watt rotative steam engine (1784) with separate condenser and governor.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical original 18th-century Boulton & Watt beam engines preserved in working order in London and Sydney museums.'
  },
  {
    id: 'steam-locomotive',
    name: 'Steam Railway Locomotive',
    aliases: ['Railway network', 'Stephenson Rocket', 'Iron Horse'],
    date: '1804 – 1829 CE',
    date_numeric: 1829,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'TRANSPORTATION',
    type: 'Mechanical Transport System',
    region: 'Wales & Newcastle upon Tyne, Great Britain',
    civilization: 'Industrial Britain',
    lat: 54.9783,
    lng: -1.6178,
    overview: 'The integration of high-pressure mobile steam boilers with flanged iron wheels running on smooth iron rails to haul heavy freight and passenger trains across continents.',
    why_it_matters: 'Collapsed travel times from days to hours, integrated national inland economies, created standard time zones, and enabled modern continental logistics.',
    problem_solved: 'Horse-drawn wagons on unpaved roads were paralyzed by mud, could haul only 1–2 tons, and cost an astronomical amount per ton-mile over long overland distances.',
    mechanism: 'High-pressure steam produced in a multi-tube boiler expands against dual pistons driving flanged wheels via connecting rods. Extremely low rolling resistance of steel wheel on steel rail reduces friction to 1/10th of road wagons.',
    historical_development: [
      { stage: 'Trevithick’s Penydarren Locomotive', period: '1804 CE', description: 'Richard Trevithick builds the first locomotive to run on rails in Merthyr Tydfil, Wales.' },
      { stage: 'Stockton and Darlington Railway', period: '1825 CE', description: 'George Stephenson opens the first public railway using locomotive traction.' },
      { stage: 'Rainhill Trials & Stephenson’s Rocket', period: '1829 CE', description: 'The Rocket wins the Rainhill Trials using a multi-tubular boiler and steam blastpipe, setting the universal standard.' }
    ],
    contributors: [
      { name: 'George Stephenson', role: 'inventor', periodOrLifespan: '1781 – 1848 CE', affiliationOrRegion: 'Newcastle, Great Britain', contributionNote: 'Pioneered standard railway gauge (4 ft 8.5 in) and locomotive engineering.' },
      { name: 'Robert Stephenson', role: 'co-developer', periodOrLifespan: '1803 – 1859 CE', affiliationOrRegion: 'Newcastle, Great Britain', contributionNote: 'Chief designer of Stephenson’s Rocket.' },
      { name: 'Richard Trevithick', role: 'theoretical_precursor', periodOrLifespan: '1771 – 1833 CE', affiliationOrRegion: 'Cornwall, Great Britain', contributionNote: 'Built the first operational high-pressure steam rail locomotive.' }
    ],
    predecessors: ['steam-engine', 'the-wheel', 'metallurgy-iron'],
    successors: ['electric-telegraph', 'internal-combustion-engine', 'paved-roads-network'],
    modern_legacy: 'High-speed rail networks (Shinkansen, TGV), heavy freight rail systems carrying global bulk commodities, and urban metro systems.',
    sources: [
      { source: 'National Railway Museum York: Stephenson’s Rocket', sourceType: 'institutional', sourceUrl: 'https://www.railwaymuseum.org.uk/objects-and-stories/stephensons-rocket' },
      { source: 'Smiles, S. The Life of George Stephenson, Railway Engineer', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Stephenson%27s_Rocket_drawing.jpg/800px-Stephenson%27s_Rocket_drawing.jpg',
      caption: 'Original engineering drawing of Stephenson’s Rocket (1829).',
      attribution: 'Public Domain / Science Museum London',
      license: 'Public Domain',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The original Stephenson’s Rocket locomotive is preserved in the Science Museum, London.'
  },
  {
    id: 'thermodynamics',
    name: 'Laws of Thermodynamics & Statistical Mechanics',
    aliases: ['Carnot cycle', 'Entropy', 'Conservation of energy'],
    date: '1824 – 1877 CE',
    date_numeric: 1850,
    date_precision: 'decade',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'SCIENCE',
    type: 'Theoretical Physical Framework',
    region: 'France, Scotland, Germany, Austria',
    civilization: 'Industrial Europe',
    lat: 48.8566,
    lng: 2.3522,
    overview: 'The fundamental physical laws governing heat, work, energy conservation, entropy, and the theoretical limits of thermodynamic efficiency in heat engines.',
    why_it_matters: 'Set the absolute upper boundary for thermal engine efficiency (Carnot efficiency: 1 - Tc/Th), revealed the universal "arrow of time" (entropy increase), and birthed refrigeration and chemical engineering.',
    problem_solved: 'Engineers built steam engines by blind trial-and-error, believing caloric fluid was endless and unaware of fundamental physical limits on work extraction.',
    mechanism: 'First Law: Energy cannot be created or destroyed (dU = dQ - dW). Second Law: Total entropy of an isolated system always increases (dS >= 0). Boltzmann: S = k ln(W), linking macroscopic heat to microstate probabilities.',
    historical_development: [
      { stage: 'Sadi Carnot’s Reflexions sur la puissance motrice du feu', period: '1824 CE', description: 'Carnot proves maximum engine efficiency depends strictly on the temperature difference between hot and cold reservoirs.' },
      { stage: 'Clausius & Kelvin Formulation', period: '1850 – 1854 CE', description: 'Rudolf Clausius defines entropy and formalizes First and Second Laws; Lord Kelvin introduces absolute zero.' },
      { stage: 'Boltzmann’s Statistical Entropy', period: '1877 CE', description: 'Ludwig Boltzmann derives entropy statistically from molecular kinetic probability distributions.' }
    ],
    contributors: [
      { name: 'Nicolas Léonard Sadi Carnot', role: 'inventor', periodOrLifespan: '1796 – 1832 CE', affiliationOrRegion: 'Paris, France', contributionNote: 'Father of thermodynamics; conceived the ideal Carnot cycle.' },
      { name: 'Rudolf Clausius', role: 'co-developer', periodOrLifespan: '1822 – 1888 CE', affiliationOrRegion: 'Bonn, Germany', contributionNote: 'Discovered and named entropy (S).' },
      { name: 'Ludwig Boltzmann', role: 'contributor', periodOrLifespan: '1844 – 1906 CE', affiliationOrRegion: 'Vienna, Austria', contributionNote: 'Bridged thermodynamics to statistical mechanics via S = k ln W.' }
    ],
    predecessors: ['steam-engine', 'classical-mechanics-newton', 'calculus'],
    successors: ['internal-combustion-engine', 'electromagnetism-maxwell', 'quantum-mechanics', 'turing-machine-formal-logic'],
    modern_legacy: 'Refrigeration, air conditioning, jet propulsion, chemical reaction equilibrium, cosmology (heat death of the universe), and Shannon information entropy in AI.',
    sources: [
      { source: 'Carnot, S. Reflections on the Motive Power of Fire (1824)', sourceType: 'academic' },
      { source: 'Fermi, E. Thermodynamics', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Carnot_cycle_p-V_diagram.svg/800px-Carnot_cycle_p-V_diagram.svg.png',
      caption: 'Pressure-volume indicator diagram of the idealized reversible Carnot cycle.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Fundamental physics confirmed through billions of chemical, thermal, and refrigeration systems operating daily.'
  },
  {
    id: 'electric-telegraph',
    name: 'The Electric Telegraph & Morse Code',
    aliases: ['Morse telegraph', 'Cooke-Wheatstone telegraph', 'Victorian Internet'],
    date: '1837 – 1844 CE',
    date_numeric: 1844,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'COMMUNICATION',
    type: 'Telecommunications System',
    region: 'Great Britain & United States',
    civilization: 'Industrial West',
    lat: 38.8951,
    lng: -77.0364,
    overview: 'The transmission of textual information across continents and under oceans at the speed of light via pulsed electrical currents over conducting copper wire lines.',
    why_it_matters: 'Decoupled communication from physical transportation for the first time in human existence, creating the modern telecommunications industry and the global news economy.',
    problem_solved: 'Messages traveled at the speed of a galloping horse or sailing vessel (taking weeks to cross the Atlantic), leaving governments and businesses completely out of sync with events.',
    mechanism: 'An operator depresses a spring key, closing an electrical circuit powered by a chemical battery. At the receiver, an electromagnet energizes, deflecting a needle or imprinting dots and dashes on a moving paper tape.',
    historical_development: [
      { stage: 'Cooke and Wheatstone Five-Needle Telegraph', period: '1837 CE', description: 'Deployed along the Great Western Railway in Britain to prevent train collisions.' },
      { stage: 'Samuel Morse & "What hath God wrought"', period: '1844 CE', description: 'First intercity line between Washington, D.C. and Baltimore transmits historic Morse-coded message.' },
      { stage: 'Transatlantic Subsea Cable', period: '1866 CE', description: 'SS Great Eastern successfully lays the first permanent transatlantic submarine telegraph cable.' }
    ],
    contributors: [
      { name: 'Samuel F. B. Morse', role: 'inventor', periodOrLifespan: '1791 – 1872 CE', affiliationOrRegion: 'New York, United States', contributionNote: 'Developed the single-wire telegraph and dot-dash Morse code.' },
      { name: 'Alfred Vail', role: 'co-developer', periodOrLifespan: '1807 – 1859 CE', affiliationOrRegion: 'Morristown, New Jersey', contributionNote: 'Refined the recording receiver key and balanced alphabet code frequency.' },
      { name: 'William Fothergill Cooke', role: 'co-developer', periodOrLifespan: '1806 – 1879 CE', affiliationOrRegion: 'Great Britain', contributionNote: 'Pioneered commercial railway telegraph networks.' }
    ],
    predecessors: ['steam-locomotive', 'printing-press'],
    successors: ['telephone', 'electromagnetism-maxwell', 'radio-telecommunication', 'internet-arpanet'],
    modern_legacy: 'Submarine fiber-optic internet cables (which follow identical routes to 19th-century telegraph cables), digital packet networks, and ASCII character encoding.',
    sources: [
      { source: 'Smithsonian National Museum of American History: Morse Telegraph Collection', sourceType: 'institutional', sourceUrl: 'https://americanhistory.si.edu/collections/search/object/nmah_713180' },
      { source: 'Standage, T. The Victorian Internet: The Remarkable Story of the Telegraph and the Nineteenth Century’s On-Line Pioneers', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Morse_telegraph.jpg/800px-Morse_telegraph.jpg',
      caption: 'Original Morse telegraph key and paper tape embossing receiver.',
      attribution: 'Public Domain / Smithsonian Institution',
      license: 'Public Domain',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical original 1844 telegraph keys preserved at the Smithsonian Institution.'
  },

  // ==========================================
  // 5. ELECTRIFICATION, BIOLOGY & CHEMISTRY
  // ==========================================
  {
    id: 'electromagnetism-maxwell',
    name: 'Maxwell’s Equations of Electromagnetism',
    aliases: ['Electromagnetic theory', 'Maxwell field equations', 'Classical electrodynamics'],
    date: '1861 – 1865 CE',
    date_numeric: 1865,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'SCIENCE',
    type: 'Theoretical Physical Framework',
    region: 'London & Cambridge, Great Britain',
    civilization: 'Industrial Europe',
    lat: 51.5074,
    lng: -0.1278,
    overview: 'The four unified differential equations proving that electricity, magnetism, and light are manifestations of a single unified phenomenon: the electromagnetic field.',
    why_it_matters: 'Predicted the existence of invisible radio waves travelling at the speed of light, founding the entire infrastructure of wireless communication, electrical engineering, and optics.',
    problem_solved: 'Electric charge (Coulomb) and magnetic attraction (Ampère, Faraday) were treated as separate magical forces without a rigorous field theory explaining how they propagated across space.',
    mechanism: 'Gauss’s laws for electricity and magnetism, Faraday’s law of induction, and Maxwell’s correction (displacement current) showing that a changing electric field generates a magnetic field: curl(B) = mu0 J + mu0 eps0 dE/dt.',
    historical_development: [
      { stage: 'Faraday’s Lines of Force', period: '1831 CE', description: 'Michael Faraday discovers electromagnetic induction by moving a magnet through a wire coil.' },
      { stage: 'Maxwell’s 1865 Paper', period: '1865 CE', description: 'A Dynamical Theory of the Electromagnetic Field publishes the complete system and calculates the speed of light from vacuum permittivity and permeability.' },
      { stage: 'Hertz’s Experimental Verification', period: '1887 CE', description: 'Heinrich Hertz builds a spark-gap transmitter, generating and detecting radio waves for the first time.' }
    ],
    contributors: [
      { name: 'James Clerk Maxwell', role: 'inventor', periodOrLifespan: '1831 – 1879 CE', affiliationOrRegion: 'King’s College London / Cambridge', contributionNote: 'Unified electrodynamics and proved light is an electromagnetic wave.' },
      { name: 'Michael Faraday', role: 'theoretical_precursor', periodOrLifespan: '1791 – 1867 CE', affiliationOrRegion: 'Royal Institution, London', contributionNote: 'Discovered electromagnetic induction and lines of force.' },
      { name: 'Heinrich Hertz', role: 'contributor', periodOrLifespan: '1857 – 1894 CE', affiliationOrRegion: 'Karlsruhe, Germany', contributionNote: 'Experimentally demonstrated radio waves in 1887.' }
    ],
    predecessors: ['calculus', 'classical-mechanics-newton', 'electric-telegraph'],
    successors: ['electrical-generator', 'radio-telecommunication', 'quantum-mechanics', 'special-general-relativity', 'radar'],
    modern_legacy: 'All Wi-Fi, 5G cellular communication, radar, laser optics, MRI medical imaging, electric motors, and electrical power grids.',
    sources: [
      { source: 'Maxwell, J.C. A Dynamical Theory of the Electromagnetic Field (1865)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1098/rstl.1865.0008' },
      { source: 'Feynman, R.P. The Feynman Lectures on Physics, Volume II: Electromagnetism and Matter', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Electromagneticwave3D.gif/800px-Electromagneticwave3D.gif',
      caption: 'Self-propagating orthogonal oscillating electric (E) and magnetic (B) vector fields in an electromagnetic wave.',
      attribution: 'Wikimedia Commons (Public Domain)',
      license: 'Public Domain',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'One of the most experimentally confirmed theoretical systems in physical history.'
  },
  {
    id: 'electrical-generator',
    name: 'Electrical Generation & The AC Power Grid',
    aliases: ['Dynamo', 'Alternating current grid', 'War of Currents', 'Tesla polyphase system'],
    date: '1879 – 1895 CE',
    date_numeric: 1888,
    date_precision: 'decade',
    era: 'ELECTRIFICATION',
    domain: 'ENERGY',
    type: 'Electrical Infrastructure System',
    region: 'United States & Europe (Niagara Falls, New York)',
    civilization: 'Electrification Era West',
    lat: 43.0962,
    lng: -79.0377,
    overview: 'The centralized generation of alternating current (AC) at high voltages using rotating magnetic dynamos, stepped down via transformers to power factories, homes, and motors across hundreds of miles.',
    why_it_matters: 'Electrified the planet. Decoupled machine operations from local fossil boilers, illuminated cities with safe incandescent light, and enabled 24/7 continuous industrial production.',
    problem_solved: 'Thomas Edison’s direct current (DC) lost massive energy to resistance (I^2 R losses) and could only transmit power roughly 1 mile from a generating plant.',
    mechanism: 'Mechanical shaft power spins electromagnetic rotors within copper stator coils, inducing high-voltage AC current. Step-up transformers minimize transmission line current; step-down transformers make it safe at destination sockets.',
    historical_development: [
      { stage: 'Gramme Dynamo', period: '1871 CE', description: 'Zénobe Gramme builds the first industrial continuous DC dynamo.' },
      { stage: 'Tesla’s Polyphase AC Patents', period: '1888 CE', description: 'Nikola Tesla patents polyphase alternating current induction motors and transformers, licensed by George Westinghouse.' },
      { stage: 'Niagara Falls Hydroelectric Plant', period: '1895 CE', description: 'Westinghouse activates the first large-scale AC hydroelectric station, transmitting power 26 miles to Buffalo, NY.' }
    ],
    contributors: [
      { name: 'Nikola Tesla', role: 'inventor', periodOrLifespan: '1856 – 1943 CE', affiliationOrRegion: 'New York, United States', contributionNote: 'Patented polyphase AC transmission, induction motors, and transformers.' },
      { name: 'George Westinghouse', role: 'co-developer', periodOrLifespan: '1846 – 1914 CE', affiliationOrRegion: 'Pittsburgh, Pennsylvania', contributionNote: 'Industrialist who commercialized and championed the AC electrical grid.' },
      { name: 'Thomas A. Edison', role: 'popularizer', periodOrLifespan: '1847 – 1931 CE', affiliationOrRegion: 'Menlo Park, New Jersey', contributionNote: 'Pioneered commercial electrical distribution and incandescent lighting.' }
    ],
    predecessors: ['electromagnetism-maxwell', 'steam-engine'],
    successors: ['telephone', 'radio-telecommunication', 'electronic-computer-eniac', 'silicon-solar-cell'],
    modern_legacy: 'The entire planetary electrical grid powering billions of homes, data centers, factories, and electric vehicle charging corridors.',
    sources: [
      { source: 'IEEE History Center: Milestones in Electrical Engineering - Niagara Falls Hydroelectric Power', sourceType: 'institutional', sourceUrl: 'https://ethw.org/Milestones:Adams_Hydroelectric_Generating_Plant,_1895' },
      { source: 'Jonnes, J. Empires of Light: Edison, Tesla, Westinghouse, and the Race to Electrify the World', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tesla_polyphase_induction_motor_patent_1888.jpg/800px-Tesla_polyphase_induction_motor_patent_1888.jpg',
      caption: 'Nikola Tesla’s 1888 US Patent 381,968 for the polyphase AC induction motor.',
      attribution: 'Public Domain / US Patent and Trademark Office',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'US Patent records, original generating equipment at Niagara, and IEEE milestone archives.'
  },
  {
    id: 'germ-theory',
    name: 'Germ Theory of Disease & Antiseptic Surgery',
    aliases: ['Microbial pathogenesis', 'Pasteurization', 'Listerian antisepsis'],
    date: '1861 – 1884 CE',
    date_numeric: 1876,
    date_precision: 'decade',
    era: 'ELECTRIFICATION',
    domain: 'MEDICINE',
    type: 'Biomedical Paradigm & Clinical Practice',
    region: 'France (Pasteur), Germany (Koch), Scotland (Lister)',
    civilization: 'Industrial Europe',
    lat: 48.8566,
    lng: 2.3522,
    overview: 'The scientific discovery that infectious diseases and postoperative infections are caused by specific microscopic microorganisms (bacteria, viruses), disproving spontaneous generation and miasma theory.',
    why_it_matters: 'Doubled human life expectancy worldwide. Transformed hospitals from lethal death houses into healing sanctuaries and eradicated cholera, typhoid, and surgical gangrene.',
    problem_solved: 'Surgeons operated in pus-soaked frocks with unwashed hands; half of all surgical patients died of sepsis, and cholera outbreaks were blamed on "bad air" (miasma).',
    mechanism: 'Pathogens enter tissues and multiply, releasing toxins. Disinfecting surgical tools with carbolic acid (phenol), boiling instruments, pasteurizing fluids, and isolating bacterial cultures (Koch’s postulates) halts microbial transmission.',
    historical_development: [
      { stage: 'Semmelweis & Handwashing', period: '1847 CE', description: 'Ignaz Semmelweis in Vienna dramatically reduces puerperal fever deaths by requiring chlorinated lime handwashing.' },
      { stage: 'Pasteur Disproves Spontaneous Generation', period: '1861 CE', description: 'Louis Pasteur’s swan-neck flask experiment proves microbes come from airborne contamination, not spontaneous generation.' },
      { stage: 'Lister’s Antiseptic Surgery', period: '1867 CE', description: 'Joseph Lister sprays carbolic acid on incisions, reducing postoperative surgical amputation mortality from 45% to 15%.' },
      { stage: 'Koch’s Postulates & Tuberculosis', period: '1882 CE', description: 'Robert Koch isolates Mycobacterium tuberculosis and Vibrio cholerae, establishing microbiological causality criteria.' }
    ],
    contributors: [
      { name: 'Louis Pasteur', role: 'inventor', periodOrLifespan: '1822 – 1895 CE', affiliationOrRegion: 'Institut Pasteur, Paris', contributionNote: 'Proved microbial fermentation and disproved spontaneous generation.' },
      { name: 'Robert Koch', role: 'co-developer', periodOrLifespan: '1843 – 1910 CE', affiliationOrRegion: 'Berlin, Germany', contributionNote: 'Established Koch’s Postulates; isolated tuberculosis and anthrax bacilli.' },
      { name: 'Joseph Lister', role: 'co-developer', periodOrLifespan: '1827 – 1912 CE', affiliationOrRegion: 'Glasgow / Edinburgh, Scotland', contributionNote: 'Introduced carbolic acid antiseptic surgery.' }
    ],
    predecessors: ['optics-microscope-telescope', 'scientific-method'],
    successors: ['antibiotics-penicillin', 'dna-double-helix'],
    modern_legacy: 'Modern sterile surgical theaters, clean municipal water treatment, pharmaceutical sterilization, vaccines, and pandemic epidemiology.',
    sources: [
      { source: 'Pasteur, L. Mémoire sur la fermentation appelée lactique (1857)', sourceType: 'academic' },
      { source: 'Lister, J. On the Antiseptic Principle in the Practice of Surgery (The Lancet, 1867)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1016/S0140-6736(02)51810-8' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pasteur_swan_neck_flask.jpg/800px-Pasteur_swan_neck_flask.jpg',
      caption: 'Original swan-neck flasks used by Louis Pasteur to disprove spontaneous generation, Musée Pasteur, Paris.',
      attribution: 'Institut Pasteur / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical laboratory equipment preserved at Institut Pasteur and Wellcome Collection.'
  },
  {
    id: 'evolution-natural-selection',
    name: 'Theory of Evolution by Natural Selection',
    aliases: ['Darwinian evolution', 'On the Origin of Species', 'Natural selection'],
    date: '1858 – 1859 CE',
    date_numeric: 1859,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'SCIENCE',
    type: 'Theoretical Biological Framework',
    region: 'Down House, Kent & Malay Archipelago',
    civilization: 'Victorian Britain',
    lat: 51.3328,
    lng: 0.0528,
    overview: 'The overarching scientific theory that all biological species descend from common ancestors through heritable phenotypic variation and differential reproductive survival under environmental pressures.',
    why_it_matters: 'The unifying theory of all life sciences. Explained the biodiversity of Earth without teleology and established the biological lineage connecting humans to all living organisms.',
    problem_solved: 'Fossil record anomalies, homologous anatomical structures, and biogeographic adaptation were attributed to arbitrary supernatural creation or Lamarckian use-inheritance.',
    mechanism: '1. Overproduction of offspring; 2. Heritable variation; 3. Competition for limited resources; 4. Organisms with advantageous traits survive and reproduce more successfully, shifting population allele frequencies over generations.',
    historical_development: [
      { stage: 'Voyage of HMS Beagle', period: '1831 – 1836 CE', description: 'Charles Darwin collects finches, tortoises, and fossils across the Galápagos and South America.' },
      { stage: 'Joint Linnean Society Presentation', period: '1858 CE', description: 'Alfred Russel Wallace independently formulates natural selection; joint paper read at the Linnean Society of London.' },
      { stage: 'Publication of On the Origin of Species', period: '1859 CE', description: 'Darwin publishes On the Origin of Species by Means of Natural Selection, selling out on day one.' }
    ],
    contributors: [
      { name: 'Charles Darwin', role: 'inventor', periodOrLifespan: '1809 – 1882 CE', affiliationOrRegion: 'Down House, Kent, England', contributionNote: 'Formulated the theory and amassed comprehensive evidence in Origin of Species.' },
      { name: 'Alfred Russel Wallace', role: 'co-developer', periodOrLifespan: '1823 – 1913 CE', affiliationOrRegion: 'Malay Archipelago / Wales', contributionNote: 'Independently co-discovered natural selection while collecting in Indonesia.' }
    ],
    predecessors: ['scientific-method', 'optics-microscope-telescope'],
    successors: ['dna-double-helix', 'neural-networks-backprop'],
    modern_legacy: 'Evolutionary medicine (antibiotic resistance tracking), agricultural genetics, synthetic biology, and genetic algorithms in artificial intelligence.',
    sources: [
      { source: 'Darwin, C. On the Origin of Species by Means of Natural Selection (1859)', sourceType: 'academic', sourceUrl: 'http://darwin-online.org.uk/content/frameset?itemID=F373&viewtype=text&pageseq=1' },
      { source: 'Linnean Society of London: Darwin-Wallace 1858 papers', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Darwins_first_tree.jpg/800px-Darwins_first_tree.jpg',
      caption: 'Darwin’s famous "I think" sketch from his 1837 Notebook B, the first evolutionary phylogenetic tree diagram.',
      attribution: 'Public Domain / Cambridge University Library',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Darwin’s original field notebooks preserved in Cambridge University Library; verified by millions of genomic sequences.'
  },
  {
    id: 'internal-combustion-engine',
    name: 'Internal Combustion Engine (Four-Stroke)',
    aliases: ['Four-stroke engine', 'Otto cycle', 'Diesel engine', 'Automotive powertrain'],
    date: '1876 – 1892 CE',
    date_numeric: 1876,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'ENGINEERING',
    type: 'Thermodynamic Power System',
    region: 'Cologne & Mannheim, Germany',
    civilization: 'Industrial Germany',
    lat: 50.9375,
    lng: 6.9603,
    overview: 'The high-energy-density conversion of liquid hydrocarbons directly into mechanical rotary work by compressing and igniting fuel-air mixtures inside a closed cylinder.',
    why_it_matters: 'Replaced massive, heavy steam engines with compact, high power-to-weight mobile powertrains, enabling automobiles, airplanes, diesel locomotives, and container ships.',
    problem_solved: 'Steam engines required heavy boilers, hours to generate pressure, and tons of water, making individual personal vehicles and heavier-than-air flight impossible.',
    mechanism: 'The four-stroke Otto cycle: 1. Intake (fuel-air drawn in); 2. Compression (piston compresses mixture); 3. Power (spark ignition expands hot gas, driving piston); 4. Exhaust (burned gas expelled). Rudolf Diesel patented compression-ignition in 1892.',
    historical_development: [
      { stage: 'Nikolaus Otto Four-Stroke Cycle', period: '1876 CE', description: 'Otto in Cologne builds the first practical four-stroke gas engine (Silent Otto).' },
      { stage: 'Benz Motorwagen', period: '1886 CE', description: 'Karl Benz mounts a lightweight four-stroke single-cylinder engine on a tubular chassis, creating the first automobile.' },
      { stage: 'Diesel Compression-Ignition Engine', period: '1892 – 1897 CE', description: 'Rudolf Diesel achieves higher thermal efficiency by compressing air until spontaneous ignition occurs upon fuel injection.' }
    ],
    contributors: [
      { name: 'Nikolaus August Otto', role: 'inventor', periodOrLifespan: '1832 – 1891 CE', affiliationOrRegion: 'Deutz AG, Cologne, Germany', contributionNote: 'Invented the four-stroke spark-ignition internal combustion engine.' },
      { name: 'Karl Benz', role: 'co-developer', periodOrLifespan: '1844 – 1929 CE', affiliationOrRegion: 'Mannheim, Germany', contributionNote: 'Built the first integrated petroleum-fueled automobile (Patent-Motorwagen).' },
      { name: 'Rudolf Diesel', role: 'co-developer', periodOrLifespan: '1858 – 1913 CE', affiliationOrRegion: 'Augsburg, Germany', contributionNote: 'Invented the high-efficiency compression-ignition diesel engine.' }
    ],
    predecessors: ['steam-engine', 'thermodynamics', 'metallurgy-iron'],
    successors: ['internal-combustion-engine', 'aviation-powered-flight'],
    modern_legacy: 'Powers billions of road vehicles, diesel freight trains, maritime container fleets, agricultural combines, and emergency hospital generators.',
    sources: [
      { source: 'Deutsches Museum Munich: Otto and Diesel Engine Collections', sourceType: 'institutional', sourceUrl: 'https://www.deutsches-museum.de/en/exhibitions/energy/engines/otto-engine' },
      { source: 'Cummins, C.L. Internal Fire: The Internal Combustion Engine 1673-1900', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Benz_Patent_Motorwagen_Nr_1.jpg/800px-Benz_Patent_Motorwagen_Nr_1.jpg',
      caption: 'The 1886 Benz Patent-Motorwagen No. 1, the world’s first production automobile.',
      attribution: 'Deutsches Museum / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Original 1886 Benz Patent Motorwagen and Otto prototype preserved at Deutsches Museum, Munich.'
  },
  {
    id: 'telephone',
    name: 'The Telephone & Voice Telephony',
    aliases: ['Acoustic telegraph', 'Bell telephone', 'Voice transmission'],
    date: '1876 CE',
    date_numeric: 1876,
    date_precision: 'exact',
    era: 'ELECTRIFICATION',
    domain: 'COMMUNICATION',
    type: 'Telecommunications System',
    region: 'Boston, Massachusetts, United States',
    civilization: 'Electrification Era West',
    lat: 42.3601,
    lng: -71.0589,
    overview: 'The continuous electrical transmission of articulate human speech over copper wires by converting acoustic sound waves into modulated analog electrical voltages.',
    why_it_matters: 'Replaced slow, coded telegraphy with instantaneous, conversational human voice connection, laying the physical telecommunication network topology that later bore the Internet.',
    problem_solved: 'Telegraphs required specialized Morse operators, could not convey emotional nuance or urgent immediate dialogue, and had severe channel bandwidth bottlenecks.',
    mechanism: 'Acoustic air pressure waves strike a flexible diaphragm connected to a variable resistance carbon microphone or electromagnetic coil, modulating electrical current in exact analog proportion to sound frequency and amplitude.',
    historical_development: [
      { stage: 'Antonio Meucci’s Telettrofono', period: '1854 – 1871 CE', description: 'Meucci demonstrates electromagnetic voice transmission in Staten Island but cannot afford patent fees.' },
      { stage: 'Bell’s US Patent 174,465', period: '1876 CE', description: 'Alexander Graham Bell transmits "Mr. Watson, come here, I want to see you" on March 10, 1876.' },
      { stage: 'Strowger Automated Step-by-Step Switch', period: '1889 CE', description: 'Almon Brown Strowger invents electromechanical automated telephone exchange, eliminating human switchboard operators.' }
    ],
    contributors: [
      { name: 'Alexander Graham Bell', role: 'inventor', periodOrLifespan: '1847 – 1922 CE', affiliationOrRegion: 'Boston, Massachusetts', contributionNote: 'Awarded landmark US Patent 174,465 for transmitting vocal sounds telegraphically.' },
      { name: 'Elisha Gray', role: 'co-developer', periodOrLifespan: '1835 – 1901 CE', affiliationOrRegion: 'Chicago, Illinois', contributionNote: 'Filed patent caveat on the exact same day as Bell; invented liquid transmitter.' },
      { name: 'Antonio Meucci', role: 'theoretical_precursor', periodOrLifespan: '1808 – 1889 CE', affiliationOrRegion: 'Florence / Staten Island', contributionNote: 'Early electromagnetic voice communication experiments.' }
    ],
    predecessors: ['electric-telegraph', 'electromagnetism-maxwell'],
    successors: ['radio-telecommunication', 'internet-arpanet', 'smartphone-mobile'],
    modern_legacy: 'Voice over IP (VoIP), cellular telecommunications standards (GSM, 5G), conference calls, and telecommunications switched networks.',
    sources: [
      { source: 'US Patent Office: Patent 174,465 - Improvement in Telegraphy', sourceType: 'primary_archive', sourceUrl: 'https://patents.google.com/patent/US174465A/en' },
      { source: 'Library of Congress: Alexander Graham Bell Family Papers', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Alexander_Graham_Bell%27s_Telephone_Patent_Drawing.jpg/800px-Alexander_Graham_Bell%27s_Telephone_Patent_Drawing.jpg',
      caption: 'Patent drawing from Alexander Graham Bell’s 1876 US Patent No. 174,465 for the telephone.',
      attribution: 'Public Domain / US Patent and Trademark Office',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'US patent dispute records and physical original Bell transmitter at the Smithsonian Institution.'
  },
  {
    id: 'radio-telecommunication',
    name: 'Wireless Radio Telecommunication',
    aliases: ['Wireless telegraphy', 'Hertzian waves', 'Radio broadcast', 'Marconi wireless'],
    date: '1895 – 1901 CE',
    date_numeric: 1895,
    date_precision: 'decade',
    era: 'ELECTRIFICATION',
    domain: 'COMMUNICATION',
    type: 'Wireless Transmission System',
    region: 'Bologna, Italy → Poldhu, Cornwall to St. John’s, Newfoundland',
    civilization: 'Electrification Era West',
    lat: 44.4949,
    lng: 11.3426,
    overview: 'The modulation and transmission of electromagnetic radio waves across the atmosphere and oceans without physical connecting cables.',
    why_it_matters: 'Allowed communication with moving ships at sea, aircraft, and spacecraft, founding mass broadcast media and the wireless electromagnetic spectrum.',
    problem_solved: 'Ships in distress at sea had no way to call for rescue beyond visual flares; overland cables were vulnerable to cuts and could not reach moving vehicles.',
    mechanism: 'High-frequency oscillating alternating currents in a transmitting antenna accelerate electrons, radiating transverse electromagnetic waves through free space, which induce corresponding electrical oscillations in receiver antennas.',
    historical_development: [
      { stage: 'Jagadish Chandra Bose Millimetre Waves', period: '1895 CE', description: 'JC Bose in Kolkata demonstrates 60 GHz microwave transmission, inventing semiconductor galena crystal detectors.' },
      { stage: 'Guglielmo Marconi Wireless Telegraphy', period: '1895 – 1897 CE', description: 'Marconi transmits signals over hills in Bologna and patents wireless telegraphy in Britain.' },
      { stage: 'Transatlantic Wireless Transmission', period: '1901 CE', description: 'Marconi transmits the Morse letter "S" across 2,100 miles from Cornwall to Newfoundland, disproving curvature absorption theories.' }
    ],
    contributors: [
      { name: 'Guglielmo Marconi', role: 'inventor', periodOrLifespan: '1874 – 1937 CE', affiliationOrRegion: 'Bologna, Italy / Chelmsford, UK', contributionNote: 'Awarded 1909 Nobel Prize in Physics for wireless telegraphy.' },
      { name: 'Sir Jagadish Chandra Bose', role: 'theoretical_precursor', periodOrLifespan: '1858 – 1937 CE', affiliationOrRegion: 'Presidency College, Kolkata, India', contributionNote: 'Pioneered microwave optics and crystal semiconductor radio wave detectors.' },
      { name: 'Nikola Tesla', role: 'theoretical_precursor', periodOrLifespan: '1856 – 1943 CE', affiliationOrRegion: 'New York, United States', contributionNote: 'Demonstrated resonant tuned radio frequency circuits and remote control boat (1898).' }
    ],
    predecessors: ['electromagnetism-maxwell', 'electric-telegraph', 'chronometer-longitude'],
    successors: ['radar', 'radio-telecommunication', 'satellites-gps', 'internet-arpanet', 'satellites-gps'],
    modern_legacy: 'Cellular networks (4G/5G), Wi-Fi, Bluetooth, aerospace telemetry, deep-space telemetry (Voyager, James Webb), and air traffic control.',
    sources: [
      { source: 'Nobel Prize in Physics 1909: Guglielmo Marconi and Ferdinand Braun', sourceType: 'institutional', sourceUrl: 'https://www.nobelprize.org/prizes/physics/1909/summary/' },
      { source: 'IEEE Milestone: Jagadish Chandra Bose’s Millimetre Wave Research (1895)', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Marconi_with_apparatus.jpg/800px-Marconi_with_apparatus.jpg',
      caption: 'Guglielmo Marconi demonstrating his early wireless telegraph transmitter and coherer receiver apparatus.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Verified in patent archives, Nobel Foundation archives, and historical wireless stations.'
  },
  {
    id: 'aviation-powered-flight',
    name: 'Heavier-Than-Air Powered Aviation',
    aliases: ['Wright Flyer', 'Airplane', 'Three-axis aerodynamic control'],
    date: 'December 17, 1903 CE',
    date_numeric: 1903,
    date_precision: 'exact',
    era: 'ELECTRIFICATION',
    domain: 'TRANSPORTATION',
    type: 'Aeronautical Transport System',
    region: 'Kitty Hawk & Kill Devil Hills, North Carolina, United States',
    civilization: 'Industrial United States',
    lat: 36.0150,
    lng: -75.6680,
    overview: 'The design and flight of the first sustained, controlled, heavier-than-air powered aircraft utilizing aerodynamic three-axis flight control (pitch, roll, and yaw).',
    why_it_matters: 'Opened the third dimension to human transportation, collapsing global travel times from months to hours and transforming global trade, warfare, and cultural exchange.',
    problem_solved: 'Previous experimenters built gliders that lacked power or uncontrolled machines that fatally crashed (e.g. Otto Lilienthal); none had solved lateral roll control.',
    mechanism: 'Cambered wings generate aerodynamic lift per Bernoulli’s principle and Newton’s third law. The Wrights solved flight stability using wing-warping for roll, an elevator for pitch, and a linked rudder for yaw to counteract adverse yaw.',
    historical_development: [
      { stage: 'Wind Tunnel Foil Testing', period: '1901 CE', description: 'Orville and Wilbur Wright test over 200 miniature airfoil shapes in their custom bicycle shop wind tunnel.' },
      { stage: 'Kitty Hawk First Flights', period: 'December 17, 1903 CE', description: 'Four flights at Kill Devil Hills; the longest covers 852 feet in 59 seconds.' },
      { stage: 'Wright Flyer III Practical Flights', period: '1905 CE', description: 'The Wrights complete continuous 38-minute circular flights, demonstrating a fully practical operational airplane.' }
    ],
    contributors: [
      { name: 'Orville Wright', role: 'inventor', periodOrLifespan: '1871 – 1948 CE', affiliationOrRegion: 'Dayton, Ohio', contributionNote: 'Piloted the historic 12-second first flight at Kitty Hawk.' },
      { name: 'Wilbur Wright', role: 'inventor', periodOrLifespan: '1867 – 1912 CE', affiliationOrRegion: 'Dayton, Ohio', contributionNote: 'Conceived aerodynamic three-axis roll control via wing warping.' },
      { name: 'Charlie Taylor', role: 'co-developer', periodOrLifespan: '1868 – 1956 CE', affiliationOrRegion: 'Dayton, Ohio', contributionNote: 'Built the lightweight 12-horsepower cast aluminum engine in six weeks.' }
    ],
    predecessors: ['internal-combustion-engine', 'classical-mechanics-newton'],
    successors: ['radar', 'rocketry-spaceflight'],
    modern_legacy: 'Global commercial airline fleets carrying 4.5 billion passengers annually, international air freight logistics, and aerospace planetary exploration.',
    sources: [
      { source: 'Smithsonian National Air and Space Museum: The 1903 Wright Flyer', sourceType: 'institutional', sourceUrl: 'https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000' },
      { source: 'Crouch, T.D. The Bishop’s Boys: A Life of Wilbur and Orville Wright', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/800px-First_flight2.jpg',
      caption: 'The historic first powered flight at Kitty Hawk, NC, photographed by John T. Daniels on December 17, 1903.',
      attribution: 'John T. Daniels / Library of Congress (Public Domain)',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical original 1903 Wright Flyer exhibited at the Smithsonian National Air and Space Museum.'
  },

  // ==========================================
  // 6. MODERN PHYSICS, RADAR & ATOMIC ENERGY
  // ==========================================
  {
    id: 'special-general-relativity',
    name: 'Special & General Relativity',
    aliases: ['Einsteinian relativity', 'Spacetime curvature', 'E=mc^2'],
    date: '1905 – 1915 CE',
    date_numeric: 1915,
    date_precision: 'exact',
    era: 'ELECTRIFICATION',
    domain: 'SCIENCE',
    type: 'Theoretical Physical Framework',
    region: 'Bern, Switzerland & Berlin, Germany',
    civilization: 'Early 20th Century Europe',
    lat: 52.5200,
    lng: 13.4050,
    overview: 'The fundamental reformulation of physics demonstrating that space and time are inextricably intertwined into four-dimensional spacetime, curved by mass-energy: G_mu_nu = (8 pi G / c^4) T_mu_nu.',
    why_it_matters: 'Replaced Newtonian gravity, revealed the equivalence of mass and energy (E = mc^2, predicting nuclear power), and is essential for GPS satellite navigation accuracy.',
    problem_solved: 'Newtonian mechanics assumed absolute, universal time and could not explain the constant speed of light measured in the Michelson-Morley experiment or the orbital precession of Mercury.',
    mechanism: 'Light speed c in vacuum is identical for all inertial observers regardless of relative motion. Gravity is not a Newtonian pulling force, but the geodesic motion of matter following paths of least resistance through spacetime curved by mass-energy.',
    historical_development: [
      { stage: 'Annus Mirabilis (Special Relativity)', period: '1905 CE', description: 'Albert Einstein publishes On the Electrodynamics of Moving Bodies, establishing time dilation, length contraction, and E = mc^2.' },
      { stage: 'Field Equations of General Relativity', period: '1915 CE', description: 'Einstein presents the field equations to the Prussian Academy of Sciences, correctly calculating Mercury’s perihelion shift.' },
      { stage: 'Eddington’s 1919 Solar Eclipse Verification', period: '1919 CE', description: 'Sir Arthur Eddington photographs stars during a total solar eclipse, confirming gravitational light bending.' }
    ],
    contributors: [
      { name: 'Albert Einstein', role: 'inventor', periodOrLifespan: '1879 – 1955 CE', affiliationOrRegion: 'Swiss Patent Office / Berlin / Princeton', contributionNote: 'Formulated Special and General Theories of Relativity.' },
      { name: 'Hendrik Lorentz', role: 'theoretical_precursor', periodOrLifespan: '1853 – 1928 CE', affiliationOrRegion: 'Leiden, Netherlands', contributionNote: 'Formulated the Lorentz transformation equations.' }
    ],
    predecessors: ['electromagnetism-maxwell', 'classical-mechanics-newton', 'calculus'],
    successors: ['nuclear-fission', 'quantum-mechanics', 'satellites-gps'],
    modern_legacy: 'GPS satellite relativistic clock correction (+38 microseconds/day), astrophysics, black hole imaging (Event Horizon Telescope), and gravitational wave astronomy (LIGO).',
    sources: [
      { source: 'Einstein, A. Die Grundlage der allgemeinen Relativitätstheorie (Annalen der Physik, 1916)', sourceType: 'academic' },
      { source: 'Pais, A. Subtle is the Lord: The Science and the Life of Albert Einstein', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg',
      caption: 'Albert Einstein in 1921, the year he was awarded the Nobel Prize in Physics.',
      attribution: 'Ferdinand Schmutzer / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Verified to extraordinary precision by atomic clocks, gravitational lensing, and direct LIGO gravitational wave detections.'
  },
  {
    id: 'quantum-mechanics',
    name: 'Quantum Mechanics & Wave-Particle Duality',
    aliases: ['Quantum theory', 'Schrödinger equation', 'Heisenberg uncertainty', 'Wave mechanics'],
    date: '1900 – 1927 CE',
    date_numeric: 1925,
    date_precision: 'decade',
    era: 'ELECTRIFICATION',
    domain: 'SCIENCE',
    type: 'Theoretical Physical Framework',
    region: 'Germany, Denmark, Austria, Great Britain',
    civilization: 'Interwar Europe',
    lat: 55.6761,
    lng: 12.5683,
    overview: 'The fundamental physical theory describing matter and energy at atomic and subatomic scales, where energy is quantized into discrete packets and matter exhibits wave-particle duality.',
    why_it_matters: 'The foundation of all modern electronics. Without quantum mechanics, semiconductors, silicon microprocessors, lasers, LEDs, solar cells, and MRI scanners cannot function.',
    problem_solved: 'Classical physics failed completely at atomic scales, predicting that atoms would instantly collapse via electron radiation (ultraviolet catastrophe).',
    mechanism: 'Physical states are described by complex wavefunctions psi obeying the Schrödinger equation: i hbar (d psi/dt) = H psi. Physical observables are probabilistic, governed by Heisenberg’s uncertainty principle: Delta x * Delta p >= hbar / 2.',
    historical_development: [
      { stage: 'Planck’s Energy Quanta', period: '1900 CE', description: 'Max Planck solves black-body radiation by assuming energy is emitted in discrete packets E = h f.' },
      { stage: 'Einstein’s Photoelectric Effect', period: '1905 CE', description: 'Einstein proves light consists of localized particle-like photons.' },
      { stage: 'Bohr Atom & Matrix Mechanics', period: '1913 – 1925 CE', description: 'Niels Bohr quantizes atomic orbits; Werner Heisenberg develops matrix mechanics.' },
      { stage: 'Schrödinger Wave Equation & Solvay 1927', period: '1926 – 1927 CE', description: 'Erwin Schrödinger formulates wave equation; 1927 Solvay Conference establishes Copenhagen consensus.' }
    ],
    contributors: [
      { name: 'Max Planck', role: 'inventor', periodOrLifespan: '1858 – 1947 CE', affiliationOrRegion: 'Berlin, Germany', contributionNote: 'Introduced Planck’s constant h and energy quantization.' },
      { name: 'Niels Bohr', role: 'co-developer', periodOrLifespan: '1885 – 1962 CE', affiliationOrRegion: 'Copenhagen, Denmark', contributionNote: 'Developed the quantized orbital model of the atom and complementarity.' },
      { name: 'Werner Heisenberg', role: 'co-developer', periodOrLifespan: '1901 – 1976 CE', affiliationOrRegion: 'Göttingen, Germany', contributionNote: 'Formulated matrix mechanics and the uncertainty principle.' },
      { name: 'Erwin Schrödinger', role: 'co-developer', periodOrLifespan: '1887 – 1961 CE', affiliationOrRegion: 'Zurich / Vienna', contributionNote: 'Formulated the fundamental wave mechanics equation.' }
    ],
    predecessors: ['electromagnetism-maxwell', 'calculus', 'special-general-relativity'],
    successors: ['transistor-semiconductor', 'silicon-integrated-circuit', 'optics-microscope-telescope', 'quantum-computing'],
    modern_legacy: 'Silicon computer chips, solid-state lasers, flash memory, flash quantum cryptography, and superconducting quantum computers.',
    sources: [
      { source: 'Solvay Conference 1927 Proceedings: Electrons and Photons', sourceType: 'primary_archive' },
      { source: 'Dirac, P.A.M. The Principles of Quantum Mechanics', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Solvay_conference_1927.jpg/800px-Solvay_conference_1927.jpg',
      caption: 'The famous 1927 Fifth Solvay Conference in Brussels, featuring Einstein, Bohr, Curie, Planck, Heisenberg, and Schrödinger.',
      attribution: 'Benjamin Couprie / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The most rigorously tested physical theory in science, verified to greater than 10 decimal places in quantum electrodynamics.'
  },
  {
    id: 'radar',
    name: 'RADAR (Radio Detection and Ranging)',
    aliases: ['Radar', 'Cavity magnetron', 'Radio echo location'],
    date: '1935 – 1940 CE',
    date_numeric: 1935,
    date_precision: 'decade',
    era: 'ELECTRIFICATION',
    domain: 'NAVIGATION',
    type: 'Electromagnetic Sensing System',
    region: 'Great Britain (Orfordness / Bawdsey Manor) & United States',
    civilization: 'Mid-20th Century Allied Science',
    lat: 52.0080,
    lng: 1.4170,
    overview: 'The active transmission of directional pulses of high-frequency microwave radio waves, detecting targets by timing the reflected echoes to compute exact range, azimuth, and velocity.',
    why_it_matters: 'Decided the Battle of Britain, eliminated the tactical surprise of air attacks, and evolved into weather forecasting, air traffic control, and synthetic aperture radar mapping.',
    problem_solved: 'Air defense relied on acoustic listening trumpets with a range of only 3 miles, giving less than two minutes warning before incoming bomber attacks arrived overhead.',
    mechanism: 'Cavity magnetron valves generate high-power microwave pulses. Pulses radiate from an antenna; reflections bounce off conductive metallic aircraft skins back to the receiver: Distance = (c * Delta t) / 2.',
    historical_development: [
      { stage: 'Robert Watson-Watt’s Daventry Experiment', period: 'February 1935 CE', description: 'Watson-Watt and Arnold Wilkins demonstrate radar reflection from a Heyford bomber over Daventry.' },
      { stage: 'Chain Home Radar Network', period: '1938 – 1940 CE', description: 'First operational radar defense network built along Britain’s southern and eastern coasts.' },
      { stage: 'Randall and Boot Cavity Magnetron', period: '1940 CE', description: 'University of Birmingham researchers invent the resonant cavity magnetron, creating centimetric microwave radar compact enough for aircraft noses.' }
    ],
    contributors: [
      { name: 'Sir Robert Watson-Watt', role: 'inventor', periodOrLifespan: '1892 – 1973 CE', affiliationOrRegion: 'Radio Research Station, Slough, UK', contributionNote: 'Pioneered pulsed radio direction finding and Chain Home.' },
      { name: 'John Randall', role: 'co-developer', periodOrLifespan: '1905 – 1984 CE', affiliationOrRegion: 'University of Birmingham', contributionNote: 'Co-invented the high-power cavity magnetron.' },
      { name: 'Harry Boot', role: 'co-developer', periodOrLifespan: '1917 – 1983 CE', affiliationOrRegion: 'University of Birmingham', contributionNote: 'Co-invented the cavity magnetron with John Randall.' }
    ],
    predecessors: ['radio-telecommunication', 'electromagnetism-maxwell', 'navigation-maritime'],
    successors: ['satellites-gps', 'autonomous-navigation', 'radar'],
    modern_legacy: 'Automated air traffic collision avoidance (TCAS), automotive millimeter-wave radar for autonomous emergency braking, Doppler weather radar, and planetary radar.',
    sources: [
      { source: 'Imperial War Museums: The Invention of Radar', sourceType: 'institutional', sourceUrl: 'https://www.iwm.org.uk/history/how-radar-won-the-battle-of-britain' },
      { source: 'Buderi, R. The Invention That Changed the World: How a Small Group of Radar Pioneers Won the Second World War', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chain_Home_radar_towers.jpg/800px-Chain_Home_radar_towers.jpg',
      caption: 'Chain Home radar transmitter towers at Great Baddow, UK, crucial to the defense of Britain in 1940.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical Chain Home towers, original magnetrons at the Science Museum London, and declassified military operational logs.'
  },
  {
    id: 'antibiotics-penicillin',
    name: 'Antibiotics & Mass Penicillin Fermentation',
    aliases: ['Penicillin', 'Beta-lactam antibiotics', 'Fleming discovery', 'Florey-Chain development'],
    date: '1928 – 1942 CE',
    date_numeric: 1941,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'MEDICINE',
    type: 'Biochemical / Pharmacology System',
    region: 'St Mary’s Hospital London & Oxford University, UK → Peoria, Illinois',
    civilization: 'Mid-20th Century Allied Science',
    lat: 51.5173,
    lng: -0.1746,
    overview: 'The discovery of the natural bactericidal mold Penicillium notatum and subsequent chemical purification and deep-tank corn steep liquor fermentation into mass medical penicillin.',
    why_it_matters: 'Ended humanity’s vulnerability to fatal bacterial septicemia, transforming pneumonia, strep throat, and infected scratches from death sentences into routine outpatient ailments.',
    problem_solved: 'Bacterial infections were uncontrollable once established in tissues; simple battlefield wound infections or childhood pneumonia routinely killed tens of millions.',
    mechanism: 'Penicillin’s beta-lactam ring binds to transpeptidase bacterial enzymes, inhibiting cross-linking in bacterial peptidoglycan cell walls, causing multiplying bacteria to rupture under osmotic pressure without harming human cells (which lack cell walls).',
    historical_development: [
      { stage: 'Alexander Fleming’s Serendipitous Observation', period: 'September 1928 CE', description: 'Fleming notices a clear halo of lysed Staphylococcus colonies surrounding a stray Penicillium mold on an agar dish.' },
      { stage: 'Oxford Team Isolation', period: '1938 – 1941 CE', description: 'Howard Florey, Ernst Chain, and Norman Heatley isolate stable penicillin and test it on mice and police constable Albert Alexander.' },
      { stage: 'US Industrial Deep-Tank Fermentation', period: '1942 – 1944 CE', description: 'Northern Regional Research Lab in Peoria uses corn steep liquor and a cantaloupe mold strain (P. chrysogenum) to mass-produce billions of doses for D-Day.' }
    ],
    contributors: [
      { name: 'Alexander Fleming', role: 'inventor', periodOrLifespan: '1881 – 1955 CE', affiliationOrRegion: 'St Mary’s Hospital, London', contributionNote: 'Discovered the antibacterial substance produced by Penicillium notatum.' },
      { name: 'Howard Florey', role: 'co-developer', periodOrLifespan: '1898 – 1968 CE', affiliationOrRegion: 'Sir William Dunn School of Pathology, Oxford', contributionNote: 'Led the biochemical isolation, purification, and clinical human trials.' },
      { name: 'Ernst Boris Chain', role: 'co-developer', periodOrLifespan: '1906 – 1979 CE', affiliationOrRegion: 'Oxford University', contributionNote: 'Biochemist who elucidated the chemical nature of penicillin.' }
    ],
    predecessors: ['germ-theory', 'optics-microscope-telescope'],
    successors: ['dna-double-helix'],
    modern_legacy: 'Modern surgical prophylaxis, chemotherapy protection, broad-spectrum antibiotics, and global antimicrobial resistance surveillance.',
    sources: [
      { source: 'Fleming, A. On the Antibacterial Action of Cultures of a Penicillium (Br. J. Exp. Pathol., 1929)', sourceType: 'academic' },
      { source: 'Nobel Prize in Physiology or Medicine 1945: Fleming, Chain, and Florey', sourceType: 'institutional', sourceUrl: 'https://www.nobelprize.org/prizes/medicine/1945/summary/' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Penicillin_inhibition_zone.jpg/800px-Penicillin_inhibition_zone.jpg',
      caption: 'Clear zone of bacterial inhibition surrounding a colony of Penicillium notatum.',
      attribution: 'Public Domain / CDC / Dr. Gilda Jones',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Nobel Foundation documentation and original penicillin flasks preserved in Oxford and London science museums.'
  },
  {
    id: 'nuclear-fission',
    name: 'Controlled Nuclear Fission & Atomic Reactors',
    aliases: ['Nuclear reactor', 'Chicago Pile-1', 'Nuclear energy', 'Uranium fission'],
    date: '1938 – 1942 CE',
    date_numeric: 1942,
    date_precision: 'exact',
    era: 'COMPUTING_AGE',
    domain: 'ENERGY',
    type: 'Nuclear Power System',
    region: 'Berlin, Germany → University of Chicago, United States',
    civilization: 'Mid-20th Century International Physics',
    lat: 41.7886,
    lng: -87.5987,
    overview: 'The induced splitting of heavy atomic nuclei (Uranium-235) via neutron absorption, releasing mega-electronvolt energy and additional neutrons to sustain a controlled self-propagating chain reaction.',
    why_it_matters: 'Tapped into the fundamental binding energy of atomic nuclei per E = mc^2, yielding 2 million times more energy per kilogram than coal, creating both atomic weapons and carbon-free baseload electricity.',
    problem_solved: 'Fossil combustion chemical bonds yield roughly 4 electronvolts per reaction; humanity faced fossil fuel exhaustion and needed massive, compact energy densities.',
    mechanism: 'A thermal neutron induces U-235 to split into fission fragments (e.g. Barium and Krypton) plus 2–3 prompt neutrons and ~200 MeV energy. Neutron moderators (graphite, heavy water) slow neutrons to thermal velocities to maintain criticality (k = 1.0).',
    historical_development: [
      { stage: 'Discovery of Fission in Berlin', period: 'December 1938 CE', description: 'Otto Hahn and Fritz Strassmann detect barium; Lise Meitner and Otto Frisch physically explain and calculate fission energy.' },
      { stage: 'Einstein-Szilard Letter to Roosevelt', period: 'August 1939 CE', description: 'Warns President Roosevelt of German atomic research potential, initiating the Manhattan Project.' },
      { stage: 'Chicago Pile-1 First Criticality', period: 'December 2, 1942 CE', description: 'Enrico Fermi’s team achieves the world’s first artificial self-sustaining nuclear chain reaction under the University of Chicago football stands.' }
    ],
    contributors: [
      { name: 'Enrico Fermi', role: 'inventor', periodOrLifespan: '1901 – 1954 CE', affiliationOrRegion: 'University of Chicago', contributionNote: 'Built Chicago Pile-1; architect of the first controlled nuclear chain reaction.' },
      { name: 'Lise Meitner', role: 'theoretical_precursor', periodOrLifespan: '1878 – 1968 CE', affiliationOrRegion: 'KTH Stockholm / Berlin', contributionNote: 'Physically explained nuclear fission and calculated E=mc^2 energy yield.' },
      { name: 'Leó Szilárd', role: 'theoretical_precursor', periodOrLifespan: '1898 – 1964 CE', affiliationOrRegion: 'Columbia University, New York', contributionNote: 'Patented the concept of the neutron chain reaction in 1934.' }
    ],
    predecessors: ['special-general-relativity', 'quantum-mechanics'],
    successors: ['silicon-solar-cell'],
    modern_legacy: 'Generates ~10% of global electricity with zero direct greenhouse gas emissions, powers naval aircraft carriers and submarines, and produces medical radioisotopes for cancer radiotherapy.',
    sources: [
      { source: 'Fermi, E. Experimental Production of a Divergent Chain Reaction (1942 report)', sourceType: 'primary_archive' },
      { source: 'Rhodes, R. The Making of the Atomic Bomb', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Chicago_Pile_1.jpg/800px-Chicago_Pile_1.jpg',
      caption: 'Sketch of Chicago Pile-1, the world’s first nuclear reactor, built in an abandoned racquets court at the University of Chicago.',
      attribution: 'Melvin A. Miller / US Department of Energy (Public Domain)',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Extensive declassified Manhattan Project logs and the preserved site at Stagg Field, Chicago.'
  },

  // ==========================================
  // 7. COMPUTING, TRANSISTORS & MICROPROCESSORS
  // ==========================================
  {
    id: 'analytical-engine-babbage',
    name: 'The Analytical Engine & First Algorithm',
    aliases: ['Babbage engine', 'Lovelace algorithm', 'Mechanical general-purpose computer'],
    date: '1837 – 1843 CE',
    date_numeric: 1843,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'COMPUTING',
    type: 'Mechanical Computing Architecture',
    region: 'London, Great Britain',
    civilization: 'Victorian Britain',
    lat: 51.5074,
    lng: -0.1278,
    overview: 'The conceptual design of the first mechanical general-purpose Turing-complete computer, featuring an arithmetic logic unit (the "Mill"), memory (the "Store"), conditional branching, and punched card input.',
    why_it_matters: 'The conceptual birth of computer science. Ada Lovelace realized that machines could manipulate symbols representing music or logic, not merely numbers, writing the world’s first published computer algorithm.',
    problem_solved: 'Mathematical and astronomical navigation tables were calculated by human "computers", riddled with catastrophic errors that grounded ships and ruined financial balances.',
    mechanism: 'Brass gear wheels store 50-digit decimal numbers. Jacquard loom punched cards instruct the "Mill" to perform operations, execute conditional loops, and store results into the "Store".',
    historical_development: [
      { stage: 'Babbage Difference Engine No. 1', period: '1822 – 1832 CE', description: 'Calculates polynomial tables automatically via the mathematical method of finite differences.' },
      { stage: 'Analytical Engine Architecture', period: '1837 CE', description: 'Charles Babbage conceives general-purpose program execution driven by punched cards.' },
      { stage: 'Ada Lovelace’s Notes & Bernoulli Algorithm', period: '1843 CE', description: 'Lovelace translates Menabrea’s memoir, adding Note G: a complete algorithmic program to calculate Bernoulli numbers.' }
    ],
    contributors: [
      { name: 'Charles Babbage', role: 'inventor', periodOrLifespan: '1791 – 1871 CE', affiliationOrRegion: 'London, Great Britain', contributionNote: 'Conceived the mechanical architecture of the Mill, Store, and punched-card control.' },
      { name: 'Ada Lovelace (Countess of Lovelace)', role: 'inventor', periodOrLifespan: '1815 – 1852 CE', affiliationOrRegion: 'London, Great Britain', contributionNote: 'World’s first computer programmer; recognized that machines could compute arbitrary symbolic systems.' }
    ],
    predecessors: ['mechanical-clock', 'mathematics-base60'],
    successors: ['turing-machine-formal-logic', 'electronic-computer-eniac'],
    modern_legacy: 'The universal stored-program computer architecture, algorithmic loops, conditional branching, and software engineering.',
    sources: [
      { source: 'Lovelace, A.A. Notes on the Analytical Engine (Taylor’s Scientific Memoirs, 1843)', sourceType: 'academic', sourceUrl: 'https://www.fourmilab.ch/babbage/sketch.html' },
      { source: 'Science Museum London: Babbage Difference Engine No. 2', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Babbage_Difference_Engine.jpg/800px-Babbage_Difference_Engine.jpg',
      caption: 'Portion of Babbage’s Difference Engine No. 1, assembled in 1832 by Joseph Clement.',
      attribution: 'Science Museum London / Wikimedia Commons (CC BY-SA 2.0)',
      license: 'CC BY-SA 2.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Babbage’s complete original engineering blueprints preserved at the Science Museum, London; full-scale Difference Engine No. 2 built and proven functional in 1991.'
  },
  {
    id: 'turing-machine-formal-logic',
    name: 'Universal Turing Machine & Formal Computation',
    aliases: ['Turing machine', 'Computability theory', 'Entscheidungsproblem', 'Church-Turing thesis'],
    date: '1936 CE',
    date_numeric: 1936,
    date_precision: 'exact',
    era: 'ELECTRIFICATION',
    domain: 'COMPUTING',
    type: 'Theoretical Computational Framework',
    region: 'Cambridge, Great Britain & Princeton, United States',
    civilization: 'Interwar Mathematical Logic',
    lat: 52.2053,
    lng: 0.1218,
    overview: 'The mathematical proof that a simple abstract machine manipulating symbols on an infinite tape can simulate any algorithmic computation whatsoever, establishing the universal definition of an algorithm and the limits of decidability.',
    why_it_matters: 'The theoretical foundation of all software, programming languages, and modern computers. Proved that one physical machine with variable software could perform any computable task.',
    problem_solved: 'David Hilbert’s famous Entscheidungsproblem asked whether an algorithm could determine the mathematical truth of any formal mathematical statement.',
    mechanism: 'A finite state machine reads, writes, and erases discrete symbols on an infinite memory tape, transitioning between states according to a lookup table. Turing proved that the Halting Problem is undecidable: no universal algorithm can determine if an arbitrary program will ever halt.',
    historical_development: [
      { stage: 'Gödel’s Incompleteness Theorems', period: '1931 CE', description: 'Kurt Gödel proves that any consistent formal mathematical system contains true statements that cannot be proven.' },
      { stage: 'Turing’s 1936 Landmark Paper', period: '1936 CE', description: 'On Computable Numbers, with an Application to the Entscheidungsproblem introduces the Universal Turing Machine.' },
      { stage: 'Church-Turing Thesis', period: '1936 – 1937 CE', description: 'Proves equivalence between Turing computability, Alonzo Church’s lambda calculus, and recursive functions.' }
    ],
    contributors: [
      { name: 'Alan Mathison Turing', role: 'inventor', periodOrLifespan: '1912 – 1954 CE', affiliationOrRegion: 'King’s College, Cambridge / Bletchley Park', contributionNote: 'Defined the Universal Turing Machine and proved the undecidability of the halting problem.' },
      { name: 'Alonzo Church', role: 'co-developer', periodOrLifespan: '1903 – 1995 CE', affiliationOrRegion: 'Princeton University', contributionNote: 'Created lambda calculus, the foundation of functional programming.' }
    ],
    predecessors: ['analytical-engine-babbage', 'geometry-euclidean', 'calculus'],
    successors: ['electronic-computer-eniac', 'artificial-intelligence-birth'],
    modern_legacy: 'All computer programming languages, compiler design, computational complexity theory (P vs NP), and universal cloud computing runtimes.',
    sources: [
      { source: 'Turing, A.M. On Computable Numbers, with an Application to the Entscheidungsproblem (Proc. London Math. Soc., 1936)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1112/plms/s2-42.1.230' },
      { source: 'Hodges, A. Alan Turing: The Enigma', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/800px-Alan_Turing_Aged_16.jpg',
      caption: 'Alan Turing, mathematician and cryptanalyst, who formulated the Universal Turing Machine.',
      attribution: 'Public Domain / King’s College Archives',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Unanimously recognized as the mathematical cornerstone of computer science.'
  },
  {
    id: 'electronic-computer-eniac',
    name: 'Electronic Digital Stored-Program Computer',
    aliases: ['ENIAC', 'Von Neumann architecture', 'Stored-program computer', 'Manchester Baby'],
    date: '1945 – 1948 CE',
    date_numeric: 1945,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'COMPUTING',
    type: 'Electronic Computing System',
    region: 'Philadelphia, Pennsylvania & Manchester, United Kingdom',
    civilization: 'Mid-20th Century Allied Science',
    lat: 39.9522,
    lng: -75.1932,
    overview: 'The creation of fully electronic digital computing systems utilizing vacuum tubes for kilohertz switching, culminating in the stored-program architecture where data and instructions share the same memory.',
    why_it_matters: 'Replaced slow mechanical gears and electromagnetic relays with electronic speeds 1,000 times faster, ushering in the digital computation era.',
    problem_solved: 'Calculating ballistics trajectories, radar signal tracking, and atomic fission calculations required weeks of manual paper calculations.',
    mechanism: 'Vacuum tubes (thermionic triodes) switch current on and off in microseconds. In John von Neumann’s architecture, CPU (ALU and control unit), memory, and I/O are decoupled, allowing software programs to be loaded and rewritten dynamically without rewiring hardware.',
    historical_development: [
      { stage: 'Colossus Mark 1', period: '1943 CE', description: 'Tommy Flowers at Bletchley Park builds first programmable electronic valve computer to crack Lorenz ciphers.' },
      { stage: 'ENIAC Unveiling', period: '1945 CE', description: 'John Mauchly and J. Presper Eckert at UPenn complete ENIAC (18,000 vacuum tubes, 5,000 additions per second).' },
      { stage: 'First Stored-Program Run (Manchester Baby)', period: 'June 21, 1948 CE', description: 'Frederic Williams and Tom Kilburn execute the first stored electronic computer program using a Williams cathode-ray tube memory.' }
    ],
    contributors: [
      { name: 'John von Neumann', role: 'co-developer', periodOrLifespan: '1903 – 1957 CE', affiliationOrRegion: 'Institute for Advanced Study, Princeton', contributionNote: 'Documented stored-program architecture in First Draft of a Report on the EDVAC (1945).' },
      { name: 'J. Presper Eckert', role: 'inventor', periodOrLifespan: '1919 – 1995 CE', affiliationOrRegion: 'Moore School of Electrical Engineering, UPenn', contributionNote: 'Chief electrical engineer of ENIAC and EDVAC.' },
      { name: 'John Mauchly', role: 'inventor', periodOrLifespan: '1907 – 1980 CE', affiliationOrRegion: 'Moore School, UPenn', contributionNote: 'Conceived the conceptual design and mathematical purpose of ENIAC.' }
    ],
    predecessors: ['turing-machine-formal-logic', 'analytical-engine-babbage', 'electromagnetism-maxwell'],
    successors: ['transistor-semiconductor', 'silicon-integrated-circuit', 'artificial-intelligence-birth'],
    modern_legacy: 'The foundational architectural structure of virtually every modern server, PC, smartphone, and microcontroller in existence.',
    sources: [
      { source: 'von Neumann, J. First Draft of a Report on the EDVAC (1945)', sourceType: 'academic' },
      { source: 'Smithsonian National Museum of American History: ENIAC Computer', sourceType: 'institutional', sourceUrl: 'https://americanhistory.si.edu/collections/search/object/nmah_334741' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eniac.jpg/800px-Eniac.jpg',
      caption: 'Programmers Kay McNulty, Betty Jennings, and Frances Bilas operating the ENIAC at UPenn in 1946.',
      attribution: 'US Army Photo / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical panels of ENIAC preserved at UPenn and the Smithsonian Institution.'
  },
  {
    id: 'transistor-semiconductor',
    name: 'The Semiconductor Point-Contact & Bipolar Transistor',
    aliases: ['Solid-state transistor', 'Point-contact transistor', 'Bipolar junction transistor'],
    date: 'December 16, 1947 CE',
    date_numeric: 1947,
    date_precision: 'exact',
    era: 'COMPUTING_AGE',
    domain: 'COMPUTING',
    type: 'Solid-State Semiconductor Device',
    region: 'Murray Hill, New Jersey, United States',
    civilization: 'Mid-20th Century United States',
    lat: 40.7029,
    lng: -74.4013,
    overview: 'The solid-state amplification and switching of electrical signals using doped semiconductor crystals (germanium, and later silicon) without vacuum, heated filaments, or moving parts.',
    why_it_matters: 'The single most important electronic hardware invention of the 20th century. Slashed electronic component size, heat, power consumption, and failure rates by orders of magnitude.',
    problem_solved: 'Vacuum tubes were bulky, ran extremely hot, consumed massive power, and burned out continuously; a computer with 100,000 vacuum tubes would fail every few minutes.',
    mechanism: 'Electric voltage applied to a central base terminal modulates the conductivity and charge carrier flow (electrons or holes) across a p-n semiconductor junction between emitter and collector terminals.',
    historical_development: [
      { stage: 'Point-Contact Transistor Discovery', period: 'December 16, 1947 CE', description: 'John Bardeen and Walter Brattain produce amplification using gold foil contacts pressed into a germanium crystal.' },
      { stage: 'Shockley’s Bipolar Junction Transistor', period: '1948 – 1951 CE', description: 'William Shockley patents the more reliable sandwich-layer p-n-p and n-p-n junction transistor.' },
      { stage: 'Nobel Prize in Physics', period: '1956 CE', description: 'Shockley, Bardeen, and Brattain jointly awarded the Nobel Prize in Physics.' }
    ],
    contributors: [
      { name: 'John Bardeen', role: 'inventor', periodOrLifespan: '1908 – 1991 CE', affiliationOrRegion: 'Bell Telephone Laboratories', contributionNote: 'Formulated surface state theory; only person to win two Nobel Prizes in Physics.' },
      { name: 'Walter Brattain', role: 'inventor', periodOrLifespan: '1902 – 1987 CE', affiliationOrRegion: 'Bell Telephone Laboratories', contributionNote: 'Experimental physicist who constructed the point-contact apparatus.' },
      { name: 'William Shockley', role: 'inventor', periodOrLifespan: '1910 – 1989 CE', affiliationOrRegion: 'Bell Telephone Laboratories', contributionNote: 'Invented the junction transistor and founded Shockley Semiconductor in Silicon Valley.' }
    ],
    predecessors: ['quantum-mechanics', 'electronic-computer-eniac'],
    successors: ['silicon-integrated-circuit', 'microprocessor-cpu', 'satellites-gps'],
    modern_legacy: 'Over 10^22 transistors have been manufactured in human history—more than any other human-made artifact. Ubiquitous in every modern electronic gadget.',
    sources: [
      { source: 'Bardeen, J., & Brattain, W.H. The Transistor, A Semi-Conductor Triode (Phys. Rev., 1948)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1103/PhysRev.74.230' },
      { source: 'Riordan, M., & Hoddeson, L. Crystal Fire: The Birth of the Information Age', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Replica-of-first-transistor.jpg/800px-Replica-of-first-transistor.jpg',
      caption: 'Replica of the world’s first working point-contact transistor built at Bell Labs in December 1947.',
      attribution: 'NIST / Wikimedia Commons (Public Domain)',
      license: 'Public Domain',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical lab notebooks and prototype components preserved at Bell Labs and Smithsonian.'
  },
  {
    id: 'silicon-integrated-circuit',
    name: 'The Monolithic Silicon Integrated Circuit',
    aliases: ['Microchip', 'Integrated circuit (IC)', 'Planar process', 'Noyce-Kilby chip'],
    date: '1958 – 1959 CE',
    date_numeric: 1959,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'COMPUTING',
    type: 'Microelectronic Microfabrication System',
    region: 'Dallas, Texas & Mountain View, California, United States',
    civilization: 'Mid-20th Century United States',
    lat: 37.3861,
    lng: -122.0839,
    overview: 'The fabrication of an entire electronic circuit (transistors, diodes, resistors, capacitors, and their interconnecting metallic wiring) directly onto a single monolithic piece of semiconductor crystal.',
    why_it_matters: 'Overcame the "tyranny of numbers" (wiring millions of individual components by hand), birthing Silicon Valley and Moore’s Law exponential computing growth.',
    problem_solved: 'Complex electronic systems with tens of thousands of separate transistors required hand-soldering millions of interconnections, leading to catastrophic solder joint failure rates.',
    mechanism: 'Photolithographic patterning, chemical etching, and thermal diffusion selectively dope silicon wafers with impurities, depositing planar aluminum thin-film interconnects to link components without external wires.',
    historical_development: [
      { stage: 'Jack Kilby’s Hybrid Germanium IC', period: 'July 1958 CE', description: 'Jack Kilby at Texas Instruments builds the first working integrated circuit on germanium with flying wire bonds.' },
      { stage: 'Robert Noyce’s Monolithic Planar Silicon IC', period: 'January 1959 CE', description: 'Robert Noyce at Fairchild Semiconductor invents the monolithic planar silicon chip with evaporated aluminum wiring.' },
      { stage: 'Apollo Guidance Computer Adoption', period: '1962 – 1966 CE', description: 'NASA commits to buying hundreds of thousands of Fairchild ICs for the Apollo Moon missions, driving commercial yields.' }
    ],
    contributors: [
      { name: 'Robert Noyce', role: 'inventor', periodOrLifespan: '1927 – 1990 CE', affiliationOrRegion: 'Fairchild Semiconductor / Intel', contributionNote: 'Invented the monolithic planar silicon integrated circuit; co-founded Intel.' },
      { name: 'Jack Kilby', role: 'inventor', periodOrLifespan: '1923 – 2005 CE', affiliationOrRegion: 'Texas Instruments', contributionNote: 'Built the first working laboratory integrated circuit; awarded 2000 Nobel Prize in Physics.' },
      { name: 'Jean Hoerni', role: 'co-developer', periodOrLifespan: '1924 – 1997 CE', affiliationOrRegion: 'Fairchild Semiconductor', contributionNote: 'Invented the planar process of silicon dioxide surface passivation.' }
    ],
    predecessors: ['transistor-semiconductor'],
    successors: ['microprocessor-cpu', 'personal-computer', 'satellites-gps'],
    modern_legacy: 'Powers every microchip on Earth, modern smartphones, automotive ECUs, avionics, GPUs, and advanced AI hardware accelerators.',
    sources: [
      { source: 'Computer History Museum: The Silicon Engine - Integrated Circuits', sourceType: 'institutional', sourceUrl: 'https://www.computerhistory.org/siliconengine/semiconductor-integrated-circuit-invented/' },
      { source: 'Berlin, L. The Man Behind the Microchip: Robert Noyce and the Invention of Silicon Valley', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Robert_Noyce%27s_Patent_3%2C029%2C366.png/800px-Robert_Noyce%27s_Patent_3%2C029%2C366.png',
      caption: 'Patent drawing from Robert Noyce’s 1959 US Patent 2,981,877 for the monolithic planar silicon integrated circuit.',
      attribution: 'Public Domain / US Patent and Trademark Office',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Original Kilby and Noyce microchips preserved at the Smithsonian and Computer History Museum.'
  },
  {
    id: 'dna-double-helix',
    name: 'Structure of DNA & Molecular Genetics',
    aliases: ['DNA double helix', 'Molecular genetics', 'Watson-Crick-Franklin structure'],
    date: 'February 28, 1953 CE',
    date_numeric: 1953,
    date_precision: 'exact',
    era: 'COMPUTING_AGE',
    domain: 'SCIENCE',
    type: 'Biochemical / Structural Discovery',
    region: 'Cavendish Laboratory, Cambridge & King’s College London',
    civilization: 'Mid-20th Century Biological Science',
    lat: 52.2053,
    lng: 0.1218,
    overview: 'The structural elucidation of deoxyribonucleic acid (DNA) as a double antiparallel helical polymer with specific hydrogen-bonded base pairs (A-T, G-C), revealing the chemical mechanism of biological heredity.',
    why_it_matters: 'Revealed that biological life is encoded as digital chemical information, founding molecular biology, genetic engineering, mRNA vaccines, and CRISPR gene editing.',
    problem_solved: 'Biologists had proven DNA carried genetic inheritance, but had no conception of how molecules could accurately replicate, mutate, and encode proteins.',
    mechanism: 'Two sugar-phosphate backbones wind antiparallel around a central axis. Adenine pairs strictly with Thymine (2 hydrogen bonds) and Guanine with Cytosine (3 hydrogen bonds). Semiconservative replication unzips the strands, each serving as an exact template for the other.',
    historical_development: [
      { stage: 'Rosalind Franklin’s Photo 51', period: 'May 1952 CE', description: 'Franklin and Raymond Gosling at King’s College capture pristine X-ray diffraction pattern of B-form DNA.' },
      { stage: 'Watson & Crick Cavendish Model', period: 'February 1953 CE', description: 'James Watson and Francis Crick assemble the correct three-dimensional physical metal scale model.' },
      { stage: 'Publication in Nature', period: 'April 25, 1953 CE', description: 'One-page paper published containing famous line: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism."' }
    ],
    contributors: [
      { name: 'Rosalind Franklin', role: 'co-developer', periodOrLifespan: '1920 – 1958 CE', affiliationOrRegion: 'King’s College London', contributionNote: 'Captured crystallographic Photo 51 proving the helical structure and phosphate parameters.' },
      { name: 'Francis Crick', role: 'inventor', periodOrLifespan: '1916 – 2004 CE', affiliationOrRegion: 'Cavendish Laboratory, Cambridge', contributionNote: 'Co-discovered the double helix model and formulated the Central Dogma.' },
      { name: 'James D. Watson', role: 'inventor', periodOrLifespan: '1928 – Present', affiliationOrRegion: 'Cavendish Laboratory, Cambridge', contributionNote: 'Identified the Adenine-Thymine and Guanine-Cytosine complementary base-pairing.' },
      { name: 'Maurice Wilkins', role: 'co-developer', periodOrLifespan: '1916 – 2004 CE', affiliationOrRegion: 'King’s College London', contributionNote: 'Shared 1962 Nobel Prize with Watson and Crick for DNA X-ray studies.' }
    ],
    predecessors: ['evolution-natural-selection', 'optics-microscope-telescope'],
    successors: ['genetic-engineering-crispr'],
    modern_legacy: 'Recombinant DNA therapeutics (insulin), human genome sequencing, forensics, synthetic biology, and CRISPR-Cas9 therapeutics.',
    sources: [
      { source: 'Watson, J.D., & Crick, F.H.C. Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid (Nature, 1953)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1038/171737a0' },
      { source: 'Maddox, B. Rosalind Franklin: The Dark Lady of DNA', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Photo_51_x-ray_diffraction_image.jpg/800px-Photo_51_x-ray_diffraction_image.jpg',
      caption: 'Photo 51, the famous X-ray diffraction pattern of B-DNA captured by Rosalind Franklin and Raymond Gosling in May 1952.',
      attribution: 'King’s College London / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical metal brass scale models preserved in the Science Museum, London; validated across millions of sequenced genomes.'
  },
  {
    id: 'rocketry-spaceflight',
    name: 'Liquid-Fueled Rocketry & Orbital Spaceflight',
    aliases: ['Sputnik', 'V-2 rocket', 'Saturn V', 'Orbital mechanics'],
    date: '1926 – 1957 CE',
    date_numeric: 1957,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'SPACE',
    type: 'Aerospace Propulsion & Trajectory System',
    region: 'Massachusetts (Goddard), Baikonur Cosmodrome, Cape Canaveral',
    civilization: 'Space Age Superpowers',
    lat: 45.9646,
    lng: 63.3052,
    overview: 'The chemical reaction propulsion of multi-stage launch vehicles exceeding Earth’s escape and orbital velocities (7.9 km/s) to place artificial satellites and humans into space.',
    why_it_matters: 'Humanity broke free from gravity’s biological cradle to expand into the solar system, providing orbital viewpoints that revolutionized Earth monitoring, telecommunications, and national security.',
    problem_solved: 'Air-breathing jet and propeller engines could not operate above the atmosphere where there is no atmospheric oxygen or lift.',
    mechanism: 'Liquid propellant (e.g. liquid oxygen and kerosene/liquid hydrogen) is pressurized by high-speed turbopumps and combusted inside a regeneratively cooled chamber, expanding through a de Laval convergent-divergent nozzle to generate thrust according to Tsiolkovsky’s rocket equation: Delta v = v_e ln(m0 / mf).',
    historical_development: [
      { stage: 'Robert Goddard’s Liquid Rocket', period: 'March 16, 1926 CE', description: 'Goddard launches world’s first liquid-fueled rocket (liquid oxygen and gasoline) in Auburn, Massachusetts.' },
      { stage: 'Sputnik 1 First Artificial Satellite', period: 'October 4, 1957 CE', description: 'Soviet Union under Sergei Korolev launches Sputnik 1 into low Earth orbit atop an R-7 rocket.' },
      { stage: 'Apollo 11 Lunar Landing', period: 'July 20, 1969 CE', description: 'Saturn V launches Apollo 11; Neil Armstrong and Buzz Aldrin walk on the Moon.' }
    ],
    contributors: [
      { name: 'Konstantin Tsiolkovsky', role: 'theoretical_precursor', periodOrLifespan: '1857 – 1935 CE', affiliationOrRegion: 'Kaluga, Russian Empire', contributionNote: 'Derived the fundamental ideal rocket equation in 1903.' },
      { name: 'Robert H. Goddard', role: 'inventor', periodOrLifespan: '1882 – 1945 CE', affiliationOrRegion: 'Clark University, Worcester, Massachusetts', contributionNote: 'Built and flew the first liquid-fueled rocket.' },
      { name: 'Sergei Korolev', role: 'co-developer', periodOrLifespan: '1907 – 1966 CE', affiliationOrRegion: 'Soviet Space Program', contributionNote: 'Chief Designer who launched Sputnik 1 and Yuri Gagarin.' },
      { name: 'Wernher von Braun', role: 'co-developer', periodOrLifespan: '1912 – 1977 CE', affiliationOrRegion: 'NASA Marshall Space Flight Center', contributionNote: 'Chief architect of the Saturn V Moon rocket.' }
    ],
    predecessors: ['classical-mechanics-newton', 'thermodynamics'],
    successors: ['satellites-gps', 'space-station-iss', 'reusable-orbital-rocketry'],
    modern_legacy: 'Satellite telecommunications, space science observatories (Hubble, JWST), crewed space exploration, and commercial satellite launches.',
    sources: [
      { source: 'NASA History Division: The Sputnik Epoch', sourceType: 'institutional', sourceUrl: 'https://history.nasa.gov/sputnik/' },
      { source: 'Siddiqi, A.A. Challenge to Apollo: The Soviet Union and the Space Race, 1945-1974', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sputnik_asm.jpg/800px-Sputnik_asm.jpg',
      caption: 'Full-scale replica of Sputnik 1, the world’s first artificial satellite, launched October 4, 1957.',
      attribution: 'NASA / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical launch vehicle stages, launch pads, and telemetry records cataloged globally.'
  },
  {
    id: 'satellites-gps',
    name: 'Global Positioning System (GPS & GNSS)',
    aliases: ['Navstar GPS', 'Satellite navigation', 'GNSS'],
    date: '1973 – 1995 CE',
    date_numeric: 1978,
    date_precision: 'decade',
    era: 'INTERNET_AGE',
    domain: 'NAVIGATION',
    type: 'Satellite Geopositioning Constellation',
    region: 'El Segundo, California & Colorado Springs, United States',
    civilization: 'Late 20th Century Global Network',
    lat: 33.9164,
    lng: -118.3987,
    overview: 'A constellation of at least 24 medium-Earth-orbit satellites carrying synchronized atomic clocks broadcasting continuous radio signals, allowing ground receivers to compute position to within centimeters anywhere on Earth.',
    why_it_matters: 'Solved the ultimate navigation problem across air, land, and sea, providing the spatial backbone for aviation, military precision, smartphone location services, and global financial timestamping.',
    problem_solved: 'Mariners, aviators, and land travelers historically relied on stars, visual landmarks, ground radio beacons, or dead reckoning, which failed in bad weather or remote territory.',
    mechanism: 'Receivers calculate pseudo-ranges to at least four satellites using time of arrival: Range = c * (t_rx - t_tx). Solving 4 sphere intersection equations resolves 3D coordinates (x, y, z) and receiver clock bias (t), with nanosecond relativistic corrections (+38 microsec/day).',
    historical_development: [
      { stage: 'Transit Satellite System', period: '1960 CE', description: 'Johns Hopkins APL builds first satellite navigation system based on Doppler shift.' },
      { stage: 'Brad Parkinson & Navstar Architecture', period: 'Labor Day 1973 CE', description: 'Bradford Parkinson and Ivan Getting synthesize atomic clock satellite constellation architecture.' },
      { stage: 'Full Operational Capability (FOC)', period: '1995 CE', description: '24 Navstar satellites operational; Selective Availability deliberate degradation turned off by Presidential order in 2000.' }
    ],
    contributors: [
      { name: 'Bradford Parkinson', role: 'inventor', periodOrLifespan: '1935 – Present', affiliationOrRegion: 'US Air Force / Stanford University', contributionNote: 'Chief architect and program director of Navstar GPS.' },
      { name: 'Gladys West', role: 'co-developer', periodOrLifespan: '1930 – Present', affiliationOrRegion: 'Naval Surface Warfare Center', contributionNote: 'Mathematician who programmed the complex satellite geodetic models of Earth’s geoid.' },
      { name: 'Ivan Getting', role: 'co-developer', periodOrLifespan: '1912 – 2003 CE', affiliationOrRegion: 'The Aerospace Corporation', contributionNote: 'Advocated for satellite-based trilateration timing systems.' }
    ],
    predecessors: ['chronometer-longitude', 'radio-telecommunication', 'rocketry-spaceflight', 'special-general-relativity', 'radar'],
    successors: ['autonomous-navigation', 'smartphone-mobile'],
    modern_legacy: 'Embedded in every smartphone, airplane autopilot, agricultural harvester, maritime container vessel, and banking high-frequency trading server.',
    sources: [
      { source: 'Parkinson, B.W., & Spilker, J.J. Global Positioning System: Theory and Applications', sourceType: 'academic' },
      { source: 'National Academy of Engineering: Charles Stark Draper Prize for GPS', sourceType: 'institutional', sourceUrl: 'https://www.nae.edu/55295/Draper-Prize' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ConstellationGPS.gif/800px-ConstellationGPS.gif',
      caption: 'Simulation of the Navstar GPS 24-satellite constellation orbiting Earth in six orbital planes.',
      attribution: 'Elitre / Wikimedia Commons (Public Domain)',
      license: 'Public Domain',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Operational constellation in active civilian and military service 24/7/365.'
  },
  {
    id: 'microprocessor-cpu',
    name: 'The Single-Chip Silicon Microprocessor',
    aliases: ['Intel 4004', 'Microprocessor', 'CPU on a chip'],
    date: 'November 15, 1971 CE',
    date_numeric: 1971,
    date_precision: 'exact',
    era: 'COMPUTING_AGE',
    domain: 'COMPUTING',
    type: 'Microelectronic Processor Architecture',
    region: 'Santa Clara, California, United States',
    civilization: 'Silicon Valley',
    lat: 37.3861,
    lng: -122.0839,
    overview: 'The integration of an entire Central Processing Unit (ALU, registers, program counter, and control logic) onto a single silicon chip containing 2,300 MOS transistors.',
    why_it_matters: 'Turned the computer from a room-sized cabinet into an inexpensive component that could be embedded inside any appliance, vehicle, tool, or desktop machine.',
    problem_solved: 'CPUs were built from dozens of circuit boards with thousands of separate interconnected chips, making computers too expensive and large for mass consumer products.',
    mechanism: 'Silicon gate pMOS technology allowed 2,300 transistors on a 12 mm^2 die, fetching 4-bit instructions, executing arithmetic routines, and interfacing with ROM and RAM over a shared bus.',
    historical_development: [
      { stage: 'Busicom Calculator Project', period: '1969 CE', description: 'Japanese calculator firm Busicom requests Intel design 12 custom chips; Ted Hoff proposes one universal processor instead.' },
      { stage: 'Federico Faggin Physical Silicon Design', period: '1970 – 1971 CE', description: 'Faggin designs the silicon gate technology and hand-routes the 4004 layout, engraving his initials "F.F." on the corner of the silicon die.' },
      { stage: 'Commercial Announcement', period: 'November 15, 1971 CE', description: 'Intel advertises "Announcing a new era in integrated electronics" in Electronic News.' }
    ],
    contributors: [
      { name: 'Federico Faggin', role: 'inventor', periodOrLifespan: '1941 – Present', affiliationOrRegion: 'Intel Corporation', contributionNote: 'Chief design engineer who created the silicon-gate layout of the 4004.' },
      { name: 'Marcian "Ted" Hoff', role: 'inventor', periodOrLifespan: '1937 – Present', affiliationOrRegion: 'Intel Corporation', contributionNote: 'Conceived the architectural concept of a general-purpose processor on a chip.' },
      { name: 'Stanley Mazor', role: 'co-developer', periodOrLifespan: '1941 – Present', affiliationOrRegion: 'Intel Corporation', contributionNote: 'Co-developed the instruction set architecture.' },
      { name: 'Masatoshi Shima', role: 'co-developer', periodOrLifespan: '1943 – Present', affiliationOrRegion: 'Busicom / Intel', contributionNote: 'Busicom engineer who co-designed logic and software.' }
    ],
    predecessors: ['silicon-integrated-circuit', 'transistor-semiconductor'],
    successors: ['personal-computer', 'internet-arpanet', 'smartphone-mobile'],
    modern_legacy: 'Modern multi-core x86 and ARM processors containing over 50 billion transistors, powering everything from smart watches to supercomputers.',
    sources: [
      { source: 'IEEE Spectrum: The Microprocessor - 50th Anniversary', sourceType: 'institutional', sourceUrl: 'https://spectrum.ieee.org/intel-4004' },
      { source: 'Faggin, F. Silicon: From the Invention of the Microprocessor to the New Science of Consciousness', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Intel_4004.jpg/800px-Intel_4004.jpg',
      caption: 'The Intel 4004 microprocessor silicon die, showing the 2,300-transistor layout and Federico Faggin’s etched initials.',
      attribution: 'Intel Free Press / Wikimedia Commons (CC BY-SA 2.0)',
      license: 'CC BY-SA 2.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Verified in Intel corporate archives and original silicon masks exhibited at Computer History Museum.'
  },
  {
    id: 'internet-arpanet',
    name: 'Packet Switching & ARPANET (TCP/IP)',
    aliases: ['The Internet', 'ARPANET', 'Packet-switching network', 'TCP/IP protocols'],
    date: '1969 – 1983 CE',
    date_numeric: 1969,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'COMMUNICATION',
    type: 'Decentralized Network Protocol System',
    region: 'UCLA, Stanford, MIT, BBN, Washington, United States',
    civilization: 'Late 20th Century Global Network',
    lat: 34.0689,
    lng: -118.4452,
    overview: 'The creation of a decentralized digital data network that segments messages into self-routing packets, standardized by the Transmission Control Protocol and Internet Protocol (TCP/IP).',
    why_it_matters: 'Created the interconnected global digital nervous system of human civilization, enabling instantaneous planetary communication, commerce, and knowledge exchange.',
    problem_solved: 'Circuit-switched telephone networks reserved dedicated lines end-to-end; if any single wire was severed, the connection died, and network lines were idle 90% of the time.',
    mechanism: 'Data streams are chopped into discrete packets with header addresses. Routers route each packet independently across available pathways using best-effort delivery. Destination TCP reassembles packets in correct sequence, requesting retransmission of lost packets.',
    historical_development: [
      { stage: 'First ARPANET Transmission', period: 'October 29, 1969 CE', description: 'Charley Kline at UCLA sends "LO" to SRI before the system crashes, completing the first inter-computer network message.' },
      { stage: 'Cerf & Kahn TCP/IP Design', period: 'May 1974 CE', description: 'Vint Cerf and Bob Kahn publish A Protocol for Packet Network Intercommunication.' },
      { stage: 'Flag Day Migration to TCP/IP', period: 'January 1, 1983 CE', description: 'ARPANET officially mandates TCP/IP, creating the modern interconnected "Internet".' }
    ],
    contributors: [
      { name: 'Vinton Cerf', role: 'inventor', periodOrLifespan: '1943 – Present', affiliationOrRegion: 'DARPA / Stanford University', contributionNote: 'Co-designer of TCP/IP; Father of the Internet.' },
      { name: 'Robert Kahn', role: 'inventor', periodOrLifespan: '1938 – Present', affiliationOrRegion: 'DARPA / BBN', contributionNote: 'Co-designer of TCP/IP architecture; organized first public ARPANET demo.' },
      { name: 'Paul Baran', role: 'theoretical_precursor', periodOrLifespan: '1926 – 2011 CE', affiliationOrRegion: 'RAND Corporation', contributionNote: 'Conceived distributed packet switching for nuclear survivability in 1964.' },
      { name: 'Leonard Kleinrock', role: 'theoretical_precursor', periodOrLifespan: '1934 – Present', affiliationOrRegion: 'UCLA', contributionNote: 'Developed mathematical queueing theory behind packet switching networks.' }
    ],
    predecessors: ['telephone', 'electric-telegraph', 'electronic-computer-eniac', 'microprocessor-cpu'],
    successors: ['world-wide-web', 'internet-arpanet', 'autonomous-navigation'],
    modern_legacy: 'The global Internet carrying over 5 billion human users, streaming video, global banking rails, and trillions of connected IoT sensors.',
    sources: [
      { source: 'Cerf, V.G., & Kahn, R.E. A Protocol for Packet Network Intercommunication (IEEE Trans. Comm., 1974)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1109/TCOM.1974.1092259' },
      { source: 'DARPA: ARPANET Completion Report (1981)', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ARPANET_logical_map%2C_march_1977.png/800px-ARPANET_logical_map%2C_march_1977.png',
      caption: 'Logical map of the ARPANET in March 1977, showing interconnected university and military host nodes.',
      attribution: 'DARPA / Public Domain',
      license: 'Public Domain',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Complete RFC standards archive maintained by the IETF (RFC 1 through RFC 9000+).'
  },
  {
    id: 'world-wide-web',
    name: 'The World Wide Web (HTTP, HTML & URL)',
    aliases: ['WWW', 'Hypertext Web', 'Berners-Lee Web', 'Hypermedia'],
    date: '1989 – 1991 CE',
    date_numeric: 1989,
    date_precision: 'year',
    era: 'INTERNET_AGE',
    domain: 'COMMUNICATION',
    type: 'Hypertext Information Protocol System',
    region: 'CERN, Geneva, Switzerland',
    civilization: 'Late 20th Century Global Network',
    lat: 46.2330,
    lng: 6.0557,
    overview: 'The global client-server information space where documents and web resources are identified by Uniform Resource Locators (URLs), interlinked via hypertext (HTML), and transferred over HTTP.',
    why_it_matters: 'Transformed the technical, command-line Internet into a universal, multimedia, public knowledge medium accessible to every human on Earth, without requiring proprietary licensing.',
    problem_solved: 'Information on the Internet was trapped in incompatible silos (FTP, Gopher, Usenet, WAIS); navigating required knowing precise host addresses and terminal commands.',
    mechanism: 'Client web browsers issue HTTP GET requests over TCP/IP to port 80/443 of a web server. The server transmits HTML markup, which the browser renders into interactive styled documents containing clickable hyperlinks to other global URLs.',
    historical_development: [
      { stage: 'Information Management: A Proposal', period: 'March 1989 CE', description: 'Tim Berners-Lee circulates memo at CERN; his supervisor Mike Sendall famously pencils "Vague but exciting..." on the cover.' },
      { stage: 'NeXT Computer WorldWideWeb Implementation', period: 'Christmas 1990 CE', description: 'Berners-Lee writes the first browser-editor (WorldWideWeb) and HTTP server software on a NeXTcube computer.' },
      { stage: 'CERN Public Domain Declaration', period: 'April 30, 1993 CE', description: 'CERN releases the Web source code royalty-free into the public domain forever, ensuring it remained an open public protocol.' }
    ],
    contributors: [
      { name: 'Sir Tim Berners-Lee', role: 'inventor', periodOrLifespan: '1955 – Present', affiliationOrRegion: 'CERN, Geneva, Switzerland', contributionNote: 'Invented HTML, HTTP, URLs, the first web browser, and web server.' },
      { name: 'Robert Cailliau', role: 'co-developer', periodOrLifespan: '1947 – Present', affiliationOrRegion: 'CERN', contributionNote: 'Co-authored funding proposals and advocated for open public domain licensing.' }
    ],
    predecessors: ['internet-arpanet', 'personal-computer', 'printing-press'],
    successors: ['smartphone-mobile', 'generative-ai-llm'],
    modern_legacy: 'Over 2 billion websites, e-commerce, global search engines, web applications, open scientific publishing, and online digital culture.',
    sources: [
      { source: 'CERN Document Server: Information Management - A Proposal (1989)', sourceType: 'institutional', sourceUrl: 'https://cds.cern.ch/record/369245' },
      { source: 'Berners-Lee, T. Weaving the Web: The Original Design and Ultimate Destiny of the World Wide Web', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/First_Web_Server.jpg/800px-First_Web_Server.jpg',
      caption: 'Tim Berners-Lee’s NeXTcube computer at CERN, which served as the world’s first Web server.',
      attribution: 'CERN / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The original NeXTcube web server and 1993 CERN public domain declaration are preserved at CERN.'
  },
  {
    id: 'personal-computer',
    name: 'The Personal Computer & Graphical User Interface',
    aliases: ['Personal computer (PC)', 'Xerox Alto', 'Apple Macintosh', 'WIMP GUI'],
    date: '1973 – 1984 CE',
    date_numeric: 1981,
    date_precision: 'decade',
    era: 'INTERNET_AGE',
    domain: 'COMPUTING',
    type: 'Interactive Computing System',
    region: 'Palo Alto & Cupertino, California, United States',
    civilization: 'Silicon Valley',
    lat: 37.4024,
    lng: -122.1484,
    overview: 'The democratization of computing through dedicated desktop machines featuring bitmapped graphical displays, mouse pointing devices, overlapping windows, icons, and menus (WIMP GUI).',
    why_it_matters: 'Shifted computing from an elite corporate priesthood typing cryptic terminal command lines into an intuitive direct-manipulation tool for artists, writers, accountants, and children.',
    problem_solved: 'Computers required memorizing non-intuitive command-line syntax (like MS-DOS or Unix); typos produced total failure, preventing general public adoption.',
    mechanism: 'Bitmapped display buffers map individual memory bits directly to screen pixels. A two-button optical mouse tracks X-Y hand coordinates, triggering desktop metaphors (folders, files, trash can, menus) via an event-driven operating system loop.',
    historical_development: [
      { stage: 'Douglas Engelbart’s "Mother of All Demos"', period: 'December 9, 1968 CE', description: 'Engelbart demonstrates the computer mouse, hypertext, windows, and real-time collaborative text editing in San Francisco.' },
      { stage: 'Xerox PARC Alto', period: '1973 CE', description: 'Palo Alto Research Center invents the modern GUI, mouse, Ethernet, and laser printing.' },
      { stage: 'Apple Macintosh Release', period: 'January 1984 CE', description: 'Steve Jobs launches the first commercially successful mass-market GUI personal computer with bitmapped graphics.' }
    ],
    contributors: [
      { name: 'Douglas Engelbart', role: 'theoretical_precursor', periodOrLifespan: '1925 – 2013 CE', affiliationOrRegion: 'SRI International, Menlo Park', contributionNote: 'Invented the computer mouse and pioneered interactive graphical computing.' },
      { name: 'Alan Kay', role: 'inventor', periodOrLifespan: '1940 – Present', affiliationOrRegion: 'Xerox PARC', contributionNote: 'Pioneered overlapping window GUI, object-oriented programming (Smalltalk), and the Dynabook concept.' },
      { name: 'Steve Jobs', role: 'popularizer', periodOrLifespan: '1955 – 2011 CE', affiliationOrRegion: 'Apple Computer, Cupertino', contributionNote: 'Championed and commercialized the intuitive Macintosh GUI.' }
    ],
    predecessors: ['microprocessor-cpu', 'silicon-integrated-circuit', 'electronic-computer-eniac'],
    successors: ['world-wide-web', 'smartphone-mobile'],
    modern_legacy: 'All modern desktop operating systems (macOS, Windows, Linux Desktop) and the direct manipulation interaction paradigms of modern software.',
    sources: [
      { source: 'Computer History Museum: Xerox Alto and Personal Computer Revolution', sourceType: 'institutional', sourceUrl: 'https://www.computerhistory.org/revolution/personal-computers/17/303' },
      { source: 'Levy, S. Insanely Great: The Life and Times of Macintosh, the Computer that Changed Everything', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Macintosh_128k_transparency.png/800px-Macintosh_128k_transparency.png',
      caption: 'The original Apple Macintosh 128K computer (1984) with built-in monitor, single floppy drive, and mouse.',
      attribution: 'All About Apple Museum / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical prototypes and original machines preserved at the Computer History Museum, Mountain View.'
  },

  // ==========================================
  // 8. ARTIFICIAL INTELLIGENCE & MODERN ERA
  // ==========================================
  {
    id: 'artificial-intelligence-birth',
    name: 'Artificial Intelligence & The Dartmouth Workshop',
    aliases: ['Dartmouth Conference', 'Birth of AI', 'Symbolic AI', 'Heuristic search'],
    date: '1956 CE',
    date_numeric: 1956,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'AI',
    type: 'Scientific Discipline & Algorithmic Paradigm',
    region: 'Hanover, New Hampshire, United States',
    civilization: 'Mid-20th Century Computing Science',
    lat: 43.7044,
    lng: -72.2887,
    overview: 'The formal establishment of artificial intelligence as an academic discipline based on the conjecture that "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."',
    why_it_matters: 'Birthed the multi-decade quest to reproduce human cognition, reasoning, vision, and natural language understanding using computational algorithms.',
    problem_solved: 'Computers were viewed strictly as giant electronic arithmetic calculators; no formal field existed to investigate machine learning, symbolic reasoning, or computer chess.',
    mechanism: 'Formal logic, heuristic tree search (alpha-beta pruning), and symbolic knowledge representation systems that systematically explore combinatorial problem state spaces.',
    historical_development: [
      { stage: 'Turing’s Computing Machinery and Intelligence', period: '1950 CE', description: 'Alan Turing proposes the imitation game ("Turing Test") to evaluate machine intelligence.' },
      { stage: 'The Dartmouth Summer Research Project on AI', period: 'Summer 1956 CE', description: 'John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon coin the term "Artificial Intelligence".' },
      { stage: 'Logic Theorist & Early Programs', period: '1956 – 1965 CE', description: 'Allen Newell and Herbert Simon write Logic Theorist, proving mathematical theorems from Principia Mathematica.' }
    ],
    contributors: [
      { name: 'John McCarthy', role: 'inventor', periodOrLifespan: '1927 – 2011 CE', affiliationOrRegion: 'Dartmouth College / Stanford University', contributionNote: 'Coined the term "Artificial Intelligence" and created the Lisp programming language.' },
      { name: 'Marvin Minsky', role: 'co-developer', periodOrLifespan: '1927 – 2016 CE', affiliationOrRegion: 'MIT AI Lab', contributionNote: 'Pioneered frames, neural network models (SNARC), and AI robotics.' },
      { name: 'Claude Shannon', role: 'contributor', periodOrLifespan: '1916 – 2001 CE', affiliationOrRegion: 'Bell Labs / MIT', contributionNote: 'Father of Information Theory; formulated computer chess algorithms.' }
    ],
    predecessors: ['turing-machine-formal-logic', 'electronic-computer-eniac'],
    successors: ['neural-networks-backprop', 'deep-learning-alexnet', 'transformer-attention'],
    modern_legacy: 'All modern AI disciplines, search engines, robotic path planning (A* algorithm), theorem provers, and automated game playing.',
    sources: [
      { source: 'McCarthy, J., Minsky, M., Rochester, N., & Shannon, C.E. A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence (1955)', sourceType: 'academic', sourceUrl: 'http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html' },
      { source: 'Russell, S., & Norvig, P. Artificial Intelligence: A Modern Approach', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/John_McCarthy_Stanford.jpg/800px-John_McCarthy_Stanford.jpg',
      caption: 'John McCarthy, who coined the term "Artificial Intelligence" and organized the 1956 Dartmouth workshop.',
      attribution: 'Chuck Painter / Stanford News Service (CC BY 3.0)',
      license: 'CC BY 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The original 1955 Dartmouth proposal document is preserved in the Dartmouth College archives.'
  },
  {
    id: 'neural-networks-backprop',
    name: 'Artificial Neural Networks & Backpropagation',
    aliases: ['Backpropagation', 'Perceptron', 'Multi-layer perceptron (MLP)', 'Reverse-mode differentiation'],
    date: '1957 – 1986 CE',
    date_numeric: 1986,
    date_precision: 'year',
    era: 'INTERNET_AGE',
    domain: 'AI',
    type: 'Machine Learning Algorithm',
    region: 'Ithaca, NY → Pittsburgh, PA & Toronto, Canada',
    civilization: 'Late 20th Century Computing Science',
    lat: 43.6532,
    lng: -79.3832,
    overview: 'The algorithmic optimization of multi-layered artificial neural networks by computing the analytical gradient of loss with respect to all internal synaptic weights via the calculus chain rule.',
    why_it_matters: 'Rescued neural networks from two decades of "AI winter", providing the universal training mechanism that powers all modern deep learning, computer vision, speech recognition, and LLMs.',
    problem_solved: 'Single-layer perceptrons could not learn non-linear functions (e.g. XOR gate); no mathematical algorithm existed to adjust internal hidden layer weights.',
    mechanism: 'Forward pass propagates inputs through non-linear activation layers: y = sigma(W x + b). Backward pass computes dLoss/dW by propagating errors backwards layer-by-layer using the multivariable chain rule, updating weights via gradient descent: W = W - eta * grad_W(Loss).',
    historical_development: [
      { stage: 'Rosenblatt’s Perceptron', period: '1957 CE', description: 'Frank Rosenblatt builds the Mark I Perceptron hardware at Cornell, learning linear boundaries.' },
      { stage: 'Werbos Automatic Differentiation', period: '1974 CE', description: 'Paul Werbos formalizes backpropagation in his Harvard PhD dissertation.' },
      { stage: 'Rumelhart, Hinton & Williams Breakthrough', period: '1986 CE', description: 'Nature publication demonstrates multi-layer internal representation learning, sparking the modern connectionist renaissance.' }
    ],
    contributors: [
      { name: 'Geoffrey Hinton', role: 'inventor', periodOrLifespan: '1947 – Present', affiliationOrRegion: 'Carnegie Mellon / University of Toronto', contributionNote: 'Co-authored 1986 Nature paper; awarded 2024 Nobel Prize in Physics for foundational neural network learning.' },
      { name: 'David Rumelhart', role: 'inventor', periodOrLifespan: '1942 – 2011 CE', affiliationOrRegion: 'UC San Diego', contributionNote: 'Cognitive scientist who co-developed backpropagation.' },
      { name: 'Frank Rosenblatt', role: 'theoretical_precursor', periodOrLifespan: '1928 – 1971 CE', affiliationOrRegion: 'Cornell Aeronautical Laboratory', contributionNote: 'Invented the Perceptron in 1957.' },
      { name: 'Yann LeCun', role: 'co-developer', periodOrLifespan: '1960 – Present', affiliationOrRegion: 'Bell Labs / NYU', contributionNote: 'Pioneered backpropagation in Convolutional Neural Networks (LeNet-5, 1989).' }
    ],
    predecessors: ['artificial-intelligence-birth', 'calculus', 'electronic-computer-eniac'],
    successors: ['deep-learning-alexnet', 'transformer-attention'],
    modern_legacy: 'The universal optimization engine underlying 100% of modern deep neural networks, transformer language models, and diffusion image generators.',
    sources: [
      { source: 'Rumelhart, D.E., Hinton, G.E., & Williams, R.J. Learning representations by back-propagating errors (Nature, 1986)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1038/323533a0' },
      { source: 'Nobel Prize in Physics 2024: John Hopfield and Geoffrey Hinton', sourceType: 'institutional', sourceUrl: 'https://www.nobelprize.org/prizes/physics/2024/summary/' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Artificial_neural_network.svg/800px-Artificial_neural_network.svg.png',
      caption: 'Diagram of a multi-layer feedforward artificial neural network with input, hidden, and output nodes.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Universal mathematical algorithm implemented in PyTorch and TensorFlow and running in billions of daily calculations.'
  },
  {
    id: 'smartphone-mobile',
    name: 'The Modern Capacitive Smartphone (iPhone)',
    aliases: ['Smartphone', 'Capacitive multi-touch', 'Mobile computing platform'],
    date: 'January 9, 2007 CE',
    date_numeric: 2007,
    date_precision: 'exact',
    era: 'INTERNET_AGE',
    domain: 'COMPUTING',
    type: 'Integrated Mobile Computing Device',
    region: 'Cupertino, California, United States',
    civilization: 'Silicon Valley',
    lat: 37.3318,
    lng: -122.0311,
    overview: 'The convergence of a high-resolution capacitive multi-touch glass screen, mobile Unix operating system, cellular broadband, GPS navigation, and digital camera into a pocket-sized computing slab.',
    why_it_matters: 'Made computing ubiquitous and continuous for over 5 billion humans, reshaping photography, social media, navigation, commerce, and human interaction patterns.',
    problem_solved: 'Smartphones had tiny physical plastic QWERTY keyboards that permanently occupied half the device face and could not adapt to new applications.',
    mechanism: 'Projected capacitive touch screen senses minute changes in electrical capacitance caused by human finger conduction. Integrated ARM multi-core system-on-a-chip (SoC) coordinates cellular baseband, GPU, GPS, and MEMS gyroscopes.',
    historical_development: [
      { stage: 'FingerWorks Multi-Touch Gestures', period: '1998 – 2005 CE', description: 'Wayne Westerman and John Elias invent capacitive gesture algorithms (pinch-to-zoom), acquired by Apple.' },
      { stage: 'Steve Jobs iPhone Keynote', period: 'January 9, 2007 CE', description: 'Jobs announces "a widescreen iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet communicator... these are not three separate devices."' },
      { stage: 'App Store Launch', period: 'July 2008 CE', description: 'Third-party developer ecosystem launches, initiating the mobile application software economy.' }
    ],
    contributors: [
      { name: 'Steve Jobs', role: 'popularizer', periodOrLifespan: '1955 – 2011 CE', affiliationOrRegion: 'Apple Inc., Cupertino', contributionNote: 'Product visionary who directed the integration of multi-touch, Safari, and iOS.' },
      { name: 'Jony Ive', role: 'co-developer', periodOrLifespan: '1967 – Present', affiliationOrRegion: 'Apple Inc., Cupertino', contributionNote: 'Senior Vice President of Industrial Design responsible for the unibody glass-metal form.' },
      { name: 'Scott Forstall', role: 'co-developer', periodOrLifespan: '1969 – Present', affiliationOrRegion: 'Apple Inc., Cupertino', contributionNote: 'Led the engineering team that adapted desktop Mac OS X into mobile iOS.' }
    ],
    predecessors: ['personal-computer', 'transistor-semiconductor', 'satellites-gps', 'internet-arpanet', 'telephone'],
    successors: ['autonomous-navigation', 'generative-ai-llm'],
    modern_legacy: 'Over 1.5 billion smartphones sold annually, mobile payments (Apple/Google Pay), app economy, ride-sharing, and mobile digital identity.',
    sources: [
      { source: 'US Patent Office: US Patent 7,479,949 - Touch screen device, method, and graphical user interface', sourceType: 'primary_archive' },
      { source: 'Merchant, B. The One Device: The Secret History of the iPhone', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IPhone_1st_Gen.svg/800px-IPhone_1st_Gen.svg.png',
      caption: 'Vector technical schematic of the first-generation iPhone (2007) with capacitive multi-touch display.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical devices and original prototypes documented in US patent filings and museum collections.'
  },
  {
    id: 'deep-learning-alexnet',
    name: 'Deep Convolutional Networks & GPU Acceleration',
    aliases: ['AlexNet', 'Deep learning revolution', 'ImageNet breakthrough', 'CNNs'],
    date: 'September 2012 CE',
    date_numeric: 2012,
    date_precision: 'exact',
    era: 'INTERNET_AGE',
    domain: 'AI',
    type: 'Deep Learning Architecture',
    region: 'Toronto, Ontario, Canada',
    civilization: '21st Century Global AI Research',
    lat: 43.6532,
    lng: -79.3832,
    overview: 'The training of an 8-layer deep convolutional neural network (AlexNet) on parallel graphics processing units (NVIDIA GPUs) across 1.2 million images, reducing computer vision error rates by an unprecedented 40%.',
    why_it_matters: 'The catalyst of the modern AI revolution. Ended decades of skepticism toward deep networks and proved that massive datasets combined with GPU parallel compute could solve perception problems.',
    problem_solved: 'Computer vision relied on handcrafted manual feature extractors (SIFT, HOG) that plateaued at around 25% classification error on complex real-world images.',
    mechanism: 'Stacked convolutional filter banks extract hierarchical features (edges → textures → object parts). Rectified Linear Units (ReLU) prevent vanishing gradients; Dropout prevents overfitting; custom CUDA code executes parallel matrix multiplications across dual NVIDIA GTX 580 GPUs.',
    historical_development: [
      { stage: 'Fei-Fei Li’s ImageNet Dataset', period: '2009 CE', description: 'Stanford researchers compile 14 million hand-annotated images to evaluate visual algorithms at scale.' },
      { stage: 'AlexNet Wins ImageNet 2012', period: 'September 2012 CE', description: 'Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton win ImageNet with a top-5 error rate of 15.3%, crushing runner-up (26.2%).' },
      { stage: 'Deep Learning Industry Shift', period: '2013 – 2015 CE', description: 'Google, Facebook, and Microsoft pivot their entire research infrastructure to deep learning on GPUs.' }
    ],
    contributors: [
      { name: 'Alex Krizhevsky', role: 'inventor', periodOrLifespan: '1985 – Present', affiliationOrRegion: 'University of Toronto', contributionNote: 'Wrote high-performance CUDA GPU convolutional code and designed AlexNet.' },
      { name: 'Ilya Sutskever', role: 'inventor', periodOrLifespan: '1985 – Present', affiliationOrRegion: 'University of Toronto', contributionNote: 'Co-designer of AlexNet; later co-founder and Chief Scientist of OpenAI.' },
      { name: 'Geoffrey Hinton', role: 'co-developer', periodOrLifespan: '1947 – Present', affiliationOrRegion: 'University of Toronto', contributionNote: 'Advised the project; pioneered dropout regularization.' }
    ],
    predecessors: ['neural-networks-backprop', 'microprocessor-cpu', 'silicon-integrated-circuit'],
    successors: ['transformer-attention', 'autonomous-navigation', 'generative-ai-llm'],
    modern_legacy: 'Medical imaging diagnostics, facial recognition, autonomous vehicle perception (cameras, LiDAR), and modern GPU hardware acceleration architectures.',
    sources: [
      { source: 'Krizhevsky, A., Sutskever, I., & Hinton, G.E. ImageNet Classification with Deep Convolutional Neural Networks (NeurIPS, 2012)', sourceType: 'academic', sourceUrl: 'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks' },
      { source: 'Stanford Vision Lab: ImageNet Large Scale Visual Recognition Challenge', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Typical_cnn.png/800px-Typical_cnn.png',
      caption: 'Architectural pipeline of a deep convolutional neural network showing convolution, pooling, and fully connected layers.',
      attribution: 'Wikimedia Commons (CC BY-SA 4.0)',
      license: 'CC BY-SA 4.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Benchmark code open-sourced and replicated thousands of times across the global AI research community.'
  },
  {
    id: 'transformer-attention',
    name: 'The Transformer Architecture & Self-Attention',
    aliases: ['Attention Is All You Need', 'Transformer', 'Self-attention mechanism', 'Vaswani et al.'],
    date: 'June 12, 2017 CE',
    date_numeric: 2017,
    date_precision: 'exact',
    era: 'AI_ERA',
    domain: 'AI',
    type: 'Deep Learning Neural Architecture',
    region: 'Mountain View, California, United States',
    civilization: '21st Century Global AI Research',
    lat: 37.4220,
    lng: -122.0841,
    overview: 'A deep learning architecture based entirely on multi-head self-attention mechanisms, dispensing with recurrence and convolutions to process entire sequences of data in parallel across GPU clusters.',
    why_it_matters: 'The universal foundational architecture of modern AI. Powers ChatGPT, Claude, Gemini, AlphaFold 2/3, Midjourney, and speech synthesis systems.',
    problem_solved: 'Recurrent neural networks (LSTMs) processed text sequentially word-by-word, creating severe vanishing gradient bottlenecks and preventing parallel scaling on large GPU clusters.',
    mechanism: 'Computes scaled dot-product attention over Query, Key, and Value vectors: Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V. This enables every token in a context window to directly attend to every other token simultaneously, capturing long-range semantic dependencies in O(1) sequential steps.',
    historical_development: [
      { stage: 'Attention Mechanism in Seq2Seq', period: '2014 – 2015 CE', description: 'Dzmitry Bahdanau and Yoshua Bengio introduce additive attention to recurrent translation models.' },
      { stage: 'Publication of "Attention Is All You Need"', period: 'June 2017 CE', description: 'Eight Google Brain and Google Research scientists publish the landmark Transformer paper.' },
      { stage: 'BERT & GPT-1 Scaling', period: '2018 CE', description: 'Bidirectional (BERT) and autoregressive (GPT) pre-trained models demonstrate general-purpose linguistic transfer learning.' }
    ],
    contributors: [
      { name: 'Ashish Vaswani', role: 'inventor', periodOrLifespan: 'Contemporary', affiliationOrRegion: 'Google Brain', contributionNote: 'Co-lead author who spearheaded the self-attention formula.' },
      { name: 'Noam Shazeer', role: 'inventor', periodOrLifespan: 'Contemporary', affiliationOrRegion: 'Google Brain', contributionNote: 'Pioneered multi-head attention and scalable transformer implementations.' },
      { name: 'Niki Parmar', role: 'inventor', periodOrLifespan: 'Contemporary', affiliationOrRegion: 'Google Research', contributionNote: 'Co-lead author; designed software architecture.' },
      { name: 'Jakob Uszkoreit', role: 'inventor', periodOrLifespan: 'Contemporary', affiliationOrRegion: 'Google Research', contributionNote: 'Proposed the initial idea of replacing recurrent networks entirely with attention.' }
    ],
    predecessors: ['deep-learning-alexnet', 'neural-networks-backprop', 'microprocessor-cpu'],
    successors: ['generative-ai-llm', 'autonomous-navigation'],
    modern_legacy: 'Powers all modern frontier AI models (GPT-4, Claude 3.5, Gemini 1.5/2.0), protein folding prediction (AlphaFold), and multi-modal audio/vision foundation models.',
    sources: [
      { source: 'Vaswani, A., et al. Attention Is All You Need (NeurIPS, 2017)', sourceType: 'academic', sourceUrl: 'https://arxiv.org/abs/1706.03762' },
      { source: 'Google AI Blog: Transformer - A Novel Neural Network Architecture for Language Understanding', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/The-Transformer-model-architecture.png/800px-The-Transformer-model-architecture.png',
      caption: 'The model architecture of the Transformer, showing multi-head attention and feedforward layers, from Vaswani et al. (2017).',
      attribution: 'Vaswani et al. / arXiv (CC BY 4.0)',
      license: 'CC BY 4.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The most cited computer science paper of the 21st century; verified in code across open-source libraries worldwide.'
  },
  {
    id: 'generative-ai-llm',
    name: 'Generative AI & Large Language Models',
    aliases: ['LLMs', 'GPT-4', 'Frontier AI', 'Foundation models', 'Generative pre-training'],
    date: '2020 – 2024 CE',
    date_numeric: 2022,
    date_precision: 'year',
    era: 'AI_ERA',
    domain: 'AI',
    type: 'Generative Foundation Model',
    region: 'San Francisco & Mountain View, California, United States',
    civilization: '21st Century Global AI Ecosystem',
    lat: 37.7749,
    lng: -122.4194,
    overview: 'Autoregressive transformer neural networks scaled to hundreds of billions of parameters, pre-trained across trillion-token internet corpora to perform generalized reasoning, programming, mathematical deduction, and fluent dialogue.',
    why_it_matters: 'The first technological system in human history capable of passing the bar exam, writing functional code from natural language prompts, analyzing medical scans, and engaging in multi-turn intellectual synthesis.',
    problem_solved: 'Traditional software had to be hand-coded line-by-line using rigid symbolic syntax; machines could not understand unstructured human text, context, or ambiguous creative intent.',
    mechanism: 'Next-token prediction over vast corpora optimizes cross-entropy loss, learning rich internal world models. Subsequent Reinforcement Learning from Human Feedback (RLHF) and direct preference optimization align outputs toward helpful, truthful, and harmless assistant behaviors.',
    historical_development: [
      { stage: 'GPT-3 & In-Context Few-Shot Learning', period: 'June 2020 CE', description: 'OpenAI demonstrates that 175-billion-parameter models can learn new tasks in-context without weight updates.' },
      { stage: 'ChatGPT Public Launch', period: 'November 30, 2022 CE', description: 'Fastest-growing consumer application in internet history, reaching 100 million users in two months.' },
      { stage: 'Frontier Multi-modal Reasoning (GPT-4 / Gemini)', period: '2023 – 2024 CE', description: 'Native multimodal integration of vision, audio, code execution, and extended context windows spanning millions of tokens.' }
    ],
    contributors: [
      { name: 'OpenAI Research Team', role: 'inventor', periodOrLifespan: '2015 – Present', affiliationOrRegion: 'San Francisco, California', contributionNote: 'Pioneered GPT series, RLHF alignment, and ChatGPT.' },
      { name: 'Google DeepMind Team', role: 'co-developer', periodOrLifespan: '2010 – Present', affiliationOrRegion: 'London & Mountain View', contributionNote: 'Pioneered AlphaFold, AlphaGo, and Gemini multimodal models.' },
      { name: 'Anthropic Research Team', role: 'co-developer', periodOrLifespan: '2021 – Present', affiliationOrRegion: 'San Francisco, California', contributionNote: 'Pioneered Constitutional AI and Claude model family.' }
    ],
    predecessors: ['transformer-attention', 'deep-learning-alexnet', 'world-wide-web', 'microprocessor-cpu'],
    successors: ['autonomous-navigation'],
    modern_legacy: 'Coding assistants (Copilot), automated translation, clinical administrative documentation, scientific literature synthesis, and personalized education.',
    sources: [
      { source: 'Brown, T., et al. Language Models are Few-Shot Learners (NeurIPS, 2020)', sourceType: 'academic', sourceUrl: 'https://arxiv.org/abs/2005.14165' },
      { source: 'OpenAI: GPT-4 Technical Report (2023)', sourceType: 'academic', sourceUrl: 'https://arxiv.org/abs/2303.08774' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/800px-ChatGPT_logo.svg.png',
      caption: 'Logomark of ChatGPT, the generative AI application that popularized conversational LLMs globally.',
      attribution: 'OpenAI / Wikimedia Commons (Public Domain)',
      license: 'Public Domain',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Active commercial and scientific deployment worldwide across millions of servers and enterprise applications.'
  },
  {
    id: 'autonomous-navigation',
    name: 'Autonomous Navigation & Self-Driving Robotics',
    aliases: ['Autonomous vehicles', 'Full self-driving', 'Mobile robotics SLAM', 'Waymo autonomous fleet'],
    date: '2005 – 2024 CE',
    date_numeric: 2020,
    date_precision: 'decade',
    era: 'AI_ERA',
    domain: 'TRANSPORTATION',
    type: 'Robotic Perception & Motion Control System',
    region: 'Mojave Desert & Mountain View, California, United States',
    civilization: '21st Century Global AI Ecosystem',
    lat: 37.4220,
    lng: -122.0841,
    overview: 'The integration of real-time multi-modal sensor fusion (LiDAR, radar, computer vision cameras) with Simultaneous Localization and Mapping (SLAM) and deep reinforcement learning to navigate physical environments without human intervention.',
    why_it_matters: 'Completes the multi-millennium evolutionary arc of human navigation—from ancient celestial stars and magnetic needles to autonomous machines capable of perceiving and piloting themselves across continents and other planets.',
    problem_solved: 'Over 1.3 million humans die annually worldwide in traffic accidents caused by human driver fatigue, inattention, intoxication, and reaction latency.',
    mechanism: 'LiDAR fires millions of laser pulses/sec to build a 3D point cloud; cameras perform neural semantic segmentation; radar provides velocity vectors. Kalman filters fuse sensor data into an HD-map ego-position, while trajectory planners evaluate safety margins using predictive motion models.',
    historical_development: [
      { stage: 'DARPA Grand Challenge', period: '2004 – 2005 CE', description: 'Sebastian Thrun’s Stanford team wins the 2005 DARPA Grand Challenge with robot vehicle "Stanley" in the Mojave Desert.' },
      { stage: 'Google Self-Driving Car Project (Waymo)', period: '2009 CE', description: 'Pioneers urban autonomous driving on public California roads.' },
      { stage: 'Commercial Driverless Robotaxis', period: '2020 – 2024 CE', description: 'Waymo operates fully driverless commercial ride-hailing services across Phoenix, San Francisco, and Los Angeles without safety drivers.' }
    ],
    contributors: [
      { name: 'Sebastian Thrun', role: 'inventor', periodOrLifespan: '1967 – Present', affiliationOrRegion: 'Stanford University / Google X', contributionNote: 'Led Stanford Racing Team to victory in DARPA Grand Challenge; co-founded Google X self-driving car project.' },
      { name: 'Anthony Levandowski', role: 'co-developer', periodOrLifespan: '1980 – Present', affiliationOrRegion: 'Google / Waymo', contributionNote: 'Pioneered Ghostrider motorcycle and early autonomous sensor hardware.' },
      { name: 'Waymo Engineering Team', role: 'collective_culture', periodOrLifespan: '2009 – Present', affiliationOrRegion: 'Mountain View, California', contributionNote: 'Built the first commercial fully autonomous robotaxi fleet.' }
    ],
    predecessors: ['satellites-gps', 'deep-learning-alexnet', 'radar', 'navigation-maritime', 'internal-combustion-engine'],
    successors: [],
    modern_legacy: 'Commercial robotaxi fleets, automated freight trucking, autonomous delivery drones, warehouse robotics, and autonomous Mars rovers (Perseverance).',
    sources: [
      { source: 'Thrun, S., et al. Stanley: The Robot that Won the DARPA Grand Challenge (J. Field Robotics, 2006)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1002/rob.20147' },
      { source: 'Waymo Safety Report: Millions of Autonomous Miles Evaluated', sourceType: 'institutional', sourceUrl: 'https://waymo.com/safety/' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Waymo_Jaguar_I-Pace_in_San_Francisco_2022.jpg/800px-Waymo_Jaguar_I-Pace_in_San_Francisco_2022.jpg',
      caption: 'Waymo fully autonomous Jaguar I-PACE operating driverless in San Francisco with roof-mounted LiDAR and radar pods.',
      attribution: 'Wikimedia Commons (CC BY-SA 4.0)',
      license: 'CC BY-SA 4.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Commercially certified driverless autonomous vehicles operating on public roads in multiple US cities with published safety telemetry.'
  },

  // ==========================================
  // 9. ADDITIONAL KEY MILESTONES
  // ==========================================
  {
    id: 'metallurgy-iron',
    name: 'Iron Smelting & The Blast Furnace',
    aliases: ['Iron Age', 'Bloomery iron', 'Cast iron blast furnace'],
    date: '~1,200 BCE',
    date_numeric: -1200,
    date_precision: 'century',
    era: 'ANCIENT_WORLD',
    domain: 'MATERIALS',
    type: 'Pyrometallurgical System',
    region: 'Anatolia (Hittites) & Ancient China',
    civilization: 'Hittite Kingdom / Zhou Dynasty China',
    lat: 40.0197,
    lng: 34.6153,
    overview: 'The high-temperature reduction of abundant iron oxide ores (hematite, magnetite) using carbon monoxide from charcoal fires inside bloomery and blast furnaces.',
    why_it_matters: 'Democratized metallurgy. Unlike copper and tin (which were rare and required elite international trade networks), iron ore was ubiquitous across the Earth’s crust, arming ordinary farmers with durable plows and axes.',
    problem_solved: 'Bronze required scarce tin that had to be shipped from distant corners of Europe (Cornwall or Afghanistan), making metal tools an expensive luxury.',
    mechanism: 'Iron melts at 1,538°C (far higher than copper). Bloomeries heated ore to 1,200°C to create a spongy solid bloom of iron and slag, consolidated by manual forging. Chinese blast furnaces achieved liquid cast iron by adding phosphorus and continuous bellows.',
    historical_development: [
      { stage: 'Meteoric Iron Working', period: '~3,000 BCE', description: 'Cold-hammering nickel-rich iron meteorites for ritual daggers (Tutankhamun dagger).' },
      { stage: 'Anatolian Smelting Mastery', period: '~1,200 BCE', description: 'Hittites in Anatolia master bloomery furnace reduction, spreading technology following Bronze Age collapse.' },
      { stage: 'Chinese Blast Furnaces', period: '~500 BCE', description: 'Water-powered bellows create continuous liquid pig iron centuries before European blast furnaces.' }
    ],
    contributors: [
      { name: 'Hittite & Levantine Metallurgists', role: 'collective_culture', periodOrLifespan: '~1200 BCE', affiliationOrRegion: 'Anatolia / Levant', contributionNote: 'Pioneered bloomery smelting and carburization.' }
    ],
    predecessors: ['metallurgy-copper', 'controlled-fire', 'pottery'],
    successors: ['the-wheel', 'mechanical-clock', 'steam-engine', 'bessemer-steel-process'],
    modern_legacy: 'Modern blast furnaces, structural steel construction, rebar reinforced concrete, and global maritime container hulls.',
    sources: [
      { source: 'Tylecote, R.F. A History of Metallurgy', sourceType: 'academic' },
      { source: 'Muhly, J.D. The Coming of the Iron Age', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hittite_iron_sword.jpg/800px-Hittite_iron_sword.jpg',
      caption: 'Ancient forged iron blade from the Eastern Mediterranean Iron Age.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical iron artifacts and slag heaps carbon-dated across the Mediterranean and China.'
  },
  {
    id: 'concrete-hydraulic-mortar',
    name: 'Roman Pozzolanic Concrete & Hydraulic Mortar',
    aliases: ['Opus caementicium', 'Roman concrete', 'Hydraulic lime', 'Pozzolana'],
    date: '~150 BCE – 125 CE',
    date_numeric: -100,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'MATERIALS',
    type: 'Composite Structural Material',
    region: 'Pozzuoli, Bay of Naples & Rome, Italy',
    civilization: 'Roman Empire',
    lat: 40.8228,
    lng: 14.1203,
    overview: 'A revolutionary artificial stone made by slaking quicklime with volcanic ash (pozzolana) and seawater, forming calcium-aluminum-silicate-hydrate (C-A-S-H) crystals capable of curing underwater and self-healing microcracks.',
    why_it_matters: 'Liberated architecture from post-and-beam stone limits, allowing the Roman Pantheon (still the world’s largest unreinforced concrete dome after 1,900 years) and enduring maritime breakwaters.',
    problem_solved: 'Traditional mortars dissolved in seawater or required dry air to cure, preventing deep-water harbor construction and massive curved architectural domes.',
    mechanism: 'Reactive volcanic ash from Pozzuoli contains aluminum and silica. When mixed with slaked lime: Ca(OH)2 + SiO2 + H2O → C-S-H gel. Recent synchrotron studies show that lime clasts dissolve over centuries to fill expanding micro-cracks with calcite, creating self-healing properties.',
    historical_development: [
      { stage: 'Campanian Harbor Construction', period: '~150 BCE', description: 'Early underwater concrete piers built in the Bay of Naples.' },
      { stage: 'Augustan Building Revolution', period: '~27 BCE', description: 'Vitruvius documents the exact formula for pozzolanic concrete in De Architectura.' },
      { stage: 'The Pantheon Dome', period: '125 CE', description: 'Emperor Hadrian rebuilds the Pantheon using graded volcanic aggregate (heavy basalt at base, lightweight pumice at crown).' }
    ],
    contributors: [
      { name: 'Roman Civil Engineers', role: 'collective_culture', periodOrLifespan: '~150 BCE – 200 CE', affiliationOrRegion: 'Rome & Campania', contributionNote: 'Discovered pozzolana reactivity and perfected volcanic aggregate grading.' },
      { name: 'Marcus Vitruvius Pollio', role: 'contributor', periodOrLifespan: '~80 – 15 BCE', affiliationOrRegion: 'Rome', contributionNote: 'Documented hydraulic mortar formulas in De Architectura.' }
    ],
    predecessors: ['pottery', 'controlled-fire'],
    successors: ['aqueducts-water-systems', 'paved-roads-network'],
    modern_legacy: 'Portland cement (the most consumed manufactured material on Earth by mass), oceanic seawalls, hydroelectric dams, and skyscrapers.',
    sources: [
      { source: 'Science Advances: Hot mixing and self-healing in ancient Roman concrete (2023)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1126/sciadv.add1602' },
      { source: 'Vitruvius: De Architectura (Ten Books on Architecture)', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pantheon_interior_dome.jpg/800px-Pantheon_interior_dome.jpg',
      caption: 'The coffered pozzolanic concrete dome of the Roman Pantheon, intact and unreinforced since 125 CE.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical monuments still standing in Rome and chemical core samples extracted from Caesarea harbor.'
  },
  {
    id: 'aqueducts-water-systems',
    name: 'Gravity-Fed Arched Aqueducts & Urban Hydraulics',
    aliases: ['Roman aqueducts', 'Hydraulic engineering', 'Pont du Gard', 'Qanats'],
    date: '~312 BCE – 100 CE',
    date_numeric: -312,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'ENGINEERING',
    type: 'Civil Hydraulic Infrastructure System',
    region: 'Rome, Italy & Nîmes, Gaul',
    civilization: 'Roman Empire / Persian Empire',
    lat: 43.9475,
    lng: 4.5350,
    overview: 'The large-scale municipal conveyance of fresh mountain spring water across dozens of miles via continuous, precision-graded underground conduits, inverted siphons, and multi-tier arched stone bridges.',
    why_it_matters: 'Allowed the first ancient mega-cities of over one million residents (Rome, Alexandria) to sustain public sanitation, baths, sewer flushes, and milling without waterborne pestilence.',
    problem_solved: 'Urban centers quickly poisoned local rivers and wells with human sewage and industrial run-off, triggering lethal cholera and dysentery epidemics.',
    mechanism: 'Engineers maintained an incredibly gentle uniform hydraulic gradient (often as low as 1 in 3,000 or 34 cm per kilometer) using the chorobates level. Water flowed solely by gravity from alpine springs into castella divisorium distribution tanks.',
    historical_development: [
      { stage: 'Persian Qanat Systems', period: '~600 BCE', description: 'Underground gently sloping gravity tunnels tapping subterranean aquifers in Persia.' },
      { stage: 'Aqua Appia First Aqueduct', period: '312 BCE', description: 'Appius Claudius Caecus constructs Rome’s first 16 km aqueduct.' },
      { stage: 'Pont du Gard & Monumental Spans', period: '~50 CE', description: '50-kilometer aqueduct constructed across the Gardon river valley in southern France using three tiers of ashlar arches.' }
    ],
    contributors: [
      { name: 'Sextus Julius Frontinus', role: 'contributor', periodOrLifespan: '~40 – 103 CE', affiliationOrRegion: 'Rome', contributionNote: 'Water commissioner of Rome; authored De Aquis Urbis Romae detailing aqueduct throughput.' },
      { name: 'Appius Claudius Caecus', role: 'inventor', periodOrLifespan: '4th Century BCE', affiliationOrRegion: 'Rome', contributionNote: 'Initiated construction of the Aqua Appia.' }
    ],
    predecessors: ['concrete-hydraulic-mortar', 'geometry-euclidean'],
    successors: ['paved-roads-network', 'steam-engine'],
    modern_legacy: 'Modern municipal water utility distribution grids, gravity sewer networks, aqueduct canals (California State Water Project), and civil public health infrastructure.',
    sources: [
      { source: 'Frontinus, S.J. De Aquis Urbis Romae (The Water Supply of Rome)', sourceType: 'academic' },
      { source: 'Hodge, A.T. Roman Aqueducts & Water Supply', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pont_du_Gard_BLS.jpg/800px-Pont_du_Gard_BLS.jpg',
      caption: 'The Pont du Gard in southern France, a three-tier Roman aqueduct bridge spanning the Gardon river.',
      attribution: 'Benh LIEU SONG / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical stone structures, castella, and lead pipes preserved across Europe, North Africa, and the Near East.'
  },
  {
    id: 'paved-roads-network',
    name: 'Engineered Paved Highways & Road Networks',
    aliases: ['Roman roads', 'Via Appia', 'Macadamized roads', 'Highway engineering'],
    date: '~312 BCE – 1820 CE',
    date_numeric: -312,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'TRANSPORTATION',
    type: 'Civil Transportation Infrastructure',
    region: 'Rome, Italy → Great Britain (McAdam)',
    civilization: 'Roman Empire / Industrial Britain',
    lat: 41.8542,
    lng: 12.5278,
    overview: 'The construction of multi-layered, crowned, all-weather engineered roadbeds surfaced with interlocking stone or graded aggregate to allow year-round vehicular transport and military mobilization.',
    why_it_matters: 'Created continental overland connectivity. Over 85,000 kilometers of paved Roman roads bound the Mediterranean empire; John McAdam’s later aggregate roads enabled the stagecoach and automobile eras.',
    problem_solved: 'Dirt roads turned into impassable seas of mud in rain and winter, completely halting trade, couriers, and military supply trains for months every year.',
    mechanism: 'Layered cross-section: statumen (foundation stones), rudus (rubble and lime), nucleus (fine concrete), and summum dorsum (convex polygonal basalt paving stones). Crowned cross-sections shed rainwater into lateral drainage ditches.',
    historical_development: [
      { stage: 'Via Appia Construction', period: '312 BCE', description: 'Appius Claudius builds the first 212 km highway connecting Rome to Capua.' },
      { stage: 'Imperial Roman Postal Network (Cursus Publicus)', period: '~20 BCE – 300 CE', description: 'Relay post stations with fresh horses every 15 miles allow messages to travel 80 kilometers per day.' },
      { stage: 'Macadamized Stone Aggregates', period: '1820 CE', description: 'John Loudon McAdam introduces small angular crushed stones compacted by traffic, the precursor to asphalt.' }
    ],
    contributors: [
      { name: 'Appius Claudius Caecus', role: 'inventor', periodOrLifespan: '4th Century BCE', affiliationOrRegion: 'Rome', contributionNote: 'Initiated the Via Appia highway.' },
      { name: 'John Loudon McAdam', role: 'co-developer', periodOrLifespan: '1756 – 1836 CE', affiliationOrRegion: 'Scotland / England', contributionNote: 'Invented macadam aggregate road surfacing.' }
    ],
    predecessors: ['the-wheel', 'animal-domestication', 'concrete-hydraulic-mortar'],
    successors: ['steam-locomotive', 'internal-combustion-engine'],
    modern_legacy: 'Interstate highway networks (Autobahn, US Interstate, National Highway System of China), asphalt pavement formulations, and civil transport logistics.',
    sources: [
      { source: 'Chevallier, R. Roman Roads', sourceType: 'academic' },
      { source: 'McAdam, J.L. A Practical Essay on the Scientific Repair and Preservation of Public Roads (1819)', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Via_Appia_Antica_5.jpg/800px-Via_Appia_Antica_5.jpg',
      caption: 'The original basalt paving stones of the Via Appia Antica near Rome, showing cart wheel ruts.',
      attribution: 'MarkusMark / Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical paved Roman road segments preserved across Britain, France, Spain, Italy, and Turkey.'
  },
  {
    id: 'decimal-zero-algebra',
    name: 'Positional Zero, Decimal System & Symbolic Algebra',
    aliases: ['Hindu-Arabic numerals', 'Brahmagupta zero', 'Al-Jabr', 'Decimal place-value'],
    date: '~500 – 820 CE',
    date_numeric: 628,
    date_precision: 'century',
    era: 'MEDIEVAL_PERIOD',
    domain: 'KNOWLEDGE',
    type: 'Mathematical Symbolic Framework',
    region: 'Ujjain, India & Baghdad, Abbasid Caliphate',
    civilization: 'South Asia (Classical India) & Islamic Golden Age',
    lat: 23.1765,
    lng: 75.7885,
    overview: 'The invention of the number zero as both a place-value placeholder and a formal mathematical number with operational arithmetic rules, coupled with Muhammad ibn Musa al-Khwarizmi’s system of symbolic algebraic balance (al-Jabr).',
    why_it_matters: 'The universal language of all modern calculation, computing, and science. Liberated humanity from the abacus and Roman numerals, enabling algorithms, calculus, and binary digital logic.',
    problem_solved: 'Calculating with Roman numerals (e.g. dividing DCCLIV by XLVI) was agonizingly complex, requiring specialized counting boards and severely crippling international trade and accounting.',
    mechanism: 'Base-10 positional digits (0–9) where the value of a digit is multiplied by 10^position. Brahmagupta defined arithmetic rules for zero (a + 0 = a, a - 0 = a, a * 0 = 0). Al-Khwarizmi established systematic algebraic balance: adding or subtracting terms across an equals sign to isolate unknowns.',
    historical_development: [
      { stage: 'Aryabhata & Indian Positional System', period: '~499 CE', description: 'Aryabhata establishes positional base-10 mathematics and trigonometric sine tables.' },
      { stage: 'Brahmagupta’s Brahmasphutasiddhanta', period: '628 CE', description: 'First formal mathematical treatise treating zero (shunya) as a number with explicit arithmetic operations.' },
      { stage: 'Al-Khwarizmi’s Compendious Book on Calculation by Completion and Balancing', period: '~820 CE', description: 'Synthesizes Indian numerals with systematic geometric algebra; his name gives us the word "Algorithm" and his title "Algebra".' }
    ],
    contributors: [
      { name: 'Brahmagupta', role: 'inventor', periodOrLifespan: '598 – 668 CE', affiliationOrRegion: 'Ujjain, India', contributionNote: 'First to formulate arithmetic rules for operations with zero.' },
      { name: 'Muhammad ibn Musa al-Khwarizmi', role: 'inventor', periodOrLifespan: '~780 – 850 CE', affiliationOrRegion: 'House of Wisdom, Baghdad', contributionNote: 'Father of Algebra; introduced Hindu-Arabic numerals to the Western world.' },
      { name: 'Leonardo Fibonacci', role: 'popularizer', periodOrLifespan: '~1170 – 1250 CE', affiliationOrRegion: 'Pisa, Italy', contributionNote: 'Popularized the Hindu-Arabic numeral system in Europe in Liber Abaci (1202).' }
    ],
    predecessors: ['mathematics-base60', 'geometry-euclidean'],
    successors: ['calculus', 'analytical-engine-babbage', 'turing-machine-formal-logic'],
    modern_legacy: 'The universal global numeral system (0–9), floating-point arithmetic in CPUs, binary machine code (0 and 1), and computer science algorithms.',
    sources: [
      { source: 'Brahmagupta: Brahmasphutasiddhanta (628 CE)', sourceType: 'academic' },
      { source: 'al-Khwarizmi: Kitab al-Jabr wa-l-Muqabala (The Compendious Book on Calculation by Completion and Balancing, c. 820 CE)', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Al-Khwarizmi_portrait.jpg/800px-Al-Khwarizmi_portrait.jpg',
      caption: 'Soviet commemorative stamp depicting Persian mathematician Muhammad ibn Musa al-Khwarizmi.',
      attribution: 'Public Domain / USSR Post',
      license: 'Public Domain',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Original Arabic and Sanskrit manuscripts preserved in Oxford (Bodleian), Berlin, and Indian national libraries.'
  },
  {
    id: 'heliocentric-model',
    name: 'The Heliocentric Model & Celestial Revolution',
    aliases: ['Copernican revolution', 'De revolutionibus', 'Galilean telescope observations'],
    date: '1543 – 1610 CE',
    date_numeric: 1543,
    date_precision: 'year',
    era: 'EARLY_MODERN',
    domain: 'SCIENCE',
    type: 'Astrophysical Model',
    region: 'Frombork, Poland & Padua / Florence, Italy',
    civilization: 'Renaissance Europe',
    lat: 54.3575,
    lng: 19.6806,
    overview: 'The astronomical paradigm shift demonstrating that the Sun, not the Earth, sits at the gravitational center of the solar system, with Earth rotating daily on its polar axis and revolving annually around the Sun.',
    why_it_matters: 'Dethroned humanity from the physical center of the universe, triggering the Scientific Revolution and dissolving ancient dogma in favor of observational evidence.',
    problem_solved: 'Ptolemy’s geocentric model required dizzying arrays of arbitrary geometric epicycles, deferents, and equant points to account for the apparent retrograde motion of Mars and Jupiter.',
    mechanism: 'Apparent retrograde planetary motion is simply an optical perspective illusion caused by Earth overtaking outer planets on faster inner orbits. Galileo’s telescope confirmed this by revealing the complete crescent-to-gibbous phases of Venus.',
    historical_development: [
      { stage: 'Aristarchus of Samos Precursor', period: '~250 BCE', description: 'Ancient Hellenistic astronomer proposes Sun-centered model, rejected by contemporaries.' },
      { stage: 'Copernicus: De revolutionibus orbium coelestium', period: '1543 CE', description: 'Nicolaus Copernicus publishes the mathematical heliocentric planetary tables on his deathbed.' },
      { stage: 'Galileo’s Observational Proof', period: '1610 CE', description: 'Galileo observes Jupiter’s moons (proving not everything orbits Earth) and the phases of Venus, proving it orbits the Sun.' }
    ],
    contributors: [
      { name: 'Nicolaus Copernicus', role: 'inventor', periodOrLifespan: '1473 – 1543 CE', affiliationOrRegion: 'Frombork, Royal Prussia', contributionNote: 'Formulated the mathematical heliocentric model in De revolutionibus.' },
      { name: 'Galileo Galilei', role: 'co-developer', periodOrLifespan: '1564 – 1642 CE', affiliationOrRegion: 'Padua / Florence, Italy', contributionNote: 'Discovered the phases of Venus and Jupiter’s moons with his telescope.' },
      { name: 'Johannes Kepler', role: 'co-developer', periodOrLifespan: '1571 – 1630 CE', affiliationOrRegion: 'Prague, Holy Roman Empire', contributionNote: 'Replaced circular orbits with precise mathematical Keplerian ellipses.' }
    ],
    predecessors: ['optics-microscope-telescope', 'astronomy-astrolabe', 'geometry-euclidean'],
    successors: ['classical-mechanics-newton', 'scientific-method'],
    modern_legacy: 'Planetary astrophysics, celestial mechanics, solar system robotic exploration trajectories, and exoplanet detection.',
    sources: [
      { source: 'Copernicus, N. De revolutionibus orbium coelestium (1543)', sourceType: 'academic' },
      { source: 'Kuhn, T.S. The Copernican Revolution: Planetary Astronomy in the Development of Western Thought', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Copernican_heliocentrism_diagram-2.jpg/800px-Copernican_heliocentrism_diagram-2.jpg',
      caption: 'Diagram of the heliocentric solar system from Copernicus’s De revolutionibus (1543).',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'manuscript'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Original 1543 first editions preserved in libraries worldwide and confirmed by interplanetary space probes.'
  },
  {
    id: 'battery-voltaic-pile',
    name: 'The Electrochemical Battery (Voltaic Pile)',
    aliases: ['Voltaic pile', 'Chemical battery', 'Continuous current electricity'],
    date: '1800 CE',
    date_numeric: 1800,
    date_precision: 'exact',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'ENERGY',
    type: 'Electrochemical Energy Storage System',
    region: 'Pavia & Como, Cisalpine Republic (Italy)',
    civilization: 'Industrial Europe',
    lat: 45.1866,
    lng: 9.1558,
    overview: 'The first device capable of generating a sustained, continuous direct electrical current through galvanic oxidation-reduction reactions between alternating metal discs separated by electrolyte-soaked brine pads.',
    why_it_matters: 'Transformed electricity from an erratic static novelty (Leyden jars, sparks) into a stable, controllable laboratory reagent, directly enabling electroplating, electrolysis, electromagnetism, and the electric telegraph.',
    problem_solved: 'Static friction machines and electrostatic Leyden jars discharged their entire charge in a microsecond burst, making sustained electrical experimentation impossible.',
    mechanism: 'Stacking alternating discs of zinc and copper separated by cardboard soaked in sulfuric acid or salt brine. Zinc oxidizes (Zn → Zn2+ + 2e-), creating an electromotive force (EMF) of ~0.76 V per cell that drives electrons through an external wire to reduce hydrogen ions at the copper cathode.',
    historical_development: [
      { stage: 'Galvani’s "Animal Electricity"', period: '1791 CE', description: 'Luigi Galvani observes frog legs twitching when touched by dissimilar metals, attributing it to animal bioelectricity.' },
      { stage: 'Volta’s Pile Announcement', period: 'March 20, 1800 CE', description: 'Alessandro Volta writes to Sir Joseph Banks, President of the Royal Society, detailing the stacked metallic pile.' },
      { stage: 'Davy & Electrolytic Elemental Discovery', period: '1807 CE', description: 'Humphry Davy builds a massive 2,000-plate battery, discovering potassium, sodium, calcium, and magnesium via electrolysis.' }
    ],
    contributors: [
      { name: 'Alessandro Volta', role: 'inventor', periodOrLifespan: '1745 – 1827 CE', affiliationOrRegion: 'University of Pavia, Italy', contributionNote: 'Constructed the voltaic pile; the unit of electric potential (Volt) is named in his honor.' },
      { name: 'Luigi Galvani', role: 'theoretical_precursor', periodOrLifespan: '1737 – 1798 CE', affiliationOrRegion: 'University of Bologna', contributionNote: 'Discovered galvanic contractions in frog nerve-muscle preparations.' }
    ],
    predecessors: ['metallurgy-copper', 'scientific-method'],
    successors: ['electric-telegraph', 'electromagnetism-maxwell', 'lithium-ion-battery'],
    modern_legacy: 'All portable energy storage: lead-acid automotive batteries, alkaline cells, electric vehicle battery packs, and renewable grid battery buffers.',
    sources: [
      { source: 'Volta, A. On the Electricity Excited by the Mere Contact of Conducting Substances of Different Kinds (Phil. Trans. Roy. Soc., 1800)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1098/rstl.1800.0018' },
      { source: 'Pancaldi, G. Volta: Science and Culture in the Age of Enlightenment', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Volta_battery_horizontal.jpg/800px-Volta_battery_horizontal.jpg',
      caption: 'Original horizontal voltaic pile constructed by Alessandro Volta, preserved at Tempio Voltiano, Como.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical instruments built by Volta preserved at the Tempio Voltiano museum in Como, Italy.'
  },
  {
    id: 'bessemer-steel-process',
    name: 'The Bessemer Steel Converter',
    aliases: ['Bessemer process', 'Mass steel manufacturing', 'Pneumatic steelmaking'],
    date: '1856 CE',
    date_numeric: 1856,
    date_precision: 'exact',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'MATERIALS',
    type: 'Pyrometallurgical Industrial Process',
    region: 'Sheffield, Great Britain',
    civilization: 'Industrial Britain',
    lat: 53.3811,
    lng: -1.4701,
    overview: 'The mass industrial conversion of molten pig iron into high-strength structural steel in 20 minutes by blasting compressed atmospheric air through a pear-shaped tilting converter, burning off excess carbon impurities.',
    why_it_matters: 'Reduced the cost of steel from £40 per ton to under £6 per ton, enabling skyscrapers, transcontinental steel railway rails, long-span suspension bridges, and modern naval armadas.',
    problem_solved: 'Steel was a boutique luxury made in small clay crucibles (a few kilograms at a time), while brittle cast iron shattered under tension and wrought iron lacked tensile strength.',
    mechanism: 'Air blown through bottom tuyeres violently oxidizes silicon, manganese, and carbon in molten pig iron: C + O2 → CO/CO2. The oxidation reaction is exothermic, keeping the metal liquid at over 1,600°C without requiring external fuel. Spiegeleisen (ferromanganese) is added to reintroduce exact carbon ratios and deoxidize.',
    historical_development: [
      { stage: 'William Kelly’s Air-Boiling Precursor', period: '1851 CE', description: 'Kelly in Kentucky experiments with air-blast decarburization.' },
      { stage: 'Henry Bessemer’s Patent', period: '1856 CE', description: 'Bessemer announces "On the Manufacture of Malleable Iron and Steel without Fuel" at the British Association in Cheltenham.' },
      { stage: 'Robert Mushet’s Deoxidizer Solution', period: '1857 CE', description: 'Mushet patents the addition of spiegeleisen (manganese alloy) to prevent oxide embrittlement, making the process commercially reliable.' }
    ],
    contributors: [
      { name: 'Sir Henry Bessemer', role: 'inventor', periodOrLifespan: '1813 – 1898 CE', affiliationOrRegion: 'Sheffield, Great Britain', contributionNote: 'Invented and commercialized the tilting pneumatic steel converter.' },
      { name: 'Robert Forester Mushet', role: 'co-developer', periodOrLifespan: '1811 – 1891 CE', affiliationOrRegion: 'Forest of Dean, Great Britain', contributionNote: 'Solved steel embrittlement by introducing spiegeleisen deoxidizer.' }
    ],
    predecessors: ['metallurgy-iron', 'thermodynamics'],
    successors: ['steam-locomotive', 'paved-roads-network'],
    modern_legacy: 'Basic Oxygen Steelmaking (BOS) producing over 1.8 billion tons of steel annually for global infrastructure, vehicles, and architecture.',
    sources: [
      { source: 'Bessemer, H. Sir Henry Bessemer, F.R.S.: An Autobiography', sourceType: 'academic' },
      { source: 'Science Museum London: Bessemer Converter artifact collection', sourceType: 'institutional' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bessemer_converter_Kelham_Island.jpg/800px-Bessemer_converter_Kelham_Island.jpg',
      caption: 'Surviving 19th-century Bessemer converter at Kelham Island Industrial Museum, Sheffield.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'artifact'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical Bessemer converters preserved at Kelham Island (Sheffield) and Station Square (Pittsburgh).'
  },
  {
    id: 'silicon-solar-cell',
    name: 'The Silicon Photovoltaic Solar Cell',
    aliases: ['Solar cell', 'Photovoltaics (PV)', 'Bell Solar Battery', 'Silicon p-n solar cell'],
    date: 'April 25, 1954 CE',
    date_numeric: 1954,
    date_precision: 'exact',
    era: 'COMPUTING_AGE',
    domain: 'ENERGY',
    type: 'Semiconductor Renewable Energy System',
    region: 'Murray Hill, New Jersey, United States',
    civilization: 'Mid-20th Century United States',
    lat: 40.7029,
    lng: -74.4013,
    overview: 'The solid-state conversion of sunlight directly into electrical electricity using silicon semiconductor p-n junctions via the photovoltaic effect, achieving a breakthrough 6% conversion efficiency.',
    why_it_matters: 'The cornerstone of the global clean energy transition. Enabled satellites to operate in space for decades and provides the cheapest source of new electricity generation in human history.',
    problem_solved: 'Previous selenium solar cells had efficiencies below 0.5%, making direct solar power harvesting a useless laboratory novelty incapable of powering useful machines.',
    mechanism: 'Incoming photons with energy greater than the silicon bandgap (1.1 eV) excite electrons from the valence band to the conduction band, generating electron-hole pairs. The internal electric field of the p-n junction sweeps electrons to the n-side and holes to the p-side, driving current through an external circuit.',
    historical_development: [
      { stage: 'Becquerel Photoelectric Discovery', period: '1839 CE', description: 'Edmond Becquerel observes electricity produced by illuminated electrolytic cells.' },
      { stage: 'Bell Labs Silicon Solar Breakthrough', period: 'April 25, 1954 CE', description: 'Daryl Chapin, Calvin Fuller, and Gerald Pearson demonstrate the silicon solar cell, powering a toy Ferris wheel and radio transmitter.' },
      { stage: 'Vanguard 1 Satellite Deployment', period: 'March 1958 CE', description: 'Vanguard 1 becomes the first satellite powered by solar cells, remaining operational for years.' }
    ],
    contributors: [
      { name: 'Daryl Chapin', role: 'inventor', periodOrLifespan: '1906 – 1995 CE', affiliationOrRegion: 'Bell Telephone Laboratories', contributionNote: 'Electrical engineer who integrated the cells into practical power modules.' },
      { name: 'Calvin Fuller', role: 'inventor', periodOrLifespan: '1902 – 1994 CE', affiliationOrRegion: 'Bell Telephone Laboratories', contributionNote: 'Physical chemist who invented silicon boron-diffusion techniques.' },
      { name: 'Gerald Pearson', role: 'inventor', periodOrLifespan: '1905 – 1987 CE', affiliationOrRegion: 'Bell Telephone Laboratories', contributionNote: 'Physicist who fabricated the p-n junction photovoltaic diodes.' }
    ],
    predecessors: ['quantum-mechanics', 'transistor-semiconductor'],
    successors: ['satellites-gps', 'space-station-iss'],
    modern_legacy: 'Over 1,600 gigawatts of solar photovoltaic capacity installed globally, supplying exponential carbon-free electricity to millions of homes and electric grids.',
    sources: [
      { source: 'Chapin, D.M., Fuller, C.S., & Pearson, G.L. A New Silicon p-n Junction Photocell for Converting Solar Radiation into Electrical Power (J. Appl. Phys., 1954)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1063/1.1721711' },
      { source: 'National Renewable Energy Laboratory: Best Research-Cell Efficiency Chart', sourceType: 'institutional', sourceUrl: 'https://www.nrel.gov/pv/cell-efficiency.html' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Solar_panels_on_a_roof.jpg/800px-Solar_panels_on_a_roof.jpg',
      caption: 'Modern rooftop residential solar photovoltaic array generating clean electricity.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical 1954 Bell Solar Battery prototypes preserved at the Smithsonian National Museum of American History.'
  },
  {
    id: 'optical-fiber-telecom',
    name: 'Low-Loss Optical Fiber Telecommunications',
    aliases: ['Fiber optics', 'Optical glass waveguide', 'Corning silica fiber', 'Kao fiber'],
    date: '1966 – 1970 CE',
    date_numeric: 1970,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'COMMUNICATION',
    type: 'Photonic Telecommunications Infrastructure',
    region: 'Harlow, Essex, UK & Corning, New York, United States',
    civilization: 'Late 20th Century Global Network',
    lat: 42.1428,
    lng: -77.0547,
    overview: 'The transmission of modulated laser pulses of digital light through hair-thin strands of ultra-pure fused silica glass via total internal reflection, achieving signal attenuation under 20 dB/km.',
    why_it_matters: 'The physical nervous system of the global Internet. Carries over 99% of all transoceanic and intercontinental data traffic at petabit-per-second throughputs.',
    problem_solved: 'Copper coaxial cables and microwave relay towers suffered from massive electrical attenuation and bandwidth bottlenecks, making global high-speed broadband internet impossible.',
    mechanism: 'Light guided within a high refractive index silica glass core (n1) reflects off a lower refractive index cladding (n2) per total internal reflection (theta > critical angle). Wavelength Division Multiplexing (WDM) transmits dozens of laser wavelengths down a single fiber strand simultaneously.',
    historical_development: [
      { stage: 'Charles Kao’s Theoretical Paper', period: '1966 CE', description: 'Kao proves that high light loss was due to impurities in glass, predicting pure silica could achieve losses below 20 dB/km.' },
      { stage: 'Corning Low-Loss Silica Glass Breakthrough', period: '1970 CE', description: 'Robert Maurer, Donald Keck, and Peter Schultz at Corning synthesize silica glass with titanium/germanium dopants, hitting 17 dB/km.' },
      { stage: 'Erbium-Doped Fiber Amplifiers (EDFA)', period: '1987 CE', description: 'David Payne invents all-optical amplification, allowing optical signals to traverse oceans without electronic regenerators.' }
    ],
    contributors: [
      { name: 'Charles K. Kao', role: 'inventor', periodOrLifespan: '1933 – 2018 CE', affiliationOrRegion: 'Standard Telecommunication Laboratories (STL), UK', contributionNote: 'Father of Fiber Optics; awarded 2009 Nobel Prize in Physics.' },
      { name: 'Robert Maurer', role: 'co-developer', periodOrLifespan: '1924 – Present', affiliationOrRegion: 'Corning Glass Works', contributionNote: 'Led team that synthesized first low-loss optical fiber.' },
      { name: 'Donald Keck', role: 'co-developer', periodOrLifespan: '1941 – Present', affiliationOrRegion: 'Corning Glass Works', contributionNote: 'Experimental physicist who measured first sub-20 dB/km transmission.' }
    ],
    predecessors: ['electromagnetism-maxwell', 'electric-telegraph', 'telephone'],
    successors: ['internet-arpanet', 'world-wide-web', 'internet-arpanet'],
    modern_legacy: 'Over 5 billion kilometers of optical fiber deployed worldwide, powering global 5G backhaul, cloud datacenters, and transoceanic internet links.',
    sources: [
      { source: 'Kao, C.K., & Hockham, G.A. Dielectric-fibre surface waveguides for optical frequencies (Proc. IEE, 1966)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1049/piee.1966.0189' },
      { source: 'Nobel Prize in Physics 2009: Charles K. Kao', sourceType: 'institutional', sourceUrl: 'https://www.nobelprize.org/prizes/physics/2009/summary/' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fibre_optic.jpg/800px-Fibre_optic.jpg',
      caption: 'Bundle of glass optical fibers transmitting illuminated laser light via total internal reflection.',
      attribution: 'Public Domain / Wikimedia Commons',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical fiber specimens preserved in Corning Museum of Glass and validated across billions of operational fiber links.'
  },
  {
    id: 'lithium-ion-battery',
    name: 'The Intercalation Lithium-Ion Battery',
    aliases: ['Li-ion battery', 'Intercalation electrode', 'Goodenough-Whittingham-Yoshino battery'],
    date: '1976 – 1985 CE',
    date_numeric: 1985,
    date_precision: 'decade',
    era: 'INTERNET_AGE',
    domain: 'ENERGY',
    type: 'Electrochemical Energy Storage System',
    region: 'Oxford, UK (Goodenough) & Tokyo, Japan (Yoshino)',
    civilization: 'Late 20th Century Global Technology',
    lat: 35.6762,
    lng: 139.6503,
    overview: 'A lightweight rechargeable secondary battery that stores electrical energy by shuttling lithium ions (Li+) reversibly between the interstitial molecular planes of a cobalt oxide cathode and a carbon graphite anode.',
    why_it_matters: 'The electrochemical powerpack of the portable electronics and electric vehicle revolution. Enabled laptops, smartphones, cordless power tools, and modern long-range electric vehicles.',
    problem_solved: 'Lead-acid and nickel-cadmium batteries were extremely heavy, suffered from memory effect, and had low energy densities (under 40 Wh/kg), making electric cars and ultra-thin smartphones impossible.',
    mechanism: 'During discharge, lithium ions deintercalate from the graphite anode (LiC6 → C6 + Li+ + e-) and travel through a non-aqueous liquid organic electrolyte, intercalating into the lithium cobalt oxide cathode (Li_1-x CoO2 + x Li+ + x e- → LiCoO2), generating 3.7 V cell potential.',
    historical_development: [
      { stage: 'Whittingham Titanium Disulfide Cathode', period: '1976 CE', description: 'M. Stanley Whittingham at Exxon invents first intercalation battery, but metallic lithium anodes caused dendritic fires.' },
      { stage: 'Goodenough Lithium Cobalt Oxide Discovery', period: '1980 CE', description: 'John B. Goodenough at Oxford University discovers LiCoO2 cathode, doubling battery voltage to 4 volts.' },
      { stage: 'Yoshino Carbon Anode & Commercialization', period: '1985 – 1991 CE', description: 'Akira Yoshino replaces dangerous metallic lithium with petroleum coke/graphite; Sony commercializes first consumer cell in 1991.' }
    ],
    contributors: [
      { name: 'John B. Goodenough', role: 'inventor', periodOrLifespan: '1922 – 2023 CE', affiliationOrRegion: 'University of Oxford / UT Austin', contributionNote: 'Identified LiCoO2 cathode material; oldest person to receive a Nobel Prize (at age 97).' },
      { name: 'M. Stanley Whittingham', role: 'inventor', periodOrLifespan: '1941 – Present', affiliationOrRegion: 'Exxon / Binghamton University', contributionNote: 'Discovered the concept of electrochemical intercalation.' },
      { name: 'Akira Yoshino', role: 'inventor', periodOrLifespan: '1948 – Present', affiliationOrRegion: 'Asahi Kasei / Meijo University', contributionNote: 'Developed the safe carbonaceous anode and created the first safe commercial prototype.' }
    ],
    predecessors: ['battery-voltaic-pile', 'quantum-mechanics'],
    successors: ['smartphone-mobile', 'autonomous-navigation'],
    modern_legacy: 'Powers every smartphone, laptop, electric car (Tesla, BYD), and utility-scale grid storage batteries (Megapack).',
    sources: [
      { source: 'Nobel Prize in Chemistry 2019: Goodenough, Whittingham, and Yoshino', sourceType: 'institutional', sourceUrl: 'https://www.nobelprize.org/prizes/chemistry/2019/summary/' },
      { source: 'Mizushima, K., Jones, P.C., Wiseman, P.J., & Goodenough, J.B. LixCoO2 (0<x<-1): A new cathode material for batteries of high energy density (Materials Res. Bull., 1980)', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Lithium-ion_battery_mechanism.png/800px-Lithium-ion_battery_mechanism.png',
      caption: 'Schematic illustrating lithium ion intercalation shuttling between graphite anode and cobalt oxide cathode during charge and discharge.',
      attribution: 'Wikimedia Commons (CC BY-SA 3.0)',
      license: 'CC BY-SA 3.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Verified in patent archives, Nobel Foundation records, and trillions of operational cells.'
  },
  {
    id: 'space-station-iss',
    name: 'Modular Space Stations & The International Space Station',
    aliases: ['ISS', 'Mir', 'Orbital space station', 'Modular space habitat'],
    date: '1986 – 1998 CE',
    date_numeric: 1998,
    date_precision: 'year',
    era: 'INTERNET_AGE',
    domain: 'SPACE',
    type: 'Orbital Habitat & Research Laboratory',
    region: 'Low Earth Orbit (400 km altitude)',
    civilization: 'Post-Cold War International Space Coalition',
    lat: 0.0,
    lng: 0.0,
    overview: 'The assembly and continuous human habitation of a 450-ton modular orbital laboratory in low Earth orbit, jointly constructed by 15 nations (NASA, Roscosmos, ESA, JAXA, CSA).',
    why_it_matters: 'The most complex engineering project and peacetime international scientific collaboration in human history, continuously occupied by humans since November 2, 2000.',
    problem_solved: 'Short spaceflights (like Apollo or Mercury) lasted days or weeks, preventing long-duration biological study of microgravity bone loss, fluid shifts, and closed-loop life support.',
    mechanism: 'Modules launched by Space Shuttles and Proton rockets are berthed together via common docking mechanisms. Giant solar array wings rotate to generate 120 kW of power, while water recycling systems recover 98% of astronaut moisture and sweat.',
    historical_development: [
      { stage: 'Salyut & Mir Stations', period: '1971 – 1986 CE', description: 'Soviet Union pioneers modular space architecture with Mir, demonstrating long-duration human space endurance.' },
      { stage: 'First Module Launch (Zarya)', period: 'November 20, 1998 CE', description: 'Russian Proton rocket launches Zarya cargo module, joined two weeks later by US Unity node aboard Endeavour.' },
      { stage: 'Continuous Human Habitation', period: 'November 2, 2000 – Present', description: 'Expedition 1 crew (Bill Shepherd, Yuri Gidzenko, Sergei Krikalev) docks, beginning over 24 years of unbroken human presence in orbit.' }
    ],
    contributors: [
      { name: 'NASA & Roscosmos Engineering Teams', role: 'collective_culture', periodOrLifespan: '1993 – Present', affiliationOrRegion: 'Houston, TX / Moscow, Russia', contributionNote: 'Jointly architected and assembled the International Space Station.' },
      { name: 'European, Japanese & Canadian Space Agencies (ESA/JAXA/CSA)', role: 'co-developer', periodOrLifespan: '1998 – Present', affiliationOrRegion: 'Europe, Japan, Canada', contributionNote: 'Contributed Columbus lab, Kibo module, and Canadarm2 robotic arm.' }
    ],
    predecessors: ['rocketry-spaceflight', 'silicon-solar-cell'],
    successors: ['reusable-orbital-rocketry'],
    modern_legacy: 'Over 3,000 scientific microgravity experiments in protein crystallization, pharmaceutical development, cancer research, and preparations for crewed Mars missions.',
    sources: [
      { source: 'NASA International Space Station Research and Technology', sourceType: 'institutional', sourceUrl: 'https://www.nasa.gov/international-space-station/' },
      { source: 'Harland, D.M. The Story of Space Station Mir', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/800px-International_Space_Station_after_undocking_of_STS-132.jpg',
      caption: 'The International Space Station photographed from the departing Space Shuttle Atlantis in May 2010.',
      attribution: 'NASA / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical orbital station tracked live daily across skies worldwide.'
  },
  {
    id: 'reusable-orbital-rocketry',
    name: 'Propulsive Vertical Landing & Reusable Rocketry',
    aliases: ['Falcon 9 landing', 'Reusable rocketry', 'SpaceX booster recovery', 'Starship'],
    date: 'December 21, 2015 CE',
    date_numeric: 2015,
    date_precision: 'exact',
    era: 'AI_ERA',
    domain: 'SPACE',
    type: 'Aerospace Propulsion & Autonomous Guidance System',
    region: 'Cape Canaveral, Florida & Hawthorne, California',
    civilization: 'Commercial Spaceflight Era',
    lat: 28.3922,
    lng: -80.6077,
    overview: 'The autonomous aerodynamic deceleration and supersonic retro-propulsive vertical touchdown of orbital-class rocket boosters onto drone ships and landing pads for rapid refurbishment and reflight.',
    why_it_matters: 'Slashed the cost of putting payload mass into orbit by over 90% (from $50,000/kg to under $2,000/kg), breaking the disposable launch economic model that held since 1957.',
    problem_solved: 'For six decades, multi-million-dollar rockets were discarded into the ocean after a single 3-minute burn, making access to space astronomically expensive.',
    mechanism: 'Following stage separation, the booster performs a boostback burn, uses autonomous cold-gas thrusters and aerodynamic titanium grid fins to steer through hypersonic atmospheric reentry, and executes a terminal single-engine "suicide burn" with landing legs deploying in the final two seconds.',
    historical_development: [
      { stage: 'Grasshopper Testbed Flights', period: '2012 – 2013 CE', description: 'SpaceX tests low-altitude vertical takeoff and landing (VTOL) algorithms in McGregor, Texas.' },
      { stage: 'First Orbital Class Recovery (Landing Zone 1)', period: 'December 21, 2015 CE', description: 'Falcon 9 launches 11 Orbcomm satellites and lands booster stage vertically at Cape Canaveral.' },
      { stage: 'Routine Fleet Reflight', period: '2017 – 2024 CE', description: 'Individual Falcon 9 boosters fly and land more than 20 times each, launching thousands of Starlink satellites.' }
    ],
    contributors: [
      { name: 'SpaceX Propulsion & Guidance Engineering Team', role: 'collective_culture', periodOrLifespan: '2002 – Present', affiliationOrRegion: 'Hawthorne, California', contributionNote: 'Engineered Merlin 1D throttle control, grid fin guidance, and autonomous landing code.' },
      { name: 'Elon Musk', role: 'popularizer', periodOrLifespan: '1971 – Present', affiliationOrRegion: 'SpaceX', contributionNote: 'Chief Engineer who directed development of propulsive reusable architectures.' }
    ],
    predecessors: ['rocketry-spaceflight', 'satellites-gps', 'microprocessor-cpu', 'autonomous-navigation'],
    successors: [],
    modern_legacy: 'Over 300 successful orbital booster landings, mega-constellations (Starlink), commercial astronaut launches, and the Starship fully reusable vehicle architecture.',
    sources: [
      { source: 'AIAA Aerospace Research: Supersonic Retro-Propulsion for Reusable Launch Vehicles', sourceType: 'academic' },
      { source: 'NASA Commercial Crew Program: SpaceX Falcon 9 Reusability Certification', sourceType: 'institutional', sourceUrl: 'https://www.nasa.gov/commercial-crew-program/' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falcon_9_first_stage_landing.jpg/800px-Falcon_9_first_stage_landing.jpg',
      caption: 'Falcon 9 first stage booster performing a propulsive vertical touchdown on autonomous droneship "Of Course I Still Love You".',
      attribution: 'SpaceX / Public Domain',
      license: 'Public Domain',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Over 300 verified landings broadcast live with telemetry and certified by NASA for human spaceflight.'
  },
  {
    id: 'genetic-engineering-crispr',
    name: 'CRISPR-Cas9 Programmable Gene Editing',
    aliases: ['CRISPR', 'Cas9 endonuclease', 'Precision genome editing', 'Doudna-Charpentier tool'],
    date: 'August 17, 2012 CE',
    date_numeric: 2012,
    date_precision: 'exact',
    era: 'INTERNET_AGE',
    domain: 'MEDICINE',
    type: 'Molecular Biotechnological Editing Tool',
    region: 'Berkeley, California & Umeå, Sweden',
    civilization: '21st Century Global Biomedical Research',
    lat: 37.8719,
    lng: -122.2585,
    overview: 'The repurposing of an ancient bacterial adaptive immune system into a programmable molecular scissor capable of targeting and cutting exact sequences of DNA in living eukaryotic cells using a single-guide RNA.',
    why_it_matters: 'Transformed genetic engineering from clumsy, imprecise randomness into exact, programmable word processing of the biological code, leading to cures for sickle cell disease and genetic blindness.',
    problem_solved: 'Zinc-finger nucleases and TALENs required months of labor-intensive protein engineering for every single target DNA sequence and cost thousands of dollars per experiment.',
    mechanism: 'A synthetic single guide RNA (sgRNA) matches a 20-nucleotide target sequence adjacent to a Protospacer Adjacent Motif (PAM: 5’-NGG-3’). The Cas9 endonuclease protein unwinds the double helix and cuts both DNA strands, allowing targeted gene knockout or donor template insertion.',
    historical_development: [
      { stage: 'Mojica’s Bacterial Immune Hypothesis', period: '2005 CE', description: 'Francisco Mojica identifies that CRISPR spacer sequences in halophilic archaea match bacteriophage viral genomes.' },
      { stage: 'Doudna & Charpentier in vitro Programmability', period: 'August 2012 CE', description: 'Jennifer Doudna and Emmanuelle Charpentier publish landmark Science paper showing engineered single-guide RNA can direct Cas9 to cleave any DNA sequence in vitro.' },
      { stage: 'First FDA Clinical Approval (Casgevy)', period: 'December 2023 CE', description: 'US FDA approves Casgevy, the world’s first CRISPR gene-editing therapy, curing sickle cell disease.' }
    ],
    contributors: [
      { name: 'Jennifer Doudna', role: 'inventor', periodOrLifespan: '1964 – Present', affiliationOrRegion: 'UC Berkeley', contributionNote: 'Co-invented programmable CRISPR-Cas9 genome editing; awarded 2020 Nobel Prize in Chemistry.' },
      { name: 'Emmanuelle Charpentier', role: 'inventor', periodOrLifespan: '1968 – Present', affiliationOrRegion: 'Max Planck Unit for the Science of Pathogens', contributionNote: 'Discovered tracrRNA role; shared 2020 Nobel Prize in Chemistry.' },
      { name: 'Feng Zhang', role: 'co-developer', periodOrLifespan: '1981 – Present', affiliationOrRegion: 'Broad Institute of MIT and Harvard', contributionNote: 'Demonstrated CRISPR-Cas9 genome editing in living human and mammalian cells in 2013.' }
    ],
    predecessors: ['dna-double-helix', 'optics-microscope-telescope'],
    successors: [],
    modern_legacy: 'Approved clinical therapies for sickle cell anemia and beta-thalassemia, disease-resistant crop engineering, and gene-drive pest eradication research.',
    sources: [
      { source: 'Jinek, M., Chylinski, K., Fonfara, I., Hauer, M., Doudna, J.A., & Charpentier, E. A Programmable Dual-RNA–Guided DNA Endonuclease in Adaptive Bacterial Immunity (Science, 2012)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1126/science.1225829' },
      { source: 'Nobel Prize in Chemistry 2020: Emmanuelle Charpentier and Jennifer A. Doudna', sourceType: 'institutional', sourceUrl: 'https://www.nobelprize.org/prizes/chemistry/2020/summary/' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cas9.png/800px-Cas9.png',
      caption: 'Three-dimensional crystal structure of Streptococcus pyogenes Cas9 endonuclease complexed with guide RNA and target DNA.',
      attribution: 'Thomas Splettstoesser / Wikimedia Commons (CC BY-SA 4.0)',
      license: 'CC BY-SA 4.0',
      type: 'diagram'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Thousands of laboratory replications and FDA/EMA approved human clinical therapeutics.'
  },
  {
    id: 'quantum-computing',
    name: 'Superconducting Quantum Computing & Qubits',
    aliases: ['Quantum processor', 'Qubits', 'Quantum supremacy', 'Transmon qubit'],
    date: '1998 – 2019 CE',
    date_numeric: 2019,
    date_precision: 'year',
    era: 'AI_ERA',
    domain: 'COMPUTING',
    type: 'Quantum Information System',
    region: 'Santa Barbara, California & Yorktown Heights, New York',
    civilization: '21st Century Global Quantum Research',
    lat: 34.4140,
    lng: -119.8489,
    overview: 'The physical realization of computational registers utilizing quantum superposition (|0> + |1>) and quantum entanglement across superconducting Josephson junction circuits cooled to millikelvin temperatures.',
    why_it_matters: 'Enables polynomial-time solutions to classically intractable problems (e.g. Shor’s factoring algorithm, Grover’s database search, molecular quantum chemistry simulation for battery design and drug discovery).',
    problem_solved: 'Simulating quantum mechanical molecular interactions on classical binary computers scales exponentially with atom count (2^N complexity), requiring universe-sized classical supercomputers for simple proteins.',
    mechanism: 'Superconducting aluminum circuits chilled in dilution refrigerators to 15 millikelvin exhibit macroscopic quantum phase coherence. Microwave pulses manipulate state vectors on the Bloch sphere, executing quantum logic gates (Hadamard, CNOT) to create computational quantum interference.',
    historical_development: [
      { stage: 'Feynman’s Quantum Simulation Conjectures', period: '1981 CE', description: 'Richard Feynman points out that quantum systems must be simulated by computers governed by quantum physics.' },
      { stage: 'Shor’s & Grover’s Algorithms', period: '1994 – 1996 CE', description: 'Peter Shor demonstrates polynomial-time prime factorization; Lov Grover discovers quadratic search speedup.' },
      { stage: 'Google Sycamore Quantum Supremacy', period: 'October 2019 CE', description: 'Google Quantum AI team demonstrates 53-qubit Sycamore processor performing a benchmark calculation in 200 seconds that would take supercomputers 10,000 years.' }
    ],
    contributors: [
      { name: 'Richard Feynman', role: 'theoretical_precursor', periodOrLifespan: '1918 – 1988 CE', affiliationOrRegion: 'Caltech', contributionNote: 'Proposed quantum computing for simulating quantum physics.' },
      { name: 'Peter Shor', role: 'theoretical_precursor', periodOrLifespan: '1959 – Present', affiliationOrRegion: 'Bell Labs / MIT', contributionNote: 'Invented Shor’s algorithm for quantum prime factorization.' },
      { name: 'John Martinis', role: 'inventor', periodOrLifespan: '1958 – Present', affiliationOrRegion: 'UC Santa Barbara / Google Quantum AI', contributionNote: 'Led hardware engineering of the Sycamore superconducting quantum processor.' }
    ],
    predecessors: ['quantum-mechanics', 'silicon-integrated-circuit'],
    successors: [],
    modern_legacy: 'Active quantum simulation of chemical catalyst design, nitrogenase fertilizer synthesis, and post-quantum cryptography standards (NIST).',
    sources: [
      { source: 'Arute, F., et al. Quantum supremacy using a programmable superconducting processor (Nature, 2019)', sourceType: 'academic', sourceUrl: 'https://doi.org/10.1038/s41586-019-1666-5' },
      { source: 'Nielsen, M.A., & Chuang, I.L. Quantum Computation and Quantum Information', sourceType: 'academic' }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IBM_Q_System_One.jpg/800px-IBM_Q_System_One.jpg',
      caption: 'Cryostat dilution refrigerator casing of the IBM Q System One quantum computer.',
      attribution: 'IBM Research / Wikimedia Commons (CC BY-ND 2.0)',
      license: 'CC BY-ND 2.0',
      type: 'photo'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Physical superconducting quantum processors operating in cloud facilities at IBM, Google, and Rigetti.'
  }
];

export const INNOVATIONS: Innovation[] = [...baseInnovations, ...batch1Innovations, ...batch2Innovations, ...batch3Innovations, ...batch4Innovations, ...batch5Innovations, ...batch6Innovations];

export function getInnovationById(id: string): Innovation | undefined {
  return INNOVATIONS.find(item => item.id === id);
}

