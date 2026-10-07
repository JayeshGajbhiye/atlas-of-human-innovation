import { Innovation, Relationship } from '../types/innovation';

export const batch10Innovations: Innovation[] = [
  {
    id: 'double-entry-bookkeeping',
    name: 'Double-Entry Bookkeeping',
    aliases: ['Modern Accounting'],
    date: '1494 CE',
    date_numeric: 1494,
    date_precision: 'year',
    era: 'EARLY_MODERN',
    domain: 'FOUNDATIONAL',
    type: 'protocol',
    region: 'Venice, Italy',
    civilization: 'Renaissance Europe',
    lat: 45.4408,
    lng: 12.3155,
    overview: 'An accounting system where every financial transaction has equal and opposite effects in at least two different accounts (credits and debits).',
    why_it_matters: 'The operating system of modern capitalism. It allowed merchants to easily calculate exact profit and loss, detect fraud, and manage complex international trade networks, enabling the rise of global corporations.',
    problem_solved: 'Single-entry ledgers (simple lists of income and expenses) were prone to catastrophic mathematical errors and made it impossible to separate a business\'s assets from its liabilities.',
    mechanism: 'The accounting equation: Assets = Liabilities + Equity. Every entry to an account requires a corresponding and opposite entry to a different account. If the sum of debits does not equal the sum of credits, an error has occurred.',
    historical_development: [
      {
        stage: 'Florentine Merchants',
        period: '13th Century',
        description: 'Italian merchants begin developing dual-entry methods to manage banking and trade.'
      },
      {
        stage: 'Pacioli\'s Summa',
        period: '1494',
        description: 'Luca Pacioli, a Franciscan friar and mathematician, codifies the Venetian system into a printed textbook, standardizing the practice globally.'
      }
    ],
    contributors: [
      {
        name: 'Luca Pacioli',
        role: 'popularizer',
        contributionNote: 'Often called the "Father of Accounting" for formalizing the system in his 1494 book.'
      }
    ],
    predecessors: ['mathematics-base60', 'printing-press'], // Printing press spread it
    successors: ['joint-stock-company'],
    modern_legacy: 'Remains the absolute, unbroken foundation of all modern accounting, corporate finance, and global tax systems.',
    sources: [
      {
        source: 'Summa de arithmetica, geometria, proportioni et proportionalita (Luca Pacioli, 1494)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pacioli.jpg',
      caption: 'Portrait of Luca Pacioli, who formalized double-entry bookkeeping, shown with mathematical tools.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Pacioli\'s textbook was published in Venice in 1494.'
  },
  {
    id: 'joint-stock-company',
    name: 'Joint-Stock Company',
    aliases: ['Public Corporation', 'VOC'],
    date: '1602 CE',
    date_numeric: 1602,
    date_precision: 'year',
    era: 'EARLY_MODERN',
    domain: 'FOUNDATIONAL',
    type: 'protocol',
    region: 'Amsterdam, Netherlands',
    civilization: 'Dutch Republic',
    lat: 52.3676,
    lng: 4.9041,
    overview: 'A business entity in which shares of the company\'s stock can be bought and sold by shareholders, spreading financial risk.',
    why_it_matters: 'Decoupled extreme financial risk from individual ruin. It allowed society to pool massive amounts of capital from thousands of normal people to fund world-spanning infrastructure, exploration, and R&D.',
    problem_solved: 'Sailing a trade ship to Asia was insanely expensive and highly likely to sink. If a single merchant funded it and it sank, the merchant was ruined. This stalled large-scale economic ambition.',
    mechanism: 'The company is issued a charter granting it legal personhood. Ownership is divided into fractional shares. If the ship sinks, thousands of shareholders lose a tiny, affordable amount of money. If it returns, they all share the massive profit.',
    historical_development: [
      {
        stage: 'Roman Societas Publicanorum',
        period: 'Antiquity',
        description: 'Early precursors of shared corporate ownership existed in Rome for state contracting.'
      },
      {
        stage: 'Dutch East India Company (VOC)',
        period: '1602',
        description: 'The first true multinational, permanent joint-stock corporation, which also birthed the first stock exchange.'
      }
    ],
    contributors: [
      {
        name: 'States General of the Netherlands',
        role: 'institution',
        contributionNote: 'Granted the charter creating the VOC to consolidate Dutch trade.'
      }
    ],
    predecessors: ['double-entry-bookkeeping', 'navigation-maritime'],
    successors: ['mass-production-assembly'],
    modern_legacy: 'The blueprint for modern capitalism. Every publicly traded company today (Apple, Google, etc.) uses this exact legal structure.',
    sources: [
      {
        source: 'The First Multinational (Amsterdam City Archives)',
        sourceType: 'institutional'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/VOC_share_1606.jpg',
      caption: 'The oldest known share of the Dutch East India Company (VOC), dated 1606.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The VOC charter was officially granted on March 20, 1602.'
  },
  {
    id: 'mass-production-assembly',
    name: 'Moving Assembly Line',
    aliases: ['Mass Production', 'Fordism'],
    date: '1913 CE',
    date_numeric: 1913,
    date_precision: 'year',
    era: 'ELECTRIFICATION',
    domain: 'ENGINEERING',
    type: 'process',
    region: 'Michigan, USA',
    civilization: 'Industrial Societies',
    lat: 42.4074,
    lng: -83.0970, // Highland Park Plant
    overview: 'A manufacturing process in which interchangeable parts are added as the semi-finished assembly moves from workstation to workstation.',
    why_it_matters: 'Transformed consumer goods from scarce, handcrafted luxuries to abundant, cheap commodities. It created the modern middle class by paying workers enough to buy the very products they built.',
    problem_solved: 'Before the assembly line, highly skilled craftsmen built one entire car at a time, making them far too expensive for the average citizen.',
    mechanism: 'Instead of workers moving around a stationary product, the product moves past stationary workers. Each worker performs a single, highly specialized, repetitive task using strictly interchangeable parts, drastically reducing build time from days to minutes.',
    historical_development: [
      {
        stage: 'Interchangeable Parts',
        period: '1798',
        description: 'Eli Whitney popularizes the use of identical, interchangeable parts for firearms.'
      },
      {
        stage: 'Highland Park Ford Plant',
        period: '1913',
        description: 'Henry Ford integrates the moving conveyor belt with interchangeable parts to build the Model T.'
      }
    ],
    contributors: [
      {
        name: 'Henry Ford',
        role: 'popularizer',
        contributionNote: 'Perfected and popularized the moving assembly line for complex machinery.'
      },
      {
        name: 'Ransom E. Olds',
        role: 'theoretical_precursor',
        contributionNote: 'Created an early, non-moving assembly line in 1901.'
      }
    ],
    predecessors: ['internal-combustion-engine', 'electrical-generator'], // Electric motors drove the belts
    successors: ['personal-computer'], // PC manufacturing requires mass assembly
    modern_legacy: 'The basis of all modern manufacturing, from iPhones in Shenzhen to automobiles globally, now increasingly automated by robotics.',
    sources: [
      {
        source: 'My Life and Work (Henry Ford, 1922)',
        sourceType: 'primary_archive'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Ford_assembly_line_-_1913.jpg',
      caption: 'Workers on the magneto assembly line at the Ford Highland Park plant in 1913.',
      attribution: 'Public Domain',
      license: 'Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'Ford\'s line officially began moving on December 1, 1913.'
  }
];

export const batch10Relationships: Relationship[] = [
  {
    id: 'rel-bookkeeping-company',
    source: 'double-entry-bookkeeping',
    target: 'joint-stock-company',
    relationship_type: 'ENABLED',
    evidence: 'The massive, complex international ledgers of the VOC could not have been managed without double-entry accounting to prevent fraud and track dividends.'
  },
  {
    id: 'rel-company-assembly',
    source: 'joint-stock-company',
    target: 'mass-production-assembly',
    relationship_type: 'ENABLED',
    evidence: 'Building massive industrial assembly factories required the pooled capital structures pioneered by public corporations.'
  }
];
