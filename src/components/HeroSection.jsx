import { motion } from "framer-motion";
import { MapPin, Globe, ArrowUpRight, Github, FileText } from "lucide-react";
import { hero, personal } from "../data/portfolio.js";
import { heroReveal, heroContainer, btnHoverAnim, btnTapAnim } from "../lib/animations.js";

// Slowly-rotating crystal polygon — decorative accent
function CrystalAccent() {
  return (
    <motion.div
      className="absolute right-[-5%] top-[8%] w-[600px] h-[600px] pointer-events-none select-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <polygon
          points="300,30 520,130 570,320 480,530 280,570 80,470 30,260 120,80"
          stroke="rgba(255,107,53,0.07)"
          strokeWidth="1"
          fill="none"
        />
        <polygon
          points="300,80 480,165 525,320 445,490 280,520 110,430 70,260 155,105"
          stroke="rgba(255,159,90,0.04)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

// Frosted glass stat card + portrait illustration — desktop only
function HeroVisual() {
  const stats = [
    { number: "6+", label: "Projects Shipped"  },
    { number: "4",  label: "Repos Maintained"  },
    { number: "2",  label: "OSS Orgs"          },
  ];

  return (
    <motion.div
      className="hidden lg:flex flex-col items-center gap-6 absolute right-[4%] top-1/2 -translate-y-1/2 z-10"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Khadijah Abdulwasii"
    >
      {/* Portrait illustration */}
      <div className="relative w-[220px]">
        {/* Accent glow ring behind image */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: "0 0 60px rgba(255,107,53,0.18), 0 0 0 1px rgba(255,107,53,0.12)",
            borderRadius: "1rem",
          }}
          aria-hidden="true"
        />
        <motion.img
          src={`${import.meta.env.BASE_URL}illustration.png`}
          alt="Khadijah Abdulwasii — AI Design Engineer"
          className="w-full rounded-2xl relative z-10"
          style={{ filter: "contrast(1.04) brightness(0.97)" }}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Subtle orange tint overlay — ties portrait to brand palette */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Glass stat card */}
      <div className="glass-card rounded-2xl px-6 py-5 w-[220px]">
        <div className="flex items-center justify-between">
          {stats.map(({ number, label }, i) => (
            <div key={label} className={`text-center ${i > 0 ? "border-l border-borderSubtle pl-4" : ""}`}>
              <div className="text-xl font-bold text-gradient leading-none">{number}</div>
              <div className="text-[10px] text-textMuted font-mono mt-1 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.055) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,159,90,0.035) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <CrystalAccent />
      <HeroVisual />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 py-24">
        <motion.div variants={heroContainer} initial="hidden" animate="visible" className="lg:max-w-[55%]">

          {/* Availability badge */}
          <motion.div variants={heroReveal} custom={0} className="mb-8">
            <motion.span
              className="inline-flex items-center gap-2 text-accent text-xs font-mono font-medium px-4 py-2 rounded-full bg-[rgba(255,107,53,0.07)] border border-[rgba(255,107,53,0.18)]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {hero.label}
            </motion.span>
          </motion.div>

          {/* Headline — blur-to-clear entrance */}
          <motion.h1
            id="hero-headline"
            variants={heroReveal}
            custom={1}
            className="text-[clamp(3.2rem,9vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-7"
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            AI Design
            <br />
            <span className="text-gradient">Engineer</span>
          </motion.h1>

          {/* Value proposition subheadline */}
          <motion.p
            variants={heroReveal}
            custom={2}
            className="text-lg lg:text-xl text-textMuted leading-relaxed max-w-xl mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={heroReveal}
            custom={3}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <motion.a
              href={hero.cta.primary.href}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-medium text-sm shadow-[0_0_28px_rgba(255,107,53,0.28)] btn-scale"
              whileHover={{ ...btnHoverAnim, backgroundColor: "#ff9f5a", boxShadow: "0 0 40px rgba(255,107,53,0.42)" }}
              whileTap={btnTapAnim}
            >
              {hero.cta.primary.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.a>

            <motion.a
              href={hero.cta.secondary.href}
              className="inline-flex items-center gap-2 border border-borderSubtle text-textPrimary px-8 py-3.5 rounded-full font-medium text-sm btn-scale"
              whileHover={{ ...btnHoverAnim, borderColor: "rgba(255,107,53,0.35)", backgroundColor: "rgba(255,107,53,0.04)" }}
              whileTap={btnTapAnim}
            >
              <Github size={15} className="text-accent" aria-hidden="true" />
              {hero.cta.secondary.label}
            </motion.a>

            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-borderSubtle text-textMuted px-6 py-3.5 rounded-full font-medium text-sm btn-scale"
              whileHover={{ ...btnHoverAnim, borderColor: "rgba(255,107,53,0.35)", color: "#f5f5f5", backgroundColor: "rgba(255,107,53,0.04)" }}
              whileTap={btnTapAnim}
            >
              <FileText size={14} className="text-accent" aria-hidden="true" />
              {hero.cta.tertiary.label}
            </motion.a>
          </motion.div>

          {/* Credibility strip */}
          <motion.div
            variants={heroReveal}
            custom={4}
            className="flex flex-wrap items-center gap-2 mb-12"
            aria-label="Areas of expertise"
          >
            {hero.credibilityStrip.map((item, i) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-textMuted px-3 py-1 rounded-full border border-borderSubtle bg-surfaceElevated"
              >
                <span className="w-1 h-1 rounded-full bg-accent opacity-70" aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Meta row */}
          <motion.div
            variants={heroReveal}
            custom={5}
            className="flex flex-wrap items-center gap-5 text-sm text-textMuted border-t border-borderSubtle pt-8"
          >
            <span className="flex items-center gap-2">
              <MapPin size={13} aria-hidden="true" />
              {personal.location}
            </span>
            <span className="flex items-center gap-2">
              <Globe size={13} aria-hidden="true" />
              {personal.remote}
            </span>
            <motion.a
              href="#contact"
              className="ml-auto text-accent font-medium flex items-center gap-1.5"
              whileHover={{ color: "#ff9f5a", x: 2 }}
              transition={{ duration: 0.18 }}
            >
              Let's Talk
              <ArrowUpRight size={13} aria-hidden="true" />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
