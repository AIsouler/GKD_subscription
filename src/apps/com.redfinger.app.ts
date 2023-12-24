import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13166289',
            'https://i.gkd.li/import/13188631',
            'https://i.gkd.li/import/13166298',
          ],
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13188645',
        },
      ],
    },
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
