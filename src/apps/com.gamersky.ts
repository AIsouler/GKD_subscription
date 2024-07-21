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
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/50a53595-1cd9-4dc0-ab13-f79a5e9a702c',
          snapshotUrls: 'https://i.gkd.li/i/16322789',
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
            '[text="广告"] < * > @[text=""][clickable=true][index=1] <<n [vid="contentWebView"]',
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
