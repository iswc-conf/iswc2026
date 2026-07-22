// Build config used only by `npm run smoke` - renders the app server-side so
// every route can be checked for runtime errors. Not used for deployment.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  ssr: { noExternal: true },
  build: {
    ssr: "scripts/ssr-entry.jsx",
    outDir: "node_modules/.smoke",
    emptyOutDir: true,
    rollupOptions: { output: { format: "es" } },
  },
});
