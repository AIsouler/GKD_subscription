import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.youxyouy',
  name: '有鱼生活',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ddeb0c34-6a3d-407d-b600-96d21dd1f77b',
          snapshotUrls: [
            'https://i.gkd.li/i/20637763',
            'https://i.gkd.li/i/20637764',
          ],
        },
      ],
    },
  ],
});
