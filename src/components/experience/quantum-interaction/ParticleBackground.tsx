
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number>(0);

  // Initialize three.js scene for the particle background
  useEffect(() => {
    if (!particleContainerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      particleContainerRef.current.clientWidth / particleContainerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      particleContainerRef.current.clientWidth,
      particleContainerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    particleContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Create positions and colors for particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      colors[i3] = Math.random() * 0.5 + 0.5;     // R: blue to purple range
      colors[i3 + 1] = Math.random() * 0.3;       // G: low
      colors[i3 + 2] = Math.random() * 0.5 + 0.5; // B: high

      sizes[i] = Math.random() * 2 + 1;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    particlesRef.current = particleSystem;

    // Mouse interaction for "electron transition" effect
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      if (!particleContainerRef.current) return;
      
      // Calculate mouse position in normalized device coordinates
      const rect = particleContainerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);

      // Find intersected particles
      const intersects = raycaster.intersectObject(particleSystem);
      
      // Create electron transition effect (pulse particles near mouse)
      if (intersects.length > 0) {
        const positionAttr = particleSystem.geometry.getAttribute('position') as THREE.BufferAttribute;
        const colorAttr = particleSystem.geometry.getAttribute('color') as THREE.BufferAttribute;
        const sizeAttr = particleSystem.geometry.getAttribute('size') as THREE.BufferAttribute;
        
        for (let i = 0; i < positionAttr.count; i++) {
          const x = positionAttr.getX(i);
          const y = positionAttr.getY(i);
          const z = positionAttr.getZ(i);
          
          const distance = Math.sqrt(
            Math.pow(x - intersects[0].point.x, 2) +
            Math.pow(y - intersects[0].point.y, 2) +
            Math.pow(z - intersects[0].point.z, 2)
          );
          
          if (distance < 5) {
            // Increase size and change color for particles near mouse
            sizeAttr.setX(i, Math.min(5, sizeAttr.getX(i) + 0.2));
            colorAttr.setX(i, 0.8); // More purple
            colorAttr.setY(i, 0.2); // A bit of green
            colorAttr.setZ(i, 1.0); // Full blue
          } else {
            // Gradually return to original size and color
            sizeAttr.setX(i, Math.max(sizes[i], sizeAttr.getX(i) * 0.95));
            colorAttr.setX(i, Math.max(colors[i * 3], colorAttr.getX(i) * 0.98));
            colorAttr.setY(i, Math.max(colors[i * 3 + 1], colorAttr.getY(i) * 0.98));
            colorAttr.setZ(i, Math.max(colors[i * 3 + 2], colorAttr.getZ(i) * 0.98));
          }
        }
        
        colorAttr.needsUpdate = true;
        sizeAttr.needsUpdate = true;
      }
    };

    particleContainerRef.current.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0005;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!particleContainerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = 
        particleContainerRef.current.clientWidth / particleContainerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(
        particleContainerRef.current.clientWidth,
        particleContainerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && particleContainerRef.current) {
        particleContainerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      particleContainerRef.current?.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={particleContainerRef} 
      className="absolute inset-0 -z-10"
      style={{ minHeight: '400px' }}
    />
  );
};

export default ParticleBackground;
