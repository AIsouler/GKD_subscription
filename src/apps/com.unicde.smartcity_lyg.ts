import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.unicde.smartcity_lyg',
  name: '我的连云港',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.unicde.smartcity.features.welcome.WelcomeActivity',
      matchLauncher: true,
      rules: '[id="com.unicde.smartcity_lyg:id/tv_down"][text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13059584',
    },
  ],
});
