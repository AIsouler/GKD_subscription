import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('prettier'),
  {
    plugins: {
      typescriptEslint: typescriptEslint,
    },
    languageOptions: {
      parser: typescriptEslintParser,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-empty': 'off',
      'prefer-const': 'off',
      quotes: ['error', 'single', { allowTemplateLiterals: false }],
    },
    ignores: ['dist/*'],
  },
];
