import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oneshareclap.malaysian',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="关闭广告"]',
      snapshotUrls: 'https://i.gkd.li/i/14275367',
    },
  ],
});
