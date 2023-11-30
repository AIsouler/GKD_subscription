import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youloft.calendar',
  name: '万年历',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13499542',
    },
    {
      key: 1,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          name: '万年历页面-右侧悬浮广告',
          activityIds: 'com.youloft.calendar.MainActivity',
          quickFind: true,
          matches: '[id="com.youloft.calendar:id/ad_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13348416',
        },
      ],
    },
  ],
});
