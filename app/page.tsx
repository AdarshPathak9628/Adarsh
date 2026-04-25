"use client";

import { useEffect, useState } from "react";
import Scene from "@/components/Scene";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-white scroll-container">
      {/* 3D Scene fixed in the background */}
      {mounted && <Scene />}
      
      {/* Scrollable Overlay Content */}
      <div className="relative z-10 w-full">
        {/* Zone 1: North (Hero) */}
        <section className="h-screen w-full flex items-center justify-center pointer-events-none">
          <div className="text-center p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Adarsh Pathak
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-blue-200">
              Full Stack & Django Backend Developer
            </p>
          </div>
        </section>

        {/* Zone 2: Delhi (Education) */}
        <section className="h-screen w-full flex items-center justify-start px-10 md:px-32 pointer-events-none">
          <div className="p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-green-500/20 shadow-2xl max-w-lg">
            <h2 className="text-4xl font-bold text-green-400 mb-4">Education</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-2xl font-semibold">MCA</h3>
                <p className="text-gray-300">Lovely Professional University</p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">B.Sc + B.Ed</h3>
                <p className="text-gray-300">Shri Krishna University</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Zone 3: UP Hub (Experience / Skills) */}
        <section className="h-screen w-full flex items-center justify-end px-10 md:px-32 pointer-events-none">
          <div className="p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-2xl max-w-lg text-right">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Skills & Certifications</h2>
            <p className="text-xl text-gray-200">Python, Django, React, Three.js</p>
            <p className="text-xl text-gray-200 mt-2">IBM Data Science, Oracle Cloud Certified</p>
          </div>
        </section>

        {/* Zone 4: East (Projects) */}
        <section className="h-screen w-full flex items-center justify-center pointer-events-none">
          <div className="p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-2xl text-center">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-200">E-Commerce Platform</p>
            <p className="text-xl text-gray-200">Hospital Management System</p>
            <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-colors pointer-events-auto">
              Get In Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
