import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lofter.android',
  name: 'LOFTER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.lofter.android.global.splash.HomeActivity',
      rules: '[text^="跳过"][text.length<=10]',
      quickFind: true,
      snapshotUrls: [
        'https://i.gkd.li/import/13189846',
        'https://i.gkd.li/import/13189906',
      ],
    },
  ],
});
