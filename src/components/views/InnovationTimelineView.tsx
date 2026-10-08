import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { useAtlas } from '../../context/AtlasContext';
import { ERAS, getEraById } from '../../data/eras';
import { DOMAINS } from '../../data/domains';
import { Innovation, Relationship, EraId, DomainCategory } from '../../types/innovation';
import { getNodeNeighborhood } from '../../utils/graphAnalytics';
import { VERIFIED_COMMONS_FALLBACKS } from '../../utils/imageService';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  X, 
  ExternalLink, 
  GitFork 
} from 'lucide-react';

interface TimelineNode extends Innovation {
  x: number;
  y: number;
  radius: number;
  laneIndex: number;
  eraIndex: number;
}

interface TimelineLink {
  source: TimelineNode;
  target: TimelineNode;
  relationship: Relationship;
}

// Configurable Era Widths along the chronological horizon (X axis)
const ERA_WIDTHS: Record<EraId, number> = {
  PREHISTORY: 560,
  ANCIENT_WORLD: 600,
  CLASSICAL_PERIOD: 580,
  MEDIEVAL_PERIOD: 560,
  EARLY_MODERN: 600,
  INDUSTRIAL_REVOLUTION: 640,
  ELECTRIFICATION: 640,
  COMPUTING_AGE: 640,
  INTERNET_AGE: 600,
  AI_ERA: 560,
};

// Domain swimlane definitions for clean horizontal grouping
const SWIMLANES: { id: string; label: string; domains: DomainCategory[]; color: string }[] = [
  { 
    id: 'computing-ai', 
    label: 'Computing, Information & AI', 
    domains: ['COMPUTING', 'AI'], 
    color: '#00f0ff' 
  },
  { 
    id: 'communication-knowledge', 
    label: 'Communication & Knowledge Systems', 
    domains: ['COMMUNICATION', 'KNOWLEDGE', 'NAVIGATION'], 
    color: '#38bdf8' 
  },
  { 
    id: 'energy-materials', 
    label: 'Energy, Thermodynamics & Materials', 
    domains: ['ENERGY', 'MATERIALS'], 
    color: '#f59e0b' 
  },
  { 
    id: 'transport-space', 
    label: 'Transportation, Mechanics & Spaceflight', 
    domains: ['TRANSPORTATION', 'SPACE', 'ENGINEERING'], 
    color: '#a855f7' 
  },
  { 
    id: 'science-medicine', 
    label: 'Science, Biology & Medicine', 
    domains: ['SCIENCE', 'MEDICINE'], 
    color: '#10b981' 
  },
  { 
    id: 'foundational', 
    label: 'Foundational & Lithic Civilizations', 
    domains: ['FOUNDATIONAL'], 
    color: '#eab308' 
  },
];

const LANE_HEIGHT = 135;
const TIMELINE_TOP_PADDING = 110;
const TIMELINE_LEFT_PADDING = 180;

