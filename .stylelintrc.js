module.exports = {
  ...require('@lobehub/lint').stylelint,
  extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'block-no-empty': null,
  },
};
