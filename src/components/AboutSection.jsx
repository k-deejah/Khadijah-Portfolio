import { motion } from "framer-motion";
import { about } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { Brain, Palette, Code2, Hexagon, Terminal } from "lucide-react";

const whatIDoIcons = [Brain, Palette, Code2, Hexagon, Terminal];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            ABOUT
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* ── Left: narrative ── */}
            <motion.div variants={fadeInUp} custom={0}>
              <h2
                id="about-heading"
                className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-8"
              >
                Design, <span className="text-gradient">AI,</span> and
                engineering — end to end
              </h2>

              <div className="space-y-4 text-textMuted text-base leading-relaxed">
                {about.narrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <blockquote className="mt-6 pl-4 border-l-2 border-accent text-textMuted italic text-base leading-relaxed">
                "{about.philosophy}"
              </blockquote>
            </motion.div>

            {/* ── Right: stats + what I do ── */}
            <motion.div variants={fadeInUp} custom={1} className="lg:pt-4 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-primary border border-borderSubtle rounded-2xl p-6 card-lift"
                  >
                    <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-textMuted font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* What I do */}
              <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8 card-lift">
                <h3 className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-4">
                  What I Do
                </h3>
                <div className="space-y-3">
                  {about.whatIDo.map((item, i) => {
                    const Icon = whatIDoIcons[i % whatIDoIcons.length];
                    return (
                      <div key={item.label} className="flex items-center gap-3 text-textMuted">
                        <Icon
                          size={15}
                          className={item.accent ? "text-accent" : "text-accentSecondary"}
                          aria-hidden="true"
                        />
                        <span className="text-sm">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
