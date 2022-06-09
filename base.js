const importSettings = require('./eslint-plugin-import-setting');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    '@tencent/eslint-config-tencent',
    'plugin:import/recommended',
  ],
  globals: {
    app: true,
    need: true,
    uni: true,
    VConsole: true,
    wx: true,
    emonitor: true,
    globalVars: true,
    $: true,
  },
  settings: importSettings,
  rules: {
    'no-empty': 0,
    'import/no-unresolved': [2,
      {
        ignore: [
          'node_modules',
          '^@/*',
          '@TIP_PLATFORM_NAME(\\.js)?$',
        ],
      },
    ],
  },
};
