import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.klcxkj.zqxy',
  name: '趣智校园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          ],
          matches: '[id="com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195649',
            'https://i.gkd.li/i/12781415',
          ],
        },
        {
          key: 1,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.klcxkj.zqxy.ui.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text^="打开或下载" || text="进入小程序" || text="领取优惠" || text="跳转微信" || text^="下载或打开"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12781461',
            'https://i.gkd.li/i/13488673',
            'https://i.gkd.li/i/13546464',
            'https://i.gkd.li/i/13071301',
            'https://i.gkd.li/i/13707849',
          ],
        },
        {
          key: 4,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
        },
        {
          key: 5,
          name: '吉欣广告',
          activityIds: 'com.klcxkj.zqxy.ui.splash.SplashActivity',
          matches: '@ViewGroup < ViewGroup +2 ViewGroup > [text="吉欣广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13274838',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.ui.device.apartment.ble.BathingBleActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/d31ed6be-1211-4d34-855c-3f454f8f4b3f',
          snapshotUrls: 'https://i.gkd.li/i/13274836',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity',
          ],
          matches:
            '[id="com.klcxkj.zqxy:id/bathing_adv_layout"] >n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: ['https://i.gkd.li/i/13488870'],
        },
      ],
    },
  ],
});
