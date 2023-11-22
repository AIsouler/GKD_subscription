import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.buyanchuantong.buyanshufa',
  name: '不厌书法',
  groups: [
    {
      enable: false,
      key: 3,
      name: '功能介绍',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.buyanchuantong.buyanshufa.SplashActivity',
      rules: [
        {
          matches:
            '[id="com.buyanchuantong.buyanshufa:id/next_page_imageview"][text^="点击跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13425296',
        },
      ],
    },
  ],
});
