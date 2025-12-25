import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.readera',
  name: 'ReadEra',
  groups: [
    {
      key: 1,
      name: '评价提示-分享提示',
      desc: '点击右上角的x',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          action: 'back',
          matches: '[text*="通过社交网络分享这款应用"]',
          snapshotUrls: 'https://i.gkd.li/i/22950138',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="关闭"][clickable=true] < * +n * >4 [text^="高级版"]',
          snapshotUrls: 'https://i.gkd.li/i/24335645',
        },
      ],
    },
  ],
});
