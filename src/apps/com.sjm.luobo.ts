import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sjm.luobo',
  name: '追剧达人',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<80 && height<80] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="第三方应用" || text="进入小程序" || text="领取优惠" || text="跳转微信" || text="下载应用"]',
          snapshotUrls: 'https://i.gkd.li/i/13723963',
        },
      ],
    },
  ],
});
