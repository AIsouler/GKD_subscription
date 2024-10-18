import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.cty.hbzw',
  name: '鄂汇办',
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
          position: {
            left: 'width * 0.8676',
            top: 'width * -1.9094',
          },
          fastQuery: true,
          matches: '[vid="iv_ad_image"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9cf76d31-3b11-45dc-be9c-c2e9cbf26c23',
          snapshotUrls: 'https://i.gkd.li/i/14519367',
        },
      ],
    },
  ],
});
