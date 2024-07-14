import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.leo',
  name: '小猿口算',
  groups: [
    {
      key: 1,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/i/13226140',
    },
  ],
});
