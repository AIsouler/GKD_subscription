import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.learn.team.congrong',
  name: '卓聚',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/b390043b-3d13-451e-b8aa-15c2a0157071',
          snapshotUrls: 'https://i.gkd.li/i/14325697',
        },
      ],
    },
  ],
});
