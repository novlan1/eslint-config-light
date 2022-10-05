module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 0,
  },
};
