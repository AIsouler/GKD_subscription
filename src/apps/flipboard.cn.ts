import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'flipboard.cn',
  name: '红板报',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="flipboard.cn:id/splash_text_layout"]',
          snapshotUrls: 'https://i.gkd.li/import/13694601',
        },
      ],
    },
  ],
});
