import type { UserConfig } from '@commitlint/types';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
  },
} as UserConfig;
