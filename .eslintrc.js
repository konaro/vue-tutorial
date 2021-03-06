module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': process.env.NODE_ENV === 'production' ? ['error', 'windows'] : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? ['error', 'never'] : 'off',
    'import/extensions': process.env.NODE_ENV === 'production' ? ['error', 'never'] : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
