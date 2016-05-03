module.exports = {
  extends: [
    'eslint-config-icelandair',
    'eslint-config-icelandair/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
