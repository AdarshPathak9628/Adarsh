"use client";

import { useEffect, useState } from "react";
import Scene from "@/components/Scene";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white scroll-container overflow-x-hidden font-sans">
      {/* 3D Scene fixed in the background */}
      {mounted && <Scene />}
      
      {/* Scrollable Overlay Content */}
      <div className="relative z-10 w-full">
        {/* Zone 1: North (Hero) */}
        <section className="h-screen w-full flex items-center justify-center pointer-events-none px-4">
          <div className="text-center p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-gray-400 drop-shadow-2xl">
              Adarsh Pathak
            </h1>
            <p className="mt-6 text-2xl md:text-3xl font-medium text-blue-100 drop-shadow-lg tracking-wide">
              Full Stack & Django Backend Developer
            </p>
            <div className="mt-8 flex justify-center gap-4 pointer-events-auto">
              <a href="mailto:adarshpathak9628@gmail.com" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-md transition-all font-semibold">Contact Me</a>
            </div>
          </div>
        </section>

        {/* Zone 2: Delhi (Education) */}
        <section className="h-screen w-full flex items-center justify-start px-8 md:px-24 lg:px-40 pointer-events-none">
          <div className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-green-400/30 shadow-[0_8px_32px_0_rgba(0,255,0,0.1)] max-w-xl">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 mb-8 drop-shadow-md">Education</h2>
            <div className="space-y-8">
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-white">Master of Computer Applications (MCA)</h3>
                <p className="text-xl text-green-200 mt-2 font-medium">Lovely Professional University</p>
              </div>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-white">B.Sc + B.Ed</h3>
                <p className="text-xl text-green-200 mt-2 font-medium">Shri Krishna University</p>
                <p className="text-md text-gray-400 mt-1">Chhatarpur, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone 3: UP Hub (Experience & Skills) */}
        <section className="h-screen w-full flex flex-col md:flex-row items-center justify-end px-8 md:px-24 lg:px-40 pointer-events-none gap-8">
          <div className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-yellow-400/30 shadow-[0_8px_32px_0_rgba(255,165,0,0.15)] max-w-xl text-right md:text-left">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 mb-8 drop-shadow-md">Experience</h2>
            <div className="space-y-6">
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white">Django Backend Developer (Intern)</h3>
                <p className="text-lg text-yellow-200 mt-1 font-medium">TECHQRT</p>
              </div>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white">Python Web Trainee</h3>
                <p className="text-lg text-yellow-200 mt-1 font-medium">ARUDAN TECHNOLOGIES PVT. LTD.</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-orange-400/30 shadow-[0_8px_32px_0_rgba(255,165,0,0.15)] max-w-sm text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 mb-6 drop-shadow-md">Core Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'Django', 'C++', 'React', 'HTML/CSS/JS', 'MySQL', 'Bootstrap'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Zone 4: East (Projects) */}
        <section className="h-screen w-full flex items-center justify-center pointer-events-none px-4 pb-20">
          <div className="p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-blue-400/30 shadow-[0_8px_32px_0_rgba(0,0,255,0.15)] text-center w-full max-w-5xl">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 mb-10 drop-shadow-md">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Cart Management System", tech: "Django, MySQL, Bootstrap", desc: "Comprehensive web application with ORM interactions." },
                { title: "MultiShop E-Commerce", tech: "Django, MySQL, JS", desc: "Full-featured platform with cart and secure checkout." },
                { title: "Hospital Management", tech: "Python, MySQL", desc: "System to manage patient records and appointments." }
              ].map(proj => (
                <div key={proj.title} className="bg-black/30 p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-colors pointer-events-auto cursor-pointer group">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{proj.title}</h3>
                  <p className="text-blue-200 mt-2 text-sm font-semibold">{proj.tech}</p>
                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
