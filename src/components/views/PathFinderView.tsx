import React, { useState } from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { GitFork, ArrowRight, ArrowDown, RefreshCw } from 'lucide-react';

export const PathFinderView: React.FC = () => {
  const {
    allInnovations,
    pathIds,
    setPathIds,
    pathResult,
    selectInnovation,
    selectedInnovationId,
  } = useAtlas();

  const [startSelect, setStartSelect] = useState<string>(pathIds.startId || 'stone-tools');
  const [endSelect, setEndSelect] = useState<string>(pathIds.endId || 'autonomous-navigation');

  const handleCalculate = () => {
    setPathIds({ startId: startSelect, endId: endSelect });
  };

  const handleSwap = () => {
    const temp = startSelect;
    setStartSelect(endSelect);
    setEndSelect(temp);
    setPathIds({ startId: endSelect, endId: temp });
  };

  // Quick preset paths
  const presetPaths = [
    { start: 'navigation-maritime', end: 'autonomous-navigation', label: 'Navigation Evolution: Ocean Caravels to Driverless Cars' },
    { start: 'stone-tools', end: 'generative-ai-llm', label: 'Total Human Arc: Lithic Flintknapping to Generative LLMs' },
    { start: 'optics-microscope-telescope', end: 'genetic-engineering-crispr', label: 'Biological Scale: Early Lenses to CRISPR Gene Editing' },
    { start: 'electromagnetism-maxwell', end: 'satellites-gps', label: 'Electromagnetic Field Theory to Orbital GPS' },
    { start: 'mathematics-base60', end: 'transformer-attention', label: 'Positional Base Mathematics to Self-Attention Transformers' },
  ];

  const applyPreset = (start: string, end: string) => {
    setStartSelect(start);
    setEndSelect(end);
    setPathIds({ startId: start, endId: end });
  };

  return (
    <div className="w-full h-full bg-[#08090d] flex flex-col overflow-hidden select-none">
      {/* Header Selector Bar */}
      <div className="p-4 bg-[#0c0e15] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center space-x-3 flex-wrap gap-2">
          {/* Start Node Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              ORIGIN:
            </span>
            <select
              value={startSelect}
              onChange={(e) => setStartSelect(e.target.value)}
              className="bg-[#141724] border border-white/15 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              {allInnovations.map(inv => (
                <option key={inv.id} value={inv.id}>
                  {inv.name} ({inv.date})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSwap}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-100 transition-all border border-white/10"
            title="Swap origin and destination"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* End Node Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              DESTINATION:
            </span>
            <select
              value={endSelect}
              onChange={(e) => setEndSelect(e.target.value)}
              className="bg-[#141724] border border-white/15 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              {allInnovations.map(inv => (
                <option key={inv.id} value={inv.id}>
                  {inv.name} ({inv.date})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-slate-950 transition-all font-mono shadow-glow-cyan"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>Discover Path</span>
          </button>
        </div>

        {/* Preset Badges */}
        <div className="flex items-center space-x-1.5 overflow-x-auto text-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Presets:</span>
          {presetPaths.slice(0, 3).map((p, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(p.start, p.end)}
              className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-mono border border-white/5 transition-all truncate max-w-[200px]"
              title={p.label}
            >
              {p.label.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Path Sequence Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {pathResult && pathResult.found ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Status & Summary */}
            <div className="bg-[#0f121d] border border-white/10 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-100 flex items-center space-x-2">
                  <span className="text-emerald-400 font-mono">
                    {pathResult.nodes[0]?.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                  <span className="text-cyan-400 font-mono">
                    {pathResult.nodes[pathResult.nodes.length - 1]?.name}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">{pathResult.message}</p>
              </div>
              <div className="text-right font-mono text-xs text-slate-400">
                <span className="text-cyan-400 font-bold text-sm">{pathResult.steps.length}</span>
                <span className="block text-[10px] text-slate-500">RELATIONSHIP STEPS</span>
              </div>
            </div>

            {/* Vertical Flowchart Sequence */}
            <div className="space-y-4">
              {pathResult.nodes.map((node, idx) => {
                const isFirst = idx === 0;
                const step = pathResult.steps[idx - 1];
                const domain = DOMAINS[node.domain];
                const isSelected = node.id === selectedInnovationId;

                return (
                  <div key={node.id} className="space-y-3">
                    {/* Link connector if not first */}
                    {!isFirst && step && (
                      <div className="flex flex-col items-center justify-center my-2 space-y-1">
                        <div className="w-0.5 h-4 bg-cyan-500/50"></div>
                        <div className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 flex items-center space-x-1.5 shadow-sm">
                          <span>{step.relationship.relationship_type.replace('_', ' ')}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 max-w-xl text-center italic px-4">
                          "{step.relationship.evidence}"
                        </p>
                        <div className="w-0.5 h-4 bg-cyan-500/50"></div>
                        <ArrowDown className="w-3.5 h-3.5 text-cyan-400 -mt-1" />
                      </div>
                    )}

                    {/* Node Card */}
                    <div
                      onClick={() => selectInnovation(node.id)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer group ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-500 shadow-glow-cyan'
                          : 'bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#131622]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono text-slate-500">Step {idx + 1}</span>
                          <span 
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: domain.color }}
                          ></span>
                          <h4 className="font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {node.name}
                          </h4>
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
                        <div className="text-xs font-mono text-slate-400">
                          {node.date}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {node.overview}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>{node.civilization} • {node.region}</span>
                        <span className="text-cyan-400 font-semibold group-hover:underline">
                          Inspect Technical Dossier &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center py-16 space-y-3">
            <GitFork className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-300">Select Start and End Innovations</h3>
            <p className="text-xs text-slate-500">
              Pick any two breakthroughs across history to compute their evolutionary dependency chain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
