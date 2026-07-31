import { motion } from "framer-motion";
import { MapPin, Globe, Download, ArrowUpRight, BookOpen } from "lucide-react";
import { hero, personal } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

function DomainPill({ label, index }) {
  return (
    <motion.span
      variants={fadeInUp}
      custom={index}
      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-textMuted uppercase tracking-wider px-3 py-1.5 rounded-full border border-borderSubtle bg-surface"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
      {label}
    </motion.span>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background ambient glows */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,159,90,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={fadeInUp} custom={0} className="mb-8">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-medium px-4 py-2 rounded-full bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {hero.label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            variants={fadeInUp}
            custom={1}
            className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[1.0] tracking-[-0.04em] mb-8"
          >
            AI Design
            <br />
            <span className="text-gradient">Engineer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-xl lg:text-2xl text-textMuted leading-relaxed max-w-2xl mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* Domain pills */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="flex flex-wrap gap-2 mb-12"
          >
            {hero.domains.map((d, i) => (
              <DomainPill key={d} label={d} index={i} />
            ))}
          </motion.div>

          {/* CTA group */}
          <motion.div
            variants={fadeInUp}
            custom={4}
            className="flex flex-wrap gap-3 mb-14"
          >
            <a
              href={hero.cta.primary.href}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accentSecondary text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,107,53,.3)] hover:shadow-[0_0_40px_rgba(255,107,53,.45)]"
            >
              {hero.cta.primary.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={hero.cta.secondary.href}
              className="inline-flex items-center gap-2 border border-borderSubtle hover:border-[rgba(255,107,53,0.4)] text-textPrimary px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-[rgba(255,107,53,0.05)]"
            >
              <BookOpen size={16} className="text-accent" aria-hidden="true" />
              {hero.cta.secondary.label}
            </a>
            <a
              href={hero.cta.tertiary.href}
              className="inline-flex items-center gap-2 text-textMuted hover:text-accent px-4 py-3.5 font-medium text-sm transition-colors duration-300"
            >
              {hero.cta.tertiary.label}
            </a>
          </motion.div>

          {/* Location / meta row */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-borderSubtle"
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
              href="/Khadijah-Portfolio/resume.pdf"
              className="flex items-center gap-2 text-textMuted hover:text-accent text-sm transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={14} aria-hidden="true" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
