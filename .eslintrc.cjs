module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier', 'import', 'html'],
  rules: {
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/prefer-default-export': ['off'],
    'no-console': ['off'],
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // prettier
    'prettier/prettier': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    $t: true,
    uni: true,
    UniApp: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    UniHelper: true,
    Page: true,
    App: true,
    NodeJS: true,
  },
}
