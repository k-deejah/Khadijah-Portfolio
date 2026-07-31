import { motion } from "framer-motion";
import { problem } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div variants={fadeInUp} custom={0}>
              <span className="section-label mb-4 block">THE CHALLENGE</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary">
                {problem.title}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="space-y-6">
              <p className="text-lg text-textMuted leading-relaxed">
                {problem.text1}
              </p>
              <p className="text-lg text-textMuted leading-relaxed">
                {problem.text2}
              </p>

              <motion.div
                variants={fadeInUp}
                custom={2}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {problem.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 font-mono text-sm font-medium text-textMuted uppercase tracking-wider"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
