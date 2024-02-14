import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.heytap.market:id/tv_titile"][text="发现软件商店新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13455965',
        },
      ],
    },
  ],
});
