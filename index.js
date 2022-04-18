module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: ["*.test.js", "*.spec.js"],
      extends: ["./base.js"],
    },
    {
      files: ["*.ts"],
      excludedFiles: ["*.test.ts", "*.spec.ts"],
      extends: ["./base.js", "./ts.js"],
    },
    {
      files: ["*.test.js", "*.spec.js"],
      extends: ["./base.js", "./jest.js"],
    },
    {
      files: ["*.test.ts", "*.spec.ts"],
      extends: ["./base.js", "./ts.js", "./jest.js"],
    },
    {
      files: ["*.jsx"],
      excludedFiles: ["*.test.jsx", "*.spec.jsx"],
      extends: ["./react.js", "./base.js"],
    },
    {
      files: ["*.tsx"],
      excludedFiles: ["*.test.tsx", "*.spec.tsx"],
      extends: ["./react.js", "./base.js", "./ts.js"],
    },
    {
      files: ["*.test.jsx", "*.spec.jsx"],
      extends: ["./react.js", "./jest.js", "./base.js"],
    },
    {
      files: ["*.test.tsx", "*.spec.tsx"],
      extends: ["./react.js", "./jest.js", "./base.js", "./ts.js"],
    },
    {
      files: ["*.vue"],
      extends: ["./base.js", "./vue.js"],
    },
  ],
};
