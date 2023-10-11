import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqsports',
  name: '腾讯体育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.tencent.qqsports.ui.SplashActivity',
      rules:
        '[id="com.tencent.qqsports:id/splash_activity_ad"] >5 [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12845494',
    },
  ],
});
