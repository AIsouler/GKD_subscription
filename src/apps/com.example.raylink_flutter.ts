import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.raylink_flutter',
  name: 'RayLink',
  groups: [
    {
      key: 1,
      name: '版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.example.raylink_flutter.MainActivity',
      rules: '[desc="立即升级"] + [desc="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13659530',
    },
  ],
});
