import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.practical.master.toolsme',
  name: '实用大师',
  groups: [
    {
      key: 6,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          name: '字节穿山甲SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'Image[width<60][height<60] < @View <n View [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13581740',
            'https://i.gkd.li/i/13582110',
          ],
        },
      ],
    },
  ],
});
