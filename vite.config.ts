import { defineConfig } from "vite";
import tsconfigPath from 'vite-tsconfig-paths';
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPath(),
    tanstackRouter({
      routesDirectory: "./src/app/routes",
      generatedRouteTree: "./src/app/routes/routeTree.gen.ts",
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
});
