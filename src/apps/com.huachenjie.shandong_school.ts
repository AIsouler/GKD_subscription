import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huachenjie.shandong_school',
  name: '闪动校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.huachenjie.shandong_school.splash.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.huachenjie.shandong_school:id/flAd"] >n [text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12922866',
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
