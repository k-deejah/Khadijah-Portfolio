import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { writing } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

const tagColor = {
  AI: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
  WEB3: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
  "OPEN SOURCE": "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
  ACCESSIBILITY: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
};

export default function WritingSection() {
  return (
    <section
      id="writing"
      className="py-24 lg:py-32 bg-surface"
      aria-labelledby="writing-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            WRITING
          </motion.span>
          <motion.h2
            id="writing-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Writing on <span className="text-gradient">AI & craft.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-textMuted max-w-xl mb-16">
            Short essays on building AI products, open-source engineering, and design.
          </motion.p>

          <div className="space-y-px">
            {writing.map((post, i) => (
              <motion.a
                key={i}
                href="#"
                variants={fadeInUp}
                custom={i}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 px-4 -mx-4 rounded-xl border border-transparent hover:border-borderSubtle hover:bg-[rgba(255,107,53,0.02)] transition-all duration-300"
                aria-label={`Read: ${post.title}`}
              >
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
                  {/* Tag */}
                  <span
                    className={`inline-flex text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border w-fit ${
                      tagColor[post.tag] ||
                      "bg-[rgba(255,255,255,0.05)] text-textMuted border-borderSubtle"
                    }`}
                  >
                    {post.tag}
                  </span>

                  <div>
                    <span className="font-mono text-xs text-textMuted uppercase tracking-wider block sm:hidden mb-0.5">
                      {post.date}
                    </span>
                    <span className="font-medium text-textPrimary group-hover:text-accent transition-colors">
                      {post.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-mono text-xs text-textMuted uppercase tracking-wider hidden sm:block">
                    {post.date}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-textMuted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
