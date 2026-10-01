import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { INNOVATIONS, getInnovationById } from '../data/innovations';
import { RELATIONSHIPS } from '../data/relationships';
import { 
  Innovation, 
  Relationship, 
  ViewMode, 
  FilterState, 
  EraId, 
  DomainCategory, 
  ConfidenceLevel, 
  PathResult 
} from '../types/innovation';
import { findShortestPath } from '../utils/graphAnalytics';

interface AtlasContextType {
  selectedInnovationId: string | null;
  selectedInnovation: Innovation | null;
  selectInnovation: (id: string | null) => void;
  
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  
  filters: FilterState;
  setSearchQuery: (query: string) => void;
  toggleEraFilter: (era: EraId) => void;
  toggleDomainFilter: (domain: DomainCategory) => void;
  toggleConfidenceFilter: (conf: ConfidenceLevel) => void;
  setCivilizationFilter: (civId?: string) => void;
  resetFilters: () => void;
  
  filteredInnovations: Innovation[];
  allInnovations: Innovation[];
  allRelationships: Relationship[];
  
  compareIds: [string | null, string | null];
  setCompareIds: (ids: [string | null, string | null]) => void;
  setCompareSlot: (slot: 0 | 1, id: string | null) => void;
  
  pathIds: { startId: string | null; endId: string | null };
  setPathIds: (ids: { startId: string | null; endId: string | null }) => void;
  pathResult: PathResult | null;
  findPathBetween: (startId: string, endId: string) => void;
  
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  
  history: string[];
  
  methodologyOpen: boolean;
  setMethodologyOpen: (open: boolean) => void;
  
  bookmarksOpen: boolean;
  setBookmarksOpen: (open: boolean) => void;
  
  isInspectorOpen: boolean;
  setIsInspectorOpen: (open: boolean) => void;

  isFilterDrawerOpen: boolean;
  setIsFilterDrawerOpen: (open: boolean) => void;

  shareCurrentView: () => Promise<boolean>;
}

const AtlasContext = createContext<AtlasContextType | undefined>(undefined);

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  selectedEras: [],
  selectedDomains: [],
  selectedConfidence: [],
  selectedCivilization: undefined,
};

