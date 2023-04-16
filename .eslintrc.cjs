/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    ignorePatterns: ['**/*.cs', '**/*.config.ts'],
    rules: {
        'vue/block-lang': [
            'error',
            {
                script: {
                    lang: 'ts',
                },
            },
        ],
        'vue/sort-keys': ['error'],
        'vue/no-useless-mustaches': ['error'],
        'vue/no-useless-v-bind': ['error'],
        'vue/padding-line-between-blocks': ['error'],
        'vue/prefer-template': ['error'],
    },
};
