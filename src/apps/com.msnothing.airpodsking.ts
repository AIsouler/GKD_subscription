import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.msnothing.airpodsking',
  name: 'Pods King',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12908449'],
        },
        {
          quickFind: true,
          matches: '[text="跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/13607847'],
        },
      ],
    },
  ],
});
