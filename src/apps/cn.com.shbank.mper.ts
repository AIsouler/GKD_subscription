import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.shbank.mper',
  name: '上海银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yitong.mobile.biz.launcher.app.splash.Splashactivity',
      rules: '[id="cn.com.shbank.mper:id/splash_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740247',
    },
  ],
});
