"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Database, Code, BrainCircuit, Cloud, ShieldCheck, Trophy, Target, BookOpen, BarChart3, GraduationCap, CheckCircle2, ChevronLeft, ChevronRight, LayoutGrid, Info } from "lucide-react";
import Image from "next/image";

// Image Imports
import oracleDb from "../src/assets/images/Oracle_Cloud_Database.jpg";
import oracleInfra from "../src/assets/images/Oracle_Cloud_Infrastructure.jpg";
import eventEye1 from "../src/assets/images/EventEye1.jpeg";
import eventEye2 from "../src/assets/images/EventEye2.jpg";
import eventEye3 from "../src/assets/images/EventEye3.jpg";
import eventEye4 from "../src/assets/images/EventEye.jpg";
import ibmPy from "../src/assets/images/IBM_PY101.jpg";
import ibmAnalyst from "../src/assets/images/IBM_Dataanlist.jpg";
import ibmAnalytics from "../src/assets/images/IBM_Analtytic.jpg";
import ibmCognos from "../src/assets/images/ibm-cognos-analytics-v11-1-x-reporting-essentials.png";
import simpliML from "../src/assets/images/Simplilearn.jpg";
import simpliSQL from "../src/assets/images/Simplilearn_SQL_Analytics.jpg";
import wsFullStack from "../src/assets/images/WsCube_FullStracDeveloper.jpg";
import wsGithub from "../src/assets/images/WsCube_Github.jpg";
import yashoda1 from "../src/assets/images/Yashoda AI.jpeg";
import yashoda2 from "../src/assets/images/Yashoda AI Squort.jpg";
import cyberJandK from "../src/assets/images/cyber security quiz J & K Gov.jpg";
import bodhScript from "../src/assets/images/BodhScript.png";

// New Certification Imports
import cccCert from "../src/assets/images/CCC.jpg";
import ieeeCert from "../src/assets/images/IEEE.jpg";
import tallyCert from "../src/assets/images/Tally.jpg";
import ideathonCert from "../src/assets/images/Ideathon.jpg";

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAlbumId?: string;
}

interface CertImage {
  src: any;
  caption: string;
  rotate?: number;
}

interface AlbumGroup {
  id: string;
  title: string;
  category: string;
  description: string;
  whyDevOps: string;
  coverImage: any;
  images: CertImage[];
  date: string;
  rotate?: number;
}

