import { Innovation } from '../types/innovation';

export interface InnovationImage {
  url: string;
  caption: string;
  attribution: string;
  sourceUrl: string;
  license: string;
}

// Canonical Wikipedia/Wikimedia search mapping for all 74 innovations
export const CANONICAL_WIKI_MAPPING: Record<string, { title: string; fallbackTitle?: string }> = {
  'stone-tools': { title: 'Hand_axe', fallbackTitle: 'Oldowan' },
  'controlled-fire': { title: 'Control_of_fire_by_early_humans', fallbackTitle: 'Fire' },
  'clothing-needles': { title: 'Sewing_needle', fallbackTitle: 'Needle' },
  'agriculture-domestication': { title: 'Neolithic_Revolution', fallbackTitle: 'Agriculture' },
  'animal-domestication': { title: 'Domestication_of_animals', fallbackTitle: 'Domestication' },
  'pottery': { title: 'Pottery', fallbackTitle: 'Ceramic' },
  'metallurgy-copper': { title: 'Smelting', fallbackTitle: 'Bronze_Age' },
  'the-wheel': { title: 'Wheel', fallbackTitle: 'Wagon' },
  'writing-cuneiform': { title: 'Cuneiform', fallbackTitle: 'History_of_writing' },
  'mathematics-base60': { title: 'Sexagesimal', fallbackTitle: 'Babylonian_cuneiform_numerals' },
  'geometry-euclidean': { title: 'Euclidean_geometry', fallbackTitle: 'Euclid' },
  'astronomy-astrolabe': { title: 'Astrolabe', fallbackTitle: 'Antikythera_mechanism' },
  'cartography-maps': { title: 'Cartography', fallbackTitle: 'Early_world_maps' },
  'magnetic-compass': { title: 'Compass', fallbackTitle: 'History_of_the_compass' },
  'navigation-maritime': { title: 'Navigation', fallbackTitle: 'Celestial_navigation' },
  'mechanical-clock': { title: 'Clock', fallbackTitle: 'Escapement' },
  'chronometer-longitude': { title: 'Marine_chronometer', fallbackTitle: 'John_Harrison' },
  'printing-press': { title: 'Printing_press', fallbackTitle: 'Johannes_Gutenberg' },
  'papyrus-paper': { title: 'Papermaking', fallbackTitle: 'Paper' },
  'scientific-method': { title: 'Scientific_method', fallbackTitle: 'Empiricism' },
  'optics-microscope-telescope': { title: 'Optical_microscope', fallbackTitle: 'Microscope' },
  'classical-mechanics-newton': { title: 'Classical_mechanics', fallbackTitle: 'Isaac_Newton' },
  'calculus': { title: 'Calculus', fallbackTitle: 'History_of_calculus' },
  'steam-engine': { title: 'Steam_engine', fallbackTitle: 'Watt_steam_engine' },
  'steam-locomotive': { title: 'Steam_locomotive', fallbackTitle: 'Rocket_(locomotive)' },
  'thermodynamics': { title: 'Thermodynamics', fallbackTitle: 'Heat_engine' },
  'electric-telegraph': { title: 'Electrical_telegraph', fallbackTitle: 'Morse_code' },
  'electromagnetism-maxwell': { title: 'Electromagnetism', fallbackTitle: 'Maxwell%27s_equations' },
  'electrical-generator': { title: 'Electric_generator', fallbackTitle: 'Alternating_current' },
  'germ-theory': { title: 'Germ_theory_of_disease', fallbackTitle: 'Louis_Pasteur' },
  'evolution-natural-selection': { title: 'Natural_selection', fallbackTitle: 'Charles_Darwin' },
  'internal-combustion-engine': { title: 'Internal_combustion_engine', fallbackTitle: 'Four-stroke_engine' },
  'telephone': { title: 'Telephone', fallbackTitle: 'Alexander_Graham_Bell' },
  'radio-telecommunication': { title: 'Radio', fallbackTitle: 'Guglielmo_Marconi' },
  'aviation-powered-flight': { title: 'Wright_Flyer', fallbackTitle: 'Wright_brothers' },
  'special-general-relativity': { title: 'Theory_of_relativity', fallbackTitle: 'Albert_Einstein' },
  'quantum-mechanics': { title: 'Quantum_mechanics', fallbackTitle: 'Max_Planck' },
  'radar': { title: 'Radar', fallbackTitle: 'Cavity_magnetron' },
  'antibiotics-penicillin': { title: 'Penicillin', fallbackTitle: 'Alexander_Fleming' },
  'nuclear-fission': { title: 'Nuclear_fission', fallbackTitle: 'Chicago_Pile-1' },
  'analytical-engine-babbage': { title: 'Analytical_Engine', fallbackTitle: 'Charles_Babbage' },
  'turing-machine-formal-logic': { title: 'Turing_machine', fallbackTitle: 'Alan_Turing' },
  'electronic-computer-eniac': { title: 'ENIAC', fallbackTitle: 'John_von_Neumann' },
  'transistor-semiconductor': { title: 'Transistor', fallbackTitle: 'Point-contact_transistor' },
  'silicon-integrated-circuit': { title: 'Integrated_circuit', fallbackTitle: 'Robert_Noyce' },
  'dna-double-helix': { title: 'DNA', fallbackTitle: 'Molecular_genetics' },
  'rocketry-spaceflight': { title: 'Spaceflight', fallbackTitle: 'V-2_rocket' },
  'satellites-gps': { title: 'Global_Positioning_System', fallbackTitle: 'Satellite_navigation' },
  'microprocessor-cpu': { title: 'Microprocessor', fallbackTitle: 'Intel_4004' },
  'internet-arpanet': { title: 'ARPANET', fallbackTitle: 'Internet_protocol_suite' },
  'world-wide-web': { title: 'World_Wide_Web', fallbackTitle: 'Tim_Berners-Lee' },
  'personal-computer': { title: 'Personal_computer', fallbackTitle: 'Apple_II' },
  'artificial-intelligence-birth': { title: 'History_of_artificial_intelligence', fallbackTitle: 'Artificial_intelligence' },
  'neural-networks-backprop': { title: 'Artificial_neural_network', fallbackTitle: 'Backpropagation' },
  'smartphone-mobile': { title: 'Smartphone', fallbackTitle: 'IPhone' },
  'deep-learning-alexnet': { title: 'AlexNet', fallbackTitle: 'Deep_learning' },
  'transformer-attention': { title: 'Transformer_(deep_learning_architecture)', fallbackTitle: 'Large_language_model' },
  'generative-ai-llm': { title: 'Large_language_model', fallbackTitle: 'Generative_artificial_intelligence' },
  'autonomous-navigation': { title: 'Self-driving_car', fallbackTitle: 'Autonomous_robot' },
  'metallurgy-iron': { title: 'Blast_furnace', fallbackTitle: 'Smelting' },
  'concrete-hydraulic-mortar': { title: 'Roman_concrete', fallbackTitle: 'Concrete' },
  'aqueducts-water-systems': { title: 'Roman_aqueduct', fallbackTitle: 'Aqueduct' },
  'paved-roads-network': { title: 'Roman_roads', fallbackTitle: 'Road' },
  'decimal-zero-algebra': { title: 'Algebra', fallbackTitle: 'Muhammad_ibn_Musa_al-Khwarizmi' },
  'heliocentric-model': { title: 'Heliocentrism', fallbackTitle: 'Nicolaus_Copernicus' },
  'battery-voltaic-pile': { title: 'Voltaic_pile', fallbackTitle: 'Alessandro_Volta' },
  'bessemer-steel-process': { title: 'Bessemer_process', fallbackTitle: 'Henry_Bessemer' },
  'silicon-solar-cell': { title: 'Solar_cell', fallbackTitle: 'Photovoltaics' },
  'optical-fiber-telecom': { title: 'Optical_fiber', fallbackTitle: 'Fiber-optic_communication' },
  'lithium-ion-battery': { title: 'Lithium-ion_battery', fallbackTitle: 'John_B._Goodenough' },
  'space-station-iss': { title: 'International_Space_Station', fallbackTitle: 'Space_station' },
  'reusable-orbital-rocketry': { title: 'Falcon_9', fallbackTitle: 'VTVL' },
  'genetic-engineering-crispr': { title: 'CRISPR', fallbackTitle: 'CRISPR_gene_editing' },
  'quantum-computing': { title: 'Quantum_computing', fallbackTitle: 'Qubit' }
};

