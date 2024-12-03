import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.diershoubing.erbing',
  name: '二柄',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/13378853',
            'https://i.gkd.li/i/13546165',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13538207',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告',
      fastQuery: true,
      activityIds: '.activity.MainReActivity',
      rules: [
        {
          key: 1,
          matches: '[text="广告"]',
          exampleUrls: 'https://e.gkd.li/921d559f-6535-4d54-9bb2-8bbc82a6f2e1',
          snapshotUrls: 'https://i.gkd.li/i/13868396',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@LinearLayout > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/e6818e93-3fab-4afa-95b9-0ba38ea7f2db',
          snapshotUrls: 'https://i.gkd.li/i/13868401',
        },
      ],
    },
  ],
});
