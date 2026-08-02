import { motion } from "framer-motion";
import { process } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import CrystalLayer from "./CrystalLayer.jsx";

function StepCard({ step, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative group bg-surface border border-borderSubtle rounded-2xl p-8 overflow-hidden card-lift"
    >
      {/* Left accent bar — reveals on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Step number — large, gradient, low opacity */}
      <div className="text-[4rem] font-bold text-gradient opacity-30 leading-none mb-4 select-none" aria-hidden="true">
        {step.num}
      </div>

      <h3 className="text-base font-semibold text-textPrimary mb-2">{step.title}</h3>
      <p className="text-sm text-textMuted leading-relaxed">{step.desc}</p>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="process-heading">
      <CrystalLayer variant="mid" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            PROCESS
          </motion.span>
          <motion.h2
            id="process-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            How I <span className="text-gradient">work</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-textMuted max-w-xl mb-12">
            {process.subtitle}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {process.steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
