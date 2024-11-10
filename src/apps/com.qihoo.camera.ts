import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.camera',
  name: '360摄像机',
  groups: [
    {
      key: 6,
      name: '局部广告-卡片广告',
      rules: [
        {
          actionMaximum: 1,
          activityIds: 'com.qihoo.jia.playpage.RecordPlayActivity',
          name: '云收藏弹窗广告',
          matches:
            'ViewGroup > @ImageView[clickable=true] -n TextView[text="云收藏"]',
          snapshotUrls: 'https://i.gkd.li/i/13630755',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.qihoo.jia.ui.activity.TabMainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/c88cdec7-e6da-4bbf-821c-76459d0daff9',
          snapshotUrls: 'https://i.gkd.li/i/17656326',
        },
      ],
    },
  ],
});
