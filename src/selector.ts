import { CommonSelector } from '@gkd-kit/selector';

export const parseSelector = (source: string) => {
  return CommonSelector.Companion.parse(source);
};
