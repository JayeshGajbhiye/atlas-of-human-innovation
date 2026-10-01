import React from 'react';
import { useAtlas } from '../../context/AtlasContext';
import { getInnovationById } from '../../data/innovations';
import { DOMAINS } from '../../data/domains';
import { Bookmark, X, Trash2, Download } from 'lucide-react';

export const BookmarksDrawer: React.FC = () => {
  const {
    bookmarks,
    toggleBookmark,
    bookmarksOpen,
    setBookmarksOpen,
    selectInnovation,
  } = useAtlas();

  if (!bookmarksOpen) return null;

  const bookmarkedNodes = bookmarks
    .map(id => getInnovationById(id))
    .filter(Boolean);

  const handleExport = () => {
    const exportData = bookmarkedNodes.map(node => ({
      id: node!.id,
      name: node!.name,
      era: node!.era,
      domain: node!.domain,
      date: node!.date,
      civilization: node!.civilization,
      overview: node!.overview,
    }));

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `atlas-of-human-innovation-bookmarks-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm select-none">
      <div className="w-96 bg-[#0c0e15] border-l border-white/10 h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#08090d]">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <h2 className="text-sm font-semibold text-slate-100">
              Saved Innovations ({bookmarks.length})
            </h2>
          </div>
          <button
            onClick={() => setBookmarksOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of Bookmarks */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {bookmarkedNodes.length > 0 ? (
            bookmarkedNodes.map(node => {
              if (!node) return null;
              const domain = DOMAINS[node.domain];

              return (
                <div
                  key={node.id}
                  className="p-3 rounded-lg bg-[#0f1118] border border-white/10 hover:border-white/20 transition-all group flex items-start justify-between"
                >
                  <div 
                    onClick={() => {
                      selectInnovation(node.id);
                      setBookmarksOpen(false);
                    }}
                    className="flex-1 cursor-pointer pr-2"
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: domain?.color }}
                      ></span>
                      <h4 className="font-semibold text-xs text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {node.name}
                      </h4>
                    </div>
                    <p className="text-[10px] font-mono text-cyan-400">
                      {node.date} • {node.civilization}
                    </p>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                      {node.overview}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleBookmark(node.id)}
                    className="p-1.5 rounded text-slate-500 hover:text-rose-400 hover:bg-white/5 transition-all shrink-0"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 text-slate-500 text-xs font-mono">
              No saved innovations yet. Click the bookmark icon on any innovation dossier to save it.
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {bookmarkedNodes.length > 0 && (
          <div className="p-4 border-t border-white/10 flex justify-between bg-[#08090d]">
            <button
              onClick={handleExport}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-mono text-slate-300 hover:text-slate-100 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={() => setBookmarksOpen(false)}
              className="px-4 py-1.5 rounded text-xs font-mono font-medium bg-cyan-600 hover:bg-cyan-500 text-slate-950 transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
