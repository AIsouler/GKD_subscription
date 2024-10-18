import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.app.lantt.xs',
  name: '蓝豚豚',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/14899867',
        },
      ],
    },
  ],
});
