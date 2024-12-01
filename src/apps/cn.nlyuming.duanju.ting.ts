import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.nlyuming.duanju.ting',
  name: '星影视频',
  groups: [
    {
      key: 1,
      name: '其他-[您还未登录]弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.nlyuming.duanju.ting.MainActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=3] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3041769f-b644-460b-b0de-9c2a84518849',
          snapshotUrls: 'https://i.gkd.li/i/14321891',
        },
      ],
    },
  ],
});
