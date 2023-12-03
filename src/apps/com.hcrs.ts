import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hcrs',
  name: '华彩人生',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.hcrs:id/ll_skip_splash"]',
          exampleUrls:
            'https://m.gkd.li/47232102/23ef9096-1ba8-4a68-8105-0f73c7158239',
          snapshotUrls: 'https://i.gkd.li/import/13515798',
        },
      ],
    },
  ],
});
