import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.handsgo.jiakao.android',
  name: '驾考宝典',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/14812686',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16283385',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches:
            '@[id="com.handsgo.jiakao.android:id/ivDelete"] + [id="com.handsgo.jiakao.android:id/ivRemote"]',
          snapshotUrls: 'https://i.gkd.li/i/13475994',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@View[clickable=true][childCount=0] < FrameLayout[desc^="webview-close"] +4 FrameLayout >3 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13476039',
        },
        {
          key: 1,
          name: '课程广告',
          fastQuery: true,
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches:
            '[id="com.handsgo.jiakao.android:id/adsdk__ids_cta_layout"] - * > [id="com.handsgo.jiakao.android:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13523033',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches: '[text="开启专属学习资料推送"] + [vid="closeIv"]',
          exampleUrls: 'https://e.gkd.li/9a9aad9b-052b-4e00-9926-d4a213f96372',
          snapshotUrls: 'https://i.gkd.li/i/17001986',
        },
      ],
    },
  ],
});
