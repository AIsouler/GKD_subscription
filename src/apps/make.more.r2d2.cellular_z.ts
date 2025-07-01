import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MonitorActivity',
          matches: ['[text="发现新版本"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13608563',
        },
      ],
    },
  ],
});
