import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rednet.moment',
  name: '时刻新闻',
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
          matches: '[id="com.rednet.moment:id/skip_descr"]',
          exampleUrls:
            'https://m.gkd.li/6328439/0fa0dae9-ef89-42ea-be0d-e810741744cc',
          snapshotUrls: 'https://i.gkd.li/import/13348244',
        },
      ],
    },
  ],
});
