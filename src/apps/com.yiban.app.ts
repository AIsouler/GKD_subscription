import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yiban.app',
  name: '易班',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yiban.app.activity.WelcomeActivity',
      rules: '[text^="跳过"][id="com.yiban.app:id/btn_splash_ad"]',
      snapshotUrls: ['https://i.gkd.li/import/13190891'],
    },
  ],
});
