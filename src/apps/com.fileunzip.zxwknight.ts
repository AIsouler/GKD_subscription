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
          snapshotUrls: 'https://i.gkd.li/i/13328194',
        },
        {
          key: 2,
          name: '腾讯广告',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13391833',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-升级专业版弹窗',
      activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
      rules:
        '@[id="com.fileunzip.zxwknight:id/ziputil_dialog_imageview"] +n [text="升级到专业版"]',
      snapshotUrls: 'https://i.gkd.li/i/13328212',
    },
    {
      key: 3,
      name: '全屏广告-软件推广',
      desc: '全能保险箱',
      rules: [
        {
          quickFind: true,
          matches: '[vid="dialog_recommend_back"]',
          exampleUrls:
            'https://m.gkd.li/57941037/de127f4b-5de6-41ab-a1ea-5a98f7eeab58',
          snapshotUrls: 'https://i.gkd.li/i/14472568',
        },
      ],
    },
  ],
});
