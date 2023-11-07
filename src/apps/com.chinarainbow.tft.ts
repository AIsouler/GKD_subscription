import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinarainbow.tft',
  name: '天府通',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          matches: 'Image[text=""] < @View +4 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/13269854',
        },
      ],
    },
  ],
});
