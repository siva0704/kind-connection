// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGhPages = process.env.GH_PAGES === "true";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGhPages
      ? {
          // Static preset: Nitro pre-renders all declared routes to plain HTML files
          // suitable for GitHub Pages (no Node.js server required).
          nitro: {
            preset: "static",
            prerender: {
              routes: [
                "/",
                "/property/aurum-3bhk-homes",
                "/property/platina-2bhk-homes",
                "/property/meridian-1bhk-homes",
                "/property/solaire-3bhk-homes",
                "/property/arya-grove-2bhk",
                "/property/vantage-1bhk-homes",
              ],
            },
          },
        }
      : {}),
  },
  ...(isGhPages
    ? {
        vite: {
          // Set the base path to the repository name so all assets resolve correctly
          // when served from https://siva0704.github.io/kind-connection/
          base: "/kind-connection/",
        },
      }
    : {}),
});
