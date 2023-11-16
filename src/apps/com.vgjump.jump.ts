import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vgjump.jump',
  name: 'Jump',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: 'TextView[text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13259108',
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13372486',
        },
      ],
    },
  ],
});
