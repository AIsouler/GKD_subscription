import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mj.mjyd',
  name: '追漫大全',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            '@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/12895086',
        },
      ],
    },
  ],
});
