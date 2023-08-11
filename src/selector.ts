import SelectorKit from '@gkd-kit/selector';

export const parseSelector = (source: string) => {
  return SelectorKit.CommonSelector.Companion.parse(source);
};
