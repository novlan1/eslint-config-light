const importSettings = require('./eslint-plugin-import-setting');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@tencent/eslint-config-tencent/ts',
    '@tencent/eslint-config-tencent/import',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: importSettings,
};
