import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.showstartfans.activity.activitys.welcome.AdvertActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.showstartfans.activity:id/txt_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/12894279',
    },
  ],
});
