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
        '@[id="com.wm.dmall:id/iv_close"] + [id="com.wm.dmall:id/view_float"]',
        '[id="com.wm.dmall:id/close_iV"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13197634',
        'https://gkd-kit.gitee.io/import/13246242', //id误触
      ],
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: {
        matches: [
          '[id="com.wm.dmall:id/update_confirm_btn"]',
          '[id="com.wm.dmall:id/close_btn"]',
        ],
        snapshotUrls: ['https://gkd-kit.gitee.io/import/13234668'],
      },
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: [
        '[id="com.wm.dmall:id/update_confirm_btn"]',
        '[id="com.wm.dmall:id/close_btn"]',
      ],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/13234668'],
    },
  ],
});
