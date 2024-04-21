import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video.lite',
  name: '爱奇艺极速版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text*="关闭"] <2 LinearLayout',
      snapshotUrls: 'https://i.gkd.li/i/13797162',
    },
  ],
});
