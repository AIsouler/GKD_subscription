import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xianfengniao.vanguardbird',
  name: '先锋鸟',
  groups: [
    {
      key: 9,
      name: '功能类-自动点击签到',
      desc: '首页-今日任务or个人-点击签到',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.common.activity.MainActivity',
          matches: '[text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/24839618',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.ui.common.activity.MainActivity',
          matches:
            '[id="com.xianfengniao.vanguardbird:id/tv_time"][text="点击签到"]',
          snapshotUrls: 'https://i.gkd.li/i/24839732',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.ui.common.activity.MainActivity',
          matches: '[id="com.xianfengniao.vanguardbird:id/tv_cancel"]',
          snapshotUrls: ['https://i.gkd.li/i/24839655'],
        },
      ],
    },
  ],
});
