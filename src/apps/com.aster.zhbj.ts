import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aster.zhbj',
  name: '喵上漫画',
  groups: [
    {
      key: 1,
      name: '第三方 SDK 广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.bbk.launcher2.Launcher',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777325',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            'ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777329',
        },
      ],
    },
  ],
});
