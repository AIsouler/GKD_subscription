import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bjsk.intelligent',
  name: `WiFi智能钥匙`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cssq.wifi.ui.splash.SplashActivity',
      rules: [
        '[text^=`跳过`]',
        '[id=`com.byted.pangle:id/tt_splash_skip_btn`]',
      ],
    },
    {
      key: 1,
      name: '内部启动广告',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        'Image < @View +4 TextView[text=`反馈`] + View TextView[text=`广告`]',
      ],
    },
  ],
});
