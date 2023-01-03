module.exports = {
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        'eslint-plugin-deprecation',
    ],
    rules: {
        'deprecation/deprecation': 'error'
    },
    settings: {
        react: {
            version: 'detect',
        },
    }
};
