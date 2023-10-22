import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xxwolo.cc5',
  name: '测测',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.cece.app.MainActivity',
      rules: '[text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12852352',
    },
  ],
});
