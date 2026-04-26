"use client";

import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import CertificatesModal from "@/components/CertificatesModal";
import Lenis from "lenis";
import { Phone, Mail, Linkedin, Instagram, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize Lenis for Awwwards-level smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black text-white font-sans overflow-hidden">
      {/* 3D Scene fixed in the background */}
      {mounted && <Scene />}
      
      {/* Certificates Modal */}
      <CertificatesModal isOpen={isCertModalOpen} onClose={() => setIsCertModalOpen(false)} />

      {/* Scrollable Overlay Content */}
      <div className="relative z-10 w-full scroll-container">
        
        {/* Zone 1: North (Hero) */}
        <section className="min-h-screen w-full flex items-center justify-center pointer-events-none px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center p-6 md:p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] max-w-4xl w-full mx-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-gray-500 drop-shadow-2xl tracking-tight">
              Adarsh Pathak
            </h1>
            <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-blue-200 drop-shadow-lg tracking-wide uppercase letter-spacing-2">
              Future Data Science Engineer
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 pointer-events-auto">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 md:px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-full transition-all font-bold text-sm md:text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] flex items-center gap-2 group"
              >
                Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="px-8 md:px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-md transition-all font-bold text-sm md:text-lg flex items-center gap-2"
              >
                View Credentials
              </button>
            </div>
          </motion.div>
        </section>

        {/* Zone 1.5: About Me (Deep Story) */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 md:px-24 py-32 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-8 md:p-16 max-w-7xl w-full mx-4 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-500">
                My Roots & Vision
              </h2>
              <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  Hailing from Pratapgarh, Uttar Pradesh—the world's largest producer of amla—I was raised by two incredible teachers who instilled in me the core values of discipline, community, and relentless hard work.
                </p>
                <p>
                  I've always believed in pushing limits. As a Kabaddi team captain and Gold Medalist, I learned leadership. While completing my B.Sc with B.Ed, I taught Mathematics to middle schoolers, honing my ability to break down complex problems.
                </p>
                <p>
                  Now, pursuing my MCA at Lovely Professional University, my ultimate dream is clear: <span className="text-white font-bold">To become a world-class Data Science Engineer</span> and leverage technology to elevate my family and community to a better place.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border-2 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Coding Setup" 
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl drop-shadow-md">"I finish whatever I start, no matter the effort."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone 2: Delhi (Education & Certs) */}
        <section className="min-h-screen w-full flex items-center justify-center md:justify-start px-4 md:px-24 lg:px-40 pointer-events-none py-20">
          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-green-400/30 shadow-[0_8px_32px_0_rgba(0,255,0,0.1)] w-full max-w-2xl mx-4">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 mb-8 md:mb-12 drop-shadow-md">Education</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="bg-black/30 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-green-400/50 transition-colors">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">MCA</h3>
                <p className="text-xl md:text-2xl text-green-300 font-medium">Lovely Professional University</p>
                <div className="mt-4 flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> Pursuing advanced computing & data structures
                </div>
              </div>
              <div className="bg-black/30 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-green-400/50 transition-colors">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">B.Sc + B.Ed</h3>
                <p className="text-xl md:text-2xl text-green-300 font-medium">Shri Krishna University</p>
                <div className="mt-4 flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> Mathematics focus & Teaching Experience
                </div>
              </div>
            </div>
            
            <div className="mt-12 pointer-events-auto">
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="w-full py-5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/40 hover:to-emerald-500/40 border border-green-500/50 rounded-2xl transition-all font-bold text-lg md:text-xl flex items-center justify-center gap-3 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
              >
                <Award className="w-6 h-6" /> View All Certifications
              </button>
            </div>
          </div>
        </section>

        {/* Zone 3: UP Hub (Kings of UP - Experience & Skills) */}
        <section className="min-h-screen w-full flex flex-col xl:flex-row items-center justify-center xl:justify-end px-4 md:px-24 lg:px-40 pointer-events-none gap-6 md:gap-12 py-20">
          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-orange-400/30 shadow-[0_8px_32px_0_rgba(255,165,0,0.15)] w-full max-w-2xl text-center xl:text-left mx-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 mb-8 md:mb-12 drop-shadow-md relative">
              The Journey
            </h2>
            <div className="space-y-6 md:space-y-8 relative">
              <div className="bg-black/40 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-orange-500/50 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Django Backend Developer (Intern)</h3>
                <p className="text-lg md:text-xl text-yellow-300 font-medium">TECHQRT</p>
                <p className="text-gray-400 mt-4 font-medium">Architected scalable database structures and optimized RESTful APIs.</p>
              </div>
              <div className="bg-black/40 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-orange-500/50 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Python Web Trainee</h3>
                <p className="text-lg md:text-xl text-yellow-300 font-medium">ARUDAN TECHNOLOGIES PVT. LTD.</p>
                <p className="text-gray-400 mt-4 font-medium">Developed core Python fundamentals and web integration capabilities.</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-red-400/30 shadow-[0_8px_32px_0_rgba(255,0,0,0.1)] w-full max-w-md text-center mx-4 mt-6 xl:mt-0">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-500 mb-8 drop-shadow-md">Arsenal</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['Python', 'Django', 'Machine Learning', 'Data Science', 'C++', 'React', 'MySQL', 'Pandas'].map(skill => (
                <span key={skill} className="px-5 py-2.5 bg-black/40 border border-white/20 hover:border-red-400/50 hover:bg-white/10 rounded-full text-sm md:text-base font-bold transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Zone 4: East (Projects) */}
        <section className="min-h-[80vh] w-full flex items-center justify-center pointer-events-none px-4 py-20">
          <div className="p-8 md:p-16 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-purple-400/30 shadow-[0_8px_32px_0_rgba(128,0,128,0.15)] text-center w-full max-w-6xl mx-4">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 mb-10 md:mb-16 drop-shadow-md">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Cart Management System", tech: "Django, MySQL, Bootstrap", desc: "A robust e-commerce cart backend handling complex relational data mapping and optimized ORM queries." },
                { title: "MultiShop E-Commerce", tech: "Django, MySQL, JS", desc: "Full-stack scalable digital storefront with secure checkout, product management, and dynamic UI rendering." },
                { title: "Hospital Management", tech: "Python, MySQL", desc: "A comprehensive terminal-to-database architecture for secure patient record management and appointment scheduling." }
              ].map(proj => (
                <div key={proj.title} className="bg-black/40 p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer group shadow-xl">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-4">{proj.title}</h3>
                  <div className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-200 rounded-full text-xs font-bold mb-6">
                    {proj.tech}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ultimate Interactive Contact Hub */}
        <section id="contact" className="min-h-screen w-full flex items-center justify-center px-4 py-20 pointer-events-none">
          <div className="p-8 md:p-16 bg-gradient-to-b from-white/10 to-black/80 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.1)] text-center w-full max-w-5xl mx-4 relative overflow-hidden pointer-events-auto">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 relative z-10 drop-shadow-2xl">
              Let's Build The Future
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto relative z-10 font-medium">
              Ready to collaborate on cutting-edge data science and full-stack solutions. Reach out today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              
              {/* Phone */}
              <a href="tel:+919628453433" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/50 p-8 rounded-[2rem] border border-white/10 hover:border-green-400/50 hover:bg-green-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-green-500/20 rounded-full group-hover:bg-green-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(74,222,128,0.6)]">
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                  <span className="text-white font-bold text-lg">+91 9628453433</span>
                </motion.div>
              </a>

              {/* Email */}
              <a href="mailto:adarshpathak9628@gmail.com" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/50 p-8 rounded-[2rem] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-white font-bold text-md md:text-lg break-all">adarshpathak...</span>
                </motion.div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/adarsh-pathak" target="_blank" rel="noopener noreferrer" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: -10, rotateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/50 p-8 rounded-[2rem] border border-white/10 hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(129,140,248,0.6)]">
                    <Linkedin className="w-8 h-8 text-indigo-400" />
                  </div>
                  <span className="text-white font-bold text-lg">LinkedIn</span>
                </motion.div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/myriad_codex/" target="_blank" rel="noopener noreferrer" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: -10, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/50 p-8 rounded-[2rem] border border-white/10 hover:border-pink-400/50 hover:bg-pink-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-pink-500/20 rounded-full group-hover:bg-pink-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(244,114,182,0.6)]">
                    <Instagram className="w-8 h-8 text-pink-400" />
                  </div>
                  <span className="text-white font-bold text-lg">Instagram</span>
                </motion.div>
              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
