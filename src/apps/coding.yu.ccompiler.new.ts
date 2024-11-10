import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'coding.yu.ccompiler.new',
  name: 'C语言编译器',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'coding.yu.ccompiler.ui.CMainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/274838d1-4618-41ea-b42e-beb0b021f8b2',
          snapshotUrls: 'https://i.gkd.li/i/17689928',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'coding.yu.ccompiler.ui.CMainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/1ea8876f-4cac-492e-b977-e9a512aa1661',
          snapshotUrls: 'https://i.gkd.li/i/17689929',
        },
      ],
    },
  ],
});
