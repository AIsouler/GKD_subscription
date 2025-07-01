import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huaxiaozhu.rider',
  name: '花小猪打车',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击"稍后更新"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.huaxiaozhu.sdk.app.MainActivity',
          matches: '[text="稍后更新"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7b5e81bf-6c51-4222-b832-ba4176be2a4b',
          snapshotUrls: 'https://i.gkd.li/i/14233480',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huaxiaozhu.sdk.app.MainActivity',
          matches: '[vid="popClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1555a2be-92cb-4360-b50f-019f30955a22',
          snapshotUrls: 'https://i.gkd.li/i/14233488',
        },
      ],
    },
  ],
});