import resolvedImagesData from '../data/resolvedImages.json';

// Curated, verified Wikimedia Commons fallback images for instant display & 100% offline resilience
export const VERIFIED_COMMONS_FALLBACKS: Record<string, InnovationImage> = resolvedImagesData as Record<string, InnovationImage>;


// In-memory cache for resolved images
const imageMemoryCache = new Map<string, InnovationImage | null>();

// Request deduplication map
const pendingRequests = new Map<string, Promise<InnovationImage | null>>();

const STORAGE_PREFIX = 'atlas_img_cache_v3_';

/**
 * Normalizes innovation names and terminology internally for external Wikipedia/Wikimedia lookups.
 * Handles alternate spellings, punctuation, ampersands, and whitespace without changing the visible Atlas title.
 */
export function normalizeWikiTitle(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, '_');
}

function getLocalCachedImage(id: string): InnovationImage | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + id);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.url === 'string' && parsed.url.length > 5) {
      return parsed as InnovationImage;
    }
    return null;
  } catch {
    return null;
  }
}

function setLocalCachedImage(id: string, img: InnovationImage): void {
  try {
    if (img && img.url) {
      localStorage.setItem(STORAGE_PREFIX + id, JSON.stringify(img));
    }
  } catch {
    // Ignore quota errors
  }
}

