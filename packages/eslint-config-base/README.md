![CI](https://github.com/LasaleFamine/eslintc/workflows/CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@lasalefamine/eslint-config-base.svg?style=flat)](https://www.npmjs.com/package/@lasalefamine/eslint-config-base)

# @lasalefamine/eslint-config-base

> Base config for ESlint - no React

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-simple-import-sort`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` and `typescript`

## WARN
> From version 5.0.0 we are using ESlint 9.

## Install

First install the dependencies:

```
yarn add --dev eslint eslint-plugin-import eslint-plugin-simple-import-sort @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

Then add our config:

```
yarn add --dev @lasalefamine/eslint-config-base
```

## Usage

### @lasalefamine/eslint-config-base

Add to your `.eslintrc`
```json
{
  "extends": "@lasalefamine/eslint-config-base",
  "parserOptions": {
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
  "extends": "@lasalefamine/eslint-config-base",
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  }
}
```

## The `parserOptions.project` issue

You may wonder why you need to add an extra `tsconfig.eslint.json` file: this is kinda a problem with some rules that come from `@typescript-eslint` that need type information during the linting process, this is why you need to add a `projectOptions.project` to your `.eslintrc`. At this point ESLint will lint **only files specified within the `include` array of the `tsconfig` you choose**, this actually why you need to create a new `tsconfig.eslint.json`, extends your main `tsconfig` for having type information available to ESLint and then just re-include everythin you need to lint.

More info:
- https://github.com/typescript-eslint/typescript-eslint/issues/856
- https://github.com/typescript-eslint/typescript-eslint/issues/890


## Develop

You can run tests with `yarn test`.

You can make sure this module lints with itself using `yarn lint`.
