import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.poketrade',
  name: 'PokeHub',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@[desc="Cancel"][visibleToUser=true] + [desc="Update"]',
          exampleUrls: 'https://e.gkd.li/b0a0c338-16b1-4892-9cd6-92b4f485fda8',
          snapshotUrls: 'https://i.gkd.li/i/19624988',
        },
      ],
    },
  ],
});
