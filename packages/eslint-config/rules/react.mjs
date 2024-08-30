/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import react from 'eslint-plugin-react';

export const reactRules = [{
  plugins: {
    react,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },

    react: {
      version: 'detect',
    },

    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
  },

  rules: {
    'no-underscore-dangle': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'class-methods-use-this': ['off'],

    'react/display-name': ['off', {
      ignoreTranspilerName: false,
    }],

    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],

    'react/forbid-dom-props': ['off', {
      forbid: [],
    }],

    'react/jsx-boolean-value': ['error', 'never', {
      always: [],
    }],

    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',

    'react/jsx-curly-spacing': ['error', 'never', {
      allowMultiline: true,
    }],

    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'off',

    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline',
    }],

    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],

    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true,
    }],

    'react/jsx-no-literals': ['off', {
      noStrings: true,
    }],

    'react/jsx-no-undef': 'error',

    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],

    'react/sort-prop-types': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    }],

    'react/jsx-sort-prop-types': 'off',

    'react/jsx-sort-props': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],

    'react/jsx-sort-default-props': ['off', {
      ignoreCase: true,
    }],

    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-direct-mutation-state': 'off',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],

    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: true,
    }],

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',

    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],

      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],

        rendering: ['/^render.+$/', 'render'],
      },
    }],

    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-equals-spacing': ['error', 'never'],

    'react/jsx-indent': ['error', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],

    'react/jsx-no-target-blank': ['error', {
      enforceDynamicLinks: 'always',
    }],

    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],

    'react/jsx-no-comment-textnodes': 'error',
    'react/no-render-return-value': 'error',

    'react/require-optimization': ['off', {
      allowDecorators: [],
    }],

    'react/no-find-dom-node': 'error',

    'react/forbid-component-props': ['off', {
      forbid: [],
    }],

    'react/forbid-elements': ['off', {
      forbid: [],
    }],

    'react/no-danger-with-children': 'error',

    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: true,
    }],

    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',

    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    'react/jsx-space-before-closing': ['off', 'always'],
    'react/no-array-index-key': 'error',

    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: true,
    }],

    'react/forbid-foreign-prop-types': ['warn', {
      allowInPropTypes: true,
    }],

    'react/void-dom-elements-no-children': 'error',

    'react/default-props-match-prop-types': ['error', {
      allowRequiredDefaults: false,
    }],

    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 'error',

    'react/boolean-prop-naming': ['off', {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: '',
    }],

    'react/no-typos': 'error',

    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never',
    }],

    'react/jsx-one-expression-per-line': ['error', {
      allow: 'single-child',
    }],

    'react/destructuring-assignment': ['warn', 'always', {
      ignoreClassFields: true,
    }],

    'react/no-access-state-in-setstate': 'error',

    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false,
    }],

    'react/jsx-child-element-spacing': 'off',
    'react/no-this-in-sfc': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/no-unsafe': 'off',
    'react/jsx-fragments': ['error', 'syntax'],

    'react/jsx-curly-newline': ['off', {
      multiline: 'consistent',
      single: 'consistent',
    }],

    'react/state-in-constructor': ['off', 'never'],
    'react/static-property-placement': ['off', 'property assignment'],

    'react/jsx-props-no-spreading': ['off', {
      html: 'enforce',
      custom: 'enforce',
      exceptions: [],
    }],

    'react/prefer-read-only-props': 'off',
  },
}];
