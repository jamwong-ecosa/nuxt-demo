module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/html-self-closing': ['error'],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
}
