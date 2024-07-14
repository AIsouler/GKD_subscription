import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eastmoney.android.fund',
  name: '天天基金',
  groups: [
    {
      key: 1,
      name: '局部广告-自选页面广告',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        'FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView',
      ],
      snapshotUrls: 'https://i.gkd.li/i/12642387',
    },
    {
      key: 2,
      name: '功能类-自选页面缩写提示信息',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        '[desc="表示场内基金的最新价和折价率"] -(2) FrameLayout < FrameLayout + ImageView',
      ],
      snapshotUrls: 'https://i.gkd.li/i/12642387',
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@FrameLayout[clickable=true] - * >2 [desc="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/13546927',
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
            'com.eastmoney.android.fund.activity.FundSplashActivity',
          ],
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout - ImageView < FrameLayout <<n [vid="container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d',
          snapshotUrls: [
            'https://i.gkd.li/i/14149452',
            'https://i.gkd.li/i/14332091',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '评价提示-好评弹窗',
      desc: '点击下次再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.eastmoney.android.fund:id/container"] [desc="下次再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d791a2f9-ae86-4389-8ee7-36a87f11b60d',
          snapshotUrls: 'https://i.gkd.li/i/14179508',
        },
      ],
    },
  ],
});
