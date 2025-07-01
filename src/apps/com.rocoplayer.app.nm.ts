import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rocoplayer.app.nm',
  name: '柠檬听书',
  groups: [
    {
      key: 1,
      name: '通知提示-温馨提示弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.e4a.runtime.android.mainActivity',
          matches: '[text="温馨提示"] +2 [text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14304132',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.e4a.runtime.android.mainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/14304134',
        },
      ],
    },
  ],
});
