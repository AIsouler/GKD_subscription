import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.svw.sc.mos',
  name: '上汽大众',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击"跳过广告"',
      matchLauncher: true,
      quickFind: false,
      activityIds: 'com.svw.sc.mos.views.SplashActivity',
      rules: [
        {
          matches: '[id="com.svw.sc.mos:id/launch_jump"][text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12912850',
        },
      ],
    },
  ],
});
