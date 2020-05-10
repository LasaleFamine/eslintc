![CI](https://github.com/LasaleFamine/eslintc/workflows/CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@lasalefamine/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@lasalefamine/eslint-config)

# @lasalefamine/eslint-config

> Complete ESlint configuration. Batteries included.

There are 3 ESLint configurations for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `typescript`, and `eslint-plugin-jsx-a11y`. If you don't need React, see `@lasalefamine/eslint-config-base`.

## Install

First install the dependencies:

```
yarn add --dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript eslint-plugin-jsx-a11y
```

Then add the config:

```
yarn add --dev @lasalefamine/eslint-config
```

## Usage

### @lasalefamine/eslint-config

Add to your `.eslintrc`
```json
{
  "extends": "@lasalefamine/eslint-config",
  "parserOption": {
    "project": "tsconfig.json"
  }
}
```

### tsconfig.eslint.json

Create a new `tsconfig.eslint.json` files for overrides the `include` and `exclude` of your main `tsconfig.json`, so that ESLint will be able to lint everything without complaining:
```json
{
  "extends": "./tsconfig.json",
  "exclude": [
    "node_modules"
  ],
  "include": [
    "**/*.js",
    "**/*.ts",
    "**/*.tsx"
  ]
}

```

And in your `.eslintrc`:
```json
{
  "extends": "@lasalefamine/eslint-config",
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  },
}
```

### @lasalefamine/eslint-config/hooks

This entry point enables the linting rules for React hooks (requires v16.8+).
To use add to your `.eslintrc`
```json
{
  "extends": ["@lasalefamine/eslint-config", "@lasalefamine/eslint-config/hooks"]
  ...
}
```

### @lasalefamine/eslint-config/a11y

This entry point enables the linting rules for React A11y.
To use add to your `.eslintrc`
```json
{
  "extends": ["@lasalefamine/eslint-config", "@lasalefamine/eslint-config/a11y"]
  ...
}
```

## Develop

You can run tests with `yarn test`.

You can make sure this module lints with itself using `yarn lint`.

