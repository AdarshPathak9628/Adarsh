"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Html, Image } from "@react-three/drei";
import profileImg from "../src/assets/images/My profile image.png";
import oracleCert from "../src/assets/images/ODBCS25CP.jpeg";

const MapOfIndia = () => {
  return (
    <group>
      {/* Base Map Abstract Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      
      {/* Zone 1: North (Mountains) */}
      <group position={[0, 0, -20]}>
        <mesh position={[-2, 2, -2]} castShadow>
          <coneGeometry args={[3, 8, 4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.8} />
        </mesh>
        <mesh position={[2, 3, 0]} castShadow>
          <coneGeometry args={[4, 10, 4]} />
          <meshStandardMaterial color="#dddddd" roughness={0.8} />
        </mesh>
        {/* Floating Profile Image */}
        <Html position={[0, 6, 2]} center>
          <div className="flex flex-col items-center bg-black/50 p-4 rounded-xl border border-white/20 backdrop-blur-md pointer-events-auto">
            <img src={profileImg.src} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-blue-400" />
            <p className="text-white mt-2 font-bold text-xl">Adarsh Pathak</p>
          </div>
        </Html>
      </group>
      
      {/* Zone 2: Delhi (India Gate & Purana Qila) */}
      <group position={[-5, 0, -5]}>
        {/* India Gate Abstract */}
        <mesh position={[0, 3, 0]} castShadow>
          <boxGeometry args={[4, 6, 2]} />
          <meshStandardMaterial color="#d4a373" />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[2, 4, 2.1]} />
          <meshStandardMaterial color="#111111" /> {/* Cutout effect */}
        </mesh>
        {/* Purana Qila Abstract */}
        <mesh position={[4, 2, -3]} castShadow>
          <cylinderGeometry args={[1.5, 1.5, 4, 8]} />
          <meshStandardMaterial color="#8b5a2b" />
        </mesh>
      </group>
      
      {/* Zone 3: UP Hub (Ram Mandir & Maha Kumbh) */}
      <group position={[2, 0, 5]}>
        {/* Ram Mandir Abstract */}
        <mesh position={[0, 2, 0]} castShadow>
          <boxGeometry args={[6, 4, 6]} />
          <meshStandardMaterial color="#f4a261" />
        </mesh>
        <mesh position={[0, 5, 0]} castShadow>
          <coneGeometry args={[3, 6, 4]} />
          <meshStandardMaterial color="#e76f51" />
        </mesh>
        {/* Floating Certificate */}
        <Html position={[0, 7, 3]} center>
          <div className="bg-black/50 p-4 rounded-xl border border-yellow-500/50 backdrop-blur-md pointer-events-auto w-64 transform hover:scale-110 transition-transform">
            <img src={oracleCert.src} alt="Oracle Cert" className="w-full rounded-md" />
            <p className="text-yellow-400 mt-2 font-bold text-center text-sm">Oracle Cloud Certified</p>
          </div>
        </Html>
      </group>
      
      {/* Zone 4: East (Howrah Bridge) */}
      <group position={[15, 0, 10]}>
        {/* Howrah Bridge Abstract */}
        <mesh position={[-3, 4, 0]} castShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshStandardMaterial color="#7f8c8d" />
        </mesh>
        <mesh position={[3, 4, 0]} castShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshStandardMaterial color="#7f8c8d" />
        </mesh>
        <mesh position={[0, 6, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <boxGeometry args={[1, 6, 0.5]} />
          <meshStandardMaterial color="#95a5a6" />
        </mesh>
        <mesh position={[0, 2, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshStandardMaterial color="#34495e" />
        </mesh>
      </group>
    </group>
  );
};

const CameraAndLighting = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const { scene } = useThree();

  useEffect(() => {
    if (!cameraRef.current || !ambientLightRef.current || !directionalLightRef.current) return;
    
    const cam = cameraRef.current;
    
    // Set initial position (North)
    cam.position.set(0, 5, -30);
    cam.lookAt(0, 0, -20);

    // Initial Scene Colors
    const initialColor = new THREE.Color("#87CEEB"); // Sky-blue fog
    scene.background = initialColor.clone();
    scene.fog = new THREE.Fog(initialColor.clone(), 10, 50);
    
    // Create ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // smooth scrubbing
      }
    });
    
    // Timeline Zone 1 -> Zone 2 (Delhi/J&K)
    tl.to(cam.position, { x: -5, y: 5, z: -10, ease: "power1.inOut" }, 0)
      .to(cam.rotation, { x: -0.5, y: 0.2, z: 0, ease: "power1.inOut" }, 0)
      .to(scene.background, { r: 0.1, g: 0.3, b: 0.1, ease: "power1.inOut" }, 0) // Vibrant green
      .to(scene.fog.color, { r: 0.1, g: 0.3, b: 0.1, ease: "power1.inOut" }, 0)
      .to(ambientLightRef.current, { intensity: 0.7, ease: "power1.inOut" }, 0)
      .to(directionalLightRef.current.color, { r: 0.6, g: 1.0, b: 0.6, ease: "power1.inOut" }, 0);
      
    // Timeline Zone 2 -> Zone 3 (UP Hub)
    tl.to(cam.position, { x: 2, y: 6, z: 10, ease: "power1.inOut" })
      .to(cam.rotation, { x: -0.4, y: -0.2, z: 0, ease: "power1.inOut" }, "<")
      .to(scene.background, { r: 0.8, g: 0.4, b: 0.1, ease: "power1.inOut" }, "<") // Golden-hour orange/yellow
      .to(scene.fog.color, { r: 0.8, g: 0.4, b: 0.1, ease: "power1.inOut" }, "<")
      .to(ambientLightRef.current, { intensity: 0.8, ease: "power1.inOut" }, "<")
      .to(directionalLightRef.current.color, { r: 1.0, g: 0.8, b: 0.4, ease: "power1.inOut" }, "<");
      
    // Timeline Zone 3 -> Zone 4 (East)
    tl.to(cam.position, { x: 15, y: 5, z: 20, ease: "power1.inOut" })
      .to(cam.rotation, { x: -0.3, y: -0.5, z: 0, ease: "power1.inOut" }, "<")
      .to(scene.background, { r: 0.1, g: 0.1, b: 0.3, ease: "power1.inOut" }, "<") // Twilight blue
      .to(scene.fog.color, { r: 0.1, g: 0.1, b: 0.3, ease: "power1.inOut" }, "<")
      .to(ambientLightRef.current, { intensity: 0.4, ease: "power1.inOut" }, "<")
      .to(directionalLightRef.current.color, { r: 0.3, g: 0.4, b: 0.8, ease: "power1.inOut" }, "<");
      
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [scene]);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={60} />
      <ambientLight ref={ambientLightRef} intensity={0.5} />
      <directionalLight ref={directionalLightRef} position={[10, 10, 5]} intensity={1} castShadow />
    </>
  );
};

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black">
      <Canvas shadows>
        <CameraAndLighting />
        <MapOfIndia />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
