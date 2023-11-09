import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.gspace',
  name: 'OurPlay',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.excean.gspace:id/tv_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/13296144',
    },
  ],
});
