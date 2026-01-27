import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.syjc.app',
  name: '番喜视频',
  groups: [
    {
      key: 7,
      name: '全屏广告-首页悬浮广告',
      rules: [
        {
          key: 0,
          name: '全屏广告-中号广告',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: 
            '@ImageView[width<25 && height<25] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24892095',
            'https://i.gkd.li/i/24892127',
          ],
        },
        {
          key: 1,
          name: '全屏广告-大号广告',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[id=`android:id/content`] FrameLayout[index=2] > FrameLayout[index=parent.childCount.minus(1)] > ImageView[width<60 && height<60]',
          snapshotUrls: [
            'https://i.gkd.li/i/24892194',
            'https://i.gkd.li/i/24892195',
          ],
        }
      ],
    },
  ],
});