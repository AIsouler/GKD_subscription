import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.job.android',
  name: '前程无忧51Job',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.job.android:id/skipBtn"]',
          snapshotUrls: 'https://i.gkd.li/import/13659403',
        },
      ],
    },
  ],
});
