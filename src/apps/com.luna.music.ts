import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id$="/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12514049',
    },
    {
      key: 2,
      name: 'VIP弹窗',
      desc: '直接关闭所有该样式弹窗',
      matchLauncher: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[id="com.luna.music:id/bullet_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13365087',
            'https://i.gkd.li/import/13365085',
          ],
        },
      ],
    },
  ],
});
