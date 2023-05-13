module.exports = {
  root: true,
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      // Script parser for `<script>`
      js: '@typescript-eslint/parser',

      // Script parser for `<script lang="ts">`
      ts: '@typescript-eslint/parser',

      // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      // and vue interpolations (e.g. `{{variable}}`).
      // If not specified, the parser determined by `<script lang ="...">` is used.
      '<template>': 'espree',
    },
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 'vue/no-parsing-error':'off'
      },
    },
    {
      files: ['*.cjs'],
      rules: {
      },
    },
  ],
};
