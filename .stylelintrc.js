module.exports = {
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'each',
          'include',
          'extend',
          'mixin',
          'return',
          'content',
        ],
      },
    ],
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['/^get.*$/'],
      },
    ],
  },
}
