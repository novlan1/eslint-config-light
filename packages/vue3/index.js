module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: ['*.test.js', '*.spec.js'],
      extends: ['./lib/base.js'],
    },
    {
      files: ['*.ts'],
      excludedFiles: ['*.test.ts', '*.spec.ts'],
      extends: ['./lib/base.js', './lib/ts.js'],
    },
    {
      files: ['*.test.js', '*.spec.js'],
      extends: ['./lib/base.js', './lib/jest.js'],
    },
    {
      files: ['*.test.ts', '*.spec.ts'],
      extends: ['./lib/base.js', './lib/ts.js', './lib/jest.js'],
    },
    {
      files: ['*.jsx'],
      excludedFiles: ['*.test.jsx', '*.spec.jsx'],
      extends: ['./lib/react.js', './lib/base.js'],
    },
    {
      files: ['*.tsx'],
      excludedFiles: ['*.test.tsx', '*.spec.tsx'],
      extends: ['./lib/react.js', './lib/base.js', './lib/ts.js'],
    },
    {
      files: ['*.test.jsx', '*.spec.jsx'],
      extends: ['./lib/react.js', './lib/jest.js', './lib/base.js'],
    },
    {
      files: ['*.test.tsx', '*.spec.tsx'],
      extends: ['./lib/react.js', './lib/jest.js', './lib/base.js', './lib/ts.js'],
    },
    {
      files: ['*.vue'],
      extends: ['./lib/base.js', './lib/vue.js'],
    },
  ],
};
