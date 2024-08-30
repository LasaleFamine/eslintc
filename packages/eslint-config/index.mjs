
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { mainConfig as lasalefamineBase } from '@lasalefamine/eslint-config-base';

import { compat, fixupPluginRules } from './helpers.mjs';

export const mainConfig = [
  ...lasalefamineBase,
  ...fixupPluginRules(compat.extends(
    './rules/react.js',
  )), {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {},
  }];
