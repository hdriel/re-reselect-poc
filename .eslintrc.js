module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true }
    },
    env: {
        browser: true,
        es2020: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
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
