/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { compat, fixupPluginRules } from './helpers.mjs';

export default [...fixupPluginRules(compat.extends(
  './rules/react-hooks.js',
)), {
  rules: {},
}];
