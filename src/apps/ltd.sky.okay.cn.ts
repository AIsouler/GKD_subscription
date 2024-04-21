import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ltd.sky.okay.cn',
  name: '漫天星',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [],
          matches:
            'ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13625479',
        },
        {
          key: 1,
          name: '字节广告',
          actionDelay: 1500,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13759331',
        },
      ],
    },
  ],
});
