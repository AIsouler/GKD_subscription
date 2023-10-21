import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.kuangxiangciweimao.novel.activity.AdvertisementActivity',
      matchLauncher: true,
      rules: '[id="com.kuangxiangciweimao.novel:id/mTasksView"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13056248',
    },
  ],
});
