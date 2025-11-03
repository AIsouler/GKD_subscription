import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mosoink.teach',
  name: '云班课',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页班课列表广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.mosoink.teach.MainMenuActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/64072399/4f7366d4-77eb-4a11-8e08-26afc29f29ed',
          snapshotUrls: 'https://i.gkd.li/i/13778179',
        },
        {
          key: 1,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup -4 ViewGroup >2 [text^="扭动手机"]',
          exampleUrls:
            'https://m.gkd.li/64072399/ab4a196f-725d-4e03-aabf-fb0eb6018f51',
          snapshotUrls: 'https://i.gkd.li/i/13786802',
        },
        {
          key: 2,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls:
            'https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c',
          snapshotUrls: 'https://i.gkd.li/i/13784406',
        },
        {
          key: 3,
          matches: '[vid="interact_ad_root"] > [vid="iv_close"]',
          exampleUrls:
            'https://m.gkd.li/64072399/695871fb-9c73-4c93-a6d1-18d90786604a',
          snapshotUrls: 'https://i.gkd.li/i/13778123',
        },
      ],
    },
  ],
});
