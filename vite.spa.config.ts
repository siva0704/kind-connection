/**
 * Vite config for the GitHub Pages static SPA build.
 *
 * Plain Vite + React — no TanStack Start / Nitro.
 * Entry: src/spa/main.tsx  →  uses plain @tanstack/react-router (client-only).
 * Output: dist/
 *
 * Run: bunx vite build --config vite.spa.config.ts
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Must match the GitHub repository name for asset paths to resolve correctly
  // when served from https://siva0704.github.io/kind-connection/
  base: "/kind-connection/",

  plugins: [react(), tailwindcss(), tsconfigPaths()],

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
