const importSettings = require('./eslint-plugin-import-setting');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    '@tencent/eslint-config-tencent',
    'plugin:import/recommended',
  ],
  settings: importSettings,
  rules: {
    'import/no-unresolved': [2,
      {
        ignore: [
          'node_modules',
          '@TIP_PLATFORM_NAME(\\.js)?$',
        ],
      },
    ],
  },
};
