import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.m.mfood',
  name: 'mFood',
  groups: [
    {
      key: 0,
      name: '開屏廣告',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.m.mfood:id/tvSkip"]',
      snapshotUrls: 'https://i.gkd.li/import/13350776',
    },
    {
      key: 1,
      name: '浮窗廣告',
      quickFind: true,
      activityIds: 'com.zdyl.mfood.ui.home.MainActivity',
      rules: '[id="com.m.mfood:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350787',
    },
  ],
});
