import type { NextConfig } from "next";

// GitHub Pages serves a project site under /<repo-name>/, so the deploy
// workflow (which sets GITHUB_ACTIONS) builds with that prefix. Local builds
// (`npm run build && npx serve out`) have no prefix, so they open at "/".
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/shipyard" : "";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a plain HTML/CSS/JS site to out/.
  output: "export",
  basePath,
  trailingSlash: true,
  // No image server on GitHub Pages. Images keep lazy loading and reserved
  // space, but are served as-is.
  images: { unoptimized: true },
  // Exposed to the client so asset() can prefix /public files.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
