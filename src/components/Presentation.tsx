import { useState, useEffect, useCallback } from "react";
import { Slide } from "./Slide";
import { slides } from "../data/slides";
import { motion } from "motion/react";

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      {/* Slides */}
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          isActive={currentSlide === index}
          section={slide.section}
          background={slide.background}
        >
          {slide.content}
        </Slide>
      ))}

      {/* Navigation UI */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-[100] bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-brand-violet scale-150 shadow-[0_0_8px_rgba(103,97,229,1)]" 
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="fixed top-6 right-8 text-xs font-medium opacity-35 tracking-widest z-[100]">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/5 z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-violet to-brand-accent"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Arrows */}
      <div className="fixed bottom-6 right-8 flex gap-3 z-[100]">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-violet/20 hover:border-brand-violet transition-all backdrop-blur-sm"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-violet/20 hover:border-brand-violet transition-all backdrop-blur-sm"
        >
          →
        </button>
      </div>
    </div>
  );
};
