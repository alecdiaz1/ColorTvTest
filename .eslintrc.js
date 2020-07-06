module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', 'ts'] }],
    'react/prefer-stateless-function': [0],
    'react/jsx-indent': [0],
    'no-param-reassign': 'off',
    'linebreak-style': 0,
    'react/sort-comp': [0],
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    camelcase: 'off',
    'no-use-before-define': 'off',
    semi: ['error', 'always'],
  },
};
