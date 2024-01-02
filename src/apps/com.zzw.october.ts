import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 2,
      name: '主页广告',
      activityIds: ['com.zzw.october.MainActivity'],
      rules: [
        {
          key: 1,
          quickFind: true,
          matches:
            '[id="com.zzw.october:id/interact_ad_root"] >n ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12842675',
            'https://i.gkd.li/import/12869369',
          ],
        },
      ],
    },
  ],
});
