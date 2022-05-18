module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 4,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          Object: {
            message: 'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          '{}': {
            message: 'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
            fixWith: 'Record<string, unknown>',
          },
          object: {
            message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          Function: 'Use a specific function type instead, like `() => void`.',

          // TODO: Try to enable this in 2021.
          // null: {
          //  message: 'Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7',
          //  fixWith: 'undefined'
          // }

          '[]': 'Don\'t use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.',
          '[[]]': 'Don\'t use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.',
          '[[[]]]': 'Don\'t use `[[[]]]`. Use `SomeType[][][]` instead.',
          '[[[[]]]]': 'ur drunk 🤡',
          '[[[[[]]]]]': '🦄💥',
          Omit: 'Prefer the `Except` type in the `type-fest` package instead as it\'s stricter.',
        },
      },
    ],

    '@typescript-eslint/class-literal-property-style': [
      'error',
      'getters',
    ],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    'default-param-last': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': [
      'error',
      'never',
    ],
    // Disabled for now as it causes too many weird TypeScript issues.
    // TODO: Try to re-enable this again in 2022.
    // '@typescript-eslint/method-signature-style': 'error',

    // We use `@typescript-eslint/naming-convention` in favor of `camelcase`.
    camelcase: 'off',
    // TODO: Enable this again when the following is fixed:
    // - https://github.com/typescript-eslint/typescript-eslint/issues/1485
    // - https://github.com/typescript-eslint/typescript-eslint/issues/1484
    // TODO: Prevent `_` prefix on private fields when TypeScript 3.8 is out.
    // '@typescript-eslint/naming-convention': [
    // 'error',
    // {
    //   selector: 'default',
    //   format: [
    //     'strictCamelCase'
    //   ],
    //   We allow double underscope because of GraphQL type names and some React names.
    //   leadingUnderscore: 'allowSingleOrDouble',
    //   trailingUnderscore: 'allow',
    //   Ignore `{'Retry-After': retryAfter}` type properties.
    //   filter: {
    //     regex: '[- ]',
    //     match: false
    //   }
    // },
    // {
    //   selector: 'typeLike',
    //   format: [
    //     'StrictPascalCase'
    //   ]
    // },
    // {
    //   selector: 'variable',
    //   types: [
    //     'boolean'
    //   ],
    //   format: [
    //     'StrictPascalCase'
    //   ],
    //   prefix: [
    //     'is',
    //     'has',
    //     'can',
    //     'should',
    //     'will',
    //     'did'
    //   ]
    // },
    // {
    //   Interface name should not be prefixed with `I`.
    //   selector: 'interface',
    //   filter: /^(?!I)[A-Z]/.source,
    //   format: [
    //     'StrictPascalCase'
    //   ]
    // },
    // {
    //   Type parameter name should either be `T` or a descriptive name.
    //   selector: 'typeParameter',
    //   filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
    //   format: [
    //     'StrictPascalCase'
    //   ]
    // },
    // Allow these in non-camel-case when quoted.
    // {
    //   selector: [
    //     'classProperty',
    //     'objectLiteralProperty'
    //   ],
    //   format: null,
    //   modifiers: [
    //     'requiresQuotes'
    //   ]
    // }
    // ],
    // Disabled because it's too annoying. Enable it when it's more mature, smarter, and more flexible.
    // https://github.com/typescript-eslint/typescript-eslint/search?q=%22explicit-function-return-type%22&state=open&type=Issues
    // '@typescript-eslint/explicit-function-return-type': [
    //  'error',
    //  {
    //    allowExpressions: true,
    //    allowTypedFunctionExpressions: true,
    //    allowHigherOrderFunctions: true,
    //    allowConciseArrowFunctionExpressionsStartingWithVoid: false
    //  }
    // ],
    // TODO: enabled this
    // '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
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
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { classes: false }],
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',

    // This rule is fine. I just don't want to deal with the churn yet. Enable this in 2022.
    // '@typescript-eslint/consistent-type-definitions': [
    //  'error',
    //  'type'
    // ],

    // Disabled for now as it has too many false-positives.
    // https://github.com/typescript-eslint/typescript-eslint/search?q=%22explicit-module-boundary-types%22&state=open&type=Issues
    // '@typescript-eslint/explicit-module-boundary-types': [
    //  'error',
    //  {
    //    allowTypedFunctionExpressions: true,
    //    allowHigherOrderFunctions: true,
    //    allowDirectConstAssertionInArrowFunctions: true,
    //    shouldTrackReferences: true
    //  }
    // ],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],

    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',

          'public-static-field',
          'public-static-method',

          'protected-static-field',
          'protected-static-method',

          'private-static-field',
          'private-static-method',

          'static-field',
          'static-method',

          'public-decorated-field',
          'public-instance-field',
          'public-abstract-field',
          'public-field',

          'protected-decorated-field',
          'protected-instance-field',
          'protected-abstract-field',
          'protected-field',

          'private-decorated-field',
          'private-instance-field',
          'private-abstract-field',
          'private-field',

          'instance-field',
          'abstract-field',
          'decorated-field',
          'field',

          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'constructor',

          'public-decorated-method',
          'public-instance-method',
          'public-abstract-method',
          'public-method',

          'protected-decorated-method',
          'protected-instance-method',
          'protected-abstract-method',
          'protected-method',

          'private-decorated-method',
          'private-instance-method',
          'private-abstract-method',
          'private-method',

          'instance-method',
          'abstract-method',
          'decorated-method',
          'method',
        ],
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],

    // TODO: Try to enable this again in 2021.
    // Disabled for now. This is a great rule.
    // It's just that TypeScript is not good enough yet to not use `any` in many places.
    // For example: https://github.com/sindresorhus/refined-github/pull/2391#discussion_r318995182
    // '@typescript-eslint/no-explicit-any': [
    //  'error',
    //  {
    //    fixToUnknown: true,
    //    ignoreRestArgs: true
    //  }
    // ],

    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',

    // TODO: Enable this again when I target ESM output in all my TypeScript projects
    // '@typescript-eslint/no-namespace': 'error',

    // Type info needed for testing these below
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/await-thenable': 'error',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,

        // TODO: I really want this to be `true`, but it makes it inconvenient to use
        // async functions as event handlers... I need to find a good way to handle that.
        // https://github.com/sindresorhus/refined-github/pull/2391#discussion_r318990466
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowAny: true,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        // JS...
        allowAny: true,
      },
    ],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',

    // Disabled until this is resolved:
    // https://github.com/typescript-eslint/typescript-eslint/issues/202
    // '@typescript-eslint/no-non-null-assertion': 'error',

    // TODO: Enable this again when I target ESM output in all my TypeScript projects
    // '@typescript-eslint/no-require-imports': 'error',

    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],

    // TODO: Reconsider enabling this again in 2020.
    // Disable because it has too many false-positives: https://github.com/typescript-eslint/typescript-eslint/search?q=no-unnecessary-condition+is%3Aissue&state=open&type=Issues
    // '@typescript-eslint/no-unnecessary-condition': [
    //  'error',
    //  {
    //    ignoreRhs: true,
    //    checkArrayPredicates: true
    //  }
    // ],

    // TODO: Enable these again when we can use ESM natively in Node.js.
    // These rules cause problems with syntax like `import x = require('x');`
    // '@typescript-eslint/no-unsafe-assignment': 'error',
    // '@typescript-eslint/no-unsafe-call': 'error',
    // '@typescript-eslint/no-unsafe-member-access': 'error',
    // '@typescript-eslint/no-unsafe-return': 'error',

    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: /^_/.source,
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: /^_$/.source,
      },
    ],

    // Disabled for now as it's marked as experimental.
    // '@typescript-eslint/no-unused-vars-experimental': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    'no-void': [
      'error',
      {
        allowAsStatement: true, // To allow `ignoreVoid` in `@typescript-eslint/no-floating-promises`
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        // Prepend a function call with `void` to mark it as not needing to be await'ed, which silences this rule.
        ignoreVoid: true,
        ignoreIIFE: true,
      },
    ],

    // Disabled per typescript-eslint recommendation: https://github.com/typescript-eslint/typescript-eslint/blob/e26e43ffba96f6d46198b22f1c8dd5c814db2652/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',

    // Disabled until https://github.com/typescript-eslint/typescript-eslint/issues/1758 is fixed. Currently, it's too difficult to accept `Map` as a parameter.
    // '@typescript-eslint/prefer-readonly-parameter-types': [
    //  'error',
    //  {
    //    checkParameterProperties: true
    //  }
    // ],

    '@typescript-eslint/prefer-ts-expect-error': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
    ],

    // Disabled for now. It's too buggy.
    // It fails to detect when try/catch is used, await inside blocks, etc.
    // It's also common to have async functions without await for various reasons.
    // 'require-await': 'off',
    // '@typescript-eslint/require-await': 'error',

    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // TODO: Reconsider enabling it again in 2021.
    // Disabled for now as it's too strict.
    // Relevant discussion: https://github.com/sindresorhus/refined-github/pull/2521#discussion_r343013852
    // '@typescript-eslint/strict-boolean-expressions': [
    //  'error',
    //  {
    //    allowNullable: true,
    //    allowSafe: true
    //  }
    // ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',

        // Cannot enable this until `@types/node` no longer has the `NodeJS` global
        // types: 'never'
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',

    // Disabled as it crashes on most code.
    // https://github.com/typescript-eslint/typescript-eslint/search?q=%22unbound-method%22&state=open&type=Issues
    // '@typescript-eslint/unbound-method': [
    //  'error',
    //  {
    //    ignoreStatic: true
    //  }
    // ],

    '@typescript-eslint/unified-signatures': 'error',

    // OFF RULES
    indent: 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'no-use-before-define': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    // TypeScript supports these features
    'no-useless-catch': 'error',
    // Disabled because of https://github.com/typescript-eslint/typescript-eslint/issues/60
    'no-redeclare': 'off',
  },
};
