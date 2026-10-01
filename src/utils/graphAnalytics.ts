import { INNOVATIONS, getInnovationById } from '../data/innovations';
import { RELATIONSHIPS } from '../data/relationships';
import { Innovation, Relationship, PathResult, PathStep } from '../types/innovation';

// Adjacency map for fast traversal
const forwardAdjacency = new Map<string, { targetId: string; relationship: Relationship }[]>();
const reverseAdjacency = new Map<string, { sourceId: string; relationship: Relationship }[]>();
const undirectedAdjacency = new Map<string, { neighborId: string; relationship: Relationship }[]>();

// Initialize adjacency caches
RELATIONSHIPS.forEach(rel => {
  // Forward (source -> target)
  if (!forwardAdjacency.has(rel.source)) forwardAdjacency.set(rel.source, []);
  forwardAdjacency.get(rel.source)!.push({ targetId: rel.target, relationship: rel });

  // Reverse (target -> source)
  if (!reverseAdjacency.has(rel.target)) reverseAdjacency.set(rel.target, []);
  reverseAdjacency.get(rel.target)!.push({ sourceId: rel.source, relationship: rel });

  // Undirected
  if (!undirectedAdjacency.has(rel.source)) undirectedAdjacency.set(rel.source, []);
  undirectedAdjacency.get(rel.source)!.push({ neighborId: rel.target, relationship: rel });

  if (!undirectedAdjacency.has(rel.target)) undirectedAdjacency.set(rel.target, []);
  undirectedAdjacency.get(rel.target)!.push({ neighborId: rel.source, relationship: rel });
});

/**
 * Calculates in-degree, out-degree, and total degree metrics for every node.
 */
export function calculateNodeDegrees(): Map<string, { inDegree: number; outDegree: number; totalDegree: number }> {
  const degreeMap = new Map<string, { inDegree: number; outDegree: number; totalDegree: number }>();

  INNOVATIONS.forEach(node => {
    const outD = forwardAdjacency.get(node.id)?.length || 0;
    const inD = reverseAdjacency.get(node.id)?.length || 0;
    degreeMap.set(node.id, {
      inDegree: inD,
      outDegree: outD,
      totalDegree: inD + outD,
    });
  });

  return degreeMap;
}

/**
 * Extracts the 1-hop and 2-hop neighborhood for a selected node (predecessors, descendants, same era, same domain).
 */
export function getNodeNeighborhood(selectedId: string): {
  directPredecessors: string[];
  directDescendants: string[];
  secondDegree: string[];
  allRelated: Set<string>;
} {
  const directPredecessors: string[] = [];
  const directDescendants: string[] = [];
  const secondDegree: string[] = [];
  const allRelated = new Set<string>();

  allRelated.add(selectedId);

  // Direct predecessors
  const incoming = reverseAdjacency.get(selectedId) || [];
  incoming.forEach(entry => {
    directPredecessors.push(entry.sourceId);
    allRelated.add(entry.sourceId);
  });

  // Direct descendants
  const outgoing = forwardAdjacency.get(selectedId) || [];
  outgoing.forEach(entry => {
    directDescendants.push(entry.targetId);
    allRelated.add(entry.targetId);
  });

  // Second-degree connections
  allRelated.forEach(firstHopId => {
    if (firstHopId === selectedId) return;
    const secondHops = undirectedAdjacency.get(firstHopId) || [];
    secondHops.forEach(sh => {
      if (!allRelated.has(sh.neighborId)) {
        secondDegree.push(sh.neighborId);
      }
    });
  });

  secondDegree.forEach(id => allRelated.add(id));

  return {
    directPredecessors,
    directDescendants,
    secondDegree,
    allRelated,
  };
}

/**
 * Finds the shortest causal/relationship path between two innovations using Breadth-First Search (BFS).
 */
export function findShortestPath(startId: string, endId: string): PathResult {
  if (startId === endId) {
    const node = getInnovationById(startId);
    return {
      startId,
      endId,
      nodes: node ? [node] : [],
      steps: [],
      found: true,
      message: 'Start and destination nodes are identical.'
    };
  }

  const startNode = getInnovationById(startId);
  const endNode = getInnovationById(endId);

  if (!startNode || !endNode) {
    return {
      startId,
      endId,
      nodes: [],
      steps: [],
      found: false,
      message: 'One or both innovation nodes could not be found.'
    };
  }

  // Queue stores: currentId, path of { from, to, rel }
  const queue: { currentId: string; steps: PathStep[] }[] = [];
  const visited = new Set<string>();

  queue.push({ currentId: startId, steps: [] });
  visited.add(startId);

  while (queue.length > 0) {
    const { currentId, steps } = queue.shift()!;

    if (currentId === endId) {
      // Reconstruct nodes
      const nodes: Innovation[] = [startNode];
      steps.forEach(step => nodes.push(step.to));

      return {
        startId,
        endId,
        nodes,
        steps,
        found: true,
        message: `Found ${steps.length}-step relationship path between ${startNode.name} and ${endNode.name}.`
      };
    }

    // Try directed forward transitions first
    const neighbors = undirectedAdjacency.get(currentId) || [];

    for (const neighbor of neighbors) {
      const nextId = neighbor.neighborId;
      if (!visited.has(nextId)) {
        visited.add(nextId);
        const fromNode = getInnovationById(currentId)!;
        const toNode = getInnovationById(nextId)!;

        queue.push({
          currentId: nextId,
          steps: [
            ...steps,
            {
              from: fromNode,
              to: toNode,
              relationship: neighbor.relationship
            }
          ]
        });
      }
    }
  }

  return {
    startId,
    endId,
    nodes: [],
    steps: [],
    found: false,
    message: `No direct or indirect relationship path discovered in the verified graph between ${startNode.name} and ${endNode.name}.`
  };
}

/**
 * Generates an analytical, deterministic AI Context Brief synthesizing upstream and downstream impacts.
 */
export function generateAiContextBrief(innovation: Innovation): {
  summary: string;
  enablingAncestry: string;
  breakthroughCore: string;
  cascadingImpact: string;
  modernSignificance: string;
} {
  const neighborhood = getNodeNeighborhood(innovation.id);
  const predNames = neighborhood.directPredecessors
    .map(id => getInnovationById(id)?.name)
    .filter(Boolean)
    .join(', ');
  const descNames = neighborhood.directDescendants
    .map(id => getInnovationById(id)?.name)
    .filter(Boolean)
    .join(', ');

  const ancestryText = predNames.length > 0
    ? `Directly builds upon foundational breakthroughs in: ${predNames}. Without these antecedent developments, the physical or conceptual preconditions for this innovation did not exist.`
    : 'Stands as a foundational, primal innovation at the base of the human technological graph, emerging from empirical survival trial and environmental observation.';

  const descendantText = descNames.length > 0
    ? `Served as a critical catalyst enabling subsequent revolutions in: ${descNames}. Its principles were adopted, miniaturized, or generalized into higher-order systems.`
    : 'Represents a frontier modern milestone whose long-term technological descendants are actively evolving in contemporary research.';

  return {
    summary: `${innovation.name} emerged during the ${innovation.era.replace(/_/g, ' ')} period (~${innovation.date}) within the sphere of ${innovation.civilization}. It resolved a fundamental physical constraint: ${innovation.problem_solved}`,
    enablingAncestry: ancestryText,
    breakthroughCore: innovation.mechanism,
    cascadingImpact: descendantText,
    modernSignificance: innovation.modern_legacy,
  };
}
