import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiongji.andriod.card',
  name: '百词斩',
  groups: [
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      activityIds: 'com.baicizhan.main.activity.MainTabActivity',
      rules:
        '[text="反馈"] + ImageView + ImageView[childCount=0][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13415075',
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="抢先体验"] - [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13488652',
    },
  ],
});
