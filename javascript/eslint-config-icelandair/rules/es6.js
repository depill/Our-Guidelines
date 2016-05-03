module.exports = {
  'env': {
    'es6': true,
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'generators': false,
      'objectLiteralDuplicateProperties': false,
    },
  },
  'plugins': [
    'import',
  ],
  'rules': {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': 'off',
    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    // require trailing commas in multiline object literals
    'comma-dangle': ['error', 'always-multiline'],
    // verify super() callings in constructors
    'constructor-super': 'off',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 'off',
    // disallow modifying variables of class declarations
    'no-class-assign': 'off',
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      'allowParens': true,
    }],
    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',
    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',
    // disallow specific globals
    'no-restricted-globals': 'off',
    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'off',
    // require let or const instead of var
    'no-var': 'error',
    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',
    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',
    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true,
    }],
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 'error',
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'off',
    // suggest using Reflect methods where applicable
    'prefer-reflect': 'off',
    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',
    // disallow generator functions that do not have yield
    'require-yield': 'off',
    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',
    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',
    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 'off',
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // TODO: enable
    'import/extensions': ['off', 'never'],
    // ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'off',
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // TODO: enable
    'import/no-extraneous-dependencies': ['off', { 'devDependencies': false }],
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['warn', { 'commonjs': true }],
    // do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    // TODO: enable
    'import/no-named-as-default': 'off',
    // disallow require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',
    // disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    // TODO: enable
    'import/no-amd': 'off',
    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    // TODO: enable?
    'import/imports-first': ['off', 'absolute-first'],
    // disallow duplicate imports
    // TODO: enable
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'off',
    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',
    // disallow namespace imports
    // TODO: enable?
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'off',
    // warn on accessing default export property names that are also named exports
    // TODO: enable?
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',
    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',
    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // TODO: enable?
    'import/order': ['off', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json'],
      },
    },
  },
}
