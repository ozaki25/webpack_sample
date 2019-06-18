module.exports = {
  env: {
    browser: true,
    jquery: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  rules: {
    quotes: ['error', 'single'],
    'no-console': ['off']
  },
  globals: {}
};
