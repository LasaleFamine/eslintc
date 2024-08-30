
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { mainConfig as lasalefamineBase } from '@lasalefamine/eslint-config-base';

import { reactRules } from './rules/react.mjs';

export const mainConfig = [
  ...lasalefamineBase,
  ...reactRules,
  {
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
