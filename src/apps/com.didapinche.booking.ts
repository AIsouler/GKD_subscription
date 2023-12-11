import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13051862',
        },
        {
          quickFind: true,
          matches: '[id="com.didapinche.booking:id/tv_full_skip"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13051805',
            'https://i.gkd.li/import/13051792',
          ],
        },
      ],
    },
  ],
});
