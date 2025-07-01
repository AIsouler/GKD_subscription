import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.le123.ysdq',
  name: '影视大全',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.elinkway.infinitemovies.ui.activity.NewMainActivity',
          matches: '[id="com.le123.ysdq:id/ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13635244',
        },
      ],
    },
  ],
});
