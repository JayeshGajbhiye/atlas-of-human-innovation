import { Innovation, Relationship } from '../types/innovation';

export const batch9Innovations: Innovation[] = [
  {
    id: 'crop-rotation',
    name: 'Norfolk Four-Course Crop Rotation',
    aliases: ['Crop Rotation', 'British Agricultural Revolution'],
    date: '1730 CE',
    date_numeric: 1730,
    date_precision: 'century',
    era: 'EARLY_MODERN',
    domain: 'FOUNDATIONAL',
    type: 'protocol',
    region: 'Norfolk, England',
    civilization: 'Early Modern Europe',
    lat: 52.6309,
    lng: 1.2974,
    overview: 'An agricultural system that rotates four different crops over four years (wheat, turnips, barley, clover) to restore soil nutrients without leaving land fallow.',
    why_it_matters: 'Eliminated the need to leave 33% of arable land empty (fallow) every year to recover. This massive spike in food production sustained the population explosion that fueled the Industrial Revolution.',
    problem_solved: 'Growing the same crop exhausts soil nitrogen. The medieval three-field system required leaving one field entirely empty every year to naturally recover, wasting vast amounts of potential food.',
    mechanism: 'Clover naturally fixes nitrogen from the air back into the soil through symbiotic bacteria in its roots. Turnips serve as winter fodder for livestock. The livestock graze on the fields, dropping manure, which further fertilizes the soil for the next wheat crop.',
    historical_development: [
      {
        stage: 'Medieval Three-Field System',
        period: 'Middle Ages',
        description: 'Farmers leave one-third of their land unplanted.'
      },
      {
        stage: 'Townshend\'s Four-Course System',
        period: '1730s',
        description: 'Charles Townshend popularizes the sequential planting of wheat, turnips, barley, and clover in England.'
      }
    ],
    contributors: [
      {
        name: 'Charles "Turnip" Townshend',
        role: 'popularizer',
        contributionNote: 'Promoted the Dutch-derived system on his large estates in Norfolk, England.'
      }
    ],
    predecessors: ['agriculture-farming'],
    successors: ['steam-engine'], // Allowed labor to move to cities
    modern_legacy: 'Crop rotation remains a foundational principle of modern sustainable agriculture and soil health management.',
    sources: [
      {
        source: 'The Agricultural Revolution in England (Mark Overton)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Crop_rotation_diagram.svg',
      caption: 'A diagram showing the flow of nutrients in a four-field crop rotation system.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'While its origins are complex (tracing to Flanders), its 18th-century English codification is undisputed.'
  },
  {
    id: 'haber-bosch-process',
    name: 'Haber-Bosch Process (Synthetic Fertilizer)',
    aliases: ['Ammonia Synthesis'],
    date: '1909 CE',
    date_numeric: 1909,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'MATERIALS',
    type: 'process',
    region: 'Karlsruhe, Germany',
    civilization: 'Industrial Societies',
    lat: 49.0069,
    lng: 8.4037,
    overview: 'An artificial nitrogen fixation process and the main industrial procedure for the production of ammonia.',
    why_it_matters: 'It is estimated that half of the nitrogen atoms in the bodies of the entire modern human population come from this process. Without it, the Earth could only naturally support about 4 billion people.',
    problem_solved: 'Plants need nitrogen to grow. While the atmosphere is 78% nitrogen, it is an inert gas that plants cannot absorb. Natural guano/saltpeter deposits in South America were running out, threatening global starvation.',
    mechanism: 'Nitrogen gas from the air is reacted with hydrogen gas under extremely high temperatures (400–500 °C) and extreme pressure (150–250 atmospheres) over an iron catalyst to break the triple bond of N2, creating liquid ammonia (NH3) for fertilizer.',
    historical_development: [
      {
        stage: 'Lab Synthesis',
        period: '1909',
        description: 'Fritz Haber successfully synthesizes ammonia drop-by-drop in a laboratory apparatus.'
      },
      {
        stage: 'Industrial Scaling',
        period: '1913',
        description: 'Carl Bosch at BASF scales the terrifyingly high-pressure process to an industrial factory level without the pipes exploding.'
      }
    ],
    contributors: [
      {
        name: 'Fritz Haber',
        role: 'inventor',
        contributionNote: 'Discovered the chemical process (Nobel Prize).'
      },
      {
        name: 'Carl Bosch',
        role: 'co-developer',
        contributionNote: 'Engineered the high-pressure industrial scaling (Nobel Prize).'
      }
    ],
    predecessors: ['periodic-table', 'thermodynamics'],
    successors: ['genetic-engineering-crispr'], // Green revolution bio
    modern_legacy: 'Sustains half the global population, but causes massive ecological damage via nitrogen runoff into oceans (algal blooms/dead zones).',
    sources: [
      {
        source: 'The Alchemy of Air (Thomas Hager)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Haber-Bosch-En.svg',
      caption: 'A flow diagram of the industrial Haber-Bosch process.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Haber demonstrated the process to BASF on July 2, 1909.'
  },
  {
    id: 'pasteurization',
    name: 'Pasteurization',
    aliases: ['Food Pasteurization'],
    date: '1864 CE',
    date_numeric: 1864,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'MEDICINE',
    type: 'process',
    region: 'Paris, France',
    civilization: 'Industrial Societies',
    lat: 48.8566,
    lng: 2.3522,
    overview: 'A process that kills pathogenic bacteria in food and drink by heating it to a specific temperature for a set period of time without destroying the product\'s flavor or quality.',
    why_it_matters: 'Drastically reduced foodborne illnesses (like bovine tuberculosis in milk) and dramatically extended the shelf-life of basic foods, making modern dairy and beverage supply chains possible.',
    problem_solved: 'Wine, beer, and milk routinely spoiled unpredictably, ruining economies and spreading deadly pathogens, because humans did not understand that invisible living microorganisms were causing the decay.',
    mechanism: 'Mild heat (e.g., 72°C for 15 seconds) is sufficient to denature the critical enzymes of vegetative pathogenic bacteria (like E. coli or Salmonella) without boiling the liquid. The liquid is then rapidly cooled to prevent any surviving spores from germinating.',
    historical_development: [
      {
        stage: 'Spontaneous Generation Theory',
        period: 'Pre-1860',
        description: 'The prevailing scientific belief that life (like mold) spontaneously arises from dead matter.'
      },
      {
        stage: 'Swan-Neck Flask Experiment',
        period: '1864',
        description: 'Louis Pasteur proves that spoilage is caused by airborne microbes, and that heating kills them.'
      }
    ],
    contributors: [
      {
        name: 'Louis Pasteur',
        role: 'inventor',
        contributionNote: 'Discovered the microbiological cause of fermentation and spoilage, inventing the heating process to prevent it.'
      }
    ],
    predecessors: ['optics-microscope-telescope'],
    successors: ['germ-theory'],
    modern_legacy: 'Virtually all milk, juice, and canned goods sold commercially today undergo pasteurization, preventing millions of deaths.',
    sources: [
      {
        source: 'Louis Pasteur: Free Lance of Science (René Dubos)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pasteur_swan_neck_flask.jpg',
      caption: 'Pasteur\'s original swan-neck flasks, which allowed air in but trapped dust and microbes, disproving spontaneous generation.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Pasteur applied for the patent for his wine-heating method in 1865.'
  }
];

export const batch9Relationships: Relationship[] = [
  {
    id: 'rel-farming-rotation',
    source: 'agriculture-farming',
    target: 'crop-rotation',
    relationship_type: 'IMPROVED',
    evidence: 'Crop rotation is an optimization of fundamental agricultural planting patterns.'
  },
  {
    id: 'rel-chemistry-haber',
    source: 'periodic-table',
    target: 'haber-bosch-process',
    relationship_type: 'APPLIED',
    evidence: 'Haber used advanced thermodynamic physical chemistry and catalytic theory to force the nitrogen reaction.'
  },
  {
    id: 'rel-pasteurization-germ',
    source: 'pasteurization',
    target: 'germ-theory',
    relationship_type: 'ENABLED',
    evidence: 'Pasteur\'s experiments with spoilage provided the direct physical proof needed to formalize the Germ Theory of Disease.'
  }
];
