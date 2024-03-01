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

    // node_modules/@vue/eslint-config-typescript/index.js
    // 这个包将 no-undef 设置为 off，我们项目并非全部都是
    // typescript，所以需要打开
    'no-undef': 2,

    // 恢复原因同 no-undef
    '@typescript-eslint/no-unused-vars': 2,
    'no-unused-vars': 2,
  },
};
