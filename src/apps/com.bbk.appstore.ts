import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 1,
      name: '通知提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.bbk.appstore:id/upgrade_necessary_btn_high_new"]',
          snapshotUrls: 'https://i.gkd.li/i/13198101',
        },
        {
          actionMaximumKey: 0,
          matches: ['[text*="通知"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13198234',
            'https://i.gkd.li/i/13246971',
            'https://i.gkd.li/i/13884356',
          ],
        },
      ],
    },
  ],
});
