import { DomainCategory, DomainInfo } from '../types/innovation';

export const DOMAINS: Record<DomainCategory, DomainInfo> = {
  FOUNDATIONAL: {
    id: 'FOUNDATIONAL',
    name: 'Foundational Innovations',
    description: 'Primal technologies and survival techniques that enabled the biological and social survival of early human populations.',
    color: '#84cc16', // lime
    borderColor: '#a3e635',
    bgRgba: 'rgba(132, 204, 22, 0.15)',
  },
  KNOWLEDGE: {
    id: 'KNOWLEDGE',
    name: 'Knowledge & Mathematics',
    description: 'Symbolic notation systems, mathematical frameworks, information storage, and cartographic sciences.',
    color: '#eab308', // yellow
    borderColor: '#facc15',
    bgRgba: 'rgba(234, 179, 8, 0.15)',
  },
  ENGINEERING: {
    id: 'ENGINEERING',
    name: 'Engineering & Mechanics',
    description: 'Physical machines, structural mechanisms, civil infrastructure, hydraulic systems, and precision fabrication.',
    color: '#f97316', // orange
    borderColor: '#fb923c',
    bgRgba: 'rgba(249, 115, 22, 0.15)',
  },
  NAVIGATION: {
    id: 'NAVIGATION',
    name: 'Navigation & Geospatial',
    description: 'Orientation, celestial coordinate determination, marine instruments, chronometry, and satellite positioning.',
    color: '#0ea5e9', // ocean sky
    borderColor: '#38bdf8',
    bgRgba: 'rgba(14, 165, 233, 0.15)',
  },
  SCIENCE: {
    id: 'SCIENCE',
    name: 'Natural Sciences',
    description: 'Empirical inquiries, theoretical models, scientific methodology, and fundamental physical/chemical laws.',
    color: '#06b6d4', // cyan
    borderColor: '#22d3ee',
    bgRgba: 'rgba(6, 182, 212, 0.15)',
  },
  MEDICINE: {
    id: 'MEDICINE',
    name: 'Medicine & Biology',
    description: 'Interventions preserving human physiology, sanitation, germ mitigation, pharmacology, and genetics.',
    color: '#ec4899', // pink
    borderColor: '#f472b6',
    bgRgba: 'rgba(236, 72, 153, 0.15)',
  },
  MATERIALS: {
    id: 'MATERIALS',
    name: 'Materials & Metallurgy',
    description: 'Chemical synthesis, elemental extraction, metallurgy, polymers, ceramics, and semiconductor crystal growth.',
    color: '#a855f7', // purple
    borderColor: '#c084fc',
    bgRgba: 'rgba(168, 85, 247, 0.15)',
  },
  ENERGY: {
    id: 'ENERGY',
    name: 'Energy & Power Systems',
    description: 'Thermodynamic conversion, electrical generation, combustion cycles, nuclear fission, and renewable power.',
    color: '#ef4444', // red
    borderColor: '#f87171',
    bgRgba: 'rgba(239, 68, 68, 0.15)',
  },
  TRANSPORTATION: {
    id: 'TRANSPORTATION',
    name: 'Transportation & Mobility',
    description: 'Overland, maritime, rail, aeronautical, and automated navigation vehicular systems.',
    color: '#3b82f6', // blue
    borderColor: '#60a5fa',
    bgRgba: 'rgba(59, 130, 246, 0.15)',
  },
  COMMUNICATION: {
    id: 'COMMUNICATION',
    name: 'Communication & Media',
    description: 'Distance transmission of information, electromagnetic signaling, optical networks, and broadcast media.',
    color: '#14b8a6', // teal
    borderColor: '#2dd4bf',
    bgRgba: 'rgba(20, 184, 166, 0.15)',
  },
  COMPUTING: {
    id: 'COMPUTING',
    name: 'Computing & Information Systems',
    description: 'Automated arithmetic, logical circuits, microprocessor architectures, software abstraction, and digital networks.',
    color: '#00f0ff', // electric cyan
    borderColor: '#38bdf8',
    bgRgba: 'rgba(0, 240, 255, 0.15)',
  },
  SPACE: {
    id: 'SPACE',
    name: 'Space & Aeronautics',
    description: 'Rocket propulsion, atmospheric flight, orbital mechanics, extraterrestrial probes, and satellite constellations.',
    color: '#8b5cf6', // violet
    borderColor: '#a78bfa',
    bgRgba: 'rgba(139, 92, 246, 0.15)',
  },
  AI: {
    id: 'AI',
    name: 'Artificial Intelligence & Robotics',
    description: 'Algorithmic cognition, artificial neural networks, pattern recognition, transformer architectures, and generative computation.',
    color: '#f43f5e', // rose
    borderColor: '#fb7185',
    bgRgba: 'rgba(244, 63, 94, 0.15)',
  },
};

export const DOMAIN_LIST = Object.values(DOMAINS);
