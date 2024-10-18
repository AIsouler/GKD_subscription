import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bilibilihd',
  name: '哔哩哔哩HD',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[id="tv.danmaku.bilibilihd:id/count_down"]',
      snapshotUrls: 'https://i.gkd.li/i/13031261',
    },
    {
      key: 1,
      name: '青少年模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text*="青少年模式"] + [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13166639',
    },
  ],
});
