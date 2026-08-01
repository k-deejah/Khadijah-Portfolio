/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Reference CSS custom properties so both themes work automatically
        primary: "var(--background)",
        surface: "var(--surface)",
        surfaceElevated: "var(--surface-elevated)",
        accent: "var(--accent)",
        accentSecondary: "var(--accent-secondary)",
        textPrimary: "var(--text-primary)",
        textMuted: "var(--text-muted)",
        borderSubtle: "var(--border-subtle)",
        borderAccent: "var(--border-accent)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        cardHover: "0 0 40px rgba(255,107,53,0.08)",
        glow: "0 0 80px rgba(255,107,53,0.15)",
      },
      transitionProperty: {
        colors: "color, background-color, border-color, text-decoration-color",
      },
    },
  },
  plugins: [],
};
