import { Innovation, Relationship } from '../types/innovation';

export const batch3Innovations: Innovation[] = [
  {
    id: 'compass',
    name: 'Magnetic Compass',
    aliases: ['Lodestone Compass', 'Dry Compass'],
    date: '~1040 CE',
    date_numeric: 1040,
    date_precision: 'century',
    era: 'MEDIEVAL_PERIOD',
    domain: 'NAVIGATION',
    type: 'physical',
    region: 'China',
    civilization: 'Song Dynasty',
    lat: 34.3416,
    lng: 108.9398,
    overview: 'An instrument used for navigation and orientation that shows direction relative to the geographic cardinal directions.',
    why_it_matters: 'Freed maritime navigation from reliance on clear skies and coastal landmarks, enabling the Age of Discovery and truly global trade networks.',
    problem_solved: 'Ships lost their bearings in open ocean or heavy fog when the sun and stars were obscured.',
    mechanism: 'Utilizes a magnetized needle that aligns itself with the Earth\'s magnetic field, consistently pointing toward the magnetic North Pole. Later enhanced with gimbal suspensions to remain level on pitching ships.',
    historical_development: [
      {
        stage: 'Divination Lodestones',
        period: '~200 BCE',
        description: 'Han Dynasty uses naturally magnetic lodestone spoon on a bronze plate for geomancy (Feng Shui).'
      },
      {
        stage: 'Navigational Wet Compass',
        period: '1040-1117 CE',
        description: 'Song Dynasty military manuals describe a magnetized iron fish floating in a bowl of water.'
      },
      {
        stage: 'Dry Mariner\'s Compass',
        period: '~1300 CE',
        description: 'Medieval Europe develops the dry compass with a pivoting needle on a pin, mounted in a gimbal.'
      }
    ],
    contributors: [
      {
        name: 'Shen Kuo',
        role: 'inventor',
        contributionNote: 'First recorded description of magnetic declination and suspended needle compass.'
      }
    ],
    predecessors: ['navigation-maritime'],
    successors: ['steam-engine', 'satellites-gps'],
    modern_legacy: 'Still a fundamental fallback instrument in all aviation and maritime vessels; the principle drives modern magnetometers in smartphones.',
    sources: [
      {
        source: 'Dream Pool Essays (Shen Kuo, 1088)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Compass-450125_1920.jpg',
      caption: 'A traditional dry mariner\'s compass.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Clear textual evidence in Chinese, Islamic, and European texts.'
  },
  {
    id: 'electric-battery',
    name: 'Voltaic Pile (First Battery)',
    aliases: ['Electric Battery'],
    date: '1800 CE',
    date_numeric: 1800,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'ENERGY',
    type: 'physical',
    region: 'Como, Italy',
    civilization: 'Industrial Societies',
    lat: 45.8081,
    lng: 9.0852,
    overview: 'The first device to provide a steady, continuous electrical current via a chemical reaction.',
    why_it_matters: 'Before the pile, electricity could only be stored as static charge (Leyden jars) which discharged instantly. The battery enabled the entire field of electrochemistry and sustained electrical engineering.',
    problem_solved: 'Scientists needed a continuous, reliable source of current to study electrical phenomena and power the first electrical devices.',
    mechanism: 'Stacked alternating discs of zinc and copper, separated by cloth soaked in saltwater (electrolyte). The chemical redox reaction forces electrons to flow from the zinc through an external circuit to the copper.',
    historical_development: [
      {
        stage: 'Galvanic Twitch',
        period: '1780',
        description: 'Luigi Galvani causes frog legs to twitch with dissimilar metals, theorizing "animal electricity."'
      },
      {
        stage: 'The Voltaic Pile',
        period: '1800',
        description: 'Alessandro Volta proves the electricity comes from the metals themselves, building the first pile.'
      }
    ],
    contributors: [
      {
        name: 'Alessandro Volta',
        role: 'inventor',
        contributionNote: 'Invented the pile and proved animal electricity was just chemical.'
      }
    ],
    predecessors: ['scientific-method'],
    successors: ['electrical-generator', 'telegraph'],
    modern_legacy: 'Evolved into lithium-ion batteries that power modern portable electronics and electric vehicles.',
    sources: [
      {
        source: 'Philosophical Transactions of the Royal Society (1800)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Voltaic_pile.jpg',
      caption: 'A reproduction of the original Voltaic Pile.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Volta reported his invention in a letter to Sir Joseph Banks in 1800.'
  },
  {
    id: 'steam-locomotive',
    name: 'Steam Locomotive',
    aliases: ['Railway Engine'],
    date: '1804 CE',
    date_numeric: 1804,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'TRANSPORTATION',
    type: 'physical',
    region: 'Merthyr Tydfil, Wales',
    civilization: 'Industrial Societies',
    lat: 51.7430,
    lng: -3.3780,
    overview: 'A railway locomotive that produces its pulling power through a steam engine.',
    why_it_matters: 'The locomotive shattered terrestrial transport limits, driving the Industrial Revolution, expanding nations, and decoupling transportation speed from animal muscle.',
    problem_solved: 'Moving heavy industrial goods (like coal) overland was painfully slow and expensive using horse-drawn wagons on muddy roads.',
    mechanism: 'High-pressure steam from a coal-fired boiler enters a cylinder, pushing a piston. A connecting rod translates this linear motion into rotary motion to drive the wheels along low-friction iron rails.',
    historical_development: [
      {
        stage: 'Trevithick\'s Engine',
        period: '1804',
        description: 'Richard Trevithick builds the first full-scale working railway steam locomotive in Wales.'
      },
      {
        stage: 'Stephenson\'s Rocket',
        period: '1829',
        description: 'Robert Stephenson\'s Rocket wins the Rainhill Trials, setting the standard for locomotive design with a multi-tubular boiler.'
      }
    ],
    contributors: [
      {
        name: 'Richard Trevithick',
        role: 'inventor',
        contributionNote: 'Pioneered high-pressure steam engines.'
      },
      {
        name: 'George & Robert Stephenson',
        role: 'co-developer',
        contributionNote: 'Built the first public inter-city railway lines.'
      }
    ],
    predecessors: ['steam-engine', 'mechanical-gears'],
    successors: ['internal-combustion-engine'],
    modern_legacy: 'Established the global railway network, standardized time zones, and laid the literal tracks for modern diesel and electric high-speed rail.',
    sources: [
      {
        source: 'The Railway Revolution (L.T.C. Rolt)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stephenson%27s_Rocket.jpg',
      caption: 'Stephenson\'s Rocket, built in 1829.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Trevithick\'s historic first run was heavily documented on Feb 21, 1804.'
  }
];

export const batch3Relationships: Relationship[] = [
  {
    id: 'rel-compass-navigation',
    source: 'compass',
    target: 'navigation-maritime',
    relationship_type: 'EXTENDED',
    evidence: 'The compass transformed maritime navigation into a reliable, open-ocean science.'
  },
  {
    id: 'rel-battery-telegraph',
    source: 'electric-battery',
    target: 'telegraph',
    relationship_type: 'ENABLED',
    evidence: 'Early telegraph lines ran entirely on chemical batteries before electrical grids existed.'
  },
  {
    id: 'rel-steam-loco',
    source: 'steam-engine',
    target: 'steam-locomotive',
    relationship_type: 'ENABLED',
    evidence: 'The locomotive is the mobile application of the stationary high-pressure steam engine.'
  }
];
