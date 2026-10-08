import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS, DOMAIN_LIST } from '../../data/domains';
import { ERAS, getEraById } from '../../data/eras';
import { Innovation, Relationship, EraId } from '../../types/innovation';
import { getNodeNeighborhood, calculateNodeDegrees } from '../../utils/graphAnalytics';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  Tag, 
  Layers,
  Focus,
  RotateCcw,
  Clock
} from 'lucide-react';

interface SimulationNode extends d3.SimulationNodeDatum, Innovation {
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  radius: number;
  totalDegree: number;
  eraIndex: number;
  targetEraX: number;
}

interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  source: SimulationNode;
  target: SimulationNode;
  relationship: Relationship;
}

export interface KnowledgeGraphViewProps {
  defaultLayout?: 'timeline' | 'network';
}

const ERA_COLUMN_WIDTH = 340;
const GRAPH_PADDING_X = 120;

export const KnowledgeGraphView: React.FC<KnowledgeGraphViewProps> = ({ defaultLayout = 'timeline' }) => {
  const {
    filteredInnovations,
    allRelationships,
    selectedInnovationId,
    selectInnovation,
    setIsInspectorOpen,
  } = useAtlas();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const simulationRef = useRef<d3.Simulation<SimulationNode, SimulationLink> | null>(null);
  const transformRef = useRef<d3.ZoomTransform>(d3.zoomIdentity);
  const zoomBehaviorRef = useRef<d3.ZoomBehavior<HTMLCanvasElement, unknown> | null>(null);

  // Persistent nodes and links storage to ensure position stability across re-renders
  const nodesRef = useRef<SimulationNode[]>([]);
  const linksRef = useRef<SimulationLink[]>([]);

  // Ref-based dynamic render states to eliminate stale closures and re-render flickering
  const selectedIdRef = useRef<string | null>(selectedInnovationId);
  const neighborhoodRef = useRef<ReturnType<typeof getNodeNeighborhood> | null>(null);
  const hoveredNodeRef = useRef<SimulationNode | null>(null);
  const showEdgeLabelsRef = useRef<boolean>(true);
  const showLegendRef = useRef<boolean>(true);
  const focusLineageRef = useRef<boolean>(false);
  const layoutModeRef = useRef<'timeline' | 'network'>(defaultLayout);

  // Interaction tracking
  const pointerStartRef = useRef<{
    x: number;
    y: number;
    time: number;
    node: SimulationNode | null;
  } | null>(null);

  const dragRef = useRef<{
    node: SimulationNode;
    startX: number;
    startY: number;
    moved: boolean;
  } | null>(null);

  const lastClickRef = useRef<{ id: string; time: number } | null>(null);

  // React Component States
  const [layoutMode, setLayoutMode] = useState<'timeline' | 'network'>(defaultLayout);
  const [hoveredNode, setHoveredNode] = useState<SimulationNode | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEdgeLabels, setShowEdgeLabels] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [focusLineageMode, setFocusLineageMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeEraFilter, setActiveEraFilter] = useState<EraId | 'ALL'>('ALL');

  // Degrees metric cache
  const degreesMap = useMemo(() => calculateNodeDegrees(), []);

  // Compute neighborhood when selectedInnovationId changes
  const neighborhood = useMemo(() => {
    return selectedInnovationId ? getNodeNeighborhood(selectedInnovationId) : null;
  }, [selectedInnovationId]);

  // Synchronize dynamic values to refs for the render loop
  useEffect(() => {
    selectedIdRef.current = selectedInnovationId;
    neighborhoodRef.current = neighborhood;
  }, [selectedInnovationId, neighborhood]);

  useEffect(() => {
    focusLineageRef.current = focusLineageMode;
    render();
  }, [focusLineageMode]);

  useEffect(() => {
    layoutModeRef.current = layoutMode;
    rebuildSimulation();
  }, [layoutMode]);

  useEffect(() => {
    hoveredNodeRef.current = hoveredNode;
  }, [hoveredNode]);

  useEffect(() => {
    showEdgeLabelsRef.current = showEdgeLabels;
  }, [showEdgeLabels]);

  useEffect(() => {
    showLegendRef.current = showLegend;
  }, [showLegend]);

  // Handle Fullscreen Events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isDocFullscreen = !!(document.fullscreenElement);
      setIsFullscreen(isDocFullscreen);
      setTimeout(() => {
        handleFitView();
      }, 100);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fallback state toggle
      setIsFullscreen(prev => !prev);
      setTimeout(() => handleFitView(), 100);
    }
  }, []);

  // Compute era target coordinates for layout
  const eraIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    ERAS.forEach((era, idx) => {
      map.set(era.id, idx);
    });
    return map;
  }, []);

  // Main canvas render routine - completely decoupled from state dependencies to prevent stale closures
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const transform = transformRef.current;
    const currentNodes = nodesRef.current;
    const currentLinks = linksRef.current;
    const currentLayout = layoutModeRef.current;

    // Read current state from refs
    const selectedId = selectedIdRef.current;
    const currentNeighborhood = neighborhoodRef.current;
    const currentHovered = hoveredNodeRef.current;
    const currentEdgeLabels = showEdgeLabelsRef.current;
    const currentFocusLineage = focusLineageRef.current;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply devicePixelRatio scaling
    const dpr = window.devicePixelRatio || 1;
    ctx.scale(dpr, dpr);

    // Subtle dark technical background
    ctx.fillStyle = '#08090d';
    ctx.fillRect(0, 0, width, height);

    // Transform coordinate system for graph elements
    ctx.save();
    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.k, transform.k);

    // 0. Draw Chronological Era Columns and Background Lanes in Timeline Mode
    if (currentLayout === 'timeline') {
      ERAS.forEach((era, idx) => {
        const colX = GRAPH_PADDING_X + idx * ERA_COLUMN_WIDTH;
        
        // Subtle vertical column lane
        ctx.fillStyle = idx % 2 === 0 ? 'rgba(255, 255, 255, 0.012)' : 'rgba(255, 255, 255, 0.003)';
        ctx.fillRect(colX, -500, ERA_COLUMN_WIDTH, height + 1000);

        // Vertical divider
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1 / transform.k;
        ctx.beginPath();
        ctx.moveTo(colX, -500);
        ctx.lineTo(colX, height + 1000);
        ctx.stroke();

        // Subtle Era Watermark in the background
        ctx.save();
        ctx.font = `600 ${Math.max(16, 22 / transform.k)}px "Inter", sans-serif`;
        ctx.fillStyle = `${era.color}15`;
        ctx.textAlign = 'center';
        ctx.fillText(era.name.toUpperCase(), colX + ERA_COLUMN_WIDTH / 2, -40);
        ctx.font = `400 ${Math.max(10, 12 / transform.k)}px "JetBrains Mono", monospace`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.fillText(era.period, colX + ERA_COLUMN_WIDTH / 2, -18);
        ctx.restore();
      });
    }

    // 1. Draw Links
    currentLinks.forEach(link => {
      const source = link.source;
      const target = link.target;
      if (!source || !target || source.x === undefined || target.x === undefined) return;

      let isHighlighted = false;
      let isDimmed = false;

      // Selection-specific highlighting ONLY applies when a valid node is actively selected
      if (selectedId && currentNeighborhood) {
        const isDirectConnection = source.id === selectedId || target.id === selectedId;
        if (isDirectConnection) {
          isHighlighted = true;
        } else {
          isDimmed = true;
        }
      }

      // If Focus Lineage Mode is active, completely skip dimmed edges
      if (currentFocusLineage && isDimmed) return;

      ctx.save();
      ctx.beginPath();

      if (currentLayout === 'timeline') {
        // Smooth forward directional Bezier curve
        const dx = target.x - source.x;
        const cpOffset = Math.max(40, Math.abs(dx) * 0.45);
        ctx.moveTo(source.x, source.y);
        ctx.bezierCurveTo(
          source.x + cpOffset, source.y,
          target.x - cpOffset, target.y,
          target.x, target.y
        );
      } else {
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
      }

      if (isHighlighted) {
        ctx.strokeStyle = source.id === selectedId ? '#00f0ff' : '#10b981';
        ctx.lineWidth = 2.4 / transform.k;
        ctx.globalAlpha = 0.95;
      } else if (isDimmed) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 0.8 / transform.k;
        ctx.globalAlpha = 0.12;
      } else {
        // Neutral clean initial state
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1.1 / transform.k;
        ctx.globalAlpha = 0.45;
      }

      ctx.stroke();

      // Render directional arrowheads
      if (isHighlighted || (!selectedId && transform.k > 1.1) || (selectedId && transform.k > 1.3)) {
        const angle = currentLayout === 'timeline' 
          ? 0 // Forward pointing for timeline bezier
          : Math.atan2(target.y - source.y, target.x - source.x);
        
        const arrowDist = target.radius + 6;
        const arrowX = target.x - arrowDist * Math.cos(angle);
        const arrowY = target.y - arrowDist * Math.sin(angle);
        const arrowSize = Math.max(4, 7 / Math.sqrt(transform.k));

        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(
          arrowX - arrowSize * Math.cos(angle - Math.PI / 6),
          arrowY - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          arrowX - arrowSize * Math.cos(angle + Math.PI / 6),
          arrowY - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      }

      // Render edge relationship label if enabled and highlighted / zoomed
      if (currentEdgeLabels && (isHighlighted || (!selectedId && transform.k > 1.8))) {
        const midX = (source.x + target.x) / 2;
        const midY = (source.y + target.y) / 2;
        ctx.font = `${Math.max(7, 9 / Math.sqrt(transform.k))}px "JetBrains Mono", monospace`;
        ctx.fillStyle = isHighlighted ? '#a5f3fc' : 'rgba(255, 255, 255, 0.45)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(link.relationship.relationship_type.replace(/_/g, ' '), midX, midY - 4);
      }

      ctx.restore();
    });

    // 2. Draw Nodes
    currentNodes.forEach(node => {
      if (node.x === undefined || node.y === undefined) return;

      const isSelected = selectedId !== null && node.id === selectedId;
      const isHovered = currentHovered?.id === node.id;
      const domain = DOMAINS[node.domain] || DOMAINS.FOUNDATIONAL;

      let isPredecessor = false;
      let isDescendant = false;
      let isDimmed = false;

      // Highlight logic activates ONLY when an active selection exists
      if (selectedId && currentNeighborhood) {
        if (isSelected) {
          // Focus node
        } else if (currentNeighborhood.directPredecessors.includes(node.id)) {
          isPredecessor = true;
        } else if (currentNeighborhood.directDescendants.includes(node.id)) {
          isDescendant = true;
        } else if (currentNeighborhood.secondDegree.includes(node.id)) {
          // secondary related
        } else {
          isDimmed = true;
        }
      }

      // If Focus Lineage Mode is active, skip dimmed nodes completely
      if (currentFocusLineage && isDimmed) return;

      ctx.save();
      ctx.globalAlpha = isDimmed ? 0.16 : 1.0;

      // Glow halo around selected or hovered node
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 10, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 240, 255, 0.28)' : 'rgba(255, 255, 255, 0.16)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 240, 255, 0.5)' : 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      }

      // Outer ring for predecessors (emerald) or descendants (cyan)
      if (isPredecessor) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2.2 / transform.k;
        ctx.stroke();
      } else if (isDescendant) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2.2 / transform.k;
        ctx.stroke();
      }

      // Core Node Circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? '#ffffff' : domain.color;
      ctx.fill();

      // Thin inner border
      ctx.strokeStyle = isSelected ? '#00f0ff' : 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = (isSelected ? 2.5 : 1.2) / transform.k;
      ctx.stroke();

      // Node Label text (always show for focus/predecessors/descendants, or when zoomed in)
      const shouldShowLabel = 
        isSelected || 
        isHovered || 
        isPredecessor || 
        isDescendant || 
        transform.k > 0.85 || 
        node.radius > 13;

      if (shouldShowLabel && !isDimmed) {
        ctx.font = `${Math.max(9, Math.min(13, 10 / Math.sqrt(transform.k)))}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // Dark background plate for readable typography
        const text = node.name;
        const textMetrics = ctx.measureText(text);
        const padding = 3.5;
        const textY = node.y + node.radius + 4;

        ctx.fillStyle = 'rgba(8, 9, 13, 0.9)';
        ctx.fillRect(
          node.x - textMetrics.width / 2 - padding,
          textY - 1,
          textMetrics.width + padding * 2,
          15
        );

        ctx.fillStyle = isSelected ? '#38bdf8' : (isPredecessor ? '#6ee7b7' : (isDescendant ? '#67e8f9' : '#f1f5f9'));
        ctx.fillText(text, node.x, textY);
      }

      ctx.restore();
    });

    ctx.restore();
    ctx.restore();
  }, []);

  // Exact Hit-testing helper
  const findNodeAt = useCallback((screenX: number, screenY: number): SimulationNode | null => {
    const transform = transformRef.current;
    const graphX = (screenX - transform.x) / transform.k;
    const graphY = (screenY - transform.y) / transform.k;

    const currentNodes = nodesRef.current;
    let closestNode: SimulationNode | null = null;
    let minDistance = Infinity;

    for (let i = 0; i < currentNodes.length; i++) {
      const node = currentNodes[i];
      if (node.x === undefined || node.y === undefined) continue;

      const dx = graphX - node.x;
      const dy = graphY - node.y;
      const dist = Math.hypot(dx, dy);
      const hitRadius = node.radius + 8 / Math.max(0.5, transform.k);

      if (dist <= hitRadius && dist < minDistance) {
        closestNode = node;
        minDistance = dist;
      }
    }
    return closestNode;
  }, []);

  // Rebuild and maintain simulation
  const rebuildSimulation = useCallback(() => {
    const canvas = canvasRef.current;
    const width = (canvas ? canvas.width / (window.devicePixelRatio || 1) : 900) || 900;
    const height = (canvas ? canvas.height / (window.devicePixelRatio || 1) : 600) || 600;
    const currentLayout = layoutModeRef.current;

    const existingMap = new Map<string, SimulationNode>(
      nodesRef.current.map(n => [n.id, n])
    );

    // Compute active filtered innovations
    const activeInnovations = activeEraFilter === 'ALL'
      ? filteredInnovations
      : filteredInnovations.filter(i => i.era === activeEraFilter);

    const updatedNodes: SimulationNode[] = activeInnovations.map(inv => {
      const deg = degreesMap.get(inv.id)?.totalDegree || 1;
      const radius = Math.max(8, Math.min(22, 7 + deg * 2.0));
      const existing = existingMap.get(inv.id);
      const eraIdx = eraIndexMap.get(inv.era) ?? 0;
      const targetEraX = GRAPH_PADDING_X + eraIdx * ERA_COLUMN_WIDTH + ERA_COLUMN_WIDTH / 2;

      if (existing) {
        return {
          ...existing,
          ...inv,
          radius,
          totalDegree: deg,
          eraIndex: eraIdx,
          targetEraX,
          x: existing.x,
          y: existing.y,
          vx: existing.vx,
          vy: existing.vy,
          fx: existing.fx,
          fy: existing.fy
        };
      }

      // Initial placement
      const initX = currentLayout === 'timeline'
        ? targetEraX + (Math.random() - 0.5) * 120
        : width / 2 + (Math.random() - 0.5) * 300;
      const initY = height / 2 + (Math.random() - 0.5) * 350;

      return {
        ...inv,
        x: initX,
        y: initY,
        vx: 0,
        vy: 0,
        radius,
        totalDegree: deg,
        eraIndex: eraIdx,
        targetEraX,
      };
    });

    nodesRef.current = updatedNodes;
    const nodeMap = new Map<string, SimulationNode>(updatedNodes.map(n => [n.id, n]));

    // Reconcile links
    const updatedLinks: SimulationLink[] = allRelationships
      .filter(rel => nodeMap.has(rel.source) && nodeMap.has(rel.target))
      .map(rel => ({
        source: nodeMap.get(rel.source)!,
        target: nodeMap.get(rel.target)!,
        relationship: rel,
      }));

    linksRef.current = updatedLinks;

    if (simulationRef.current) {
      simulationRef.current.stop();
    }

    // Configure simulation based on layout mode
    const sim = d3.forceSimulation<SimulationNode>(updatedNodes);

    if (currentLayout === 'timeline') {
      // Timeline Mode: Constrained along historical era lanes
      sim
        .force('x', d3.forceX<SimulationNode>(d => d.targetEraX).strength(0.85))
        .force('y', d3.forceY<SimulationNode>(height / 2).strength(0.12))
        .force('collide', d3.forceCollide<SimulationNode>()
          .radius(d => d.radius + 18)
          .strength(0.95)
          .iterations(4)
        )
        .force('charge', d3.forceManyBody<SimulationNode>()
          .strength(d => -160 - d.radius * 6)
          .distanceMax(450)
        )
        .velocityDecay(0.6)
        .alpha(0.6)
        .alphaDecay(0.035);
    } else {
      // Network Mesh Mode: Relational clustering
      sim
        .force('charge', d3.forceManyBody<SimulationNode>()
          .strength(d => -220 - d.radius * 12)
          .distanceMax(700)
        )
        .force('link', d3.forceLink<SimulationNode, SimulationLink>(updatedLinks)
          .id(d => d.id)
          .distance(d => 70 + (d.source.radius || 10) + (d.target.radius || 10))
          .strength(0.35)
        )
        .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
        .force('collide', d3.forceCollide<SimulationNode>()
          .radius(d => d.radius + 18)
          .strength(0.95)
          .iterations(4)
        )
        .velocityDecay(0.55)
        .alpha(0.7)
        .alphaDecay(0.028);
    }

    sim.on('tick', () => {
      render();
    });

    simulationRef.current = sim;
    render();
  }, [filteredInnovations, allRelationships, degreesMap, activeEraFilter, eraIndexMap, render]);

  // Synchronize canvas size via ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        render();
      }
    });

    resizeObserver.observe(container);
    return () => {
      resizeObserver.disconnect();
    };
  }, [render]);

  // Trigger rebuild when inputs change
  useEffect(() => {
    rebuildSimulation();
  }, [rebuildSimulation]);

  // Set up D3 Zoom
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const zoom = d3.zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([0.15, 6])
      .filter((event) => {
        if (event.type === 'wheel') return true;
        if (event.button !== 0) return false;
        const rect = canvas.getBoundingClientRect();
        const screenX = event.clientX - rect.left;
        const screenY = event.clientY - rect.top;
        const node = findNodeAt(screenX, screenY);
        return !node;
      })
      .on('zoom', (event) => {
        transformRef.current = event.transform;
        render();
      });

    zoomBehaviorRef.current = zoom;
    d3.select(canvas).call(zoom);

    if (transformRef.current === d3.zoomIdentity) {
      const initialTransform = d3.zoomIdentity.translate(40, 20).scale(0.85);
      transformRef.current = initialTransform;
      d3.select(canvas).call(zoom.transform, initialTransform);
    }

    return () => {
      d3.select(canvas).on('.zoom', null);
    };
  }, [findNodeAt, render]);

  // Instant redraw on state changes
  useEffect(() => {
    render();
  }, [selectedInnovationId, neighborhood, showEdgeLabels, showLegend, render]);

  // Auto-focus on selected innovation (e.g. from search)
  useEffect(() => {
    if (!selectedInnovationId || !canvasRef.current || !zoomBehaviorRef.current) return;
    const node = nodesRef.current.find(n => n.id === selectedInnovationId);
    if (!node || node.x === undefined || node.y === undefined) return;

    const canvas = canvasRef.current;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const targetScale = Math.max(1.1, Math.min(2.0, transformRef.current.k));

    const targetTransform = d3.zoomIdentity
      .translate(width / 2 - node.x * targetScale, height / 2 - node.y * targetScale)
      .scale(targetScale);

    d3.select(canvas)
      .transition()
      .duration(500)
      .call(zoomBehaviorRef.current.transform, targetTransform);
  }, [selectedInnovationId]);

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    const node = findNodeAt(screenX, screenY);
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
      node,
    };

    if (node) {
      node.fx = node.x;
      node.fy = node.y;

      dragRef.current = {
        node,
        startX: e.clientX,
        startY: e.clientY,
        moved: false,
      };

      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    // Handle Active Node Dragging
    if (dragRef.current) {
      const drag = dragRef.current;
      const dx = (e.clientX - drag.startX) / transformRef.current.k;
      const dy = (e.clientY - drag.startY) / transformRef.current.k;

      if (Math.hypot(dx, dy) > 3) {
        drag.moved = true;
      }

      drag.node.x += dx;
      drag.node.y += dy;
      drag.node.fx = drag.node.x;
      drag.node.fy = drag.node.y;

      drag.startX = e.clientX;
      drag.startY = e.clientY;

      if (simulationRef.current) {
        simulationRef.current.alpha(0.15).restart();
      }
      render();
      return;
    }

    // Handle Hover Tooltip
    const node = findNodeAt(screenX, screenY);
    if (node) {
      setHoveredNode(node);
      setHoverPos({ x: e.clientX, y: e.clientY });
      canvas.style.cursor = 'pointer';
    } else {
      if (hoveredNodeRef.current) {
        setHoveredNode(null);
        setHoverPos(null);
      }
      canvas.style.cursor = 'grab';
    }
    render();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const startInfo = pointerStartRef.current;
    pointerStartRef.current = null;

    if (dragRef.current) {
      const { node, moved } = dragRef.current;

      node.fx = null;
      node.fy = null;

      try {
        if (canvas && canvas.hasPointerCapture(e.pointerId)) {
          canvas.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Safe fallback
      }

      dragRef.current = null;

      if (!moved) {
        // Click detected: check for double click
        const now = Date.now();
        if (lastClickRef.current && lastClickRef.current.id === node.id && (now - lastClickRef.current.time) < 320) {
          // Double Click: Open full innovation dossier!
          selectInnovation(node.id);
          setIsInspectorOpen(true);
          lastClickRef.current = null;
        } else {
          // Single Click: Select and highlight lineage
          lastClickRef.current = { id: node.id, time: now };
          selectInnovation(node.id);
        }
      }

      render();
      return;
    }

    // Single click on empty canvas space clears active selection cleanly
    if (startInfo && !startInfo.node) {
      const dx = e.clientX - startInfo.x;
      const dy = e.clientY - startInfo.y;
      if (Math.hypot(dx, dy) < 5 && selectedIdRef.current !== null) {
        selectInnovation(null);
        render();
      }
    }
  };

  // View control actions
  const handleZoomIn = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    d3.select(canvasRef.current).transition().duration(250).call(zoomBehaviorRef.current.scaleBy, 1.35);
  };

  const handleZoomOut = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    d3.select(canvasRef.current).transition().duration(250).call(zoomBehaviorRef.current.scaleBy, 0.75);
  };

  const handleFitView = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    const canvas = canvasRef.current;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    const nodes = nodesRef.current;
    if (nodes.length === 0) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const n of nodes) {
      if (n.x === undefined || n.y === undefined) continue;
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.y > maxY) maxY = n.y;
    }

    if (minX === Infinity) return;

    const padding = 100;
    const graphWidth = (maxX - minX) + padding * 2;
    const graphHeight = (maxY - minY) + padding * 2;
    const scale = Math.max(0.18, Math.min(1.2, Math.min(width / graphWidth, height / graphHeight)));

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    const targetTransform = d3.zoomIdentity
      .translate(width / 2 - centerX * scale, height / 2 - centerY * scale)
      .scale(scale);

    d3.select(canvasRef.current)
      .transition()
      .duration(450)
      .call(zoomBehaviorRef.current.transform, targetTransform);
  };

  const jumpToEra = (eraId: EraId) => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    const idx = eraIndexMap.get(eraId);
    if (idx === undefined) return;

    const canvas = canvasRef.current;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    const eraCenterX = GRAPH_PADDING_X + idx * ERA_COLUMN_WIDTH + ERA_COLUMN_WIDTH / 2;
    const targetScale = 0.95;

    const targetTransform = d3.zoomIdentity
      .translate(width / 2 - eraCenterX * targetScale, height / 2 - (height / 2) * targetScale)
      .scale(targetScale);

    d3.select(canvasRef.current)
      .transition()
      .duration(550)
      .call(zoomBehaviorRef.current.transform, targetTransform);
  };

  const togglePhysics = () => {
    if (!simulationRef.current) return;
    if (isPlaying) {
      simulationRef.current.stop();
      setIsPlaying(false);
    } else {
      simulationRef.current.alpha(0.3).restart();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full bg-[#08090d] overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen' : ''
      }`}
    >
      {/* 1. Pinned Era Header Ribbon (Chronological Guide) */}
      <div className="bg-[#0c0e15]/90 backdrop-blur-md border-b border-white/10 px-4 py-2.5 flex items-center justify-between z-20 shrink-0 select-none overflow-x-auto gap-2">
        <div className="flex items-center space-x-2 shrink-0">
          <Clock className="w-4 h-4 text-cyan-400" />
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300">
            Historical Epochs:
          </span>
        </div>

        {/* Era Jump Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5">
          <button
            onClick={() => setActiveEraFilter('ALL')}
            className={`px-2.5 py-1 rounded text-xs font-mono shrink-0 transition-all ${
              activeEraFilter === 'ALL'
                ? 'bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 shadow-glow-cyan'
                : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
            }`}
          >
            All Eras ({filteredInnovations.length})
          </button>
          {ERAS.map(era => {
            const count = filteredInnovations.filter(i => i.era === era.id).length;
            const isActive = activeEraFilter === era.id;
            return (
              <button
                key={era.id}
                onClick={() => {
                  setActiveEraFilter(era.id);
                  if (layoutMode === 'timeline') {
                    jumpToEra(era.id);
                  }
                }}
                className={`flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-mono shrink-0 transition-all border ${
                  isActive
                    ? 'bg-white/15 border-white/40 text-slate-100 shadow-sm'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                }`}
                title={`${era.name} (${era.period})`}
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: era.color }}
                ></span>
                <span className="truncate max-w-[120px]">{era.name.split('&')[0]}</span>
                <span className="text-[10px] text-slate-500">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Layout Switcher Pill */}
        <div className="flex items-center space-x-1 bg-white/5 p-0.5 rounded border border-white/10 shrink-0">
          <button
            onClick={() => setLayoutMode('timeline')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              layoutMode === 'timeline'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Chronological Era Matrix: Nodes organized by historical era"
          >
            Era Matrix
          </button>
          <button
            onClick={() => setLayoutMode('network')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              layoutMode === 'network'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Relational Mesh: Organic force-directed network"
          >
            Relational Mesh
          </button>
        </div>
      </div>

      {/* 2. Interactive Graph Canvas */}
      <div className="flex-1 w-full h-full relative overflow-hidden">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="w-full h-full cursor-grab active:cursor-grabbing block select-none touch-none"
        />

        {/* Floating View Controls (Pinnable HUD) */}
        <div className="absolute top-4 left-4 flex flex-col space-y-1 z-20 bg-[#0c0e15]/85 backdrop-blur-md border border-white/10 rounded-lg p-1 shadow-2xl select-none">
          <button
            onClick={handleZoomIn}
            className="p-2 rounded text-slate-300 hover:text-slate-100 hover:bg-white/10 transition-all"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded text-slate-300 hover:text-slate-100 hover:bg-white/10 transition-all"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleFitView}
            className="p-2 rounded text-slate-300 hover:text-slate-100 hover:bg-white/10 transition-all"
            title="Fit and Center Graph"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded transition-all ${
              isFullscreen ? 'text-cyan-400 bg-cyan-950/40' : 'text-slate-300 hover:text-slate-100 hover:bg-white/10'
            }`}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <div className="h-px bg-white/10 my-0.5"></div>
          <button
            onClick={togglePhysics}
            className={`p-2 rounded transition-all ${
              isPlaying ? 'text-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
            }`}
            title={isPlaying ? 'Pause physics' : 'Resume physics'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setShowEdgeLabels(!showEdgeLabels)}
            className={`p-2 rounded transition-all ${
              showEdgeLabels ? 'text-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
            }`}
            title="Toggle relationship edge labels"
          >
            <Tag className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className={`p-2 rounded transition-all ${
              showLegend ? 'text-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
            }`}
            title="Toggle domain categories legend"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => setFocusLineageMode(!focusLineageMode)}
            className={`p-2 rounded transition-all ${
              focusLineageMode ? 'text-amber-400 bg-amber-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
            }`}
            title="Focus Lineage Mode: Isolate direct predecessors and descendants"
          >
            <Focus className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Domain Legend */}
        {showLegend && (
          <div className="absolute bottom-4 left-4 z-20 bg-[#0c0e15]/90 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl max-w-xs select-none">
            <div className="flex items-center justify-between mb-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              <span>Domain Categories</span>
              <span className="text-slate-500">12 DOMAINS</span>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
              {DOMAIN_LIST.map(d => (
                <div key={d.id} className="flex items-center space-x-1.5 truncate">
                  <span 
                    className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: d.color }}
                  ></span>
                  <span className="text-slate-300 truncate">{d.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full border-2 border-emerald-400 inline-block"></span>
                <span>Predecessors</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full border-2 border-cyan-400 inline-block"></span>
                <span>Descendants</span>
              </span>
            </div>
          </div>
        )}

        {/* Hover Node Contextual HUD Tooltip */}
        {hoveredNode && hoverPos && (
          <div
            className="fixed pointer-events-none z-50 bg-[#0f121d]/95 backdrop-blur-md border border-cyan-500/50 rounded-lg p-3 shadow-2xl max-w-xs text-xs space-y-1.5 transform -translate-x-1/2 -translate-y-full mb-3 animate-in fade-in duration-150 select-none"
            style={{ left: hoverPos.x, top: hoverPos.y }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 truncate">
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: DOMAINS[hoveredNode.domain]?.color }}
                ></span>
                <span className="font-bold text-slate-100 truncate">{hoveredNode.name}</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 shrink-0">{hoveredNode.date}</span>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
              <span>{getEraById(hoveredNode.era)?.name}</span>
              <span>•</span>
              <span className="text-slate-300">{hoveredNode.region}</span>
            </div>

            <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">{hoveredNode.overview}</p>

            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="text-cyan-400 font-semibold">{hoveredNode.totalDegree} connections</span>
              <span className="text-slate-500">Double-click for dossier &rarr;</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
