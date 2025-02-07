import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,

  { files: ["src/**/*.js"] },

  // Eslint ignores the following files so it doesn't highlight errors or warnings
  // Link to setting up ignores: https://github.com/eslint/eslint/discussions/18304
  {
    ignores: [
      "webpack.common.js",
      "webpack.dev.js",
      "webpack.prod.js",
      "eslint.config.mjs",
      "dist/**",
      "node_modules/**",
    ],
  },

  { languageOptions: { globals: globals.browser } },

  {
    // Rules can be found from https://eslint.org/docs/latest/rules/
    rules: {
      "no-unused-vars": "off",
      camelcase: "warn",
      "new-cap": "error",
      // "no-undef": "warn",
      // "no-console": "warn",
      "no-array-constructor": "error",
      "capitalized-comments": [
        "error",
        "always",
        {
          ignoreConsecutiveComments: true,
        },
      ],
      "no-console": "warn",
      "arrow-body-style": ["error", "as-needed"],
      "no-dupe-args": "off",
    },
  },
];
