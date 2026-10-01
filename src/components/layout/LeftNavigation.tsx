import React from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { ViewMode } from '../../types/innovation';
import { 
  Network, 
  Clock, 
  Globe2, 
  GitFork, 
  Landmark, 
  Sparkles, 
  Scale, 
  Bookmark, 
  Layers, 
  Boxes
} from 'lucide-react';

interface NavItem {
  id: ViewMode | 'bookmarks' | 'history';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  isAction?: boolean;
}

export const LeftNavigation: React.FC = () => {
  const { 
    viewMode, 
    setViewMode, 
    allInnovations, 
    allRelationships, 
    bookmarks, 
    setBookmarksOpen,
    selectInnovation,
  } = useAtlas();

  const exploreNav: NavItem[] = [
    { id: 'graph', label: 'Knowledge Graph', icon: Network, badge: 'Primary' },
    { id: 'timeline', label: 'Timeline River', icon: Clock },
    { id: 'map', label: 'World Map', icon: Globe2, badge: 'OSM' },
    { id: '3d', label: '3D Universe', icon: Boxes, badge: 'WebGL' },
    { id: 'paths', label: 'Innovation Paths', icon: GitFork },
    { id: 'civilization', label: 'Civilization Matrix', icon: Landmark },
  ];

  const analyzeNav: NavItem[] = [
    { id: 'compare', label: 'Compare Innovations', icon: Scale },
  ];

  // Quick jump featured
  const featuredInnovations = [
    { id: 'navigation-maritime', name: 'Maritime Navigation' },
    { id: 'steam-engine', name: 'Steam Engine' },
    { id: 'printing-press', name: 'Printing Press' },
    { id: 'satellites-gps', name: 'GPS Constellation' },
    { id: 'transformer-attention', name: 'Transformers & LLMs' },
  ];

  return (
    <aside className="w-60 bg-[#090b10] border-r border-white/10 flex flex-col justify-between shrink-0 select-none overflow-y-auto">
      <div className="p-3 space-y-5">
        {/* Section 1: Explore Modes */}
        <div>
          <div className="px-2.5 mb-1.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
            <span>Explore</span>
            <Layers className="w-3 h-3 text-slate-600" />
          </div>
          <nav className="space-y-0.5">
            {exploreNav.map(item => {
              const Icon = item.icon;
              const isActive = viewMode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setViewMode(item.id as ViewMode)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan'
                      : 'text-slate-300 hover:bg-white/5 hover:text-slate-100 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border ${
                      isActive 
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' 
                        : 'bg-white/5 border-white/10 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Section 2: Analyze */}
        <div>
          <div className="px-2.5 mb-1.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
            <span>Analyze</span>
            <Scale className="w-3 h-3 text-slate-600" />
          </div>
          <nav className="space-y-0.5">
            {analyzeNav.map(item => {
              const Icon = item.icon;
              const isActive = viewMode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setViewMode(item.id as ViewMode)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan'
                      : 'text-slate-300 hover:bg-white/5 hover:text-slate-100 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Section 3: Featured Breakthroughs */}
        <div>
          <div className="px-2.5 mb-1.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
            <span>Featured Paths</span>
            <Sparkles className="w-3 h-3 text-amber-500/70" />
          </div>
          <div className="space-y-1">
            {featuredInnovations.map(feat => (
              <button
                key={feat.id}
                onClick={() => selectInnovation(feat.id)}
                className="w-full text-left px-2.5 py-1.5 rounded text-xs text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all truncate flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span className="truncate">{feat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 4: Collections */}
        <div>
          <div className="px-2.5 mb-1.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
            <span>Collections</span>
            <Bookmark className="w-3 h-3 text-slate-600" />
          </div>
          <div className="space-y-0.5">
            <button
              onClick={() => setBookmarksOpen(true)}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-md text-xs text-slate-300 hover:bg-white/5 hover:text-slate-100 transition-all"
            >
              <div className="flex items-center space-x-2.5">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <span>Bookmarks</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">({bookmarks.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Metrics Panel */}
      <div className="p-3 border-t border-white/10 bg-[#07080c]/60 text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block absolute"></span>
            <span className="pl-1.5 text-slate-300">Live Graph</span>
          </span>
          <span className="text-slate-500">v1.0.4</span>
        </div>
        <div className="grid grid-cols-2 gap-1 pt-1 font-mono text-[10px] text-slate-400">
          <div className="bg-white/5 px-2 py-1 rounded border border-white/5">
            <span className="block text-slate-500 text-[9px]">NODES</span>
            <span className="text-slate-200 font-bold">{allInnovations.length}</span>
          </div>
          <div className="bg-white/5 px-2 py-1 rounded border border-white/5">
            <span className="block text-slate-500 text-[9px]">EDGES</span>
            <span className="text-slate-200 font-bold">{allRelationships.length}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
