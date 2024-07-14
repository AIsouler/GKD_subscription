import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        '[id="com.redfinger.app:id/btn_update"] + [id="com.redfinger.app:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13761821',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.redfinger.app.activity.MainActivity',
          fastQuery: true,
          matches: '[id="com.redfinger.app:id/rl_screen_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13761825',
        },
      ],
    },
  ],
});
