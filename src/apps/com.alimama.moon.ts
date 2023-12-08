import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alimama.moon',
  name: '淘宝联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=5]',
      snapshotUrls: 'https://i.gkd.li/import/13611291',
    },
  ],
});
