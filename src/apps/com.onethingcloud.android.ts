import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.onethingcloud.android.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] <(2,3) View < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14766665',
            'https://i.gkd.li/i/16438609',
          ],
        },
      ],
    },
  ],
});
