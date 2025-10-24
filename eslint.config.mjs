import { defineConfig, globalIgnores } from "eslint/config";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier handles formatting
      'prettier/prettier': ['warn', {
        semi: false,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none'
      }],

      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    rules: {
      // Disable rules that conflict with Prettier
      indent: 'off',
      quotes: 'off',
      semi: 'off',

      // Disable unwanted rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-unescaped-entities': 'off' // Optional
    }
  }
]);

export default eslintConfig;
