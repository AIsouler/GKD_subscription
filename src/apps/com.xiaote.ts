import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaote',
  name: '小特',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.xiaote:id/ad_close"][text*="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14035706',
        },
      ],
    },
  ],
});
