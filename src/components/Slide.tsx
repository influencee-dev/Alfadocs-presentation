import { motion, AnimatePresence } from "motion/react";
import { ReactNode, FC } from "react";

interface SlideProps {
  children: ReactNode;
  isActive: boolean;
  section?: string;
  background?: "dark" | "navy" | "violet" | "warm" | "blue";
}

export const Slide: FC<SlideProps> = ({ children, isActive, section, background = "dark" }) => {
  const bgClasses = {
    dark: "bg-[#0d0d18] text-white",
    navy: "bg-[#1a2b4b] text-white", // Deep blue
    blue: "bg-gradient-to-br from-[#1e3a8a] via-[#1e293b] to-[#0f172a] text-white",
    violet: "bg-gradient-to-br from-[#2e1065] via-[#1e1a48] to-[#0d0d18] text-white",
    warm: "bg-[#fdfcfb] text-[#1a2b4b]",
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -60, scale: 0.98 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          className={`absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-12 overflow-hidden ${bgClasses[background as keyof typeof bgClasses] || bgClasses.dark}`}
        >
          {/* Noise Overlay */}
          <div className="noise opacity-40" />
          
          {/* Section Tag */}
          {section && (
            <div className="absolute top-6 left-6 md:top-8 md:left-10 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium opacity-40 z-20">
              {section}
            </div>
          )}

          {/* Content Container */}
          <div className="relative z-20 w-full max-w-6xl max-h-full flex flex-col justify-center">
            {children}
          </div>

          {/* Abstract Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-violet opacity-10 blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-brand-purple opacity-5 blur-[80px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AnimationProps {
  children?: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeUp: FC<AnimationProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn: FC<AnimationProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay, ease: [0.34, 1.3, 0.64, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
