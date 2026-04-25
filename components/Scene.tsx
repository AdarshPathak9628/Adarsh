"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MapOfIndia = () => {
  return (
    <group>
      {/* Base Map Abstract Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      
      {/* Zone 1: North */}
      <mesh position={[0, 0, -20]} castShadow>
        <boxGeometry args={[4, 8, 4]} />
        <meshStandardMaterial color="#88ccff" />
      </mesh>
      
      {/* Zone 2: Delhi */}
      <mesh position={[-5, 0, -5]} castShadow>
        <boxGeometry args={[3, 4, 3]} />
        <meshStandardMaterial color="#44ff44" />
      </mesh>
      
      {/* Zone 3: UP Hub */}
      <mesh position={[2, 0, 5]} castShadow>
        <boxGeometry args={[5, 6, 5]} />
        <meshStandardMaterial color="#ffaa00" />
      </mesh>
      
      {/* Zone 4: East */}
      <mesh position={[15, 0, 10]} castShadow>
        <boxGeometry args={[4, 5, 4]} />
        <meshStandardMaterial color="#3333ff" />
      </mesh>
    </group>
  );
};

export default function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useEffect(() => {
    if (!cameraRef.current) return;
    
    const cam = cameraRef.current;
    
    // Set initial position (North)
    cam.position.set(0, 5, -30);
    cam.lookAt(0, 0, -20);
    
    // Create ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // smooth scrubbing
      }
    });
    
    // Move to Delhi
    tl.to(cam.position, { x: -5, y: 5, z: -10, ease: "power1.inOut" }, 0)
      .to(cam.rotation, { x: -0.5, y: 0.2, z: 0, ease: "power1.inOut" }, 0);
      
    // Move to UP Hub
    tl.to(cam.position, { x: 2, y: 6, z: 10, ease: "power1.inOut" })
      .to(cam.rotation, { x: -0.4, y: -0.2, z: 0, ease: "power1.inOut" }, "<");
      
    // Move to East
    tl.to(cam.position, { x: 15, y: 5, z: 20, ease: "power1.inOut" })
      .to(cam.rotation, { x: -0.3, y: -0.5, z: 0, ease: "power1.inOut" }, "<");
      
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black">
      <Canvas shadows>
        <PerspectiveCamera ref={cameraRef} makeDefault fov={60} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <MapOfIndia />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
