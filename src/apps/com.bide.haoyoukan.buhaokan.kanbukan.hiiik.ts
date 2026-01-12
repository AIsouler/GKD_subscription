import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bide.haoyoukan.buhaokan.kanbukan.hiiik',
  name: '追剧喵',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - [desc="了解更多" || desc="暂不下载"] <5 View < View < View < View < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/a8b9fa37-4d87-4ab0-a1f5-c09aea00a0f0',
          snapshotUrls: [
            'https://i.gkd.li/i/23599803',
            'https://i.gkd.li/i/23598096',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/cd3a468f-0768-4fd6-952b-c0d5a9769486',
          snapshotUrls: 'https://i.gkd.li/i/23598268',
        },
      ],
    },
  ],
});
