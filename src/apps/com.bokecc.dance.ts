import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bokecc.dance',
  name: '糖豆',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击"以后再说"',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.bokecc.dance:id/tv_cancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9156698c-76bb-4921-a39d-96a20c45260b',
          snapshotUrls: 'https://i.gkd.li/import/14071977',
        },
      ],
    },
  ],
});
