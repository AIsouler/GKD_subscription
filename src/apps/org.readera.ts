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
          matches: [
            '[text="ReadEra 书籍阅读器 - 不含广告的免费应用"]',
            '[text="如果您喜欢我们的工作，请支持我们:"]',
            '[desc="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22950138',
        },
      ],
    },
  ],
});
