/// <reference types="vitest/config" />
/// <reference types="vitest" />
/// <reference types="@vitest/browser/providers/playwright" />
import { defineConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [tsconfigPath(), tanstackRouter({
    routesDirectory: "./src/app/routes",
    generatedRouteTree: "./src/app/routes/routeTree.gen.ts",
    target: "react",
    autoCodeSplitting: true
  }), react(), svgr(), ...(process.env.ANALYZE === "true" ? [visualizer({
    template: "treemap",
    // or sunburst
    open: true,
    gzipSize: true,
    brotliSize: true,
    filename: "stats.html"
  })] : [])],
  css: {
    modules: {
      generateScopedName: process.env.NODE_ENV === "test" ? "[local]" // Отключаем генерацию хеша для тестов
      : "[local]_[hash:base64:5]"
    }
  },
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [{
        browser: "chromium"
      }],
      headless: true
    },
    css: {
      modules: {
        classNameStrategy: "non-scoped"
      }
    },
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});