import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lphtsccft.zlqqt2',
  name: '涨乐全球通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.lphtsccft.zhangle.startup.SplashScreenActivity',
      rules: '[id="com.lphtsccft.zlqqt2:id/countdown_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12774860',
    },
  ],
});
