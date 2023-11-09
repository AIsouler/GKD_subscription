import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hiby.music',
  name: '海贝音乐',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13293606',
    },
  ],
});
