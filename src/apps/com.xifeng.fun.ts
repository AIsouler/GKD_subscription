import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xifeng.fun',
  name: 'OmoFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.xifeng.fun.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14050836',
            'https://i.gkd.li/i/14235476',
            'https://i.gkd.li/i/14235479',
          ],
        },
        {
          key: 1,
          activityIds: 'com.xifeng.fun.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/14235478',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告弹窗',
      desc: '点击"我知道了"',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="我知道了"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/971c3631-a9cc-4aec-992e-6cf1166eea1b',
          snapshotUrls: 'https://i.gkd.li/i/14235411',
        },
      ],
    },
  ],
});
