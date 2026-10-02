import { Innovation } from '../types/innovation';

export const batch1Innovations: Innovation[] = [
  {
    id: 'bow-and-arrow',
    name: 'Bow & Arrow',
    aliases: ['Archery', 'Projectile Weaponry'],
    date: '~64,000 BCE',
    date_numeric: -64000,
    date_precision: 'millennium',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'physical',
    region: 'South Africa (Sibudu Cave)',
    civilization: 'Middle Stone Age Hominins',
    lat: -29.5222,
    lng: 31.0867,
    overview: 'The invention of the bow and arrow represented a monumental leap in human cognitive and mechanical evolution, combining elastic energy storage with aerodynamic projectiles.',
    why_it_matters: 'It allowed humans to hunt prey from a safe distance, drastically reducing mortality rates and enabling the exploitation of fast-moving game across diverse biomes.',
    problem_solved: 'Close-quarters hunting with thrusting spears was highly dangerous and less effective for fast or avian prey.',
    mechanism: 'Operates as a two-armed spring. The archer applies muscular force to draw the string, storing potential energy in the bending limbs of the bow. Upon release, this energy is rapidly transferred to the lightweight arrow, accelerating it to lethal velocities.',
    historical_development: [
      {
        stage: 'Early Evidence',
        period: '~64,000 BCE',
        description: 'Stone and bone points showing impact fractures consistent with high-velocity archery discovered at Sibudu Cave, South Africa.'
      },
      {
        stage: 'European Mesolithic',
        period: '~9000 BCE',
        description: 'Intact Holmegaard bows preserved in Danish bogs demonstrate advanced self-bow engineering.'
      },
      {
        stage: 'Composite Bows',
        period: '~2000 BCE',
        description: 'Eurasian steppe nomads develop composite bows using horn, wood, and sinew, vastly increasing draw weight and efficiency.'
      }
    ],
    contributors: [
      {
        name: 'Middle Stone Age Hunter-Gatherers',
        role: 'inventor',
        contributionNote: 'Initial development of projectile string-weaponry.'
      }
    ],
    predecessors: ['stone-tools'],
    successors: [], // To be linked to later military tech
    modern_legacy: 'Transformed early warfare and hunting; its principles of elastic energy storage underpin numerous mechanical systems. Archery survives today as a sport and hunting method.',
    sources: [
      {
        source: 'Antiquity (Journal)',
        sourceType: 'academic',
        confidenceNote: 'Based on microscopic analysis of bone points.'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Ebu_Gogo_hunting.jpg', // placeholder to be resolved by imageService
      caption: 'Early hominins utilizing projectile weaponry.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Archaeological evidence of arrowheads strongly supports dates >60,000 years ago.'
  },
  {
    id: 'rope-cordage',
    name: 'Rope & Cordage',
    aliases: ['Twine', 'String'],
    date: '~28,000 BCE',
    date_numeric: -28000,
    date_precision: 'millennium',
    era: 'PREHISTORY',
    domain: 'FOUNDATIONAL',
    type: 'physical',
    region: 'Eurasia',
    civilization: 'Paleolithic Hunter-Gatherers',
    lat: 42.5,
    lng: 44.0,
    overview: 'The twisting of natural plant or animal fibers to create continuous, high-tensile strength lines.',
    why_it_matters: 'Cordage is the invisible technological scaffolding of the ancient world. It enabled binding, hauling, weaving, netting, trapping, and later, sailing and complex architecture.',
    problem_solved: 'Humans lacked a flexible, durable method to bind materials together, capture energy (bows), or carry heavy loads.',
    mechanism: 'Relies on friction and helical twisting. Multiple weak, short fibers are twisted together (often counter-twisted or "plied") so that tension increases the friction between them, preventing the fibers from pulling apart.',
    historical_development: [
      {
        stage: 'Paleolithic Impressions',
        period: '~28,000 BCE',
        description: 'Clay impressions from Dzudzuana Cave, Georgia, show twisted wild flax fibers.'
      },
      {
        stage: 'Maritime Utility',
        period: '~8000 BCE',
        description: 'Used extensively for fishing nets and primitive watercraft lashing.'
      }
    ],
    contributors: [
      {
        name: 'Paleolithic Communities',
        role: 'inventor',
        contributionNote: 'Early harvesting and processing of wild flax and bast fibers.'
      }
    ],
    predecessors: ['stone-tools'],
    successors: ['the-wheel', 'navigation-maritime'],
    modern_legacy: 'The mathematics of twisted fibers inform modern steel cables, synthetic ropes, and fiber optics.',
    sources: [
      {
        source: 'Science Magazine',
        sourceType: 'academic',
        confidenceNote: 'Microscopic fiber analysis.'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Rope.jpg',
      caption: 'Twisted natural fiber rope.',
      attribution: 'Wikimedia Commons',
      license: 'Public Domain'
    },
    confidence: 'DOCUMENTED',
    confidence_note: 'Fiber degrades rapidly, but early impressions and isolated finds confirm deep antiquity.'
  },
  {
    id: 'abacus',
    name: 'The Abacus',
    aliases: ['Counting Frame', 'Suanpan', 'Soroban'],
    date: '~2700 BCE',
    date_numeric: -2700,
    date_precision: 'century',
    era: 'ANCIENT_WORLD',
    domain: 'KNOWLEDGE',
    type: 'physical',
    region: 'Mesopotamia',
    civilization: 'Sumerians',
    lat: 31.0,
    lng: 46.0,
    overview: 'An ancient calculating tool utilizing movable beads or stones on rods to represent positional numerical values.',
    why_it_matters: 'The abacus was the first physical computing device, allowing complex arithmetic operations (addition, subtraction, multiplication, division) at high speeds, essential for ancient commerce and administration.',
    problem_solved: 'Mental calculation of large numbers was error-prone, and written mathematical notation was tedious and not standardized for quick commerce.',
    mechanism: 'Utilizes a positional numeral system (often base-10 or mixed base). Beads are moved toward a central beam to represent value. The physical state of the board acts as the memory register, while the operator provides the algorithmic logic.',
    historical_development: [
      {
        stage: 'Sumerian Counting Boards',
        period: '~2700 BCE',
        description: 'Used sexagesimal (base 60) systems on physical boards with pebbles.'
      },
      {
        stage: 'Roman Abacus',
        period: '~1st Century CE',
        description: 'Portable bronze abacus with slotted grooves for calculi (pebbles).'
      },
      {
        stage: 'Chinese Suanpan',
        period: '~1200 CE',
        description: 'The modern wire-and-bead form (2/5 deck configuration) standardized during the Ming Dynasty.'
      }
    ],
    contributors: [
      {
        name: 'Sumerian Accountants',
        role: 'inventor',
        contributionNote: 'First recorded use of physical calculi for base-60 mathematics.'
      }
    ],
    predecessors: ['mathematics-base60'],
    successors: ['analytical-engine-babbage'],
    modern_legacy: 'Laid the conceptual foundation for computing (separating memory and processing logic). Still used in parts of Asia for rapid calculation and mental arithmetic training.',
    sources: [
      {
        source: 'History of Computing',
        sourceType: 'academic',
        confidenceNote: 'Well-documented archaeological lineage.'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Abacus_6.jpg',
      caption: 'A traditional Chinese Suanpan abacus.',
      attribution: 'Wikimedia Commons',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Numerous physical artifacts and textual references exist across multiple ancient civilizations.'
  },
  {
    id: 'mechanical-gears',
    name: 'Mechanical Gears',
    aliases: ['Toothed Wheels', 'Gearing'],
    date: '~3rd Century BCE',
    date_numeric: -250,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'ENGINEERING',
    type: 'physical',
    region: 'Alexandria, Egypt',
    civilization: 'Hellenistic Greece',
    lat: 31.2,
    lng: 29.9,
    overview: 'Toothed wheels that interlock to transmit torque, alter rotational speed, and change the direction of mechanical force.',
    why_it_matters: 'Gears are the fundamental transmission mechanism of the mechanical age, enabling clocks, automated machinery, engines, and complex instrumentation.',
    problem_solved: 'Needed a reliable method to transmit continuous mechanical power without slippage, and to step up or step down rotational speeds.',
    mechanism: 'When two toothed wheels mesh, the rotation of the driving gear forces the driven gear to turn. The ratio of their teeth determines the mechanical advantage (speed vs. torque tradeoff).',
    historical_development: [
      {
        stage: 'Early Theoretical Texts',
        period: '~4th Century BCE',
        description: 'Aristotle mentions wheels driving wheels, though exact toothed gears are debated.'
      },
      {
        stage: 'Archimedes & Ctesibius',
        period: '~250 BCE',
        description: 'Development of worm gears and complex hydraulic gearing in Alexandria.'
      },
      {
        stage: 'Antikythera Mechanism',
        period: '~100 BCE',
        description: 'An astonishingly complex analog computer using over 30 precision bronze gears to calculate astronomical positions.'
      }
    ],
    contributors: [
      {
        name: 'Archimedes',
        role: 'theoretical_precursor',
        contributionNote: 'Attributed with early worm gear mechanics.'
      },
      {
        name: 'Ctesibius of Alexandria',
        role: 'inventor',
        contributionNote: 'Used rack and pinion gearing in water clocks.'
      }
    ],
    predecessors: ['the-wheel', 'geometry-euclidean'],
    successors: ['mechanical-clock', 'analytical-engine-babbage', 'internal-combustion-engine'],
    modern_legacy: 'Ubiquitous in all modern mechanical systems, from automotive transmissions to micro-electro-mechanical systems (MEMS).',
    sources: [
      {
        source: 'Decoding the Heavens (Jo Marchant)',
        sourceType: 'academic',
        confidenceNote: 'Based on the Antikythera artifact.'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Gears_animation.gif',
      caption: 'Interlocking mechanical gears transferring torque.',
      attribution: 'Wikimedia Commons',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The Antikythera Mechanism provides undeniable physical proof of highly advanced classical gearing.'
  },
  {
    id: 'library-of-alexandria',
    name: 'The Great Library of Alexandria',
    aliases: ['Mouseion', 'Universal Library'],
    date: '~285 BCE',
    date_numeric: -285,
    date_precision: 'decade',
    era: 'CLASSICAL_PERIOD',
    domain: 'KNOWLEDGE',
    type: 'social',
    region: 'Alexandria, Egypt',
    civilization: 'Hellenistic Greece / Ptolemaic Egypt',
    lat: 31.2,
    lng: 29.9,
    overview: 'The ancient world\'s most ambitious attempt to collect, organize, and translate all human knowledge into a single centralized institutional repository.',
    why_it_matters: 'It pioneered the concepts of academic research, standardized peer review, cataloging (the Pinakes), and state-funded scholarship, profoundly accelerating classical science.',
    problem_solved: 'Knowledge was scattered across fragmented city-states and oral traditions, making cross-disciplinary synthesis nearly impossible.',
    mechanism: 'Operated as a state-funded research institute (the Mouseion). Ships entering the harbor were searched for books to copy. Scholars were provided room, board, and stipends to translate (e.g., the Septuagint) and synthesize texts.',
    historical_development: [
      {
        stage: 'Foundation',
        period: '~285 BCE',
        description: 'Founded by Ptolemy I Soter and organized by Demetrius of Phalerum.'
      },
      {
        stage: 'The Pinakes',
        period: '~240 BCE',
        description: 'Callimachus creates the first grand library catalog, organizing books by subject and author alphabetically.'
      },
      {
        stage: 'Decline & Destruction',
        period: '48 BCE - 642 CE',
        description: 'Suffered multiple fires (starting with Julius Caesar) and budget cuts, leading to the gradual loss of the collection.'
      }
    ],
    contributors: [
      {
        name: 'Ptolemy I Soter',
        role: 'institution',
        contributionNote: 'Provided sovereign funding and political mandate.'
      },
      {
        name: 'Callimachus',
        role: 'co-developer',
        contributionNote: 'Invented the bibliographic cataloging system.'
      }
    ],
    predecessors: ['writing-cuneiform', 'papyrus-paper'], // papyrus is later but conceptual text
    successors: ['printing-press', 'world-wide-web'],
    modern_legacy: 'The spiritual ancestor of the modern university, national libraries, and the internet itself as a repository of universal knowledge.',
    sources: [
      {
        source: 'The Library of Alexandria (Roy MacLeod)',
        sourceType: 'academic',
        confidenceNote: 'Historical consensus on existence and function, though exact scroll counts vary.'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/O_Des_Alexandria_1.JPG/800px-O_Des_Alexandria_1.JPG',
      caption: 'A 19th-century artistic reconstruction of the Great Library.',
      attribution: 'O. Von Corven',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Universally attested in classical texts, though physical ruins have not been definitively identified.'
  }
];
