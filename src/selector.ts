import { CommonSelector } from '@gkd-kit/selector';

export const parseSelector = (source: string) => {
  const selector = CommonSelector.Companion.parse(source);
  selector.propertyNames.forEach((name) => {
    if (!allowPropertyNames.has(name)) {
      throw new Error(`Property ${name} is not allowed in selector`);
    }
  });
};

const allowPropertyNames = new Set([
  'id',
  'vid',

  'name',
  'text',
  'text.length',
  'desc',
  'desc.length',

  'clickable',
  'focusable',
  'checkable',
  'checked',
  'editable',
  'longClickable',
  'visibleToUser',

  'left',
  'top',
  'right',
  'bottom',
  'width',
  'height',

  'index',
  'depth',
  'childCount',
]);
