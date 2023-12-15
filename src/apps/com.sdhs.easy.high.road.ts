import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sdhs.easy.high.road',
  name: 'e高速',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13670339',
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.sdhs.easy.main.activity.MainActivity',
          matches: [
            '[desc^="logoad"]',
            '[desc^="dislike"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13670340',
        },
      ],
    },
  ],
});
