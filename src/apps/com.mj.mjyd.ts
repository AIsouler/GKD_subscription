import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mj.mjyd',
  name: '追漫大全',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      quickFind: true,
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
      rules: [
        {
          matches:
            '@ImageView < FrameLayout[childCount=1] <2 FrameLayout[childCount=6] >3 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/12877729',
        },
        {
          matches:
            '@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/12895086',
        },
      ],
    },
  ],
});
