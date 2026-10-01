import React, { useState, useMemo } from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { ERAS } from '../../data/eras';
import { DOMAINS } from '../../data/domains';
import { Innovation, EraId } from '../../types/innovation';
import { Clock, ArrowRight } from 'lucide-react';

export const TimelineView: React.FC = () => {
  const {
    filteredInnovations,
    selectedInnovationId,
    selectInnovation,
  } = useAtlas();

  const [activeEraTab, setActiveEraTab] = useState<EraId | 'ALL'>('ALL');

  // Group innovations by era and sort chronologically
  const eraGroups = useMemo(() => {
    const groups: { [key in EraId]?: Innovation[] } = {};

    ERAS.forEach(era => {
      groups[era.id] = [];
    });

    const sorted = [...filteredInnovations].sort((a, b) => a.date_numeric - b.date_numeric);

    sorted.forEach(inv => {
      if (groups[inv.era]) {
        groups[inv.era]!.push(inv);
      }
    });

    return groups;
  }, [filteredInnovations]);

  const visibleEras = activeEraTab === 'ALL'
    ? ERAS
    : ERAS.filter(e => e.id === activeEraTab);

  return (
    <div className="w-full h-full bg-[#08090d] flex flex-col overflow-hidden select-none">
      {/* Era Ribbon Header */}
      <div className="p-3 bg-[#0a0c12] border-b border-white/10 flex items-center space-x-2 overflow-x-auto shrink-0">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider pl-2 pr-1 font-semibold flex items-center space-x-1 shrink-0">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Epoch Filter:</span>
        </span>
        <button
          onClick={() => setActiveEraTab('ALL')}
          className={`px-2.5 py-1 rounded text-xs font-mono shrink-0 transition-all ${
            activeEraTab === 'ALL'
              ? 'bg-cyan-950/60 border border-cyan-500/50 text-cyan-300'
              : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10'
          }`}
        >
          All Eras ({filteredInnovations.length})
        </button>
        {ERAS.map(era => {
          const count = eraGroups[era.id]?.length || 0;
          const isActive = activeEraTab === era.id;
          return (
            <button
              key={era.id}
              onClick={() => setActiveEraTab(era.id)}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs font-mono shrink-0 transition-all border ${
                isActive
                  ? 'bg-white/15 border-white/40 text-slate-100 shadow-sm'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
              }`}
            >
              <span 
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: era.color }}
              ></span>
              <span>{era.name}</span>
              <span className="text-[10px] text-slate-500">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Chronological Flow Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {visibleEras.map(era => {
          const items = eraGroups[era.id] || [];
          if (items.length === 0 && activeEraTab === 'ALL') return null;

          return (
            <section key={era.id} className="relative">
              {/* Era Header Banner */}
              <div className="flex items-center space-x-3 mb-4 sticky top-0 bg-[#08090d]/90 backdrop-blur-md py-2 z-10">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: era.color }}
                ></div>
                <h2 className="text-base font-bold text-slate-100 font-sans tracking-tight">
                  {era.name}
                </h2>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                  {era.period}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  ({items.length} {items.length === 1 ? 'innovation' : 'innovations'})
                </span>
              </div>

              <p className="text-xs text-slate-400 max-w-2xl mb-4 ml-6 leading-relaxed">
                {era.description}
              </p>

              {/* Innovations Timeline Grid */}
              <div className="relative border-l border-white/10 ml-6 pl-6 space-y-4">
                {items.map(item => {
                  const domain = DOMAINS[item.domain];
                  const isSelected = item.id === selectedInnovationId;

                  return (
                    <div
                      key={item.id}
                      onClick={() => selectInnovation(item.id)}
                      className={`relative p-3.5 rounded-lg border transition-all cursor-pointer group ${
                        isSelected
                          ? 'bg-cyan-950/30 border-cyan-500/60 shadow-glow-cyan ring-1 ring-cyan-500/30'
                          : 'bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#131622]'
                      }`}
                    >
                      {/* Timeline dot */}
                      <span 
                        className={`w-3 h-3 rounded-full absolute -left-[31px] top-4 border-2 border-[#08090d] transition-transform ${
                          isSelected ? 'scale-125 ring-2 ring-cyan-400' : 'group-hover:scale-110'
                        }`}
                        style={{ backgroundColor: domain.color }}
                      ></span>

                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold text-sm transition-colors ${
                            isSelected ? 'text-cyan-300' : 'text-slate-100 group-hover:text-cyan-400'
                          }`}>
                            {item.name}
                          </h3>
                          <span 
                            className="text-[10px] font-mono px-1.5 py-0.2 rounded border"
                            style={{ 
                              color: domain.color,
                              borderColor: `${domain.color}40`,
                              backgroundColor: domain.bgRgba
                            }}
                          >
                            {domain.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 shrink-0">
                          <span className="text-xs font-mono font-medium text-slate-300">{item.date}</span>
                          <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                            {item.confidence}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-2">
                        {item.overview}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                        <div className="flex items-center space-x-2">
                          <span>{item.region}</span>
                          <span>•</span>
                          <span>{item.civilization}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-400">
                          <span>Predecessors: {item.predecessors.length}</span>
                          <span>Descendants: {item.successors.length}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
