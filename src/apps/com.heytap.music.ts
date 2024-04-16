import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.music',
  name: '音乐',
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
          matches: '@ImageView[clickable=true] + [text="检测到新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/14987173',
        },
      ],
    },
  ],
});
