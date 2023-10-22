import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cs_credit_bank',
  name: '发现精彩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mapass.example.activity.MainActivity_',
      rules: '[id="com.cs_credit_bank:id/start_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12536487',
    },
  ],
});
