import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14560058',
            'https://i.gkd.li/i/14560214',
          ],
        },
        {
          key: 1,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642486',
            'https://i.gkd.li/i/12846496',
            'https://i.gkd.li/i/12868232',
          ],
        },
        {
          key: 2,
          action: 'clickCenter',
          matches: '[vid="ms_skipView"]',
          snapshotUrls: 'https://i.gkd.li/i/16486847',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '腾讯广告',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches:
            '[id="android:id/content"] >(4,5) @FrameLayout[index=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14472097',
            'https://i.gkd.li/i/14472098',
            'https://i.gkd.li/i/13695488',
            'https://i.gkd.li/i/14766902',
          ],
        },
        {
          key: 2,
          name: '快手广告',
          fastQuery: true,
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
          ],
          matches:
            'ImageView < @ViewGroup[clickable=true] < * <2 * +n * >(1,3) [text="广告"]',
          exampleUrls: 'https://e.gkd.li/1d51a37a-0444-4850-983c-3646b494204a',
          snapshotUrls: [
            'https://i.gkd.li/i/16837806',
            'https://i.gkd.li/i/13259196',
            'https://i.gkd.li/i/13259198',
          ],
        },
        {
          key: 3,
          name: '字节广告',
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'View[clickable=true] < FrameLayout +4 * >2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13259183',
        },
        {
          key: 4,
          name: '美数广告',
          fastQuery: true,
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches: '[id="com.xyhui:id/ms_activity_sdk_interstitial_cacel"]',
          snapshotUrls: 'https://i.gkd.li/i/13458692',
        },
        {
          key: 5,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + @View[visibleToUser=true] > Image',
          snapshotUrls: 'https://i.gkd.li/i/14560546',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-右侧浮窗广告',
      fastQuery: true,
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
      fastQuery: true,
      rules: 'ImageView[id="com.xyhui:id/closeIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12908853',
        'https://i.gkd.li/i/12908865',
      ],
    },
  ],
});
