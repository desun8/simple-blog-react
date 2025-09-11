import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import i18next from "eslint-plugin-i18next";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "19.1.1",
      },
    },
  },
  i18next.configs["flat/recommended"],
  eslintConfigPrettier,
  storybook.configs["flat/recommended"],
  {
    files: ["**/storybook/**/*.{ts,tsx}"],
    rules: {
      "react/display-name": "off",
    },
  },
]);
