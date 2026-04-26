"use client";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../src/assets/images/My profile image.png";

gsap.registerPlugin(ScrollTrigger);

/* ─── Floating Particles (lightweight, beautiful) ─── */
const FloatingParticles = ({ count = 200, area = 60, color = "#00e5ff" }: { count?: number; area?: number; color?: string }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * area;
      arr[i * 3 + 1] = Math.random() * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * area;
    }
    return arr;
  }, [count, area]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color={color} transparent opacity={0.6} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

/* ─── Glowing Wireframe Globe (India / Global Vibe) ─── */
const GlowingSphere = ({ position, radius = 4, color = "#00e5ff" }: { position: [number, number, number]; radius?: number; color?: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.15;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[radius, 2]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

/* ─── Animated Torus Knot (Elegant Cultural Symbol) ─── */
const AnimatedTorusKnot = ({ position, color = "#7c3aed" }: { position: [number, number, number]; color?: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusKnotGeometry args={[2.5, 0.4, 128, 16, 2, 3]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

/* ─── Orbit Ring (Tech Halo) ─── */
const OrbitRing = ({ position, radius = 5, color = "#0ea5e9" }: { position: [number, number, number]; radius?: number; color?: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.3;
      ref.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

/* ─── Main 3D Scene Content ─── */
const SceneContent = () => {
  return (
    <group>
      {/* Base Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshPhysicalMaterial color="#050505" metalness={0.9} roughness={0.4} clearcoat={0.1} />
      </mesh>
      
      {/* Subtle Grid */}
      <gridHelper args={[100, 60, "#0a1929", "#060606"]} position={[0, -1.9, 0]} />

      {/* ── Zone 1: Hero Area ── */}
      <group position={[0, 0, -20]}>
        {/* Large Glowing Globe */}
        <GlowingSphere position={[-4, 5, -3]} radius={5} color="#0ea5e9" />
        <OrbitRing position={[-4, 5, -3]} radius={7} color="#06b6d4" />
        <OrbitRing position={[-4, 5, -3]} radius={9} color="#22d3ee" />

        {/* Floating Profile Card */}
        <Html position={[0, 6, 2]} center zIndexRange={[100, 0]}>
          <div className="group flex flex-col items-center bg-white/5 p-6 sm:p-8 rounded-[2.5rem] border border-white/20 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,255,255,0.4)] hover:border-cyan-400/50 hover:-translate-y-2 pointer-events-auto transform scale-75 sm:scale-100 origin-center transition-all duration-500">
            <div className="relative rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] transition-shadow duration-500">
              <img src={profileImg.src} alt="Adarsh Pathak" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-black group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-white mt-5 sm:mt-6 font-black text-2xl sm:text-3xl tracking-wide group-hover:text-cyan-200 transition-colors">Adarsh Pathak</p>
            <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mt-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">DevOps Engineer</p>
          </div>
        </Html>
      </group>

      {/* ── Zone 2: Education Area ── */}
      <group position={[-5, 0, -5]}>
        <AnimatedTorusKnot position={[0, 5, 0]} color="#8b5cf6" />
        <OrbitRing position={[0, 5, 0]} radius={5} color="#a78bfa" />
      </group>

      {/* ── Zone 3: Experience Area ── */}
      <group position={[2, 0, 5]}>
        <GlowingSphere position={[0, 4, 0]} radius={3} color="#3b82f6" />
        <OrbitRing position={[0, 4, 0]} radius={5} color="#60a5fa" />

        <Html position={[0, 8, 2]} center>
          <div className="bg-black/40 p-3 sm:p-4 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,102,255,0.2)] pointer-events-auto w-64 text-center">
            <h3 className="text-blue-400 font-bold text-lg sm:text-xl drop-shadow-md tracking-wider">Node Gamma</h3>
            <p className="text-white/80 mt-1 text-xs font-medium uppercase tracking-widest">Scalability Architecture</p>
          </div>
        </Html>
      </group>

      {/* ── Zone 4: Projects Area ── */}
      <group position={[15, 0, 10]}>
        <AnimatedTorusKnot position={[0, 5, 0]} color="#06b6d4" />
        <GlowingSphere position={[0, 5, 0]} radius={2.5} color="#22d3ee" />
      </group>

      {/* ── Ambient Floating Particles ── */}
      <FloatingParticles count={300} area={80} color="#0ea5e9" />
    </group>
  );
};

/* ─── Camera & Lighting with GSAP Scroll ─── */
const CameraAndLighting = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const { scene } = useThree();

  useEffect(() => {
    const initialBgColor = new THREE.Color("#020617");
    scene.background = initialBgColor;
    scene.fog = new THREE.FogExp2(initialBgColor, 0.015);

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

    const colors = [
      new THREE.Color("#020617"),
      new THREE.Color("#010a14"),
      new THREE.Color("#00081a"),
      new THREE.Color("#050510"),
    ];

    if (pointLightRef.current) {
      pointLightRef.current.position.set(0, 8, -10);
    }

    waypoints.forEach((point, index) => {
      tl.to(
        cameraRef.current!.position,
        { x: point.x, y: point.y, z: point.z, ease: "power2.inOut" },
        index * 2
      );

      tl.to(
        pointLightRef.current!.position,
        { x: point.x, y: point.y + 2, z: point.z, ease: "power2.inOut" },
        index * 2
      );

      if (index > 0) {
        tl.to(scene.background, { r: colors[index].r, g: colors[index].g, b: colors[index].b, ease: "none" }, (index - 0.5) * 2);
        tl.to((scene.fog as THREE.FogExp2).color, { r: colors[index].r, g: colors[index].g, b: colors[index].b, ease: "none" }, (index - 0.5) * 2);
        tl.to(ambientLightRef.current!.color, { r: colors[index].r, g: colors[index].g, b: colors[index].b, ease: "none" }, (index - 0.5) * 2);
      }
    });

    return () => { tl.kill(); };
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
      <pointLight ref={pointLightRef} intensity={5} distance={30} color="#ffffff" decay={2} />
    </>
  );
};

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black">
      <Canvas shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}>
        <CameraAndLighting />
        <SceneContent />
      </Canvas>
    </div>
  );
}
