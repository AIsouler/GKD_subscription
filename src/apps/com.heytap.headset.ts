import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.headset',
  name: '欢律',
  groups: [
    {
      key: 0,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[vid="tv_app_upgrade_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/14971296',
    },
  ],
});
