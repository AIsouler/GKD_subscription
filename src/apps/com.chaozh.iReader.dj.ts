import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-小说内下方悬浮广告',
      fastQuery: true,
      actionDelay: 300,
      rules: [
        {
          matches: '@ImageView[id="com.zhangyue.module.ad:id/ad_close_2"][width=45 && height=24]',
          snapshotUrls: [
            'https://i.gkd.li/i/24879639',
            'https://i.gkd.li/i/24879692',
            'https://i.gkd.li/i/24879766',
          ],
        },
      ],
    },
  ],
});
