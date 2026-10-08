import React, { useState, useEffect } from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { getEraById } from '../../data/eras';
import { getInnovationById } from '../../data/innovations';
import { generateAiContextBrief } from '../../utils/graphAnalytics';
import { resolveInnovationImage, InnovationImage, VERIFIED_COMMONS_FALLBACKS } from '../../utils/imageService';
import { 
  X, 
  Bookmark, 
  Share2, 
  GitFork, 
  Scale, 
  ExternalLink, 
  Info, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  ChevronRight,
  User,
  Cpu,
  Layers,
  Check,
  RotateCw,
  ImageOff,
  AlertCircle
} from 'lucide-react';

export const InspectorPanel: React.FC = () => {
  const {
    selectedInnovation,
    selectInnovation,
    isInspectorOpen,
    setIsInspectorOpen,
    isBookmarked,
    toggleBookmark,
    findPathBetween,
    setCompareSlot,
    setViewMode,
    shareCurrentView
  } = useAtlas();

  const [activeTab, setActiveTab] = useState<'dossier' | 'mechanism' | 'graph' | 'sources'>('dossier');
  const [currentImage, setCurrentImage] = useState<InnovationImage | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedInnovation) {
      setCurrentImage(null);
      return;
    }

    let isMounted = true;
    setImageError(false);

    // 1. Immediate synchronous fallback for 0ms lag
    const instantFallback = VERIFIED_COMMONS_FALLBACKS[selectedInnovation.id] || (
      selectedInnovation.media?.url ? {
        url: selectedInnovation.media.url,
        caption: selectedInnovation.media.caption || selectedInnovation.name,
        attribution: selectedInnovation.media.attribution || 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org',
        license: selectedInnovation.media.license || 'Public Domain'
      } : null
    );

    if (instantFallback) {
      setCurrentImage(instantFallback);
      setImageLoading(false);
    } else {
      setImageLoading(true);
    }

    // 2. Resolve via image service (verifies cache and remote records)
    resolveInnovationImage(selectedInnovation)
      .then(img => {
        if (!isMounted) return;
        if (img) {
          setCurrentImage(img);
        }
        setImageLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setImageLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedInnovation]);

  if (!isInspectorOpen || !selectedInnovation) {
    return null;
  }

  const domain = DOMAINS[selectedInnovation.domain];
  const era = getEraById(selectedInnovation.era);
  const aiBrief = generateAiContextBrief(selectedInnovation);

  const handleCopyLink = async () => {
    await shareCurrentView();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const confidenceBadgeStyles: Record<string, string> = {
    VERIFIED: 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
    DOCUMENTED: 'bg-blue-950/60 border-blue-500/40 text-blue-300',
    APPROXIMATE: 'bg-amber-950/60 border-amber-500/40 text-amber-300',
    DISPUTED: 'bg-rose-950/60 border-rose-500/40 text-rose-300',
  };

  return (
    <aside className="w-[440px] bg-[#0c0e15] border-l border-white/10 h-full flex flex-col shrink-0 select-none shadow-panel z-20 overflow-hidden">
      {/* Top Header Bar */}
      <div className="p-3.5 border-b border-white/10 flex items-center justify-between bg-[#08090d]/60">
        <div className="flex items-center space-x-2">
          <span 
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: domain?.color }}
          ></span>
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-300">
            {domain?.name || selectedInnovation.domain}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark(selectedInnovation.id)}
            className={`p-1.5 rounded transition-all ${
              isBookmarked(selectedInnovation.id)
                ? 'text-amber-400 bg-amber-950/40 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
            }`}
            title="Bookmark innovation"
          >
            <Bookmark className="w-4 h-4" />
          </button>

          {/* Share Deep Link */}
          <button
            onClick={handleCopyLink}
            className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-all"
            title="Copy deep link to this innovation"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Close Panel */}
          <button
            onClick={() => setIsInspectorOpen(false)}
            className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-all ml-1"
            title="Close inspector"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto divide-y divide-white/10">
        {/* Hero Section */}
        <div className="p-4 space-y-3">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${confidenceBadgeStyles[selectedInnovation.confidence]}`}>
                {selectedInnovation.confidence}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {selectedInnovation.date}
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-50 tracking-tight leading-tight">
              {selectedInnovation.name}
            </h1>
            {selectedInnovation.aliases && selectedInnovation.aliases.length > 0 && (
              <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                Also known as: {selectedInnovation.aliases.join(' • ')}
              </p>
            )}
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
            <div className="bg-white/5 p-2 rounded border border-white/5">
              <span className="block text-slate-500 text-[10px]">HISTORICAL ERA</span>
              <span className="text-slate-200 font-medium truncate block">{era?.name}</span>
            </div>
            <div className="bg-white/5 p-2 rounded border border-white/5">
              <span className="block text-slate-500 text-[10px]">CIVILIZATION / REGION</span>
              <span className="text-slate-200 font-medium truncate block">{selectedInnovation.region}</span>
            </div>
          </div>

          {/* Descriptive Image Presentation */}
          {imageLoading ? (
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-white/5 h-48 flex flex-col items-center justify-center animate-pulse">
              <span className="text-[11px] font-mono text-slate-400">Resolving archival visual record...</span>
            </div>
          ) : currentImage && !imageError ? (
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 h-48 group">
              <img
                src={currentImage.url}
                alt={selectedInnovation.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between items-end text-[10px] text-slate-300">
                <span className="truncate max-w-[260px] drop-shadow text-slate-200">
                  {currentImage.caption}
                </span>
                <a
                  href={currentImage.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-cyan-400 hover:text-cyan-300 bg-black/75 hover:bg-black/95 px-2 py-0.5 rounded border border-white/10 shrink-0 ml-1.5 flex items-center space-x-1 transition-colors"
                  title="View archival record on Wikimedia Commons"
                >
                  <span>{currentImage.attribution}</span>
                  <ExternalLink className="w-2.5 h-2.5 inline" />
                </a>
              </div>
            </div>
          ) : imageError && currentImage ? (
            /* State: Image Failed to Load Technically */
            <div className="relative rounded-lg overflow-hidden border border-amber-500/30 bg-amber-950/20 p-4 h-48 flex flex-col justify-between">
              <div className="flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-amber-200">Archival Image Connection Interrupted</h4>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    The verified archival image for <strong className="text-white">{selectedInnovation.name}</strong> could not be rendered due to network or CORS restrictions.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-amber-500/20 text-[10px] font-mono">
                <button
                  onClick={() => setImageError(false)}
                  className="flex items-center space-x-1.5 px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 transition-colors"
                >
                  <RotateCw className="w-3 h-3" />
                  <span>Retry Image</span>
                </button>
                <a
                  href={currentImage.sourceUrl || `https://commons.wikimedia.org`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center space-x-1"
                >
                  <span>Open on Wikimedia</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ) : (
            /* State: Intentional Unavailable State (No legitimate image identified) */
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-white/5 p-4 h-48 flex flex-col justify-between">
              <div className="flex items-start space-x-2.5">
                <ImageOff className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-300">Archival Record Visual Awaiting Public Domain License</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    No verified public-domain or CC-licensed visual asset currently cataloged for <strong className="text-slate-200">{selectedInnovation.name}</strong> ({selectedInnovation.date}).
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                <span>EPOCH: {era?.name}</span>
                <span className="text-cyan-400">HISTORICAL DOSSIER VERIFIED</span>
              </div>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => findPathBetween('stone-tools', selectedInnovation.id)}
              className="flex items-center justify-center space-x-1.5 px-3 py-2 rounded text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/40 transition-all shadow-glow-cyan"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>Trace Path From Origin</span>
            </button>
            <button
              onClick={() => {
                setCompareSlot(0, selectedInnovation.id);
                setViewMode('compare');
              }}
              className="flex items-center justify-center space-x-1.5 px-3 py-2 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-slate-100 transition-all"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Innovation</span>
            </button>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="px-4 pt-3">
          <div className="flex border-b border-white/10 text-xs font-mono space-x-4">
            <button
              onClick={() => setActiveTab('dossier')}
              className={`pb-2 border-b-2 transition-all ${
                activeTab === 'dossier'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Dossier
            </button>
            <button
              onClick={() => setActiveTab('mechanism')}
              className={`pb-2 border-b-2 transition-all ${
                activeTab === 'mechanism'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Mechanism
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`pb-2 border-b-2 transition-all ${
                activeTab === 'graph'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Connections ({selectedInnovation.predecessors.length + selectedInnovation.successors.length})
            </button>
            <button
              onClick={() => setActiveTab('sources')}
              className={`pb-2 border-b-2 transition-all ${
                activeTab === 'sources'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Sources ({selectedInnovation.sources.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Dossier */}
        {/* Tab 1: Dossier */}
        {activeTab === 'dossier' && (
          <div className="p-4 space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2 flex items-center space-x-1.5 opacity-80">
                <Info className="w-3.5 h-3.5" />
                <span>Executive Summary</span>
              </h3>
              <p className="font-sans text-sm leading-relaxed text-slate-200">
                {selectedInnovation.overview}
              </p>
            </div>

            {/* Why It Matters */}
            <div>
              <h3 className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold mb-2 flex items-center space-x-1.5 opacity-80">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Global Impact Vector</span>
              </h3>
              <p className="font-sans text-[13px] leading-relaxed text-slate-300 border-l border-emerald-500/30 pl-3 py-0.5">{selectedInnovation.why_it_matters}</p>
            </div>

            {/* Problem Solved */}
            <div>
              <h3 className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold mb-2 flex items-center space-x-1.5 opacity-80">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Constraint Resolution</span>
              </h3>
              <p className="font-sans text-[13px] leading-relaxed text-slate-300 border-l border-amber-500/30 pl-3 py-0.5">{selectedInnovation.problem_solved}</p>
            </div>

            {/* AI Context Brief */}
            <div className="bg-cyan-950/20 border border-cyan-500/20 rounded p-3 space-y-2 mt-4">
              <div className="flex items-center space-x-1.5 text-cyan-400 font-mono text-[10px] tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Analytics</span>
              </div>
              <p className="font-sans text-[12px] text-slate-300 leading-relaxed">{aiBrief.enablingAncestry}</p>
              <p className="font-sans text-[12px] text-slate-300 leading-relaxed">{aiBrief.cascadingImpact}</p>
            </div>

            {/* Modern Legacy */}
            <div>
              <h3 className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2 flex items-center space-x-1.5 opacity-80">
                <Layers className="w-3.5 h-3.5" />
                <span>Contemporary Manifestation</span>
              </h3>
              <p className="font-sans text-[13px] leading-relaxed text-slate-300 border-l border-cyan-500/30 pl-3 py-0.5">{selectedInnovation.modern_legacy}</p>
            </div>
          </div>
        )}

        {/* Tab 2: Mechanism & Historical Stages */}
        {activeTab === 'mechanism' && (
          <div className="p-4 space-y-6">
            {/* How It Works */}
            <div>
              <h3 className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2 flex items-center space-x-1.5 opacity-80">
                <Cpu className="w-3.5 h-3.5" />
                <span>Platform / Underlying Mechanism</span>
              </h3>
              <p className="font-mono text-[11px] leading-relaxed bg-white/5 p-3 rounded-sm border border-white/10 text-slate-200">
                {selectedInnovation.mechanism}
              </p>
            </div>

            {/* Historical Development Timeline */}
            <div>
              <h3 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold mb-3 flex items-center space-x-1.5 opacity-80">
                <Clock className="w-3.5 h-3.5" />
                <span>Chronological Telemetry</span>
              </h3>
              <div className="relative border-l border-white/10 ml-2 space-y-4 pl-4">
                {selectedInnovation.historical_development.map((stage, idx) => (
                  <div key={idx} className="relative group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute -left-[20px] top-1.5 border-2 border-[#030406] shadow-[0_0_8px_rgba(0,229,255,0.5)]"></span>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <h4 className="font-mono font-medium text-slate-100 text-[11px] tracking-wide">{stage.stage}</h4>
                      <span className="font-mono text-[10px] text-cyan-500/70">{stage.period}</span>
                    </div>
                    <p className="font-sans text-slate-400 text-xs leading-relaxed">{stage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documented Key Contributors */}
            <div>
              <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5" />
                <span>Documented Contributors & Attribution</span>
              </h3>
              <div className="space-y-2">
                {selectedInnovation.contributors.map((contrib, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-white/5 border border-white/5 flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-slate-100">{contrib.name}</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                          {contrib.role.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                        {contrib.periodOrLifespan} • {contrib.affiliationOrRegion}
                      </p>
                      {contrib.contributionNote && (
                        <p className="text-[11px] text-slate-400 mt-1">{contrib.contributionNote}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Graph Predecessors & Descendants */}
        {activeTab === 'graph' && (
          <div className="p-4 space-y-5 text-xs">
            {/* Predecessors */}
            <div>
              <h3 className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2 flex items-center space-x-1.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Enabling Predecessors ({selectedInnovation.predecessors.length})</span>
              </h3>
              {selectedInnovation.predecessors.length > 0 ? (
                <div className="space-y-1.5">
                  {selectedInnovation.predecessors.map(predId => {
                    const predNode = getInnovationById(predId);
                    if (!predNode) return null;
                    return (
                      <button
                        key={predId}
                        onClick={() => selectInnovation(predId)}
                        className="w-full text-left p-2.5 rounded bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-medium text-slate-100 group-hover:text-emerald-300 transition-colors">
                            {predNode.name}
                          </div>
                          <span className="text-[10px] font-mono text-slate-500">{predNode.date}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500 text-[11px] italic">
                  Primal node; no documented preceding technologies in this branch.
                </p>
              )}
            </div>

            {/* Descendants */}
            <div>
              <h3 className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-2 flex items-center space-x-1.5">
                <ArrowDownRight className="w-3.5 h-3.5" />
                <span>Enabled Descendants ({selectedInnovation.successors.length})</span>
              </h3>
              {selectedInnovation.successors.length > 0 ? (
                <div className="space-y-1.5">
                  {selectedInnovation.successors.map(succId => {
                    const succNode = getInnovationById(succId);
                    if (!succNode) return null;
                    return (
                      <button
                        key={succId}
                        onClick={() => selectInnovation(succId)}
                        className="w-full text-left p-2.5 rounded bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-medium text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {succNode.name}
                          </div>
                          <span className="text-[10px] font-mono text-slate-500">{succNode.date}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500 text-[11px] italic">
                  Frontier milestone; descendants actively emerging in current research.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Sources & Citations */}
        {activeTab === 'sources' && (
          <div className="p-4 space-y-4 text-xs">
            <div className="bg-white/5 p-3 rounded border border-white/10">
              <span className="block text-slate-400 text-[10px] font-mono font-semibold uppercase tracking-wider mb-1">
                EVIDENCE CONFIDENCE STATEMENT
              </span>
              <p className="text-slate-300 text-[11px]">
                {selectedInnovation.confidence_note}
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center space-x-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Academic & Institutional Citations</span>
              </h3>
              <div className="space-y-2">
                {selectedInnovation.sources.map((src, idx) => (
                  <div key={idx} className="p-3 rounded bg-white/5 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300 uppercase">
                        {src.sourceType}
                      </span>
                      {src.sourceUrl && (
                        <a
                          href={src.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 text-[10px] font-mono"
                        >
                          <span>Open Source</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="font-medium text-slate-200 text-xs">{src.source}</p>
                    {src.confidenceNote && (
                      <p className="text-[11px] text-slate-400 italic">{src.confidenceNote}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
