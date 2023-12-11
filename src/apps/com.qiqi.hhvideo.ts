import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiqi.hhvideo',
  name: '电影猎手',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      actionMaximum: 1,
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.qiqi.hhvideo:id/skipad"]',
          exampleUrls:
            'https://m.gkd.li/48015717/236526b6-691f-4023-a3ac-64b4409ee759',
          snapshotUrls: 'https://i.gkd.li/import/13633385',
        },
      ],
    },
  ],
});
