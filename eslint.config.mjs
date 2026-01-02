import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

// Plugin configs are not strictly typed, so we disable unsafe checks for this config file
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...eslintPluginAstro.configs.recommended,

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
            '@typescript-eslint/no-unsafe-assignment': 'off', // Too noisy for existing codebase
            '@typescript-eslint/no-unsafe-member-access': 'off', // Too noisy for existing codebase
            // We can re-enable these later if the user wants absolute purity, but for now we focus on "any"
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
                projectService: true,
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
