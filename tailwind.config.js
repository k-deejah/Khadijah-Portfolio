/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090909",
        surface: "#151515",
        surfaceElevated: "#1a1a1a",
        accent: "#FF6B35",
        accentSecondary: "#FF9F5A",
        textPrimary: "#F5F5F5",
        textMuted: "#A0A0A0",
        borderSubtle: "rgba(255,255,255,0.08)",
        borderAccent: "rgba(255,107,53,0.3)",
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
