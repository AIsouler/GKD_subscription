import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiqi.hhvideo',
  name: '电影猎手',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text="开启青少年模式"] + [text="我已知晓"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c50c5c8f-5fec-437e-908c-abc7b2cedee8',
          snapshotUrls: 'https://i.gkd.li/import/14343546',
        },
      ],
    },
  ],
});