export const InnovationTimelineView: React.FC = () => {
  const {
    filteredInnovations,
    allRelationships,
    selectedInnovationId,
    selectInnovation,
    setIsInspectorOpen,
  } = useAtlas();

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const transformRef = useRef<d3.ZoomTransform>(d3.zoomIdentity);
  const zoomBehaviorRef = useRef<d3.ZoomBehavior<HTMLCanvasElement, unknown> | null>(null);

  // Layout mode: 'swimlanes' (domain tracks) vs 'lineage-stream' (compact flow)
  const [layoutMode, setLayoutMode] = useState<'swimlanes' | 'lineage-stream'>('swimlanes');
  const [activeEraFilter, setActiveEraFilter] = useState<EraId | 'ALL'>('ALL');
  const [hoveredNode, setHoveredNode] = useState<TimelineNode | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [highlightOnlyLineage, setHighlightOnlyLineage] = useState(false);

  // Nodes & Links storage
  const nodesRef = useRef<TimelineNode[]>([]);
  const linksRef = useRef<TimelineLink[]>([]);
  const hoveredNodeRef = useRef<TimelineNode | null>(null);
  const selectedIdRef = useRef<string | null>(selectedInnovationId);
  const neighborhoodRef = useRef<ReturnType<typeof getNodeNeighborhood> | null>(null);

  // Lineage neighborhood calculation
  const neighborhood = useMemo(() => {
    return selectedInnovationId ? getNodeNeighborhood(selectedInnovationId) : null;
  }, [selectedInnovationId]);

  useEffect(() => {
    selectedIdRef.current = selectedInnovationId;
    neighborhoodRef.current = neighborhood;
  }, [selectedInnovationId, neighborhood]);

  useEffect(() => {
    hoveredNodeRef.current = hoveredNode;
  }, [hoveredNode]);

  // Compute Era X-offsets along the horizontal timeline
  const eraLayoutMap = useMemo(() => {
    const map = new Map<EraId, { x: number; width: number; center: number }>();
    let currentX = TIMELINE_LEFT_PADDING;

    ERAS.forEach((era) => {
      const width = ERA_WIDTHS[era.id] || 600;
      map.set(era.id, {
        x: currentX,
        width,
        center: currentX + width / 2
      });
      currentX += width;
    });

    const totalWidth = currentX + 300;
    return { map, totalWidth };
  }, []);

  // Compute node coordinates based on chronological time and layout tracks
  const layoutNodes = useCallback(() => {
    const { map: eraMap } = eraLayoutMap;

    // Filter innovations based on active filters
    let activeInnovations = filteredInnovations;
    if (activeEraFilter !== 'ALL') {
      activeInnovations = activeInnovations.filter(i => i.era === activeEraFilter);
    }

    // Sort chronologically
    const sorted = [...activeInnovations].sort((a, b) => a.date_numeric - b.date_numeric);

    // Grouping by era and swimlane for collision avoidance
    const laneOccupancy = new Map<string, number[]>();

    const nodes: TimelineNode[] = sorted.map((inv) => {
      const eraInfo = getEraById(inv.era) || ERAS[0];
      const eraLayout = eraMap.get(inv.era) || { x: TIMELINE_LEFT_PADDING, width: 600, center: TIMELINE_LEFT_PADDING + 300 };

      // Calculate X based on date within era
      const eraSpan = Math.max(1, eraInfo.endYear - eraInfo.startYear);
      const clampedYear = Math.max(eraInfo.startYear, Math.min(eraInfo.endYear, inv.date_numeric));
      const yearRatio = (clampedYear - eraInfo.startYear) / eraSpan;
      const xMargin = 50;
      const calcX = eraLayout.x + xMargin + yearRatio * (eraLayout.width - xMargin * 2);

      // Determine Swimlane Index
      let laneIndex = SWIMLANES.findIndex(lane => lane.domains.includes(inv.domain));
      if (laneIndex === -1) laneIndex = SWIMLANES.length - 1;

      // Base Y coordinate based on layout mode
      let baseY = TIMELINE_TOP_PADDING + laneIndex * LANE_HEIGHT + LANE_HEIGHT / 2;

      if (layoutMode === 'lineage-stream') {
        // Stream mode: distributed across height based on hash / stagger
        const streamTracks = 7;
        const trackIdx = Math.abs((inv.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % streamTracks);
        baseY = TIMELINE_TOP_PADDING + 40 + trackIdx * 90;
      }

      // Local collision staggering within the same era & track
      const key = `${inv.era}-${layoutMode === 'swimlanes' ? laneIndex : Math.floor(baseY / 80)}`;
      const prevXList = laneOccupancy.get(key) || [];

      let yOffset = 0;
      const closeNeighbors = prevXList.filter(prevX => Math.abs(prevX - calcX) < 45);
      if (closeNeighbors.length > 0) {
        yOffset = (closeNeighbors.length % 2 === 1 ? -1 : 1) * (20 + (closeNeighbors.length * 10));
        // Clamp offset to keep inside lane
        yOffset = Math.max(-40, Math.min(40, yOffset));
      }
      prevXList.push(calcX);
      laneOccupancy.set(key, prevXList);

      const radius = inv.predecessors.length + inv.successors.length > 5 ? 12 : 9;

      return {
        ...inv,
        x: calcX,
        y: baseY + yOffset,
        radius,
        laneIndex,
        eraIndex: ERAS.findIndex(e => e.id === inv.era)
      };
    });

    nodesRef.current = nodes;
    const nodeMap = new Map<string, TimelineNode>(nodes.map(n => [n.id, n]));

    // Construct valid links between nodes
    const links: TimelineLink[] = [];
    allRelationships.forEach(rel => {
      const source = nodeMap.get(rel.source);
      const target = nodeMap.get(rel.target);
      if (source && target) {
        links.push({
          source,
          target,
          relationship: rel
        });
      }
    });

    linksRef.current = links;
  }, [filteredInnovations, allRelationships, activeEraFilter, layoutMode, eraLayoutMap]);

  // Main Canvas Render Loop
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const transform = transformRef.current;
    const nodes = nodesRef.current;
    const links = linksRef.current;
    const { map: eraMap, totalWidth } = eraLayoutMap;

    const selectedId = selectedIdRef.current;
    const currentNeighborhood = neighborhoodRef.current;
    const currentHovered = hoveredNodeRef.current;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dpr = window.devicePixelRatio || 1;
    ctx.scale(dpr, dpr);

    // Deep Canvas Background
    ctx.fillStyle = '#08090d';
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.k, transform.k);

    const canvasBottom = TIMELINE_TOP_PADDING + SWIMLANES.length * LANE_HEIGHT + 140;

    // 1. Draw Era Column Bands & Dividers (Always crisp, no scaling explosions)
    ERAS.forEach((era, idx) => {
      const eraLayout = eraMap.get(era.id);
      if (!eraLayout) return;

      const isEven = idx % 2 === 0;
      ctx.fillStyle = isEven ? 'rgba(255, 255, 255, 0.015)' : 'rgba(255, 255, 255, 0.004)';
      ctx.fillRect(eraLayout.x, 0, eraLayout.width, canvasBottom);

      // Vertical Era Divider
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1 / transform.k;
      ctx.beginPath();
      ctx.moveTo(eraLayout.x, 0);
      ctx.lineTo(eraLayout.x, canvasBottom);
      ctx.stroke();

      // Top Era Banner in Canvas (Clamped to 11px - 14px font, NEVER scaling up to 100px!)
      ctx.save();
      const eraFontSize = Math.max(10, Math.min(13, 11 / Math.sqrt(transform.k)));
      ctx.font = `600 ${eraFontSize}px "Inter", sans-serif`;
      ctx.fillStyle = era.color;
      ctx.textAlign = 'left';
      ctx.fillText(era.name.toUpperCase(), eraLayout.x + 16, TIMELINE_TOP_PADDING - 45);

      const periodFontSize = Math.max(8.5, Math.min(11, 9 / Math.sqrt(transform.k)));
      ctx.font = `400 ${periodFontSize}px "JetBrains Mono", monospace`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillText(era.period, eraLayout.x + 16, TIMELINE_TOP_PADDING - 28);

      // Era colored accent line at top
      ctx.strokeStyle = era.color;
      ctx.lineWidth = 2 / transform.k;
      ctx.beginPath();
      ctx.moveTo(eraLayout.x + 16, TIMELINE_TOP_PADDING - 18);
      ctx.lineTo(eraLayout.x + eraLayout.width - 16, TIMELINE_TOP_PADDING - 18);
      ctx.stroke();

      ctx.restore();
    });

    // 2. Draw Horizontal Swimlane Tracks (if in swimlane mode)
    if (layoutMode === 'swimlanes') {
      SWIMLANES.forEach((lane, idx) => {
        const laneY = TIMELINE_TOP_PADDING + idx * LANE_HEIGHT;

        // Lane divider
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1 / transform.k;
        ctx.beginPath();
        ctx.moveTo(0, laneY);
        ctx.lineTo(totalWidth, laneY);
        ctx.stroke();

        // Lane label on left margin
        ctx.save();
        const laneFontSize = Math.max(9, Math.min(12, 10 / Math.sqrt(transform.k)));
        ctx.font = `500 ${laneFontSize}px "Inter", sans-serif`;
        ctx.fillStyle = lane.color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(lane.label, 20, laneY + 12);
        ctx.restore();
      });
    }

    // 3. Draw Evolutionary Directed Bezier Curves (Predecessor -> Successor)
    links.forEach(link => {
      const source = link.source;
      const target = link.target;
      if (!source || !target) return;

      let isHighlighted = false;
      let isPredecessorFlow = false;
      let isDescendantFlow = false;
      let isDimmed = false;

      if (selectedId && currentNeighborhood) {
        if (source.id === selectedId) {
          isHighlighted = true;
          isDescendantFlow = true;
        } else if (target.id === selectedId) {
          isHighlighted = true;
          isPredecessorFlow = true;
        } else if (
          currentNeighborhood.directPredecessors.includes(source.id) &&
          currentNeighborhood.directPredecessors.includes(target.id)
        ) {
          isHighlighted = true;
          isPredecessorFlow = true;
        } else {
          isDimmed = true;
        }
      }

      if (highlightOnlyLineage && isDimmed) return;

      ctx.save();
      ctx.beginPath();

      // Smooth horizontal cubic bezier curve
      const dx = Math.max(40, target.x - source.x);
      const cp1X = source.x + dx * 0.45;
      const cp1Y = source.y;
      const cp2X = target.x - dx * 0.45;
      const cp2Y = target.y;

      ctx.moveTo(source.x, source.y);
      ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, target.x, target.y);

      if (isHighlighted) {
        if (isPredecessorFlow) {
          ctx.strokeStyle = '#10b981'; // Ancestral precursor glow (emerald)
        } else if (isDescendantFlow) {
          ctx.strokeStyle = '#00f0ff'; // Downstream successor glow (cyan)
        } else {
          ctx.strokeStyle = '#38bdf8';
        }
        ctx.lineWidth = 2.4 / transform.k;
        ctx.globalAlpha = 0.95;
      } else if (isDimmed) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 0.8 / transform.k;
        ctx.globalAlpha = 0.12;
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 1.1 / transform.k;
        ctx.globalAlpha = 0.45;
      }

      ctx.stroke();

      // Render directional arrowhead at target end
      if (isHighlighted || transform.k > 1.1) {
        const arrowDist = target.radius + 6;
        const arrowX = target.x - arrowDist;
        const arrowY = target.y;
        const arrowSize = Math.max(3.5, 6 / Math.sqrt(transform.k));

        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(arrowX - arrowSize * 1.5, arrowY - arrowSize * 0.7);
        ctx.lineTo(arrowX - arrowSize * 1.5, arrowY + arrowSize * 0.7);
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      }

      ctx.restore();
    });

    // 4. Draw Innovation Milestone Nodes
    nodes.forEach(node => {
      const isSelected = selectedId !== null && node.id === selectedId;
      const isHovered = currentHovered?.id === node.id;
      const domain = DOMAINS[node.domain] || DOMAINS.FOUNDATIONAL;

      let isPredecessor = false;
      let isDescendant = false;
      let isDimmed = false;

      if (selectedId && currentNeighborhood) {
        if (isSelected) {
          // Focus node
        } else if (currentNeighborhood.directPredecessors.includes(node.id)) {
          isPredecessor = true;
        } else if (currentNeighborhood.directDescendants.includes(node.id)) {
          isDescendant = true;
        } else {
          isDimmed = true;
        }
      }

      if (highlightOnlyLineage && isDimmed) return;

      ctx.save();
      ctx.globalAlpha = isDimmed ? 0.18 : 1.0;

      // Glow halo around active or hovered node
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 9, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 240, 255, 0.35)' : 'rgba(255, 255, 255, 0.18)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      }

      // Predecessor outer ring (emerald)
      if (isPredecessor) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2.2 / transform.k;
        ctx.stroke();
      }

      // Descendant outer ring (cyan)
      if (isDescendant) {
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
      ctx.strokeStyle = isSelected ? '#00f0ff' : 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = (isSelected ? 2.2 : 1.2) / transform.k;
      ctx.stroke();

      // Date badge above node
      const dateFontSize = Math.max(8, Math.min(10.5, 9 / Math.sqrt(transform.k)));
      ctx.font = `500 ${dateFontSize}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillStyle = isSelected ? '#38bdf8' : (isPredecessor ? '#6ee7b7' : (isDescendant ? '#67e8f9' : 'rgba(255, 255, 255, 0.6)'));
      ctx.fillText(node.date, node.x, node.y - node.radius - 5);

      // Innovation Name Label below node (Intelligently clamped, NEVER messy)
      const shouldShowLabel = 
        isSelected || 
        isHovered || 
        isPredecessor || 
        isDescendant || 
        transform.k > 0.75 || 
        node.radius >= 11;

      if (shouldShowLabel && !isDimmed) {
        const labelFontSize = Math.max(9, Math.min(12, 10.5 / Math.sqrt(transform.k)));
        ctx.font = `${labelFontSize}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        const text = node.name;
        const textMetrics = ctx.measureText(text);
        const padding = 3.5;
        const labelY = node.y + node.radius + 4;

        // Dark background plate for readable typography
        ctx.fillStyle = 'rgba(8, 9, 13, 0.94)';
        ctx.fillRect(
          node.x - textMetrics.width / 2 - padding,
          labelY - 1,
          textMetrics.width + padding * 2,
          labelFontSize + 5
        );

        if (isSelected || isPredecessor || isDescendant) {
          ctx.strokeStyle = isSelected ? 'rgba(0, 240, 255, 0.7)' : (isPredecessor ? 'rgba(16, 185, 129, 0.7)' : 'rgba(0, 240, 255, 0.5)');
          ctx.lineWidth = 1 / transform.k;
          ctx.strokeRect(
            node.x - textMetrics.width / 2 - padding,
            labelY - 1,
            textMetrics.width + padding * 2,
            labelFontSize + 5
          );
        }

        ctx.fillStyle = isSelected ? '#38bdf8' : (isPredecessor ? '#6ee7b7' : (isDescendant ? '#67e8f9' : '#f1f5f9'));
        ctx.fillText(text, node.x, labelY);
      }

      ctx.restore();
    });

    ctx.restore();
    ctx.restore();
  }, [eraLayoutMap, layoutMode, highlightOnlyLineage]);

  // Exact Hit Testing for Node Interaction
  const findNodeAt = useCallback((screenX: number, screenY: number): TimelineNode | null => {
    const transform = transformRef.current;
    const graphX = (screenX - transform.x) / transform.k;
    const graphY = (screenY - transform.y) / transform.k;

    const currentNodes = nodesRef.current;
    let closestNode: TimelineNode | null = null;
    let minDistance = Infinity;

    for (let i = 0; i < currentNodes.length; i++) {
      const node = currentNodes[i];
      const dx = graphX - node.x;
      const dy = graphY - node.y;
      const dist = Math.hypot(dx, dy);
      const hitRadius = node.radius + 10 / Math.max(0.5, transform.k);

      if (dist <= hitRadius && dist < minDistance) {
        closestNode = node;
        minDistance = dist;
      }
    }
    return closestNode;
  }, []);

  // Update layout when inputs change
  useEffect(() => {
    layoutNodes();
    render();
  }, [layoutNodes, render]);

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

  // Set up D3 Zoom & Pan
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const zoom = d3.zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([0.15, 4])
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
      const initialTransform = d3.zoomIdentity.translate(40, 20).scale(0.8);
      transformRef.current = initialTransform;
      d3.select(canvas).call(zoom.transform, initialTransform);
    }

    return () => {
      d3.select(canvas).on('.zoom', null);
    };
  }, [findNodeAt, render]);

  // Auto-focus on selected innovation
  useEffect(() => {
    if (!selectedInnovationId || !canvasRef.current || !zoomBehaviorRef.current) return;
    const node = nodesRef.current.find(n => n.id === selectedInnovationId);
    if (!node) return;

    const canvas = canvasRef.current;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const targetScale = Math.max(1.0, Math.min(1.8, transformRef.current.k));

    const targetTransform = d3.zoomIdentity
      .translate(width / 2 - node.x * targetScale, height / 2 - node.y * targetScale)
      .scale(targetScale);

    d3.select(canvas)
      .transition()
      .duration(500)
      .call(zoomBehaviorRef.current.transform, targetTransform);
  }, [selectedInnovationId]);

  // Pointer interactions
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;
    const node = findNodeAt(screenX, screenY);

    if (node) {
      selectInnovation(node.id);
      render();
    }
  };

  const lastClickRef = useRef<{ id: string; time: number } | null>(null);

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;
    const node = findNodeAt(screenX, screenY);

    if (node) {
      const now = Date.now();
      if (lastClickRef.current && lastClickRef.current.id === node.id && (now - lastClickRef.current.time) < 320) {
        // Double Click opens Dossier
        selectInnovation(node.id);
        setIsInspectorOpen(true);
        lastClickRef.current = null;
      } else {
        lastClickRef.current = { id: node.id, time: now };
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

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

  // Era jump navigation helper
  const jumpToEra = (eraId: EraId) => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    const eraLayout = eraLayoutMap.map.get(eraId);
    if (!eraLayout) return;

    const canvas = canvasRef.current;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const targetScale = 0.95;

    const targetTransform = d3.zoomIdentity
      .translate(width / 2 - eraLayout.center * targetScale, height / 2 - (height / 2) * targetScale)
      .scale(targetScale);

    d3.select(canvas)
      .transition()
      .duration(550)
      .call(zoomBehaviorRef.current.transform, targetTransform);
  };

  const handleFitEntireTimeline = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    const canvas = canvasRef.current;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const totalWidth = eraLayoutMap.totalWidth;

    const scale = Math.max(0.18, Math.min(1.0, width / (totalWidth + 100)));
    const targetTransform = d3.zoomIdentity
      .translate(20, height * 0.1)
      .scale(scale);

    d3.select(canvas)
      .transition()
      .duration(500)
      .call(zoomBehaviorRef.current.transform, targetTransform);
  };

  const handleZoomIn = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    d3.select(canvasRef.current).transition().duration(250).call(zoomBehaviorRef.current.scaleBy, 1.35);
  };

  const handleZoomOut = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return;
    d3.select(canvasRef.current).transition().duration(250).call(zoomBehaviorRef.current.scaleBy, 0.75);
  };

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
    }
  }, []);

  // Selected node object for bottom lineage tray
  const selectedNode = useMemo(() => {
    if (!selectedInnovationId) return null;
    return filteredInnovations.find(i => i.id === selectedInnovationId) || null;
  }, [selectedInnovationId, filteredInnovations]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full bg-[#08090d] overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen' : ''
      }`}
    >
      {/* 1. Dedicated Header Ribbon (Fixed Screen-Space, Never Scales) */}
      <div className="bg-[#0c0e15]/95 backdrop-blur-md border-b border-white/10 px-4 py-2 flex items-center justify-between z-20 shrink-0 select-none overflow-x-auto gap-3">
        <div className="flex items-center space-x-2.5 shrink-0">
          <div className="w-6 h-6 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <GitFork className="w-3.5 h-3.5" />
          </div>
          <div>
            <h1 className="text-xs font-bold text-slate-100 tracking-wide uppercase font-mono">
              Innovation Graph
            </h1>
            <p className="text-[10px] text-slate-400 font-mono">
              Chronological Lineage & Dependency Flow
            </p>
          </div>
        </div>

        {/* Epoch Navigation Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5">
          <button
            onClick={() => {
              setActiveEraFilter('ALL');
              handleFitEntireTimeline();
            }}
            className={`px-2.5 py-1 rounded text-xs font-mono shrink-0 transition-all ${
              activeEraFilter === 'ALL'
                ? 'bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 shadow-glow-cyan'
                : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
            }`}
          >
            All Eras
          </button>
          {ERAS.map(era => {
            const count = filteredInnovations.filter(i => i.era === era.id).length;
            const isActive = activeEraFilter === era.id;
            return (
              <button
                key={era.id}
                onClick={() => {
                  setActiveEraFilter(era.id);
                  jumpToEra(era.id);
                }}
                className={`flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-mono shrink-0 transition-all border ${
                  isActive
                    ? 'bg-white/15 border-white/40 text-slate-100 shadow-sm'
                    : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                }`}
                title={`${era.name} (${era.period})`}
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: era.color }}
                ></span>
                <span className="truncate max-w-[110px]">{era.name.split('&')[0]}</span>
                <span className="text-[10px] text-slate-500">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Layout Mode Toggle */}
        <div className="flex items-center space-x-1 bg-white/5 p-0.5 rounded border border-white/10 shrink-0">
          <button
            onClick={() => setLayoutMode('swimlanes')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              layoutMode === 'swimlanes'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Domain Swimlanes: Parallel domain tracks across history"
          >
            Domain Tracks
          </button>
          <button
            onClick={() => setLayoutMode('lineage-stream')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              layoutMode === 'lineage-stream'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Lineage Stream: Evolutionary flow stream"
          >
            Lineage Stream
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

        {/* Floating View Controls HUD */}
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
            onClick={handleFitEntireTimeline}
            className="p-2 rounded text-slate-300 hover:text-slate-100 hover:bg-white/10 transition-all"
            title="Fit Entire Timeline (Full History)"
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
            onClick={() => setHighlightOnlyLineage(!highlightOnlyLineage)}
            className={`p-2 rounded transition-all ${
              highlightOnlyLineage ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-white/10'
            }`}
            title="Lineage Isolation Mode: Show only active precursor and descendant paths"
          >
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

        {/* Hover Context HUD Tooltip with canonical image */}
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
              <span className="text-emerald-400">{hoveredNode.predecessors.length} Precursors</span>
              <span className="text-cyan-400">{hoveredNode.successors.length} Successors</span>
              <span className="text-slate-500">Double-click for dossier &rarr;</span>
            </div>
          </div>
        )}

        {/* 3. Bottom Lineage Traversal Tray (When Node Selected) */}
        {selectedNode && (
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#0c0e15]/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3.5 shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-200 select-none">
            {/* Left: Selected Innovation Info */}
            <div className="flex items-center space-x-3 shrink-0">
              {VERIFIED_COMMONS_FALLBACKS[selectedNode.id]?.url && (
                <img 
                  src={VERIFIED_COMMONS_FALLBACKS[selectedNode.id].url} 
                  alt={selectedNode.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-lg object-cover border border-cyan-500/40 bg-black/50 shrink-0"
                />
              )}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-100 text-sm">{selectedNode.name}</span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-500/30">
                    {selectedNode.date}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 flex items-center space-x-2 mt-0.5">
                  <span>{selectedNode.civilization}</span>
                  <span>•</span>
                  <span>{getEraById(selectedNode.era)?.name}</span>
                </div>
              </div>
            </div>

            {/* Middle: Ancestral Lineage & Descendants Navigation */}
            <div className="flex-1 flex items-center justify-center space-x-4 overflow-x-auto px-2">
              {/* Upstream Precursors */}
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center space-x-1">
                  <ArrowLeft className="w-3 h-3" />
                  <span>Ancestors ({selectedNode.predecessors.length}):</span>
                </span>
                {selectedNode.predecessors.slice(0, 3).map(predId => {
                  const pred = filteredInnovations.find(i => i.id === predId);
                  if (!pred) return null;
                  return (
                    <button
                      key={pred.id}
                      onClick={() => selectInnovation(pred.id)}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-all shrink-0"
                    >
                      {pred.name}
                    </button>
                  );
                })}
              </div>

              <div className="w-px h-6 bg-white/10 shrink-0"></div>

              {/* Downstream Successors */}
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center space-x-1">
                  <span>Enabled ({selectedNode.successors.length}):</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
                {selectedNode.successors.slice(0, 3).map(succId => {
                  const succ = filteredInnovations.find(i => i.id === succId);
                  if (!succ) return null;
                  return (
                    <button
                      key={succ.id}
                      onClick={() => selectInnovation(succ.id)}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 transition-all shrink-0"
                    >
                      {succ.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setIsInspectorOpen(true)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-glow-cyan"
              >
                <span>Full Dossier</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => selectInnovation(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-all"
                title="Deselect"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
