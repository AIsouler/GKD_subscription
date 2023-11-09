import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wondertek.miguaikan',
  name: '咪咕视频爱看版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.wondertek.miguaikan:id/splash_time"]',
      snapshotUrls: 'https://i.gkd.li/import/import/13258889',
    },
  ],
});
