import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.topgether.sixfoot',
  name: '六只脚',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.topgether.sixfootPro.biz.splash.SplashActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.topgether.sixfoot:id/mAdsContainer"] >n [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12882503',
    },
  ],
});
