import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.viva.todo',
  name: '泰剧兔',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭/跳过',
      rules: [
        {
          key: 0,
          activityIds: 'com.maoyun.guoguo.MainActivity',
          matches:
            '[text="反馈"] + View[childCount=2] > [text$="跳过"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e4490664-3a73-473f-9f4e-79da3cb53a68',
          snapshotUrls: 'https://i.gkd.li/i/14370321',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -4 View[index=0][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/7802b75c-f75a-4375-9f10-26b822ccc4f1',
          snapshotUrls: 'https://i.gkd.li/i/14370332',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] < View + View > [text$="跳过"]',
          exampleUrls:
            'https://m.gkd.li/57941037/541565b5-6f3e-412d-ad1c-731bab1ee2e8',
          snapshotUrls: 'https://i.gkd.li/i/14406445',
        },
      ],
    },
  ],
});
