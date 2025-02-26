import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hs-comp-library",
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/components/index.ts",
      },
      shared: ["react", "react-dom", "tailwindcss"],
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

      }
    }
  },
  // base: "/comp-library/latest",
  server: {
    port: 5175,
  },
});
