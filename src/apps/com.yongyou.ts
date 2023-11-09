import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yongyou',
  name: '丰云行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.yongyou.ui.main.WelcomeActivity'],
      rules: '[id="com.yongyou:id/tv_jump"][text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12705337'],
    },
  ],
});
