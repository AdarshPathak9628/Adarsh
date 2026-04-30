"use client";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { useRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import profileImg from "../src/assets/images/My profile image.png";

gsap.registerPlugin(ScrollTrigger);

/* ─── Floating Particles ─── */
const FloatingParticles = ({ count = 150, area = 70, color = "#0c4a6e" }: { count?: number; area?: number; color?: string }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * area;
      arr[i * 3 + 1] = Math.random() * 25;
      arr[i * 3 + 2] = (Math.random() - 0.5) * area;
    }
    return arr;
  }, [count, area]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color={color} transparent opacity={0.4} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

/* ─── Subtle Wireframe Sphere ─── */
const WireframeSphere = ({ position, radius = 4, color = "#0c4a6e" }: { position: [number, number, number]; radius?: number; color?: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.08;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[radius, 2]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

/* ─── Slow Orbit Ring ─── */
const OrbitRing = ({ position, radius = 5, color = "#164e63", speed = 0.15 }: { position: [number, number, number]; radius?: number; color?: string; speed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
      ref.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.03, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

/* ─── Profile Card with Dynamic Positioning ─── */
const ProfileCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  // Hero and Education target positions
  const heroPos = useMemo(() => new THREE.Vector3(0, 6, 2), []);
  const eduPos = useMemo(() => new THREE.Vector3(8, 6, 5), []); // Offset to the right for Education section
  
  useFrame(() => {
    if (meshRef.current) {
      // Calculate interpolation factor based on camera Z position
      // Camera Z goes from -10 (Hero) to 2 (Education)
      const t = THREE.MathUtils.smoothstep(camera.position.z, -10, 2);
      
      // Interpolate position
      meshRef.current.position.lerpVectors(heroPos, eduPos, t);
      
      // Fade slightly as we transition to keep it subtle
      if (ref.current) {
        const opacity = 1 - (t * 0.2); // Stay mostly visible
        ref.current.style.opacity = String(opacity);
      }
    }
  });

  return (
    <group ref={meshRef} position={[0, 6, 2]}>
      <Html center zIndexRange={[200, 0]}>
        <div ref={ref} className="group flex flex-col items-center bg-white/5 p-6 sm:p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,150,200,0.1)] hover:shadow-[0_0_50px_rgba(0,200,255,0.3)] hover:border-cyan-500/40 pointer-events-auto transform scale-75 sm:scale-90 lg:scale-100 origin-center transition-all duration-500">
          <div className="relative rounded-full p-[3px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(0,150,200,0.3)] group-hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] transition-shadow duration-500">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-black">
              <img src={profileImg.src} alt="Adarsh Pathak" className="w-full h-full rounded-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <p className="text-white mt-5 sm:mt-6 font-black text-xl sm:text-2xl tracking-wide group-hover:text-cyan-200 transition-colors">Adarsh Pathak</p>
          <p className="text-cyan-500 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mt-2">DevOps Engineer</p>
        </div>
      </Html>
    </group>
  );
};

/* ─── Main Scene ─── */
const SceneContent = () => {
  return (
    <group>
      {/* Base Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshPhysicalMaterial color="#030712" metalness={0.95} roughness={0.5} clearcoat={0.05} />
      </mesh>
      
      {/* Very Subtle Grid */}
      <gridHelper args={[100, 80, "#0a1628", "#050a12"]} position={[0, -1.95, 0]} />

      {/* ── Zone 1: Hero ── */}
      <group position={[0, 0, -20]}>
        <WireframeSphere position={[-5, 5, -4]} radius={6} color="#0c4a6e" />
        <OrbitRing position={[-5, 5, -4]} radius={8} color="#155e75" speed={0.1} />
        <ProfileCard />
      </group>

      {/* ── Zone 2: Education ── */}
      <group position={[-5, 0, -5]}>
        <WireframeSphere position={[0, 5, 0]} radius={3.5} color="#312e81" />
        <OrbitRing position={[0, 5, 0]} radius={5} color="#4338ca" speed={0.12} />
      </group>

      {/* ── Zone 3: Experience ── */}
      <group position={[2, 0, 5]}>
        <WireframeSphere position={[0, 4, 0]} radius={3} color="#1e3a5f" />
        <OrbitRing position={[0, 4, 0]} radius={4.5} color="#1e40af" speed={0.08} />
      </group>

      {/* ── Zone 4: Projects ── */}
      <group position={[15, 0, 10]}>
        <WireframeSphere position={[0, 5, 0]} radius={3} color="#164e63" />
        <OrbitRing position={[0, 5, 0]} radius={4.5} color="#0e7490" speed={0.1} />
      </group>

      {/* Particles */}
      <FloatingParticles count={120} area={70} color="#0c4a6e" />
    </group>
  );
};

/* ─── Camera & Lighting ─── */
const CameraAndLighting = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const { scene } = useThree();

  const { theme } = useTheme();
  
  useEffect(() => {
    const isDark = theme === "dark";
    const initialBgColor = new THREE.Color(isDark ? "#020617" : "#f8fafc");
    scene.background = initialBgColor;
    scene.fog = new THREE.FogExp2(initialBgColor, isDark ? 0.012 : 0.008);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    const waypoints = [
      { x: 0, y: 8, z: -10 },
      { x: -5, y: 6, z: 2 },
      { x: 2, y: 6, z: 12 },
      { x: 15, y: 10, z: 20 },
    ];

    const colors = isDark ? [
      new THREE.Color("#020617"),
      new THREE.Color("#010a14"),
      new THREE.Color("#00081a"),
      new THREE.Color("#040510"),
    ] : [
      new THREE.Color("#f8fafc"),
      new THREE.Color("#f1f5f9"),
      new THREE.Color("#e2e8f0"),
      new THREE.Color("#f8fafc"),
    ];

    if (pointLightRef.current) {
      pointLightRef.current.position.set(0, 8, -10);
    }

    waypoints.forEach((point, index) => {
      tl.to(cameraRef.current!.position, { x: point.x, y: point.y, z: point.z, ease: "power2.inOut" }, index * 2);
      tl.to(pointLightRef.current!.position, { x: point.x, y: point.y + 2, z: point.z, ease: "power2.inOut" }, index * 2);

      tl.to(scene.background, { r: colors[index].r, g: colors[index].g, b: colors[index].b, ease: "none" }, index * 2);
      tl.to((scene.fog as THREE.FogExp2).color, { r: colors[index].r, g: colors[index].g, b: colors[index].b, ease: "none" }, index * 2);
      tl.to(ambientLightRef.current!.color, { r: colors[index].r, g: colors[index].g, b: colors[index].b, ease: "none" }, index * 2);
    });

    return () => { tl.kill(); };
  }, [scene, theme]);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 8, -10]} fov={60} />
      <ambientLight ref={ambientLightRef} intensity={1.5} color="#020617" />
      <directionalLight
        ref={directionalLightRef}
        position={[10, 20, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color="#ffffff"
      />
      <pointLight ref={pointLightRef} intensity={4} distance={30} color="#ffffff" decay={2} />
    </>
  );
};

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-background transition-colors duration-300">
      <Canvas shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}>
        <CameraAndLighting />
        <SceneContent />
      </Canvas>
    </div>
  );
}
