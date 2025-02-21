import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      federation({
        name: "hs-laboratory",
        filename: "remoteEntry.js",
        exposes: {
          "./Laboratory": "./src/pages/Laboratory.tsx",
        },
        remotes: {
          "hs-comp-library": `${env.VITE_COMP_LIBRARY_URL}/assets/remoteEntry.js`,
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
    base: "/latest",
    server: {
      port: 5179,
    },
  };
});
