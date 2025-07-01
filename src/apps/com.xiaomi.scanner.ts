import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.scanner',
  name: '小爱视觉',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.ScanActivity',
          matches: '@[text="以后再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/14332513',
        },
      ],
    },
  ],
});
