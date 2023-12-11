import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.facetech.konking',
  name: '人民日报',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            '[id="com.facetech.konking:id/ksad_splash_circle_skip_view"] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12841078',
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12841079',
        },
      ],
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: '@Image[text=""] < View +n View > View > TextView[text="广告"]',
      snapshotUrls: 'https://i.gkd.li/import/12841081',
    },
  ],
});
