import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flomo.app',
  name: 'flomo浮墨笔记',
  groups: [
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: [
            '[text="觉得 flomo 怎么样？"]',
            '[text="暂不提醒"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23935802',
        },
      ],
    },
  ],
});
