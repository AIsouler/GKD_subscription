import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fzfengzheng.fzboyp',
  name: '风筝影评',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/15464fe7-8f80-468d-8972-011cab0ec377',
          snapshotUrls: 'https://i.gkd.li/i/14228338',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'View[childCount=6] >2 View[childCount=8] > View[childCount=4] > [text="反馈"] + View[index=3]',
          exampleUrls:
            'https://m.gkd.li/57941037/3cb59a01-f1ab-4244-b455-3824a5724811',
          snapshotUrls: 'https://i.gkd.li/i/14228332',
        },
      ],
    },
  ],
});