const certificateGroups: AlbumGroup[] = [
  {
    id: "oracle",
    title: "Oracle Cloud Professional",
    category: "Cloud Engineering",
    description: "Certified expertise in OCI database services and infrastructure data science.",
    whyDevOps: "Validates capability to architect and manage high-availability cloud environments and data-driven infrastructure automation.",
    coverImage: oracleDb,
    images: [
      { src: oracleDb, caption: "Mastery of enterprise-grade Oracle Cloud Database deployments and lifecycle management." },
      { src: oracleInfra, caption: "Validation of advanced OCI infrastructure design and data science environment orchestration." }
    ],
    date: "Oct 2025"
  },
  {
    id: "ibm",
    title: "IBM Professional Data Science",
    category: "Data Engineering",
    description: "Comprehensive mastery of Python for Data Science, Reporting, and Enterprise Analytics.",
    whyDevOps: "Essential for data-driven DevOps: enables the creation of automated monitoring pipelines and sophisticated infrastructure telemetry.",
    coverImage: ibmPy,
    images: [
      { src: ibmPy, caption: "Demonstrated proficiency in Python programming for automation, data processing, and infrastructure scripting." },
      { src: ibmAnalyst, caption: "Certified expert in extracting technical insights and performing data-driven infrastructure analysis." },
      { src: ibmAnalytics, caption: "Advanced analytics certification focusing on sophisticated reporting and business intelligence logic." },
      { src: ibmCognos, caption: "Enterprise reporting mastery using IBM Cognos for complex data visualization and system monitoring." }
    ],
    date: "Jan 2026"
  },
  {
    id: "ieee",
    title: "IEEE Professional Recognition",
    category: "Technical Leadership",
    description: "Professional membership and recognition for technical contributions within the global IEEE community.",
    whyDevOps: "Represents commitment to global technical standards and engagement with the world's largest professional organization for technology.",
    coverImage: ieeeCert,
    images: [
      { src: ieeeCert, caption: "Recognized by the IEEE for technical contributions and professional development in the field of engineering and technology." }
    ],
    date: "2026"
  },
  {
    id: "ccc",
    title: "CCC (Course on Computer Concepts) - NIELIT",
    category: "IT Foundation",
    description: "Official NIELIT certification validating core computer literacy and digital concepts.",
    whyDevOps: "Establishes a solid foundational understanding of operating systems, GUI-based computing, and digital information management.",
    coverImage: cccCert,
    images: [
      { src: cccCert, caption: "Certified in foundational IT concepts, operating systems, and digital literacy by NIELIT." }
    ],
    date: "May 2023"
  },
  {
    id: "tally",
    title: "Tally Certification",
    category: "Enterprise Systems",
    description: "Expertise in managing enterprise resources, financial accounting, and inventory using Tally systems.",
    whyDevOps: "Demonstrates capability in managing structured enterprise data and financial logic, key for business-aligned technical leadership.",
    coverImage: tallyCert,
    images: [
      { src: tallyCert, caption: "Validated expertise in enterprise resource planning, financial accounting, and inventory management using Tally." }
    ],
    date: "Aug 2023"
  },
  {
    id: "eventeye",
    title: "Eventeye Achievements",
    category: "Hackathons & Strategy",
    description: "1st Place victories and advanced momentum certificates from competitive technical challenges.",
    whyDevOps: "Proves rapid problem-solving, strategic leadership, and the ability to build production-ready solutions under extreme pressure.",
    coverImage: eventEye1,
    images: [
      { src: eventEye1, caption: "Secured 1st position in 24h HackManthan by solving complex algorithmic challenges at scale." },
      { src: eventEye2, caption: "Advanced workshop certification in full-stack architecture and industrial software engineering." },
      { src: eventEye3, caption: "Masterclass in hackathon strategy and rapid architectural prototyping for high-stakes competition." },
      { src: eventEye4, caption: "Recognized for sustained technical contribution and momentum within the developer community." }
    ],
    date: "Oct 2025"
  },
  {
    id: "cybersecurity",
    title: "Government Recognition (J&K Cybersecurity)",
    category: "Digital Security",
    description: "Awarded by the Government of Jammu & Kashmir for excellence in digital literacy and cybersecurity fundamentals.",
    whyDevOps: "Security is a core pillar of DevOps (DevSecOps). This certification validates a strong foundation in threat mitigation and secure infrastructure practices.",
    coverImage: cyberJandK,
    images: [
      { src: cyberJandK, caption: "Verified expertise in cybersecurity fundamentals and threat mitigation strategies for secure systems." }
    ],
    date: "2023"
  },
  {
    id: "ideathon",
    title: "Ideathons & Patent Drafts",
    category: "IoT & Innovation",
    description: "Patent-drafted 'Smart Umbrella' system featuring advanced IoT sensors and emergency alert logic.",
    whyDevOps: "Bridges the gap between physical infrastructure and digital logic. Demonstrates expertise in sensor integration, predictive analytics, and resilient system design.",
    coverImage: ideathonCert,
    images: [
      { src: ideathonCert, caption: "Architected an IoT-enabled Context-Aware Smart Umbrella featuring predictive weather API integration, piezoelectric energy harvesting, and emergency alert systems." }
    ],
    date: "2024 - 2025"
  },
  {
    id: "simplilearn",
    title: "Simplilearn Technical Mastery",
    category: "AI & SQL Analytics",
    description: "Professional certifications in Machine Learning algorithms and Databricks SQL Analytics.",
    whyDevOps: "Bridges the gap between AI and Infrastructure, enabling AI-Ops and highly optimized database querying for system performance.",
    coverImage: simpliML,
    images: [
      { src: simpliML, caption: "Built and optimized predictive models using machine learning algorithms for automated system scaling." },
      { src: simpliSQL, caption: "Architected high-performance SQL analytics on Databricks Lakehouse for real-time infrastructure telemetry." }
    ],
    date: "2023"
  },
  {
    id: "wscube",
    title: "WsCube Tech Development",
    category: "Full Stack & Version Control",
    description: "Deep dive into Full Stack development cycles and advanced Git/GitHub version control workflows.",
    whyDevOps: "Core DevOps foundations: mastery of the full software development lifecycle (SDLC) and sophisticated CI/CD repository management.",
    coverImage: wsFullStack,
    images: [
      { src: wsFullStack, caption: "Comprehensive end-to-end full-stack development mastery covering both frontend and backend logic." },
      { src: wsGithub, caption: "Validation of advanced version control strategies and CI/CD repository management on GitHub." }
    ],
    date: "2024"
  },
  {
    id: "others",
    title: "Institutional Recognitions",
    category: "Specialized Honors",
    description: "Key technical recognitions from Yashoda AI and Bodh Script technical clubs.",
    whyDevOps: "Demonstrates technical versatility, community leadership, and a commitment to the evolving technical ecosystem at LPU.",
    coverImage: bodhScript,
    images: [
      { src: bodhScript, caption: "Recognition for algorithmic excellence and problem-solving efficiency in competitive coding." },
      { src: yashoda1, caption: "National-level certification in AI literacy and ethical artificial intelligence deployment." },
      { src: yashoda2, caption: "Official participation and contribution to the National Commission for Women AI initiative." }
    ],
    date: "2023 - 2024"
  }
];

