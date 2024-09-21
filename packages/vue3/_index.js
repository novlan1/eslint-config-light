module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  globals: {
    cy: 'readonly',
    Cypress: 'readonly',
    clipboardData: 'readonly',
    PKG_VERSION: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },
  rules: {
    // 'no-console': [
    //   'error',
    //   {
    //     allow: ['info', 'warn', 'error'],
    //   },
    // ],

    'no-undef': 'error',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: false,
      },
    ],
    semi: [
      'error',
      'always',
    ],

    // code style config
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': ['error'],
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'default-param-last': 'off',
    'default-case': 'off',
    'prefer-spread': 'off',
    'object-curly-spacing': [
      'warn',
      'always',
    ],

    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    'comma-spacing': 'off',
    indent: 'off',
    'keyword-spacing': 'off',
    'func-call-spacing': 'off',
    'no-dupe-class-members': 'off',
    /**
     * 要求操作符周围有空格
     */
    'space-infix-ops': 'error',
    'no-redeclare': 'error',

    /**
     * 避免在行尾添加空格。
     */
    'no-trailing-spaces': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
      },
    ],

    // import config
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-relative-packages': 'off',

    // typescript config
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/ban-types': 0,
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_.+',
        varsIgnorePattern: '^_.+',
      },
    ],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-slot-attribute': 0,
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'function',
        format: [
          'camelCase',
          'PascalCase',
        ],
      },
      {
        selector: 'variable',
        format: [
          'camelCase',
          'UPPER_CASE',
        ],
      },
      {
        selector: 'variable',
        modifiers: [
          'global',
        ],
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
        ],
      },
      {
        selector: 'variable',
        format: [
          'camelCase',
          'PascalCase',
        ],
        types: [
          'function',
        ],
      },
      {
        selector: 'variable',
        modifiers: [
          'exported',
        ],
        format: [
          'UPPER_CASE',
        ],
        types: [
          'boolean',
          'string',
          'number',
          'array',
        ],
      },
      {
        selector: 'variable',
        modifiers: [
          'exported',
        ],
        format: [
          'camelCase',
          'PascalCase',
        ],
        types: [
          'function',
        ],
      },
      {
        selector: [
          'class',
          'typeLike',
        ],
        format: [
          'PascalCase',
        ],
      },
      {
        selector: [
          'classMethod',
          'classProperty',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        format: [
          'camelCase',
        ],
      },
    ],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    /**
     * 要求或禁止在函数标识符和其调用之间有空格
     */
    '@typescript-eslint/func-call-spacing': [
      'error',
      'never',
    ],
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        overrides: {
          if: {
            after: true,
          },
          for: {
            after: true,
          },
          while: {
            after: true,
          },
          else: {
            after: true,
          },
        },
        before: true,
        after: true,
      },
    ],
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/no-dupe-class-members': 'error',

    /**
     * 使用 optional chaining 替代 &&
     */
    '@typescript-eslint/prefer-optional-chain': 'error',
    'brace-style': 'off',
    'no-empty-function': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/491
    'no-invalid-this': 'off',
    'no-magic-numbers': 'off',
    'react/sort-comp': 'off',
    'dot-notation': 'off',
    camelcase: 'off',
    'no-array-constructor': 'off',
    'no-useless-constructor': 'off',
    'space-before-function-paren': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/600
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    /**
     * 重载的函数必须写在一起
     * @reason 增加可读性
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/brace-style': 'error',
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    /**
     * 优先使用 interface 而不是 type
     */
    '@typescript-eslint/consistent-type-definitions': 'off',
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/dot-notation': 'warn',
    /**
     * 必须设置类的成员的可访问性
     * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
     */
    '@typescript-eslint/explicit-member-accessibility': 'off',
    /**
     * 指定类成员的排序规则
     * @reason 优先级：
     * 1. static > instance
     * 2. field > constructor > method
     * 3. public > protected > private
     */
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],
    /**
     * 接口中的方法必须用属性的方式定义
     */
    '@typescript-eslint/method-signature-style': 'off',

    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/no-array-constructor': 'error',
    /**
     * 禁止定义空的接口
     */
    '@typescript-eslint/no-empty-interface': 'error',
    /**
     * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
     * @reason 可以简化代码
     */
    '@typescript-eslint/no-inferrable-types': 'warn',
    /**
     * 禁止对 promise 的误用，详见示例
     */
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
      },
    ],
    /**
     * 禁止使用 namespace 来定义命名空间
     * @reason 使用 es6 引入模块，才是更标准的方式。
     * 但是允许使用 declare namespace ... {} 来定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
    /**
     * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
     * @reason optional chaining 后面的属性一定是非空的
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    /**
     * 禁止给类的构造函数的参数添加修饰符
     */
    '@typescript-eslint/no-parameter-properties': 'off',
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],
    /**
     * 禁止无用的表达式
     */
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * 禁止出现没必要的 constructor
     */
    '@typescript-eslint/no-useless-constructor': 'warn',
    /**
     * 使用函数类型别名替代包含函数调用声明的接口
     */
    '@typescript-eslint/prefer-function-type': 'warn',
    /**
     * 禁止使用 module 来定义命名空间
     * @reason module 已成为 js 的关键字
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: false,
      },
    ],
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    /**
     * 禁止使用三斜杠导入文件
     * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
     */
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'always',
        lib: 'always',
      },
    ],
    /**
     * 在类型注释周围需要一致的间距
     */
    '@typescript-eslint/type-annotation-spacing': 'error',
    /**
     * interface 和 type 定义时必须声明成员的类型
     */
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     */
    '@typescript-eslint/unified-signatures': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/component-name-in-template-casing': [2, 'PascalCase'],
        'vue/require-default-prop': 0,
        // 不处理 @customEvent
        // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
        'vue/v-on-event-hyphenation': 0,
      },
    },
    {
      files: [
        '**/_example/*',
        '**/_example-ts/*',
        'script/**/*',
        'script/*',
        '*.js',
        'site/**/*',
        'site/*',
      ],
      rules: {
        'no-var-requires': 0,
        'no-console': 0,
        'no-unused-expressions': 0,
        'no-alert': 0,
      },
    },
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
    {
      files: [
        '*.test.js',
      ],
      rules: {
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
      },
    },
    {
      files: '*',
    },
  ],
};
