import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianxinai.mobile',
  name: '点心云',
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
          matches: '[text$="s"][text.length=2]',
          snapshotUrls: 'https://i.gkd.li/i/16115075',
        },
      ],
    },
  ],
});
