import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ichangtou',
  name: '长投学堂',
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
          matches: '[id="com.ichangtou:id/tv_skip"]',
          exampleUrls:
            'https://m.gkd.li/47232102/07e0dd37-6460-4dc9-ad33-18e69ba6f947',
          snapshotUrls: 'https://i.gkd.li/import/13515731',
        },
      ],
    },
  ],
});
