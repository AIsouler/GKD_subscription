import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aster.zhbj',
  name: '喵上漫画',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      desc: '点击右上角x',
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
        {
          key: 2,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            'FrameLayout[childCount=4] > FrameLayout[childCount=8] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12872249',
        },
      ],
    },
  ],
});
