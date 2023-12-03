import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.elenut.gstone',
  name: '集石',
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
          matches: '[id="com.elenut.gstone:id/tv_seconds"]',
          exampleUrls:
            'https://m.gkd.li/47232102/193c811c-88cf-4952-b367-95a3ef9a1d8c',
          snapshotUrls: 'https://i.gkd.li/import/13521239',
        },
      ],
    },
  ],
});
