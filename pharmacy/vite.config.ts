import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hs-patient-records",
      filename: "remoteEntry.js",
      exposes: {
        "./Pharmacy": "./src/pages/Pharmacy.tsx",
      },
      remotes: {
        "hs-comp-library": "http://localhost:5175/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
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
    port: 5174,
  },
});
