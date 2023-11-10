import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ikang.official',
  name: '爱康约体检查报告',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.ikang.official:id/llAdvertCountdown"]',
          snapshotUrls: 'https://i.gkd.li/import/13197061',
        },
      ],
    },
  ],
});
