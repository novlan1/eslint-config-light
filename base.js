const importSettings = require('./eslint-plugin-import-setting');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    '@tencent/eslint-config-tencent',
    'plugin:import/recommended',
  ],
  settings: importSettings,
};
