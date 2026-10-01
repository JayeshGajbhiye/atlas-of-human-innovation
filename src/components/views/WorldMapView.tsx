import React, { useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { Globe2, MapPin, Layers, Satellite } from 'lucide-react';
import { Innovation } from '../../types/innovation';

interface LocationGroup {
  lat: number;
  lng: number;
  region: string;
  innovations: Innovation[];
}

export const WorldMapView: React.FC = () => {
  const {
    filteredInnovations,
    selectedInnovationId,
    selectInnovation,
  } = useAtlas();

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Group innovations by exact geographic coordinates so co-located innovations are never hidden
  const { locationGroups, orbitalInnovations, totalMappedCount } = useMemo(() => {
    const map = new Map<string, LocationGroup>();
    const orbital: Innovation[] = [];
    let mappedCount = 0;

    filteredInnovations.forEach(inv => {
      // Validate coordinates: separate non-terrestrial orbital records from terrestrial sites
      if (inv.lat === 0 && inv.lng === 0) {
        orbital.push(inv);
        return;
      }
      if (isNaN(inv.lat) || isNaN(inv.lng)) {
        return;
      }

      mappedCount++;
      const key = `${inv.lat.toFixed(4)},${inv.lng.toFixed(4)}`;
      if (!map.has(key)) {
        map.set(key, {
          lat: inv.lat,
          lng: inv.lng,
          region: inv.region,
          innovations: []
        });
      }
      map.get(key)!.innovations.push(inv);
    });

    return {
      locationGroups: Array.from(map.values()),
      orbitalInnovations: orbital,
      totalMappedCount: mappedCount,
    };
  }, [filteredInnovations]);

  // Initialize Leaflet Map once with OpenStreetMap tiles
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [32.0, 25.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 16,
      zoomControl: false,
    });

    L.control.zoom({ position: 'topleft' }).addTo(map);

    // OpenStreetMap Tile Layer with official attribution
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19,
      className: 'osm-tile-layer',
    }).addTo(map);

    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers when location groups or selected innovation changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    locationGroups.forEach(group => {
      const isMulti = group.innovations.length > 1;
      const hasSelected = group.innovations.some(i => i.id === selectedInnovationId);
      const selectedInv = group.innovations.find(i => i.id === selectedInnovationId);
      const primaryDomain = DOMAINS[group.innovations[0].domain] || DOMAINS.FOUNDATIONAL;

      let iconHtml = '';

      if (isMulti) {
        // Multi-innovation Hub marker with count badge
        iconHtml = `
          <div class="relative flex items-center justify-center group cursor-pointer" style="width: 32px; height: 32px;">
            ${hasSelected ? `
              <div class="absolute w-10 h-10 rounded-full animate-ping opacity-60 bg-cyan-400"></div>
              <div class="absolute w-9 h-9 rounded-full border-2 border-cyan-400"></div>
            ` : `
              <div class="absolute w-7 h-7 rounded-full bg-cyan-950/60 border border-cyan-500/40"></div>
            `}
            <div class="w-6 h-6 rounded-full border-2 border-white shadow-xl flex items-center justify-center font-mono font-bold text-[10px] text-white transition-transform group-hover:scale-115" style="background-color: ${primaryDomain.color};">
              ${group.innovations.length}
            </div>
          </div>
        `;
      } else {
        // Single innovation marker
        const inv = group.innovations[0];
        const domain = DOMAINS[inv.domain] || DOMAINS.FOUNDATIONAL;
        iconHtml = `
          <div class="relative flex items-center justify-center group cursor-pointer" style="width: 28px; height: 28px;">
            ${hasSelected ? `
              <div class="absolute w-8 h-8 rounded-full animate-ping opacity-60" style="background-color: ${domain.color};"></div>
              <div class="absolute w-7 h-7 rounded-full border-2 border-cyan-400"></div>
            ` : ''}
            <div class="w-4 h-4 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-transform group-hover:scale-125" style="background-color: ${domain.color};">
              <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>
        `;
      }

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-map-marker',
        iconSize: isMulti ? [32, 32] : [28, 28],
        iconAnchor: isMulti ? [16, 16] : [14, 14],
      });

      const marker = L.marker([group.lat, group.lng], { icon: customIcon });

      // Generate Popup HTML
      let popupHtml = '';

      if (isMulti) {
        popupHtml = `
          <div class="p-1 space-y-2 max-w-[270px] max-h-[320px] overflow-y-auto">
            <div class="border-b border-white/10 pb-1.5">
              <div class="flex items-center justify-between">
                <span class="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold">Innovation Hub</span>
                <span class="text-[10px] font-mono text-slate-400 font-semibold">${group.innovations.length} Breakthroughs</span>
              </div>
              <h4 class="font-bold text-xs text-slate-100 truncate">${group.region}</h4>
            </div>
            <div class="space-y-2 divide-y divide-white/5">
              ${group.innovations.map(item => {
                const d = DOMAINS[item.domain] || DOMAINS.FOUNDATIONAL;
                const isItemSel = item.id === selectedInnovationId;
                return `
                  <div class="pt-1.5 first:pt-0 cursor-pointer group hover:bg-white/5 p-1 rounded transition-colors ${isItemSel ? 'bg-cyan-950/40 border border-cyan-500/40' : ''}" data-innovation-id="${item.id}">
                    <div class="flex items-center space-x-1.5">
                      <span class="w-2 h-2 rounded-full inline-block shrink-0" style="background-color: ${d.color}"></span>
                      <span class="font-bold text-xs text-slate-100 truncate flex-1 group-hover:text-cyan-300 transition-colors">${item.name}</span>
                    </div>
                    <div class="text-[10px] font-mono text-cyan-400 mt-0.5">${item.date} • ${item.civilization}</div>
                    <p class="text-[10px] text-slate-300 line-clamp-1 mt-0.5">${item.overview}</p>
                    <div class="text-[9px] font-mono text-slate-400 mt-1 flex justify-between items-center">
                      <span>${d.name}</span>
                      <span class="text-cyan-400 font-semibold hover:underline">Inspect &rarr;</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      } else {
        const inv = group.innovations[0];
        const domain = DOMAINS[inv.domain] || DOMAINS.FOUNDATIONAL;
        popupHtml = `
          <div class="p-1 space-y-1.5 max-w-[240px]">
            <div class="flex items-center space-x-1.5">
              <span class="w-2 h-2 rounded-full inline-block" style="background-color: ${domain.color}"></span>
              <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400">${inv.domain}</span>
            </div>
            <h4 class="font-bold text-xs text-slate-100">${inv.name}</h4>
            <p class="text-[10px] font-mono text-cyan-400">${inv.date} • ${inv.civilization}</p>
            <p class="text-[11px] text-slate-300 line-clamp-2">${inv.overview}</p>
            <div class="pt-1 border-t border-white/10 text-[10px] font-mono text-slate-400 flex justify-between items-center" data-innovation-id="${inv.id}">
              <span>Confidence: <strong class="text-slate-200">${inv.confidence}</strong></span>
              <span class="text-cyan-400 font-semibold cursor-pointer hover:underline">Inspect &rarr;</span>
            </div>
          </div>
        `;
      }

      marker.bindPopup(popupHtml, { maxWidth: 280 });

      // Attach direct click listener to select single innovations immediately
      marker.on('click', () => {
        if (!isMulti) {
          selectInnovation(group.innovations[0].id);
        }
      });

      // Bind click handlers to individual innovation items inside popup
      marker.on('popupopen', () => {
        const popupEl = marker.getPopup()?.getElement();
        if (!popupEl) return;
        const clickableItems = popupEl.querySelectorAll<HTMLElement>('[data-innovation-id]');
        clickableItems.forEach(el => {
          el.onclick = (e) => {
            e.stopPropagation();
            const id = el.getAttribute('data-innovation-id');
            if (id) {
              selectInnovation(id);
            }
          };
        });
      });

      if (hasSelected) {
        marker.setZIndexOffset(1000);
      }

      markersLayer.addLayer(marker);

      // Pan to and open popup if this marker contains the active selection
      if (hasSelected && selectedInv) {
        map.panTo([group.lat, group.lng], { animate: true });
        marker.openPopup();
      }
    });
  }, [locationGroups, selectedInnovationId, selectInnovation]);

  return (
    <div className="relative w-full h-full bg-[#08090d] select-none">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Floating Info & Coverage Status Overlay */}
      <div className="absolute top-4 right-4 z-10 bg-[#0c0e15]/85 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl max-w-xs text-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono font-semibold">
            <Globe2 className="w-4 h-4" />
            <span>2D Geographic Origins</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
            OpenStreetMap
          </span>
        </div>

        <p className="text-slate-300 text-[11px] leading-relaxed">
          Displays documented archaeological sites, civilizational origins, and laboratories. Multi-innovation hubs display breakthrough count badges.
        </p>

        {/* Coverage Statistics */}
        <div className="pt-2 border-t border-white/10 space-y-1.5 text-[10px] font-mono text-slate-400">
          <div className="flex justify-between items-center">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Mapped Breakthroughs:</span>
            </span>
            <span className="text-slate-100 font-semibold">{totalMappedCount} / 73 Terrestrial</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center space-x-1.5">
              <Layers className="w-3 h-3 text-cyan-400" />
              <span>Geographic Sites:</span>
            </span>
            <span className="text-slate-100 font-semibold">{locationGroups.length} Active Hubs</span>
          </div>
        </div>

        {/* Non-terrestrial orbital innovation note (space-station-iss) */}
        {orbitalInnovations.length > 0 && (
          <div className="pt-2 border-t border-white/10">
            <div className="p-2 rounded bg-white/5 border border-white/5 space-y-1">
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-amber-400 font-semibold">
                <Satellite className="w-3 h-3" />
                <span>Non-Terrestrial (Orbital)</span>
              </div>
              <p className="text-[10px] text-slate-300 leading-snug">
                {orbitalInnovations.map(o => o.name).join(', ')} (Low Earth Orbit, 400 km altitude — unmapped due to orbital status).
              </p>
              <button
                onClick={() => selectInnovation(orbitalInnovations[0].id)}
                className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 font-semibold block pt-0.5"
              >
                Inspect Orbital Dossier &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
