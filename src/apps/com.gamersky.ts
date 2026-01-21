import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16322789',
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16333782',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="ms_skipView"]', // vid="iv_notification_fragment_news" 并非跳过节点，只是位置相同
          exampleUrls: 'https://e.gkd.li/4b7fd3fe-8467-49e3-93af-64515416911c',
          snapshotUrls: 'https://i.gkd.li/i/16860311',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16902939',
        },
        {
          key: 3,
          fastQuery: true,
          position: {
            left: 'width * 0.9041',
            top: 'width * 0.1598',
          },
          matches: '[vid="animation_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6bca4f19-320d-42e4-affb-4667a8112653',
          snapshotUrls: 'https://i.gkd.li/i/17565808',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.main.activity.LibMainActivity',
            '.common.activity.LibDetailContentDetailActivity',
          ],
          matches: [
            '[text="广告" || vid="badge"][visibleToUser=true]',
            '[vid="delete" || vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18122883',
            'https://i.gkd.li/i/18122884',
            'https://i.gkd.li/i/20422031',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches:
            'WebView >2 View[childCount=2] > View[index=1] > @View[clickable=true][visibleToUser=true][childCount=0] <<n [vid="contentWebView"]',
          snapshotUrls: 'https://i.gkd.li/i/14622935',
          excludeSnapshotUrls: 'https://i.gkd.li/i/14892583',
        },
        {
          key: 2,
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches:
            '@[clickable=true][visibleToUser=true][text=""] - [childCount=0][text="广告"] <<n [vid="nested_view_group" || vid="contentWebView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13635579',
            'https://i.gkd.li/i/15477470',
            'https://i.gkd.li/i/17356753',
          ],
        },
        {
          key: 4,
          activityIds: 'com.gamersky.main.activity.LibMainActivity',
          matches: '[vid="recommended_reviews_or_rating_close_img"]',
          exampleUrls: 'https://e.gkd.li/f214c099-c22a-4c20-abc0-4cdddc2fe614',
          snapshotUrls: 'https://i.gkd.li/i/16556122',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-签到成功弹窗',
      desc: '点击[确定]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.gamersky.main.activity.LibMainActivity',
          matches: ['[text="签到成功！"]', '[text="确定"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/696e417a-3100-43a2-a401-f4f80dfa9f47',
          snapshotUrls: 'https://i.gkd.li/i/14761502',
        },
      ],
    },
  ],
});
