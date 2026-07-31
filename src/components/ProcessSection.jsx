import { motion } from "framer-motion";
import { process } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="section-label mb-4 block"
          >
            HOW I WORK
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            {process.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-16"
          >
            {process.subtitle}
          </motion.p>
          <div className="flex flex-col md:flex-row gap-8">
            {process.steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                custom={i}
                className="flex-1 bg-primary border border-borderSubtle rounded-2xl p-8 transition-all duration-300 hover:border-accent/20"
              >
                <span className="font-mono text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-textMuted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
