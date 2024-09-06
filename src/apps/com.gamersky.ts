import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16322789',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/16333782',
        },
        {
          key: 2,
          matches: '[vid="ms_skipView"]', // vid="iv_notification_fragment_news" 并非跳过节点，只是位置相同
          exampleUrls: 'https://e.gkd.li/4b7fd3fe-8467-49e3-93af-64515416911c',
          snapshotUrls: [
            'https://i.gkd.li/i/16860311',
            'https://i.gkd.li/i/16902939', // 防止误触
          ],
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
          name: '首页卡片广告',
          activityIds: 'com.gamersky.main.activity.LibMainActivity',
          matches: ['[text="广告"]', '[id="com.gamersky:id/delete"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13451220',
            'https://i.gkd.li/i/13635580',
          ],
        },
        {
          key: 1,
          name: '正文底部卡片广告',
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches:
            'WebView >2 View[childCount=2] > View[index=1] > @View[clickable=true][visibleToUser=true][childCount=0] <<n [vid="contentWebView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13451258',
            'https://i.gkd.li/i/14622935',
            'https://i.gkd.li/i/14892583', // 避免误触
          ],
        },
        {
          key: 2,
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches:
            '[text="广告"] < * > @[clickable=true][text=""][index=1] <<n [vid="contentWebView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13635579',
            'https://i.gkd.li/i/15477470',
          ],
        },
        {
          key: 3,
          name: '评论区卡片广告',
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches: [
            '[id="com.gamersky:id/badge"]',
            '[id="com.gamersky:id/close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13759484',
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
