import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aiwu.market',
  name: '爱吾游戏宝盒',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.aiwu.market:id/tv_red_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13295919',
        },
      ],
    },
  ],
});
