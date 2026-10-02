import { Relationship } from '../types/innovation';
import { batch2Relationships } from './innovations-batch2';
import { batch3Relationships } from './innovations-batch3';

const baseRelationships: Relationship[] = [
  // ==========================================================
  // NAVIGATION & GEOSPATIAL CHAIN (User Highlighted Path)
  // ==========================================================
  {
    id: 'rel-math60-astronomy',
    source: 'mathematics-base60',
    target: 'astronomy-astrolabe',
    relationship_type: 'ENABLED',
    evidence: 'Babylonian sexagesimal angular geometry (360° circle, 60 minutes) provided the coordinate system for Hipparchus’s celestial sphere and the stereographic projection of the astrolabe.'
  },
  {
    id: 'rel-geom-astronomy',
    source: 'geometry-euclidean',
    target: 'astronomy-astrolabe',
    relationship_type: 'ENABLED',
    evidence: 'Euclidean circle geometry and spherical angle projections mathematically enabled the engraving of altitude tympans on astrolabes.'
  },
  {
    id: 'rel-geom-cartography',
    source: 'geometry-euclidean',
    target: 'cartography-maps',
    relationship_type: 'APPLIED',
    evidence: 'Ptolemy applied Euclidean planar and spherical trigonometry to project the spherical Earth onto conical and planar map grids.'
  },
  {
    id: 'rel-astronomy-cartography',
    source: 'astronomy-astrolabe',
    target: 'cartography-maps',
    relationship_type: 'ENABLED',
    evidence: 'Celestial latitude measurements using astrolabes provided the ground-truth latitudinal coordinates for early world maps.'
  },
  {
    id: 'rel-iron-compass',
    source: 'metallurgy-iron',
    target: 'magnetic-compass',
    relationship_type: 'ENABLED',
    evidence: 'Iron smelting provided the ferrous needles required for artificial thermoremanence magnetization by quenching heated iron in Earth’s magnetic field.'
  },
  {
    id: 'rel-compass-navigation',
    source: 'magnetic-compass',
    target: 'navigation-maritime',
    relationship_type: 'ENABLED',
    evidence: 'The magnetic compass gave navigators a continuous heading reference through fog and overcast skies, allowing transoceanic voyages away from coastlines.'
  },
  {
    id: 'rel-cartography-navigation',
    source: 'cartography-maps',
    target: 'navigation-maritime',
    relationship_type: 'ENABLED',
    evidence: 'Portolan charts and Mercator conformal projections allowed sailors to plot straight rhumb-line compass courses between continents.'
  },
  {
    id: 'rel-astronomy-navigation',
    source: 'astronomy-astrolabe',
    target: 'navigation-maritime',
    relationship_type: 'APPLIED',
    evidence: 'Mariner’s astrolabes and quadrants allowed ship captains to measure the altitude of Polaris and the noontime Sun to determine latitude at sea.'
  },
  {
    id: 'rel-wheel-clock',
    source: 'the-wheel',
    target: 'mechanical-clock',
    relationship_type: 'DERIVED_FROM',
    evidence: 'Precision toothed gear trains and rotational balance wheels evolved directly from wheel and axle kinematic principles.'
  },
  {
    id: 'rel-clock-chronometer',
    source: 'mechanical-clock',
    target: 'chronometer-longitude',
    relationship_type: 'IMPROVED',
    evidence: 'John Harrison refined mechanical horology with bi-metallic temperature compensation and low-friction jeweled bearings to withstand ocean motion.'
  },
  {
    id: 'rel-navigation-chronometer',
    source: 'navigation-maritime',
    target: 'chronometer-longitude',
    relationship_type: 'INSPIRED',
    evidence: 'The 1707 Scilly naval disaster and the 1714 Longitude Act created the urgent demand for a marine timepiece to calculate East-West position at sea.'
  },
  {
    id: 'rel-chronometer-gps',
    source: 'chronometer-longitude',
    target: 'satellites-gps',
    relationship_type: 'INSPIRED',
    evidence: 'Satellite navigation directly digitizes Harrison’s longitude principle by comparing time-of-flight differences between orbiting atomic clocks.'
  },
  {
    id: 'rel-maxwell-radio',
    source: 'electromagnetism-maxwell',
    target: 'radio-telecommunication',
    relationship_type: 'ENABLED',
    evidence: 'Maxwell’s 1865 field equations mathematically predicted electromagnetic radio waves, which Hertz and Marconi generated and harnessed.'
  },
  {
    id: 'rel-radio-radar',
    source: 'radio-telecommunication',
    target: 'radar',
    relationship_type: 'EXTENDED',
    evidence: 'Radar applied pulsed high-frequency radio and microwave emissions to detect reflections from metallic aircraft and terrain.'
  },
  {
    id: 'rel-radio-gps',
    source: 'radio-telecommunication',
    target: 'satellites-gps',
    relationship_type: 'ENABLED',
    evidence: 'GPS relies entirely on microwave radio L-band carrier frequencies (L1 1575.42 MHz, L2 1227.60 MHz) to broadcast atomic timestamps to Earth.'
  },
  {
    id: 'rel-radar-autonomous',
    source: 'radar',
    target: 'autonomous-navigation',
    relationship_type: 'APPLIED',
    evidence: 'Millimeter-wave radar provides self-driving vehicles with velocity and distance telemetry unaffected by blinding rain, fog, or dust.'
  },
  {
    id: 'rel-gps-autonomous',
    source: 'satellites-gps',
    target: 'autonomous-navigation',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Self-driving vehicles and delivery drones depend on Real-Time Kinematic (RTK) GPS for centimeter-accurate global localization.'
  },
  {
    id: 'rel-cartography-gps',
    source: 'cartography-maps',
    target: 'satellites-gps',
    relationship_type: 'EXTENDED',
    evidence: 'Geodetic coordinate datums (WGS 84) directly formalize centuries of cartographic ellipsoidal Earth models.'
  },
  {
    id: 'rel-gps-smartphone',
    source: 'satellites-gps',
    target: 'smartphone-mobile',
    relationship_type: 'APPLIED',
    evidence: 'Miniaturized Assisted-GPS chipsets inside smartphones enabled mobile digital mapping, turn-by-turn routing, and ridesharing.'
  },

  // ==========================================================
  // PYROTECHNOLOGY, MATERIALS & INDUSTRIAL POWER
  // ==========================================================
  {
    id: 'rel-stone-fire',
    source: 'stone-tools',
    target: 'controlled-fire',
    relationship_type: 'ENABLED',
    evidence: 'Flint and iron pyrite percussion tools provided the localized sparks needed to reliably ignite dry tinder.'
  },
  {
    id: 'rel-fire-pottery',
    source: 'controlled-fire',
    target: 'pottery',
    relationship_type: 'ENABLED',
    evidence: 'Kiln firing above 600°C was required to dehydrate clay minerals and vitrify silica into durable ceramics.'
  },
  {
    id: 'rel-fire-copper',
    source: 'controlled-fire',
    target: 'metallurgy-copper',
    relationship_type: 'ENABLED',
    evidence: 'Reducing furnaces generating carbon monoxide above 1085°C were required to smelt copper from malachite ores.'
  },
  {
    id: 'rel-pottery-copper',
    source: 'pottery',
    target: 'metallurgy-copper',
    relationship_type: 'ENABLED',
    evidence: 'Refractory ceramic crucibles and clay tuyeres (blowpipes) were essential to contain molten metal without melting.'
  },
  {
    id: 'rel-copper-iron',
    source: 'metallurgy-copper',
    target: 'metallurgy-iron',
    relationship_type: 'IMPROVED',
    evidence: 'Bronze casting and bellows furnace techniques were scaled up to reach the higher reducing temperatures required for iron bloomery.'
  },
  {
    id: 'rel-iron-steam',
    source: 'metallurgy-iron',
    target: 'steam-engine',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Newcomen and Watt steam engines required cast-iron cylinders bored to tight tolerances by John Wilkinson’s boring machines.'
  },
  {
    id: 'rel-iron-bessemer',
    source: 'metallurgy-iron',
    target: 'bessemer-steel-process',
    relationship_type: 'IMPROVED',
    evidence: 'The Bessemer converter transformed pig iron directly into high-tensile steel by blowing air through molten pig iron.'
  },
  {
    id: 'rel-bessemer-locomotive',
    source: 'bessemer-steel-process',
    target: 'steam-locomotive',
    relationship_type: 'ENABLED',
    evidence: 'Cheap Bessemer steel rails replaced soft wrought-iron rails that wore out in months under heavy locomotive axle weights.'
  },
  {
    id: 'rel-steam-locomotive',
    source: 'steam-engine',
    target: 'steam-locomotive',
    relationship_type: 'EXTENDED',
    evidence: 'High-pressure steam boilers (Trevithick/Stephenson) miniaturized the steam engine to fit onto rolling railway carriages.'
  },
  {
    id: 'rel-steam-thermodynamics',
    source: 'steam-engine',
    target: 'thermodynamics',
    relationship_type: 'INSPIRED',
    evidence: 'Sadi Carnot developed thermodynamics explicitly to analyze and maximize the motive power and fuel economy of steam engines.'
  },
  {
    id: 'rel-thermo-ice',
    source: 'thermodynamics',
    target: 'internal-combustion-engine',
    relationship_type: 'ENABLED',
    evidence: 'Carnot’s and Otto’s thermodynamic cycle analyses provided the theoretical blueprint for high-efficiency four-stroke compression.'
  },
  {
    id: 'rel-ice-aviation',
    source: 'internal-combustion-engine',
    target: 'aviation-powered-flight',
    relationship_type: 'DEPENDS_ON',
    evidence: 'The Wright brothers designed a custom 12 hp cast-aluminum internal combustion engine with the high power-to-weight ratio needed for flight.'
  },

  // ==========================================================
  // MATHEMATICS, SCIENCE & COMPUTATION
  // ==========================================================
  {
    id: 'rel-writing-math',
    source: 'writing-cuneiform',
    target: 'mathematics-base60',
    relationship_type: 'ENABLED',
    evidence: 'Cuneiform numerical marks on clay accounting tablets established abstract positional notation separate from physical tokens.'
  },
  {
    id: 'rel-math60-zero',
    source: 'mathematics-base60',
    target: 'decimal-zero-algebra',
    relationship_type: 'EXTENDED',
    evidence: 'Babylonian positional place-value concepts directly inspired the Indian decimal place-value system and Brahmagupta’s zero.'
  },
  {
    id: 'rel-zero-calculus',
    source: 'decimal-zero-algebra',
    target: 'calculus',
    relationship_type: 'ENABLED',
    evidence: 'Infinitesimal limits require handling expressions that approach zero (0/0 indeterminate forms) via rigorous algebraic manipulation.'
  },
  {
    id: 'rel-geom-calculus',
    source: 'geometry-euclidean',
    target: 'calculus',
    relationship_type: 'EXTENDED',
    evidence: 'Archimedes’ geometric exhaustion of parabolic areas directly prefigured integral calculus.'
  },
  {
    id: 'rel-calculus-newton',
    source: 'calculus',
    target: 'classical-mechanics-newton',
    relationship_type: 'ENABLED',
    evidence: 'Newton invented his fluxional calculus to solve the planetary orbital differential equations derived from inverse-square gravity.'
  },
  {
    id: 'rel-scientific-newton',
    source: 'scientific-method',
    target: 'classical-mechanics-newton',
    relationship_type: 'APPLIED',
    evidence: 'Newton combined Francis Bacon’s empirical induction with rigorous mathematical deduction to formulate universal physical laws.'
  },
  {
    id: 'rel-optics-heliocentric',
    source: 'optics-microscope-telescope',
    target: 'heliocentric-model',
    relationship_type: 'ENABLED',
    evidence: 'Galileo’s telescope provided observational proof of heliocentrism by resolving the phases of Venus and Jupiter’s orbiting moons.'
  },
  {
    id: 'rel-optics-germ',
    source: 'optics-microscope-telescope',
    target: 'germ-theory',
    relationship_type: 'ENABLED',
    evidence: 'Compound achromatic microscopes allowed Pasteur and Koch to visually observe, stain, and isolate pathogenic bacteria.'
  },
  {
    id: 'rel-germ-antibiotics',
    source: 'germ-theory',
    target: 'antibiotics-penicillin',
    relationship_type: 'ENABLED',
    evidence: 'Understanding that specific bacterial species cause infection enabled Fleming, Florey, and Chain to screen for bactericidal mold agents.'
  },
  {
    id: 'rel-evolution-dna',
    source: 'evolution-natural-selection',
    target: 'dna-double-helix',
    relationship_type: 'INSPIRED',
    evidence: 'Darwin’s requirement for heritable molecular variation drove the search for the physical chemical carrier of genetic inheritance.'
  },
  {
    id: 'rel-dna-crispr',
    source: 'dna-double-helix',
    target: 'genetic-engineering-crispr',
    relationship_type: 'EXTENDED',
    evidence: 'Understanding Watson-Crick base-pairing enabled engineering single-guide RNA sequences that match exact 20-base-pair target genomic loci.'
  },

  // ==========================================================
  // ELECTRICITY, TELECOMMUNICATIONS & ELECTRONICS
  // ==========================================================
  {
    id: 'rel-battery-telegraph',
    source: 'battery-voltaic-pile',
    target: 'electric-telegraph',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Voltaic batteries provided the stable, continuous DC electrical current needed to power telegraph relay circuits across miles of wire.'
  },
  {
    id: 'rel-telegraph-maxwell',
    source: 'electric-telegraph',
    target: 'electromagnetism-maxwell',
    relationship_type: 'INSPIRED',
    evidence: 'Signal distortion and delay in transatlantic telegraph cables prompted William Thomson (Kelvin) and Maxwell to analyze electromagnetic transmission.'
  },
  {
    id: 'rel-maxwell-generator',
    source: 'electromagnetism-maxwell',
    target: 'electrical-generator',
    relationship_type: 'ENABLED',
    evidence: 'Faraday’s law of induction and Maxwell’s electrodynamic equations mathematically governed AC generator and transformer design.'
  },
  {
    id: 'rel-telegraph-telephone',
    source: 'electric-telegraph',
    target: 'telephone',
    relationship_type: 'IMPROVED',
    evidence: 'Alexander Graham Bell invented the telephone while attempting to build a "harmonic telegraph" to transmit multiple tones over a single wire.'
  },
  {
    id: 'rel-telephone-internet',
    source: 'telephone',
    target: 'internet-arpanet',
    relationship_type: 'APPLIED',
    evidence: 'The earliest ARPANET packet-switching nodes connected over AT&T 50 kbps leased analog telephone circuit lines.'
  },
  {
    id: 'rel-optics-fiber',
    source: 'optics-microscope-telescope',
    target: 'optical-fiber-telecom',
    relationship_type: 'EXTENDED',
    evidence: 'Snell’s law and optical glass polishing techniques enabled total internal reflection silica waveguides.'
  },
  {
    id: 'rel-fiber-internet',
    source: 'optical-fiber-telecom',
    target: 'internet-arpanet',
    relationship_type: 'IMPROVED',
    evidence: 'Transoceanic optical fiber cables replaced copper wires and satellite links, expanding global internet backbone bandwidth by 10,000x.'
  },

  // ==========================================================
  // COMPUTING & THE SILICON REVOLUTION
  // ==========================================================
  {
    id: 'rel-clock-babbage',
    source: 'mechanical-clock',
    target: 'analytical-engine-babbage',
    relationship_type: 'DERIVED_FROM',
    evidence: 'Babbage adapted the precision stepped gear wheels and escapement pawls of clockmaking to create calculating figure wheels.'
  },
  {
    id: 'rel-babbage-turing',
    source: 'analytical-engine-babbage',
    target: 'turing-machine-formal-logic',
    relationship_type: 'INSPIRED',
    evidence: 'Alan Turing cited Babbage’s Analytical Engine in his seminal 1950 paper as the mechanical precursor to universal computing.'
  },
  {
    id: 'rel-turing-eniac',
    source: 'turing-machine-formal-logic',
    target: 'electronic-computer-eniac',
    relationship_type: 'ENABLED',
    evidence: 'Turing’s concept of universal program execution directly influenced John von Neumann’s stored-program computer architecture.'
  },
  {
    id: 'rel-quantum-transistor',
    source: 'quantum-mechanics',
    target: 'transistor-semiconductor',
    relationship_type: 'ENABLED',
    evidence: 'Quantum band theory (valence band, conduction band, and bandgaps in silicon/germanium) was essential to design p-n semiconductor junctions.'
  },
  {
    id: 'rel-quantum-qc',
    source: 'quantum-mechanics',
    target: 'quantum-computing',
    relationship_type: 'ENABLED',
    evidence: 'Quantum superposition, entanglement, and unitary phase evolution provide the fundamental computational physics for superconducting qubits.'
  },
  {
    id: 'rel-transistor-ic',
    source: 'transistor-semiconductor',
    target: 'silicon-integrated-circuit',
    relationship_type: 'EXTENDED',
    evidence: 'Noyce and Kilby integrated multiple discrete transistors onto a single semiconductor substrate, eliminating manual wiring.'
  },
  {
    id: 'rel-ic-cpu',
    source: 'silicon-integrated-circuit',
    target: 'microprocessor-cpu',
    relationship_type: 'IMPROVED',
    evidence: 'Intel’s silicon gate MOS technology shrunk an entire 4-bit CPU onto a single monolithic integrated circuit chip (Intel 4004).'
  },
  {
    id: 'rel-cpu-pc',
    source: 'microprocessor-cpu',
    target: 'personal-computer',
    relationship_type: 'ENABLED',
    evidence: 'Microprocessors (Intel 8080, MOS 6502, Motorola 68000) made computers cheap and compact enough for consumer desktop machines.'
  },
  {
    id: 'rel-pc-web',
    source: 'personal-computer',
    target: 'world-wide-web',
    relationship_type: 'ENABLED',
    evidence: 'Tim Berners-Lee created the World Wide Web on a NeXT personal computer, and consumer PCs running Mosaic popularized it.'
  },
  {
    id: 'rel-arpanet-web',
    source: 'internet-arpanet',
    target: 'world-wide-web',
    relationship_type: 'ENABLED',
    evidence: 'The World Wide Web was built as an application-layer protocol (HTTP) running on top of the underlying TCP/IP Internet network.'
  },
  {
    id: 'rel-pc-smartphone',
    source: 'personal-computer',
    target: 'smartphone-mobile',
    relationship_type: 'IMPROVED',
    evidence: 'The iPhone condensed personal computer operating systems (macOS kernel) and GUIs into an ultra-low-power pocket device.'
  },
  {
    id: 'rel-battery-smartphone',
    source: 'lithium-ion-battery',
    target: 'smartphone-mobile',
    relationship_type: 'DEPENDS_ON',
    evidence: 'The high energy density and thin form factor of lithium-ion batteries made all-day touchscreen smartphones physically feasible.'
  },

  // ==========================================================
  // SPACE EXPLORATION & SATELLITES
  // ==========================================================
  {
    id: 'rel-newton-rocketry',
    source: 'classical-mechanics-newton',
    target: 'rocketry-spaceflight',
    relationship_type: 'APPLIED',
    evidence: 'Newton’s third law of motion (action and reaction) and gravitational orbital velocities govern rocket thrust and satellite trajectories.'
  },
  {
    id: 'rel-rocketry-gps',
    source: 'rocketry-spaceflight',
    target: 'satellites-gps',
    relationship_type: 'ENABLED',
    evidence: 'Delta and Atlas launch vehicles placed the 24 Navstar satellite constellation into 20,200 km medium-Earth orbit.'
  },
  {
    id: 'rel-solar-iss',
    source: 'silicon-solar-cell',
    target: 'space-station-iss',
    relationship_type: 'DEPENDS_ON',
    evidence: 'The International Space Station relies on eight massive silicon solar array wings generating over 120 kilowatts of orbital electricity.'
  },
  {
    id: 'rel-rocketry-iss',
    source: 'rocketry-spaceflight',
    target: 'space-station-iss',
    relationship_type: 'ENABLED',
    evidence: 'Space Shuttles and Russian Proton rockets carried all 450 tons of ISS pressurized modules into orbit.'
  },
  {
    id: 'rel-rocketry-falcon',
    source: 'rocketry-spaceflight',
    target: 'reusable-orbital-rocketry',
    relationship_type: 'IMPROVED',
    evidence: 'Falcon 9 upgraded disposable multi-stage chemical rocketry into autonomous propulsively landing and rapidly reusable launch vehicles.'
  },
  {
    id: 'rel-gps-falcon',
    source: 'satellites-gps',
    target: 'reusable-orbital-rocketry',
    relationship_type: 'APPLIED',
    evidence: 'Falcon 9 first stage boosters use differential GPS and inertial measurement units to pinpoint autonomous drone ship landing decks.'
  },

  // ==========================================================
  // ARTIFICIAL INTELLIGENCE & NEURAL LEARNING
  // ==========================================================
  {
    id: 'rel-turing-ai',
    source: 'turing-machine-formal-logic',
    target: 'artificial-intelligence-birth',
    relationship_type: 'ENABLED',
    evidence: 'Turing’s proof of universal computation and his 1950 imitation game founded the conceptual premise of artificial intelligence.'
  },
  {
    id: 'rel-ai-backprop',
    source: 'artificial-intelligence-birth',
    target: 'neural-networks-backprop',
    relationship_type: 'EXTENDED',
    evidence: 'Connectionism emerged within AI to replace rigid hand-crafted symbolic logic with biological brain-inspired adaptive synaptic learning.'
  },
  {
    id: 'rel-calculus-backprop',
    source: 'calculus',
    target: 'neural-networks-backprop',
    relationship_type: 'APPLIED',
    evidence: 'Backpropagation is mathematically identical to applying the multivariable calculus chain rule across composite neural functions.'
  },
  {
    id: 'rel-backprop-alexnet',
    source: 'neural-networks-backprop',
    target: 'deep-learning-alexnet',
    relationship_type: 'EXTENDED',
    evidence: 'AlexNet scaled backpropagation through 8 convolutional layers using parallel matrix multiplications on NVIDIA GPUs.'
  },
  {
    id: 'rel-alexnet-transformer',
    source: 'deep-learning-alexnet',
    target: 'transformer-attention',
    relationship_type: 'INSPIRED',
    evidence: 'The success of deep representations motivated researchers to seek parallel architectures for sequential text that avoided recurrent bottlenecks.'
  },
  {
    id: 'rel-transformer-llm',
    source: 'transformer-attention',
    target: 'generative-ai-llm',
    relationship_type: 'ENABLED',
    evidence: 'Decoder-only transformer architectures scaled with multi-head self-attention serve as the foundation of modern large language models (GPT-4, Gemini).'
  },
  {
    id: 'rel-web-llm',
    source: 'world-wide-web',
    target: 'generative-ai-llm',
    relationship_type: 'DEPENDS_ON',
    evidence: 'The multi-trillion token pre-training datasets that empower LLMs with general human knowledge were crawled directly from the open World Wide Web.'
  },
  {
    id: 'rel-alexnet-autonomous',
    source: 'deep-learning-alexnet',
    target: 'autonomous-navigation',
    relationship_type: 'APPLIED',
    evidence: 'Deep convolutional networks perform real-time semantic segmentation on vehicle camera feeds, detecting pedestrians, lane lines, and stop signs.'
  },
  {
    id: 'rel-transformer-autonomous',
    source: 'transformer-attention',
    target: 'autonomous-navigation',
    relationship_type: 'APPLIED',
    evidence: 'Modern autonomous driving systems (Waymo, Tesla FSD V12) use vision transformer (ViT) end-to-end models to map sensory tokens directly to steering and braking controls.'
  },

  // ==========================================================
  // CIVIL INFRASTRUCTURE & FOUNDATIONAL
  // ==========================================================
  {
    id: 'rel-concrete-aqueducts',
    source: 'concrete-hydraulic-mortar',
    target: 'aqueducts-water-systems',
    relationship_type: 'ENABLED',
    evidence: 'Waterproof hydraulic pozzolanic concrete lined aqueduct channels, preventing water leakage into permeable limestone hills.'
  },
  {
    id: 'rel-concrete-roads',
    source: 'concrete-hydraulic-mortar',
    target: 'paved-roads-network',
    relationship_type: 'ENABLED',
    evidence: 'Roman roads used pozzolanic lime mortar in the nucleus layer to fuse aggregate rubble into an indestructible, water-shedding foundation.'
  },
  {
    id: 'rel-roads-locomotive',
    source: 'paved-roads-network',
    target: 'steam-locomotive',
    relationship_type: 'INSPIRED',
    evidence: 'The need to haul coal from mines to waterways along paved wagonways inspired the laying of smooth iron rails and locomotives.'
  },
  {
    id: 'rel-paper-print',
    source: 'papyrus-paper',
    target: 'printing-press',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Movable type was economically viable only because rag paper was cheap; printing on expensive calfskin vellum would have bankrupted publishers.'
  },
  {
    id: 'rel-print-scientific',
    source: 'printing-press',
    target: 'scientific-method',
    relationship_type: 'ENABLED',
    evidence: 'Print enabled scientists across Europe to publish standardized observational data, peer-review findings, and replicate experiments without scribe copyist errors.'
  },
  {
    id: 'rel-relativity-gps',
    source: 'special-general-relativity',
    target: 'satellites-gps',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Without relativistic clock adjustments (+45.9 microsec/day general relativity gravity effect minus 7.2 microsec/day special relativity orbital speed effect = +38.6 microsec/day), GPS position would drift by over 11 kilometers every single day.'
  }
];

