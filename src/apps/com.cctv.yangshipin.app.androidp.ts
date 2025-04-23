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
          // https://github.com/AIsouler/GKD_subscription/issues/880
          fastQuery: true,
          matches:
            '@[clickable=true] > [text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19859692',
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
    {
      key: 3,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
          matches: [
            '[text="给个好评"][visibleToUser=true]',
            '[vid="close_btn"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/7d8f15f0-1f71-4538-8fde-144ebd81dead',
          snapshotUrls: 'https://i.gkd.li/i/19788008',
        },
      ],
    },
  ],
});
