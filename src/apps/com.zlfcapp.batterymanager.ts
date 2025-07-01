import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.9245',
            top: 'width * 0.0401',
          },
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'FrameLayout[childCount=4] >2 @RelativeLayout[childCount=3] > RelativeLayout > ProgressBar[childCount=0]',
          exampleUrls:
            'https://m.gkd.li/57941037/89ad488c-2bcb-4f78-b7ba-ccb5335042cc',
          snapshotUrls: 'https://i.gkd.li/i/15220546',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -2 @View > Image[text=""][visibleToUser=true][childCount=0]',
          exampleUrls:
            'https://m.gkd.li/57941037/f41a31f3-5ddd-44a5-b450-a6678f551328',
          snapshotUrls: 'https://i.gkd.li/i/15220517',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.mvvm.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/19954295',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.mvvm.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/19955131',
        },
        {
          key: 4,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@View[text=""][id!=null][childCount=1][getChild(0).getChild(0).childCount=0] + View[childCount=1] > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/fc18c202-23c9-4b77-bbe6-9674427a53df',
          snapshotUrls: 'https://i.gkd.li/i/19955070',
        },
      ],
    },
  ],
});
