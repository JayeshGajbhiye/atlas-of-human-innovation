# Atlas of Human Innovation

> **An interactive research platform and knowledge graph exploring how human discoveries, scientific theories, and technological systems evolved, connected, and accumulated across time.**

[![React](https://img.shields.io/badge/React-18.3-61dafb.svg?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646cff.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![D3.js](https://img.shields.io/badge/D3.js-7.9-f9a03c.svg?style=flat&logo=d3.js)](https://d3js.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900.svg?style=flat&logo=leaflet)](https://leafletjs.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.173-black.svg?style=flat&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 1. Project Overview & Product Vision

The **Atlas of Human Innovation** is a serious, interactive digital observatory designed to model the non-linear, interconnected evolution of human intellectual history. Rather than presenting isolated encyclopedia articles or static infographics, the Atlas renders human progress as an interconnected causal network where every breakthrough inherits prerequisites from earlier discoveries and unlocks subsequent technological paradigms.

Users can begin from fundamental inventions (such as *Maritime Navigation*, *The Wheel*, or *Axiomatic Geometry*) and trace causal trajectories through *Infinitesimal Calculus*, *The Steam Engine*, *Electromagnetism*, *Turing Machines*, *The Transistor*, and modern *Transformer Models & Large Language Models*.

---

## 2. Core Exploration Modes

The Atlas provides seven dedicated visualization perspectives:

1. **Knowledge Graph (`graph`)**:
   - High-performance D3.js force-directed canvas.
   - Zero-flicker selection with ref-based physics synchronization.
   - Neighborhood focus (1-hop and 2-hop degrees of separation).
   - Degree centrality node scaling and bidirectional relationship edge labeling.

2. **Chronological River (`timeline`)**:
   - Continuous horizontal chronological stream spanning 10 historical epochs (from ~10,000 BCE to the Present).
   - Multi-domain swimlanes with year badges and era navigation.

3. **2D World Map (`map`)**:
   - Pure **OpenStreetMap** basemap (`tile.openstreetmap.org`) with official attribution.
   - **Zero Occlusion Co-Location Engine**: Coordinates are grouped into **60 unique geographic sites** covering all **73 terrestrial innovations**.
   - **9 Multi-Innovation Hubs** (London, Cambridge, Sumer, Alexandria, Bell Labs, Silicon Valley, Mountain View, Toronto, Paris) with count badges and multi-breakthrough popups.
   - **Orbital Transparency HUD**: Truthfully documents the 1 non-terrestrial innovation (*Modular Space Stations / ISS* in Low Earth Orbit at 400 km altitude) without synthetic coordinates.

4. **Causal Pathfinder (`paths`)**:
   - Breadth-First Search (BFS) graph pathfinding engine.
   - Computes the shortest causal dependency pathway between any two innovations in the network (e.g., *Navigation* → *GPS*).

5. **Comparison Matrix (`compare`)**:
   - Side-by-side comparative analysis of mechanisms, eras, civilizational contexts, and historical impacts.

6. **Civilizational Spheres (`civilization`)**:
   - Global regional breakthrough matrix and cross-cultural technological diffusion analysis.

7. **3D Spatial Cosmos (`3d`)**:
   - Three.js WebGL spatial cosmos where the Z-axis represents chronological depth.

---

## 3. Technology Stack

- **Framework**: React 18.3 (Strict Mode, Hooks, Functional Components)
- **Language**: TypeScript 5.7 (Strict Type Checking)
- **Build System**: Vite 6.1 + Rollup with custom code-splitting chunks
- **Styling**: Tailwind CSS 3.4 (Custom Obsidian / Cyan dark theme design system)
- **Network Graph Engine**: D3.js 7.9 (Force simulation, Canvas rendering, DPR scaling)
- **Geospatial Engine**: Leaflet 1.9 + OpenStreetMap Tile Layer
- **3D Engine**: Three.js 0.173 (WebGL context, particle systems, camera orbit)
- **Iconography**: Lucide React
- **Image Resolution**: Multi-tier dynamic Wikipedia / Wikimedia Commons resolution service with local cache and curated fallback dictionary
- **Deployment Platform**: Vercel (Edge Network, SPA routing, asset caching)

---

## 4. Architecture & Directory Structure

```
atlas-of-human-innovation/
├── public/
│   ├── favicon.svg             # Vector application favicon
│   ├── robots.txt              # Search engine crawler policies
│   └── sitemap.xml             # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ErrorBoundary.tsx   # Fault-tolerant rendering safeguard
│   │   ├── inspector/
│   │   │   └── InspectorPanel.tsx  # 4-tab research panel with Wikimedia attribution
│   │   ├── layout/
│   │   │   ├── TopBar.tsx          # Omnibox search, filters, bookmarks, share
│   │   │   ├── LeftNavigation.tsx  # View switcher & dataset metrics
│   │   │   └── FilterDrawer.tsx    # Multi-dimensional filter drawer
│   │   ├── modals/
│   │   │   ├── MethodologyModal.tsx# Academic classification standards
│   │   │   └── BookmarksDrawer.tsx # User saved innovations dossier
│   │   └── views/
│   │       ├── KnowledgeGraphView.tsx # D3 Force network canvas
│   │       ├── TimelineView.tsx       # Chronological stream view
│   │       ├── WorldMapView.tsx       # Leaflet 2D OpenStreetMap
│   │       ├── PathFinderView.tsx     # BFS Causal chain solver
│   │       ├── ComparisonView.tsx     # Side-by-side comparison matrix
│   │       ├── CivilizationView.tsx   # Civilizational matrix
│   │       └── ThreeDUniverseView.tsx # Three.js WebGL cosmos
│   ├── context/
│   │   └── AtlasContext.tsx    # Central state engine with URL query sync
│   ├── data/
│   │   ├── civilizations.ts    # 12 historical civilizational spheres
│   │   ├── domains.ts          # 13 categorized knowledge disciplines
│   │   ├── eras.ts             # 10 historical chronological epochs
│   │   ├── innovations.ts      # 74 comprehensive factual innovation dossiers
│   │   ├── relationships.ts    # 82+ verified causal dependency edges
│   │   └── resolvedImages.json # Verified Wikimedia Commons image dictionary
│   ├── types/
│   │   └── innovation.ts       # TypeScript interfaces, domain types, filter models
│   ├── utils/
│   │   ├── graphAnalytics.ts   # Graph traversal algorithms & BFS solver
│   │   └── imageService.ts     # Dynamic image resolution & cache engine
│   ├── App.tsx                 # Root dashboard layout & routing
│   ├── index.css               # Global styles, scrollbars, Leaflet styling
│   └── main.tsx                # React application entry point
├── .env.example                # Documented environment variables
├── .gitignore                  # Git repository exclusion rules
├── index.html                  # HTML entry point with OpenGraph & Twitter SEO
├── package.json                # Project dependencies & npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme configuration
├── tsconfig.json               # TypeScript compiler configuration
├── vercel.json                 # Vercel deployment & caching configuration
└── vite.config.ts              # Vite configuration with Rollup manualChunks
```

---

## 5. Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher (v24.x recommended)
- **npm**: v9.0.0 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/JayeshGajbhiye/atlas-of-human-innovation.git
cd atlas-of-human-innovation

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

---

## 6. Production Build & Verification

```bash
# Run TypeScript type check and production bundle compilation
npm run build

# Preview production build locally
npm run preview
```

### Production Build Optimization
The build configuration in `vite.config.ts` partitions vendor packages into granular, independently cacheable bundles:
- `vendor-react`: React & React DOM core runtime
- `vendor-d3`: D3 force simulation & math utilities
- `vendor-three`: Three.js WebGL graphics engine
- `vendor-leaflet`: Leaflet mapping engine
- `vendor-icons`: Lucide React icon set
- `index`: Application logic, state machine, and innovation dossiers

---

## 7. Environment Variables

The application is fully client-side and requires zero mandatory secrets to operate. Optional configuration is documented in `.env.example`:

```env
# No mandatory API keys required.
# 2D World Map uses public OpenStreetMap tiles with standard attribution.
# Image service uses public Wikipedia/Wikimedia Commons REST endpoints.
```

---

## 8. Deployment on Vercel

The project includes an optimized `vercel.json` configuration for single-page applications:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Deploy using the Vercel CLI:
```bash
# Link and deploy to Vercel
npx vercel
```

---

## 9. Data Integrity & Academic Methodology

1. **Strict Provenance**:
   - Every innovation entry includes verified dates, historical context, mechanism of action, civilizational origin, and academic citations.
   - **Zero Synthetic Data**: If geographic coordinates do not exist (such as space-based developments like the ISS), they are truthfully reported as orbital rather than assigned arbitrary ground locations.
2. **Attribution**:
   - All historical imagery is sourced under public-domain or Creative Commons licensing via Wikimedia Commons with transparent source attribution links.

---

## 10. Future Scalability Considerations

- **Database Extensibility**: The unified `Innovation` and `Relationship` data structures in `src/types/innovation.ts` support scaling to thousands of nodes.
- **Search Indexing**: The current client-side Trie and token search can be transitioned to WebAssembly (e.g., MiniSearch or DuckDB-Wasm) as dataset size expands.
- **Dynamic Layering**: The Leaflet OpenStreetMap view is pre-configured with coordinate grouping and clustering logic to accommodate high marker densities.
