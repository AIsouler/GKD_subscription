import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tnscreen.main',
  name: '多屏互动',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2, // https://github.com/AIsouler/GKD_subscription/issues/694
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            'LinearLayout[childCount>0] + LinearLayout[vid="welcome_ad_view_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d14f7876-892f-4a25-aa1f-0f7500be52cb',
          snapshotUrls: 'https://i.gkd.li/i/18368988',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18370963', // LinearLayout[childCount>0] 防止提前触发
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]',
          exampleUrls: 'https://e.gkd.li/be4513a1-fdf8-4889-a65d-55e2e0664afc',
          snapshotUrls: 'https://i.gkd.li/i/18371332',
        },
      ],
    },
  ],
});
