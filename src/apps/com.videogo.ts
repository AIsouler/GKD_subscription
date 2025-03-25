import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
    {
      key: 1,
      name: '分段广告-主页广告',
      fastQuery: true,
      activityIds: 'com.videogo.main.MainTabActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.videogo:id/ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13255684',
        },
        {
          preKeys: [0],
          matches: '[id="com.videogo:id/ad_closead_nointerest"]',
          snapshotUrls: 'https://i.gkd.li/i/13255697',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-首页广告',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: '.main.MainTabActivity',
          matches: 'TextView[text="了解并试用服务"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15338834',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-新机权益',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: '.main.MainTabActivity',
          matches: 'TextView[text="新机礼包专享"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18843418',
        },
      ],
    },
  ],
});
