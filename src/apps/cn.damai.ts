import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.damai.launcher.splash.SplashMainActivity',
      rules: '[id="cn.damai:id/homepage_advert_pb"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12472623',
    },
  ],
});
