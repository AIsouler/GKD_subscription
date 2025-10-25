import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cs_credit_bank',
  name: '发现精彩',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mapass.example.activity.MainActivity_',
          matches: '@[vid="iv_close"] + [vid="iv_advert"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0d91563d-057b-47d4-9ce5-8e9a5fc2b9c9',
          snapshotUrls: 'https://i.gkd.li/i/23141403',
        },
      ],
    },
  ],
});
