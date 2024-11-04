import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tv_skip"]',
          exampleUrls: 'https://e.gkd.li/81f951ce-39b0-4677-93a7-25b5a709b46d',
          snapshotUrls: 'https://i.gkd.li/i/17615867',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="不再提示"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/i/12727241',
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.cebbank.mobile.cemb.ui.activity.SplashActivity',
        'com.cebbank.mobile.cemb.ui.activity.HomeActivity',
      ],
      rules: '[id="com.cebbank.mobile.cemb:id/home_advertising_iv_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12727248',
        'https://i.gkd.li/i/13471080', // activityIds: 'com.cebbank.mobile.cemb.ui.activity.HomeActivity',
      ],
    },
  ],
});
