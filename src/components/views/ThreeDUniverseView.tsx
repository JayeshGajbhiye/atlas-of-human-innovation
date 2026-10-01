import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useAtlas } from '../../context/AtlasContext';
import { DOMAINS } from '../../data/domains';
import { Innovation } from '../../types/innovation';
import { Boxes } from 'lucide-react';

export const ThreeDUniverseView: React.FC = () => {
  const {
    filteredInnovations,
    allRelationships,
    selectedInnovationId,
    selectInnovation,
  } = useAtlas();

  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<Innovation | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08090d);
    scene.fog = new THREE.FogExp2(0x08090d, 0.0018);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2500);
    camera.position.set(0, 80, 260);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 1.8, 1200);
    pointLight.position.set(0, 100, 100);
    scene.add(pointLight);

    // Background Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1200;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 1600;
      starPositions[i + 1] = (Math.random() - 0.5) * 1600;
      starPositions[i + 2] = (Math.random() - 0.5) * 1600;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0x475569, size: 1.5, transparent: true, opacity: 0.6 });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Map innovation data to 3D coordinates:
    // Z-axis: Chronological time (from -250 for ancient prehistory to +250 for modern AI)
    // X & Y axes: Clustered by Domain angle + radius
    const domainKeys = Object.keys(DOMAINS);
    const domainAngles = new Map<string, number>();
    domainKeys.forEach((key, idx) => {
      domainAngles.set(key, (idx / domainKeys.length) * Math.PI * 2);
    });

    const nodeObjects: { mesh: THREE.Mesh; innovation: Innovation }[] = [];
    const nodeCoords = new Map<string, THREE.Vector3>();

    // Sort innovations to normalize Z
    const sorted = [...filteredInnovations].sort((a, b) => a.date_numeric - b.date_numeric);

    sorted.forEach((inv, index) => {
      // Non-linear time mapping to give room to ancient and modern
      const normalizedTime = index / Math.max(1, sorted.length - 1);
      const z = -220 + normalizedTime * 440;

      const angle = domainAngles.get(inv.domain) || 0;
      const radius = 45 + ((inv.name.length * 7) % 55);
      const x = Math.cos(angle) * radius + (Math.sin(index) * 12);
      const y = Math.sin(angle) * radius + (Math.cos(index) * 12);

      const pos = new THREE.Vector3(x, y, z);
      nodeCoords.set(inv.id, pos);

      const domain = DOMAINS[inv.domain] || DOMAINS.FOUNDATIONAL;
      const isSelected = inv.id === selectedInnovationId;

      const sphereGeo = new THREE.SphereGeometry(isSelected ? 5.5 : 3.8, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(domain.color),
        emissive: new THREE.Color(isSelected ? 0x00f0ff : domain.color),
        emissiveIntensity: isSelected ? 0.9 : 0.45,
        roughness: 0.3,
        metalness: 0.2,
      });

      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      mesh.position.copy(pos);
      mesh.userData = { id: inv.id, innovation: inv };

      scene.add(mesh);
      nodeObjects.push({ mesh, innovation: inv });
    });

    // Draw 3D Connecting Lines for Relationships
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    allRelationships.forEach(rel => {
      const srcPos = nodeCoords.get(rel.source);
      const tgtPos = nodeCoords.get(rel.target);
      if (srcPos && tgtPos) {
        linePositions.push(srcPos.x, srcPos.y, srcPos.z);
        linePositions.push(tgtPos.x, tgtPos.y, tgtPos.z);

        const isHighlighted = 
          selectedInnovationId && 
          (rel.source === selectedInnovationId || rel.target === selectedInnovationId);

        if (isHighlighted) {
          lineColors.push(0, 0.94, 1.0);
          lineColors.push(0, 0.94, 1.0);
        } else {
          lineColors.push(0.3, 0.35, 0.45);
          lineColors.push(0.3, 0.35, 0.45);
        }
      }
    });

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      linewidth: 1,
    });

    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    scene.add(linesMesh);

    // Mouse Interaction / Orbit Controls emulation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0;
    let currentRotationX = 0.2;
    let currentRotationY = 0;
    let cameraDistance = 320;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        targetRotationX = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, targetRotationX));
      }

      // Raycasting for hover tooltip
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

      const meshes = nodeObjects.map(no => no.mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        setHoveredNode(hitMesh.userData.innovation);
        setHoverPos({ x: e.clientX, y: e.clientY });
        container.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        setHoverPos(null);
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraDistance += e.deltaY * 0.4;
      cameraDistance = Math.max(60, Math.min(800, cameraDistance));
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

      const meshes = nodeObjects.map(no => no.mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        selectInnovation(hitMesh.userData.id);
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('click', onClick);

    // Animation Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      camera.position.x = Math.sin(currentRotationY) * Math.cos(currentRotationX) * cameraDistance;
      camera.position.y = Math.sin(currentRotationX) * cameraDistance;
      camera.position.z = Math.cos(currentRotationY) * Math.cos(currentRotationX) * cameraDistance;
      camera.lookAt(0, 0, 0);

      // Subtle slow rotation
      if (!isDragging) {
        targetRotationY += 0.0006;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [filteredInnovations, allRelationships, selectedInnovationId, selectInnovation]);

  return (
    <div className="relative w-full h-full bg-[#08090d] select-none overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing block" />

      {/* Floating HUD info */}
      <div className="absolute top-4 left-4 z-10 bg-[#0c0e15]/85 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl max-w-xs text-xs space-y-1.5">
        <div className="flex items-center space-x-2 text-cyan-400 font-mono font-semibold">
          <Boxes className="w-4 h-4" />
          <span>3D Innovation Universe</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Spatial coordinate field: Time progresses along the Z-axis (Prehistory in deep background, AI Era in foreground). Left-click and drag to rotate, scroll to zoom.
        </p>
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/10">
          <span>WebGL 60FPS</span>
          <span className="text-cyan-400">Raycast Enabled</span>
        </div>
      </div>

      {/* Hover Node Tooltip */}
      {hoveredNode && hoverPos && (
        <div
          className="fixed pointer-events-none z-40 bg-[#0f121d] border border-cyan-500/40 rounded-lg p-2.5 shadow-2xl max-w-xs text-xs space-y-1 transform -translate-x-1/2 -translate-y-full mb-3 select-none"
          style={{ left: hoverPos.x, top: hoverPos.y }}
        >
          <div className="flex items-center space-x-2">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: DOMAINS[hoveredNode.domain]?.color }}
            ></span>
            <span className="font-semibold text-slate-100">{hoveredNode.name}</span>
          </div>
          <div className="text-[10px] font-mono text-cyan-400">{hoveredNode.date} • {hoveredNode.civilization}</div>
          <p className="text-[11px] text-slate-300 line-clamp-2">{hoveredNode.overview}</p>
        </div>
      )}
    </div>
  );
};
