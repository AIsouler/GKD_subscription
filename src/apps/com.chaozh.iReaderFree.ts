import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReaderFree',
  name: '掌阅',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="dialog_public_top_bar_title_close"]',
      snapshotUrls: 'https://i.gkd.li/i/16549332',
    },
  ],
});
