import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13830230',
        'https://i.gkd.li/i/14052232',
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
          matches: '[desc="青少年模式"] +3 [desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/14052188',
        },
      ],
    },
  ],
});
