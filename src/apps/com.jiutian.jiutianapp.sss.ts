import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiutian.jiutianapp.sss',
  name: '速搜视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls:
            'https://m.gkd.li/57941037/93c98c6f-56f9-4c57-a8b4-ff8a74900c1e',
          snapshotUrls: 'https://i.gkd.li/i/14318888',
        },
      ],
    },
  ],
});
