import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.homed',
  name: '住小帮',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.ss.android.homed.SplashActivity',
      rules: '[text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/13574557'],
    },
  ],
});
