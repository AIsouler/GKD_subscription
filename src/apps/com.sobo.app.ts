import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sobo.app',
  name: '素博影院',
  groups: [
    {
      key: 1,
      name: '全屏广告-注册邀请码弹窗',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sobo.app.MainActivity',
          matches:
            '@ImageView[index=3] <4 View[childCount=4] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dabbfdcb-77fb-4298-aa63-899cbdbf1ceb',
          snapshotUrls: 'https://i.gkd.li/i/14133497',
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
          activityIds: 'com.sobo.app.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="第三方应用" || text="进入小程序" || text="领取优惠" || text="跳转微信" || text="下载应用" || text="打开快应用"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3ed9ad25-083f-4d69-b944-360a6bc2233f',
          snapshotUrls: 'https://i.gkd.li/i/14133546',
        },
      ],
    },
  ],
});
