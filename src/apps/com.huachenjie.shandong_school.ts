import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huachenjie.shandong_school',
  name: '闪动校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            '[id="com.huachenjie.shandong_school:id/flAd"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12922866',
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13031192',
        },
      ],
    },
  ],
});
