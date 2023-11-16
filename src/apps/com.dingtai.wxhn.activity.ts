import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dingtai.wxhn.activity',
  name: '新湖南',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"]',
          exampleUrls:
            'https://m.gkd.li/6328439/ae26cfeb-c977-416a-8ac3-6f5cc867b3ae',
          snapshotUrls: 'https://i.gkd.li/import/13374520',
        },
      ],
    },
  ],
});
