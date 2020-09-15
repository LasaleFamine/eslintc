module.exports = {
  parserOptions: {
    project: './tsconfig.sample.json',
    tsconfigRootDir: __dirname,
  },
  extends: './index.js',
  rules: {
    'comma-dangle': 0,
    '@typescript-eslint/naming-convention': 0
  }
};
