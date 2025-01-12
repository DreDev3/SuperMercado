import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
/* import eslintPluginPrettier from 'eslint-plugin-prettier'; */

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
/*        'prettier/prettier': 'error', */
      'treact/react-in-jsx-scope': 0,
      'semi': ['error', 'always'], // Corrige a ausência de ponto e vírgula
      'quotes': ['error', 'single'],
    }
  }
];
