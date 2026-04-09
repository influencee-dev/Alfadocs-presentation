import { ReactNode } from "react";
import { LogoReveal, LogoIcon } from "../components/Logo";
import { FadeUp, ScaleIn } from "../components/Slide";
import { motion } from "motion/react";

export interface SlideData {
  id: string;
  section: string;
  background: "dark" | "navy" | "violet" | "warm" | "blue";
  content: ReactNode;
}

export const slides: SlideData[] = [
  {
    id: "intro",
    section: "ALFADOCS ALL HANDS 2026",
    background: "blue",
    content: (
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <FadeUp delay={0.1} className="text-blue-300 text-xs font-medium tracking-[0.18em] uppercase mb-6">
          All Hands Meeting
        </FadeUp>
        <FadeUp delay={0.3}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8">
            Marketing Q1 2026 results <br />
            <span className="text-blue-400">&</span> <em className="text-brand-violet italic">The Big Reveal</em>
          </h1>
        </FadeUp>
        <FadeUp delay={0.5} className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8" />
        <FadeUp delay={0.7} className="text-lg md:text-xl text-white/50 tracking-wide font-light">
          April 2026 · Alfadocs Team
        </FadeUp>
      </div>
    )
  },
  {
    id: "s1",
    section: "SECTION 1: Q1 – MARKETING PRECISION & AUTHORITY",
    background: "blue",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8 lg:gap-16 items-center">
        <div>
          <FadeUp delay={0.1} className="text-blue-300 text-xs font-medium tracking-[0.18em] uppercase mb-4">
            Winning the Right Customers
          </FadeUp>
          <FadeUp delay={0.25}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-6">
              Marketing isn't just generating leads; <br />
              <em className="text-blue-400 italic text-4xl md:text-6xl lg:text-7xl">we are influencing the right conversations.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.4} className="flex gap-8 lg:gap-12 mt-6 lg:mt-10 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-bold text-blue-400">4,100+</span>
              <span className="text-[10px] md:text-sm opacity-50 tracking-wider uppercase">Impact at Scale</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-bold text-blue-300">60%</span>
              <span className="text-[10px] md:text-sm opacity-50 tracking-wider uppercase">Strategic Pivot</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-bold text-brand-accent">60</span>
              <span className="text-[10px] md:text-sm opacity-50 tracking-wider uppercase">Days to shift</span>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.55} className="flex flex-col items-center">
          <div className="flex items-end gap-3 md:gap-4 h-40 md:h-56 mb-6 md:mb-8">
            {[40, 45, 50, 60].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: h * 2.5 }}
                  transition={{ duration: 1.2, delay: 0.7 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  className={`w-10 md:w-12 rounded-t-lg relative ${
                    i === 3 
                      ? "bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_20px_rgba(96,165,250,0.4)]" 
                      : "bg-white/10"
                  }`}
                >
                  {i === 3 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 border-2 border-blue-400 rounded-full -z-10"
                    />
                  )}
                </motion.div>
                <span className={`text-[10px] md:text-xs ${i === 3 ? "text-blue-400 font-bold" : "opacity-40"}`}>
                  {i === 3 ? "60%" : `${40 + i * 5}%`}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[10px] md:text-xs opacity-35 text-center max-w-[220px] leading-relaxed">
            The Engine: Custom audiences and creative assets tailored to specific branch pain points.
          </p>
        </FadeUp>
      </div>
    )
  },
  {
    id: "s2",
    section: "SECTION 1: Q1 – MARKETING PRECISION & AUTHORITY",
    background: "blue",
    content: (
      <div className="max-w-4xl">
        <FadeUp delay={0.1} className="text-blue-300 text-xs font-medium tracking-[0.18em] uppercase mb-4">
          Driving Product Adoption & Expansion
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-8 lg:mb-10">
            Turning users into <br />
            <em className="text-blue-400 italic">power-users</em> alongside <br />
            Customer Success.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <FadeUp delay={0.4} className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
            <div className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-40 mb-4 lg:mb-6">Format Breakthrough</div>
            <div className="bg-blue-900/20 rounded-xl p-4 lg:p-5 mb-4 lg:mb-6 min-h-[100px] lg:min-h-[120px] relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] md:text-xs opacity-50">Prenotazione Online — Live</span>
              </div>
              <div className="h-1.5 bg-blue-400 rounded-full w-[70%] mb-2" />
              <div className="h-1 bg-white/5 rounded-full w-[45%] mb-1.5" />
              <div className="h-1 bg-white/5 rounded-full w-[60%]" />
              <div className="absolute bottom-3 right-4 text-[9px] md:text-[10px] text-blue-300 font-bold">● REC</div>
            </div>
            <p className="text-xs md:text-sm opacity-60 leading-relaxed">
              <strong className="text-white">900+</strong> existing clients reached. <br />
              Insight: Educational, live content is our <em className="text-blue-300 italic">"secret weapon"</em> for platform value.
            </p>
          </FadeUp>
          <FadeUp delay={0.55} className="bg-gradient-to-br from-blue-500/10 to-blue-900/20 border border-blue-500/20 rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-center text-center">
            <ScaleIn delay={0.7} className="mb-4 lg:mb-6">
              <svg width="64" height="64" viewBox="0 0 72 72" fill="none" className="drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">
                <circle cx="36" cy="36" r="35" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
                <path d="M18 50 L28 35 L38 42 L50 22" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M50 22 L50 30 M50 22 L42 22" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="18" cy="50" r="3" fill="#60A5FA"/>
                <circle cx="28" cy="35" r="3" fill="#93C5FD"/>
                <circle cx="38" cy="42" r="3" fill="#93C5FD"/>
                <circle cx="50" cy="22" r="4" fill="#60A5FA"/>
              </svg>
            </ScaleIn>
            <p className="text-xs md:text-sm opacity-60 leading-relaxed mb-4 lg:mb-6">
              Next Steps: Doubling down on webinars <br />
              to <strong className="text-white">lower churn</strong> & increase upsells
            </p>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] md:text-xs text-blue-300 font-medium">
              GROWTH →
            </div>
          </FadeUp>
        </div>
      </div>
    )
  },
  {
    id: "s3",
    section: "SECTION 1: Q1 – MARKETING PRECISION & AUTHORITY",
    background: "blue",
    content: (
      <div className="max-w-4xl">
        <FadeUp delay={0.1} className="text-blue-300 text-xs font-medium tracking-[0.18em] uppercase mb-4">
          Defining the Industry Standard
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] text-white mb-8 lg:mb-10">
            We aren't just following the market; <br />
            <em className="text-blue-400 italic">we are the ones analyzing it.</em>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {[
            { pub: "Partner Journal", title: "Osservatorio Digitale: Report esclusivo sul mercato healthcare 2025", logo: "DoctOs" },
            { pub: "Industry Publication", title: "Come la digitalizzazione trasforma la gestione dello studio dentistico", logo: "DentistaModerno" },
            { pub: "Media Dominance", title: "AlfaDocs: la Piattaforma Operativa per la sanità privata — earned PR coverage", logo: "TecnoMedicina" }
          ].map((item, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.1} className="bg-white/5 rounded-2xl p-5 lg:p-6 border border-white/10 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="h-8 lg:h-9 bg-blue-400/10 rounded-lg mb-4 flex items-center px-3">
                <span className="font-bold text-[10px] md:text-xs text-blue-300 uppercase">{item.logo}</span>
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-2">{item.pub}</div>
              <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">{item.title}</p>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.8} className="bg-gradient-to-r from-blue-600/20 to-blue-900/40 border border-blue-500/20 rounded-2xl p-5 lg:p-6 flex items-center gap-4 lg:gap-5 text-white">
          <div className="text-2xl lg:text-3xl">📊</div>
          <div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-300 mb-1">Executive Voice</div>
            <p className="text-xs md:text-sm font-medium opacity-90">
              High-impact thought leadership by Fabian, positioning Alfadocs as the intellectual leader in digital health.
            </p>
          </div>
        </FadeUp>
      </div>
    )
  },
  {
    id: "s4",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "blue",
    content: <LogoReveal />
  },
  {
    id: "s5",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="max-w-4xl">
        <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
          The Context
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-8 lg:mb-10">
            The market changed. <br />
            <em className="text-brand-violet italic">And we evolved.</em>
          </h2>
        </FadeUp>
        <div className="flex items-center gap-0 w-full mb-8 lg:mb-12">
          <FadeUp delay={0.4} className="flex-1 flex flex-col items-center gap-3 md:gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="8" width="28" height="20" rx="4" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none"/>
                <line x1="10" y1="14" x2="26" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
                <line x1="10" y1="18" x2="22" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-medium opacity-70">Software Gestionale</div>
              <div className="text-[9px] md:text-[10px] opacity-30 mt-1 uppercase tracking-widest">Point A</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.6} className="flex-[1.5] h-0.5 bg-gradient-to-r from-white/10 to-brand-violet relative -top-6 md:-top-8">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-8 border-transparent border-l-brand-violet" />
          </FadeUp>
          <FadeUp delay={0.8} className="flex-1 flex flex-col items-center gap-3 md:gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-brand-violet to-[#4340a8] shadow-[0_0_32px_rgba(103,97,229,0.35)] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="5" fill="rgba(255,255,255,0.9)"/>
                <circle cx="8" cy="8" r="3" fill="rgba(255,255,255,0.6)"/>
                <circle cx="28" cy="8" r="3" fill="rgba(255,255,255,0.6)"/>
                <circle cx="8" cy="28" r="3" fill="rgba(255,255,255,0.6)"/>
                <circle cx="28" cy="28" r="3" fill="rgba(255,255,255,0.6)"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-bold text-white">Piattaforma Operativa</div>
              <div className="text-[9px] md:text-[10px] opacity-40 mt-1 uppercase tracking-widest">Point B</div>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={1} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-brand-violet/10 border border-brand-violet/20 rounded-2xl p-5 lg:p-6">
            <div className="text-brand-purple font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">The Shift</div>
            <p className="text-xs md:text-sm opacity-70 leading-relaxed">Digitalization is the baseline; complexity is now the enemy.</p>
          </div>
          <div className="bg-brand-purple/10 border border-brand-purple/20 rounded-2xl p-5 lg:p-6">
            <div className="text-brand-purple font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">The AI Era</div>
            <p className="text-xs md:text-sm opacity-70 leading-relaxed">Automation is moving from the back-office to the clinical heart.</p>
          </div>
        </FadeUp>
        <FadeUp delay={1.2} className="mt-6 text-center">
          <p className="text-sm md:text-lg italic opacity-50 leading-relaxed font-serif">
            "Studi medici e strutture hanno sempre più bisogno di connettere dati, processi e persone."
          </p>
        </FadeUp>
      </div>
    )
  },
  {
    id: "s6",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
          The Category Shift
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-8 lg:mb-10">
            Non è un Rebranding. <br />
            <em className="text-brand-violet italic text-4xl md:text-6xl lg:text-7xl">È un Cambio di Categoria.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.4} className="w-full flex flex-col items-center">
          <div className="flex justify-center gap-2 mb-4 flex-wrap">
            {["Agency 1", "Agency 2", "Agency 3", "Agency 4", "Agency 5"].map((a, i) => (
              <div key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] opacity-50 uppercase tracking-wider">
                {a}
              </div>
            ))}
          </div>
          <svg width="240" height="50" viewBox="0 0 300 60" fill="none" className="mb-2">
            <path d="M30 5 L150 55 L270 5" stroke="url(#fg)" strokeWidth="1.5" fill="none"/>
            <defs>
              <linearGradient id="fg" x1="0" y1="0" x2="300" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
                <stop offset="50%" stopColor="#6761E5"/>
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)"/>
              </linearGradient>
            </defs>
            <line x1="150" y1="55" x2="150" y2="65" stroke="#6761E5" strokeWidth="1.5"/>
          </svg>
          <ScaleIn delay={0.6} className="px-8 py-4 bg-gradient-to-br from-brand-violet to-[#4340a8] rounded-full text-lg md:text-xl font-bold shadow-[0_0_40px_rgba(103,97,229,0.4)] tracking-wide">
            1 Identity · Alfadocs
          </ScaleIn>
        </FadeUp>
        <FadeUp delay={0.8} className="mt-8 grid grid-cols-3 gap-4 lg:gap-8">
          <div className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest">Increase value</div>
          <div className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest">Enterprise focus</div>
          <div className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest">Value-based sales</div>
        </FadeUp>
        <FadeUp delay={1} className="mt-8">
          <p className="font-serif text-lg md:text-xl italic text-white/50 leading-relaxed">
            "Il rebranding funziona quando sembra <em className="text-brand-purple">inevitabile</em>. <br />
            Non quando sembra una decisione marketing."
          </p>
        </FadeUp>
      </div>
    )
  },
  {
    id: "s7",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-8 lg:gap-12">
        <div className="relative z-10">
          <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
            The Manifesto
          </FadeUp>
          <FadeUp delay={0.25}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 lg:mb-8">
              Il <em className="text-brand-violet italic">TEMPO</em> è la nostra <br />
              misura del <em className="text-brand-violet italic">VALORE.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.4} className="border-l-2 border-brand-violet pl-6 mb-6 lg:mb-8">
            <p className="font-serif text-lg md:text-2xl italic text-white/55 leading-relaxed">
              "In sanità, il tempo non è una variabile operativa. <br />
              È una responsabilità."
            </p>
          </FadeUp>
          <FadeUp delay={0.55} className="text-sm md:text-lg text-white/45 max-w-lg mb-6 lg:mb-8">
            The Mission: Giving back space to those who cure.
          </FadeUp>
          <FadeUp delay={0.7} className="bg-brand-violet/10 border border-brand-violet/20 rounded-r-xl py-3 px-5 lg:py-4 lg:px-6 max-w-md">
             <p className="font-serif text-sm md:text-base italic opacity-60">
              "La vera innovazione non si misura nella tecnologia introdotta, ma nella <strong className="text-brand-purple not-italic">complessità eliminata.</strong>"
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.4} className="relative h-[400px] lg:h-[550px] hidden lg:block overflow-hidden rounded-3xl">
           <img 
            src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Doctor and Patient" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-violet/20 to-transparent" />
        </FadeUp>
      </div>
    )
  },
  {
    id: "s8",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
        <div>
          <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
            The Infrastructure
          </FadeUp>
          <FadeUp delay={0.25}>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-[1.12] mb-6">
              Four dimensions. <br />
              <em className="text-brand-violet italic">One single system.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.4} className="text-base md:text-lg opacity-60 mb-8 lg:mb-10">
            AlfaDocs è la Piattaforma Operativa per la sanità privata.
          </FadeUp>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { name: "GESTIONE", desc: "Clinical & Operating power" },
              { name: "RELAZIONE", desc: "Patient journey & trust" },
              { name: "ORGANIZZAZIONE", desc: "Team workflows" },
              { name: "ANALISI", desc: "Performance & visibility" }
            ].map((item, i) => (
              <FadeUp key={i} delay={0.5 + i * 0.1} className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-[10px] md:text-xs font-bold tracking-wider text-brand-purple mb-1">{item.name}</div>
                <div className="text-[9px] md:text-[10px] opacity-40 uppercase tracking-widest leading-tight">{item.desc}</div>
              </FadeUp>
            ))}
          </div>
        </div>
        <ScaleIn delay={0.6} className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-h-[400px] lg:max-h-none">
          <img 
            src="/input_file_0.png" 
            alt="Infrastructure Diagram" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </ScaleIn>
      </div>
    )
  },
  {
    id: "s9",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="flex flex-col items-center gap-12">
        <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase">
          The Visual Identity
        </FadeUp>
        <ScaleIn delay={0.3} className="flex flex-col items-center gap-8">
          <img 
            src="/input_file_2.png" 
            alt="New Alfadocs Logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_48px_rgba(103,97,229,0.8)]"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-white">Alfadocs</h1>
        </ScaleIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
          {[
            { title: "Viola Tech", desc: "A premium shift signaling authority and high-value." },
            { title: "Modern Typography", desc: "Clean, bold, and sophisticated." },
            { title: "Simplicity by Design", desc: "A visual reflection of our mission to eliminate friction." }
          ].map((p, i) => (
            <FadeUp key={i} delay={0.7 + i * 0.1} className="flex flex-col items-center text-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(224,64,251,1)]" />
              <div className="text-sm font-bold uppercase tracking-widest">{p.title}</div>
              <p className="text-xs opacity-50 leading-relaxed">{p.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "s10",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="flex flex-col items-center gap-6 lg:gap-10">
        <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase">
          A sneak peek of our new digital identity
        </FadeUp>
        <ScaleIn delay={0.3} className="w-full max-w-4xl aspect-[16/9] bg-[#0a0a16] rounded-[24px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Mock Website UI */}
          <div className="absolute top-0 left-0 w-full h-8 md:h-12 bg-white/5 border-b border-white/10 flex items-center px-4 md:px-6 gap-2 md:gap-4">
            <div className="flex gap-1 md:gap-1.5">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 h-4 md:h-6 bg-white/5 rounded-md mx-2 md:mx-4" />
          </div>
          <div className="mt-8 md:mt-12 p-6 md:p-12 grid grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <div className="w-16 md:w-20 h-4 md:h-6 bg-brand-violet/20 rounded-full" />
              <div className="h-8 md:h-12 bg-white/10 rounded-xl w-full" />
              <div className="h-8 md:h-12 bg-white/10 rounded-xl w-[80%]" />
              <div className="space-y-2 md:space-y-3 pt-2 md:pt-4">
                <div className="h-2 md:h-3 bg-white/5 rounded-full w-full" />
                <div className="h-2 md:h-3 bg-white/5 rounded-full w-full" />
                <div className="h-2 md:h-3 bg-white/5 rounded-full w-[60%]" />
              </div>
              <div className="w-24 md:w-40 h-8 md:h-12 bg-brand-violet rounded-full mt-4 md:mt-8" />
            </div>
            <div className="bg-brand-violet/5 rounded-3xl border border-brand-violet/10 flex items-center justify-center">
               <LogoIcon className="w-16 h-16 md:w-32 md:h-32 text-brand-violet/20" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-brand-purple font-bold tracking-[0.5em] uppercase text-[8px] md:text-xs opacity-50">
            WEBSITE PREVIEW
          </div>
        </ScaleIn>
      </div>
    )
  },
  {
    id: "s11",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "violet",
    content: (
      <div className="max-w-5xl mx-auto">
        <FadeUp delay={0.1} className="text-center text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
          The Pillars of Communication
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold leading-[1.12] mb-8 lg:mb-12">
            Come Parliamo da Oggi
          </h2>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {[
            { icon: "✂️", name: "SEMPLIFICAZIONE", desc: "Meno attriti, meno passaggi." },
            { icon: "⚡", name: "AUTOMAZIONE", desc: "La piattaforma lavora. Tu curi.", highlight: true },
            { icon: "🔗", name: "INTEGRAZIONE", desc: "Un unico sistema dove tutto si connette." },
            { icon: "🎯", name: "CONTROLLO", desc: "Vedi subito ciò che conta." },
            { icon: "⏱", name: "TEMPO RESTITUITO", desc: "Trasforma il tempo in valore.", special: true }
          ].map((p, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.1} className={`p-4 md:p-6 rounded-3xl flex flex-col items-center text-center gap-3 md:gap-4 transition-all duration-300 group cursor-default ${
              p.special ? "bg-brand-violet/10 border border-brand-violet/30" : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}>
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-1 md:mb-2 ${
                p.highlight ? "bg-gradient-to-br from-brand-violet/30 to-brand-purple/20" : "bg-white/5"
              }`}>
                {p.icon}
              </div>
              <div className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${p.special ? "text-brand-accent" : "text-brand-purple"}`}>
                {p.name}
              </div>
              <p className="text-[10px] md:text-xs italic opacity-40 leading-relaxed">"{p.desc}"</p>
            </FadeUp>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "s12",
    section: "SECTION 2: ALFADOCS – OUR NEW CHAPTER",
    background: "warm",
    content: (
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <FadeUp delay={0.1} className="text-brand-violet text-xs font-medium tracking-[0.18em] uppercase mb-4">
          Ownership
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-[1.4] text-brand-dark mb-10">
            La Storia ora è vostra.
          </h2>
        </FadeUp>
        <ScaleIn delay={0.5} className="flex gap-[-10px] mb-10 flex-wrap justify-center">
          {["🤝", "💜", "⚡", "🚀", "🤝", "💡", "🎯", "✨"].map((emoji, i) => (
            <div key={i} className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-violet to-brand-purple border-4 border-brand-warm flex items-center justify-center text-xl -ml-4 first:ml-0 hover:-translate-y-2 transition-transform cursor-pointer relative z-10">
              {emoji}
            </div>
          ))}
        </ScaleIn>
        <FadeUp delay={0.7} className="text-lg text-brand-dark/60 max-w-xl leading-relaxed space-y-6">
          <p>A brand is a promise; high-value design requires high-value service.</p>
          <p className="font-serif text-2xl text-brand-dark italic">
            "Oggi presento un cambio di logo e simbolo, <br />
            ma domani questa storia sarà vostra!"
          </p>
        </FadeUp>
        <FadeUp delay={0.9} className="mt-10 px-8 py-4 bg-brand-violet text-white rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform">
          LA STORIA È NOSTRA →
        </FadeUp>
      </div>
    )
  },
  {
    id: "s13",
    section: "SECTION 3: Q2 STRATEGY – THE ROAD AHEAD",
    background: "violet",
    content: (
      <div className="max-w-4xl">
        <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
          Next Steps Timeline
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-8 lg:mb-12">
            The Road to <em className="text-brand-violet italic">Expodental</em>
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-6 md:gap-8 mb-8 lg:mb-12">
          <div className="flex justify-end gap-0 ml-24 md:ml-36 mb-2">
            <div className="flex-1 flex justify-between px-2 text-[8px] md:text-[10px] opacity-30 font-bold tracking-widest">
              <span>NOW</span>
              <span>+30D</span>
              <span>+60D</span>
              <span className="opacity-100 text-brand-violet">EXPODENTAL</span>
            </div>
          </div>
          {[
            { phase: "Phase 1", title: "Internalization", desc: "Review the Playbook; live with the brand", width: "33%", color: "from-[#4340a8] to-brand-violet" },
            { phase: "Phase 2", title: "Empowerment", desc: "Partnering with Sales/CS to refine delivery", width: "55%", ml: "2%", color: "from-brand-violet to-brand-purple" },
            { phase: "Phase 3", title: "The Big Reveal", desc: "Official external launch across all channels", width: "22%", ml: "70%", color: "from-brand-purple to-brand-accent" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6">
              <FadeUp delay={0.4 + i * 0.1} className="w-24 md:w-32 text-right">
                <div className="text-xs md:text-sm font-bold text-white/70">{item.phase}</div>
                <div className="text-[8px] md:text-[10px] opacity-30 uppercase tracking-widest mt-1">{item.title}</div>
              </FadeUp>
              <div className="flex-1 h-8 md:h-10 bg-white/5 rounded-xl relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.2, ease: [0.34, 1.2, 0.64, 1] }}
                  style={{ marginLeft: item.ml || "0" }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-xl flex items-center px-3 md:px-4 text-[8px] md:text-[10px] font-bold whitespace-nowrap`}
                >
                  {item.desc}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <FadeUp delay={1.5} className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-brand-violet to-brand-purple rounded-full font-bold text-xs md:text-sm shadow-[0_8_32px_rgba(103,97,229,0.3)]">
          🏆 Grand Debut · Expodental 2026
        </FadeUp>
      </div>
    )
  },
  {
    id: "s14",
    section: "SECTION 3: Q2 STRATEGY – THE ROAD AHEAD",
    background: "violet",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8 lg:gap-16 items-center">
        <div>
          <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
            The Powerhouse in Action
          </FadeUp>
          <FadeUp delay={0.25}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-6 lg:mb-8">
              Evolving our messaging <br />
              to capture the <br />
              <em className="text-brand-violet italic">full market.</em>
            </h2>
          </FadeUp>
          <ScaleIn delay={0.6} className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-brand-accent font-bold tracking-widest mb-4 lg:mb-6 text-xs md:text-sm">
            ⚡ ALIA — AI Agent First Step
          </ScaleIn>
          <FadeUp delay={0.8} className="text-xs md:text-sm opacity-50 leading-relaxed max-w-md">
            The "ALIA" Reveal: Consolidating all AI features under one identity. This is the first step of our AI Agent.
          </FadeUp>
        </div>
        <div className="relative aspect-square max-w-[300px] lg:max-w-none mx-auto lg:mx-0">
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-brand-violet/20 blur-[60px] md:blur-[100px] rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-violet/40 border border-brand-violet flex items-center justify-center text-lg md:text-xl font-bold z-10 shadow-[0_0_40px_rgba(103,97,229,0.5)]">
              ALIA
            </div>
            {[
              { label: "ML", pos: "top-[10%] left-[20%]", size: "w-12 h-12 md:w-16 md:h-16" },
              { label: "NLP", pos: "top-[5%] right-[25%]", size: "w-10 h-10 md:w-12 md:h-12" },
              { label: "AI", pos: "bottom-[15%] right-[20%]", size: "w-12 h-12 md:w-16 md:h-16" },
              { label: "RPA", pos: "bottom-[10%] left-[25%]", size: "w-10 h-10 md:w-12 md:h-12" },
              { label: "OCR", pos: "top-[45%] left-[5%]", size: "w-10 h-10 md:w-12 md:h-12" },
              { label: "LLM", pos: "bottom-[45%] right-[5%]", size: "w-10 h-10 md:w-12 md:h-12" }
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className={`absolute ${node.pos} ${node.size} rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-[8px] md:text-[10px] font-bold shadow-lg`}
              >
                {node.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "s15",
    section: "SECTION 3: Q2 STRATEGY – THE ROAD AHEAD",
    background: "warm",
    content: (
      <div className="max-w-4xl">
        <FadeUp delay={0.1} className="text-brand-violet text-xs font-medium tracking-[0.18em] uppercase mb-2 md:mb-4">
          High-Impact Campaigns
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] text-brand-dark mb-6 lg:mb-10">
            A multi-channel blitz <br />
            to dominate Q2.
          </h2>
        </FadeUp>
        <FadeUp delay={0.4} className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-brand-dark/10 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-dark text-white/70 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
                <th className="px-4 py-3 md:px-8 md:py-5">Strategy</th>
                <th className="px-4 py-3 md:px-8 md:py-5">Details</th>
                <th className="px-4 py-3 md:px-8 md:py-5">Channels</th>
              </tr>
            </thead>
            <tbody className="text-brand-dark">
              {[
                { name: "Re-brand & Expodental", details: "Total takeover", channels: ["Digital", "Social", "PR", "Organic"] },
                { name: "Medicina Estetica", details: "Dedicated GTM launch", channels: ["LinkedIn", "Meta Ads"] },
                { name: "The Big Shift", details: "Moving to 'Digitalizzazione' narrative", channels: ["All Content"] },
                { name: "Core Growth", details: "Launch branch campaigns", channels: ["Google Ads", "Meta"] }
              ].map((row, i) => (
                <tr key={i} className="border-b border-brand-dark/5 last:border-0 hover:bg-brand-violet/5 transition-colors">
                  <td className="px-4 py-3 md:px-8 md:py-6 font-bold text-xs md:text-sm">{row.name}</td>
                  <td className="px-4 py-3 md:px-8 md:py-6 text-[10px] md:text-sm opacity-70 leading-relaxed">{row.details}</td>
                  <td className="px-4 py-3 md:px-8 md:py-6">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {row.channels.map((c, ci) => (
                        <span key={ci} className="px-2 py-0.5 md:px-3 md:py-1 bg-brand-violet/10 border border-brand-violet/20 rounded-full text-[8px] md:text-[10px] font-bold text-brand-violet uppercase">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeUp>
      </div>
    )
  },
  {
    id: "s16",
    section: "SECTION 3: Q2 STRATEGY – THE ROAD AHEAD",
    background: "violet",
    content: (
      <div className="max-w-5xl mx-auto">
        <FadeUp delay={0.1} className="text-brand-purple text-xs font-medium tracking-[0.18em] uppercase mb-4">
          Expodental & Beyond
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-8 lg:mb-12">
            Winning through strategic <br />
            presence and <em className="text-brand-violet italic">partnerships.</em>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
          <FadeUp delay={0.4} className="relative rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group max-h-[300px] lg:max-h-none">
            <img 
              src="/input_file_3.png" 
              alt="Expodental Booth" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold mb-1 md:mb-2">3D Render</div>
              <div className="text-xl md:text-2xl font-bold">Expodental 2026 Booth</div>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-4 md:gap-6">
            {[
              { title: "Expodental 2026", desc: "More than a booth— a brand experience." },
              { title: "AI Workshop", desc: "Exclusive PLAUD & Alfadocs workshop showing AI clinical documentation." },
              { title: "Strategic Presence", desc: "Winning through high-impact physical and digital touchpoints.", highlight: true }
            ].map((item, i) => (
              <FadeUp key={i} delay={0.6 + i * 0.1} className={`p-4 md:p-6 rounded-2xl border ${
                item.highlight ? "bg-brand-violet/10 border-brand-violet/30" : "bg-white/5 border-white/10"
              }`}>
                <div className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1 md:mb-2 ${item.highlight ? "text-brand-accent" : "text-brand-purple"}`}>
                  {item.title}
                </div>
                <p className="text-xs md:text-sm opacity-60 leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "s17",
    section: "",
    background: "violet",
    content: (
      <div className="flex flex-col items-center text-center gap-6 md:gap-10">
        <div className="relative">
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-brand-violet blur-[80px] md:blur-[120px] rounded-full -z-10"
          />
          <FadeUp delay={0.1} className="font-serif text-xl md:text-4xl text-white/50 font-light tracking-wide">
            Q2: The Quarter of
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1 className="font-serif text-5xl md:text-9xl font-semibold leading-none mt-2 md:mt-4">
              <em className="text-brand-violet italic">Transformation.</em>
            </h1>
          </FadeUp>
        </div>
        <FadeUp delay={0.4} className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-brand-violet to-transparent" />
        <FadeUp delay={0.55} className="text-base md:text-xl text-white/45 max-w-lg leading-relaxed">
          The Goal: Unify the brand and product experience to lead the Italian market.
        </FadeUp>
        <FadeUp delay={0.7} className="font-serif text-xl md:text-4xl italic text-brand-accent animate-pulse">
          Let's make it inevitable!
        </FadeUp>
        <ScaleIn delay={0.9} className="flex flex-col items-center gap-4 mt-4 md:mt-8">
          <div className="flex items-center gap-4 md:gap-5">
            <img 
              src="/input_file_2.png" 
              alt="New Alfadocs Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_16px_rgba(103,97,229,0.5)]"
              referrerPolicy="no-referrer"
            />
            <span className="text-3xl md:text-4xl font-bold tracking-tight">Alfadocs</span>
          </div>
        </ScaleIn>
      </div>
    )
  }
];
