import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds: 'com.onethingcloud.android.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) View[childCount=2] >2 View[childCount=2 || childCount=3] > ImageView[index=parent.childCount.minus(1)][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12841171',
            'https://i.gkd.li/i/14766665',
            'https://i.gkd.li/i/16438609',
          ],
        },
      ],
    },
  ],
});
