import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set `base` to "/<REPO_NAME>/" for GitHub Pages deployment.
  // For example, if your repo is "username/portfolio", use "/portfolio/".
  // For custom domains or Netlify root deployment, use "/".
  base: "/",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
