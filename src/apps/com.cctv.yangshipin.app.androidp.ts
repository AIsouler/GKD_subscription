import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.yangshipin.app.androidp',
  name: '央视频',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8f722fca-4f50-4d5e-bbb6-14276f973404',
          snapshotUrls: 'https://i.gkd.li/i/16479226',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
          matches: '[vid="lottery_popup_view_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8ae44849-08d0-4e7f-a3e1-a277a4e22315',
          snapshotUrls: 'https://i.gkd.li/i/16493556',
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
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/abb06a51-6b92-4734-8a60-d0ef87b3364d',
          snapshotUrls: 'https://i.gkd.li/i/16742915',
        },
      ],
    },
  ],
});