export const batch1Relationships: Relationship[] = [
  {
    id: 'rel-stone-bow',
    source: 'stone-tools',
    target: 'bow-and-arrow',
    relationship_type: 'ENABLED',
    evidence: 'Microlithic stone points were necessary for effective arrowheads.'
  },
  {
    id: 'rel-stone-cordage',
    source: 'stone-tools',
    target: 'rope-cordage',
    relationship_type: 'ENABLED',
    evidence: 'Stone blades were needed to harvest and scrape bast fibers for twisting.'
  },
  {
    id: 'rel-math60-abacus',
    source: 'mathematics-base60',
    target: 'abacus',
    relationship_type: 'ENABLED',
    evidence: 'Positional number concepts were physically realized on counting boards.'
  },
  {
    id: 'rel-wheel-gears',
    source: 'the-wheel',
    target: 'mechanical-gears',
    relationship_type: 'EXTENDED',
    evidence: 'Gears are directly evolved from the wheel, adding teeth to transmit torque.'
  },
  {
    id: 'rel-writing-alexandria',
    source: 'writing-cuneiform',
    target: 'library-of-alexandria',
    relationship_type: 'DEPENDS_ON',
    evidence: 'A universal library requires written text and structured cataloging systems.'
  }
];

export const RELATIONSHIPS: Relationship[] = [...baseRelationships, ...batch1Relationships, ...batch2Relationships, ...batch3Relationships];

export function getRelationshipsForNode(nodeId: string): Relationship[] {
  return RELATIONSHIPS.filter(r => r.source === nodeId || r.target === nodeId);
}
