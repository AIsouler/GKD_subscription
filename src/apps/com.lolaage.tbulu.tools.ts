import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12882550',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          forcedTime: 10000,
          activityIds: [
            'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
            'com.lolaage.tbulu.tools.ui.activity.main.MainActivity',
          ],
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13627861',
            'https://i.gkd.li/i/13650732',
            'https://i.gkd.li/i/14866147',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.lolaage.tbulu.tools.ui.activity.main.MainActivity',
          matches: '[vid="ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/14952807',
        },
        {
          key: 2,
          forcedTime: 10000,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -4 View[childCount=1] > Image[childCount=0][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0ed488e1-f0d8-4c5f-a507-af9c2cedd2a1',
          snapshotUrls: 'https://i.gkd.li/i/16812345',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="发送通知"] + * >3 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/14952803',
        },
      ],
    },
  ],
});
