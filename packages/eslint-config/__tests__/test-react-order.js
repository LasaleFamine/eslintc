/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const { CLIEngine } = require('eslint');
const eslintrc = require('..');
const reactRules = require('../rules/react');
const reactA11yRules = require('../rules/react-a11y');

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
  rules: {
    // devDependencies in tests.
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    // this doesn't matter for tests
    'lines-between-class-members': 0,
    // Avoid rules that need type info, for now
    // https://github.com/typescript-eslint/typescript-eslint/issues/885#issuecomment-523083616
    '@typescript-eslint/prefer-optional-chain': 0,
    '@typescript-eslint/no-base-to-string': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/await-thenable': 0,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
    '@typescript-eslint/no-unnecessary-qualifier': 0,
    '@typescript-eslint/no-unnecessary-type-arguments': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/prefer-includes': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/prefer-readonly': 0,
    '@typescript-eslint/prefer-reduce-type-parameter': 0,
    '@typescript-eslint/prefer-string-starts-ends-with': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/return-await': 0,
    '@typescript-eslint/require-array-sort-compare': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 0,
    '@typescript-eslint/prefer-regexp-exec': 0,

    // Avoid for this test
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/naming-convention': 0,
  },
});

function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0 */
${body}
}
`;
}

describe('validate react prop order', () => {
  it('make sure our eslintrc has React and JSX linting dependencies', () => {
    expect(reactRules.plugins).toStrictEqual(['react']);
    expect(reactA11yRules.plugins).toStrictEqual(['jsx-a11y', 'react']);
  });

  it('passes a good component', () => {
    const result = lint(wrapComponent(`
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  someMethod() {}
  renderDogs() {}
  render() {
    return <div />;
  }`));

    expect(result.warningCount).not.toBeTruthy();
    expect(result.messages).toStrictEqual([]);
    expect(result.errorCount.length).not.toBeTruthy();
  });

  it('order: when random method is first', () => {
    const result = lint(wrapComponent(`
  someMethod() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() {
    return <div />;
  }`));

    expect(result.errorCount).toBeTruthy();
    expect(result.messages.map(msg => msg.ruleId)).toStrictEqual(['react/sort-comp']);
  });

  test('order: when random method after lifecycle methods', () => {
    const result = lint(wrapComponent(`
  componentDidMount() {}
  someMethod() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() {
    return <div />;
  }`));

    expect(result.errorCount).toBeTruthy();
    expect(result.messages.map(msg => msg.ruleId)).toStrictEqual(['react/sort-comp']);
  });
});
