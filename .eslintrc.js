module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: `react-app`,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __PATH_PREFIX__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    semi: ['off', 'always'],
    yoda: 'error',
    curly: 'error',
    'no-var': 'error',
    eqeqeq: 'error',
    'eol-last': 'error',
    'comma-style': 'error',
    'indent:': ["error", "tab", { SwitchCase: 1 }],
    'key-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': 'error',
    'prefer-const': 'error',
    'dot-notation': 'error',
    'comma-spacing': 'error',
    'arrow-spacing': 'error',
    'no-extra-semi': 'error',
    'keyword-spacing': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-multi-spaces': 'error',
    'no-unused-labels': 'error',
    'no-useless-return': 'error',
    'func-call-spacing': 'error',
    'one-var': ['error', 'never'],
    'no-trailing-spaces': 'error',
    // quotes: ["error", "single", { "allowTemplateLiterals": true }],
    'operator-assignment': 'error',
    'space-before-blocks': 'error',
    'no-unneeded-ternary': 'error',
    'no-floating-decimal': 'error',
    'prefer-object-spread': 'error',
    'switch-colon-spacing': 'error',
    'no-extra-boolean-cast': 'error',
    'no-multiple-empty-lines': 'error',
    'newline-per-chained-call': 'error',
    'implicit-arrow-linebreak': 'error',
    'computed-property-spacing': 'error',
    'quote-props': ['error', 'as-needed'],
    // 'space-before-function-paren': 'error',
    'no-whitespace-before-property': 'error',
    'operator-linebreak': ['error', 'before'],
    'arrow-body-style': ['error', 'as-needed']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}