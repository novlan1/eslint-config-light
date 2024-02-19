module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 1,
  },
};
