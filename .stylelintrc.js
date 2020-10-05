module.exports = {
  processors: ['stylelint-processor-styled-components'],
  plugins: [`stylelint-prettier`],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
};
