import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.douban.frodo.activity.SplashActivity',
        'com.douban.frodo.splash.SplashActivityHot',
      ],
      rules: '[id="com.douban.frodo:id/skip"||text^="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12505151',
        'https://gkd-kit.gitee.io/import/12505152',
        'https://gkd-kit.gitee.io/import/12506164',
      ],
    },
  ],
});
