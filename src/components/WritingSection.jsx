import { motion } from "framer-motion";
import { writing } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

export default function WritingSection() {
  return (
    <section id="writing" className="py-24 lg:py-32 bg-surface">
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
            WRITING
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-8"
          >
            Thinking out loud
            <br />
            on AI & design.
          </motion.h2>

          <div className="space-y-2">
            {writing.map((post, i) => (
              <motion.a
                key={i}
                href="#"
                variants={fadeInUp}
                custom={i}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-6 px-4 border-b border-borderSubtle last:border-b-0 hover:bg-[rgba(255,107,53,.03)] transition-colors"
              >
                <div className="flex-1">
                  <span className="font-mono text-xs font-medium text-textMuted uppercase tracking-wider">
                    {post.date}
                  </span>
                  <span className="font-medium text-textPrimary group-hover:text-accent transition-colors block mt-1">
                    {post.title}
                  </span>
                </div>
                <motion.span
                  className="text-textMuted group-hover:text-accent transition-all group-hover:translate-x-1"
                  style={{ fontSize: "1.25rem" }}
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
