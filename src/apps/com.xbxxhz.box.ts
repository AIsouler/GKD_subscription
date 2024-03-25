import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xbxxhz.box',
  name: '小白学习打印',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '红包弹窗',
          quickFind: true,
          activityIds: 'com.mango.login.main.MainAct',
          matches: '[vid="dg_dialog_frag_ads_popup_x"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/9137cb2d-fb8d-4782-b3c9-88b89b79c8a0',
          snapshotUrls: 'https://i.gkd.li/i/14433386',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@View +4 [text="反馈"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1fa3e6e6-ce24-42a6-a4af-911eed7392e1',
          snapshotUrls: 'https://i.gkd.li/i/14459191',
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.mango.appfile.print_finish.PrintFinishAct',
          matches:
            'ImageView < @FrameLayout +2 FrameLayout >2 [text="打开或下载第三方应用"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b0c3be3a-64a7-477e-a022-8a503ebd2cf6',
          snapshotUrls: 'https://i.gkd.li/i/14741407',
        },
      ],
    },
  ],
});
