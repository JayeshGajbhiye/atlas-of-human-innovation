import React from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { ERAS } from '../../data/eras';
import { DOMAIN_LIST } from '../../data/domains';
import { ConfidenceLevel } from '../../types/innovation';
import { X, RotateCcw, Check } from 'lucide-react';

export const FilterDrawer: React.FC = () => {
  const {
    filters,
    toggleEraFilter,
    toggleDomainFilter,
    toggleConfidenceFilter,
    resetFilters,
    isFilterDrawerOpen,
    setIsFilterDrawerOpen,
    filteredInnovations,
    allInnovations
  } = useAtlas();

  if (!isFilterDrawerOpen) return null;

  const confidenceLevels: ConfidenceLevel[] = ['VERIFIED', 'DOCUMENTED', 'APPROXIMATE', 'DISPUTED'];

  const hasActiveFilters = 
    filters.selectedEras.length > 0 || 
    filters.selectedDomains.length > 0 || 
    filters.selectedConfidence.length > 0 ||
    filters.searchQuery.trim() !== '';

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm select-none">
      <div className="w-96 bg-[#0c0e15] border-l border-white/10 h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-100 flex items-center space-x-2">
              <span>Filter Atlas</span>
              <span className="text-xs font-mono text-cyan-400">
                ({filteredInnovations.length}/{allInnovations.length})
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">Constrain visualization nodes across dimensions</p>
          </div>
          <button
            onClick={() => setIsFilterDrawerOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Sections */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Eras Filter */}
          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Historical Eras ({filters.selectedEras.length} selected)
            </label>
            <div className="space-y-1">
              {ERAS.map(era => {
                const isSelected = filters.selectedEras.includes(era.id);
                return (
                  <button
                    key={era.id}
                    onClick={() => toggleEraFilter(era.id)}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-xs border text-left transition-all ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: era.color }}
                      ></span>
                      <span className="truncate">{era.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-2">{era.period}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Domains Filter */}
          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Domains / Categories ({filters.selectedDomains.length} selected)
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {DOMAIN_LIST.map(domain => {
                const isSelected = filters.selectedDomains.includes(domain.id);
                return (
                  <button
                    key={domain.id}
                    onClick={() => toggleDomainFilter(domain.id)}
                    className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded text-xs border text-left transition-all truncate ${
                      isSelected
                        ? 'bg-white/15 border-white/40 text-slate-100'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <span 
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: domain.color }}
                    ></span>
                    <span className="truncate text-[11px]">{domain.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Confidence Level */}
          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Evidence / Provenance Level
            </label>
            <div className="space-y-1.5">
              {confidenceLevels.map(conf => {
                const isSelected = filters.selectedConfidence.includes(conf);
                return (
                  <button
                    key={conf}
                    onClick={() => toggleConfidenceFilter(conf)}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-xs border transition-all ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-mono text-xs">{conf}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between bg-black/20">
          <button
            onClick={resetFilters}
            disabled={!hasActiveFilters}
            className="flex items-center space-x-1 px-3 py-1.5 rounded text-xs text-slate-400 hover:text-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
          <button
            onClick={() => setIsFilterDrawerOpen(false)}
            className="px-4 py-1.5 rounded text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-slate-950 transition-all font-mono"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
