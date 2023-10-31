import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.space',
  name: 'vivo 官网',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.vivo.space:id/timer"]',
      snapshotUrls: ['https://i.gkd.li/import/13197585'],
    },
    {
      key: 3,
      name: '活动广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.vivo.space.ui.VivoSpaceTabActivity',
      rules: 'Image[text=""] + TextView[text=""]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13218155',
    },
  ],
});
