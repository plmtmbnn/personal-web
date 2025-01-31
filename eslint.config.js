import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports'; // Added for unused imports

export default tseslint.config(
  { ignores: ['dist', '.turbo', '.vscode'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports, // Added plugin for unused imports
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "quotes": ["error", "single"], // Enforce single quotes
      "semi": ["error", "always"], // Enforce semicolons
      "indent": ["error", 2], // Enforce 2-space indentation
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"], // No mixed spaces and tabs
      "comma-dangle": ["error", "never"], // No dangling commas
      "no-unused-vars": ["warn", { "args": "none", "ignoreRestSiblings": true }], // Warn on unused variables
      "unused-imports/no-unused-imports": "warn", // Automatically remove unused imports
      "unused-imports/no-unused-vars": ["warn", { "vars": "all", "args": "after-used" }] // Automatically remove unused variables
    },
  },
);
