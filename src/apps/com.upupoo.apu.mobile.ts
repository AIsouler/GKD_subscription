import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
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
