import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.boc.bocsoft.mobile.bocmobile.buss.system.splash.SplashActivity',
      rules: '[id="com.chinamworld.bocmbci:id/tv_timer"][text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12727106',
    },
  ],
});
