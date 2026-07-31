import { motion } from "framer-motion";
import { about } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { Brain, Palette, Code2, Hexagon, Terminal } from "lucide-react";

const whatIDoIcons = [Brain, Palette, Code2, Hexagon, Terminal];

const techCategories = [
  { label: "Design", key: "design", color: "text-accent" },
  { label: "Frontend", key: "frontend", color: "text-accentSecondary" },
  { label: "AI", key: "ai", color: "text-accent" },
  { label: "Web3", key: "web3", color: "text-accentSecondary" },
  { label: "Tools", key: "tools", color: "text-accent" },
];

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

          {/* ── Top: headline + narrative ── */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <motion.div variants={fadeInUp} custom={0}>
              <h2
                id="about-heading"
                className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-8"
              >
                Design, <span className="text-gradient">AI,</span> and
                engineering — end to end
              </h2>

              <div className="space-y-4 text-textMuted text-lg leading-relaxed">
                {about.narrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="lg:pt-4 space-y-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-primary border border-borderSubtle rounded-2xl p-6 card-hover"
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
              <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8">
                <h3 className="text-base font-semibold text-textPrimary mb-4 font-mono uppercase tracking-wider text-accent">
                  What I Do
                </h3>
                <div className="space-y-3">
                  {about.whatIDo.map((item, i) => {
                    const Icon = whatIDoIcons[i % whatIDoIcons.length];
                    return (
                      <div key={item.label} className="flex items-center gap-3 text-textMuted">
                        <Icon
                          size={16}
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

          {/* ── Tech Stack ── */}
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-10"
          >
            <h3 className="text-base font-semibold text-textPrimary mb-8 font-mono uppercase tracking-wider text-accent">
              Tech Stack
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {techCategories.map(({ label, key, color }) => (
                <div key={key}>
                  <p className={`text-xs font-mono font-semibold uppercase tracking-widest mb-3 ${color}`}>
                    {label}
                  </p>
                  <ul className="space-y-2">
                    {about.techStack[key].map((tech) => (
                      <li key={tech} className="text-sm text-textMuted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Philosophy ── */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="mt-6 bg-gradient-to-r from-[rgba(255,107,53,0.06)] to-transparent border border-[rgba(255,107,53,0.12)] rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-accent to-accentSecondary shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-3">
                  Philosophy
                </p>
                <p className="text-textMuted leading-relaxed text-lg">
                  {about.philosophy}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
