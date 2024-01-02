import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[id="com.redfinger.app:id/btn_update"] + [id="com.redfinger.app:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13761821',
    },
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.redfinger.app.activity.MainActivity',
          quickFind: true,
          matches: '[id="com.redfinger.app:id/rl_screen_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13761825',
        },
      ],
    },
  ],
});
