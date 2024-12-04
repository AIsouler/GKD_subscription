import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.headset',
  name: '欢律',
  groups: [
    {
      key: 0,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.component.about.FindAppUpgradeActivity',
          matches: '[vid="tv_app_upgrade_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/14971296',
        },
      ],
    },
  ],
});
