import { EraInfo } from '../types/innovation';

export const ERAS: EraInfo[] = [
  {
    id: 'PREHISTORY',
    name: 'Prehistory & Deep Time',
    period: 'Before ~3500 BCE',
    startYear: -3000000,
    endYear: -3500,
    description: 'The formative dawn of humanity, marked by lithic tool manufacture, mastery of fire, symbolic behavior, and the dawn of agricultural settlements.',
    color: '#a3e635' // lime
  },
  {
    id: 'ANCIENT_WORLD',
    name: 'Ancient World',
    period: '~3500 BCE – 600 BCE',
    startYear: -3500,
    endYear: -600,
    description: 'The emergence of state societies, monumental civil engineering, writing, wheel mechanics, metallurgy, and early bureaucratic and legal systems.',
    color: '#facc15' // yellow
  },
  {
    id: 'CLASSICAL_PERIOD',
    name: 'Classical Antiquity',
    period: '~600 BCE – 500 CE',
    startYear: -600,
    endYear: 500,
    description: 'Systematic axiomatic mathematics, philosophy, Greco-Roman engineering, Han Dynasty science, and Indian mathematical advancements including place-value numerals.',
    color: '#fb923c' // orange
  },
  {
    id: 'MEDIEVAL_PERIOD',
    name: 'Medieval & Golden Ages',
    period: '~500 CE – 1450 CE',
    startYear: 500,
    endYear: 1450,
    description: 'Islamic Golden Age scientific expansion, Chinese movable type and compass innovation, medieval mechanical horology, and cross-continental scholastic translation.',
    color: '#f87171' // red-rose
  },
  {
    id: 'EARLY_MODERN',
    name: 'Scientific Revolution & Early Modern',
    period: '~1450 CE – 1760 CE',
    startYear: 1450,
    endYear: 1760,
    description: 'The printing revolution, maritime navigation across global oceans, empirical scientific method, heliocentric astronomy, and Newtonian physics.',
    color: '#c084fc' // purple
  },
  {
    id: 'INDUSTRIAL_REVOLUTION',
    name: 'Industrial Revolution',
    period: '~1760 CE – 1870 CE',
    startYear: 1760,
    endYear: 1870,
    description: 'Transition from muscular and biomass power to fossil steam thermodynamics, mechanization of textiles, railway networks, and machine tool precision.',
    color: '#818cf8' // indigo
  },
  {
    id: 'ELECTRIFICATION',
    name: 'Electrification & Chemistry',
    period: '~1870 CE – 1940 CE',
    startYear: 1870,
    endYear: 1940,
    description: 'Electrical power grids, chemical synthesis, telecommunications via telegraph and radio, internal combustion transport, aviation, and quantum theory foundations.',
    color: '#38bdf8' // sky
  },
  {
    id: 'COMPUTING_AGE',
    name: 'Electronic & Computing Age',
    period: '~1940 CE – 1980 CE',
    startYear: 1940,
    endYear: 1980,
    description: 'Electronic digital computers, semiconductor transistors, silicon integrated circuits, atomic energy, and the dawn of spaceflight and lunar exploration.',
    color: '#2dd4bf' // teal
  },
  {
    id: 'INTERNET_AGE',
    name: 'Internet & Information Age',
    period: '~1980 CE – 2015 CE',
    startYear: 1980,
    endYear: 2015,
    description: 'Ubiquitous personal computing, global fiber-optic internet, the World Wide Web, cellular mobility, GPS satellite constellations, and human genome sequencing.',
    color: '#00f0ff' // cyan
  },
  {
    id: 'AI_ERA',
    name: 'Artificial Intelligence & Modern Era',
    period: '~2015 CE – Present',
    startYear: 2015,
    endYear: 2026,
    description: 'Deep neural networks, transformer architectures, large language models, quantum processors, mRNA platforms, and autonomous navigation robotics.',
    color: '#e879f9' // fuchsia
  }
];

export function getEraById(id: string): EraInfo | undefined {
  return ERAS.find(era => era.id === id);
}
