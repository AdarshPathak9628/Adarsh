"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Database, Code, BrainCircuit, Cloud, ShieldCheck } from "lucide-react";
import Image from "next/image";
import oracleCert from "../src/assets/images/ODBCS25CP.jpeg";

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const textCertificates = [
  {
    title: "Oracle Cloud Data Science Professional 2025",
    icon: <BrainCircuit className="w-10 h-10 text-orange-400 mb-4" />,
    description: "Demonstrated advanced proficiency in designing, building, and deploying machine learning models on OCI. Validated expertise in accelerating data science workflows using cloud-native tools, Python, and Oracle's powerful AI infrastructure.",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/30"
  },
  {
    title: "IBM Cognitive Class: Python for Data Science",
    icon: <Code className="w-10 h-10 text-blue-400 mb-4" />,
    description: "Mastered the core Python fundamentals specifically tailored for data analysis. Gained hands-on experience with Pandas, NumPy, and exploratory data analysis techniques crucial for modern data engineering.",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30"
  },
  {
    title: "SQL Analytics and BI on Databricks",
    icon: <Database className="w-10 h-10 text-red-400 mb-4" />,
    description: "Certified in executing complex data analytics and Business Intelligence operations on the Databricks Lakehouse platform. Proficient in optimizing SQL queries and generating actionable insights from big data architectures.",
    color: "from-red-500/20 to-rose-500/10",
    border: "border-red-500/30"
  },
  {
    title: "Simplilearn Machine Learning",
    icon: <BrainCircuit className="w-10 h-10 text-emerald-400 mb-4" />,
    description: "Comprehensive certification covering supervised and unsupervised learning algorithms. Built robust predictive models and deep-dived into feature engineering, cross-validation, and model optimization.",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30"
  },
  {
    title: "NIELIT O-Level & A-Level",
    icon: <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />,
    description: "Rigorous government-certified IT foundations program. Mastered full-stack web development concepts, advanced problem-solving in Python/C++, and complex software architecture under the Ministry of Electronics and IT.",
    color: "from-purple-500/20 to-fuchsia-500/10",
    border: "border-purple-500/30"
  }
];

export default function CertificatesModal({ isOpen, onClose }: CertificatesModalProps) {
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
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all text-white border border-white/20 z-50 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full max-w-7xl h-[85vh] overflow-y-auto no-scrollbar rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-12 text-center drop-shadow-2xl">
              Professional Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Image Certificate */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/10 to-transparent p-6 rounded-3xl border border-yellow-500/30 shadow-[0_8px_32px_0_rgba(255,165,0,0.1)] group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Cloud className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    Oracle Cloud Database Services 2025 Certified Professional
                  </h3>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative w-full h-[400px]">
                  <Image 
                    src={oracleCert.src} 
                    alt="Oracle Database Certification" 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </motion.div>

              {/* Text Certificates */}
              {textCertificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${cert.color} p-8 rounded-3xl border ${cert.border} shadow-lg relative overflow-hidden group cursor-pointer`}
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

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
