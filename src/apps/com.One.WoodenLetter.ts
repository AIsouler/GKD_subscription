import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.One.WoodenLetter',
  name: '一个木函',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text^="新版本"] <2 * +2 * > [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/i/14332536',
    },
  ],
});
