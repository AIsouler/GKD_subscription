import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.sheep_flutter.ds',
  name: '喵趣漫画',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0] - [text="互动广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6fe6fc4e-ad54-4d53-a202-ed6964e3ba76',
          snapshotUrls: 'https://i.gkd.li/i/21499354',
        },
      ],
    },
  ],
});
