module.exports = {
  root: true,
  plugins: ['react', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off', // temporary, will turn it on after fixing issue with tw.macro
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-named-as-default-member': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'quote-props': ['warn', 'as-needed'],
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'import/no-unresolved': 'off',
    'import/newline-after-import': 'error',
    'no-console': 'warn',
    'react/no-typos': 'error',
    'react/boolean-prop-naming': 'warn',
    'react/state-in-constructor': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-indent': ['error', 2],
    'react/prop-types': 'off',
    'react/no-unknown-property': ['warn', { ignore: ['tw', 'css'] }],
    'no-useless-escape': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', 
    'react/no-array-index-key': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: [
    'node_modules/',
    '.next/'
  ],
}
