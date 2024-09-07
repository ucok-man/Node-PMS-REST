import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/", "*.config.*"] }, //node modules ignores by default
  { files: ["src/**/*.{ts}", "tests/**/*.{ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{test,spec}.{ts}", "tests/**/*.{test,spec}.{ts}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },

  // add your custom rule
  // {
  //   rules: {
  //     "": "",
  //   },
  // },

  // Always put on bottom
  eslintPluginPrettier,
];
