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

import { Suspense } from "react";
import { useTexture } from "@react-three/drei";

const HolographicAssets = () => {
  const [indiaMap, peacock, servers] = useTexture([
    "/hologram_india_map.png",
    "/peacock_feather_holo.png",
    "/server_nodes_holo.png"
  ]);

  return (
    <>
      {/* Zone 1: Holographic India Map */}
      <mesh position={[-2, 5, -2]} castShadow receiveShadow>
        <planeGeometry args={[18, 18]} />
        <meshBasicMaterial map={indiaMap} transparent={true} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>

      {/* Zone 2: Peacock Feather (Cultural Tech) */}
      <mesh position={[-6, 6, -5]}>
        <planeGeometry args={[14, 14]} />
        <meshBasicMaterial map={peacock} transparent={true} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>

      {/* Zone 3: Holographic Server Nodes */}
      <mesh position={[2, 6, 5]}>
        <planeGeometry args={[16, 16]} />
        <meshBasicMaterial map={servers} transparent={true} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

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
        {/* Floating Profile Image */}
        <Html position={[0, 6, 2]} center zIndexRange={[100, 0]}>
          <div className="group flex flex-col items-center bg-white/5 p-6 sm:p-8 rounded-[2.5rem] border border-white/20 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,255,255,0.4)] hover:border-cyan-400/50 hover:-translate-y-2 pointer-events-auto transform scale-75 sm:scale-100 origin-center transition-all duration-500">
            <div className="relative rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] transition-shadow duration-500">
              <img src={profileImg.src} alt="Profile" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-black group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-white mt-5 sm:mt-6 font-black text-2xl sm:text-3xl tracking-wide group-hover:text-cyan-200 transition-colors">Adarsh Pathak</p>
            <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mt-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">DevOps Engineer</p>
          </div>
        </Html>
      </group>
      
      <Suspense fallback={null}>
        {/* We place HolographicAssets at the global scope so they aren't bound to the -20 Z of the group */}
        <group position={[0, 0, -20]}>
          <mesh position={[-2, 5, -2]}>
            <planeGeometry args={[18, 18]} />
            {/* The material map will be provided by HolographicAssets */}
          </mesh>
        </group>
        <HolographicAssets />
      </Suspense>

      {/* Floating Tag */}
      <group position={[2, 0, 5]}>
        <Html position={[0, 7, 2]} center>
          <div className="bg-black/40 p-3 sm:p-4 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,102,255,0.2)] pointer-events-auto w-64 transform transition-transform duration-300 origin-center text-center">
            <h3 className="text-blue-400 font-bold text-lg sm:text-xl drop-shadow-md tracking-wider">Hologram Gamma</h3>
            <p className="text-white/80 mt-1 text-xs font-medium uppercase tracking-widest">Tech Nodes</p>
          </div>
        </Html>
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
