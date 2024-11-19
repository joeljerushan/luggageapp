import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {globals: globals.node},
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'import/no-unresolved': 'error', // Ensure this is set to 'error' to catch unresolved imports
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
  },
  {
    // Add settings for ESLint to resolve your aliases properly
    settings: {
      'import/resolver': {
        'babel-module': {}, // Enables resolution based on babel config
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure it can resolve these file extensions
        },
      },
    },
  },
];
