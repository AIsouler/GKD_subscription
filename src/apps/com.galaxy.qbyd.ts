import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.galaxy.qbyd',
  name: '春木漫画',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
            'com.aster.comic.app.view.MainActivity',
          ],
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13691104',
            'https://i.gkd.li/import/13691103',
          ],
        },
      ],
    },
  ],
});
