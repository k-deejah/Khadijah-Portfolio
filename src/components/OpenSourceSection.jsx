import { motion } from "framer-motion";
import { Github, Star, ArrowUpRight, ExternalLink, Calendar, BadgeCheck } from "lucide-react";
import { openSource } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

// GrantFox logo mark
function GrantFoxLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Drips logo mark
function DripsLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C12 2 5 9.5 5 14C5 17.866 8.134 21 12 21C15.866 21 19 17.866 19 14C19 9.5 12 2 12 2Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 15.5C9 17.157 10.343 18.5 12 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const logoMap = {
  GrantFox: GrantFoxLogo,
  "Drips Wave (Stellar)": DripsLogo,
};

const colorMap = {
  amber: {
    bg: "from-accent/20 to-accentSecondary/10",
    border: "border-accent/20",
    icon: "text-accent",
    badge: "bg-[rgba(255,107,53,0.1)] text-accent border border-[rgba(255,107,53,0.2)]",
    glow: "hover:shadow-[0_0_40px_rgba(255,107,53,0.07)]",
    dot: "bg-accent",
    btn: "bg-accent hover:bg-accentSecondary text-white",
  },
  purple: {
    bg: "from-purple-500/20 to-purple-400/10",
    border: "border-purple-500/20",
    icon: "text-purple-400",
    badge: "bg-[rgba(168,85,247,0.1)] text-purple-400 border border-[rgba(168,85,247,0.2)]",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.07)]",
    dot: "bg-purple-400",
    btn: "bg-purple-600 hover:bg-purple-500 text-white",
  },
};

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-24 lg:py-32 bg-surface" aria-labelledby="os-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            OPEN SOURCE
          </motion.span>
          <motion.h2
            id="os-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Building in <span className="text-gradient">public</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-textMuted max-w-2xl mb-16">
            {openSource.tagline}
          </motion.p>

          {/* ── Maintainer Cards ── */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {openSource.maintainers.map((project, i) => {
              const c = colorMap[project.color] || colorMap.amber;
              const Logo = logoMap[project.name];
              return (
                <motion.article
                  key={project.name}
                  variants={fadeInUp}
                  custom={i}
                  className={`relative bg-primary border border-borderSubtle rounded-2xl p-8 card-hover transition-all duration-500 ${c.glow}`}
                  aria-label={`${project.name} open source project`}
                >
                  {/* Active badge */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 text-xs text-textMuted" aria-label="Active project">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
                    Active
                  </div>

                  {/* Logo + meta */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.bg} flex items-center justify-center border ${c.border} transition-transform duration-300 group-hover:scale-105`}>
                      {Logo ? <span className={c.icon}><Logo /></span> : <Github size={22} className={c.icon} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-textPrimary mb-1">{project.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-textMuted">
                        <span className="flex items-center gap-1">
                          <Star size={11} className={c.icon} aria-hidden="true" />
                          {project.stars} stars
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} aria-hidden="true" />
                          {project.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Role badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.roles.map((role) => (
                      <span key={role} className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${c.badge}`}>
                        <BadgeCheck size={11} aria-hidden="true" />
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-textMuted leading-relaxed mb-6">{project.description}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-borderSubtle">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-textMuted">{project.contributions}</span>
                      <span className="text-xs bg-surfaceElevated text-textMuted px-2 py-1 rounded-lg border border-borderSubtle">
                        {project.language}
                      </span>
                    </div>
                    <a
                      href={project.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${c.btn}`}
                      aria-label={`${project.profileLabel} for ${project.name}`}
                    >
                      {project.profileLabel}
                      <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* ── Tech Focus ── */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-base font-semibold text-textPrimary mb-6 font-mono uppercase tracking-wider text-accent">
              Technical Focus
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {openSource.techFocus.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-primary border border-borderSubtle rounded-xl p-5 card-hover"
                >
                  <p className="text-sm font-semibold text-textPrimary mb-1">{item.name}</p>
                  <p className="text-xs text-textMuted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Values ── */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-base font-semibold text-textPrimary mb-6 font-mono uppercase tracking-wider text-accent">
              How I Contribute
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {openSource.values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-primary border border-borderSubtle rounded-xl p-5 card-hover"
                >
                  <p className="text-sm font-semibold text-textPrimary mb-1">{v.title}</p>
                  <p className="text-xs text-textMuted leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Recent Contributions ── */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-base font-semibold text-textPrimary mb-6 font-mono uppercase tracking-wider text-accent">
              Recent Contributions
            </h3>
            <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8">
              <div className="space-y-3">
                {openSource.contributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,107,53,0.03)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surfaceElevated flex items-center justify-center shrink-0 border border-borderSubtle">
                      <Github size={16} className="text-textMuted" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-textPrimary font-medium text-sm">{contrib.repo}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            contrib.type === "Feature"
                              ? "bg-[rgba(255,107,53,0.12)] text-accent"
                              : contrib.type === "Bug Fix"
                              ? "bg-[rgba(34,197,94,0.12)] text-green-400"
                              : "bg-[rgba(59,130,246,0.12)] text-blue-400"
                          }`}
                        >
                          {contrib.type}
                        </span>
                      </div>
                      <p className="text-xs text-textMuted">{contrib.desc}</p>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="text-textMuted group-hover:text-accent transition-colors shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {openSource.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary border border-borderSubtle rounded-xl p-5 text-center card-hover"
              >
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-textMuted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
