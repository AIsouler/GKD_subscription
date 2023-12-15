import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lofter.android',
  name: 'LOFTER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<=10]',
          quickFind: true,
          snapshotUrls: [
            'https://i.gkd.li/import/13189846',
            'https://i.gkd.li/import/13189906',
          ],
        },
        {
          actionMaximumKey: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13635533',
        },
      ],
    },
  ],
});
