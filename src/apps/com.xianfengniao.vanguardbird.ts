import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xianfengniao.vanguardbird',
  name: '先锋鸟',
  groups: [
    {
      key: 9,
      name: '功能类-首页-今日任务-自动点击签到',
      activityIds: [
        'com.xianfengniao.vanguardbird.ui.common.activity.MainActivity',
      ],
      rules: [
        {
          matches: '[text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/24839618',
        },
        {
          matches:
            '[id="com.xianfengniao.vanguardbird:id/tv_time"][text="点击签到"]',
          snapshotUrls: 'https://i.gkd.li/i/24839732',
        },
        {
          matches: '[id="com.xianfengniao.vanguardbird:id/tv_cancel"]',
          snapshotUrls: ['https://i.gkd.li/i/24839655'],
        },
      ],
    },
  ],
});
