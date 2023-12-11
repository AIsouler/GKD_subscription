import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gxaisen.feiyu',
  name: '飞鱼短剧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@ViewGroup > [text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13628102',
    },
  ],
});
