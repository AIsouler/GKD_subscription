import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.acfundanmaku.video',
  name: 'AcFun',
  groups: [
    {
      key: 2,
      name: '青少年模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[id="tv.acfundanmaku.video:id/btnSimpleDialogOne"]',
          exampleUrls:
            'https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7',
          snapshotUrls: 'https://i.gkd.li/i/13518737',
        },
      ],
    },
  ],
});
