// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Require or disallow a space before function parenthesis
    'space-before-function-paren': 'off',
    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1}],
    // This rule enforces a consistent indentation style
    'indent': 2,
    'no-new': 'off',
  },

  // https://github.com/vuejs/eslint-plugin-vue/issues/399#issuecomment-368003747
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
        'vue/script-indent': ['error', 2, {
          'baseIndent': 1
        }],
        'vue/html-indent': ['error', 2, {
          'baseIndent': 1
        }],
      }
    }
  ]
}
