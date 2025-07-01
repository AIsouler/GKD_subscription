import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android.zhibo8',
  name: '直播吧',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: [
        'android.zhibo8.ui.contollers.main.MainActivity',
        'android.zhibo8.ui.contollers.detail.DetailActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches: '[vid="iv_tip"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13786148',
            'https://i.gkd.li/i/14428863',
            'https://i.gkd.li/i/15443198',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          matches: '@[clickable=true] >3 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14428912',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.ui.contollers.main.MainActivity',
          matches: ['[text="发现新版本"]', '[text$="不再提醒"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/14395465',
            'https://i.gkd.li/i/17825255',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="pushsetting_close_iv"]',
          exampleUrls: 'https://e.gkd.li/e28aa1f2-8088-4f78-bee9-2d5832637671',
          snapshotUrls: 'https://i.gkd.li/i/17825298',
        },
      ],
    },
  ],
});
