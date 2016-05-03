module.exports = {
  'rules': {
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',
    // disallow deletion of variables
    'no-delete-var': 'error',
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',
    // disallow labels that share a name with a variable
    'no-label-var': 'off',
    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',
    // disallow use of undefined when initializing variables
    'no-undef-init': 'off',
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',
    // disallow use of undefined variable
    'no-undefined': 'off',
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', { 'vars': 'local', 'args': 'after-used' }],
    // disallow use of variables before they are defined
    'no-use-before-define': 'error',
  },
};
