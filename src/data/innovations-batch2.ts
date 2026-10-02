import { Innovation, Relationship } from '../types/innovation';

export const batch2Innovations: Innovation[] = [
  {
    id: 'vaccination',
    name: 'Vaccination',
    aliases: ['Inoculation', 'Immunization'],
    date: '1796 CE',
    date_numeric: 1796,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'MEDICINE',
    type: 'process',
    region: 'England',
    civilization: 'Industrial Societies',
    lat: 51.6888,
    lng: -2.4632,
    overview: 'The administration of antigenic material to stimulate an individual\'s immune system to develop adaptive immunity to a pathogen.',
    why_it_matters: 'Vaccination is the most effective method of preventing infectious diseases, responsible for the global eradication of smallpox and near-eradication of polio.',
    problem_solved: 'Rampant, lethal epidemics (like smallpox) had no cure and devastated global populations continually.',
    mechanism: 'By introducing a harmless variant or component of a pathogen (like cowpox for smallpox), the immune system produces memory B and T cells. Upon future exposure to the real pathogen, the immune response is rapid and overwhelming.',
    historical_development: [
      {
        stage: 'Variolation',
        period: '~1000 CE (China/India)',
        description: 'Deliberate infection with mild forms of smallpox to confer immunity, carrying a 1-2% mortality risk.'
      },
      {
        stage: 'Jenner\'s Cowpox Vaccine',
        period: '1796',
        description: 'Edward Jenner proves that milder cowpox virus provides cross-immunity to deadly smallpox.'
      },
      {
        stage: 'Global Eradication',
        period: '1980',
        description: 'The WHO declares smallpox eradicated, the first human disease eliminated by medical intervention.'
      }
    ],
    contributors: [
      {
        name: 'Edward Jenner',
        role: 'inventor',
        contributionNote: 'Pioneered the concept of vaccines using cowpox.'
      },
      {
        name: 'Louis Pasteur',
        role: 'co-developer',
        contributionNote: 'Developed attenuated rabies and anthrax vaccines.'
      }
    ],
    predecessors: ['scientific-method'],
    successors: ['genetic-engineering-crispr'],
    modern_legacy: 'Foundation of global public health; evolved into mRNA vaccines during the COVID-19 pandemic.',
    sources: [
      {
        source: 'WHO - A Brief History of Vaccination',
        sourceType: 'institutional',
        confidenceNote: 'Extensively documented.'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Edward_Jenner_vaccinating_a_boy.jpg',
      caption: 'Edward Jenner vaccinating James Phipps (1796).',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'One of the most robustly documented medical events in history.'
  },
  {
    id: 'anesthesia',
    name: 'Surgical Anesthesia',
    aliases: ['Ether', 'Chloroform'],
    date: '1846 CE',
    date_numeric: 1846,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'MEDICINE',
    type: 'process',
    region: 'Boston, USA',
    civilization: 'Industrial Societies',
    lat: 42.3601,
    lng: -71.0589,
    overview: 'The use of chemical agents to induce a temporary state of loss of sensation and awareness during surgery.',
    why_it_matters: 'Transformed surgery from a desperate, agonizing last resort into a precise, curative science.',
    problem_solved: 'Surgeries were historically traumatic, severely limiting the time and precision a surgeon could employ due to patient shock and pain.',
    mechanism: 'Inhalation anesthetics like ether or chloroform alter neurotransmission in the brain (enhancing inhibitory signals like GABA and blocking excitatory ones), inducing unconsciousness and analgesia.',
    historical_development: [
      {
        stage: 'The Ether Dome',
        period: '1846',
        description: 'William T.G. Morton publicly demonstrates ether anesthesia at Mass General Hospital.'
      },
      {
        stage: 'Chloroform',
        period: '1847',
        description: 'James Young Simpson introduces chloroform, popularized when given to Queen Victoria.'
      }
    ],
    contributors: [
      {
        name: 'William T.G. Morton',
        role: 'inventor',
        contributionNote: 'First successful public demonstration of ether.'
      },
      {
        name: 'Crawford Long',
        role: 'co-developer',
        contributionNote: 'Used ether earlier (1842) but did not publish immediately.'
      }
    ],
    predecessors: ['scientific-method'],
    successors: [],
    modern_legacy: 'Modern anesthesiology uses advanced halocarbons and intravenous agents, permitting complex surgeries like heart transplants.',
    sources: [
      {
        source: 'History of Anesthesia (Wood Library-Museum)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Ether_Dome_at_Mass_General_Hospital.jpg',
      caption: 'The Ether Dome, site of the first public demonstration.',
      attribution: 'Wikimedia Commons',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Public demonstration on October 16, 1846.'
  },
  {
    id: 'x-ray-imaging',
    name: 'X-Ray Medical Imaging',
    aliases: ['Radiography', 'Roentgenograms'],
    date: '1895 CE',
    date_numeric: 1895,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'MEDICINE',
    type: 'physical',
    region: 'Würzburg, Germany',
    civilization: 'Industrial Societies',
    lat: 49.7913,
    lng: 9.9534,
    overview: 'The use of high-energy electromagnetic radiation to penetrate tissues and capture internal skeletal and structural images.',
    why_it_matters: 'The first non-invasive method to view inside the living human body, launching the field of diagnostic radiology.',
    problem_solved: 'Diagnosing fractures, foreign bodies, or tuberculosis previously required guesswork or exploratory surgery.',
    mechanism: 'X-rays are generated by decelerating electrons in a vacuum tube. Dense tissues (like bone) absorb more X-rays than soft tissues, casting a "shadow" on a photographic plate placed behind the patient.',
    historical_development: [
      {
        stage: 'Discovery',
        period: '1895',
        description: 'Wilhelm Röntgen discovers X-rays using a Crookes tube, capturing the bones of his wife\'s hand.'
      },
      {
        stage: 'WWI Mobile Radiology',
        period: '1914-1918',
        description: 'Marie Curie develops "Petites Curies," mobile X-ray units for battlefield triage.'
      }
    ],
    contributors: [
      {
        name: 'Wilhelm Röntgen',
        role: 'inventor',
        contributionNote: 'Discovered the rays and recognized their medical potential.'
      },
      {
        name: 'Marie Curie',
        role: 'popularizer',
        contributionNote: 'Pioneered battlefield radiological triage.'
      }
    ],
    predecessors: ['electromagnetism-maxwell', 'electrical-generator'],
    successors: ['quantum-mechanics', 'dna-double-helix'], // DNA was found via X-ray crystallography
    modern_legacy: 'Led to CT scans, fluoroscopy, and radiation therapy. Röntgen won the first Nobel Prize in Physics (1901).',
    sources: [
      {
        source: 'NobelPrize.org - Wilhelm Röntgen',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/First_medical_X-ray_by_Wilhelm_R%C3%B6ntgen_of_his_wife_Anna_Bertha_Ludwig%27s_hand_-_18951222.jpg',
      caption: 'The first medical X-ray: Anna Bertha Röntgen\'s hand (1895).',
      attribution: 'Wilhelm Röntgen',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Historically indisputable; exact date is Nov 8, 1895.'
  },
  {
    id: 'atomic-theory',
    name: 'Modern Atomic Theory',
    aliases: ['Dalton\'s Theory'],
    date: '1803 CE',
    date_numeric: 1803,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'SCIENCE',
    type: 'conceptual',
    region: 'Manchester, England',
    civilization: 'Industrial Societies',
    lat: 53.4808,
    lng: -2.2426,
    overview: 'The scientific theory that matter is composed of discrete, indivisible units called atoms.',
    why_it_matters: 'It transitioned chemistry from qualitative observation (and alchemy) to a rigorous, quantitative science based on mass and stoichiometry.',
    problem_solved: 'Explained why elements always react in specific whole-number ratios (Law of Multiple Proportions).',
    mechanism: 'Proposed that elements consist of identical atoms with specific weights, and chemical compounds are formed by the union of these atoms in simple numerical ratios.',
    historical_development: [
      {
        stage: 'Philosophical Atomism',
        period: '~400 BCE',
        description: 'Democritus proposes "atomos" as indivisible philosophical units.'
      },
      {
        stage: 'Dalton\'s Formulation',
        period: '1803',
        description: 'John Dalton formulates the empirical, weight-based atomic theory.'
      },
      {
        stage: 'Subatomic Discovery',
        period: '1897',
        description: 'J.J. Thomson discovers the electron, proving atoms are divisible.'
      }
    ],
    contributors: [
      {
        name: 'John Dalton',
        role: 'inventor',
        contributionNote: 'First quantitative atomic theory based on experimental stoichiometry.'
      }
    ],
    predecessors: ['scientific-method'],
    successors: ['quantum-mechanics', 'nuclear-fission'],
    modern_legacy: 'The absolute foundation of all modern chemistry, materials science, and molecular biology.',
    sources: [
      {
        source: 'A New System of Chemical Philosophy (Dalton, 1808)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Dalton_atomic_symbols.jpg',
      caption: 'Dalton\'s original atomic symbols.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Dalton presented his papers to the Manchester Literary and Philosophical Society in 1803.'
  },
  {
    id: 'vulcanized-rubber',
    name: 'Vulcanized Rubber',
    aliases: ['Vulcanization'],
    date: '1844 CE',
    date_numeric: 1844,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'MATERIALS',
    type: 'process',
    region: 'Springfield, USA',
    civilization: 'Industrial Societies',
    lat: 42.1015,
    lng: -72.5898,
    overview: 'A chemical process that converts natural rubber into a more durable, heat-resistant material by adding sulfur.',
    why_it_matters: 'It created the first waterproof, elastic, and temperature-stable industrial elastomer, essential for tires, gaskets, and electrical insulation.',
    problem_solved: 'Natural latex rubber melted into a sticky paste in summer heat and cracked into brittle shards in winter cold.',
    mechanism: 'Heating rubber with sulfur creates cross-links (disulfide bridges) between individual polymer chains. This three-dimensional molecular network prevents the chains from slipping past each other, imparting permanent elasticity and thermal stability.',
    historical_development: [
      {
        stage: 'Mesoamerican Rubber',
        period: '~1600 BCE',
        description: 'Olmecs mix latex with morning glory juice to create bouncy rubber balls.'
      },
      {
        stage: 'Goodyear\'s Discovery',
        period: '1839-1844',
        description: 'Charles Goodyear accidentally drops a rubber-sulfur mix on a hot stove, inventing vulcanization.'
      }
    ],
    contributors: [
      {
        name: 'Charles Goodyear',
        role: 'inventor',
        contributionNote: 'Discovered the sulfur-heat cross-linking process.'
      },
      {
        name: 'Thomas Hancock',
        role: 'co-developer',
        contributionNote: 'Independently patented vulcanization in the UK.'
      }
    ],
    predecessors: ['scientific-method'],
    successors: ['internal-combustion-engine', 'aviation-powered-flight'],
    modern_legacy: 'Enabled the bicycle and automotive industries (pneumatic tires). Advanced into modern synthetic elastomers and polymers.',
    sources: [
      {
        source: 'US Patent 3633 (1844)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Charles_Goodyear_1855.jpg',
      caption: 'Charles Goodyear, inventor of vulcanized rubber.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Patented in 1844 by Goodyear in the US and Hancock in the UK.'
  }
];

export const batch2Relationships: Relationship[] = [
  {
    id: 'rel-germ-vaccine',
    source: 'germ-theory',
    target: 'vaccination',
    relationship_type: 'EXTENDED',
    evidence: 'Pasteur extended Jenner\'s empirical vaccination using the precise microbial principles of germ theory.'
  },
  {
    id: 'rel-xray-dna',
    source: 'x-ray-imaging',
    target: 'dna-double-helix',
    relationship_type: 'ENABLED',
    evidence: 'Rosalind Franklin used X-ray crystallography to image the DNA helix.'
  },
  {
    id: 'rel-atomic-thermo',
    source: 'atomic-theory',
    target: 'thermodynamics',
    relationship_type: 'ENABLED',
    evidence: 'Statistical mechanics relies entirely on the existence of discrete atoms in motion.'
  },
  {
    id: 'rel-vulcanized-auto',
    source: 'vulcanized-rubber',
    target: 'internal-combustion-engine',
    relationship_type: 'ENABLED',
    evidence: 'Automobiles depend entirely on vulcanized rubber tires, hoses, and engine gaskets.'
  }
];
