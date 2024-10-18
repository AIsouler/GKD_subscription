import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jihuanshe',
  name: '集换社',
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
            'https://m.gkd.li/57941037/44193959-0c19-44ff-9549-5e69d2d69013',
          snapshotUrls: 'https://i.gkd.li/i/14303879',
        },
      ],
    },
  ],
});
