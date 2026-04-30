"use client";

import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import CertificatesModal from "@/components/CertificatesModal";
import { useTheme } from "next-themes";
import Lenis from "lenis";
import { Phone, Mail, Linkedin, Instagram, ArrowRight, CheckCircle2, Award, Github, Eye, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import EduLightbox from "@/components/EduLightbox";

// Academic Assets
import cert10th from "@/src/assets/images/10th.jpg";
import cert12th from "@/src/assets/images/12th.jpg";
import bscProvisional from "@/src/assets/images/Bsc_Provisional_Degree.jpg";
import bscCharacter from "@/src/assets/images/Bsc_Chracter_Certificate.jpg";
import bscMigration from "@/src/assets/images/Bsc_Migration.jpg";
import sem1 from "@/src/assets/images/1st_Sem.jpg";
import sem2 from "@/src/assets/images/2nd_Sem.jpg";
import sem3 from "@/src/assets/images/3rd_Sem.jpg";
import sem4 from "@/src/assets/images/4th_Sem.jpg";
import sem5 from "@/src/assets/images/5th_Sem.jpg";
import sem6 from "@/src/assets/images/6th_Sem.jpg";
import sem7 from "@/src/assets/images/7th_Sem.jpg";
import sem8 from "@/src/assets/images/8th_Sem.jpg";
import oLevelCert from "@/src/assets/images/O_Level.jpg";
import arudanCert from "@/src/assets/images/Auradhan.jpg";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [initialAlbumId, setInitialAlbumId] = useState<string | undefined>(undefined);
  const [eduLightboxData, setEduLightboxData] = useState<{ isOpen: boolean; images: { src: any; caption: string }[]; title: string }>({
    isOpen: false,
    images: [],
    title: ""
  });

  const openCertAlbum = (albumId: string) => {
    setInitialAlbumId(albumId);
    setIsCertModalOpen(true);
  };

  useEffect(() => {
    setMounted(true);

    // Fix: Force scroll to top on refresh/load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

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

    // Ensure Lenis also starts at the top
    lenis.scrollTo(0, { immediate: true });

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
    <div className="relative bg-background text-foreground font-sans overflow-hidden transition-colors duration-300">
      {/* 3D Scene fixed in the background */}
      {mounted && <Scene />}
      

      {/* Scrollable Overlay Content */}
      <div className="relative z-10 w-full scroll-container">
        
        {/* Sticky Premium Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 bg-background/20 backdrop-blur-md border-b border-border pointer-events-auto transition-all">
          <div className="text-base md:text-xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 shrink-0">
            Adarsh Pathak
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 md:p-3 bg-card border border-border rounded-full hover:bg-accent transition-all duration-300 text-foreground"
              aria-label="Toggle Theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" /> : <Moon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />)}
            </button>
            <a 
              href="/Adarsh_Pathak_Resume.pdf" 
              download="Adarsh_Pathak_Resume.pdf" 
              className="px-4 py-1.5 md:px-8 md:py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/50 rounded-full transition-all duration-500 font-bold text-[10px] md:text-base flex items-center gap-2 text-cyan-600 dark:text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] group"
            >
              Download CV <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </nav>

        {/* Zone 1: North (Hero) */}
        <section className="min-h-screen w-full flex items-center justify-center pointer-events-none px-4 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center p-6 md:p-12 bg-card/50 backdrop-blur-xl rounded-[3rem] border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] max-w-4xl w-full mx-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/80 to-muted-foreground drop-shadow-2xl tracking-tight">
              Adarsh Pathak
            </h1>
            <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-cyan-600 dark:text-cyan-200 drop-shadow-lg tracking-wide uppercase letter-spacing-2">
              DevOps Engineer
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-10 py-3 md:py-4 bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all duration-500 font-bold text-xs md:text-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 group"
              >
                Get In Touch <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://github.com/AdarshPathak9628/" target="_blank" rel="noopener noreferrer"
                className="px-6 md:px-10 py-3 md:py-4 bg-card hover:bg-accent border border-border rounded-full transition-all duration-500 font-bold text-xs md:text-lg flex items-center gap-2"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" /> View GitHub
              </a>
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="px-6 md:px-10 py-3 md:py-4 bg-card/40 hover:bg-accent border border-border rounded-full backdrop-blur-md transition-all duration-500 font-bold text-xs md:text-lg flex items-center gap-2"
              >
                View Credentials
              </button>
            </div>
          </motion.div>
        </section>

        {/* Zone 1.5: About Me (Deep Story) */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 md:px-24 py-32 pointer-events-none">
          <div className="bg-card/50 backdrop-blur-2xl rounded-[3rem] border border-border p-8 md:p-16 max-w-7xl w-full mx-4 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-300 dark:to-indigo-500 uppercase tracking-tighter">
                My Roots & Vision
              </h2>
              <div className="space-y-6 text-muted-foreground text-base md:text-xl leading-relaxed font-medium">
                <p>
                  Hailing from Pratapgarh—a city globally recognized for its massive agricultural export of Amla—I was raised with a strong foundation in discipline and community values. These early experiences shaped my rigorous approach to problem-solving.
                </p>
                <p>
                  As a former Kabaddi team captain and Gold Medalist, I developed resilience and strategic leadership. Later, while completing my B.Sc with B.Ed, I taught Mathematics, refining my ability to deconstruct complex technical challenges into manageable solutions.
                </p>
                <p>
                  Currently pursuing my MCA at Lovely Professional University, my ultimate goal is clear: <span className="text-cyan-600 dark:text-cyan-400 font-bold">To excel as a DevOps Engineer</span>, architecting scalable cloud infrastructure and robust deployment pipelines.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border-2 border-border">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Coding Setup" 
                className="object-cover w-full h-full opacity-80 select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl drop-shadow-md">"I finish whatever I start, no matter the effort."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone 2: Delhi (Education & Certs) */}
        <section className="min-h-screen w-full flex items-center justify-center md:justify-start px-4 md:px-24 lg:px-40 pointer-events-none py-20">
          <div className="p-8 md:p-12 bg-card/50 backdrop-blur-2xl rounded-[3rem] border border-green-400/30 shadow-[0_8px_32px_0_rgba(0,255,0,0.1)] w-full max-w-2xl mx-4">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700 dark:from-green-300 dark:to-emerald-500 mb-8 md:mb-12 drop-shadow-md uppercase tracking-tighter">Education</h2>
            <div className="space-y-6 md:space-y-10">
              <div className="bg-card/30 p-6 md:p-8 rounded-[2rem] border border-border hover:border-cyan-400/50 transition-all duration-500 pointer-events-auto">
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-2">MCA</h3>
                <a href="https://www.lpu.in/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-300 font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300">
                  Lovely Professional University <ArrowRight className="w-4 h-4" />
                </a>
                <p className="mt-2 text-sm text-muted-foreground font-medium">2025 - Present</p>
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> Pursuing advanced computing & scalable systems
                </div>
              </div>
              <div className="bg-card/30 p-6 md:p-8 rounded-[2rem] border border-border hover:border-cyan-400/50 transition-all duration-500 pointer-events-auto group relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl md:text-4xl font-bold text-foreground">B.Sc + B.Ed</h3>
                  <button 
                    onClick={() => setEduLightboxData({
                      isOpen: true,
                      title: "B.Sc + B.Ed Integrated Degree",
                      images: [
                        { src: bscProvisional, caption: "Successfully completed Integrated BSc + B.Ed. from Shri Krishna University, demonstrating multi-disciplinary excellence." },
                        { src: bscCharacter, caption: "Officially recognized for exemplary conduct, integrity, and disciplined professional behavior during the 4-year integrated program." },
                        { src: bscMigration, caption: "Academic migration credentials facilitating a smooth transition from Shri Krishna University to higher postgraduate studies (MCA)." },
                        { src: sem1, caption: "Semester 1: Foundation in Mathematics and core Science subjects, establishing academic rigor." },
                        { src: sem2, caption: "Semester 2: Advanced calculus and analytical physics, deepening technical understanding." },
                        { src: sem3, caption: "Semester 3: Focused on complex algebraic structures and integrated science modeling." },
                        { src: sem4, caption: "Semester 4: Continued growth in mathematical analysis and evidence-based scientific methods." },
                        { src: sem5, caption: "Semester 5: High-level specialization in mathematics and educational psychology fundamentals." },
                        { src: sem6, caption: "Semester 6: Advanced academic research and specialized science-education curriculum design." },
                        { src: sem7, caption: "Semester 7: Completed 5-6 months of professional teaching training, enhancing mentorship, public speaking, and complex concept simplified-delivery skills." },
                        { src: sem8, caption: "Semester 8: Final professional training and academic synthesis, concluding the Integrated degree with excellence." }
                      ]
                    })}
                    className="p-3 bg-card hover:bg-cyan-500/20 border border-border rounded-full transition-all duration-500 text-cyan-600 dark:text-cyan-400 hover:scale-110"
                    title="View Certificates & Marksheets"
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                </div>
                <a href="https://www.skuindia.ac.in/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-300 font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300">
                  Shri Krishna University <ArrowRight className="w-4 h-4" />
                </a>
                <p className="mt-2 text-sm text-muted-foreground font-medium">2020 - 2024</p>
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> Mathematics focus & Analytical modeling
                </div>
              </div>

              {/* A Level & O Level (NIELIT) */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="bg-card/30 p-6 md:p-8 rounded-[2rem] border border-border hover:border-cyan-400/50 transition-all duration-500 pointer-events-auto flex-1 group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">A Level (Advanced IT)</h3>
                  </div>
                  <a href="https://www.nielit.gov.in/" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-600 dark:text-cyan-300 font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300">
                    National Institute of Electronics & Information Technology (NIELIT) <ArrowRight className="w-3 h-3" />
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">Present (Ongoing)</p>
                  <p className="mt-1 text-sm text-muted-foreground opacity-60 font-medium uppercase tracking-wider">Advanced IT Credentials</p>
                </div>
                <div className="bg-card/30 p-6 md:p-8 rounded-[2rem] border border-border hover:border-cyan-400/50 transition-all duration-500 pointer-events-auto flex-1 group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">O Level (Foundation IT)</h3>
                    <button 
                      onClick={() => setEduLightboxData({
                        isOpen: true,
                        title: "NIELIT O Level Certificate",
                        images: [{
                          src: oLevelCert,
                          caption: "Successfully certified in NIELIT O Level, validating a strong foundation in IT tools, programming logic, and system architecture."
                        }]
                      })}
                      className="p-2 bg-card hover:bg-cyan-500/20 border border-border rounded-full transition-all duration-500 text-cyan-600 dark:text-cyan-400 hover:scale-110"
                      title="View Certificate"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <a href="https://www.nielit.gov.in/" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-600 dark:text-cyan-300 font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300">
                    National Institute of Electronics & Information Technology (NIELIT) <ArrowRight className="w-3 h-3" />
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">2023 - 2024</p>
                  <p className="mt-1 text-sm text-muted-foreground opacity-60 font-medium uppercase tracking-wider">Core IT & Logic Foundation</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="bg-card/30 p-6 md:p-8 rounded-[2rem] border border-border hover:border-cyan-400/50 transition-all duration-500 pointer-events-auto flex-1 group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">12th Grade (Intermediate)</h3>
                    <button 
                      onClick={() => setEduLightboxData({
                        isOpen: true,
                        title: "12th Grade Certificate",
                        images: [{
                          src: cert12th,
                          caption: "Completed senior secondary education while leading as the Kabaddi Team Captain, balancing academics and leadership."
                        }]
                      })}
                      className="p-2 bg-card hover:bg-cyan-500/20 border border-border rounded-full transition-all duration-500 text-cyan-600 dark:text-cyan-400 hover:scale-110"
                      title="View Certificate"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-lg text-cyan-600 dark:text-cyan-300 font-medium">St. Anthony&apos;s Inter College, Pratapgarh</p>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">2018 – 2020</p>
                </div>
                <div className="bg-card/30 p-6 md:p-8 rounded-[2rem] border border-border hover:border-cyan-400/50 transition-all duration-500 pointer-events-auto flex-1 group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">10th Grade (High School)</h3>
                    <button 
                      onClick={() => setEduLightboxData({
                        isOpen: true,
                        title: "10th Grade Certificate",
                        images: [{
                          src: cert10th,
                          caption: "Strong academic foundation from St. Anthony's, Pratapgarh, rooted in discipline and excellence."
                        }]
                      })}
                      className="p-2 bg-card hover:bg-cyan-500/20 border border-border rounded-full transition-all duration-500 text-cyan-600 dark:text-cyan-400 hover:scale-110"
                      title="View Certificate"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-lg text-cyan-600 dark:text-cyan-300 font-medium">St. Anthony&apos;s Inter College, Pratapgarh</p>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">2016 – 2018</p>
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
          <div className="p-8 md:p-12 bg-card/50 backdrop-blur-2xl rounded-[3rem] border border-blue-400/30 shadow-[0_8px_32px_0_rgba(0,102,255,0.15)] w-full max-w-2xl text-center xl:text-left mx-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-300 dark:to-indigo-500 mb-8 md:mb-12 drop-shadow-md relative uppercase tracking-tighter">
              Experience
            </h2>
            <div className="space-y-6 md:space-y-8 relative">
              <div className="bg-card/40 p-6 md:p-8 rounded-[2rem] border border-border hover:border-blue-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                   <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">Django Backend Developer (Intern)</h3>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Aug 2024 – Oct 2024</span>
                </div>
                <p className="text-lg md:text-xl text-cyan-600 dark:text-cyan-300 font-medium">TECHQRT — Lucknow</p>
                <ul className="text-muted-foreground mt-4 font-medium space-y-2 text-sm md:text-base list-disc list-inside leading-relaxed">
                  <li>Engineered backend components using Django and Django REST Framework to support authentication, product management, and order processing.</li>
                  <li>Structured relational schemas through Django ORM, ensuring reliable data relationships and efficient retrieval.</li>
                  <li>Implemented RESTful endpoints enabling secure CRUD operations across user accounts, product inventory, and transaction records.</li>
                  <li>Collaborated with development teams to debug issues, enhance application features, and improve system performance.</li>
                </ul>
              </div>
              <div className="bg-card/40 p-6 md:p-8 rounded-[2rem] border border-border hover:border-blue-500/50 transition-colors group relative overflow-hidden pointer-events-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">Python Web Development Trainee</h3>
                    <button 
                      onClick={() => setEduLightboxData({
                        isOpen: true,
                        title: "Python Development Trainee Certificate",
                        images: [{
                          src: arudanCert,
                          caption: "Gained hands-on expertise in the Django framework, Python Full Stack development, and MySQL database management, building scalable and efficient web architectures."
                        }]
                      })}
                      className="p-2 bg-card hover:bg-cyan-500/20 border border-border rounded-full transition-all duration-500 text-cyan-600 dark:text-cyan-400 hover:scale-110"
                      title="View Certificate"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Mar 2024 – Jun 2024</span>
                </div>
                <p className="text-lg md:text-xl text-cyan-600 dark:text-cyan-300 font-medium">Arudan Technologies Pvt. Ltd. — Prayagraj</p>
                <ul className="text-muted-foreground mt-4 font-medium space-y-2 text-sm md:text-base list-disc list-inside leading-relaxed">
                  <li>Acquired hands-on exposure to Python, Django, MySQL, HTML, CSS, and Bootstrap within a full-stack training program.</li>
                  <li>Assembled database-driven web modules utilizing Django ORM and relational database principles.</li>
                  <li>Refined database queries and backend logic to enhance application responsiveness.</li>
                  <li>Integrated authentication workflows, session handling, and form validation for secure user interaction.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-card/50 backdrop-blur-2xl rounded-[3rem] border border-cyan-400/30 shadow-[0_8px_32px_0_rgba(0,255,255,0.1)] w-full max-w-lg text-left mx-4 mt-12 xl:mt-0 pointer-events-auto">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 dark:from-cyan-300 dark:to-blue-500 mb-8 drop-shadow-md text-center uppercase tracking-tight">Core Technical Stack</h2>
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
                  <h3 className="text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.split(', ').map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-card/40 border border-border hover:border-cyan-400/50 hover:bg-cyan-500/10 rounded-full text-xs md:text-sm font-semibold transition-colors text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pointer-events-auto">
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="w-full py-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/50 rounded-2xl transition-all font-bold text-lg md:text-xl flex items-center justify-center gap-3 text-foreground shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
              >
                <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> View All Credentials & Achievements
              </button>
            </div>
          </div>
        </section>

        {/* Zone 4: East (Projects) */}
        <section className="min-h-[80vh] w-full flex items-center justify-center pointer-events-none px-4 py-20">
          <div className="p-8 md:p-16 bg-card/50 backdrop-blur-2xl rounded-[3rem] border border-purple-400/30 shadow-[0_8px_32px_0_rgba(128,0,128,0.15)] text-center w-full max-w-6xl mx-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 gap-6">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-500 drop-shadow-md uppercase tracking-tighter">
                Featured Projects
              </h2>
              <a 
                href="https://github.com/AdarshPathak9628/" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-foreground text-background hover:bg-foreground/90 border border-border rounded-full transition-all duration-500 font-bold text-xs md:text-sm flex items-center gap-2 pointer-events-auto shadow-lg hover:shadow-xl"
              >
                <Github className="w-4 h-4" /> View All on GitHub
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: "MultiShop E-Commerce Platform", tech: "Django, MySQL, Bootstrap", period: "Mar 2024 – Jun 2024", repo: "MultiShop", bullets: [
                  "Architected a scalable online retail ecosystem with secure JWT authentication and dynamic product catalog management.",
                  "Designed normalized relational schemas utilizing Django ORM for efficient data retrieval and transaction integrity.",
                  "Integrated real-time cart functionality and complex search/filtering algorithms, improving user conversion rates.",
                  "Managed the entire deployment lifecycle using Git/GitHub, ensuring modular and maintainable code architecture."
                ]},
                { title: "Hospital Management System", tech: "Python, MySQL", period: "Jan 2024 – Feb 2024", repo: "Hospital-Management", bullets: [
                  "Developed a mission-critical healthcare solution for patient intake, scheduling, and billing automation.",
                  "Implemented Role-Based Access Control (RBAC) to secure sensitive medical records and restrict administrative functions.",
                  "Engineered robust database structures for high-concurrency handling of patient records and physician schedules.",
                  "Automated outpatient department (OPD) workflows, reducing administrative overhead by 40%."
                ]}
              ].map(proj => (
                <div key={proj.title} className="bg-card/50 p-8 rounded-[2rem] border border-border hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 pointer-events-auto flex flex-col group shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-purple-500 transition-colors">{proj.title}</h3>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{proj.period}</span>
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-600 dark:text-purple-200 rounded-full text-xs font-bold mb-6 self-start">
                    {proj.tech}
                  </div>
                  <ul className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium flex-grow mb-8 space-y-2 list-disc list-inside">
                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  
                  <a 
                    href={`https://github.com/AdarshPathak9628/${proj.repo}`} target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 bg-card hover:bg-purple-500/20 border border-border hover:border-purple-500/50 rounded-xl transition-all font-bold text-sm flex items-center justify-center gap-2 text-foreground group-hover:shadow-[0_0_20px_rgba(128,0,128,0.3)] mt-auto"
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
          <div className="p-8 md:p-16 bg-gradient-to-b from-card to-background backdrop-blur-3xl rounded-[3rem] border border-border shadow-[0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[0_0_100px_rgba(255,255,255,0.05)] text-center w-full max-w-5xl mx-4 relative overflow-hidden pointer-events-auto">
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center select-none"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            ></div>
            
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 relative z-10 drop-shadow-2xl uppercase tracking-tighter">
              Let's Build The Future
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto relative z-10 font-medium">
              Ready to collaborate on cutting-edge DevOps, cloud infrastructure, and full-stack solutions. Reach out today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              
              {/* Phone */}
              <a href="tel:+919628453433" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card/50 p-8 rounded-[2rem] border border-border hover:border-green-400/50 hover:bg-green-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-green-500/20 rounded-full group-hover:bg-green-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(74,222,128,0.6)]">
                    <Phone className="w-8 h-8 text-green-500 dark:text-green-400" />
                  </div>
                  <span className="text-foreground font-bold text-lg">+91 9628453433</span>
                </motion.div>
              </a>

              {/* Email */}
              <a href="mailto:adarshpathak9628@gmail.com" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card/50 p-8 rounded-[2rem] border border-border hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]">
                    <Mail className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                  </div>
                  <span className="text-foreground font-bold text-md md:text-lg break-all">adarshpathak...</span>
                </motion.div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/adarsh-pathak-14219131b" target="_blank" rel="noopener noreferrer" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: -10, rotateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card/50 p-8 rounded-[2rem] border border-border hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(129,140,248,0.6)]">
                    <Linkedin className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <span className="text-foreground font-bold text-lg">LinkedIn</span>
                </motion.div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/myriad_codex/" target="_blank" rel="noopener noreferrer" className="group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: -10, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card/50 p-8 rounded-[2rem] border border-border hover:border-pink-400/50 hover:bg-pink-500/10 transition-colors flex flex-col items-center gap-4 shadow-xl"
                >
                  <div className="p-4 bg-pink-500/20 rounded-full group-hover:bg-pink-500/40 transition-colors group-hover:shadow-[0_0_30px_rgba(244,114,182,0.6)]">
                    <Instagram className="w-8 h-8 text-pink-500 dark:text-pink-400" />
                  </div>
                  <span className="text-foreground font-bold text-lg">Instagram</span>
                </motion.div>
              </a>

            </div>
          </div>
        </section>

      </div>
      <EduLightbox 
        isOpen={eduLightboxData.isOpen}
        onClose={() => setEduLightboxData({ ...eduLightboxData, isOpen: false })}
        images={eduLightboxData.images}
        title={eduLightboxData.title}
      />
      <CertificatesModal 
        isOpen={isCertModalOpen} 
        onClose={() => {
          setIsCertModalOpen(false);
          setInitialAlbumId(undefined);
        }}
        initialAlbumId={initialAlbumId}
      />
    </div>
  );
}
