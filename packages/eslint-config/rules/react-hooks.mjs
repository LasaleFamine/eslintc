/* eslint-disable @typescript-eslint/no-unsafe-argument */

import reactHooks from 'eslint-plugin-react-hooks';

import { fixupPluginRules } from '../helpers.mjs';

export const reactHoooks = [{
  plugins: {
    'react-hooks': fixupPluginRules(reactHooks),
  },

  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}];
