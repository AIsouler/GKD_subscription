import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.feiyu.morin',
  name: '魔音MORIN',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13521556',
        },
        {
          key: 1,
          name: '快手广告',
          fastQuery: true,
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches: ['[text="广告"]', '@ViewGroup > [text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13546184',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/52f8dddd-3604-4144-96ce-804c66e77a19',
          snapshotUrls: 'https://i.gkd.li/i/16621747',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/a3929d91-2da9-423e-8733-7a933a611ca5',
          snapshotUrls: 'https://i.gkd.li/i/16621748',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [
            'com.feiyu.morin.view.main.MainActivity',
            'com.feiyu.morin.view.main.PlayerBottomControlActivity',
          ],
          matches:
            'ImageView + LinearLayout + LinearLayout + FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13521680',
            'https://i.gkd.li/i/13625476',
          ],
        },
      ],
    },
  ],
});
