import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.acfundanmaku.video',
  name: 'AcFun',
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
          matches: '[id="tv.acfundanmaku.video:id/splashSkipView"]',
          exampleUrls:
            'https://m.gkd.li/6328439/1a9541c5-fba7-4ecc-a276-f19a5641df1f',
          snapshotUrls: 'https://i.gkd.li/import/13348326',
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式弹窗',
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
