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
          matches: '[text^="跳过"][clickable=false]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12922866',
        },
      ],
    },
  ],
});
