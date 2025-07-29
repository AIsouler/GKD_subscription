import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xishang.jihua',
  name: '加班',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '@ImageView[childCount=0][width<100 && height<100] < ViewGroup < ViewGroup < ViewGroup < ViewGroup +2 ViewGroup >3 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5a9d8d4c-a638-46d9-ab67-9b3b115b96e1',
          snapshotUrls: 'https://i.gkd.li/i/21480268',
        },
      ],
    },
  ],
});
