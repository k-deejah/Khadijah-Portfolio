import { motion } from "framer-motion";

/**
 * CrystalLayer — scattered rotating crystal polygon accents.
 * Drop inside any section as a background layer (pointer-events-none, aria-hidden).
 *
 * Props:
 *   variant: "hero" | "mid" | "subtle"  — controls size, opacity, count
 *   flip:    bool — mirrors the layout horizontally
 */

const CRYSTALS = [
  // [cx, cy, size, duration, delay, opacity, strokeColor]
  [82,  12,  140, 90,  0,    0.055, "rgba(255,107,53,VAL)"],
  [5,   55,  80,  110, 8,   0.04,  "rgba(255,159,90,VAL)"],
  [70,  75,  60,  75,  4,   0.03,  "rgba(255,107,53,VAL)"],
  [18,  25,  100, 130, 12,  0.045, "rgba(255,159,90,VAL)"],
  [92,  50,  50,  100, 6,   0.025, "rgba(255,107,53,VAL)"],
  [50,  90,  70,  95,  2,   0.035, "rgba(255,159,90,VAL)"],
  [35,  5,   45,  120, 15,  0.03,  "rgba(255,107,53,VAL)"],
];

// Single irregular polygon crystal
function Crystal({ cx, cy, size, duration, delay, opacity, strokeColor, flip }) {
  const color = strokeColor.replace("VAL", opacity);
  const color2 = strokeColor.replace("VAL", opacity * 0.55);

  // Irregular polygon points (normalized 0–1, scaled by size)
  const pts1 = [
    [0.5, 0.05], [0.87, 0.22], [0.95, 0.53],
    [0.8,  0.88], [0.47, 0.97], [0.13, 0.78],
    [0.05, 0.43], [0.2,  0.12],
  ].map(([x, y]) => `${x * size},${y * size}`).join(" ");

  const pts2 = [
    [0.5, 0.13], [0.8, 0.27], [0.87, 0.54],
    [0.73, 0.85], [0.47, 0.91], [0.2,  0.73],
    [0.13, 0.47], [0.28, 0.18],
  ].map(([x, y]) => `${x * size},${y * size}`).join(" ");

  const style = {
    position: "absolute",
    left:  flip ? undefined : `${cx}%`,
    right: flip ? `${100 - cx}%` : undefined,
    top:   `${cy}%`,
    width: size,
    height: size,
    pointerEvents: "none",
  };

  return (
    <motion.div
      style={style}
      animate={{ rotate: 360 }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} fill="none">
        <polygon points={pts1} stroke={color}  strokeWidth="0.8" />
        <polygon points={pts2} stroke={color2} strokeWidth="0.4" />
      </svg>
    </motion.div>
  );
}

export default function CrystalLayer({ variant = "subtle", flip = false }) {
  // Variant controls how many crystals and base opacity multiplier
  const opacityMult = variant === "hero" ? 1 : variant === "mid" ? 0.75 : 0.5;
  const count       = variant === "hero" ? 7 : variant === "mid" ? 5 : 4;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {CRYSTALS.slice(0, count).map(([cx, cy, size, dur, delay, opacity, color], i) => (
        <Crystal
          key={i}
          cx={cx}
          cy={cy}
          size={size}
          duration={dur}
          delay={delay}
          opacity={opacity * opacityMult}
          strokeColor={color}
          flip={flip}
        />
      ))}
    </div>
  );
}
