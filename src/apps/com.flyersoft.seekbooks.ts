import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flyersoft.seekbooks',
  name: '搜书大师',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[text^="跳过"][text.length<=3]',
          snapshotUrls: 'https://i.gkd.li/i/12857275',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/13797352',
        },
      ],
    },
  ],
});
