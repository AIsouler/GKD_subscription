import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
      rules:
        '[id="com.alibaba.android.rimet:id/btn_check_detail"||text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12506211',
    },
  ],
});
