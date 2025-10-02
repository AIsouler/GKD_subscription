import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.health',
  name: 'OPPO 健康',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击[以后再说]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.health.settings.me.upgrade.UpgradeActivity',
          matches: '@[text="以后再说"] < * +n * > [text="下载与更新"]',
          snapshotUrls: 'https://i.gkd.li/i/22657352',
        },
      ],
    },
  ],
});
