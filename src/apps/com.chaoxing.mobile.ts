import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.chaoxing.mobile.activity.SplashActivity',
      rules: '[id="com.chaoxing.mobile:id/jump_view"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708472',
    },
  ],
});
