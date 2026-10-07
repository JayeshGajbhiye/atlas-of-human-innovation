import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS, DOMAIN_LIST } from '../../data/domains';
import { Innovation, Relationship } from '../../types/innovation';
import { getNodeNeighborhood, calculateNodeDegrees } from '../../utils/graphAnalytics';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Play, 
  Pause, 
  Tag, 
  Layers,
  Focus
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

  // Drag and click gesture tracking
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

  const [hoveredNode, setHoveredNode] = useState<SimulationNode | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEdgeLabels, setShowEdgeLabels] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [focusLineageMode, setFocusLineageMode] = useState(false);

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

  const focusLineageRef = useRef<boolean>(focusLineageMode);
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

    // Subtle dark technical background grid
    ctx.save();
    ctx.fillStyle = '#08090d';
    ctx.fillRect(0, 0, width, height);

    // Render subtle grid lines aligned with zoom
    const gridSize = 40 * transform.k;
    const offsetX = transform.x % gridSize;
    const offsetY = transform.y % gridSize;

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = offsetX; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = offsetY; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
    ctx.restore();

    // Transform coordinate system for graph elements
    ctx.save();
    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.k, transform.k);

    // 1. Draw Links
    currentLinks.forEach(link => {
      const source = link.source;
      const target = link.target;
      if (!source || !target || source.x === undefined || target.x === undefined) return;

      let isHighlighted = false;
      let isDimmed = false;

      // Selection-specific highlighting ONLY applies when a valid node is actively selected
      if (selectedId && currentNeighborhood) {
        // Strict edge checking: Only highlight edges directly connected to the selected node
        const isDirectConnection = source.id === selectedId || target.id === selectedId;
        
        if (isDirectConnection) {
          isHighlighted = true;
        } else {
          isDimmed = true;
        }
      }

      // If Focus Lineage Mode is active, do not render dimmed edges at all
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
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.8 / transform.k;
        ctx.globalAlpha = 0.15;
      } else {
        // Neutral initial appearance when selectedId is null
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 1.2 / transform.k;
        ctx.globalAlpha = 0.55;
      }

      ctx.stroke();

      // Render directional arrowheads for highlighted or close-up links
      if (isHighlighted || (!selectedId && transform.k > 1.2) || (selectedId && transform.k > 1.4)) {
        const angle = Math.atan2(target.y - source.y, target.x - source.x);
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

      // If Focus Lineage Mode is active, do not render dimmed nodes at all
      if (currentFocusLineage && isDimmed) return;

      ctx.save();
      ctx.globalAlpha = isDimmed ? 0.18 : 1.0;

      // Glow halo around selected or hovered node
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 9, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 240, 255, 0.45)' : 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      }

      // Outer ring for predecessors (emerald) or descendants (cyan)
      if (isPredecessor) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2 / transform.k;
        ctx.stroke();
      } else if (isDescendant) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2 / transform.k;
        ctx.stroke();
      }

      // Core Node Circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? '#ffffff' : domain.color;
      ctx.fill();

      // Thin inner border
      ctx.strokeStyle = isSelected ? '#00f0ff' : 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = (isSelected ? 2.5 : 1.2) / transform.k;
      ctx.stroke();

      // Node Label text (always show for focus/predecessors/descendants, or when zoomed in)
      const shouldShowLabel = 
        isSelected || 
        isHovered || 
        isPredecessor || 
        isDescendant || 
        transform.k > 0.85 || 
        node.radius > 14;

      if (shouldShowLabel && !isDimmed) {
        ctx.font = `${Math.max(9, Math.min(13, 10 / Math.sqrt(transform.k)))}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // Dark background plate for readable typography
        const text = node.name;
        const textMetrics = ctx.measureText(text);
        const padding = 3;
        const textY = node.y + node.radius + 4;

        ctx.fillStyle = 'rgba(8, 9, 13, 0.88)';
        ctx.fillRect(
          node.x - textMetrics.width / 2 - padding,
          textY - 1,
          textMetrics.width + padding * 2,
          14
        );

        ctx.fillStyle = isSelected ? '#38bdf8' : '#f1f5f9';
        ctx.fillText(text, node.x, textY);
      }

      ctx.restore();
    });

    ctx.restore();
    ctx.restore();
  }, []); // Stable callback: zero dependencies, always uses latest refs

  // Exact Hit-testing helper using nodesRef to avoid stale closures
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

  // Synchronize canvas size and handle panel open/close smoothly via ResizeObserver
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

        // Update simulation center force without displacing existing node coordinates
        if (simulationRef.current) {
          simulationRef.current.force('center', d3.forceCenter(width / 2, height / 2).strength(0.04));
        }

        render();
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [render]);

  // Reconcile and maintain node/link positions across filter changes
  useEffect(() => {
    const canvas = canvasRef.current;
    const width = (canvas ? canvas.width / (window.devicePixelRatio || 1) : 900) || 900;
    const height = (canvas ? canvas.height / (window.devicePixelRatio || 1) : 600) || 600;

    const existingMap = new Map<string, SimulationNode>(
      nodesRef.current.map(n => [n.id, n])
    );

    // Reconcile nodes: preserve existing (x, y, vx, vy, fx, fy) so selections NEVER reset positions
    const updatedNodes: SimulationNode[] = filteredInnovations.map(inv => {
      const deg = degreesMap.get(inv.id)?.totalDegree || 1;
      const radius = Math.max(8, Math.min(24, 7 + deg * 2.2));
      const existing = existingMap.get(inv.id);

      if (existing) {
        return {
          ...existing,
          ...inv,
          radius,
          totalDegree: deg,
          // Preserve spatial simulation coordinates
          x: existing.x,
          y: existing.y,
          vx: existing.vx,
          vy: existing.vy,
          fx: existing.fx,
          fy: existing.fy
        };
      }

      // Brand new nodes are placed around center with moderate spread
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 180;
      return {
        ...inv,
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        vx: 0,
        vy: 0,
        radius,
        totalDegree: deg,
      };
    });

    nodesRef.current = updatedNodes;
    const nodeMap = new Map<string, SimulationNode>(updatedNodes.map(n => [n.id, n]));

    // Reconcile links referencing updated node objects
    const updatedLinks: SimulationLink[] = allRelationships
      .filter(rel => nodeMap.has(rel.source) && nodeMap.has(rel.target))
      .map(rel => ({
        source: nodeMap.get(rel.source)!,
        target: nodeMap.get(rel.target)!,
        relationship: rel,
      }));

    linksRef.current = updatedLinks;

    if (!simulationRef.current) {
      // Create fresh simulation with strong collision protection and comfortable repulsion
      const sim = d3.forceSimulation<SimulationNode>(updatedNodes)
        .force('charge', d3.forceManyBody<SimulationNode>()
          .strength(d => -220 - d.radius * 12)
          .distanceMax(700)
        )
        .force('link', d3.forceLink<SimulationNode, SimulationLink>(updatedLinks)
          .id(d => d.id)
          .distance(d => 75 + (d.source.radius || 10) + (d.target.radius || 10))
          .strength(0.4)
        )
        .force('center', d3.forceCenter(width / 2, height / 2).strength(0.04))
        .force('collide', d3.forceCollide<SimulationNode>()
          .radius(d => d.radius + 18)
          .strength(0.95)
          .iterations(4)
        )
        .alpha(0.8)
        .alphaDecay(0.025)
        .on('tick', () => {
          render();
        });

      simulationRef.current = sim;
    } else {
      // Update simulation data smoothly without scrambling
      const sim = simulationRef.current;
      sim.nodes(updatedNodes);
      (sim.force('link') as d3.ForceLink<SimulationNode, SimulationLink>).links(updatedLinks);
      sim.alpha(0.2).restart();
    }

    render();
  }, [filteredInnovations, allRelationships, degreesMap, render]);

  // Set up D3 Zoom with filter to allow clean node dragging and clicking
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const zoom = d3.zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([0.15, 6])
      .filter((event) => {
        // Always allow wheel zooming
        if (event.type === 'wheel') return true;
        // Only allow primary button
        if (event.button !== 0) return false;
        // Check if pointer is over a node: if so, let pointer events handle node click/drag
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

    // Initial center fit
    if (transformRef.current === d3.zoomIdentity) {
      const initialTransform = d3.zoomIdentity.translate(0, 0).scale(0.85);
      transformRef.current = initialTransform;
      d3.select(canvas).call(zoom.transform, initialTransform);
    }

    return () => {
      d3.select(canvas).on('.zoom', null);
    };
  }, [findNodeAt, render]);

  // Trigger instant canvas redraw when selection, hovered node, or controls update (no physics reset!)
  useEffect(() => {
    render();
  }, [selectedInnovationId, neighborhood, showEdgeLabels, showLegend, render]);

  // Interactive Pointer Events for Node Clicking, Dragging, and Deselection
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
      // Pin node for dragging
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

    if (dragRef.current) {
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      if (Math.hypot(dx, dy) > 4) {
        dragRef.current.moved = true;
        // Gently warm simulation ONLY during actual drags
        simulationRef.current?.alphaTarget(0.1).restart();
      }

      if (dragRef.current.moved) {
        const transform = transformRef.current;
        const graphX = (screenX - transform.x) / transform.k;
        const graphY = (screenY - transform.y) / transform.k;

        dragRef.current.node.fx = graphX;
        dragRef.current.node.fy = graphY;
        render();
      }
      return;
    }

    // Hover detection (strictly visual, separate from persistent selection)
    const node = findNodeAt(screenX, screenY);
    if (node) {
      hoveredNodeRef.current = node;
      setHoveredNode(node);
      setHoverPos({ x: e.clientX, y: e.clientY });
      canvas.style.cursor = 'pointer';
    } else {
      if (hoveredNodeRef.current) {
        hoveredNodeRef.current = null;
        setHoveredNode(null);
        setHoverPos(null);
        canvas.style.cursor = 'grab';
      }
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
      simulationRef.current?.alphaTarget(0);

      try {
        if (canvas && canvas.hasPointerCapture(e.pointerId)) {
          canvas.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Safe fallback
      }

      dragRef.current = null;

      if (!moved) {
        // Definite, clean single click on a node -> select innovation deterministically!
        selectInnovation(node.id);
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

    // Calculate actual bounding box of active graph nodes
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
    const scale = Math.max(0.2, Math.min(1.4, Math.min(width / graphWidth, height / graphHeight)));

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
    <div className="relative w-full h-full bg-[#08090d] overflow-hidden" ref={containerRef}>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing block select-none touch-none"
      />

      {/* Floating View Controls */}
      <div className="absolute top-4 left-4 flex flex-col space-y-1 z-10 bg-[#0c0e15]/80 backdrop-blur-md border border-white/10 rounded-lg p-1 shadow-2xl select-none">
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
          title="Reset and Fit Graph"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <div className="h-px bg-white/10 my-0.5"></div>
        <button
          onClick={togglePhysics}
          className={`p-2 rounded transition-all ${
            isPlaying ? 'text-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
          }`}
          title={isPlaying ? 'Pause simulation physics' : 'Run simulation physics'}
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
          title="Toggle domain color legend"
        >
          <Layers className="w-4 h-4" />
        </button>
        <button
          onClick={() => setFocusLineageMode(!focusLineageMode)}
          className={`p-2 rounded transition-all ${
            focusLineageMode ? 'text-amber-400 bg-amber-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
          }`}
          title="Focus Lineage Mode: Hide unrelated nodes when selecting an innovation"
        >
          <Focus className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Domain Legend */}
      {showLegend && (
        <div className="absolute bottom-4 left-4 z-10 bg-[#0c0e15]/85 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl max-w-xs select-none">
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
              <span className="w-2 h-2 rounded-full border border-emerald-400 inline-block"></span>
              <span>Predecessors</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full border border-cyan-400 inline-block"></span>
              <span>Descendants</span>
            </span>
          </div>
        </div>
      )}

      {/* Hover Node Tooltip */}
      {hoveredNode && hoverPos && (
        <div
          className="fixed pointer-events-none z-40 bg-[#0f121d] border border-cyan-500/40 rounded-lg p-2.5 shadow-2xl max-w-xs text-xs space-y-1 transform -translate-x-1/2 -translate-y-full mb-3 animate-in fade-in duration-150 select-none"
          style={{ left: hoverPos.x, top: hoverPos.y }}
        >
          <div className="flex items-center space-x-2">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: DOMAINS[hoveredNode.domain]?.color }}
            ></span>
            <span className="font-semibold text-slate-100">{hoveredNode.name}</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
            <span>{hoveredNode.date}</span>
            <span>•</span>
            <span className="text-cyan-400">{hoveredNode.totalDegree} connections</span>
          </div>
          <p className="text-[11px] text-slate-300 line-clamp-2">{hoveredNode.overview}</p>
        </div>
      )}
    </div>
  );
};
