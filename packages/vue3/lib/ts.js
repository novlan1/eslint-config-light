const importSettings = require('./eslint-plugin-import-setting');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-rookie/ts',
    'eslint-config-rookie/import',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: importSettings,
};
