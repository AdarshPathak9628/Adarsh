"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../src/assets/images/My profile image.png";
import oracleCert from "../src/assets/images/ODBCS25CP.jpeg";

gsap.registerPlugin(ScrollTrigger);

const MapOfIndia = () => {
  return (
    <group>
      {/* Base Map Abstract Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshPhysicalMaterial color="#050505" metalness={0.9} roughness={0.4} clearcoat={0.1} />
      </mesh>
      
      {/* Grid Helper for Cyberpunk Vibe */}
      <gridHelper args={[100, 100, "#112233", "#050505"]} position={[0, -1.9, 0]} />
      
      {/* Zone 1: North (Mountains) */}
      <group position={[0, 0, -20]}>
        <mesh position={[-2, 2, -2]} castShadow receiveShadow>
          <coneGeometry args={[3, 8, 4]} />
          <meshPhysicalMaterial color="#ffffff" metalness={0.7} roughness={0.2} emissive="#4488ff" emissiveIntensity={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[2, 3, 0]} castShadow receiveShadow>
          <coneGeometry args={[4, 10, 4]} />
          <meshPhysicalMaterial color="#dddddd" metalness={0.6} roughness={0.3} emissive="#4488ff" emissiveIntensity={0.1} clearcoat={1} />
        </mesh>
        {/* Floating Profile Image */}
        <Html position={[0, 6, 2]} center>
          <div className="flex flex-col items-center bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] pointer-events-auto transform scale-75 sm:scale-100 origin-center transition-transform">
            <img src={profileImg.src} alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
            <p className="text-white mt-3 sm:mt-4 font-bold text-xl sm:text-2xl drop-shadow-md">Adarsh Pathak</p>
          </div>
        </Html>
      </group>
      
      {/* Zone 2: Delhi (India Gate) */}
      <group position={[-5, 0, -5]}>
        {/* India Gate Abstract */}
        <mesh position={[0, 3, 0]} castShadow receiveShadow>
          <boxGeometry args={[4, 6, 2]} />
          <meshPhysicalMaterial color="#2d3436" metalness={0.8} roughness={0.2} emissive="#00ff88" emissiveIntensity={0.15} clearcoat={0.8} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[2, 4, 2.1]} />
          <meshPhysicalMaterial color="#000000" metalness={1} roughness={0} /> {/* Cutout effect */}
        </mesh>
      </group>
      
      {/* Zone 3: Kings of UP Hub (Ram Mandir, Purana Qila, Maha Kumbh) */}
      <group position={[2, 0, 5]}>
        {/* Ram Mandir Abstract (Majestic Scale) */}
        <mesh position={[0, 3, 0]} castShadow receiveShadow>
          <boxGeometry args={[8, 6, 8]} />
          <meshPhysicalMaterial color="#4a3000" metalness={0.9} roughness={0.1} emissive="#ffaa00" emissiveIntensity={0.4} clearcoat={1} />
        </mesh>
        <mesh position={[0, 7.5, 0]} castShadow receiveShadow>
          <coneGeometry args={[4, 9, 4]} />
          <meshPhysicalMaterial color="#5a2000" metalness={0.8} roughness={0.2} emissive="#ff5500" emissiveIntensity={0.6} clearcoat={1} />
        </mesh>
        {/* Purana Qila Abstract (Moved to UP Hub, Majestic Scale) */}
        <mesh position={[7, 3, -4]} castShadow receiveShadow>
          <cylinderGeometry args={[2.5, 2.5, 6, 8]} />
          <meshPhysicalMaterial color="#2d3436" metalness={0.9} roughness={0.2} emissive="#ff3300" emissiveIntensity={0.3} clearcoat={0.8} />
        </mesh>
        <mesh position={[7, 7, -4]} castShadow receiveShadow>
          <coneGeometry args={[3, 4, 8]} />
          <meshPhysicalMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} emissive="#ff3300" emissiveIntensity={0.2} />
        </mesh>
        {/* Floating Certificate (Kept as placeholder or removed since we have a modal now) */}
        <Html position={[0, 10, 4]} center>
          <div className="bg-white/5 p-3 sm:p-4 rounded-3xl border border-orange-500/50 backdrop-blur-xl shadow-[0_0_50px_rgba(255,165,0,0.3)] pointer-events-auto w-64 sm:w-72 transform scale-75 sm:scale-100 hover:scale-105 sm:hover:scale-105 transition-transform duration-300 origin-center text-center">
            <h3 className="text-orange-400 font-black text-xl sm:text-2xl drop-shadow-md uppercase tracking-widest">Kings of UP</h3>
            <p className="text-white mt-1 text-sm font-bold opacity-80">The Majestic Hub</p>
          </div>
        </Html>
      </group>
      
      {/* Zone 4: East (Howrah Bridge) */}
      <group position={[15, 0, 10]}>
        {/* Howrah Bridge Abstract */}
        <mesh position={[-3, 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshPhysicalMaterial color="#1a252c" metalness={0.9} roughness={0.1} emissive="#0088ff" emissiveIntensity={0.1} clearcoat={1} />
        </mesh>
        <mesh position={[3, 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshPhysicalMaterial color="#1a252c" metalness={0.9} roughness={0.1} emissive="#0088ff" emissiveIntensity={0.1} clearcoat={1} />
        </mesh>
        <mesh position={[0, 6, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <boxGeometry args={[1, 6, 0.5]} />
          <meshPhysicalMaterial color="#2a354c" metalness={0.8} roughness={0.2} emissive="#0055ff" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </group>
  );
};

const CameraAndLighting = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const { scene } = useThree();

  useEffect(() => {
    // Cinematic Fog and Background (Deeper colors)
    const initialBgColor = new THREE.Color("#020617"); // Deep slate blue
    scene.background = initialBgColor;
    scene.fog = new THREE.FogExp2(initialBgColor, 0.03);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smoother scrub
      },
    });

    // Camera Waypoints
    const waypoints = [
      { x: 0, y: 8, z: -10 },   // North
      { x: -5, y: 6, z: 2 },    // Delhi
      { x: 2, y: 6, z: 12 },    // UP Hub
      { x: 15, y: 10, z: 20 },  // East
    ];

    // Cinematic Environmental Colors
    const colors = [
      new THREE.Color("#020617"), // North (Deep slate blue)
      new THREE.Color("#021a11"), // Delhi (Dark emerald green)
      new THREE.Color("#1f0d00"), // UP Hub (Deep molten orange)
      new THREE.Color("#081220"), // East (Deep navy twilight)
    ];

    // Initialize point light on camera
    if (pointLightRef.current) {
      pointLightRef.current.position.set(0, 8, -10);
    }

    waypoints.forEach((point, index) => {
      // Camera Fly-through
      tl.to(
        cameraRef.current!.position,
        {
          x: point.x,
          y: point.y,
          z: point.z,
          ease: "power2.inOut",
        },
        index * 2
      );

      // Follow Light
      tl.to(
        pointLightRef.current!.position,
        {
          x: point.x,
          y: point.y + 2,
          z: point.z,
          ease: "power2.inOut",
        },
        index * 2
      );

      // Environment Color Shifts
      if (index > 0) {
        tl.to(
          scene.background,
          {
            r: colors[index].r,
            g: colors[index].g,
            b: colors[index].b,
            ease: "none",
          },
          (index - 0.5) * 2
        );
        tl.to(
          (scene.fog as THREE.FogExp2).color,
          {
            r: colors[index].r,
            g: colors[index].g,
            b: colors[index].b,
            ease: "none",
          },
          (index - 0.5) * 2
        );
        tl.to(
          ambientLightRef.current!.color,
          {
            r: colors[index].r,
            g: colors[index].g,
            b: colors[index].b,
            ease: "none",
          },
          (index - 0.5) * 2
        );
      }
    });

    return () => {
      tl.kill();
    };
  }, [scene]);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 8, -10]} fov={60} />
      <ambientLight ref={ambientLightRef} intensity={1.5} color="#020617" />
      <directionalLight
        ref={directionalLightRef}
        position={[10, 20, 10]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color="#ffffff"
      />
      <pointLight ref={pointLightRef} intensity={5} distance={20} color="#ffffff" decay={2} />
    </>
  );
};

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black">
      <Canvas shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}>
        <CameraAndLighting />
        <MapOfIndia />
      </Canvas>
    </div>
  );
}
