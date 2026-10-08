import React from 'react';
import { KnowledgeGraphView } from './KnowledgeGraphView';

/**
 * Innovation Timeline Graph:
 * An interactive chronological knowledge graph organizing human breakthroughs
 * across historical epochs, lineages, and domain relationships.
 */
export const InnovationTimelineView: React.FC = () => {
  return <KnowledgeGraphView defaultLayout="timeline" />;
};
