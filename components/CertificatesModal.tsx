"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Database, Code, BrainCircuit, Cloud, ShieldCheck, Trophy, Target, BookOpen, BarChart3, GraduationCap } from "lucide-react";
import Image from "next/image";
import oracleCert from "../src/assets/images/ODBCS25CP.jpeg";
import hackathonImg from "../src/assets/images/1st Hackmanthan Eventeye LPU geeks of geeks.jpeg";
import bodhScriptImg from "../src/assets/images/Bodh script club . CPP.png";
import yashodaAiImg from "../src/assets/images/Yashoda AI.jpeg";
import yashodaAiSquortImg from "../src/assets/images/Yashoda AI Squort.jpeg";
import cyberSecurityImg from "../src/assets/images/cyber security quiz J & K Gov.jpg";
import screenshot1 from "../src/assets/images/Screenshot 2025-11-18 192111.png";
import screenshot2 from "../src/assets/images/Screenshot 2025-11-18 192135.png";
import screenshot3 from "../src/assets/images/Screenshot 2025-11-18 192200.png";

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const textCertificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 — Data Science Professional",
    icon: <BrainCircuit className="w-10 h-10 text-cyan-400 mb-4" />,
    description: "Demonstrated advanced proficiency in designing, building, and deploying machine learning models on OCI. Validated expertise in accelerating data science workflows using cloud-native tools, Python, and Oracle's powerful AI infrastructure.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30"
  },
  {
    title: "IBM: Python 101 for Data Science (PY0101EN)",
    icon: <Code className="w-10 h-10 text-blue-400 mb-4" />,
    description: "Mastered the core Python fundamentals specifically tailored for data analysis. Gained hands-on experience with Pandas, NumPy, and exploratory data analysis techniques crucial for modern data engineering.",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30"
  },
  {
    title: "IBM: Data Analysis with Python",
    icon: <BarChart3 className="w-10 h-10 text-sky-400 mb-4" />,
    description: "Certified in performing data wrangling, exploratory data analysis, and model development using Python. Proficient in utilizing Pandas, Matplotlib, and Scikit-learn for building data-driven analytical workflows.",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30"
  },
  {
    title: "SQL Analytics and BI on Databricks",
    icon: <Database className="w-10 h-10 text-indigo-400 mb-4" />,
    description: "Certified in executing complex data analytics and Business Intelligence operations on the Databricks Lakehouse platform. Proficient in optimizing SQL queries and generating actionable insights from big data architectures.",
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30"
  },
  {
    title: "Simplilearn Machine Learning",
    icon: <BrainCircuit className="w-10 h-10 text-emerald-400 mb-4" />,
    description: "Comprehensive certification covering supervised and unsupervised learning algorithms. Built robust predictive models and deep-dived into feature engineering, cross-validation, and model optimization.",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30"
  },
  {
    title: "NIELIT O-Level, A-Level & CCC Certifications",
    icon: <ShieldCheck className="w-10 h-10 text-fuchsia-400 mb-4" />,
    description: "Rigorous government-certified IT foundations program under the Ministry of Electronics and IT. Mastered full-stack web development concepts, advanced problem-solving in Python/C++, and complex software architecture.",
    color: "from-fuchsia-500/20 to-pink-500/10",
    border: "border-fuchsia-500/30"
  },
  {
    title: "Python Web Development — Arudan Technologies",
    icon: <GraduationCap className="w-10 h-10 text-amber-400 mb-4" />,
    description: "Professional training certification in Python, Django, MySQL, HTML, CSS, and Bootstrap. Assembled database-driven web modules, refined backend logic, and integrated authentication workflows for secure user interaction.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30"
  }
];

const imageAchievements = [
  { src: hackathonImg.src, title: "1st HackManthan — EventEye (LPU / GeeksforGeeks)", icon: <Trophy className="w-6 h-6 text-yellow-400" /> },
  { src: bodhScriptImg.src, title: "Bodh Script Club — Scratch Your Brain (C++)", icon: <Code className="w-6 h-6 text-blue-400" /> },
  { src: yashodaAiImg.src, title: "Yashoda AI Initiative", icon: <BrainCircuit className="w-6 h-6 text-cyan-400" /> },
  { src: yashodaAiSquortImg.src, title: "Yashoda AI — Full Certificate", icon: <BrainCircuit className="w-6 h-6 text-teal-400" /> },
  { src: cyberSecurityImg.src, title: "Cyber Security Quiz (J&K Gov)", icon: <ShieldCheck className="w-6 h-6 text-green-400" /> },
  { src: screenshot1.src, title: "Oracle Cloud — Certificate Screenshot 1", icon: <Cloud className="w-6 h-6 text-orange-400" /> },
  { src: screenshot2.src, title: "Oracle Cloud — Certificate Screenshot 2", icon: <Cloud className="w-6 h-6 text-orange-400" /> },
  { src: screenshot3.src, title: "Oracle Cloud — Certificate Screenshot 3", icon: <Cloud className="w-6 h-6 text-orange-400" /> },
];

export default function CertificatesModal({ isOpen, onClose }: CertificatesModalProps) {
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all text-white border border-white/20 z-[60] group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* ─── Lightbox Overlay ─── */}
          <AnimatePresence>
            {lightboxImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 cursor-zoom-out"
                onClick={() => setLightboxImg(null)}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all text-white border border-white/20 z-[80] group"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-5xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-white text-center font-bold text-lg mb-4 drop-shadow-lg">{lightboxImg.title}</p>
                  <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(0,200,255,0.15)]">
                    <Image
                      src={lightboxImg.src}
                      alt={lightboxImg.title}
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full max-w-7xl h-[85vh] overflow-y-auto no-scrollbar rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_0_100px_rgba(0,255,255,0.05)]"
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 mb-12 text-center drop-shadow-2xl">
              Credentials & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Oracle Database Certificate — Featured with Image */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setLightboxImg({ src: oracleCert.src, title: "Oracle Cloud Database Services 2025 Certified Professional" })}
                className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 rounded-3xl border border-cyan-500/30 shadow-[0_8px_32px_0_rgba(0,255,255,0.1)] group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Cloud className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Oracle Cloud Database Services 2025 Certified Professional
                  </h3>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src={oracleCert.src} 
                    alt="Oracle Database Certification" 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold text-lg bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/20">
                      Click to Expand
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text Certificates */}
              {textCertificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${cert.color} p-8 rounded-3xl border ${cert.border} shadow-lg relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-white/10 transition-colors"></div>
                  {cert.icon}
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-white/80 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                    {cert.description}
                  </p>
                </motion.div>
              ))}

              {/* Image-Based Achievements — All Clickable */}
              {imageAchievements.map((item, idx) => (
                <motion.div
                  key={`img-${idx}`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setLightboxImg({ src: item.src, title: item.title })}
                  className="col-span-1 bg-gradient-to-br from-white/5 to-transparent p-6 rounded-3xl border border-white/20 shadow-lg group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 relative w-full h-[250px]">
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill 
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold text-sm bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                        Click to Zoom
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
