module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",

    /**
     * Prettier must be the last extension in the list.
     * Prettier works best if you disable all other ESLint rules relating to
     * code formatting, and only enable rules that detect potential bugs.
     * (If another active ESLint rule disagrees with prettier about how code
     * should be formatted, it will be impossible to avoid lint errors.)
     */
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
