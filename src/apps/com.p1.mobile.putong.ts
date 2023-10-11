import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.p1.mobile.putong',
  name: '探探',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.p1.mobile.putong.account.ui.welcome.SplashAct',
      rules: '@LinearLayout > TextView[text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12866488',
    },
  ],
});
