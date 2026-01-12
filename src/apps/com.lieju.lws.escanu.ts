import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lieju.lws.escanu',
  name: '易视看',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][visibleToUser=true][childCount=1] <2 ViewGroup <2 ViewGroup - ViewGroup >3 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/47781f68-64d1-4bf6-8d09-85318ff5b78a',
          snapshotUrls: 'https://i.gkd.li/i/17931020',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/4bd02512-bc63-4242-b3c5-c68d97b89f2d',
          snapshotUrls: [
            'https://i.gkd.li/i/17930503',
            'https://i.gkd.li/i/17931003',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.jooan.qiaoanzhilian.ui.activity.gun_ball.GunBallCameraPlayerNewActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/96f6fb24-37c6-4b3e-89e3-91c4279c7221',
          snapshotUrls: 'https://i.gkd.li/i/17930496',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-首页下方广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      activityIds:
        'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup[desc="root"] > ViewGroup[childCount=2] > ViewGroup[childCount=2][desc!=null] > @ImageView[clickable=true][visibleToUser=true][desc!=null][index=parent.childCount.minus(1)] <<n [vid="native_express_container"]',
          exampleUrls: 'https://e.gkd.li/6ff2f8fe-2269-4f52-b49f-3f997b405a8f',
          snapshotUrls: 'https://i.gkd.li/i/17930498',
        },
        {
          preKeys: [0],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/a8a4aeb9-ee6a-4fde-80be-0e78e346f673',
          snapshotUrls: 'https://i.gkd.li/i/17930497',
        },
      ],
    },
  ],
});
