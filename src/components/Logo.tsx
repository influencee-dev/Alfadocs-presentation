import { motion } from "motion/react";

export const LogoIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 68 68" fill="none" className={className}>
    <rect x="4" y="18" width="24" height="24" rx="5" fill="currentColor" opacity="0.65" />
    <rect x="30" y="4" width="24" height="24" rx="5" fill="currentColor" opacity="0.85" />
    <rect x="30" y="30" width="24" height="24" rx="5" fill="currentColor" />
    <rect x="4" y="44" width="24" height="24" rx="5" fill="currentColor" opacity="0.55" />
  </svg>
);

export const LogoReveal = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
      {/* Old Logo Fading Out */}
      <motion.div
        initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        animate={{ 
          opacity: 0, 
          filter: "blur(20px)", 
          scale: 1.2,
          transition: { duration: 1.5, delay: 1, ease: "easeInOut" } 
        }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
      >
        <img 
          src="/old.png" 
          alt="Old Alfadocs Logo" 
          className="w-64 md:w-80 object-contain"
          referrerPolicy="no-referrer"
        />
        <div className="mt-8 font-serif text-4xl md:text-6xl font-extralight text-white/50 tracking-[0.2em] uppercase">
          ALFADOCS
        </div>
      </motion.div>

      {/* New Logo Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(10px)" }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          filter: "blur(0px)",
          transition: { duration: 1.2, delay: 2.2, ease: [0.34, 1.56, 0.64, 1] }
        }}
        className="flex flex-col items-center gap-8 z-20"
      >
        <div className="text-brand-purple text-xs font-medium tracking-[0.3em] uppercase mb-2">
          IL PROSSIMO CAPITOLO
        </div>
        <div className="flex items-center gap-6">
          <img 
            src="/new.png" 
            alt="New Alfadocs Logo" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_32px_rgba(103,97,229,0.6)]"
            referrerPolicy="no-referrer"
          />
          <span className="font-sans text-6xl md:text-8xl font-bold text-white tracking-tight">
            Alfadocs
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="font-serif text-xl md:text-2xl text-white/50 italic tracking-wide mt-4"
        >
          Dallo strumento alla <strong className="text-brand-violet not-italic">Piattaforma Operativa.</strong>
        </motion.div>
      </motion.div>

      {/* Decorative Rings */}
      <motion.div
        initial={{ width: 100, height: 100, opacity: 0 }}
        animate={{ 
          width: 800, 
          height: 800, 
          opacity: [0, 0.3, 0],
          transition: { duration: 4, delay: 2, ease: "easeOut" }
        }}
        className="absolute rounded-full border border-brand-violet/20 pointer-events-none"
      />
    </div>
  );
};
