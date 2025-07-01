import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taitedi.hdd.ayi',
  name: '爱其意',
  groups: [
    {
      key: 1,
      name: '通知提示-首页通知弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="我知道了"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/12550205-943e-4e8b-b26a-ebd6ce3f006a',
          snapshotUrls: 'https://i.gkd.li/i/18261037',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/8ea7b6ad-8e5b-4b96-bbac-ec5b7196ddbb',
          snapshotUrls: 'https://i.gkd.li/i/18285341',
        },
      ],
    },
  ],
});
