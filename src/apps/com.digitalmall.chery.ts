import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.digitalmall.chery',
  name: '奇瑞汽车',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc$="跳过"][desc.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13392254',
    },
  ],
});
