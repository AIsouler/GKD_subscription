import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.danmaku.bilibilihd',
  name: '哔哩哔哩HD',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="tv.danmaku.bilibilihd:id/count_down"]',
      snapshotUrls: 'https://i.gkd.li/import/13031261',
    },
    {
      key: 1,
      name: '青少年模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="青少年模式"] + [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13166639',
    },
  ],
});
