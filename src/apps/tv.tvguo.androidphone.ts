import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.tvguo.androidphone',
  name: '电视果',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13222744',
    },
  ],
});
