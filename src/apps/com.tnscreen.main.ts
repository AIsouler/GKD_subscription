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
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]',
          exampleUrls: 'https://e.gkd.li/be4513a1-fdf8-4889-a65d-55e2e0664afc',
          snapshotUrls: 'https://i.gkd.li/i/18371332',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.tcl.tcast.snapshot.view.ShotPicActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/93834d55-142f-4371-ae5b-db65b168db7f',
          snapshotUrls: 'https://i.gkd.li/i/20123436',
        },
      ],
    },
  ],
});