/**
 * Dynamically resolves an authentic, descriptive image for a given innovation.
 *
 * Sequence:
 * 1. Memory / localStorage cache hit -> return immediately
 * 2. Curated verified Wikimedia Commons fallback (instant, 100% offline resilience)
 * 3. Existing innovation media definition
 * 4. Dynamic Wikipedia REST API lookup via canonical title, normalized aliases, and term variations
 * 5. Graceful omission (returns null) if no authentic image exists
 */
export async function resolveInnovationImage(innovation: Innovation): Promise<InnovationImage | null> {
  if (!innovation || !innovation.id) return null;

  const id = innovation.id;

  // 1. Check in-memory cache
  if (imageMemoryCache.has(id)) {
    return imageMemoryCache.get(id) || null;
  }

  // 2. Check localStorage cache
  const localCached = getLocalCachedImage(id);
  if (localCached && localCached.url) {
    imageMemoryCache.set(id, localCached);
    return localCached;
  }

  // 3. Prevent duplicate simultaneous network requests
  if (pendingRequests.has(id)) {
    return pendingRequests.get(id)!;
  }

  const lookupPromise = (async (): Promise<InnovationImage | null> => {
    // Step A: Curated verified Wikimedia Commons fallback for instant display
    const verifiedFallback = VERIFIED_COMMONS_FALLBACKS[id];
    if (verifiedFallback && verifiedFallback.url) {
      imageMemoryCache.set(id, verifiedFallback);
      setLocalCachedImage(id, verifiedFallback);
      return verifiedFallback;
    }

    // Step B: Existing innovation media if valid
    if (innovation.media && innovation.media.url && !innovation.media.url.includes('/thumb/')) {
      const existing: InnovationImage = {
        url: innovation.media.url,
        caption: innovation.media.caption || innovation.name,
        attribution: innovation.media.attribution || 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org',
        license: innovation.media.license || 'Public Domain'
      };
      imageMemoryCache.set(id, existing);
      setLocalCachedImage(id, existing);
      return existing;
    }

    // Step C: Dynamic lookup with canonical mappings and normalized aliases
    const mapping = CANONICAL_WIKI_MAPPING[id];
    const candidateTitles: string[] = [];

    if (mapping?.title) candidateTitles.push(mapping.title);
    if (mapping?.fallbackTitle) candidateTitles.push(mapping.fallbackTitle);

    if (innovation.aliases && Array.isArray(innovation.aliases)) {
      innovation.aliases.forEach(alias => {
        const norm = normalizeWikiTitle(alias);
        if (norm && !candidateTitles.includes(norm)) {
          candidateTitles.push(norm);
        }
      });
    }

    const normName = normalizeWikiTitle(innovation.name);
    if (normName && !candidateTitles.includes(normName)) {
      candidateTitles.push(normName);
    }

    for (const title of candidateTitles) {
      try {
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });
        clearTimeout(timeoutId);

        if (!res.ok) continue;

        const data = await res.json();
        const thumbUrl = data.thumbnail?.source || data.originalimage?.source;

        if (thumbUrl && typeof thumbUrl === 'string') {
          const resolved: InnovationImage = {
            url: thumbUrl,
            caption: data.description || data.extract?.slice(0, 140) || innovation.overview.slice(0, 140),
            attribution: 'Wikimedia Commons / Wikipedia',
            sourceUrl: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
            license: 'CC BY-SA / Public Domain'
          };

          imageMemoryCache.set(id, resolved);
          setLocalCachedImage(id, resolved);
          return resolved;
        }
      } catch {
        // Continue to next candidate
      }
    }

    // Step D: Gracefully omit rather than returning a broken placeholder
    imageMemoryCache.set(id, null);
    return null;
  })();

  pendingRequests.set(id, lookupPromise);

  try {
    const result = await lookupPromise;
    return result;
  } finally {
    pendingRequests.delete(id);
  }
}

