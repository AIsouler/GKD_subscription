import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.klcxkj.zqxy',
  name: '趣智校园',
  groups: [
    {
      key: 1,
      name: '第三方 SDK 广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          ],
          matches: '[id="com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13195649',
            'https://i.gkd.li/import/12781415',
          ],
        },
        {
          key: 1,
          activityIds: 'com.klcxkj.zqxy.ui.main.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12781461',
        },
        {
          key: 2,
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity',
          ],
          matches:
            'ImageView < FrameLayout[childCount=1] - FrameLayout > @FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13071301',
            'https://gkd-kit.gitee.io/import/13274836',
          ],
        },
        {
          key: 3,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12781461',
        },
        {
          key: 4,
          activityIds: 'com.klcxkj.zqxy.ui.splash.SplashActivity',
          matches: '@ViewGroup < ViewGroup +2 ViewGroup > [text="吉欣广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13274838',
        },
      ],
    },
  ],
});
