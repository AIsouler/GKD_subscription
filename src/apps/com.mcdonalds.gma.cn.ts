import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mcdonalds.gma.cn.activity.LaunchActivity',
      rules: '[id="com.mcdonalds.gma.cn:id/tv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740193',
    },
  ],
});
