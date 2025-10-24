import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mfhd.ygj.p3',
  name: '动漫共和国',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'app.video.guoguo.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/efd8bd0a-4bd7-40e9-90fe-19d2891caff8',
          snapshotUrls: 'https://i.gkd.li/i/21177378',
        },
      ],
    },
  ],
});
