import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upxjwb.xrq',
  name: '番喜视频',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] < * - View > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/23519200',
        },
      ],
    },
  ],
});