export default function CertificatesModal({ isOpen, onClose, initialAlbumId }: CertificatesModalProps) {
  const [activeAlbum, setActiveAlbum] = useState<AlbumGroup | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (initialAlbumId) {
        const album = certificateGroups.find(g => g.id === initialAlbumId);
        if (album) {
          setActiveAlbum(album);
          setCurrentSlide(0);
        }
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialAlbumId]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeAlbum) {
      setCurrentSlide((prev) => (prev + 1) % activeAlbum.images.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeAlbum) {
      setCurrentSlide((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-3xl overflow-hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <button
            onClick={activeAlbum ? () => setActiveAlbum(null) : onClose}
            className="fixed top-4 right-4 sm:top-8 sm:right-8 p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-xl transition-all text-white border border-white/10 z-[10001] group"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <AnimatePresence>
            {activeAlbum && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] bg-black/95 flex flex-col items-center"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setActiveAlbum(null);
                }}
              >
                <div
                  className="w-full h-[15vh] flex flex-col items-center justify-center text-center px-6 pt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
                    <p className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px]">{activeAlbum.category}</p>
                    <span className="w-1 h-1 bg-white/30 rounded-full shrink-0" />
                    <p className="text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px]">{activeAlbum.date}</p>
                  </div>
                  <h3 className="text-2xl md:text-5xl font-black text-white leading-tight">{activeAlbum.title}</h3>
                </div>

                <div
                  className="relative w-full h-[65vh] flex items-center justify-center group"
                  onClick={(e) => e.stopPropagation()}
                >
                  {activeAlbum.images.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-8 z-10 p-5 bg-white/5 hover:bg-white/15 rounded-full border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                      >
                        <ChevronLeft className="w-8 h-8 text-white" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-8 z-10 p-5 bg-white/5 hover:bg-white/15 rounded-full border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                      >
                        <ChevronRight className="w-8 h-8 text-white" />
                      </button>
                    </>
                  )}

                  <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src={activeAlbum.images[currentSlide].src}
                          alt={activeAlbum.title}
                          className="object-contain w-full h-full rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 select-none"
                          quality={100}
                          priority
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div
                  className="w-full h-[20vh] flex flex-col items-center justify-center px-6 gap-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-center text-center w-full flex-grow">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md max-w-4xl"
                    >
                      <p className="text-zinc-900 dark:text-gray-200 text-sm md:text-base font-bold italic tracking-wide flex items-center justify-center gap-4 drop-shadow-sm">
                        <Info className="w-5 h-5 flex-shrink-0 text-cyan-500 dark:text-cyan-400" /> {activeAlbum.images[currentSlide].caption}
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex gap-3 pb-8">
                    {activeAlbum.images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "w-12 bg-cyan-400" : "w-4 bg-white/10"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            data-lenis-prevent
            className="w-full h-full overflow-y-auto overflow-x-hidden px-4 md:px-12 py-24 scroll-smooth flex flex-col items-center pointer-events-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 px-6 py-2 bg-card border border-border rounded-full mb-8"
                >
                  <LayoutGrid className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">Verified Engineering Portfolio</span>
                </motion.div>
                <h2 className="text-6xl md:text-9xl font-black text-zinc-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500 mb-6 drop-shadow-2xl uppercase tracking-tighter">
                  Certificates
                </h2>
                <p className="text-muted-foreground text-lg md:text-2xl font-medium tracking-wide">
                  Advanced Certifications & Technical Recognitions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
                {certificateGroups.map((group, idx) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      setActiveAlbum(group);
                      setCurrentSlide(0);
                    }}
                    className="group relative cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-border bg-black transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_50px_rgba(0,255,255,0.15)] mb-6">
                      <Image
                        src={group.coverImage}
                        alt={group.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 text-[10px] font-black text-white uppercase tracking-widest z-10 whitespace-nowrap">
                        {group.images.length} IMAGES
                      </div>
                    </div>

                    <div className="px-4">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{group.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm font-bold tracking-widest uppercase mb-4">{group.category}</p>
                      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground opacity-60">
                        <span>{group.date}</span>
                        <div className="flex items-center gap-1 text-cyan-400 group-hover:translate-x-1 transition-transform">
                          VIEW <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
