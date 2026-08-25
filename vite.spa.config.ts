/**
 * Vite config for the GitHub Pages static SPA build.
 *
 * This is a plain Vite + React build — no TanStack Start / Nitro server.
 * It uses @tanstack/react-router (client-only) with the same route files,
 * but a separate SPA root (src/spa/root.tsx) that has no SSR-specific APIs.
 *
 * Run with:  vite build --config vite.spa.config.ts
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Base URL matches the GitHub repository name.
  // All asset paths will be prefixed with /kind-connection/
  base: "/kind-connection/",

  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
