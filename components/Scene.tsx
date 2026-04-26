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
      
      {/* Zone 1: Cloud Node Alpha (Global Architecture) */}
      <group position={[0, 0, -20]}>
        {/* Core Node */}
        <mesh position={[-2, 3, -2]} castShadow receiveShadow>
          <icosahedronGeometry args={[3, 1]} />
          <meshPhysicalMaterial color="#ffffff" metalness={0.9} roughness={0.1} emissive="#00bfff" emissiveIntensity={0.2} clearcoat={1} wireframe={true} />
        </mesh>
        <mesh position={[-2, 3, -2]}>
          <icosahedronGeometry args={[2.5, 2]} />
          <meshPhysicalMaterial color="#0a0a0a" metalness={0.8} roughness={0.5} />
        </mesh>
        {/* Floating Profile Image */}
        <Html position={[0, 6, 2]} center>
          <div className="flex flex-col items-center bg-black/40 p-4 sm:p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,255,255,0.15)] pointer-events-auto transform scale-75 sm:scale-100 origin-center transition-transform">
            <img src={profileImg.src} alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.4)]" />
            <p className="text-white mt-3 sm:mt-4 font-bold text-xl sm:text-2xl tracking-wide">Adarsh Pathak</p>
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mt-1">DevOps Engineer</p>
          </div>
        </Html>
      </group>
      
      {/* Zone 2: Data Pipeline Beta (Integration & Flow) */}
      <group position={[-5, 0, -5]}>
        {/* Server Rack Representation */}
        <mesh position={[0, 3, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 6, 1.5]} />
          <meshPhysicalMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} emissive="#00e5ff" emissiveIntensity={0.15} clearcoat={0.5} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[2.8, 0.2, 1.6]} />
          <meshPhysicalMaterial color="#000000" metalness={1} roughness={0} emissive="#00e5ff" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 3.5, 0]}>
          <boxGeometry args={[2.8, 0.2, 1.6]} />
          <meshPhysicalMaterial color="#000000" metalness={1} roughness={0} emissive="#00e5ff" emissiveIntensity={0.8} />
        </mesh>
      </group>
      
      {/* Zone 3: Server Cluster Gamma (Scalability & DevOps) */}
      <group position={[2, 0, 5]}>
        {/* Main Cluster Node */}
        <mesh position={[0, 3, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2.5, 2.5, 5, 32]} />
          <meshPhysicalMaterial color="#111111" metalness={0.9} roughness={0.1} emissive="#0066ff" emissiveIntensity={0.3} clearcoat={1} />
        </mesh>
        {/* Orbiting Satellite/Node */}
        <mesh position={[4, 5, -2]} castShadow receiveShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial color="#2d3436" metalness={0.9} roughness={0.2} emissive="#00ffff" emissiveIntensity={0.4} clearcoat={0.8} />
        </mesh>
        {/* Floating Tag */}
        <Html position={[0, 7, 2]} center>
          <div className="bg-black/40 p-3 sm:p-4 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,102,255,0.2)] pointer-events-auto w-64 transform transition-transform duration-300 origin-center text-center">
            <h3 className="text-blue-400 font-bold text-lg sm:text-xl drop-shadow-md tracking-wider">Cluster Gamma</h3>
            <p className="text-white/80 mt-1 text-xs font-medium uppercase tracking-widest">Scalability Node</p>
          </div>
        </Html>
      </group>
      
      {/* Zone 4: Terminal Hub Delta */}
      <group position={[15, 0, 10]}>
        {/* Abstract Microservices Nodes */}
        <mesh position={[-3, 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshPhysicalMaterial color="#0a0f14" metalness={0.9} roughness={0.1} emissive="#00ffff" emissiveIntensity={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[3, 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 8, 2]} />
          <meshPhysicalMaterial color="#0a0f14" metalness={0.9} roughness={0.1} emissive="#00ffff" emissiveIntensity={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[0, 6, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.5, 6, 16]} />
          <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0.2} emissive="#0066ff" emissiveIntensity={0.5} />
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

    // Cinematic Environmental Colors (Corporate/Tech Vibe)
    const colors = [
      new THREE.Color("#020617"), // Node Alpha (Deep slate blue)
      new THREE.Color("#010a14"), // Pipeline Beta (Dark cyan-blue)
      new THREE.Color("#00081a"), // Cluster Gamma (Deepest navy)
      new THREE.Color("#050510"), // Terminal Delta (Void black-blue)
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
