import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.excean.gspace',
  name: 'OurPlay',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      forcedTime: 10000,
      rules: [
        {
          key: 0,
          activityIds: 'com.excelliance.kxqp.splash.SplashActivity',
          matches:
            'FrameLayout[childCount=2] > LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13302890',
        },
        {
          key: 1,
          activityIds: [
            'com.excelliance.kxqp.splash.SplashActivity',
            'com.excelliance.kxqp.gs.main.MainActivity',
          ],
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13447122',
            'https://i.gkd.li/i/14862348',
          ],
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.excelliance.kxqp.gs.main.MainActivity',
          matches: '[vid="close_render_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/15284762',
        },
      ],
    },
  ],
});
