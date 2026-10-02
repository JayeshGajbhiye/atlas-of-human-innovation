import { Innovation, Relationship } from '../types/innovation';

export const batch6Innovations: Innovation[] = [
  {
    id: 'sewage-sanitation-systems',
    name: 'Modern Sanitation (Sewer Systems)',
    aliases: ['Sewerage', 'Sanitation'],
    date: '1858 CE',
    date_numeric: 1858,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'FOUNDATIONAL',
    type: 'system',
    region: 'London, England',
    civilization: 'Industrial Societies',
    lat: 51.5074,
    lng: -0.1278,
    overview: 'The systematic, engineered removal and treatment of human waste and wastewater from urban centers.',
    why_it_matters: 'Arguably saved more human lives than any single medical advancement by eliminating waterborne diseases (cholera, typhoid) and allowing cities to safely scale to millions of inhabitants.',
    problem_solved: 'During the Industrial Revolution, cities were drowning in raw sewage, leading to the "Great Stink" of London and rampant, deadly cholera epidemics.',
    mechanism: 'A vast network of subterranean brick tunnels intercepts raw sewage before it reaches the river. Steam-powered pumping stations lift the waste to treatment facilities downstream, safely returning treated water to the environment.',
    historical_development: [
      {
        stage: 'Roman Cloaca Maxima',
        period: '~600 BCE',
        description: 'Early open-air canals or simple tunnels carried storm runoff and some waste away from the Roman Forum.'
      },
      {
        stage: 'Bazalgette\'s London Sewers',
        period: '1858',
        description: 'Joseph Bazalgette designs an integrated, gravity-fed and steam-pumped sewer network following the Great Stink.'
      }
    ],
    contributors: [
      {
        name: 'Joseph Bazalgette',
        role: 'inventor',
        contributionNote: 'Designed the modern London sewer system, setting the standard for all modern cities.'
      }
    ],
    predecessors: ['aqueducts-water-systems', 'steam-engine'],
    successors: ['germ-theory'], // Verified by John Snow, but practically solved by sewers
    modern_legacy: 'The unseen, indispensable circulatory system of every modern city on Earth.',
    sources: [
      {
        source: 'The Great Stink of London (Stephen Halliday)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Crossness_Pumping_Station_interior.jpg',
      caption: 'The ornate steam pumps of the Crossness Pumping Station, part of Bazalgette\'s London sewer system.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The London system was authorized by Parliament in 1858.'
  },
  {
    id: 'telescope-space-hubble',
    name: 'Space Telescopes (Hubble)',
    aliases: ['Hubble Space Telescope', 'HST'],
    date: '1990 CE',
    date_numeric: 1990,
    date_precision: 'year',
    era: 'INTERNET_AGE',
    domain: 'SPACE',
    type: 'physical',
    region: 'Low Earth Orbit',
    civilization: 'Global Scientific Community',
    lat: 0,
    lng: 0,
    overview: 'An astronomical telescope placed in outer space to observe distant planets, galaxies, and other astronomical objects.',
    why_it_matters: 'Without the blurring effect of Earth\'s atmosphere, space telescopes provided our deepest, clearest views of the cosmos, helping pin down the age of the universe and confirming the existence of supermassive black holes.',
    problem_solved: 'Ground-based telescopes are severely limited by atmospheric distortion (which makes stars twinkle) and atmospheric absorption of ultraviolet and infrared light.',
    mechanism: 'A large Cassegrain reflector telescope orbits above the atmosphere. Light hits a primary mirror, bounces to a secondary mirror, and is directed into advanced digital sensors and spectrographs. Data is beamed back to Earth via satellite relays.',
    historical_development: [
      {
        stage: 'Lyman Spitzer\'s Proposal',
        period: '1946',
        description: 'Astrophysicist Lyman Spitzer publishes the first proposal for a large space telescope.'
      },
      {
        stage: 'Hubble Deployment',
        period: '1990',
        description: 'The Space Shuttle Discovery deploys the Hubble Space Telescope into Low Earth Orbit.'
      }
    ],
    contributors: [
      {
        name: 'Lyman Spitzer',
        role: 'theoretical_precursor',
        contributionNote: 'First proposed the concept of an extraterrestrial observatory.'
      },
      {
        name: 'NASA / ESA',
        role: 'institution',
        contributionNote: 'Jointly built, launched, and maintained the telescope.'
      }
    ],
    predecessors: ['rocketry-spaceflight', 'optics-microscope-telescope', 'silicon-solar-cell'],
    successors: [], 
    modern_legacy: 'Paved the way for the James Webb Space Telescope (JWST) and redefined humanity\'s place in the universe.',
    sources: [
      {
        source: 'NASA Hubble History',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg',
      caption: 'The Hubble Space Telescope as seen from the Space Shuttle Atlantis in 2009.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Launched on April 24, 1990.'
  },
  {
    id: 'oral-contraceptive-pill',
    name: 'Combined Oral Contraceptive Pill',
    aliases: ['The Pill', 'Birth Control Pill'],
    date: '1960 CE',
    date_numeric: 1960,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'MEDICINE',
    type: 'physical',
    region: 'Massachusetts, USA',
    civilization: 'Modern Societies',
    lat: 42.3601,
    lng: -71.0589,
    overview: 'A pill taken daily by women to prevent pregnancy, containing a combination of estrogen and progestin.',
    why_it_matters: 'One of the most socially transformative medical inventions in history. It decoupled sex from procreation, catalyzed the women\'s liberation movement, and fundamentally altered global demographics and workforce participation.',
    problem_solved: 'Women had no reliable, discreet, and reversible female-controlled method of preventing pregnancy.',
    mechanism: 'The hormones in the pill suppress the pituitary gland, preventing the mid-cycle surge of luteinizing hormone (LH) and thereby inhibiting ovulation. It also thickens cervical mucus to impede sperm.',
    historical_development: [
      {
        stage: 'Synthetic Progestin',
        period: '1951',
        description: 'Carl Djerassi synthesizes norethindrone, the first highly effective oral progestin, from Mexican yams.'
      },
      {
        stage: 'FDA Approval',
        period: '1960',
        description: 'Enovid becomes the first oral contraceptive approved by the US Food and Drug Administration.'
      }
    ],
    contributors: [
      {
        name: 'Gregory Pincus',
        role: 'inventor',
        contributionNote: 'Biologist who led the development of the pill.'
      },
      {
        name: 'Margaret Sanger',
        role: 'popularizer',
        contributionNote: 'Birth control activist who raised the funding and set the vision for the pill.'
      }
    ],
    predecessors: ['scientific-method'],
    successors: [], 
    modern_legacy: 'Used by over 100 million women globally, it remains a cornerstone of family planning and reproductive health.',
    sources: [
      {
        source: 'The Birth of the Pill (Jonathan Eig)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Birth_Control_Pills.jpg',
      caption: 'A typical 28-day blister pack of combined oral contraceptive pills.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Enovid was approved by the FDA on May 9, 1960.'
  },
  {
    id: 'photography-camera',
    name: 'Photography (Camera)',
    aliases: ['Camera Obscura', 'Daguerreotype'],
    date: '1839 CE',
    date_numeric: 1839,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'KNOWLEDGE',
    type: 'physical',
    region: 'Paris, France',
    civilization: 'Industrial Societies',
    lat: 48.8566,
    lng: 2.3522,
    overview: 'The art, application, and practice of creating durable images by recording light, either chemically or electronically.',
    why_it_matters: 'Democratized portraiture, birthed photojournalism, provided an objective record of history, and fundamentally altered how humanity perceives reality and memory.',
    problem_solved: 'Visual records of reality had to be drawn or painted by hand, a slow, subjective, and highly skilled process.',
    mechanism: 'Light enters a dark box (camera obscura) through a lens and strikes a light-sensitive medium (originally silver halide crystals). The light causes a chemical reaction that creates a latent image, which is then chemically developed and fixed.',
    historical_development: [
      {
        stage: 'Camera Obscura',
        period: 'Antiquity',
        description: 'Philosophers notice that light passing through a pinhole projects an inverted image on a dark wall.'
      },
      {
        stage: 'Nicéphore Niépce\'s Heliography',
        period: '1826',
        description: 'The first surviving permanent photograph from nature, requiring a multi-day exposure.'
      },
      {
        stage: 'The Daguerreotype',
        period: '1839',
        description: 'Louis Daguerre reveals the first commercially successful photographic process.'
      }
    ],
    contributors: [
      {
        name: 'Louis Daguerre',
        role: 'inventor',
        contributionNote: 'Invented the daguerreotype process.'
      },
      {
        name: 'Nicéphore Niépce',
        role: 'theoretical_precursor',
        contributionNote: 'Captured the first permanent photographic image.'
      }
    ],
    predecessors: ['optics-microscope-telescope'],
    successors: ['x-ray-imaging', 'cinema-film'], // Cinema not yet added, but logical
    modern_legacy: 'Evolved from chemical plates to film to the digital CMOS sensors embedded in billions of modern smartphones.',
    sources: [
      {
        source: 'The History of Photography (Beaumont Newhall)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Boulevard_du_Temple_by_Daguerre.jpg',
      caption: 'Boulevard du Temple (1838) by Daguerre, the first photograph to include a human being.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Daguerre\'s process was presented to the French Académie des Sciences in 1839.'
  },
  {
    id: 'airplane-jet-engine',
    name: 'Jet Engine',
    aliases: ['Gas Turbine Engine', 'Turbojet'],
    date: '1939 CE',
    date_numeric: 1939,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'TRANSPORTATION',
    type: 'physical',
    region: 'Germany / UK',
    civilization: 'Industrial Societies',
    lat: 53.0793,
    lng: 8.8017,
    overview: 'A reaction engine discharging a fast-moving jet that generates thrust by jet propulsion.',
    why_it_matters: 'Overcame the aerodynamic limits of propellers, enabling aircraft to break the sound barrier and making global commercial air travel cheap, safe, and fast.',
    problem_solved: 'Propeller-driven piston engines lose efficiency dramatically at high altitudes and high speeds (as propeller tips approach supersonic speeds).',
    mechanism: 'Air is drawn into a rotating compressor, mixed with fuel in a combustion chamber, and ignited. The resulting high-pressure gas blasts out the rear, generating forward thrust, while turning a turbine that powers the front compressor.',
    historical_development: [
      {
        stage: 'Whittle\'s Patent',
        period: '1930',
        description: 'Frank Whittle submits his patent for a turbojet engine in the UK.'
      },
      {
        stage: 'Heinkel He 178',
        period: '1939',
        description: 'Hans von Ohain\'s engine powers the world\'s first jet aircraft flight in Germany.'
      }
    ],
    contributors: [
      {
        name: 'Frank Whittle',
        role: 'inventor',
        contributionNote: 'Co-invented the turbojet engine independently in the UK.'
      },
      {
        name: 'Hans von Ohain',
        role: 'inventor',
        contributionNote: 'Co-invented the turbojet and powered the first jet flight.'
      }
    ],
    predecessors: ['aviation-powered-flight', 'thermodynamics'],
    successors: ['reusable-orbital-rocketry'], // Related propulsion
    modern_legacy: 'The turbofan variants of the jet engine power virtually all modern commercial airliners and military fighter jets.',
    sources: [
      {
        source: 'The Jet Engine (Rolls-Royce plc)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Jet_engine.svg',
      caption: 'A cross-sectional diagram of a modern turbofan jet engine.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The He 178 flew on August 27, 1939.'
  }
];

export const batch6Relationships: Relationship[] = [
  {
    id: 'rel-water-sanitation',
    source: 'aqueducts-water-systems',
    target: 'sewage-sanitation-systems',
    relationship_type: 'EXTENDED',
    evidence: 'Sanitation systems are the necessary output counterpart to large-scale urban water input systems.'
  },
  {
    id: 'rel-rocket-hubble',
    source: 'rocketry-spaceflight',
    target: 'telescope-space-hubble',
    relationship_type: 'ENABLED',
    evidence: 'Space telescopes can only exist because heavy-lift rocketry allows them to be placed in orbit.'
  },
  {
    id: 'rel-optics-camera',
    source: 'optics-microscope-telescope',
    target: 'photography-camera',
    relationship_type: 'APPLIED',
    evidence: 'Photography fundamentally relies on glass optics to focus incoming light onto a focal plane.'
  },
  {
    id: 'rel-aviation-jet',
    source: 'aviation-powered-flight',
    target: 'airplane-jet-engine',
    relationship_type: 'IMPROVED',
    evidence: 'The jet engine replaced the piston engine, vastly increasing the speed and altitude of aircraft.'
  }
];
