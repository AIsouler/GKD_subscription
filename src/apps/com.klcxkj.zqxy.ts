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
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[id="com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/import/12781415',
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
          activityIds: 'com.klcxkj.zqxy.ui.main.MainActivity',
          matches:
            'ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13071301',
        },
        {
          key: 3,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12781461',
        },
      ],
    },
  ],
});
