import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.com.livelab.MainActivity',
          matches:
            '@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13258873',
        },
      ],
    },
  ],
});
