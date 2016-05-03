# eslint-config-icelandair-react

[![npm version](https://badge.fury.io/js/eslint-config-icelandair-react.svg)](http://badge.fury.io/js/eslint-config-icelandair-react)

This package provides Icelandair's .eslintrc as an extensible shared config. Initial version is shamelessly based on airbnb.

## Usage

We export one ESLint configuration for your usage.

### eslint-config-icelandair-react

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint-config-icelandair-react eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`
2. add `"extends": ["icelandair-react"]` to your .eslintrc


See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
