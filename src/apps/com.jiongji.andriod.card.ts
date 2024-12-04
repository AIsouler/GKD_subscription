import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiongji.andriod.card',
  name: '百词斩',
  groups: [
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
