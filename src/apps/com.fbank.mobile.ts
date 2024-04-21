import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fbank.mobile',
  name: '富民银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.fbank.mobile:id/iv_dumiao"]',
          snapshotUrls: 'https://i.gkd.li/i/13797434',
        },
      ],
    },
  ],
});
