module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
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

    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/require-default-prop': 0,
    // 不处理 @customEvent
    // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
    'vue/v-on-event-hyphenation': 0,
  },
};
