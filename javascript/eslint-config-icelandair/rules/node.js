module.exports = {
  'env': {
    'node': true,
  },
  'plugins': [
    'import',
  ],
  'rules': {
    // enforce return after a callback
    'callback-return': 'off',
    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],
    // disallow use of new operator with the require function
    'no-new-require': 'off',
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'off',
    // disallow process.exit()
    'no-process-exit': 'off',
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['warn', { 'commonjs': true }],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json'],
      },
    },
  },
}
