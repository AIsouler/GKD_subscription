import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ms.pages',
  name: '飞鸟听书',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13450787',
        },
      ],
    },
  ],
});
