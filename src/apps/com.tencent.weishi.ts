import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weishi',
  name: '微视',
  groups: [
    {
      key: 3,
      name: '青少年模式',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="青少年保护功能提示"] +3 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13448882',
    },
  ],
});
