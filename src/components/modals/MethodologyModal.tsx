import React from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { BookOpen, X, ShieldCheck, Scale, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const MethodologyModal: React.FC = () => {
  const { methodologyOpen, setMethodologyOpen } = useAtlas();

  if (!methodologyOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md select-none">
      <div className="bg-[#0e111a] border border-white/15 rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#090b10]">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <div>
              <h2 className="text-base font-bold text-slate-100 font-sans">
                Research Methodology & Scientific Provenance
              </h2>
              <p className="text-[11px] text-slate-400">
                Ethical standards, dating conventions, uncertainty modeling, and citation criteria
              </p>
            </div>
          </div>
          <button
            onClick={() => setMethodologyOpen(false)}
            className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300 leading-relaxed">
          {/* 1. Core Vision */}
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-300 font-mono uppercase tracking-wider flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span>1. Purpose of the Atlas</span>
            </h3>
            <p>
              The <strong>Atlas of Human Innovation</strong> models human progress not as an arbitrary sequence of isolated inventors or national milestones, but as a continuous, cumulative, multi-civilizational knowledge network. Technologies emerge when antecedent physical, materials, mathematical, and socioeconomic preconditions converge.
            </p>
          </section>

          {/* 2. Dating Conventions */}
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-amber-300 font-mono uppercase tracking-wider flex items-center space-x-2">
              <Scale className="w-4 h-4" />
              <span>2. Chronological Dating Conventions</span>
            </h3>
            <p>
              Dates in the Atlas distinguish strictly between exact historical events (e.g. patent filings, first test runs, peer-reviewed publications) and prehistoric archaeological discoveries.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>Prehistory (~2.6 Mya – 3500 BCE):</strong> Dated via radiometric argon-argon (40Ar/39Ar), carbon-14 (C-14), or stratigraphy. Dates are indicated with prefixes such as <code className="text-slate-200">~2.6 Million BCE</code> or <code className="text-slate-200">~10,000 BCE</code> to reflect statistical ranges.</li>
              <li><strong>Classical & Medieval Antiquity:</strong> Centurial or decadal approximations grounded in surviving manuscripts and epigraphy.</li>
              <li><strong>Modern Era (1600 CE – Present):</strong> Exact calendar dates verified via original patent registries, Royal Society / French Academy proceedings, and peer-reviewed journals.</li>
            </ul>
          </section>

          {/* 3. Uncertainty & Provenance Modeling */}
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-emerald-300 font-mono uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4" />
              <span>3. Data Provenance & Uncertainty Taxonomy</span>
            </h3>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                <span className="font-mono font-bold text-emerald-300 text-[11px] block">VERIFIED</span>
                <p className="text-[11px] text-slate-400">
                  Multiple independent physical artifacts, peer-reviewed publications, or surviving patent and institutional records confirm date, mechanism, and attribution.
                </p>
              </div>
              <div className="p-2.5 rounded bg-blue-950/30 border border-blue-500/30 space-y-1">
                <span className="font-mono font-bold text-blue-300 text-[11px] block">DOCUMENTED</span>
                <p className="text-[11px] text-slate-400">
                  Reliable historical consensus supported by archaeological strata and primary texts, though initial invention date carries minor variance.
                </p>
              </div>
              <div className="p-2.5 rounded bg-amber-950/30 border border-amber-500/30 space-y-1">
                <span className="font-mono font-bold text-amber-300 text-[11px] block">APPROXIMATE</span>
                <p className="text-[11px] text-slate-400">
                  Evidence indicates emergence across broad chronological or geographic spans; exact first moment of invention is biologically or archaeologically diffuse.
                </p>
              </div>
              <div className="p-2.5 rounded bg-rose-950/30 border border-rose-500/30 space-y-1">
                <span className="font-mono font-bold text-rose-300 text-[11px] block">DISPUTED</span>
                <p className="text-[11px] text-slate-400">
                  Multiple simultaneous inventors, conflicting historical claims, or independent parallel discoveries across distinct civilizational spheres.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Relationship Modeling */}
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-purple-300 font-mono uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>4. Graph Relationship Semantics</span>
            </h3>
            <p>
              Edges in the Atlas represent meaningful, documented connections rather than random associations:
            </p>
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] text-slate-400">
              <div><span className="text-cyan-400">ENABLED:</span> Directly created physical/mathematical preconditions</div>
              <div><span className="text-emerald-400">DEPENDS_ON:</span> Operational necessity for function</div>
              <div><span className="text-amber-400">INSPIRED:</span> Provoked conceptual or theoretical breakthrough</div>
              <div><span className="text-purple-400">IMPROVED:</span> Substantially boosted efficiency or yield</div>
              <div><span className="text-rose-400">REPLACED:</span> Rendered predecessor obsolete in mainstream use</div>
              <div><span className="text-blue-400">EXTENDED:</span> Applied foundational theory to new domain</div>
            </div>
          </section>

          {/* 5. Deterministic AI Briefs */}
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-300 font-mono uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>5. AI Graph Summaries Policy</span>
            </h3>
            <p>
              AI Context Briefs in this application are <strong>strictly deterministic</strong>. They synthesize the verified graph topology, direct predecessors, and direct descendants present in the curated knowledge base. No external generative models invent dates, people, or claims beyond the recorded historical evidence.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end bg-[#090b10]">
          <button
            onClick={() => setMethodologyOpen(false)}
            className="px-4 py-2 rounded text-xs font-mono font-semibold bg-cyan-600 hover:bg-cyan-500 text-slate-950 transition-all"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
