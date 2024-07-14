import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ruanmei.ithome.ui.MainActivity',
          matches:
            '@[text="关闭"][visibleToUser=true] <<n [vid="ll_web"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15413491',
            'https://i.gkd.li/i/15603266', // 避免误触
          ],
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
          matches: '@[longClickable=true] >4 [text="广告 "]',
          snapshotUrls: 'https://i.gkd.li/i/14734964',
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
