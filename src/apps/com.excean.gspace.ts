import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.excean.gspace',
  name: 'OurPlay',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      forcedTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.excelliance.kxqp.splash.SplashActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/13302890',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.excelliance.kxqp.splash.SplashActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13447122',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.excelliance.kxqp.gs.main.MainActivity',
          matches: '[vid="close_render_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/15284762',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.excelliance.kxqp.gs.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/bcba68e4-31a9-4693-b348-3f7b62fe8d3a',
          snapshotUrls: 'https://i.gkd.li/i/14862348',
        },
      ],
    },
  ],
});
