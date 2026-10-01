import React, { useState } from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { CIVILIZATIONS } from '../../data/civilizations';
import { DOMAINS } from '../../data/domains';
import { Landmark, ArrowRight, Sparkles } from 'lucide-react';

export const CivilizationView: React.FC = () => {
  const {
    allInnovations,
    selectInnovation,
    selectedInnovationId,
  } = useAtlas();

  const [selectedCivId, setSelectedCivId] = useState<string>(CIVILIZATIONS[0].id);

  const activeCiv = CIVILIZATIONS.find(c => c.id === selectedCivId) || CIVILIZATIONS[0];

  // Innovations linked to this civilization
  const linkedInnovations = allInnovations.filter(inv => 
    inv.civilization.toLowerCase().includes(activeCiv.name.split(' ')[0].toLowerCase()) ||
    inv.region.toLowerCase().includes(activeCiv.region.split(' ')[0].toLowerCase())
  );

  return (
    <div className="w-full h-full bg-[#08090d] flex overflow-hidden select-none">
      {/* Civilizations Sidebar */}
      <div className="w-80 bg-[#0a0c12] border-r border-white/10 flex flex-col h-full shrink-0 overflow-y-auto">
        <div className="p-3.5 border-b border-white/10 bg-[#08090d]">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-1.5">
            <Landmark className="w-3.5 h-3.5 text-cyan-400" />
            <span>Civilizational Spheres</span>
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Hubs of cross-cultural exchange, translation, and technological diffusion
          </p>
        </div>

        <div className="p-2 space-y-1 divide-y divide-white/5">
          {CIVILIZATIONS.map(civ => {
            const isSelected = civ.id === selectedCivId;
            return (
              <button
                key={civ.id}
                onClick={() => setSelectedCivId(civ.id)}
                className={`w-full text-left p-2.5 rounded transition-all flex flex-col space-y-0.5 ${
                  isSelected
                    ? 'bg-cyan-950/40 border border-cyan-500/50 text-cyan-200 shadow-glow-cyan'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-100">{civ.name}</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400">{civ.period}</span>
                <span className="text-[11px] text-slate-400 line-clamp-1">{civ.region}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Civilization Detail & Innovations Grid */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Banner */}
        <div className="bg-[#0f1118] border border-white/10 rounded-xl p-6 space-y-3 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                HISTORICAL CIVILIZATION
              </span>
              <h2 className="text-xl font-bold text-slate-100 mt-0.5 font-sans">
                {activeCiv.name}
              </h2>
            </div>
            <div className="text-right font-mono text-xs text-slate-400">
              <span className="text-slate-200 font-semibold">{activeCiv.period}</span>
              <span className="block text-[11px] text-slate-500">{activeCiv.region}</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
            {activeCiv.description}
          </p>

          {/* Key Contributions Tag Pills */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
              DOCUMENTED CORE CONTRIBUTIONS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeCiv.keyContributions.map((kc, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {kc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Innovations Formed or Flourishing in this Sphere */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Innovations Rooted in this Civilizational Sphere</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {linkedInnovations.length} {linkedInnovations.length === 1 ? 'Innovation' : 'Innovations'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {linkedInnovations.map(inv => {
              const domain = DOMAINS[inv.domain];
              const isSelected = inv.id === selectedInnovationId;

              return (
                <div
                  key={inv.id}
                  onClick={() => selectInnovation(inv.id)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-cyan-950/30 border-cyan-500 shadow-glow-cyan'
                      : 'bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#131622]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center space-x-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: domain.color }}
                      ></span>
                      <h4 className="font-semibold text-xs text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {inv.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{inv.date}</span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-2">
                    {inv.overview}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                    <span 
                      className="px-1.5 py-0.2 rounded border"
                      style={{ 
                        color: domain.color,
                        borderColor: `${domain.color}40`,
                        backgroundColor: domain.bgRgba
                      }}
                    >
                      {domain.name}
                    </span>
                    <span className="text-cyan-400 group-hover:underline flex items-center space-x-1">
                      <span>View Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
