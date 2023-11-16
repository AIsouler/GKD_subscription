import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.growing.topwidgets',
  name: '万能小组件 Top Widgets',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '开屏广告-1',
          quickFind: true,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13334835',
        },
        {
          key: 2,
          name: '开屏广告-2',
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13363115',
        },
      ],
    },
  ],
});
