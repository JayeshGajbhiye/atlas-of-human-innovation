import React from 'react';
import { useAtlas } from './context/AtlasContext';
import { TopBar } from './components/layout/TopBar';
import { LeftNavigation } from './components/layout/LeftNavigation';
import { FilterDrawer } from './components/layout/FilterDrawer';
import { InspectorPanel } from './components/inspector/InspectorPanel';
import { MethodologyModal } from './components/modals/MethodologyModal';
import { BookmarksDrawer } from './components/modals/BookmarksDrawer';

// Visualization Views
import { KnowledgeGraphView } from './components/views/KnowledgeGraphView';
import { TimelineView } from './components/views/TimelineView';
import { WorldMapView } from './components/views/WorldMapView';
import { PathFinderView } from './components/views/PathFinderView';
import { ComparisonView } from './components/views/ComparisonView';
import { CivilizationView } from './components/views/CivilizationView';
import { ThreeDUniverseView } from './components/views/ThreeDUniverseView';
import { ErrorBoundary } from './components/common/ErrorBoundary';

export const App: React.FC = () => {
  const { viewMode } = useAtlas();

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#08090d] text-slate-100 antialiased font-sans">
      {/* Top Application Bar */}
      <TopBar />

      {/* Main Dashboard Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Navigation */}
        <LeftNavigation />

        {/* Central Dynamic Visualization Area */}
        <main className="flex-1 relative overflow-hidden bg-[#08090d] flex flex-col">
          <ErrorBoundary fallbackTitle="Atlas Visualization Engine">
            {viewMode === 'graph' && <KnowledgeGraphView />}
            {viewMode === 'timeline' && <TimelineView />}
            {viewMode === 'map' && <WorldMapView />}
            {viewMode === 'paths' && <PathFinderView />}
            {viewMode === 'compare' && <ComparisonView />}
            {viewMode === 'civilization' && <CivilizationView />}
            {viewMode === '3d' && <ThreeDUniverseView />}
          </ErrorBoundary>
        </main>

        {/* Right Research Inspector Dossier */}
        <InspectorPanel />
      </div>

      {/* Slide-over Drawers & Modals */}
      <FilterDrawer />
      <MethodologyModal />
      <BookmarksDrawer />
    </div>
  );
};
