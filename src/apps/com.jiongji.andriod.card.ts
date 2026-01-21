import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiongji.andriod.card',
  name: '百词斩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds:
            'com.baicizhan.client.business.webview.ui.BczWebActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8612bbae-7a50-4730-8071-1c47e35c27ca',
          snapshotUrls: 'https://i.gkd.li/i/21705324',
          excludeSnapshotUrls: 'https://i.gkd.li/i/21705338',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baicizhan.main.activity.MainTabActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13415075',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baicizhan.main.activity.MainTabActivity',
          matches: '[text="抢先体验"] - [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13488652',
        },
      ],
    },
  ],
});
