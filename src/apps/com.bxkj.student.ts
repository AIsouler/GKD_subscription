import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bxkj.student',
  name: '体适能',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.bxkj.student.splash.SplashActivity',
      rules: '[id="com.bxkj.student:id/tv_time"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12882766',
    },
  ],
});
