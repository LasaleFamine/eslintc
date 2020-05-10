module.exports = {
  extends: [
    '@lasalefamine/eslint-config-base',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {}
};
