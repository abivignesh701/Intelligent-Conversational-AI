import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { NetworkNode } from '../types';

interface NetworkGraph3DProps {
  nodes: NetworkNode[];
  selectedNodeId: string | null;
  onSelectNode: (node: NetworkNode) => void;
  confidenceThreshold: number;
  activeFilters: Record<string, boolean>;
}

export const NetworkGraph3D: React.FC<NetworkGraph3DProps> = ({
  nodes,
  selectedNodeId,
  onSelectNode,
  confidenceThreshold,
  activeFilters,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Clear previous elements
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const filteredNodes = nodes.filter((node) => {
      if (node.confidence < confidenceThreshold) return false;
      if (node.type === 'suspect' && !activeFilters.suspects) return false;
      if (node.type === 'device' && !activeFilters.devices) return false;
      if (node.type === 'vehicle' && !activeFilters.vehicles) return false;
      if (node.type === 'address' && !activeFilters.addresses) return false;
      if (node.type === 'financial' && !activeFilters.financial) return false;
      return true;
    });

    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Create lines between close nodes
    const linePoints: THREE.Vector3[] = [];
    const pointsList = filteredNodes.map((n) => new THREE.Vector3(...n.pos));

    for (let i = 0; i < pointsList.length; i++) {
      for (let j = i + 1; j < pointsList.length; j++) {
        const dist = pointsList[i].distanceTo(pointsList[j]);
        if (dist < 4.2) {
          linePoints.push(pointsList[i], pointsList[j]);
        }
      }
    }

    if (linePoints.length > 0) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.35,
      });
      const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
      graphGroup.add(linesMesh);
    }

    // Colors mapping
    const getColorForType = (type: string) => {
      switch (type) {
        case 'suspect':
          return 0xff5451; // Red
        case 'device':
          return 0x4cd7f6; // Cyan
        case 'vehicle':
          return 0xffb3ad; // Amber / Light red
        case 'address':
          return 0xadc6ff; // Blue
        case 'financial':
          return 0x323539; // Gray
        default:
          return 0x60a5fa;
      }
    };

    // Node Meshes
    const meshesMap = new Map<string, THREE.Mesh>();

    filteredNodes.forEach((node) => {
      const isSelected = node.id === selectedNodeId;
      const radius = isSelected ? 0.22 : node.type === 'suspect' ? 0.16 : 0.11;

      const geometry = new THREE.SphereGeometry(radius, 16, 16);
      const color = getColorForType(node.type);

      const material = new THREE.MeshBasicMaterial({
        color: isSelected ? 0xacedff : color,
        wireframe: isSelected,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(node.pos[0], node.pos[1], node.pos[2]);
      sphere.userData = { node };

      graphGroup.add(sphere);
      meshesMap.set(node.id, sphere);

      // Add small outer halo for primary targets
      if (node.status.includes('PRIMARY') || isSelected) {
        const haloGeo = new THREE.SphereGeometry(radius * 1.8, 12, 12);
        const haloMat = new THREE.MeshBasicMaterial({
          color: 0x4cd7f6,
          transparent: true,
          opacity: 0.25,
          wireframe: true,
        });
        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.position.set(node.pos[0], node.pos[1], node.pos[2]);
        graphGroup.add(halo);
      }
    });

    // Raycasting for node selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(graphGroup.children);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        if (clickedMesh.userData && clickedMesh.userData.node) {
          onSelectNode(clickedMesh.userData.node);
        }
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);

    // Mouse drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      graphGroup.rotation.y += deltaMove.x * 0.005;
      graphGroup.rotation.x += deltaMove.y * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isDragging) {
        graphGroup.rotation.y += 0.0015;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [nodes, selectedNodeId, confidenceThreshold, activeFilters, onSelectNode]);

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};
