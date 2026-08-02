import { motion } from "framer-motion";
import { MapPin, Globe, ArrowUpRight, Github, FileText } from "lucide-react";
import { hero, personal, resumeUrl } from "../data/portfolio.js";
import { heroReveal, heroContainer, btnHoverAnim, btnTapAnim } from "../lib/animations.js";
import CrystalLayer from "./CrystalLayer.jsx";

function StatStrip() {
  const stats = [
    { number: "6+", label: "Projects" },
    { number: "3",  label: "OSS Repos" },
    { number: "2",  label: "OSS Orgs"  },
  ];
  return (
    <div className="glass-card rounded-xl px-4 py-3 w-full mt-3">
      <div className="flex items-center justify-between gap-2">
        {stats.map(({ number, label }, i) => (
          <div
            key={label}
            className={`text-center flex-1 ${i > 0 ? "border-l border-borderSubtle pl-2" : ""}`}
          >
            <div className="text-sm lg:text-base font-bold text-gradient leading-none">{number}</div>
            <div className="text-[9px] text-textMuted font-mono mt-0.5 leading-tight">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <CrystalLayer variant="hero" />

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

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 py-20 lg:py-28">
        {/*
          Layout:
          Mobile  (<768):  portrait on top, text below — stacked column, portrait centered at 200px
          Tablet  (768+):  side-by-side — text left, portrait right 200px
          Desktop (1024+): side-by-side — text left, portrait right 240px
          XL      (1280+): side-by-side — text left, portrait right 260px
        */}
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16">

          {/* ── Text column ── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-0"
          >
            <motion.div variants={heroReveal} custom={0} className="mb-7">
              <span className="inline-flex items-center gap-2 text-accent text-xs font-mono font-medium px-4 py-2 rounded-full bg-[rgba(255,107,53,0.07)] border border-[rgba(255,107,53,0.18)]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                {hero.label}
              </span>
            </motion.div>

            <motion.h1
              id="hero-headline"
              variants={heroReveal}
              custom={1}
              className="text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[0.93] tracking-[-0.04em] mb-5"
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              AI Design
              <br />
              <span className="text-gradient">Engineer</span>
            </motion.h1>

            <motion.p
              variants={heroReveal}
              custom={2}
              className="text-base lg:text-lg text-textMuted leading-relaxed max-w-lg mb-8"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroReveal} custom={3} className="flex flex-wrap gap-3 mb-8">
              <motion.a
                href={hero.cta.primary.href}
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-full font-medium text-sm shadow-[0_0_28px_rgba(255,107,53,0.28)] btn-scale"
                whileHover={{ ...btnHoverAnim, backgroundColor: "#ff9f5a", boxShadow: "0 0 40px rgba(255,107,53,0.42)" }}
                whileTap={btnTapAnim}
              >
                {hero.cta.primary.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </motion.a>

              <motion.a
                href={hero.cta.secondary.href}
                className="inline-flex items-center gap-2 border border-borderSubtle text-textPrimary px-7 py-3 rounded-full font-medium text-sm btn-scale"
                whileHover={{ ...btnHoverAnim, borderColor: "rgba(255,107,53,0.35)", backgroundColor: "rgba(255,107,53,0.04)" }}
                whileTap={btnTapAnim}
              >
                <Github size={14} className="text-accent" aria-hidden="true" />
                {hero.cta.secondary.label}
              </motion.a>

              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-borderSubtle text-textMuted px-6 py-3 rounded-full font-medium text-sm btn-scale"
                whileHover={{ ...btnHoverAnim, borderColor: "rgba(255,107,53,0.35)", color: "#f5f5f5", backgroundColor: "rgba(255,107,53,0.04)" }}
                whileTap={btnTapAnim}
              >
                <FileText size={13} className="text-accent" aria-hidden="true" />
                {hero.cta.tertiary.label}
              </motion.a>
            </motion.div>

            {/* Credibility strip */}
            <motion.div variants={heroReveal} custom={4} className="flex flex-wrap gap-2 mb-8" aria-label="Areas of expertise">
              {hero.credibilityStrip.map((item) => (
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
              className="flex flex-wrap items-center gap-5 text-sm text-textMuted pt-6 border-t border-borderSubtle"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={13} aria-hidden="true" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe size={13} aria-hidden="true" />
                {personal.remote}
              </span>
              <motion.a
                href="#contact"
                className="ml-auto text-accent font-medium flex items-center gap-1.5 text-sm"
                whileHover={{ color: "#ff9f5a", x: 2 }}
                transition={{ duration: 0.18 }}
              >
                Let's Talk
                <ArrowUpRight size={13} aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Portrait column ── */}
          <motion.div
            className="shrink-0 flex flex-col items-center
                       w-[200px] mx-auto
                       md:w-[200px] md:mx-0
                       lg:w-[240px]
                       xl:w-[260px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Portrait of Khadijah Abdulwasii"
          >
            <div className="relative w-full">
              {/* Accent glow ring */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                style={{ boxShadow: "0 0 50px rgba(255,107,53,0.18), 0 0 0 1px rgba(255,107,53,0.1)" }}
                aria-hidden="true"
              />
              <motion.img
                src={`${import.meta.env.BASE_URL}illustration.png`}
                alt="Khadijah Abdulwasii — AI Design Engineer"
                className="w-full h-auto rounded-2xl block relative z-10"
                style={{ filter: "contrast(1.04) brightness(0.97)", display: "block" }}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Brand tint overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.07) 0%, transparent 55%)" }}
                aria-hidden="true"
              />
            </div>
            <StatStrip />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
