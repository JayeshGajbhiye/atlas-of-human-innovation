import { Innovation, Relationship } from '../types/innovation';

export const batch3Innovations: Innovation[] = [
  {
    id: 'electron-microscope',
    name: 'Electron Microscope',
    aliases: ['TEM', 'SEM'],
    date: '1931 CE',
    date_numeric: 1931,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'SCIENCE',
    type: 'physical',
    region: 'Berlin, Germany',
    civilization: 'Industrial Societies',
    lat: 52.5200,
    lng: 13.4050,
    overview: 'A microscope that uses a beam of accelerated electrons as a source of illumination.',
    why_it_matters: 'Shattered the diffraction limit of light microscopes, allowing scientists to see viruses, proteins, and the atomic structure of materials for the first time.',
    problem_solved: 'Optical microscopes cannot resolve structures smaller than the wavelength of visible light (~200 nm).',
    mechanism: 'Uses electrostatic and electromagnetic lenses to control the electron beam and focus it to form an image, similar to how a glass lens focuses light.',
    historical_development: [
      {
        stage: 'De Broglie Hypothesis',
        period: '1924',
        description: 'Louis de Broglie proposes that electrons have wave-like properties.'
      },
      {
        stage: 'First Transmission Electron Microscope (TEM)',
        period: '1931',
        description: 'Max Knoll and Ernst Ruska build the first electron microscope.'
      }
    ],
    contributors: [
      {
        name: 'Ernst Ruska',
        role: 'inventor',
        contributionNote: 'Co-invented the first electron microscope and won the Nobel Prize.'
      },
      {
        name: 'Max Knoll',
        role: 'co-developer',
        contributionNote: 'Co-invented the first electron microscope.'
      }
    ],
    predecessors: ['optics-microscope-telescope', 'quantum-mechanics'],
    successors: ['dna-double-helix', 'silicon-integrated-circuit'],
    modern_legacy: 'Essential for modern materials science, nanotechnology, and structural biology (Cryo-EM).',
    sources: [
      {
        source: 'The Early History of the Electron Microscope (Ernst Ruska)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Electron_Microscope.png',
      caption: 'A modern transmission electron microscope.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The 1931 prototype is well-documented in physics history.'
  },
  {
    id: 'air-conditioning',
    name: 'Air Conditioning',
    aliases: ['HVAC', 'AC'],
    date: '1902 CE',
    date_numeric: 1902,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'ENGINEERING',
    type: 'physical',
    region: 'New York, USA',
    civilization: 'Industrial Societies',
    lat: 40.7128,
    lng: -74.0060,
    overview: 'A system that alters the properties of air (primarily temperature and humidity) to more favorable conditions.',
    why_it_matters: 'Transformed architecture (allowing skyscrapers without ventilation shafts), enabled the rise of the Sun Belt cities, and is critical for clean rooms and server farms.',
    problem_solved: 'High humidity was ruining the color registration in a printing plant; extreme indoor heat limited human productivity and structural density.',
    mechanism: 'Uses the refrigeration cycle: a compressor pumps refrigerant through a system where it evaporates to absorb heat from indoor air, and condenses to release it outside.',
    historical_development: [
      {
        stage: 'Ice cooling',
        period: '19th Century',
        description: 'Early cooling used ice harvested in winter and stored.'
      },
      {
        stage: 'Carrier\'s Apparatus',
        period: '1902',
        description: 'Willis Carrier invents the first modern electrical air conditioning unit to control humidity in a printing plant.'
      }
    ],
    contributors: [
      {
        name: 'Willis Carrier',
        role: 'inventor',
        contributionNote: 'Designed the first modern AC system and founded the Carrier Corporation.'
      }
    ],
    predecessors: ['thermodynamics', 'electrical-generator'],
    successors: ['microprocessor-cpu', 'internet-arpanet'], // enabled clean rooms and server farms
    modern_legacy: 'Virtually all modern data centers, hospitals, and high-rise office buildings rely entirely on HVAC systems to function.',
    sources: [
      {
        source: 'Weathermakers to the World (Carrier Corp history)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Air_conditioner_outdoor_unit.jpg',
      caption: 'A typical modern split-system air conditioning unit.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Carrier\'s 1902 installation in Brooklyn is the accepted birth of modern AC.'
  },
  {
    id: 'electric-streetcar',
    name: 'Electric Streetcar (Tram)',
    aliases: ['Trolley', 'Tram'],
    date: '1881 CE',
    date_numeric: 1881,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'TRANSPORTATION',
    type: 'physical',
    region: 'Lichterfelde, Germany',
    civilization: 'Industrial Societies',
    lat: 52.4313,
    lng: 13.3243,
    overview: 'A rail vehicle powered by electricity, designed for urban passenger transport along streets.',
    why_it_matters: 'The streetcar fundamentally transformed urban planning, enabling the expansion of cities beyond walking distance and giving birth to the first true suburbs.',
    problem_solved: 'Horse-drawn omnibuses were slow, expensive, and filled cities with manure. Early steam trams were too dangerous and polluting for dense streets.',
    mechanism: 'Draws electric current from overhead wires (via a trolley pole or pantograph) or a third rail to power electric traction motors connected to the axles.',
    historical_development: [
      {
        stage: 'Siemens\' Gross-Lichterfelde Tramway',
        period: '1881',
        description: 'Werner von Siemens opens the world\'s first commercially successful electric tramway near Berlin.'
      },
      {
        stage: 'Sprague\'s Richmond Union Passenger Railway',
        period: '1888',
        description: 'Frank J. Sprague solves the problem of reliable overhead power collection and motor mounting, setting the standard for global networks.'
      }
    ],
    contributors: [
      {
        name: 'Werner von Siemens',
        role: 'inventor',
        contributionNote: 'Built the first electric tramway.'
      },
      {
        name: 'Frank J. Sprague',
        role: 'co-developer',
        contributionNote: 'Invented the wheelbarrow suspension and spring-loaded trolley pole.'
      }
    ],
    predecessors: ['electrical-generator'],
    successors: ['personal-computer'], // replacing placeholder
    modern_legacy: 'Laid the groundwork for modern light rail and subway systems across the globe.',
    sources: [
      {
        source: 'The Electric Railway (A.M. Wellington, 1890)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Siemens_strassenbahn.jpg',
      caption: 'The world\'s first electric tram in Lichterfelde, Germany, 1881.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Well documented launch on May 16, 1881.'
  }
];

export const batch3Relationships: Relationship[] = [
  {
    id: 'rel-microscope-electron',
    source: 'optics-microscope-telescope',
    target: 'electron-microscope',
    relationship_type: 'EXTENDED',
    evidence: 'The electron microscope is a direct physical and theoretical evolution of the optical microscope.'
  },
  {
    id: 'rel-thermodynamics-ac',
    source: 'thermodynamics',
    target: 'air-conditioning',
    relationship_type: 'APPLIED',
    evidence: 'Air conditioning relies entirely on the phase-change refrigeration cycle governed by thermodynamics.'
  },
  {
    id: 'rel-generator-streetcar',
    source: 'electrical-generator',
    target: 'electric-streetcar',
    relationship_type: 'ENABLED',
    evidence: 'The streetcar relied on central generator stations to supply continuous overhead DC power.'
  }
];
