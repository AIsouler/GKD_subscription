import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.phonemanager',
  name: 'OPPO手机管家',
  groups: [
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[text="取消"] < [id="com.coloros.phonemanager:id/buttonPanel"] > [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13194979',
        },
      ],
    },
  ],
});
