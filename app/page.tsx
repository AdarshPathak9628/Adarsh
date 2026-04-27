"use client";

import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import CertificatesModal from "@/components/CertificatesModal";
import Lenis from "lenis";
import { Phone, Mail, Linkedin, Instagram, ArrowRight, CheckCircle2, Award, Github } from "lucide-react";
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
        
        {/* Sticky Premium Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/20 backdrop-blur-md border-b border-white/10 pointer-events-auto transition-all">
          <div className="text-lg md:text-xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Adarsh Pathak
          </div>
          <a 
            href="/Resume.pdf" 
            download 
            className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/50 rounded-full transition-all font-bold text-sm md:text-base flex items-center gap-2 text-white shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] group"
          >
            Download CV <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

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
            <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-cyan-200 drop-shadow-lg tracking-wide uppercase letter-spacing-2">
              DevOps Engineer
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 pointer-events-auto">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 md:px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-full transition-all font-bold text-sm md:text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] flex items-center gap-2 group"
              >
                Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://github.com/AdarshPathak9628/" target="_blank" rel="noopener noreferrer"
                className="px-8 md:px-10 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-full transition-all font-bold text-sm md:text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Github className="w-5 h-5" /> View GitHub
              </a>
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
                  Hailing from Pratapgarh—a city globally recognized for its massive agricultural export of Amla—I was raised with a strong foundation in discipline and community values. These early experiences shaped my rigorous approach to problem-solving.
                </p>
                <p>
                  As a former Kabaddi team captain and Gold Medalist, I developed resilience and strategic leadership. Later, while completing my B.Sc with B.Ed, I taught Mathematics, refining my ability to deconstruct complex technical challenges into manageable solutions.
                </p>
                <p>
                  Currently pursuing my MCA at Lovely Professional University, my ultimate goal is clear: <span className="text-cyan-400 font-bold">To excel as a DevOps Engineer</span>, architecting scalable cloud infrastructure and robust deployment pipelines.
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
              <div className="bg-black/30 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/50 transition-colors pointer-events-auto">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">MCA</h3>
                <a href="https://www.lpu.in/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-cyan-300 font-medium hover:underline inline-flex items-center gap-1">
                  Lovely Professional University <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-4 flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Pursuing advanced computing & scalable systems
                </div>
              </div>
              <div className="bg-black/30 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/50 transition-colors pointer-events-auto">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">B.Sc + B.Ed</h3>
                <a href="https://www.skuindia.ac.in/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-cyan-300 font-medium hover:underline inline-flex items-center gap-1">
                  Shri Krishna University <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-4 flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Mathematics focus & Analytical modeling
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="bg-black/30 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/50 transition-colors pointer-events-auto flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">12th Grade (Intermediate)</h3>
                  <p className="text-lg text-cyan-300 font-medium">St. Anthony&apos;s Inter College, Pratapgarh</p>
                  <p className="mt-3 text-sm text-gray-400 font-medium">2019 – 2020</p>
                </div>
                <div className="bg-black/30 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/50 transition-colors pointer-events-auto flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">10th Grade (High School)</h3>
                  <p className="text-lg text-cyan-300 font-medium">St. Anthony&apos;s Inter College, Pratapgarh</p>
                  <p className="mt-3 text-sm text-gray-400 font-medium">2017 – 2018</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pointer-events-auto">
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="w-full py-5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/50 rounded-2xl transition-all font-bold text-lg md:text-xl flex items-center justify-center gap-3 text-white shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]"
              >
                <Award className="w-6 h-6" /> View All Credentials & Achievements
              </button>
            </div>
          </div>
        </section>

        {/* Zone 3: Professional Journey */}
        <section className="min-h-screen w-full flex flex-col xl:flex-row items-center justify-center xl:justify-end px-4 md:px-24 lg:px-40 pointer-events-none gap-6 md:gap-12 py-20">
          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-blue-400/30 shadow-[0_8px_32px_0_rgba(0,102,255,0.15)] w-full max-w-2xl text-center xl:text-left mx-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-500 mb-8 md:mb-12 drop-shadow-md relative">
              Experience
            </h2>
            <div className="space-y-6 md:space-y-8 relative">
              <div className="bg-black/40 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Django Backend Developer (Intern)</h3>
                  <span className="text-sm text-gray-400 font-medium whitespace-nowrap">Aug 2024 – Oct 2024</span>
                </div>
                <p className="text-lg md:text-xl text-cyan-300 font-medium">TECHQRT — Lucknow</p>
                <ul className="text-gray-400 mt-4 font-medium space-y-2 text-sm md:text-base list-disc list-inside">
                  <li>Engineered backend components using Django and Django REST Framework to support authentication, product management, and order processing.</li>
                  <li>Structured relational schemas through Django ORM, ensuring reliable data relationships and efficient retrieval.</li>
                  <li>Implemented RESTful endpoints enabling secure CRUD operations across user accounts, product inventory, and transaction records.</li>
                  <li>Collaborated with development teams to debug issues, enhance application features, and improve system performance.</li>
                </ul>
              </div>
              <div className="bg-black/40 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Python Web Development Trainee</h3>
                  <span className="text-sm text-gray-400 font-medium whitespace-nowrap">Apr 2024 – Jul 2024</span>
                </div>
                <p className="text-lg md:text-xl text-cyan-300 font-medium">Arudan Technologies Pvt. Ltd. — Prayagraj</p>
                <ul className="text-gray-400 mt-4 font-medium space-y-2 text-sm md:text-base list-disc list-inside">
                  <li>Acquired hands-on exposure to Python, Django, MySQL, HTML, CSS, and Bootstrap within a full-stack training program.</li>
                  <li>Assembled database-driven web modules utilizing Django ORM and relational database principles.</li>
                  <li>Refined database queries and backend logic to enhance application responsiveness.</li>
                  <li>Integrated authentication workflows, session handling, and form validation for secure user interaction.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-cyan-400/30 shadow-[0_8px_32px_0_rgba(0,255,255,0.1)] w-full max-w-lg text-left mx-4 mt-6 xl:mt-0">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-8 drop-shadow-md text-center">Technical Arsenal</h2>
            <div className="space-y-6">
              {[
                { category: "Languages", items: "Python, C, C++, JavaScript, Java" },
                { category: "Backend", items: "Django, Django REST Framework, REST APIs, API Integration" },
                { category: "Frontend", items: "HTML5, CSS3, Bootstrap, Tailwind CSS" },
                { category: "Databases", items: "MySQL, MariaDB, SQLite3, Relational DB Design" },
                { category: "Libraries & Tools", items: "NumPy, Pandas, Matplotlib, Git, GitHub" },
                { category: "Core Concepts", items: "OOPs, MVC Architecture, Auth & Authorization, DSA" },
              ].map(group => (
                <div key={group.category}>
                  <h3 className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.split(', ').map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/15 hover:border-cyan-400/50 hover:bg-cyan-500/10 rounded-full text-xs md:text-sm font-semibold transition-colors text-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone 4: East (Projects) */}
        <section className="min-h-[80vh] w-full flex items-center justify-center pointer-events-none px-4 py-20">
          <div className="p-8 md:p-16 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-purple-400/30 shadow-[0_8px_32px_0_rgba(128,0,128,0.15)] text-center w-full max-w-6xl mx-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 gap-6">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-500 drop-shadow-md">
                Featured Projects
              </h2>
              <a 
                href="https://github.com/AdarshPathak9628/" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-full transition-all font-bold text-sm flex items-center gap-2 pointer-events-auto shadow-lg hover:shadow-xl text-white"
              >
                <Github className="w-4 h-4" /> View All on GitHub
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "MultiShop E-Commerce Platform", tech: "Django, MySQL, Bootstrap", period: "Mar 2024 – Jun 2024", bullets: [
                  "Architected a dynamic online retail platform featuring authentication, product catalog management, cart functionality, and order tracking.",
                  "Modeled normalized relational tables including Product, Category, Cart, and Order entities.",
                  "Introduced search capability, category-based filtering, and real-time cart updates improving user interaction.",
                  "Handled version control using Git and GitHub ensuring organized codebase management and collaboration readiness."
                ]},
                { title: "Hospital Management System", tech: "Python, MySQL", period: "Jan 2024 – Feb 2024", bullets: [
                  "Constructed a healthcare management solution supporting patient registration, appointment scheduling, and billing operations.",
                  "Established role-based access control ensuring protected medical records and restricted administrative access.",
                  "Organized database structures handling patient details, appointment records, and physician schedules.",
                  "Automated OPD workflows covering patient intake through invoice generation."
                ]}
              ].map(proj => (
                <div key={proj.title} className="bg-black/40 p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 pointer-events-auto flex flex-col group shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{proj.title}</h3>
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{proj.period}</span>
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-200 rounded-full text-xs font-bold mb-6 self-start">
                    {proj.tech}
                  </div>
                  <ul className="text-gray-400 text-sm md:text-base leading-relaxed font-medium flex-grow mb-8 space-y-2 list-disc list-inside">
                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  
                  <a 
                    href="https://github.com/AdarshPathak9628/" target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-xl transition-all font-bold text-sm flex items-center justify-center gap-2 text-white group-hover:shadow-[0_0_20px_rgba(128,0,128,0.3)] mt-auto"
                  >
                    <Github className="w-4 h-4" /> View Source Code
                  </a>
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
              Ready to collaborate on cutting-edge DevOps, cloud infrastructure, and full-stack solutions. Reach out today.
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
