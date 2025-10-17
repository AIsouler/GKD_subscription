import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shengjue.cashbook',
  name: '章鱼记账',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.hjq.demo.ui.activity.SplashActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] <n ViewGroup < ViewGroup - ViewGroup >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/2828ac84-f5e0-44c0-aab8-a12bff976fca',
          snapshotUrls: 'https://i.gkd.li/i/22882021',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.hjq.demo.ui.activity.SplashActivity',
          matches:
            '@ImageView[childCount=0][width<60 && height<60] < FrameLayout[childCount=1] - LinearLayout > [text^="立即"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a305c944-d3fe-4531-958a-1b6356f60c32',
          snapshotUrls: 'https://i.gkd.li/i/22961847',
        },
      ],
    },
  ],
});
