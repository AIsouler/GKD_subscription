import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.steampy.app',
  name: 'SteamPY',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.steampy.app:id/imgClose"] - RelativeLayout [id="com.steampy.app:id/tv_update"]',
      snapshotUrls: 'https://i.gkd.li/i/13695519',
    },
  ],
});
