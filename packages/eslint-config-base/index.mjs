/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals';

import { compat, fixupConfigRules } from './helpers.mjs';
import { bestPractices } from './rules/best-practices.mjs';
import { errors } from './rules/errors.mjs';
import { es6 } from './rules/es6.mjs';
import { imports } from './rules/imports.mjs';
import { node } from './rules/node.mjs';
import { style } from './rules/style.mjs';
import { variables } from './rules/variables.mjs';

export const mainConfig = [
  ...imports,
  ...bestPractices,
  ...style,
  ...node,
  ...errors,
  ...es6,
  ...variables,
  ...fixupConfigRules(compat.extends(
    './rules/typescript.js',
  )), {
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.amd,
        ...globals.node,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },

    rules: {
      // strict: "error",
    },
  }];
