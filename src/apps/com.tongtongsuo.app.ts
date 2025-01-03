import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongtongsuo.app',
  name: '通通锁',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.scaf.android.client.activity.DoorkeyControlPanelActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/09628cf0-3004-439f-9bfd-68a085b0bda6',
          snapshotUrls: 'https://i.gkd.li/i/18296115',
        },
      ],
    },
  ],
});
