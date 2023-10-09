import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.zzw.october.LaunchActivity'],
      rules: [
        {
          key: 1,
          desc: '方形按钮-开屏广告',
          quickFind: true,
          matches: '[id="com.zzw.october:id/skip_parent_view"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12842667',
        },
        {
          key: 2,
          desc: '圆形按钮-开屏广告',
          quickFind: true,
          matches: '@ImageView + ViewGroup > TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12842724',
        },
      ],
    },
    {
      key: 2,
      name: '主页广告',
      activityIds: ['com.zzw.october.MainActivity'],
      rules: [
        {
          key: 1,
          quickFind: true,
          matches: '@ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12842675',
        },
      ],
    },
  ],
});
