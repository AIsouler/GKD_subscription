import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lofter.android',
  name: 'LOFTER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="layout_load_bg"] >n View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14204158',
    },
  ],
});
