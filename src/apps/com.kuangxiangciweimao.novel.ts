import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.kuangxiangciweimao.novel:id/mTasksView"]',
      snapshotUrls: 'https://i.gkd.li/i/13056248',
    },
  ],
});
