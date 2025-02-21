import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      federation({
        name: "home",
        remotes: {
          "hs-patient-records": `${env.VITE_PATIENT_RECORDS_URL}/assets/remoteEntry.js`,
          "hs-comp-library": `${env.VITE_COMP_LIBRARY_URL}/assets/remoteEntry.js`,
          "hs-pharmacy": `${env.VITE_PHARMACY_URL}/assets/remoteEntry.js`,
          "hs-appointments": `${env.VITE_APPOINTMENTS_URL}/assets/remoteEntry.js`,
          "hs-billing": `${env.VITE_BILLING_URL}/assets/remoteEntry.js`,
          "hs-laboratory": `${env.VITE_LABORATORY_URL}/assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom", "tailwindcss"]
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
    // base: "/home/latest",
    server: {
      port: 5173,
    },
  };
});
