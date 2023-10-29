import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wm.dmall',
  name: '多点',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.wm.dmall:id/splashSkipTextView"]',
      snapshotUrls: ['https://i.gkd.li/import/13197630'],
    },
    {
      key: 1,
      name: '首页-弹窗广告',
      quickFind: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: '[id="com.wm.dmall:id/advert_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13197627'],
    },
    {
      key: 2,
      name: '首页-浮窗广告',
      quickFind: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: [
        '[id="com.wm.dmall:id/iv_close"]',
        '[id="com.wm.dmall:id/close_iV"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/13197634'],
    },
  ],
});
