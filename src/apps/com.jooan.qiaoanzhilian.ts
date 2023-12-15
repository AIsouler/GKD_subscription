import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jooan.qiaoanzhilian',
  name: '乔安智联',
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
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13197473',
            'https://i.gkd.li/import/13223790',
          ],
        },
        {
          actionMaximumKey: 0,
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13636103',
        },
      ],
    },
  ],
});
