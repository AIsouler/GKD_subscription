import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.steampy.app',
  name: 'SteamPY',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.steampy.app.activity.common.MainActivity',
      rules:
        '@[id="com.steampy.app:id/imgClose"] - RelativeLayout [id="com.steampy.app:id/tv_update"]',
      snapshotUrls: 'https://i.gkd.li/import/13695519',
    },
  ],
});
