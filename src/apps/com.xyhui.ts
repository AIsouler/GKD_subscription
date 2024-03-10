import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  deprecatedKeys: [4],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '腾讯广告-1',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches:
            '[id="android:id/content"] >(4,5) FrameLayout[index=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14472097',
            'https://i.gkd.li/i/14472098',
            'https://i.gkd.li/i/12646541',
            'https://i.gkd.li/i/13695488',
          ],
        },
        {
          key: 2,
          name: '快手广告',
          quickFind: true,
          activityIds: 'com.xyhui.start.LoadingActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < * <2 * + * >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259196',
            'https://i.gkd.li/i/13259198',
          ],
        },
        {
          key: 3,
          name: '字节广告',
          quickFind: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'View[clickable=true] < FrameLayout +4 * >2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13259183',
        },
        {
          key: 4,
          name: '美数广告',
          quickFind: true,
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches: '[id="com.xyhui:id/ms_activity_sdk_interstitial_cacel"]',
          snapshotUrls: 'https://i.gkd.li/i/13458692',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-右侧浮窗广告',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/deleteIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12846543',
        'https://i.gkd.li/i/12868119',
      ],
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'ImageView[id="com.xyhui:id/closeIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12908853',
        'https://i.gkd.li/i/12908865',
      ],
    },
  ],
});
