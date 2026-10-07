import { Innovation, Relationship } from '../types/innovation';

export const batch7Innovations: Innovation[] = [
  {
    id: 'roman-concrete',
    name: 'Roman Concrete',
    aliases: ['Opus Caementicium'],
    date: '~300 BCE',
    date_numeric: -300,
    date_precision: 'century',
    era: 'CLASSICAL_PERIOD',
    domain: 'ENGINEERING',
    type: 'material',
    region: 'Rome, Italy',
    civilization: 'Roman Empire',
    lat: 41.9028,
    lng: 12.4964,
    overview: 'A highly durable construction material made from volcanic ash (pozzolana), lime, and aggregate, capable of setting underwater.',
    why_it_matters: 'Enabled the architectural revolution of the Roman Empire, allowing for massive domes (the Pantheon), vaults, and vast networks of aqueducts and harbors that survived for millennia.',
    problem_solved: 'Traditional stone masonry was expensive, required highly skilled carving, and could not be poured into complex shapes or set in marine environments.',
    mechanism: 'The volcanic ash reacts with hydrated lime to form a crystalline structure that actually strengthens over time, especially when exposed to seawater (which dissolves volcanic glass to form new binding minerals).',
    historical_development: [
      {
        stage: 'Early Lime Mortars',
        period: '~1000 BCE',
        description: 'Greeks and Nabataeans use basic lime mortars for waterproofing cisterns.'
      },
      {
        stage: 'Pozzolanic Ash Integration',
        period: '~300 BCE',
        description: 'Romans discover that adding volcanic ash from Pozzuoli creates a miraculous underwater-setting concrete.'
      }
    ],
    contributors: [
      {
        name: 'Roman Engineers',
        role: 'collective_culture',
        contributionNote: 'Standardized the recipe and applied it across Mediterranean infrastructure.'
      }
    ],
    predecessors: ['metallurgy-copper'], // Replaced with a generic foundational predecessor if needed
    successors: ['aqueducts-water-systems'], 
    modern_legacy: 'Modern Portland cement descends conceptually from this, but scientists are still studying Roman concrete to make modern marine concrete more durable.',
    sources: [
      {
        source: 'De Architectura (Vitruvius)',
        sourceType: 'primary_archive'
      }
    ],
    confidence: 'VERIFIED',
    confidence_note: 'Extensively documented by Vitruvius and Pliny the Elder.'
  },
  {
    id: 'bessemer-steel',
    name: 'Bessemer Process (Mass Steel)',
    aliases: ['Bessemer Converter', 'Mass Steel Production'],
    date: '1856 CE',
    date_numeric: 1856,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'MATERIALS',
    type: 'process',
    region: 'Sheffield, England',
    civilization: 'Industrial Societies',
    lat: 53.3811,
    lng: -1.4701,
    overview: 'The first inexpensive industrial process for the mass production of steel from molten pig iron.',
    why_it_matters: 'Steel went from a luxury metal used for swords and watches to a cheap, ubiquitous building material, enabling skyscrapers, transcontinental railways, and ocean liners.',
    problem_solved: 'Pig iron was brittle (too much carbon), and wrought iron was soft (too little carbon). Making steel (just the right amount of carbon) required weeks of expensive, skilled labor in small batches.',
    mechanism: 'Air is blown through molten pig iron. The oxygen reacts with impurities (carbon, silicon, manganese), burning them off in an exothermic reaction that actually keeps the iron molten while lowering its carbon content to the perfect steel ratio.',
    historical_development: [
      {
        stage: 'Crucible Steel',
        period: '1740',
        description: 'Benjamin Huntsman creates high-quality steel in small clay crucibles, but it is too expensive for large structures.'
      },
      {
        stage: 'The Bessemer Converter',
        period: '1856',
        description: 'Henry Bessemer patents the process of blowing air through a pear-shaped converter.'
      }
    ],
    contributors: [
      {
        name: 'Henry Bessemer',
        role: 'inventor',
        contributionNote: 'Patented the converter.'
      },
      {
        name: 'Robert Forester Mushet',
        role: 'co-developer',
        contributionNote: 'Perfected the process by adding spiegeleisen to deoxidize and restore the exact carbon balance.'
      }
    ],
    predecessors: ['steam-engine', 'thermodynamics'],
    successors: ['elevator-safety'], // skyscrapers
    modern_legacy: 'Though superseded by the basic oxygen process, it remains the conceptual foundation of the global steel industry.',
    sources: [
      {
        source: 'The Manufacture of Iron and Steel (Henry Bessemer\'s autobiography)',
        sourceType: 'primary_archive'
      }
    ],
    confidence: 'VERIFIED',
    confidence_note: 'Bessemer\'s patent (No. 2321) was filed in 1856.'
  },
  {
    id: 'elevator-safety',
    name: 'Safety Elevator',
    aliases: ['Passenger Elevator', 'Lift'],
    date: '1852 CE',
    date_numeric: 1852,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'ENGINEERING',
    type: 'physical',
    region: 'New York, USA',
    civilization: 'Industrial Societies',
    lat: 40.7128,
    lng: -74.0060,
    overview: 'A hoisting apparatus featuring an automatic safety brake that prevents the cab from falling if the lifting cable breaks.',
    why_it_matters: 'Broke the psychological and physical barrier to vertical living. Without the safety elevator, buildings rarely exceeded six stories, and penthouses were the cheapest, least desirable apartments. It made the modern skyscraper possible.',
    problem_solved: 'Early hoists relied on a single rope; if it snapped, the platform plummeted, making them far too dangerous for human passengers.',
    mechanism: 'A leaf spring forces heavy locking pawls outward into ratcheted guide rails. As long as the hoist cable is under tension, it pulls the spring flat, keeping the pawls retracted. If the cable snaps, tension is lost, the spring releases, and the pawls instantly lock into the guide rails.',
    historical_development: [
      {
        stage: 'Industrial Hoists',
        period: 'Early 19th Century',
        description: 'Steam-powered hoists used in mines and factories, exclusively for freight due to high fatality rates.'
      },
      {
        stage: 'Otis\'s Demonstration',
        period: '1854',
        description: 'Elisha Otis stands on a hoisted platform at the Crystal Palace Exhibition and orders the rope cut. The safety brake holds, stunning the crowd.'
      }
    ],
    contributors: [
      {
        name: 'Elisha Otis',
        role: 'inventor',
        contributionNote: 'Invented the safety brake and founded the Otis Elevator Company.'
      }
    ],
    predecessors: ['steam-engine', 'bessemer-steel'],
    successors: ['air-conditioning'], // skyscraper tech
    modern_legacy: 'Billions of people use passenger elevators safely every day in modern megacities.',
    sources: [
      {
        source: 'Otis Elevator Company Archives',
        sourceType: 'institutional'
      }
    ],
    confidence: 'VERIFIED',
    confidence_note: 'The 1854 Crystal Palace demonstration is a famously documented public event.'
  },
  {
    id: 'synthetic-plastic-bakelite',
    name: 'Bakelite (First Synthetic Plastic)',
    aliases: ['Polyoxybenzylmethylenglycolanhydride', 'Synthetic Polymer'],
    date: '1907 CE',
    date_numeric: 1907,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'MATERIALS',
    type: 'material',
    region: 'New York, USA',
    civilization: 'Industrial Societies',
    lat: 40.9312,
    lng: -73.8987,
    overview: 'The first entirely synthetic plastic, formulated from a chemical reaction between phenol and formaldehyde.',
    why_it_matters: 'Marked the beginning of the Plastics Age. It replaced scarce natural materials (ivory, shellac, tortoiseshell) and provided an excellent, easily molded electrical insulator for the booming electronics industry.',
    problem_solved: 'The burgeoning electrical and telephone industries desperately needed an insulating material that was heat-resistant, moldable, and not dependent on the erratic supply of natural shellac (secreted by Asian beetles).',
    mechanism: 'A thermosetting phenol formaldehyde resin. When heated and compressed, the precursor molecules polymerize into a heavily cross-linked, rigid 3D molecular matrix that retains its shape and cannot be remelted.',
    historical_development: [
      {
        stage: 'Celluloid',
        period: '1869',
        description: 'John Wesley Hyatt invents a semi-synthetic plastic from plant cellulose to replace ivory billiard balls, but it is highly flammable.'
      },
      {
        stage: 'The Bakelizer',
        period: '1907',
        description: 'Leo Baekeland controls the violent phenol-formaldehyde reaction under high pressure in a machine called a "Bakelizer."'
      }
    ],
    contributors: [
      {
        name: 'Leo Baekeland',
        role: 'inventor',
        contributionNote: 'Invented and commercialized Bakelite, coining the term "plastics."'
      }
    ],
    predecessors: ['periodic-table', 'electrical-generator'],
    successors: ['transistor-semiconductor'], // enabled mass electronics
    modern_legacy: 'Birthed the modern petrochemical polymer industry, leading to everything from nylon to modern acrylics and the ubiquitous, highly debated use of plastics today.',
    sources: [
      {
        source: 'The Age of Plastics (National Museum of American History)',
        sourceType: 'institutional'
      }
    ],
    confidence: 'VERIFIED',
    confidence_note: 'Baekeland filed the "Heat and Pressure" patent in July 1907.'
  }
];

export const batch7Relationships: Relationship[] = [
  {
    id: 'rel-steel-elevator',
    source: 'bessemer-steel',
    target: 'elevator-safety',
    relationship_type: 'ENABLED',
    evidence: 'Mass-produced steel structural beams, combined with the safety elevator, allowed buildings to become skyscrapers.'
  },
  {
    id: 'rel-generator-bakelite',
    source: 'electrical-generator',
    target: 'synthetic-plastic-bakelite',
    relationship_type: 'DEPENDS_ON',
    evidence: 'The mass adoption of electrical grids and early electronics drove the desperate market demand for Bakelite insulators.'
  }
];

