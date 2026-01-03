
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export const Drone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const droneGroupRef = useRef<THREE.Group | null>(null);
  const propellersRef = useRef<THREE.Mesh[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    // Making the drone container larger
    const size = Math.min(window.innerWidth * 0.6, 600);
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting - Cinematic setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfbbf24, 1.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const rimLight = new THREE.PointLight(0x60a5fa, 2, 20);
    rimLight.position.set(-5, 0, -5);
    scene.add(rimLight);

    // Create 3D Drone Model (Increased scale)
    const droneGroup = new THREE.Group();
    droneGroupRef.current = droneGroup;

    // Main Body
    const bodyGeometry = new THREE.BoxGeometry(2, 0.6, 2);
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1.0,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    droneGroup.add(body);

    // Accent Saffron Strip
    const accentGeo = new THREE.BoxGeometry(2.05, 0.1, 0.8);
    const accentMat = new THREE.MeshStandardMaterial({ 
      color: 0xfbbf24, 
      emissive: 0xfbbf24, 
      emissiveIntensity: 0.8 
    });
    const accent = new THREE.Mesh(accentGeo, accentMat);
    accent.position.y = 0.2;
    droneGroup.add(accent);

    // Camera/Sensor Housing
    const sensorGeo = new THREE.CylinderGeometry(0.5, 0.7, 0.4, 32);
    const sensor = new THREE.Mesh(sensorGeo, bodyMaterial);
    sensor.position.y = 0.4;
    droneGroup.add(sensor);

    // Glowing Sensor Lens
    const lensGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const lensMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(0, 0.2, 1);
    droneGroup.add(lens);

    // Arms (Rugged design)
    const armMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.3 });
    const armGeo = new THREE.BoxGeometry(0.15, 0.15, 2.5);
    
    const arm1 = new THREE.Mesh(armGeo, armMat);
    arm1.rotation.y = Math.PI / 4;
    droneGroup.add(arm1);

    const arm2 = new THREE.Mesh(armGeo, armMat);
    arm2.rotation.y = -Math.PI / 4;
    droneGroup.add(arm2);

    // Motors and Propellers
    const motorGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.3, 16);
    const propGeo = new THREE.BoxGeometry(1.2, 0.02, 0.1);
    const propMat = new THREE.MeshStandardMaterial({ color: 0x334155, transparent: true, opacity: 0.7 });

    const propPositions = [
      [1.2, 0.2, 1.2],
      [-1.2, 0.2, 1.2],
      [1.2, 0.2, -1.2],
      [-1.2, 0.2, -1.2]
    ];

    propPositions.forEach((pos) => {
      const motor = new THREE.Mesh(motorGeo, armMat);
      motor.position.set(pos[0], pos[1] - 0.1, pos[2]);
      droneGroup.add(motor);

      const prop = new THREE.Mesh(propGeo, propMat);
      prop.position.set(pos[0], pos[1], pos[2]);
      droneGroup.add(prop);
      propellersRef.current.push(prop);
    });

    scene.add(droneGroup);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();

      // Spin propellers at high speed
      propellersRef.current.forEach((p) => {
        p.rotation.y += 0.8;
      });

      // Interactive mouse tilting
      targetRotation.current.y = mouse.current.x * 0.5;
      targetRotation.current.x = -mouse.current.y * 0.3;

      if (droneGroup) {
        // Smooth interpolation for mouse follow
        droneGroup.rotation.y += (targetRotation.current.y - droneGroup.rotation.y) * 0.05;
        droneGroup.rotation.x += (targetRotation.current.x - droneGroup.rotation.x) * 0.05;
        
        // Vertical hover oscillation
        droneGroup.position.y += Math.sin(delta * 2) * 0.005;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Mouse Tracking for "Moveable" effect
    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Scroll-driven path choreography
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    tl.to(droneGroup.position, { x: 5, y: -2, z: -3 })
      .to(droneGroup.position, { x: -6, y: -8, z: 2 })
      .to(droneGroup.position, { x: 4, y: -15, z: -1 })
      .to(droneGroup.position, { x: 0, y: -22, z: 0 });

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const newSize = Math.min(window.innerWidth * 0.6, 600);
      rendererRef.current.setSize(newSize, newSize);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none w-full max-w-[600px] aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Dynamic floor shadow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/40 rounded-full blur-3xl" />
    </div>
  );
};
