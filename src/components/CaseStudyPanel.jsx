import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Colour theme ────────────────────────────────────────────────
const theme = {
  amber: {
    accent: "text-accent",
    border: "border-[rgba(255,107,53,0.15)]",
    bg: "bg-[rgba(255,107,53,0.05)]",
    tag: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    dot: "bg-accent",
  },
  purple: {
    accent: "text-purple-400",
    border: "border-[rgba(168,85,247,0.15)]",
    bg: "bg-[rgba(168,85,247,0.05)]",
    tag: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    dot: "bg-purple-400",
  },
  green: {
    accent: "text-green-400",
    border: "border-[rgba(34,197,94,0.15)]",
    bg: "bg-[rgba(34,197,94,0.05)]",
    tag: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    dot: "bg-green-400",
  },
  blue: {
    accent: "text-blue-400",
    border: "border-[rgba(59,130,246,0.15)]",
    bg: "bg-[rgba(59,130,246,0.05)]",
    tag: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    dot: "bg-blue-400",
  },
};

// ─── Primitives ──────────────────────────────────────────────────
function SectionLabel({ children, t }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`text-[11px] font-mono font-semibold uppercase tracking-[0.15em] ${t.accent}`}>
        {children}
      </span>
      <div className="flex-1 h-px bg-borderSubtle" aria-hidden="true" />
    </div>
  );
}

function BulletList({ items, t }) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-textMuted leading-relaxed">
          <ChevronRight size={13} className={`${t.accent} mt-0.5 shrink-0`} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TechPills({ tech }) {
  if (!tech?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="text-xs text-textMuted bg-surfaceElevated px-3 py-1.5 rounded-lg border border-borderSubtle">
          {t}
        </span>
      ))}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────
export default function CaseStudyPanel({ cs }) {
  const t = theme[cs.accent] || theme.amber;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mt-0 bg-surface border border-borderSubtle rounded-b-2xl p-6 lg:p-10"
      aria-label={`Case study: ${cs.title}`}
    >
      {/* ── Hero block ── */}
      <div className={`rounded-2xl border ${t.border} ${t.bg} p-7 lg:p-9 mb-10`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {cs.tags.map((tag) => (
            <span key={tag} className={`text-[11px] font-mono font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-lg border ${t.tag}`}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold leading-tight tracking-[-0.02em] text-textPrimary mb-2">
          {cs.title}
        </h3>
        <p className={`text-base font-medium mb-6 ${t.accent}`}>{cs.subtitle}</p>
        <div className="flex items-center gap-2 text-sm text-textMuted">
          <span className={`text-[11px] font-mono font-semibold uppercase tracking-widest ${t.accent}`}>Role</span>
          <span className="text-borderSubtle">·</span>
          <span>{cs.role}</span>
        </div>
      </div>

      {/* ── Content columns ── */}
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
        {/* Left */}
        <div>
          {cs.overview && (
            <div className="mb-8">
              <SectionLabel t={t}>Overview</SectionLabel>
              <p className="text-sm text-textMuted leading-relaxed">{cs.overview}</p>
            </div>
          )}
          {cs.problem && (
            <div className="mb-8">
              <SectionLabel t={t}>Problem</SectionLabel>
              <p className="text-sm text-textMuted leading-relaxed">{cs.problem}</p>
            </div>
          )}
          {cs.goals?.length > 0 && (
            <div className="mb-8">
              <SectionLabel t={t}>Goals</SectionLabel>
              <BulletList items={cs.goals} t={t} />
            </div>
          )}
        </div>

        {/* Right */}
        <div>
          {cs.solutions?.length > 0 && (
            <div className="mb-8">
              <SectionLabel t={t}>What I Did</SectionLabel>
              <BulletList items={cs.solutions} t={t} />
            </div>
          )}
          {cs.tech?.length > 0 && (
            <div className="mb-8">
              <SectionLabel t={t}>Technologies</SectionLabel>
              <TechPills tech={cs.tech} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
