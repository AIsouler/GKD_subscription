import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds: [
            'com.jincheng.supercaculator.activity.MainActivity',
            'com.jincheng.supercaculator.activity.basic.CalculatorActivity',
          ],
          matches: '@Image < View < View TextView[text = "反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12859523',
            'https://i.gkd.li/i/12859545',
            'https://i.gkd.li/i/13670598',
          ],
        },
        {
          key: 1,
          name: '腾讯广告-1',
          fastQuery: true,
          activityIds: 'com.jincheng.supercaculator.activity.SplashActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/13261870',
        },
        {
          key: 2,
          name: '腾讯广告-2',
          fastQuery: true,
          activityIds:
            'com.jincheng.supercaculator.activity.basic.CalculatorActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13378847',
        },
      ],
    },
  ],
});
