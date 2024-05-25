import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/i/15443189',
        },
        {
          key: 1,
          activityIds: 'com.banshenghuo.mobile.ofdm.MainActivity',
          matches:
            '[id="android:id/content"] FrameLayout[index=1][childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15444005',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -n @View[index=0] > Image',
          snapshotUrls: 'https://i.gkd.li/i/15444017',
        },
      ],
    },
  ],
});
