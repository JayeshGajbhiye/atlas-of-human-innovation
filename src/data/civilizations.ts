import { CivilizationInfo } from '../types/innovation';

export const CIVILIZATIONS: CivilizationInfo[] = [
  {
    id: 'mesopotamia',
    name: 'Mesopotamia (Sumer, Akkad, Babylon)',
    region: 'Tigris-Euphrates River Basin',
    period: '~4000 BCE – 539 BCE',
    description: 'Cradle of urban civilization between the Tigris and Euphrates. Pioneered cuneiform writing, base-60 sexagesimal mathematics, early irrigation canals, and legal codices.',
    lat: 32.5363,
    lng: 44.4208,
    keyContributions: ['Cuneiform Writing', 'The Wheel (Potter & Vehicular)', 'Base-60 Sexagesimal System', 'Monumental Brick Architecture', 'Astronomical Recording']
  },
  {
    id: 'ancient_egypt',
    name: 'Ancient Egypt',
    region: 'Nile River Valley',
    period: '~3100 BCE – 30 BCE',
    description: 'Developed along the fertile Nile floodplain. Mastered papyrus manufacture, solar calendarization, monumental masonry, surveying geometry, and hydraulic control.',
    lat: 26.8206,
    lng: 30.8025,
    keyContributions: ['Papyrus Manufacturing', '365-Day Solar Calendar', 'Surveying Geometry', 'Hydraulic Nilometer Networks', 'Hieroglyphic Script']
  },
  {
    id: 'indus_valley',
    name: 'Indus Valley (Harappan)',
    region: 'Indus River Basin & Western India',
    period: '~3300 BCE – 1300 BCE',
    description: 'Urban civilization famed for standardized baked-brick metrology, sophisticated covered sewer systems, urban drainage grids, and bronze metallurgy.',
    lat: 27.3297,
    lng: 68.1388,
    keyContributions: ['Standardized Weights & Decimal Metrology', 'Covered Hydraulic Urban Drainage', 'Dockyard Engineering (Lothal)', 'Lost-wax Bronze Casting']
  },
  {
    id: 'ancient_china',
    name: 'Ancient & Imperial China',
    region: 'Yellow & Yangtze River Basins',
    period: '~2070 BCE – 1912 CE',
    description: 'Prolific cradle of technological innovation spanning the Shang, Han, Tang, Song, and Ming dynasties. Origin of papermaking, magnetic compass, gunpowder, and movable type.',
    lat: 34.3416,
    lng: 108.9398,
    keyContributions: ['Movable Type Printing', 'Magnetic Compass', 'Papermaking', 'Blast Furnace Cast Iron', 'Seismoscope', 'Deep Drilling']
  },
  {
    id: 'ancient_greece',
    name: 'Classical & Hellenistic Greece',
    region: 'Aegean Basin & Eastern Mediterranean',
    period: '~800 BCE – 146 BCE',
    description: 'Pioneered axiomatic deductive geometry, natural philosophy, astronomical computing (Antikythera mechanism), empirical anatomy, and early mechanical theory.',
    lat: 37.9838,
    lng: 23.7275,
    keyContributions: ['Axiomatic Euclidean Geometry', 'Archimedean Hydrostatics & Mechanics', 'Antikythera Geared Computer', 'Empirical Natural Philosophy']
  },
  {
    id: 'roman_world',
    name: 'Roman Empire & Republic',
    region: 'Mediterranean Basin & Western Europe',
    period: '~509 BCE – 476 CE',
    description: 'Masters of large-scale infrastructure, pozzolanic hydraulic concrete, extensive paved highway networks, gravity-fed arched aqueducts, and civil jurisprudence.',
    lat: 41.9028,
    lng: 12.4964,
    keyContributions: ['Hydraulic Pozzolanic Concrete', 'Gravity-Fed Arch Aqueducts', 'Curved Vault Architecture & Domes', 'Standardized Paved Road Networks']
  },
  {
    id: 'islamic_golden_age',
    name: 'Islamic Golden Age',
    region: 'Middle East, North Africa & Al-Andalus',
    period: '~750 CE – 1258 CE',
    description: 'Flourishing era of synthesis and breakthroughs centered at Baghdad (House of Wisdom), Cairo, and Cordoba. Founded algebra, modern optical science, and algorithmic calculation.',
    lat: 33.3152,
    lng: 44.3661,
    keyContributions: ['Algebra (al-Khwarizmi)', 'Empirical Experimental Optics (Ibn al-Haytham)', 'Astrolabe Refinement', 'Systematic Pharmacology & Hospitals']
  },
  {
    id: 'south_asia',
    name: 'South Asia (Classical & Medieval India)',
    region: 'Indian Subcontinent',
    period: '~500 BCE – 1500 CE',
    description: 'Revolutionized mathematics with the positional decimal system and formal symbol for zero (Brahmagupta), trigonometric sine functions, and crucible Wootz steel metallurgy.',
    lat: 25.6108,
    lng: 85.1415,
    keyContributions: ['Positional Decimal Place-Value & Zero', 'Trigonometric Series & Calculus Precursors', 'Crucible Wootz Steel', 'Ayurvedic Surgery (Sushruta)']
  },
  {
    id: 'mesoamerica_andes',
    name: 'Mesoamerica & Andean Civilizations',
    region: 'Central America & Andean Highlands',
    period: '~1500 BCE – 1533 CE',
    description: 'Independent technological developments including Maya positional zero and astronomical ephemerides, complex terrace agriculture, volcanic glass engineering, and Incan quipu data storage.',
    lat: 16.9248,
    lng: -89.8943,
    keyContributions: ['Independent Positional Zero (Maya)', 'Agricultural Terrace Engineering & Microclimates', 'Quipu Decimal Cord Notation', 'Botanical Domestication (Maize, Potato)']
  },
  {
    id: 'early_modern_europe',
    name: 'Early Modern Europe & Scientific Revolution',
    region: 'Western & Central Europe',
    period: '~1450 CE – 1760 CE',
    description: 'The convergence of Gutenberg movable print, maritime navigation tools, empirical scientific methods (Bacon/Galileo), calculus, and Newtonian celestial mechanics.',
    lat: 51.5074,
    lng: -0.1278,
    keyContributions: ['Movable Metal Type Printing', 'Empirical Scientific Method', 'Calculus & Universal Gravitation', 'Compound Microscope & Telescope']
  },
  {
    id: 'industrial_societies',
    name: 'Industrial Era Societies',
    region: 'Britain, Western Europe & North America',
    period: '~1760 CE – 1914 CE',
    description: 'The historic shift from organic energy to coal, steam, and electricity. Spawned mechanized factories, railway networks, electric telegraphs, and thermodynamic theory.',
    lat: 53.4808,
    lng: -2.2426,
    keyContributions: ['Watt Condensing Steam Engine', 'Locomotive Railway Networks', 'Electric Telegraph & Transatlantic Cable', 'Electromagnetic Generator & AC Grid']
  },
  {
    id: 'global_modern_network',
    name: 'Global Scientific & Digital Network',
    region: 'Global Collaborative Infrastructure',
    period: '~1945 CE – Present',
    description: 'Post-war interconnected international scientific institutes, CERN, NASA/ESA space programs, Silicon Valley, and open standards consortiums powering the digital and AI eras.',
    lat: 37.3861,
    lng: -122.0839,
    keyContributions: ['Semiconductor Transistors & Microchips', 'ARPANET & World Wide Web Protocols', 'Satellite GPS Constellations', 'Deep Learning & Transformer Models']
  }
];

export function getCivilizationById(id: string): CivilizationInfo | undefined {
  return CIVILIZATIONS.find(c => c.id === id);
}
