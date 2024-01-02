import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 1,
      name: '首页-WiFi列表广告',
      activityIds: ['com.wifitutu.ui.main.MainActivity'],
      rules: [
        {
          matches: 'View < [desc^="dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13233916',
        },
        {
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13234048',
        },
      ],
    },
  ],
});
