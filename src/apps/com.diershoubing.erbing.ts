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
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
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
      rules: [
        {
          key: 1,
          matches: '[id="com.diershoubing.erbing:id/mainV"] >n [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/47232102/5498dc61-9f29-42c6-a75b-ac8471e48328',
          snapshotUrls: 'https://i.gkd.li/i/13868396',
        },
        {
          key: 2,
          preKeys: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13868401',
        },
      ],
    },
  ],
});
