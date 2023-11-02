import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamobile.hycloudphone',
  name: '移动云手机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.chinamobile.hycloudphone:id/tvSkipAd"][text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13227571',
    },
  ],
});
