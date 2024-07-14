import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zidongdianji',
  name: '自动点击器',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      activityIds: 'com.autoclicker.clicker.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            'Image < @View[visibleToUser=true] + View > View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14782886',
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14783475',
        },
      ],
    },
  ],
});
