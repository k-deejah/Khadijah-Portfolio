import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// DEPLOY_TARGET=github → base="/Khadijah-Portfolio/" (GitHub Pages)
// DEPLOY_TARGET=netlify or unset → base="/"  (Netlify / local preview)
const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const base = isGitHubPages ? "/Khadijah-Portfolio/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
