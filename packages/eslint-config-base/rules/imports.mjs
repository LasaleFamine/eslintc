/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import _import from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import { fixupPluginRules } from '../helpers.mjs';

export const imports = [{
  plugins: {
    import: fixupPluginRules(_import),
    'simple-import-sort': simpleImportSort,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
        paths: ['src'],
      },
    },

    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],

    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  rules: {
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/vue.config.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/Gruntfile{,.js}',
        '**/protractor.conf.js',
        '**/protractor.conf.*.js',
        '**/cypress/**',
        '**/storybook/**',
        '**/testUtils.tsx',
        '**/configureStore.ts',
        '**/next.config.js',
        '**/postcss.config.js',
        '**/gatsby-node.js',
        '**/*.stories.{jsx,tsx,js,ts}',
        '**/eslint.config.js',
      ],

      packageDir: ['./'],
      optionalDependencies: false,
    }],

    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/imports-first': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',

    'import/extensions': ['error', {
      js: 'never',
      mjs: 'ignorePackages',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      json: 'always',
      pcss: 'always',
      css: 'always',
    }],

    'import/order': ['error', {
      groups: [['builtin', 'external', 'internal']],
    }],

    'import/newline-after-import': 'error',
    'import/prefer-default-export': 0,
    'import/no-restricted-paths': 'off',

    'import/max-dependencies': ['off', {
      max: 10,
    }],

    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',

    'import/no-internal-modules': ['off', {
      allow: [],
    }],

    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',

    'import/no-anonymous-default-export': ['off', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': 'off',
    'import/no-useless-path-segments': 'error',

    'import/dynamic-import-chunkname': ['off', {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    }],

    'import/no-relative-parent-imports': 'off',

    'import/no-unused-modules': ['off', {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    }],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}];
