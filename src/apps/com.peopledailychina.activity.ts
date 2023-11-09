import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.peopledailychina.activity',
  name: '人民日报',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.peopledailychina.activity.activity.WelcomeActivity',
      rules: '[id="com.peopledailychina.activity:id/act_welcome_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12749658',
    },
  ],
});
