import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo360.antilostwatch',
  name: '360儿童卫士',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      actionMaximum: 1,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13538012',
        'https://i.gkd.li/import/13538800',
      ],
    },
  ],
});
