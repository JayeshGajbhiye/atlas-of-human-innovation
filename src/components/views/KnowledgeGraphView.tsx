import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS, DOMAIN_LIST } from '../../data/domains';
import { Innovation, Relationship, DomainCategory } from '../../types/innovation';
import { getNodeNeighborhood, calculateNodeDegrees } from '../../utils/graphAnalytics';
import { VERIFIED_COMMONS_FALLBACKS } from '../../utils/imageService';
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
  Network,
  X
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
}

interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  source: SimulationNode;
  target: SimulationNode;
  relationship: Relationship;
}

export const KnowledgeGraphView: React.FC = () => {
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
  const [hoveredNode, setHoveredNode] = useState<SimulationNode | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEdgeLabels, setShowEdgeLabels] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [focusLineageMode, setFocusLineageMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [domainFilter, setDomainFilter] = useState<DomainCategory | 'ALL'>('ALL');

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
      setIsFullscreen(prev => !prev);
      setTimeout(() => handleFitView(), 100);
    }
  }, []);

  // Main canvas render routine - clean, robust, zero zoom-out text explosions
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

    // Deep dark cosmos background
    ctx.fillStyle = '#08090d';
    ctx.fillRect(0, 0, width, height);

    // Subtle background grid pattern
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 60 * transform.k;
    const startGridX = (transform.x % gridSize);
    const startGridY = (transform.y % gridSize);
    for (let x = startGridX; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = startGridY; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Transform coordinate system for graph elements
    ctx.save();
    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.k, transform.k);

    // 1. Draw Links (Relational Edges)
    currentLinks.forEach(link => {
      const source = link.source;
      const target = link.target;
      if (!source || !target || source.x === undefined || target.x === undefined) return;

      let isHighlighted = false;
      let isDimmed = false;

      // Selection-specific highlighting
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
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);

      if (isHighlighted) {
        ctx.strokeStyle = source.id === selectedId ? '#00f0ff' : '#10b981';
        ctx.lineWidth = 2.4 / transform.k;
        ctx.globalAlpha = 0.95;
      } else if (isDimmed) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 0.8 / transform.k;
        ctx.globalAlpha = 0.12;
      } else {
        // Neutral clean state
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
        ctx.lineWidth = 1.0 / transform.k;
        ctx.globalAlpha = 0.45;
      }

      ctx.stroke();

      // Render directional arrowheads (from source to target)
      if (isHighlighted || (!selectedId && transform.k > 0.95)) {
        const angle = Math.atan2(target.y - source.y, target.x - source.x);
        const arrowDist = target.radius + 6;
        const arrowX = target.x - arrowDist * Math.cos(angle);
        const arrowY = target.y - arrowDist * Math.sin(angle);
        const arrowSize = Math.max(3.5, 6.5 / Math.sqrt(transform.k));

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

      // Render edge relationship label when zoomed in or highlighted
      if (currentEdgeLabels && (isHighlighted || (!selectedId && transform.k > 1.8))) {
        const midX = (source.x + target.x) / 2;
        const midY = (source.y + target.y) / 2;
        const labelFontSize = Math.max(7, Math.min(10, 8.5 / Math.sqrt(transform.k)));
        ctx.font = `${labelFontSize}px "JetBrains Mono", monospace`;
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

      // Lineage highlight classification
      if (selectedId && currentNeighborhood) {
        if (isSelected) {
          // Focus node
        } else if (currentNeighborhood.directPredecessors.includes(node.id)) {
          isPredecessor = true;
        } else if (currentNeighborhood.directDescendants.includes(node.id)) {
          isDescendant = true;
        } else if (currentNeighborhood.secondDegree.includes(node.id)) {
          // Secondary related
        } else {
          isDimmed = true;
        }
      }

      // If Focus Lineage Mode is active, skip dimmed nodes completely
      if (currentFocusLineage && isDimmed) return;

      ctx.save();
      ctx.globalAlpha = isDimmed ? 0.15 : 1.0;

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

      // Node Label text — Strictly controlled to prevent zoom-out mess!
      // When zoomed out (transform.k < 0.65), ONLY show labels for selected, neighbors, or hovered.
      // When medium zoom (0.65 <= k < 1.1), show high-degree hubs.
      // When zoomed in (k >= 1.1), show all nodes.
      const shouldShowLabel = 
        isSelected || 
        isHovered || 
        isPredecessor || 
        isDescendant || 
        (transform.k >= 1.1) || 
        (transform.k >= 0.65 && node.totalDegree >= 3);

      if (shouldShowLabel && !isDimmed) {
        const fontSize = Math.max(9, Math.min(13, 11 / Math.sqrt(transform.k)));
        ctx.font = `${fontSize}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        const text = node.name;
        const textMetrics = ctx.measureText(text);
        const padding = 3.5;
        const textY = node.y + node.radius + 4;

        // Dark background plate for readable typography
        ctx.fillStyle = 'rgba(8, 9, 13, 0.92)';
        ctx.fillRect(
          node.x - textMetrics.width / 2 - padding,
          textY - 1,
          textMetrics.width + padding * 2,
          fontSize + 5
        );

        // Thin stroke border on active/precursor plates
        if (isSelected || isPredecessor || isDescendant) {
          ctx.strokeStyle = isSelected ? 'rgba(0, 240, 255, 0.6)' : (isPredecessor ? 'rgba(16, 185, 129, 0.6)' : 'rgba(0, 240, 255, 0.4)');
          ctx.lineWidth = 1 / transform.k;
          ctx.strokeRect(
            node.x - textMetrics.width / 2 - padding,
            textY - 1,
            textMetrics.width + padding * 2,
            fontSize + 5
          );
        }

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

  // Rebuild and maintain organic force simulation
  const rebuildSimulation = useCallback(() => {
    const canvas = canvasRef.current;
    const width = (canvas ? canvas.width / (window.devicePixelRatio || 1) : 900) || 900;
    const height = (canvas ? canvas.height / (window.devicePixelRatio || 1) : 600) || 600;

    const existingMap = new Map<string, SimulationNode>(
      nodesRef.current.map(n => [n.id, n])
    );

    // Apply domain filtering
    const activeInnovations = domainFilter === 'ALL'
      ? filteredInnovations
      : filteredInnovations.filter(i => i.domain === domainFilter);

    const updatedNodes: SimulationNode[] = activeInnovations.map(inv => {
      const deg = degreesMap.get(inv.id)?.totalDegree || 1;
      const radius = Math.max(8, Math.min(22, 7 + deg * 2.0));
      const existing = existingMap.get(inv.id);

      if (existing) {
        return {
          ...existing,
          ...inv,
          radius,
          totalDegree: deg,
          x: existing.x,
          y: existing.y,
          vx: existing.vx,
          vy: existing.vy,
          fx: existing.fx,
          fy: existing.fy
        };
      }

      // Initial circular distributed placement
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 250;
      const initX = width / 2 + Math.cos(angle) * dist;
      const initY = height / 2 + Math.sin(angle) * dist;

      return {
        ...inv,
        x: initX,
        y: initY,
        vx: 0,
        vy: 0,
        radius,
        totalDegree: deg,
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

    // Pure organic relational force-directed simulation
    const sim = d3.forceSimulation<SimulationNode>(updatedNodes)
      .force('charge', d3.forceManyBody<SimulationNode>()
        .strength(d => -180 - d.radius * 8)
        .distanceMax(650)
      )
      .force('link', d3.forceLink<SimulationNode, SimulationLink>(updatedLinks)
        .id(d => d.id)
        .distance(d => 65 + (d.source.radius || 10) + (d.target.radius || 10))
        .strength(0.35)
      )
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.06))
      .force('collide', d3.forceCollide<SimulationNode>()
        .radius(d => d.radius + 16)
        .strength(0.95)
        .iterations(4)
      )
      .velocityDecay(0.55)
      .alpha(0.7)
      .alphaDecay(0.028);

    sim.on('tick', () => {
      render();
    });

    simulationRef.current = sim;
    render();
  }, [filteredInnovations, allRelationships, degreesMap, domainFilter, render]);

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

    const padding = 80;
    const graphWidth = (maxX - minX) + padding * 2;
    const graphHeight = (maxY - minY) + padding * 2;
    const scale = Math.max(0.2, Math.min(1.2, Math.min(width / graphWidth, height / graphHeight)));

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
      {/* 1. Dedicated Knowledge Graph Header Ribbon */}
      <div className="bg-[#0c0e15]/95 backdrop-blur-md border-b border-white/10 px-4 py-2 flex items-center justify-between z-20 shrink-0 select-none overflow-x-auto gap-3">
        <div className="flex items-center space-x-2.5 shrink-0">
          <div className="w-6 h-6 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Network className="w-3.5 h-3.5" />
          </div>
          <div>
            <h1 className="text-xs font-bold text-slate-100 tracking-wide uppercase font-mono">
              Knowledge Graph
            </h1>
            <p className="text-[10px] text-slate-400 font-mono">
              Relational & Conceptual Network ({filteredInnovations.length} nodes)
            </p>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5">
          <button
            onClick={() => setDomainFilter('ALL')}
            className={`px-2.5 py-1 rounded text-xs font-mono shrink-0 transition-all ${
              domainFilter === 'ALL'
                ? 'bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 shadow-glow-cyan'
                : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
            }`}
          >
            All Domains
          </button>
          {DOMAIN_LIST.map(dom => {
            const count = filteredInnovations.filter(i => i.domain === dom.id).length;
            const isActive = domainFilter === dom.id;
            return (
              <button
                key={dom.id}
                onClick={() => setDomainFilter(dom.id)}
                className={`flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-mono shrink-0 transition-all border ${
                  isActive
                    ? 'bg-white/15 border-white/40 text-slate-100 shadow-sm'
                    : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                }`}
                title={dom.name}
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: dom.color }}
                ></span>
                <span className="truncate max-w-[110px]">{dom.name}</span>
                <span className="text-[10px] text-slate-500">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Selection Status or Help Tip */}
        <div className="flex items-center space-x-2 shrink-0">
          {selectedInnovationId ? (
            <div className="flex items-center space-x-2 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded text-xs font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="truncate max-w-[140px]">
                {nodesRef.current.find(n => n.id === selectedInnovationId)?.name || 'Selected'}
              </span>
              <button
                onClick={() => selectInnovation(null)}
                className="hover:text-cyan-100 text-cyan-400 p-0.5"
                title="Clear selection"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <span className="text-[10px] font-mono text-slate-400 hidden xl:inline">
              Double-click node for dossier • Click to trace lineage
            </span>
          )}
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

        {/* Hover Node Contextual HUD Tooltip with canonical image preview */}
        {hoveredNode && hoverPos && (
          <div
            className="fixed pointer-events-none z-50 bg-[#0f121d]/95 backdrop-blur-md border border-cyan-500/50 rounded-lg p-3 shadow-2xl max-w-xs text-xs space-y-2 transform -translate-x-1/2 -translate-y-full mb-3 animate-in fade-in duration-150 select-none"
            style={{ left: hoverPos.x, top: hoverPos.y }}
          >
            <div className="flex items-start space-x-2.5">
              {VERIFIED_COMMONS_FALLBACKS[hoveredNode.id]?.url && (
                <img 
                  src={VERIFIED_COMMONS_FALLBACKS[hoveredNode.id].url} 
                  alt={hoveredNode.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded object-cover border border-white/15 shrink-0 bg-black/40"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-slate-100 truncate text-[13px]">{hoveredNode.name}</span>
                  <span className="text-[10px] font-mono text-cyan-400 shrink-0">{hoveredNode.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400 mt-0.5">
                  <span 
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: DOMAINS[hoveredNode.domain]?.color }}
                  ></span>
                  <span className="text-slate-300">{hoveredNode.region}</span>
                  <span>•</span>
                  <span>{hoveredNode.civilization}</span>
                </div>
              </div>
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
