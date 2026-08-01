import { motion } from "framer-motion";
import { MapPin, Globe, Download, ArrowUpRight, Github, FileText } from "lucide-react";
import { hero, personal } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

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

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 py-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">

          {/* Availability badge */}
          <motion.div variants={fadeInUp} custom={0} className="mb-10">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-mono font-medium px-4 py-2 rounded-full bg-[rgba(255,107,53,0.07)] border border-[rgba(255,107,53,0.18)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {hero.label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            variants={fadeInUp}
            custom={1}
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-9"
          >
            AI Design
            <br />
            <span className="text-gradient">Engineer</span>
          </motion.h1>

          {/* Subheadline — one tight line */}
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-xl lg:text-2xl text-textMuted leading-snug max-w-2xl mb-12"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <a
              href={hero.cta.primary.href}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accentSecondary text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-[0_0_28px_rgba(255,107,53,0.28)] hover:shadow-[0_0_40px_rgba(255,107,53,0.42)]"
            >
              {hero.cta.primary.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <a
              href={hero.cta.secondary.href}
              className="inline-flex items-center gap-2 border border-borderSubtle hover:border-[rgba(255,107,53,0.35)] text-textPrimary px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-[rgba(255,107,53,0.04)]"
            >
              <Github size={15} className="text-accent" aria-hidden="true" />
              {hero.cta.secondary.label}
            </a>

            {/* Resume — premium pill */}
            <a
              href="/Khadijah-Portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-borderSubtle hover:border-[rgba(255,107,53,0.35)] text-textMuted hover:text-textPrimary px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-[rgba(255,107,53,0.04)] hover:shadow-[0_0_20px_rgba(255,107,53,0.08)]"
            >
              <FileText size={14} className="text-accent" aria-hidden="true" />
              Resume
            </a>
          </motion.div>

          {/* Meta row — location only, minimal */}
          <motion.div
            variants={fadeInUp}
            custom={4}
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
            <a
              href={hero.cta.tertiary.href}
              className="ml-auto text-accent hover:text-accentSecondary font-medium transition-colors duration-200 flex items-center gap-1.5"
            >
              {hero.cta.tertiary.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
