import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jovetech.CloudSee.temp',
  name: '云视通',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jovision.saas.multiplay.ui.JVMultiPlayActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][text=null] <<n [vid="mAdContainer"]',
          exampleUrls: 'https://e.gkd.li/1118299d-d74c-4f64-b5c8-fa1d8d2a48db',
          snapshotUrls: 'https://i.gkd.li/i/16537379',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jovision.saas.ui.activity.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/92d3c1a3-3990-4f2c-b564-6f79f69f9b14',
          snapshotUrls: 'https://i.gkd.li/i/16567977',
        },
      ],
    },
  ],
});
