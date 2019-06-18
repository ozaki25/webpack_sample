module.exports = {
  extends: [
    'stylelint-config-idiomatic-order',
    'stylelint-config-recommended-scss',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'string-quotes': 'single',
  },
};
