import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
          matches:
            '[id="com.alibaba.android.rimet:id/btn_check_detail"||text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12506211',
        },
        {
          key: 1,
          activityIds: 'com.alibaba.android.rimet.biz.SplashAdvertiseActivity',
          matches:
            '[id="com.alibaba.android.rimet:id/splash_advertise_pass_text"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12837220',
        },
      ],
    },
  ],
});
