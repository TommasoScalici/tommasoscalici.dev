import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Plugin configs are not strictly typed, so we disable unsafe checks for this config file
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    // TypeScript Rules (targeted to TS/JS files)
    ...tseslint.configs.strictTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    })),
    ...tseslint.configs.stylisticTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    })),
    // Astro Rules
    ...eslintPluginAstro.configs['flat/recommended'],

    // Global and Custom Rules
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },

    // Import Sorting
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },

    // React Configuration
    {
        files: ['**/*.{jsx,tsx}'],
        ...reactPlugin.configs.flat.recommended,
        ...reactPlugin.configs.flat['jsx-runtime'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            'react/prop-types': 'off', // Not needed with TypeScript
            '@typescript-eslint/no-explicit-any': 'error',
            // Strict rules enabled!
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // Global Settings
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },

    // Ignore dist and other build artifacts
    {
        ignores: [
            'dist/**',
            '.astro/**',
            'node_modules/**',
            'wrangler.jsonc',
            '.prettierrc.mjs',
            'release.config.mjs',
        ],
    },
    {
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/triple-slash-reference': 'off',
        },
    },
];
