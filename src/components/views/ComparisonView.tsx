import React from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { getInnovationById } from '../../data/innovations';
import { ArrowLeftRight } from 'lucide-react';

export const ComparisonView: React.FC = () => {
  const {
    allInnovations,
    compareIds,
    setCompareSlot,
    selectInnovation,
  } = useAtlas();

  const nodeA = getInnovationById(compareIds[0] || 'steam-engine');
  const nodeB = getInnovationById(compareIds[1] || 'internal-combustion-engine');

  const domainA = nodeA ? DOMAINS[nodeA.domain] : null;
  const domainB = nodeB ? DOMAINS[nodeB.domain] : null;

  const handleSwap = () => {
    const tempA = compareIds[0];
    const tempB = compareIds[1];
    setCompareSlot(0, tempB);
    setCompareSlot(1, tempA);
  };

  // Preset comparison pairs
  const presetComparisons = [
    { a: 'steam-engine', b: 'internal-combustion-engine', label: 'Steam Engine vs Internal Combustion' },
    { a: 'printing-press', b: 'world-wide-web', label: 'Printing Press vs World Wide Web' },
    { a: 'transistor-semiconductor', b: 'transformer-attention', label: 'Transistor vs Transformer Architecture' },
    { a: 'electric-telegraph', b: 'optical-fiber-telecom', label: 'Electric Telegraph vs Optical Fiber' },
    { a: 'chronometer-longitude', b: 'satellites-gps', label: 'Marine Chronometer vs GPS Constellation' },
  ];

  return (
    <div className="w-full h-full bg-[#08090d] flex flex-col overflow-hidden select-none">
      {/* Header Selector Bar */}
      <div className="p-4 bg-[#0c0e15] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center space-x-3 flex-wrap gap-2">
          {/* Node A Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              SUBJECT A:
            </span>
            <select
              value={compareIds[0] || ''}
              onChange={(e) => setCompareSlot(0, e.target.value)}
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
            title="Swap comparison subjects"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </button>

          {/* Node B Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
              SUBJECT B:
            </span>
            <select
              value={compareIds[1] || ''}
              onChange={(e) => setCompareSlot(1, e.target.value)}
              className="bg-[#141724] border border-white/15 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              {allInnovations.map(inv => (
                <option key={inv.id} value={inv.id}>
                  {inv.name} ({inv.date})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preset Pairs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto text-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Presets:</span>
          {presetComparisons.slice(0, 3).map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCompareSlot(0, p.a);
                setCompareSlot(1, p.b);
              }}
              className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-mono border border-white/5 transition-all truncate max-w-[200px]"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      <div className="flex-1 overflow-y-auto p-6">
        {nodeA && nodeB ? (
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Titles and Hero Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Column A */}
              <div 
                onClick={() => selectInnovation(nodeA.id)}
                className="p-4 rounded-lg bg-[#0f1118] border border-cyan-500/30 hover:border-cyan-500/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: domainA?.color }}
                  ></span>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {nodeA.domain}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {nodeA.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{nodeA.date} • {nodeA.civilization}</p>
                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">{nodeA.overview}</p>
              </div>

              {/* Column B */}
              <div 
                onClick={() => selectInnovation(nodeB.id)}
                className="p-4 rounded-lg bg-[#0f1118] border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: domainB?.color }}
                  ></span>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    {nodeB.domain}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                  {nodeB.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{nodeB.date} • {nodeB.civilization}</p>
                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">{nodeB.overview}</p>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {/* Problem Solved */}
              <div className="bg-[#0f1118] border border-white/10 rounded-lg p-4">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  1. Problem It Solved
                </h4>
                <div className="grid grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
                  <div className="border-r border-white/10 pr-6">{nodeA.problem_solved}</div>
                  <div>{nodeB.problem_solved}</div>
                </div>
              </div>

              {/* Underlying Mechanism */}
              <div className="bg-[#0f1118] border border-white/10 rounded-lg p-4">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  2. Physical / Logical Mechanism
                </h4>
                <div className="grid grid-cols-2 gap-6 text-xs font-mono text-slate-300 leading-relaxed">
                  <div className="border-r border-white/10 pr-6 text-[11px]">{nodeA.mechanism}</div>
                  <div className="text-[11px]">{nodeB.mechanism}</div>
                </div>
              </div>

              {/* Historical Significance */}
              <div className="bg-[#0f1118] border border-white/10 rounded-lg p-4">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  3. Historical Significance
                </h4>
                <div className="grid grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
                  <div className="border-r border-white/10 pr-6">{nodeA.why_it_matters}</div>
                  <div>{nodeB.why_it_matters}</div>
                </div>
              </div>

              {/* Modern Legacy */}
              <div className="bg-[#0f1118] border border-white/10 rounded-lg p-4">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  4. Modern Legacy & Contemporary Manifestations
                </h4>
                <div className="grid grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
                  <div className="border-r border-white/10 pr-6">{nodeA.modern_legacy}</div>
                  <div>{nodeB.modern_legacy}</div>
                </div>
              </div>

              {/* Contributors */}
              <div className="bg-[#0f1118] border border-white/10 rounded-lg p-4">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  5. Documented Contributors
                </h4>
                <div className="grid grid-cols-2 gap-6 text-xs text-slate-300">
                  <div className="border-r border-white/10 pr-6 space-y-1">
                    {nodeA.contributors.map((c, i) => (
                      <div key={i} className="text-[11px]">
                        <span className="font-semibold text-slate-200">{c.name}</span>{' '}
                        <span className="text-slate-500 font-mono text-[10px]">({c.role.replace('_', ' ')})</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {nodeB.contributors.map((c, i) => (
                      <div key={i} className="text-[11px]">
                        <span className="font-semibold text-slate-200">{c.name}</span>{' '}
                        <span className="text-slate-500 font-mono text-[10px]">({c.role.replace('_', ' ')})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 text-slate-500 text-xs font-mono">
            Select two innovations above to compare them side by side.
          </div>
        )}
      </div>
    </div>
  );
};
