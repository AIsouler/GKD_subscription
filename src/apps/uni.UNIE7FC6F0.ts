import { defineAppConfig } from '../types';
export default defineAppConfig({
  id: 'uni.UNIE7FC6F0',
  name: 'MERIT超燃脂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@TextView[id="uni.UNIE7FC6F0:id/tv_seconds"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/e6748e2f-3bdb-4f13-8caf-1ab8b5795f24',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13432983'],
        },
      ],
    },
  ],
});
