import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12992451',
        },
      ],
    },
    {
      key: 1,
      name: '首页-WiFi列表广告',
      activityIds: ['com.wifitutu.ui.main.MainActivity'],
      rules: [
        {
          matches: 'View < [desc^="dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/import/13233916',
        },
        {
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13234048',
        },
      ],
    },
  ],
});
