import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhishan.washer',
  name: '悠洗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 20000,
      actionMaximum: 2, // 该广告可能会出现两次
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/47344324-7c76-47d3-82de-30c8f905ad8f',
          snapshotUrls: 'https://i.gkd.li/i/17002073',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] + View[text=""][childCount=1] > Image[text=""][childCount=0][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/355f6e11-c21f-4cb2-b103-1a56032da15c',
          snapshotUrls: 'https://i.gkd.li/i/17002026',
        },
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -4 View[text=""][childCount=1] > Image[text=""][childCount=0][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/13cb561b-cfd5-44a8-b8ed-8bc1500b73a8',
          snapshotUrls: 'https://i.gkd.li/i/17088067',
        },
      ],
    },
  ],
});
