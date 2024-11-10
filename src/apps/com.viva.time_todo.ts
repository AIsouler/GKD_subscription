import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.viva.time_todo',
  name: 'CliCli动漫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.maoyun.guoguo.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13759356',
        },
        {
          key: 1,
          name: '百度广告',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true] - RelativeLayout > RelativeLayout > ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13761232',
        },
      ],
    },
  ],
});
