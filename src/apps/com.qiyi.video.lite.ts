import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video.lite',
  name: '爱奇艺极速版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '@[clickable=true] >2 [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13797162',
    },
  ],
});
