import React, { useState, useRef, useEffect } from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { 
  Search, 
  Bookmark, 
  BookOpen, 
  Share2, 
  Filter, 
  Check, 
  X,
  ArrowRight
} from 'lucide-react';

export const TopBar: React.FC = () => {
  const {
    filters,
    setSearchQuery,
    filteredInnovations,
    selectInnovation,
    bookmarks,
    setBookmarksOpen,
    setMethodologyOpen,
    isFilterDrawerOpen,
    setIsFilterDrawerOpen,
    shareCurrentView,
  } = useAtlas();

  const [searchFocused, setSearchFocused] = useState(false);
  const [copied, setCopied] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = searchRef.current?.querySelector('input');
        input?.focus();
      }
      if (e.key === 'Escape') {
        setSearchFocused(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside search autocomplete
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleShare = async () => {
    const success = await shareCurrentView();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const matchingResults = filters.searchQuery.trim()
    ? filteredInnovations.slice(0, 8)
    : [];

  return (
    <header className="h-14 bg-[#030406] border-b border-white/5 px-4 flex items-center justify-between z-30 select-none">
      {/* Left: Brand & Tagline */}
      <div className="flex items-center space-x-3 min-w-[260px]">
        <div className="flex items-center space-x-2">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-sm border border-cyan-500/20 bg-cyan-950/10 overflow-hidden shadow-glow-cyan">
            <img src="/atlas-human-innovation-logo.png" alt="Atlas of Human Innovation Logo" className="w-full h-full object-cover invert contrast-125 brightness-110" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-mono font-medium text-xs tracking-[0.2em] text-slate-100 uppercase">Atlas of Human Innovation</span>
              <span className="px-1 py-0.5 text-[8px] font-mono rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 leading-none">v1.1</span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider font-mono opacity-60">TELEMETRY & EXPLORATION MATRIX</p>
          </div>
        </div>
      </div>

      {/* Center: Global Search with Autocomplete */}
      <div className="flex-1 max-w-xl mx-4 relative" ref={searchRef}>
        <div className={`flex items-center px-3 py-1.5 rounded-md border transition-all duration-200 bg-[#0f121c] ${
          searchFocused ? 'border-cyan-500/80 ring-1 ring-cyan-500/30' : 'border-white/10 hover:border-white/20'
        }`}>
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchFocused(true);
            }}
            onFocus={() => setSearchFocused(true)}
            placeholder="Search innovations, discoveries, technologies, people..."
            className="w-full bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
          />
          {filters.searchQuery ? (
            <button 
              onClick={() => setSearchQuery('')}
              className="p-0.5 text-slate-400 hover:text-slate-200 rounded"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="flex items-center space-x-1 pl-2">
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </div>
          )}
        </div>

        {/* Autocomplete Dropdown */}
        {searchFocused && filters.searchQuery.trim() && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#0f121c] border border-white/15 rounded-lg shadow-2xl overflow-hidden z-50 divide-y divide-white/5">
            <div className="px-3 py-1.5 text-[10px] font-mono text-slate-400 bg-white/5 flex justify-between items-center">
              <span>{matchingResults.length} matching innovations</span>
              <span>Press ESC to close</span>
            </div>
            {matchingResults.length > 0 ? (
              <div className="max-h-80 overflow-y-auto divide-y divide-white/5">
                {matchingResults.map(item => {
                  const domainInfo = DOMAINS[item.domain];
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        selectInnovation(item.id);
                        setSearchFocused(false);
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-cyan-950/30 hover:border-l-2 hover:border-cyan-400 transition-all flex items-center justify-between group"
                    >
                      <div className="flex-1 pr-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-xs text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </span>
                          <span 
                            className="text-[10px] font-mono px-1.5 py-0.2 rounded border"
                            style={{ 
                              color: domainInfo.color,
                              borderColor: `${domainInfo.color}40`,
                              backgroundColor: domainInfo.bgRgba
                            }}
                          >
                            {item.domain}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.overview}</p>
                      </div>
                      <div className="text-right shrink-0 flex items-center space-x-2">
                        <span className="text-[11px] font-mono text-slate-400">{item.date}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-slate-500">
                No matching verified innovations found for "{filters.searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Actions: Filters, Bookmarks, Share, Methodology */}
      <div className="flex items-center space-x-2">
        {/* Active Filters Pill */}
        <button
          onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
          className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded text-xs border transition-all ${
            filters.selectedEras.length > 0 || filters.selectedDomains.length > 0 || filters.selectedConfidence.length > 0
              ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-300'
              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
          }`}
          title="Filter by era, domain, and confidence"
        >
          <Filter className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Filters</span>
          {(filters.selectedEras.length > 0 || filters.selectedDomains.length > 0 || filters.selectedConfidence.length > 0) && (
            <span className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-mono font-bold text-[10px] flex items-center justify-center">
              {filters.selectedEras.length + filters.selectedDomains.length + filters.selectedConfidence.length}
            </span>
          )}
        </button>

        {/* Bookmarks */}
        <button
          onClick={() => setBookmarksOpen(true)}
          className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded text-xs bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-slate-100 transition-all"
          title="View saved bookmarks"
        >
          <Bookmark className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Saved</span>
          <span className="font-mono text-[10px] text-slate-400">({bookmarks.length})</span>
        </button>

        {/* Share Deep Link */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-1 px-2.5 py-1.5 rounded text-xs bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-slate-100 transition-all"
          title="Copy link to current view and innovation"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Share</span>
            </>
          )}
        </button>

        {/* Methodology Modal */}
        <button
          onClick={() => setMethodologyOpen(true)}
          className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded text-xs bg-cyan-950/30 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/40 transition-all shadow-glow-cyan"
          title="Methodology, provenance and historical documentation"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Methodology</span>
        </button>
      </div>
    </header>
  );
};
