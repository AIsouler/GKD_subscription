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
      rules: [
        {
          key: 1,
          actionDelay: 2000, // https://github.com/AIsouler/GKD_subscription/issues/680
          activityIds:
            'com.scaf.android.client.activity.DoorkeyControlPanelActivity',
          matches:
            'ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < @FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/09628cf0-3004-439f-9bfd-68a085b0bda6',
          snapshotUrls: 'https://i.gkd.li/i/18296115',
        },
        {
          key: 2,
          actionDelay: 2000,
          activityIds:
            'com.scaf.android.client.activity.DoorkeyControlPanelActivity',
          matches:
            'ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < @FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/d4ce9699-27f6-4191-92fd-7cab78632299',
          snapshotUrls: 'https://i.gkd.li/i/18309574',
        },
        {
          key: 3,
          actionDelay: 2000,
          activityIds:
            'com.scaf.android.client.activity.DoorkeyControlPanelActivity',
          matches:
            'ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < @FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/0d576ac2-9821-4e7e-b398-fef3427ad7c2',
          snapshotUrls: 'https://i.gkd.li/i/18309593',
        },
        {
          key: 4,
          actionDelay: 2000,
          activityIds:
            'com.scaf.android.client.activity.DoorkeyControlPanelActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] < FrameLayout - FrameLayout >6 [text^="点击"]',
          exampleUrls: 'https://e.gkd.li/4e62c701-43cc-49a1-acd8-fb9604cad328',
          snapshotUrls: 'https://i.gkd.li/i/18309739',
        },
        {
          key: 5,
          actionDelay: 2000,
          activityIds:
            'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_iv"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4a608829-51f8-439c-93b3-9e78cd036e0c',
          snapshotUrls: 'https://i.gkd.li/i/18309693',
        },
      ],
    },
  ],
});
