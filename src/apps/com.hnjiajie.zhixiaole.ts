import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnjiajie.zhixiaole',
  name: '智校乐',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tev_countdown"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0b7ec3a5-d601-489a-a50c-32c876f38edf',
          snapshotUrls: 'https://i.gkd.li/i/20745490',
        },
      ],
    },
  ],
});
