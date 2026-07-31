import { motion } from "framer-motion";
import { ChevronRight, Clock, Tag, User, Layers } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

// ─── Colour theme ─────────────────────────────────────────────────
const theme = {
  amber: {
    accent: "text-accent",
    border: "border-[rgba(255,107,53,0.15)]",
    bg: "bg-[rgba(255,107,53,0.05)]",
    tag: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    divider: "from-accent",
    dot: "bg-accent",
  },
  purple: {
    accent: "text-purple-400",
    border: "border-[rgba(168,85,247,0.15)]",
    bg: "bg-[rgba(168,85,247,0.05)]",
    tag: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    divider: "from-purple-400",
    dot: "bg-purple-400",
  },
  green: {
    accent: "text-green-400",
    border: "border-[rgba(34,197,94,0.15)]",
    bg: "bg-[rgba(34,197,94,0.05)]",
    tag: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    divider: "from-green-400",
    dot: "bg-green-400",
  },
  blue: {
    accent: "text-blue-400",
    border: "border-[rgba(59,130,246,0.15)]",
    bg: "bg-[rgba(59,130,246,0.05)]",
    tag: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    divider: "from-blue-400",
    dot: "bg-blue-400",
  },
};

// ─── Reusable primitives ──────────────────────────────────────────

function SectionLabel({ children, t }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={`text-[11px] font-mono font-semibold uppercase tracking-[0.15em] ${t.accent}`}>
        {children}
      </span>
      <div className="flex-1 h-px bg-borderSubtle" aria-hidden="true" />
    </div>
  );
}

function PlaceholderNote({ children }) {
  return (
    <p className="text-sm text-textMuted italic bg-surfaceElevated border border-borderSubtle rounded-lg px-4 py-3 leading-relaxed">
      {children}
    </p>
  );
}

function isPlaceholder(text) {
  return typeof text === "string" && text.startsWith("[Placeholder");
}

function MaybeContent({ text, fallback }) {
  if (isPlaceholder(text)) {
    return <PlaceholderNote>{fallback || text}</PlaceholderNote>;
  }
  return <p className="text-base text-textMuted leading-relaxed">{text}</p>;
}

function BulletList({ items, t, placeholder }) {
  if (!items || items.length === 0) {
    return <PlaceholderNote>{placeholder}</PlaceholderNote>;
  }
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-textMuted leading-relaxed">
          {isPlaceholder(item) ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-borderSubtle mt-1.5 shrink-0" aria-hidden="true" />
              <span className="italic">{item}</span>
            </>
          ) : (
            <>
              <ChevronRight size={13} className={`${t.accent} mt-0.5 shrink-0`} aria-hidden="true" />
              {item}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function TechPills({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="text-xs text-textMuted bg-surfaceElevated px-3 py-1.5 rounded-lg border border-borderSubtle"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

// ─── Section blocks ───────────────────────────────────────────────

function HeroBlock({ cs, t }) {
  return (
    <div className={`rounded-2xl border ${t.border} ${t.bg} p-8 lg:p-10 mb-10`}>
      <div className="flex flex-wrap gap-2 mb-5">
        {cs.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[11px] font-mono font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-lg border ${t.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-textPrimary mb-3">
        {cs.title}
      </h3>
      <p className={`text-lg font-medium mb-8 ${t.accent}`}>{cs.subtitle}</p>

      {/* Meta row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <p className={`text-[11px] font-mono font-semibold uppercase tracking-widest mb-1 ${t.accent}`}>
            Role
          </p>
          <p className="text-sm text-textMuted">{cs.role}</p>
        </div>
        <div>
          <p className={`text-[11px] font-mono font-semibold uppercase tracking-widest mb-1 ${t.accent}`}>
            Duration
          </p>
          {isPlaceholder(cs.duration) ? (
            <p className="text-sm text-textMuted italic">{cs.duration}</p>
          ) : (
            <p className="text-sm text-textMuted">{cs.duration}</p>
          )}
        </div>
        <div>
          <p className={`text-[11px] font-mono font-semibold uppercase tracking-widest mb-1 ${t.accent}`}>
            Team
          </p>
          {isPlaceholder(cs.team) ? (
            <p className="text-sm text-textMuted italic">{cs.team}</p>
          ) : (
            <p className="text-sm text-textMuted">{cs.team}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function OverviewBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Project Overview</SectionLabel>
      <MaybeContent text={cs.overview} />
    </div>
  );
}

function ProblemBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Problem Statement</SectionLabel>
      <MaybeContent text={cs.problem} />
    </div>
  );
}

function GoalsBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Goals</SectionLabel>
      <BulletList items={cs.goals} t={t} placeholder="[Placeholder: list project goals]" />
    </div>
  );
}

function ResearchBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Research</SectionLabel>
      <div className="space-y-6">
        <div>
          <p className={`text-xs font-mono font-semibold uppercase tracking-widest mb-3 ${t.accent}`}>
            Approach
          </p>
          <MaybeContent text={cs.research.summary} />
        </div>
        <div>
          <p className={`text-xs font-mono font-semibold uppercase tracking-widest mb-3 ${t.accent}`}>
            Methods
          </p>
          <BulletList items={cs.research.methods} t={t} placeholder="[Placeholder: list research methods]" />
        </div>
        <div>
          <p className={`text-xs font-mono font-semibold uppercase tracking-widest mb-3 ${t.accent}`}>
            Key Insights
          </p>
          <BulletList items={cs.research.keyInsights} t={t} placeholder="[Placeholder: list key insights from research]" />
        </div>
      </div>
    </div>
  );
}

function PersonasBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>User Personas</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-4">
        {cs.personas.map((p, i) => (
          <div
            key={i}
            className="bg-primary border border-borderSubtle rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center border ${t.border} ${t.bg}`}>
                <User size={16} className={t.accent} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-textPrimary leading-tight">
                  {isPlaceholder(p.name) ? (
                    <span className="italic text-textMuted">{p.name}</span>
                  ) : p.name}
                </p>
                <p className={`text-xs ${t.accent}`}>
                  {isPlaceholder(p.type) ? (
                    <span className="italic">{p.type}</span>
                  ) : p.type}
                </p>
              </div>
            </div>
            <p className="text-xs text-textMuted leading-relaxed italic">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneyBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>User Journey</SectionLabel>
      <MaybeContent text={cs.userJourney} />
    </div>
  );
}

function IABlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Information Architecture</SectionLabel>
      <MaybeContent text={cs.informationArchitecture} />
    </div>
  );
}

function WireframesBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Wireframes</SectionLabel>
      <MaybeContent text={cs.wireframes} />
      {/* Image slot — replace with real wireframe images when available */}
      <div
        className={`mt-4 rounded-xl border border-dashed ${t.border} p-10 flex items-center justify-center`}
        aria-label="Wireframe images placeholder"
      >
        <p className="text-xs font-mono text-textMuted italic text-center">
          [Placeholder: upload wireframe images here]
        </p>
      </div>
    </div>
  );
}

function DesignSystemBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Design System</SectionLabel>
      <div className="space-y-5">
        <MaybeContent text={cs.designSystem.summary} />
        <div>
          <p className={`text-xs font-mono font-semibold uppercase tracking-widest mb-3 ${t.accent}`}>
            Components
          </p>
          <BulletList items={cs.designSystem.components} t={t} placeholder="[Placeholder: list design system components]" />
        </div>
      </div>
    </div>
  );
}

function HiFiBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>High-Fidelity Designs</SectionLabel>
      <MaybeContent text={cs.highFidelityDesigns} />
      {/* Image slot */}
      <div
        className={`mt-4 rounded-xl border border-dashed ${t.border} p-10 flex items-center justify-center`}
        aria-label="High-fidelity design images placeholder"
      >
        <p className="text-xs font-mono text-textMuted italic text-center">
          [Placeholder: upload high-fidelity design images here]
        </p>
      </div>
    </div>
  );
}

function DevelopmentBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Development Process</SectionLabel>
      <MaybeContent text={cs.developmentProcess} />
    </div>
  );
}

function TechBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Technologies Used</SectionLabel>
      <TechPills tech={cs.tech} />
    </div>
  );
}

function ChallengesBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Challenges</SectionLabel>
      <BulletList items={cs.challenges} t={t} placeholder="[Placeholder: describe challenges]" />
    </div>
  );
}

function SolutionsBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Solutions</SectionLabel>
      <BulletList items={cs.solutions} t={t} placeholder="[Placeholder: describe solutions]" />
    </div>
  );
}

function ResultsBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Results</SectionLabel>
      <MaybeContent text={cs.results} />
    </div>
  );
}

function LessonsBlock({ cs, t }) {
  return (
    <div className="mb-10">
      <SectionLabel t={t}>Lessons Learned</SectionLabel>
      <BulletList items={cs.lessonsLearned} t={t} placeholder="[Placeholder: describe lessons learned]" />
    </div>
  );
}

function FutureBlock({ cs, t }) {
  return (
    <div>
      <SectionLabel t={t}>Future Improvements</SectionLabel>
      <BulletList items={cs.futureImprovements} t={t} placeholder="[Placeholder: describe future improvements]" />
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────
export default function CaseStudyPanel({ cs }) {
  const t = theme[cs.accent] || theme.amber;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-6 bg-surface border border-borderSubtle rounded-2xl p-6 lg:p-10"
      aria-label={`Case study: ${cs.title}`}
    >
      <HeroBlock cs={cs} t={t} />

      <div className="grid lg:grid-cols-2 gap-x-16">
        {/* Left column */}
        <div>
          <OverviewBlock cs={cs} t={t} />
          <ProblemBlock cs={cs} t={t} />
          <GoalsBlock cs={cs} t={t} />
          <ResearchBlock cs={cs} t={t} />
          <PersonasBlock cs={cs} t={t} />
          <JourneyBlock cs={cs} t={t} />
          <IABlock cs={cs} t={t} />
        </div>

        {/* Right column */}
        <div>
          <WireframesBlock cs={cs} t={t} />
          <DesignSystemBlock cs={cs} t={t} />
          <HiFiBlock cs={cs} t={t} />
          <DevelopmentBlock cs={cs} t={t} />
          <TechBlock cs={cs} t={t} />
          <ChallengesBlock cs={cs} t={t} />
          <SolutionsBlock cs={cs} t={t} />
          <ResultsBlock cs={cs} t={t} />
          <LessonsBlock cs={cs} t={t} />
          <FutureBlock cs={cs} t={t} />
        </div>
      </div>
    </motion.div>
  );
}
