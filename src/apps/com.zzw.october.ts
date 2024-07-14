import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      activityIds: ['com.zzw.october.MainActivity'],
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '[id="com.zzw.october:id/interact_ad_root"] >n ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12842675',
            'https://i.gkd.li/i/12869369',
          ],
        },
      ],
    },
  ],
});
