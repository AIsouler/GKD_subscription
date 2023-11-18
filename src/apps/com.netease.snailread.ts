import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.snailread',
  name: '网易蜗牛读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13379457',
    },
  ],
});
