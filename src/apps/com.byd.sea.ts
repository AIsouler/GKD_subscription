import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.byd.sea',
  name: '比亚迪海洋',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text *= "跳过"][text.length <= 10]',
      snapshotUrls: 'https://i.gkd.li/import/13325114',
    },
  ],
});
