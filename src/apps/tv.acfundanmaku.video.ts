import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.acfundanmaku.video',
  name: 'AcFun',
  groups: [
    {
      key: 2,
      name: '青少年模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          activityIds: 'tv.acfun.core.module.main.MainActivity',
          matches: '[id="tv.acfundanmaku.video:id/btnSimpleDialogOne"]',
          exampleUrls:
            'https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7',
          snapshotUrls: 'https://i.gkd.li/import/13518737',
        },
      ],
    },
  ],
});
