import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.saicmotor.tocapp',
  name: '上汽荣威',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.saicmotor.common.activity.WelcomeActivity',
      rules: '[id="com.saicmotor.tocapp:id/ll_down_time_layout"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12839899',
    },
  ],
});
