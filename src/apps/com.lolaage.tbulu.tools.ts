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
          fastQuery: true,
          forcedTime: 10000,
          activityIds: [
            'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
            'com.lolaage.tbulu.tools.ui.activity.main.MainActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
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