export const AtlasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read initial URL query params
  const getUrlParams = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const view = (params.get('view') as ViewMode) || 'graph';
    const id = params.get('id') || null;
    const compareA = params.get('compA') || 'steam-engine';
    const compareB = params.get('compB') || 'internal-combustion-engine';
    const pathStart = params.get('start') || 'stone-tools';
    const pathEnd = params.get('end') || 'autonomous-navigation';
    return { view, id, compareA, compareB, pathStart, pathEnd };
  }, []);

  const initialParams = getUrlParams();

  const [selectedInnovationId, setSelectedInnovationId] = useState<string | null>(initialParams.id);
  const [viewMode, setViewModeState] = useState<ViewMode>(initialParams.view);
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  
  const [compareIds, setCompareIdsState] = useState<[string | null, string | null]>([
    initialParams.compareA,
    initialParams.compareB
  ]);

  const [pathIds, setPathIdsState] = useState<{ startId: string | null; endId: string | null }>({
    startId: initialParams.pathStart,
    endId: initialParams.pathEnd,
  });

  const [pathResult, setPathResult] = useState<PathResult | null>(() => {
    if (initialParams.pathStart && initialParams.pathEnd) {
      return findShortestPath(initialParams.pathStart, initialParams.pathEnd);
    }
    return null;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('atlas_bookmarks');
      return saved ? JSON.parse(saved) : ['navigation-maritime', 'steam-engine', 'satellites-gps', 'transformer-attention'];
    } catch {
      return ['navigation-maritime', 'steam-engine', 'satellites-gps', 'transformer-attention'];
    }
  });

  const [history, setHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('atlas_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [methodologyOpen, setMethodologyOpen] = useState<boolean>(false);
  const [bookmarksOpen, setBookmarksOpen] = useState<boolean>(false);
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(Boolean(initialParams.id));
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);

  // Sync to URL query parameters
  const updateUrl = useCallback((mode: ViewMode, id: string | null) => {
    const params = new URLSearchParams();
    if (mode !== 'graph') params.set('view', mode);
    if (id) params.set('id', id);

    if (mode === 'compare') {
      if (compareIds[0]) params.set('compA', compareIds[0]);
      if (compareIds[1]) params.set('compB', compareIds[1]);
    } else if (mode === 'paths') {
      if (pathIds.startId) params.set('start', pathIds.startId);
      if (pathIds.endId) params.set('end', pathIds.endId);
    }

    const newQuery = params.toString();
    const newUrl = newQuery ? `?${newQuery}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  }, [compareIds, pathIds]);

  const selectInnovation = useCallback((id: string | null) => {
    setSelectedInnovationId(id);
    if (id) {
      setIsInspectorOpen(true);
      setHistory(prev => {
        const next = [id, ...prev.filter(item => item !== id)].slice(0, 20);
        try { localStorage.setItem('atlas_history', JSON.stringify(next)); } catch {}
        return next;
      });
    } else {
      setIsInspectorOpen(false);
    }
    updateUrl(viewMode, id);
  }, [viewMode, updateUrl]);

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
    updateUrl(mode, selectedInnovationId);
  }, [selectedInnovationId, updateUrl]);

  const setCompareIds = useCallback((ids: [string | null, string | null]) => {
    setCompareIdsState(ids);
  }, []);

  const setCompareSlot = useCallback((slot: 0 | 1, id: string | null) => {
    setCompareIdsState(prev => {
      const next: [string | null, string | null] = [...prev];
      next[slot] = id;
      return next;
    });
  }, []);

  const setPathIds = useCallback((ids: { startId: string | null; endId: string | null }) => {
    setPathIdsState(ids);
    if (ids.startId && ids.endId) {
      setPathResult(findShortestPath(ids.startId, ids.endId));
    }
  }, []);

  const findPathBetween = useCallback((startId: string, endId: string) => {
    setPathIdsState({ startId, endId });
    setPathResult(findShortestPath(startId, endId));
    setViewMode('paths');
  }, [setViewMode]);

  // Bookmarks management
  const toggleBookmark = useCallback((id: string) => {
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try { localStorage.setItem('atlas_bookmarks', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return bookmarks.includes(id);
  }, [bookmarks]);

  // Filters
  const setSearchQuery = useCallback((query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleEraFilter = useCallback((era: EraId) => {
    setFilters(prev => ({
      ...prev,
      selectedEras: prev.selectedEras.includes(era)
        ? prev.selectedEras.filter(e => e !== era)
        : [...prev.selectedEras, era]
    }));
  }, []);

  const toggleDomainFilter = useCallback((domain: DomainCategory) => {
    setFilters(prev => ({
      ...prev,
      selectedDomains: prev.selectedDomains.includes(domain)
        ? prev.selectedDomains.filter(d => d !== domain)
        : [...prev.selectedDomains, domain]
    }));
  }, []);

  const toggleConfidenceFilter = useCallback((conf: ConfidenceLevel) => {
    setFilters(prev => ({
      ...prev,
      selectedConfidence: prev.selectedConfidence.includes(conf)
        ? prev.selectedConfidence.filter(c => c !== conf)
        : [...prev.selectedConfidence, conf]
    }));
  }, []);

  const setCivilizationFilter = useCallback((civId?: string) => {
    setFilters(prev => ({ ...prev, selectedCivilization: civId }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  // Filtered dataset
  const filteredInnovations = useMemo(() => {
    const q = filters.searchQuery.trim().toLowerCase();

    return INNOVATIONS.filter(item => {
      // Search query
      if (q) {
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesAliases = item.aliases?.some(a => a.toLowerCase().includes(q));
        const matchesOverview = item.overview.toLowerCase().includes(q);
        const matchesProblem = item.problem_solved.toLowerCase().includes(q);
        const matchesRegion = item.region.toLowerCase().includes(q);
        const matchesCiv = item.civilization.toLowerCase().includes(q);
        const matchesContributors = item.contributors.some(c => c.name.toLowerCase().includes(q));
        const matchesTags = item.tags?.some(t => t.toLowerCase().includes(q));

        if (!matchesName && !matchesAliases && !matchesOverview && !matchesProblem && !matchesRegion && !matchesCiv && !matchesContributors && !matchesTags) {
          return false;
        }
      }

      // Eras filter
      if (filters.selectedEras.length > 0 && !filters.selectedEras.includes(item.era)) {
        return false;
      }

      // Domains filter
      if (filters.selectedDomains.length > 0 && !filters.selectedDomains.includes(item.domain)) {
        return false;
      }

      // Confidence filter
      if (filters.selectedConfidence.length > 0 && !filters.selectedConfidence.includes(item.confidence)) {
        return false;
      }

      // Civilization filter
      if (filters.selectedCivilization && !item.civilization.toLowerCase().includes(filters.selectedCivilization.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const selectedInnovation = useMemo(() => {
    if (!selectedInnovationId) return null;
    return getInnovationById(selectedInnovationId) || null;
  }, [selectedInnovationId]);

  const shareCurrentView = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      return true;
    } catch {
      return false;
    }
  }, []);

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const params = getUrlParams();
      setSelectedInnovationId(params.id);
      setIsInspectorOpen(Boolean(params.id));
      setViewModeState(params.view);
      setCompareIdsState([params.compareA, params.compareB]);
      setPathIdsState({ startId: params.pathStart, endId: params.pathEnd });
      if (params.pathStart && params.pathEnd) {
        setPathResult(findShortestPath(params.pathStart, params.pathEnd));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getUrlParams]);

  return (
    <AtlasContext.Provider
      value={{
        selectedInnovationId,
        selectedInnovation,
        selectInnovation,
        viewMode,
        setViewMode,
        filters,
        setSearchQuery,
        toggleEraFilter,
        toggleDomainFilter,
        toggleConfidenceFilter,
        setCivilizationFilter,
        resetFilters,
        filteredInnovations,
        allInnovations: INNOVATIONS,
        allRelationships: RELATIONSHIPS,
        compareIds,
        setCompareIds,
        setCompareSlot,
        pathIds,
        setPathIds,
        pathResult,
        findPathBetween,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        history,
        methodologyOpen,
        setMethodologyOpen,
        bookmarksOpen,
        setBookmarksOpen,
        isInspectorOpen,
        setIsInspectorOpen,
        isFilterDrawerOpen,
        setIsFilterDrawerOpen,
        shareCurrentView,
      }}
    >
      {children}
    </AtlasContext.Provider>
  );
};

export const useAtlas = (): AtlasContextType => {
  const context = useContext(AtlasContext);
  if (!context) {
    throw new Error('useAtlas must be used within an AtlasProvider');
  }
  return context;
};
