
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - using perspective for 3D effect
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    // Fill with random positions and colors
    for (let i = 0; i < particlesCount * 3; i++) {
      // Position (spread out but concentrated on the sides)
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 100;
      // Make y and z more centered, x more spread out to sides
      posArray[i3] = x;
      posArray[i3 + 1] = (Math.random() - 0.5) * 50;
      posArray[i3 + 2] = (Math.random() - 0.5) * 50;
      
      // Create color gradient with purples and blues
      const ci3 = i * 3;
      colorArray[ci3] = 0.7 + Math.random() * 0.3; // High red (for purple)
      colorArray[ci3 + 1] = 0.4 * Math.random(); // Low-med green
      colorArray[ci3 + 2] = 0.8 + Math.random() * 0.2; // High blue
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // Create points mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Additional ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Connecting lines for nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.2
    });
    
    const linesMesh = new THREE.Group();
    scene.add(linesMesh);
    
    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0
    };
    
    document.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles slowly
      particlesMesh.rotation.y += 0.001;
      
      // Mouse interaction effect - move particles slightly toward mouse
      particlesMesh.rotation.x += mouse.y * 0.0005;
      particlesMesh.rotation.y += mouse.x * 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineMaterial.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeJSBackground;
