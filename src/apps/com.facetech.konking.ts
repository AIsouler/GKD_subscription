import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.facetech.konking',
  name: '人民日报',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: '@Image[text=""] < View +n View > View > TextView[text="广告"]',
      snapshotUrls: 'https://i.gkd.li/import/12841081',
    },
  ],
});
