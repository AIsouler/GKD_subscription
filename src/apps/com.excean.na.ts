import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.excean.na',
  name: '99手游加速器',
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
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/14835263',
        },
      ],
    },
    {
      key: 1,
      fastQuery: true,
      name: '局部广告-卡片广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.excelliance.kxqp.ui.activity.GameLaunchActivity',
          matches: '[id="com.excean.na:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13931051',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击X',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.excelliance.kxqp.ui.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13930990',
            'https://i.gkd.li/i/14001254',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'Image < @View +5 * > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/14855686',
        },
      ],
    },
  ],
});
