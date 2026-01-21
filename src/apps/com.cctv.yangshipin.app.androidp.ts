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
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19859692', // 被全局规则排除
          excludeSnapshotUrls: 'https://i.gkd.li/i/20949002',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
          matches: '[vid="lottery_popup_view_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8ae44849-08d0-4e7f-a3e1-a277a4e22315',
          snapshotUrls: 'https://i.gkd.li/i/16493556',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.tencent.videolite.android.business.videolive.VideoLiveActivity',
          matches: '[vid="product_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/1dcd9a1c-4994-4d6f-8611-fcfbcfa184bd',
          snapshotUrls: 'https://i.gkd.li/i/21209009',
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
          forcedTime: 10000,
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
    {
      key: 4,
      name: '全屏广告-底部关注弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.videolite.android.business.videolive.VideoLiveActivity',
          matches:
            '@[vid="close"] <<n [vid="follow_float_container"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b4006011-8b13-431b-9af3-f4390898d12c',
          snapshotUrls: 'https://i.gkd.li/i/21208995',
        },
      ],
    },
  ],
});
