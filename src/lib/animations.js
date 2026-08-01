// Easing — smooth deceleration, premium feel
const ease = [0.22, 1, 0.36, 1];

// ─── Entrance variants ────────────────────────────────────────────

// Standard scroll-triggered fade + rise
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.065,
      duration: 0.52,
      ease,
    },
  }),
};

// Hero-load variant — slightly larger travel, refined stagger
export const heroReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.65,
      ease,
    },
  }),
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.065, duration: 0.52, ease },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.065, duration: 0.52, ease },
  }),
};

// ─── Container variants ───────────────────────────────────────────

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.05,
    },
  },
};

// Faster stagger for grids
export const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.0,
    },
  },
};

// Hero container — no stagger delay so children control their own timing
export const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

// ─── Misc ─────────────────────────────────────────────────────────

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
};

// Hover animation for interactive cards — used with whileHover
export const cardHoverAnim = {
  y: -4,
  scale: 1.012,
  transition: { duration: 0.25, ease },
};

// Hover animation for buttons
export const btnHoverAnim = {
  scale: 1.03,
  transition: { duration: 0.18, ease },
};

export const btnTapAnim = {
  scale: 0.97,
  transition: { duration: 0.1, ease },
};
