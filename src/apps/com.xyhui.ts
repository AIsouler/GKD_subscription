import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  deprecatedKeys: [4],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '开屏广告-1',
          snapshotUrls: [
            'https://i.gkd.li/import/12642486',
            'https://i.gkd.li/import/12846496',
            'https://i.gkd.li/import/12868232',
          ],
          matches: '[text^="跳过"][text.length<=10]',
        },
        {
          key: 2,
          name: '开屏广告-2',
          matches: '[id="com.xyhui:id/ms_skipView"]',
          snapshotUrls: ['https://i.gkd.li/import/13197417'],
        },
        {
          key: 3,
          name: '开屏广告-3',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/13458588'],
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      matchLauncher: true,
      rules: [
        {
          key: 1,
          name: '腾讯广告-1',
          activityIds: 'com.xyhui.start.PUMainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12643276',
            'https://i.gkd.li/import/12868503',
            'https://i.gkd.li/import/12646420',
            'https://i.gkd.li/import/13259194',
          ],
        },
        {
          key: 2,
          name: '腾讯广告-2',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches:
            'ImageView - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642482',
            'https://i.gkd.li/import/12646519',
            'https://i.gkd.li/import/12868369',
            'https://i.gkd.li/import/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
          ],
        },
        {
          key: 3,
          name: '腾讯广告-3',
          activityIds: 'com.xyhui.start.PUMainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/12793180',
        },
        {
          key: 4,
          name: '腾讯广告-4',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
          ],
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12646347',
            'https://i.gkd.li/import/12793157',
            'https://i.gkd.li/import/12793177',
            'https://i.gkd.li/import/12868157', // com.xyhui.start.LoadingActivity
            'https://i.gkd.li/import/13348807', // com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 5,
          name: '快手广告',
          activityIds: 'com.xyhui.start.LoadingActivity',
          matches:
            '[text="广告"] <n * < * < ViewGroup - ViewGroup >n @ViewGroup > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13259196',
            'https://i.gkd.li/import/13259198',
          ],
        },
        {
          key: 6,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[desc^="logo-union"] > [desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13259183',
        },
        {
          key: 7,
          name: '美数广告',
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches: ['[id="com.xyhui:id/ms_activity_sdk_interstitial_cacel"]'],
          snapshotUrls: 'https://i.gkd.li/import/13458692',
        },
      ],
    },
    {
      key: 2,
      name: '首页-右侧浮窗广告',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/deleteIv"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12846543',
        'https://i.gkd.li/import/12868119',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '升级提示',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/closeIv"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12908853',
        'https://i.gkd.li/import/12908865',
      ],
    },
  ],
});
