import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home",
      remotes: {
        "hs-patient-records": "http://localhost:5174/assets/remoteEntry.js",
        "hs-comp-library": "http://localhost:5175/assets/remoteEntry.js",
      },
      shared: {
        react: { version: '*' },
        'react-dom': { version: '*' }
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
  },
  server: {
    port: 5173,
  },
});
