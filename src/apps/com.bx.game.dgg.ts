import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bx.game.dgg',
  name: '看剧',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View > Image[childCount=0][text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/e1cfbd61-4592-4330-b550-8ac9c0783947',
          snapshotUrls: 'https://i.gkd.li/i/15335006',
        },
      ],
    },
  ],
});
