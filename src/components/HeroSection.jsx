import { motion } from "framer-motion";
import { MapPin, Globe, ArrowUpRight, Github, FileText } from "lucide-react";
import { hero, personal } from "../data/portfolio.js";
import { heroReveal, heroContainer, btnHoverAnim, btnTapAnim } from "../lib/animations.js";

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
        <motion.div variants={heroContainer} initial="hidden" animate="visible">

          {/* Availability badge */}
          <motion.div variants={heroReveal} custom={0} className="mb-10">
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
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-9"
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            AI Design
            <br />
            <span className="text-gradient">Engineer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroReveal}
            custom={2}
            className="text-xl lg:text-2xl text-textMuted leading-snug max-w-2xl mb-12"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={heroReveal}
            custom={3}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <motion.a
              href={hero.cta.primary.href}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-medium text-sm shadow-[0_0_28px_rgba(255,107,53,0.28)] btn-scale"
              whileHover={{ ...btnHoverAnim, backgroundColor: "var(--accent-secondary)", boxShadow: "0 0 40px rgba(255,107,53,0.42)" }}
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
              href="/Khadijah-Portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-borderSubtle text-textMuted px-6 py-3.5 rounded-full font-medium text-sm btn-scale"
              whileHover={{ ...btnHoverAnim, borderColor: "rgba(255,107,53,0.35)", color: "#f5f5f5", backgroundColor: "rgba(255,107,53,0.04)" }}
              whileTap={btnTapAnim}
            >
              <FileText size={14} className="text-accent" aria-hidden="true" />
              Resume
            </motion.a>
          </motion.div>

          {/* Meta row */}
          <motion.div
            variants={heroReveal}
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
            <motion.a
              href={hero.cta.tertiary.href}
              className="ml-auto text-accent font-medium flex items-center gap-1.5"
              whileHover={{ color: "var(--accent-secondary)", x: 2 }}
              transition={{ duration: 0.18 }}
            >
              {hero.cta.tertiary.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
