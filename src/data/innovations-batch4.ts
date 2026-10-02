import { Innovation, Relationship } from '../types/innovation';

export const batch4Innovations: Innovation[] = [
  {
    id: 'glassmaking',
    name: 'Glassmaking',
    aliases: ['Glass'],
    date: '~3500 BCE',
    date_numeric: -3500,
    date_precision: 'millennium',
    era: 'ANCIENT_WORLD',
    domain: 'MATERIALS',
    type: 'physical',
    region: 'Mesopotamia',
    civilization: 'Sumerians / Egyptians',
    lat: 33.3152,
    lng: 44.3661,
    overview: 'The process of melting silica (sand) with alkalis to create a hard, brittle, often transparent amorphous solid.',
    why_it_matters: 'Glass changed human interaction with light. It enabled lenses (telescopes/microscopes), windows for architecture, secure chemical vessels for early chemistry, and eventually optical fibers.',
    problem_solved: 'Clay and wood could hold liquids but were opaque and permeable. There was no transparent, workable material to manipulate light or hold caustic substances.',
    mechanism: 'Heating silica sand with a flux (like soda ash) lowers the melting point. As the liquid cools rapidly, it bypasses crystallization, freezing into an amorphous molecular structure.',
    historical_development: [
      {
        stage: 'Faience and Glazes',
        period: '~3500 BCE',
        description: 'Early Mesopotamians and Egyptians use glass-like glazes on stone beads.'
      },
      {
        stage: 'Core-Formed Vessels',
        period: '~1500 BCE',
        description: 'First hollow glass vessels made by dipping a mud core into molten glass.'
      },
      {
        stage: 'Glassblowing',
        period: '~50 BCE',
        description: 'Syrian craftsmen invent the blowpipe, democratizing glass production across the Roman Empire.'
      }
    ],
    contributors: [
      {
        name: 'Roman Glassmakers',
        role: 'collective_culture',
        contributionNote: 'Industrialized glassblowing, creating the first glass windows and ubiquitous domestic glassware.'
      }
    ],
    predecessors: ['controlled-fire', 'pottery'],
    successors: ['optics-microscope-telescope', 'optical-fiber-telecom'],
    modern_legacy: 'From smartphone screens to the fiber-optic backbone of the Internet, silica glass remains one of the most critical materials in technology.',
    sources: [
      {
        source: 'History of Glassmaking (Corning Museum of Glass)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Roman_glass_cinerary_urn.jpg',
      caption: 'A Roman glass cinerary urn demonstrating early mastery of glassblowing.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'DOCUMENTED',
    confidence_note: 'Archaeological evidence of glazes traces to 3500 BCE; true glass vessels appear around 1500 BCE.'
  },
  {
    id: 'currency-coins',
    name: 'Standardized Coinage',
    aliases: ['Money', 'Currency'],
    date: '~600 BCE',
    date_numeric: -600,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'FOUNDATIONAL',
    type: 'protocol',
    region: 'Lydia (Modern Turkey)',
    civilization: 'Lydian Empire',
    lat: 38.4833,
    lng: 28.0333,
    overview: 'The creation of state-stamped, standardized weights of precious metal to serve as a universal medium of exchange.',
    why_it_matters: 'Eliminated the inefficiency of the barter system (the "double coincidence of wants"). Standardized money enabled complex trade networks, taxation, standing armies, and market economies.',
    problem_solved: 'Barter required both parties to want exactly what the other had. Weighing uncoined silver for every transaction was slow and susceptible to fraud.',
    mechanism: 'A central authority guarantees the weight and purity of a piece of electrum, gold, or silver by stamping it with an official seal, making it recognizable and universally accepted by fiat or intrinsic value.',
    historical_development: [
      {
        stage: 'Hacksilber and Bullion',
        period: '~2000 BCE',
        description: 'Mesopotamians trade using chunks of silver that must be weighed on scales.'
      },
      {
        stage: 'Lydian Electrum Coins',
        period: '~600 BCE',
        description: 'King Alyattes of Lydia mints the first stamped coins of electrum (a gold-silver alloy).'
      }
    ],
    contributors: [
      {
        name: 'King Alyattes',
        role: 'inventor',
        contributionNote: 'Credited by Herodotus as the first to mint gold and silver coins.'
      }
    ],
    predecessors: ['metallurgy-copper'],
    successors: ['mathematics-base60'],
    modern_legacy: 'The foundational protocol of all modern economic systems, evolving into paper fiat and digital cryptocurrency.',
    sources: [
      {
        source: 'The Histories (Herodotus)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Lydia_Electrum_trite_Alyattes_type.jpg',
      caption: 'A Lydian electrum trite, one of the earliest known coins (~600 BCE).',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Extensive archaeological hoards discovered at the Temple of Artemis at Ephesus.'
  },
  {
    id: 'gunpowder',
    name: 'Gunpowder (Black Powder)',
    aliases: ['Black Powder'],
    date: '9th Century CE',
    date_numeric: 850,
    date_precision: 'century',
    era: 'MEDIEVAL_PERIOD',
    domain: 'MATERIALS',
    type: 'physical',
    region: 'China',
    civilization: 'Tang Dynasty',
    lat: 34.2667,
    lng: 108.9000,
    overview: 'The earliest known chemical explosive, consisting of a mixture of sulfur, charcoal, and potassium nitrate (saltpeter).',
    why_it_matters: 'Altered the geopolitical landscape forever. It ended the era of castles and armored knights, facilitated European colonization, and birthed modern ballistics and rocketry.',
    problem_solved: 'Before gunpowder, projectile weapons relied entirely on human muscle or mechanical tension (bows, catapults).',
    mechanism: 'A rapid, exothermic deflagration (subsonic burning). The saltpeter provides oxygen, the charcoal provides fuel, and sulfur lowers the ignition temperature, creating rapidly expanding gases.',
    historical_development: [
      {
        stage: 'Daoist Alchemy',
        period: '9th Century CE',
        description: 'Chinese alchemists accidentally discover the explosive properties while searching for an elixir of immortality.'
      },
      {
        stage: 'Fire Lances and Rockets',
        period: '12th Century CE',
        description: 'Song Dynasty develops early firearms, explosive bombs, and military rockets.'
      }
    ],
    contributors: [
      {
        name: 'Chinese Alchemists',
        role: 'collective_culture',
        contributionNote: 'First recorded formula appears in the Wujing Zongyao.'
      }
    ],
    predecessors: ['controlled-fire'],
    successors: ['rocketry-spaceflight', 'internal-combustion-engine'],
    modern_legacy: 'While replaced by smokeless powder in firearms, it remains the foundation of fireworks, mining explosives, and the conceptual precursor to all modern propellants.',
    sources: [
      {
        source: 'Wujing Zongyao (Military Classic, 1044 CE)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Fire_lance_and_grenade_1044_AD.jpg',
      caption: 'Illustration of an early fire lance from the Wujing Zongyao.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Clear textual evidence of its use in China centuries before it reached Europe.'
  },
  {
    id: 'periodic-table',
    name: 'Periodic Table of Elements',
    aliases: ['Mendeleev\'s Table'],
    date: '1869 CE',
    date_numeric: 1869,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'SCIENCE',
    type: 'theory',
    region: 'St. Petersburg, Russia',
    civilization: 'Russian Empire',
    lat: 59.9311,
    lng: 30.3609,
    overview: 'A tabular display of the chemical elements, organized by atomic number, electron configuration, and recurring chemical properties.',
    why_it_matters: 'It provided a unifying framework for chemistry, turning it from a messy catalog of observations into a predictive, theoretical science. Mendeleev successfully predicted the existence of elements that had not yet been discovered.',
    problem_solved: 'Chemists knew of many elements but had no overarching system to explain why certain elements (like halogens or noble gases) behaved similarly.',
    mechanism: 'By organizing elements by atomic mass (and later atomic number) and grouping them into columns based on valency, the periodicity (repeating patterns) of their chemical properties is revealed.',
    historical_development: [
      {
        stage: 'Law of Octaves',
        period: '1864',
        description: 'John Newlands notices that every eighth element shares similar properties.'
      },
      {
        stage: 'Mendeleev\'s First Table',
        period: '1869',
        description: 'Dmitri Mendeleev publishes a formal table, crucially leaving gaps for undiscovered elements like Gallium and Germanium.'
      }
    ],
    contributors: [
      {
        name: 'Dmitri Mendeleev',
        role: 'inventor',
        contributionNote: 'Created the definitive table and predicted the properties of missing elements.'
      }
    ],
    predecessors: ['scientific-method', 'atomic-theory'],
    successors: ['quantum-mechanics', 'nuclear-fission'],
    modern_legacy: 'The undisputed master key of chemistry, adorning every science classroom and laboratory in the world.',
    sources: [
      {
        source: 'Principles of Chemistry (Dmitri Mendeleev, 1869)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mendelejevs_periodiska_system_1871.png',
      caption: 'Mendeleev\'s updated 1871 periodic table, showing gaps for undiscovered elements.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Mendeleev presented his findings to the Russian Chemical Society in March 1869.'
  },
  {
    id: 'laser',
    name: 'Laser (Light Amplification by Stimulated Emission of Radiation)',
    aliases: ['Maser'],
    date: '1960 CE',
    date_numeric: 1960,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'ENGINEERING',
    type: 'physical',
    region: 'California, USA',
    civilization: 'Modern Societies',
    lat: 34.0396,
    lng: -118.6946,
    overview: 'A device that emits light through a process of optical amplification based on the stimulated emission of electromagnetic radiation.',
    why_it_matters: 'Often called "a solution looking for a problem" upon invention, lasers now underpin barcode scanners, DVD/CD players, fiber-optic internet, corrective eye surgery, and precise industrial cutting.',
    problem_solved: 'Standard light sources are chaotic, scattering photons in all directions at multiple wavelengths. There was no way to create a coherent, tightly focused, single-color beam of light.',
    mechanism: 'Atoms in a gain medium (like a ruby crystal or gas) are "pumped" to an excited energy state. When one atom drops to a lower state, it releases a photon, which strikes another excited atom, stimulating it to release a clone photon. Mirrors bounce this coherent cascade back and forth, emitting a tight beam.',
    historical_development: [
      {
        stage: 'Stimulated Emission Theory',
        period: '1917',
        description: 'Albert Einstein establishes the theoretical foundation for the laser/maser.'
      },
      {
        stage: 'First Working Laser',
        period: '1960',
        description: 'Theodore Maiman operates the first functioning laser at Hughes Research Laboratories using a ruby crystal.'
      }
    ],
    contributors: [
      {
        name: 'Theodore Maiman',
        role: 'inventor',
        contributionNote: 'Built the first working ruby laser.'
      },
      {
        name: 'Charles Townes',
        role: 'theoretical_precursor',
        contributionNote: 'Invented the maser (microwave precursor to the laser).'
      }
    ],
    predecessors: ['quantum-mechanics'],
    successors: ['optical-fiber-telecom'],
    modern_legacy: 'The backbone of global fiber-optic telecommunications, laser surgery, and precision manufacturing.',
    sources: [
      {
        source: 'Nature (1960 publication by Maiman)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Laser.jpg',
      caption: 'A red laser beam traversing a dark room.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Maiman\'s success on May 16, 1960, is the universally recognized birth of the laser.'
  }
];

export const batch4Relationships: Relationship[] = [
  {
    id: 'rel-glass-optics',
    source: 'glassmaking',
    target: 'optics-microscope-telescope',
    relationship_type: 'ENABLED',
    evidence: 'Without clear glass, lenses could not be fashioned to bend light for microscopes or telescopes.'
  },
  {
    id: 'rel-atomic-periodic',
    source: 'atomic-theory',
    target: 'periodic-table',
    relationship_type: 'ENABLED',
    evidence: 'Dalton\'s realization that each element has a unique atomic weight paved the way for Mendeleev to organize them.'
  },
  {
    id: 'rel-quantum-laser',
    source: 'quantum-mechanics',
    target: 'laser',
    relationship_type: 'APPLIED',
    evidence: 'Stimulated emission is a purely quantum mechanical phenomenon; the laser is applied quantum physics.'
  }
];
