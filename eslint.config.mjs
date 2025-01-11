import { FlatCompat } from '@eslint/eslintrc';
import { glob } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-foreach': 'on',
    },
    globals: {
      React: 'readonly',
    },
  },
];

export default eslintConfig;
