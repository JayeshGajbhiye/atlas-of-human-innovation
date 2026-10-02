import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { Innovation } from '../../types/innovation';

export const InnovationTimelineView: React.FC = () => {
  const { filteredInnovations, selectInnovation, selectedInnovationId } = useAtlas();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<'event' | 'density'>('event');
  const [timeRange, setTimeRange] = useState<'full' | '1000y' | '100y' | '10y'>('full');

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const margin = { top: 40, right: 40, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Valid data only
    const validData = filteredInnovations.filter(d => typeof d.date_numeric === 'number' && !isNaN(d.date_numeric));

    if (validData.length === 0) return;

    // Domain bounds
    let minYear = d3.min(validData, d => d.date_numeric) || -3000000;
    let maxYear = d3.max(validData, d => d.date_numeric) || 2026;

    // Apply time range filters
    if (timeRange !== 'full') {
      const rangeMap = { '10y': 10, '100y': 100, '1000y': 1000 };
      const range = rangeMap[timeRange as keyof typeof rangeMap];
      minYear = maxYear - range;
    }

    // Since prehistory goes to -3,000,000 and modern is +2026, a linear scale is highly skewed.
    // Using a symlog scale (or custom segmented scale) is better, but D3 symlog is good.
    const xScale = d3.scaleSymlog()
      .constant(1000)
      .domain([minYear, maxYear])
      .range([0, innerWidth]);

    // X Axis
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d => {
        const val = Number(d);
        if (val < 0) return `${Math.abs(val)} BCE`;
        if (val === 0) return `1 CE`;
        return `${val} CE`;
      })
      .ticks(10);

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .selectAll('text')
      .style('fill', '#94a3b8')
      .style('font-family', 'ui-monospace, SFMono-Regular, monospace');

    g.selectAll('.domain, .tick line')
      .style('stroke', 'rgba(255, 255, 255, 0.1)');

    if (mode === 'event') {
      // Y scale: categorical by domain
      const domainsList = Object.keys(DOMAINS);
      const yScale = d3.scalePoint()
        .domain(domainsList)
        .range([innerHeight, 0])
        .padding(1);

      // Y Axis
      g.append('g')
        .call(d3.axisLeft(yScale).tickSize(-innerWidth))
        .selectAll('text')
        .style('fill', '#94a3b8')
        .style('text-transform', 'uppercase')
        .style('font-size', '10px');

      g.selectAll('.domain').remove();
      g.selectAll('.tick line')
        .style('stroke', 'rgba(255, 255, 255, 0.05)')
        .style('stroke-dasharray', '4 4');

      // Draw points
      const circles = g.selectAll('.event-point')
        .data(validData)
        .enter()
        .append('circle')
        .attr('class', 'event-point cursor-pointer transition-all duration-200')
        .attr('cx', d => xScale(d.date_numeric))
        .attr('cy', d => yScale(d.domain) || innerHeight / 2)
        .attr('r', d => d.id === selectedInnovationId ? 8 : 5)
        .attr('fill', d => DOMAINS[d.domain as keyof typeof DOMAINS]?.color || '#ffffff')
        .attr('stroke', d => d.id === selectedInnovationId ? '#ffffff' : 'rgba(0,0,0,0.5)')
        .attr('stroke-width', d => d.id === selectedInnovationId ? 2 : 1)
        .style('opacity', 0.8)
        .on('click', (_event, d) => {
          selectInnovation(d.id);
        })
        .on('mouseenter', function() {
          d3.select(this).attr('r', 8).style('opacity', 1);
        })
        .on('mouseleave', function(_event, d) {
          d3.select(this).attr('r', (d as any).id === selectedInnovationId ? 8 : 5)
            .style('opacity', 0.8);
        });

        // Add tooltips natively in D3 or use React state. For simplicity, D3 title.
        circles.append('title')
          .text(d => `${d.name} (${d.date})\n${d.domain}`);

    } else if (mode === 'density') {
      // Histogram approach
      const histogram = d3.bin()
        .value(d => (d as Innovation).date_numeric)
        .domain(xScale.domain() as [number, number])
        .thresholds(xScale.ticks(40));

      const bins = histogram(validData as any);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length) || 10])
        .range([innerHeight, 0]);

      g.append('g')
        .call(d3.axisLeft(yScale))
        .selectAll('text').style('fill', '#94a3b8');

      g.selectAll('rect')
        .data(bins)
        .enter()
        .append('rect')
        .attr('x', 1)
        .attr('transform', d => `translate(${xScale(d.x0 || 0)},${yScale(d.length)})`)
        .attr('width', d => Math.max(0, xScale(d.x1 || 1) - xScale(d.x0 || 0) - 1))
        .attr('height', d => innerHeight - yScale(d.length))
        .style('fill', 'rgba(0, 240, 255, 0.4)')
        .style('stroke', 'rgba(0, 240, 255, 0.8)');
    }

  }, [filteredInnovations, mode, timeRange, selectedInnovationId]);

  return (
    <div className="flex flex-col h-full w-full bg-[#08090d] relative overflow-hidden">
      {/* Controls Overlay */}
      <div className="absolute top-6 right-8 flex space-x-4 z-10">
        <div className="flex bg-[#0f121c] p-1 rounded-md border border-white/10">
          <button 
            className={`px-3 py-1 text-xs font-mono rounded ${mode === 'event' ? 'bg-cyan-900/50 text-cyan-400' : 'text-slate-400 hover:text-slate-200'}`}
            onClick={() => setMode('event')}
          >
            Event
          </button>
          <button 
            className={`px-3 py-1 text-xs font-mono rounded ${mode === 'density' ? 'bg-cyan-900/50 text-cyan-400' : 'text-slate-400 hover:text-slate-200'}`}
            onClick={() => setMode('density')}
          >
            Density
          </button>
        </div>
        
        <div className="flex bg-[#0f121c] p-1 rounded-md border border-white/10">
          {['full', '1000y', '100y', '10y'].map(r => (
            <button 
              key={r}
              className={`px-3 py-1 text-xs font-mono rounded uppercase ${timeRange === r ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              onClick={() => setTimeRange(r as any)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full h-full" ref={containerRef}>
        <svg ref={svgRef} className="w-full h-full tech-grid-bg" />
      </div>
    </div>
  );
};
