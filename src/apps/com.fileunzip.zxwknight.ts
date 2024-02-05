import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fileunzip.zxwknight',
  name: '解压专家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13328194',
        },
        {
          key: 2,
          name: '腾讯广告',

          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13391833',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-升级专业版弹窗',
      activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
      rules:
        '@[id="com.fileunzip.zxwknight:id/ziputil_dialog_imageview"] +n [text="升级到专业版"]',
      snapshotUrls: 'https://i.gkd.li/import/13328212',
    },
  ],
});
