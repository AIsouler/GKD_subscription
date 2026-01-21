import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          excludeMatches: '[vid="iv_search_back"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/49015bf7-6513-40b2-a436-d3c386ef1891',
          snapshotUrls: [
            'https://i.gkd.li/i/16401878',
            'https://i.gkd.li/i/16401899', // 防止误触
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
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.ruanmei.ithome.ui.MainActivity',
          matches:
            '@[visibleToUser=true][text="关闭"] <<n [vid="ll_web"][visibleToUser=true] + [vid="shadowLayout"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15413491',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15603266',
            'https://i.gkd.li/i/17516358',
          ],
        },
        {
          key: 1,
          activityIds: 'com.ruanmei.ithome.ui.NewsInfoV8Activity',
          matches: '[vid="iv_dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16972394',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '长按广告-点击[屏蔽]-点击[不喜欢此条]',
      fastQuery: true,
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      rules: [
        {
          key: 0,
          action: 'longClick',
          matches:
            '@[longClickable=true] >4 [text="广告 "][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14734964',
          excludeSnapshotUrls: 'https://i.gkd.li/i/19340823',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text*="屏蔽"]',
          snapshotUrls: 'https://i.gkd.li/i/14734962',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[vid="rl_dislike"]',
          snapshotUrls: 'https://i.gkd.li/i/14734987',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ruanmei.ithome.ui.MainActivity',
          matches: '[vid="btn_dialog_upgrade_ignore"]',
          snapshotUrls: 'https://i.gkd.li/i/15413494',
        },
      ],
    },
  ],
});
