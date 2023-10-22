import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'im.xingzhe',
  name: '行者骑行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'im.xingzhe.activity.LaunchActivity',
      matchLauncher: true,
      rules: '[id="im.xingzhe:id/count_text"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13031282',
    },
  ],
});
