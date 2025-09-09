/// <reference types="vitest" />
/// <reference types="@vitest/browser/providers/playwright" />
import { defineConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

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
    svgr(),
    ...(process.env.ANALYZE === "true"
      ? [
          visualizer({
            template: "treemap", // or sunburst
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: "stats.html",
          }),
        ]
      : []),
  ],
  css: {
    modules: {
      generateScopedName:
        process.env.NODE_ENV === "test"
          ? "[local]" // Отключаем генерацию хеша для тестов
          : "[local]_[hash:base64:5]",
    },
  },
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
      headless: true,
    },
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
});
