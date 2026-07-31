import { motion } from "framer-motion";
import { MapPin, Globe, Sparkles, Download, ArrowUpRight } from "lucide-react";
import { hero, personal } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

function PortraitVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative"
    >
      <div className="relative w-[280px] h-[350px] lg:w-[400px] lg:h-[500px] rounded-[28px] overflow-hidden border border-accentSecondary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accentSecondary/10 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-accent to-accentSecondary opacity-15 blur-2xl"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent opacity-60" />
              <div className="absolute top-4 right-2 w-2 h-2 rounded-full bg-accentSecondary opacity-40" />
              <div className="absolute bottom-4 left-1 w-2 h-2 rounded-full bg-accent opacity-50" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accentSecondary opacity-30" />
            </motion.div>
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-1/4 bg-surface border border-borderSubtle rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-accent" />
          <span className="text-sm font-medium text-textMuted">
            AI / ML Products
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-4 -bottom-4 bg-surface border border-borderSubtle rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <ArrowUpRight size={14} className="text-accentSecondary" />
          <span className="text-sm font-medium text-textMuted">
            Design + Code
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,159,90,.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 text-accent text-sm font-medium px-4 py-2 rounded-full bg-[rgba(255,107,53,.1)] border border-[rgba(255,107,53,.2)] mb-6"
            >
              <Sparkles size={14} />
              {hero.label}
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
            >
              AI Design
              <br />
              <span className="text-gradient">Engineer</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-lg lg:text-xl text-textMuted leading-relaxed max-w-xl mb-10"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <a
                href={hero.cta.primary.href}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accentSecondary text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_30px_rgba(255,107,53,.3)]"
              >
                {hero.cta.primary.label}
                <ArrowUpRight size={18} />
              </a>
              <a
                href={hero.cta.secondary.href}
                className="inline-flex items-center gap-2 border border-borderSubtle hover:border-accent text-textPrimary px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:bg-[rgba(255,107,53,.05)]"
              >
                {hero.cta.secondary.label}
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-textMuted hover:text-accent px-4 py-3.5 font-medium transition-colors duration-300"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={2}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <PortraitVisual />
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          className="flex items-center gap-8 mt-20 pt-8 border-t border-borderSubtle"
        >
          <div className="flex items-center gap-2 text-textMuted text-sm">
            <MapPin size={14} />
            {personal.location}
          </div>
          <div className="flex items-center gap-2 text-textMuted text-sm">
            <Globe size={14} />
            {personal.remote}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
