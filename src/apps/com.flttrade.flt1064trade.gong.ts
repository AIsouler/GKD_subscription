import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flttrade.flt1064trade.gong',
  name: '影视工场',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.flttrade.flt1064trade.gong.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13759472',
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/fc9d81bc-d215-4ebd-84a9-ed369d63f037',
          snapshotUrls: 'https://i.gkd.li/i/13798323',
        },
        {
          key: 2,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text^="打开或下载" || text="了解更多" || text^="下载或打开"]',
          exampleUrls: 'https://e.gkd.li/bd2a716e-691a-4c2c-91e2-da41e3bf2b9c',
          snapshotUrls: 'https://i.gkd.li/i/13798327',
        },
      ],
    },
  ],
});
