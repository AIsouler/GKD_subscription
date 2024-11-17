import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dfsly.bbs',
  name: 'AC匿名版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '[id="android:id/content"] >7 FrameLayout[childCount=7] > LinearLayout >3 ImageView[text=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13330351',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.ui.NavigationActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13335135',
            'https://i.gkd.li/i/13335316',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.NavigationActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/586a67a6-27d2-4cc2-9a00-be2fc63ed63f',
          snapshotUrls: 'https://i.gkd.li/i/13343675',
        },
      ],
    },
  ],
});
