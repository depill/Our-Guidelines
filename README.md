# eslint-config-icelandair

[![npm version](https://badge.fury.io/js/eslint-config-icelandair.svg)](http://badge.fury.io/js/eslint-config-icelandair)

This package provides Icelandair's base JS .eslintrc as an extensible shared config. Initial version is shamelessly based on airbnb/base.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-icelandair

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-icelandair eslint eslint-plugin-import`
2. add `"extends": "icelandair"` to your .eslintrc

### eslint-config-icelandair/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-icelandair eslint-plugin-import eslint`
2. add `"extends": "icelandair/legacy"` to your .eslintrc

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
