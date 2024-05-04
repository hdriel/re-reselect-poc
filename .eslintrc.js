module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    ignorePatterns: ['dist', '.eslintrc.js'],
    plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
    settings: {
        'import/resolver': {
            jsconfig: {
                config: 'tsconfig.json',
                extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
