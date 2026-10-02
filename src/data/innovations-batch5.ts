import { Innovation, Relationship } from '../types/innovation';

export const batch5Innovations: Innovation[] = [
  {
    id: 'mechanical-refrigeration',
    name: 'Mechanical Refrigeration',
    aliases: ['Refrigeration', 'Fridge'],
    date: '1834 CE',
    date_numeric: 1834,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'ENGINEERING',
    type: 'physical',
    region: 'London, England',
    civilization: 'Industrial Societies',
    lat: 51.5074,
    lng: -0.1278,
    overview: 'The process of removing heat from an enclosed space or substance to lower its temperature, using mechanical work.',
    why_it_matters: 'Refrigeration broke humanity\'s reliance on the seasons for food preservation, enabling global food supply chains, urbanization, and the medical storage of vaccines and blood.',
    problem_solved: 'Food spoilage limited how far goods could be transported and forced populations to rely on salting, smoking, or natural ice harvesting.',
    mechanism: 'Utilizes a vapor-compression cycle where a volatile fluid (refrigerant) is compressed, condensed to a liquid (releasing heat), and then expanded into a gas (absorbing heat from the interior).',
    historical_development: [
      {
        stage: 'Artificial Ice Machine',
        period: '1755',
        description: 'William Cullen demonstrates the first artificial refrigeration using a pump to create a partial vacuum over a container of diethyl ether.'
      },
      {
        stage: 'Vapor-Compression System',
        period: '1834',
        description: 'Jacob Perkins builds the first working vapor-compression refrigeration system.'
      }
    ],
    contributors: [
      {
        name: 'Jacob Perkins',
        role: 'inventor',
        contributionNote: 'Built the first working closed-cycle refrigeration system.'
      },
      {
        name: 'Carl von Linde',
        role: 'co-developer',
        contributionNote: 'Patented the process of liquefying gases, making refrigeration practical for industry.'
      }
    ],
    predecessors: ['thermodynamics', 'steam-engine'],
    successors: ['air-conditioning', 'space-station-iss'],
    modern_legacy: 'The foundation of the modern cold chain, allowing billions to live in cities far from agricultural centers.',
    sources: [
      {
        source: 'Refrigeration: A History (ASHRAE)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Refrigerator_diagram.svg',
      caption: 'A thermodynamic diagram of the vapor-compression refrigeration cycle.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Perkins\' 1834 British patent (No. 6662) is universally accepted as the birth of vapor-compression.'
  },
  {
    id: 'mri-scanner',
    name: 'Magnetic Resonance Imaging (MRI)',
    aliases: ['NMR Imaging'],
    date: '1977 CE',
    date_numeric: 1977,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'MEDICINE',
    type: 'physical',
    region: 'New York, USA',
    civilization: 'Modern Societies',
    lat: 40.7128,
    lng: -74.0060,
    overview: 'A medical imaging technique that uses strong magnetic fields and radio waves to generate detailed images of the organs in the body.',
    why_it_matters: 'Allowed doctors to see inside the soft tissue of the human body with unprecedented clarity without using dangerous ionizing radiation (like X-rays or CT scans).',
    problem_solved: 'X-rays pass easily through soft tissues like the brain or muscles, making them invisible or requiring dangerous contrast agents.',
    mechanism: 'A powerful magnetic field aligns the magnetization of hydrogen atoms in the body. Radio frequency fields systematically alter the alignment, and the relaxing protons emit signals that are computationally reconstructed into a 3D image.',
    historical_development: [
      {
        stage: 'Nuclear Magnetic Resonance',
        period: '1938',
        description: 'Isidor Rabi discovers NMR, measuring the magnetic properties of atomic nuclei.'
      },
      {
        stage: 'First Human MRI Scan',
        period: '1977',
        description: 'Raymond Damadian builds the "Indomitable" scanner and performs the first full-body MRI scan.'
      }
    ],
    contributors: [
      {
        name: 'Paul Lauterbur',
        role: 'co-developer',
        contributionNote: 'Developed the use of magnetic field gradients for spatial localization (Nobel Prize).'
      },
      {
        name: 'Peter Mansfield',
        role: 'co-developer',
        contributionNote: 'Developed the mathematical techniques to speed up image acquisition (Nobel Prize).'
      }
    ],
    predecessors: ['quantum-mechanics', 'radio-telecommunication', 'transistor-semiconductor'],
    successors: ['generative-ai-llm'], // AI used in image reconstruction
    modern_legacy: 'The gold standard for neurological, musculoskeletal, and cardiovascular imaging.',
    sources: [
      {
        source: 'Nobel Prize in Physiology or Medicine (2003)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/MRI-Philips.JPG',
      caption: 'A modern clinical MRI scanner.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The theoretical physics and applied engineering are well-documented Nobel achievements.'
  },
  {
    id: 'pcr-dna-amplification',
    name: 'Polymerase Chain Reaction (PCR)',
    aliases: ['DNA Amplification'],
    date: '1983 CE',
    date_numeric: 1983,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'SCIENCE',
    type: 'protocol',
    region: 'California, USA',
    civilization: 'Modern Societies',
    lat: 37.8313,
    lng: -122.2852,
    overview: 'A technique used in molecular biology to amplify a single copy or a few copies of a piece of DNA across several orders of magnitude, generating millions of copies.',
    why_it_matters: 'Transformed biology from a slow, observational science to a rapid, manipulative engineering discipline. It enabled the Human Genome Project, forensic DNA fingerprinting, and rapid viral testing.',
    problem_solved: 'Scientists could not easily isolate or generate enough DNA from a small sample to analyze or manipulate it.',
    mechanism: 'Thermal cycling: heating separates the DNA strands, cooling allows synthetic primers to attach to target sequences, and Taq polymerase (a heat-stable enzyme) synthesizes new DNA strands.',
    historical_development: [
      {
        stage: 'Concept of PCR',
        period: '1983',
        description: 'Kary Mullis conceptualizes the iterative process of amplifying DNA using thermal cycling.'
      },
      {
        stage: 'Thermostable Polymerase',
        period: '1988',
        description: 'The introduction of Taq polymerase (from hot spring bacteria) automates the process, avoiding the need to add new enzyme every cycle.'
      }
    ],
    contributors: [
      {
        name: 'Kary Mullis',
        role: 'inventor',
        contributionNote: 'Conceptualized the PCR process (Nobel Prize in Chemistry, 1993).'
      }
    ],
    predecessors: ['dna-double-helix'],
    successors: ['genetic-engineering-crispr'],
    modern_legacy: 'The backbone of all modern genetics, virology (including COVID-19 testing), and personalized medicine.',
    sources: [
      {
        source: 'Nobel Prize in Chemistry (1993)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Polymerase_chain_reaction.svg',
      caption: 'Diagram illustrating the thermal cycling phases of PCR.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Mullis\'s invention while working at Cetus Corporation is a cornerstone of biotech history.'
  },
  {
    id: 'blockchain-cryptocurrency',
    name: 'Blockchain & Cryptocurrency',
    aliases: ['Bitcoin', 'Distributed Ledger'],
    date: '2008 CE',
    date_numeric: 2008,
    date_precision: 'year',
    era: 'INTERNET_AGE',
    domain: 'COMPUTING',
    type: 'protocol',
    region: 'Cyberspace',
    civilization: 'Global Network',
    lat: 0,
    lng: 0,
    overview: 'A decentralized, distributed, and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively.',
    why_it_matters: 'Introduced the concept of digital scarcity and trustless consensus, allowing for the transfer of value across the internet without a central banking authority.',
    problem_solved: 'The "Double-Spending Problem" in digital currency: how to prevent someone from copying a digital token and spending it twice without a central bank verifying the ledger.',
    mechanism: 'Uses cryptographic hashing and a Proof-of-Work (or Proof-of-Stake) consensus algorithm. A network of nodes competes to validate blocks of transactions; once validated, the block is cryptographically linked to the previous one, forming an immutable chain.',
    historical_development: [
      {
        stage: 'Hashcash',
        period: '1997',
        description: 'Adam Back invents a proof-of-work system used to limit email spam, laying the groundwork for mining.'
      },
      {
        stage: 'Bitcoin Whitepaper',
        period: '2008',
        description: 'Satoshi Nakamoto publishes "Bitcoin: A Peer-to-Peer Electronic Cash System", combining cryptography with economic incentives.'
      }
    ],
    contributors: [
      {
        name: 'Satoshi Nakamoto',
        role: 'inventor',
        contributionNote: 'Pseudonymous creator of Bitcoin and the first blockchain database.'
      }
    ],
    predecessors: ['internet-arpanet', 'personal-computer'],
    successors: [], // To be added (Web3, Smart Contracts)
    modern_legacy: 'Birthed a trillion-dollar industry, decentralized finance (DeFi), and forced central banks to explore digital fiat currencies.',
    sources: [
      {
        source: 'Bitcoin: A Peer-to-Peer Electronic Cash System (Nakamoto, 2008)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Bitcoin_logo_without_text.svg',
      caption: 'The logo of Bitcoin, the first decentralized cryptocurrency.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The genesis block was mined on January 3, 2009.'
  },
  {
    id: 'wind-turbine-electricity',
    name: 'Electricity-Generating Wind Turbine',
    aliases: ['Wind Power', 'Aerogenerator'],
    date: '1887 CE',
    date_numeric: 1887,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'ENERGY',
    type: 'physical',
    region: 'Glasgow, Scotland',
    civilization: 'Industrial Societies',
    lat: 55.8642,
    lng: -4.2518,
    overview: 'A device that converts the kinetic energy of wind into electrical energy.',
    why_it_matters: 'Provided the first clean, renewable alternative to fossil fuels for mass electrical generation, laying the foundation for the modern transition to sustainable energy grids.',
    problem_solved: 'Windmills had pumped water and milled grain for millennia, but harnessing wind to generate grid-scale electricity required marrying aerodynamics with electromagnetic induction.',
    mechanism: 'Wind turns aerodynamic blades connected to a rotor. The rotor spins a shaft, which connects to a generator that uses electromagnetic induction (moving magnets over copper coils) to produce electricity.',
    historical_development: [
      {
        stage: 'Blyth\'s Cloth-Sailed Turbine',
        period: '1887',
        description: 'Prof. James Blyth builds the first electricity-generating wind turbine to light his holiday home.'
      },
      {
        stage: 'Poul la Cour\'s Wind Tunnels',
        period: '1891',
        description: 'Danish inventor Poul la Cour applies aerodynamic principles to wind turbines, vastly improving their efficiency.'
      }
    ],
    contributors: [
      {
        name: 'James Blyth',
        role: 'inventor',
        contributionNote: 'Built the first electricity-generating wind turbine.'
      },
      {
        name: 'Poul la Cour',
        role: 'co-developer',
        contributionNote: 'Discovered that fast-rotating turbines with fewer blades are more efficient.'
      }
    ],
    predecessors: ['electrical-generator', 'classical-mechanics-newton'],
    successors: ['silicon-solar-cell'], // Both are renewable energy milestones
    modern_legacy: 'Modern offshore and onshore wind farms provide a significant and rapidly growing percentage of global electricity.',
    sources: [
      {
        source: 'Wind Energy: The Facts (European Wind Energy Association)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Windmills_D1-D4_%28Thornton_Bank%29.jpg',
      caption: 'Modern offshore wind turbines generating utility-scale power.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Blyth\'s turbine was well documented in 1887 in Scotland.'
  }
];

export const batch5Relationships: Relationship[] = [
  {
    id: 'rel-thermo-refrigeration',
    source: 'thermodynamics',
    target: 'mechanical-refrigeration',
    relationship_type: 'APPLIED',
    evidence: 'The vapor-compression cycle is a direct engineering application of thermodynamic principles.'
  },
  {
    id: 'rel-quantum-mri',
    source: 'quantum-mechanics',
    target: 'mri-scanner',
    relationship_type: 'ENABLED',
    evidence: 'Nuclear magnetic resonance depends entirely on the quantum property of nuclear spin.'
  },
  {
    id: 'rel-dna-pcr',
    source: 'dna-double-helix',
    target: 'pcr-dna-amplification',
    relationship_type: 'DEPENDS_ON',
    evidence: 'PCR requires the exact knowledge of DNA\'s complementary double-helix structure to function.'
  },
  {
    id: 'rel-internet-blockchain',
    source: 'internet-arpanet',
    target: 'blockchain-cryptocurrency',
    relationship_type: 'ENABLED',
    evidence: 'Blockchain is a distributed peer-to-peer network that relies entirely on the infrastructure of the Internet.'
  },
  {
    id: 'rel-generator-wind',
    source: 'electrical-generator',
    target: 'wind-turbine-electricity',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Wind turbines simply provide the kinetic force to spin an electrical generator.'
  }
];
