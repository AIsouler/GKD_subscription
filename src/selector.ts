import SelectorKit from '@gkd-kit/selector';

const { CommonSelector } = SelectorKit.li.songe.selector;

export const parseSelector = (source: string) => {
  return CommonSelector.Companion.parse(source);
};
