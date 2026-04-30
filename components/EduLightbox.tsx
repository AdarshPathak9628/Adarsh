"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface EduImage {
  src: any;
  caption: string;
}

interface EduLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: EduImage[];
  title: string;
}

export default function EduLightbox({ isOpen, onClose, images, title }: EduLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-3xl overflow-hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Close Button (Highest Z-Index) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="fixed top-6 right-6 md:top-8 md:right-8 p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-xl transition-all text-white border border-white/10 z-[10001] group"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Header Section (15% Height) */}
          <div 
            className="w-full h-[15vh] flex flex-col items-center justify-center text-center px-4 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Academic Record</p>
            <h3 className="text-2xl md:text-5xl font-black text-white leading-tight px-4 uppercase tracking-tighter">{title}</h3>
          </div>

          {/* Image Area (65% Height) with Navigation */}
          <div 
            className="relative w-full h-[65vh] flex items-center justify-center group p-4 md:p-[40px]"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 md:left-8 z-10 p-3 md:p-5 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 md:right-8 z-10 p-3 md:p-5 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={title}
                  className="object-contain w-full h-full rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 select-none"
                  quality={100}
                  priority
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Section (20% Height Gap) */}
          <div 
            className="w-full h-[20vh] flex flex-col items-center justify-center px-6 gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center text-center w-full flex-grow">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 md:px-10 py-4 md:py-5 max-w-4xl"
              >
                <p className="text-white dark:text-gray-200 text-xs md:text-base font-bold italic tracking-wide flex items-center justify-center gap-3 md:gap-4 text-center leading-relaxed drop-shadow-md">
                  <Info className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-cyan-400" /> {images[currentIndex].caption}
                </p>
              </motion.div>
            </div>

            {/* Pagination Indicators */}
            {images.length > 1 && (
              <div className="flex gap-3 pb-8">
                {images.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-12 bg-cyan-400" : "w-4 bg-white/10"}`} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
