import { motion } from "framer-motion";
import { MapPin, Globe, Sparkles, Download, ArrowUpRight, BookOpen } from "lucide-react";
import { hero, personal } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

function DomainPill({ label, index }) {
  return (
    <motion.span
      variants={fadeInUp}
      custom={index}
      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-textMuted uppercase tracking-wider px-3 py-1.5 rounded-full border border-borderSubtle bg-surface"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {label}
    </motion.span>
  );
}

function PortraitVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-8 rounded-[40px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,107,53,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Portrait frame */}
      <div className="relative w-[280px] h-[350px] lg:w-[400px] lg:h-[500px] rounded-[28px] overflow-hidden border border-[rgba(255,107,53,0.15)] bg-gradient-to-b from-surface to-primary">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

        {/* Portrait placeholder — replace src with real photo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-accent/25 to-accentSecondary/15 blur-2xl"
          />
          {/* Orbiting particles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 lg:w-64 lg:h-64"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent opacity-70" />
            <div className="absolute top-6 right-0 w-2 h-2 rounded-full bg-accentSecondary opacity-50" />
            <div className="absolute bottom-6 left-0 w-2 h-2 rounded-full bg-accent opacity-40" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accentSecondary opacity-35" />
            <div className="absolute top-12 right-4 w-1.5 h-1.5 rounded-full bg-accent opacity-30" />
          </motion.div>

          {/* Monogram */}
          <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-accent/30 to-accentSecondary/20 flex items-center justify-center border border-[rgba(255,107,53,0.25)]">
            <span className="font-mono text-2xl lg:text-3xl font-bold text-accent">KA</span>
          </div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* Floating badge — AI/ML */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-1/4 bg-surface border border-borderSubtle rounded-xl px-4 py-3 shadow-xl"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-accent" />
          <span className="text-sm font-medium text-textMuted">AI / ML</span>
        </div>
      </motion.div>

      {/* Floating badge — Design + Code */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-1/4 bg-surface border border-borderSubtle rounded-xl px-4 py-3 shadow-xl"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <ArrowUpRight size={14} className="text-accentSecondary" />
          <span className="text-sm font-medium text-textMuted">Design + Code</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background glows */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 left-0 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,159,90,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Availability badge */}
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 text-accent text-sm font-medium px-4 py-2 rounded-full bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.2)] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {hero.label}
            </motion.span>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              variants={fadeInUp}
              custom={1}
              className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
            >
              AI Design
              <br />
              <span className="text-gradient">Engineer</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-lg lg:text-xl text-textMuted leading-relaxed max-w-xl mb-8"
            >
              {hero.subheadline}
            </motion.p>

            {/* Domain pills */}
            <motion.div
              variants={fadeInUp}
              custom={3}
              className="flex flex-wrap gap-2 mb-10"
            >
              {hero.domains.map((d, i) => (
                <DomainPill key={d} label={d} index={i} />
              ))}
            </motion.div>

            {/* CTA group */}
            <motion.div
              variants={fadeInUp}
              custom={4}
              className="flex flex-wrap gap-3"
            >
              <a
                href={hero.cta.primary.href}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accentSecondary text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,107,53,.3)] hover:shadow-[0_0_40px_rgba(255,107,53,.45)]"
              >
                {hero.cta.primary.label}
                <ArrowUpRight size={16} />
              </a>
              <a
                href={hero.cta.secondary.href}
                className="inline-flex items-center gap-2 border border-borderSubtle hover:border-[rgba(255,107,53,0.4)] text-textPrimary px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-[rgba(255,107,53,0.05)]"
              >
                <BookOpen size={16} className="text-accent" />
                {hero.cta.secondary.label}
              </a>
              <a
                href={hero.cta.tertiary.href}
                className="inline-flex items-center gap-2 text-textMuted hover:text-accent px-4 py-3.5 font-medium text-sm transition-colors duration-300"
              >
                {hero.cta.tertiary.label}
              </a>
            </motion.div>

            {/* Location row */}
            <motion.div
              variants={fadeInUp}
              custom={5}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-borderSubtle"
            >
              <div className="flex items-center gap-2 text-textMuted text-sm">
                <MapPin size={14} aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-textMuted text-sm">
                <Globe size={14} aria-hidden="true" />
                <span>{personal.remote}</span>
              </div>
              <a
                href={`/Khadijah-Portfolio/resume.pdf`}
                className="flex items-center gap-2 text-textMuted hover:text-accent text-sm transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={14} aria-hidden="true" />
                <span>Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Visual ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <PortraitVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
