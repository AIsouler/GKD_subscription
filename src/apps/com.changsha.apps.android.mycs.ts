import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.changsha.apps.android.mycs',
  name: '我的长沙',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.wondersgroup.eshimin.login.activity.WelcomeActivity'],
      rules: [
        {
          matches: '[id="com.changsha.apps.android.mycs:id/tv_countdown"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12926529',
        },
      ],
    },
  ],
});
