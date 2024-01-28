import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: [
        'https://i.gkd.li/import/13830230',
        'https://i.gkd.li/import/14052232',
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      desc: '点击"我知道了"',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.upupoo.apu.mobile.MainActivity',
          matches: '[desc="青少年模式"] +3 [desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/14052188',
        },
      ],
    },
  ],
});
