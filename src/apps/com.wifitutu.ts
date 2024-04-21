import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 1,
      name: '局部广告-首页-WiFi列表广告',
      activityIds: ['com.wifitutu.ui.main.MainActivity'],
      rules: [
        {
          matches: 'View < [desc^="dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13233916',
        },
        {
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13234048',
        },
      ],
    },
  ],
});
