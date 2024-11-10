import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cimoc.haleydu',
  name: 'Cimoc',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.haleydu.cimoc.ui.activity.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/bc2e0453-1da8-43db-ad18-ec69d72e3c75',
          snapshotUrls: [
            'https://i.gkd.li/i/14318224',
            'https://i.gkd.li/i/14318235',
            'https://i.gkd.li/i/14318236',
          ],
        },
      ],
    },
  ],
});
