import { defineAppConfig } from '../types';

export default defineAppConfig({
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
      snapshotUrls: 'https://i.gkd.li/import/12642387',
    },
    {
      enable: false,
      key: 2,
      name: '功能类-自选页面缩写提示信息',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        '[desc="表示场内基金的最新价和折价率"] -(2) FrameLayout < FrameLayout + ImageView',
      ],
      snapshotUrls: 'https://i.gkd.li/import/12642387',
    },
    {
      key: 3,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@FrameLayout[clickable=true] - * >2 [desc="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13546927',
    },
    {
      key: 4,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
          matches:
            '@ImageView < FrameLayout <2 FrameLayout[childCount=2] <<n [id="com.eastmoney.android.fund:id/container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d',
          snapshotUrls: 'https://i.gkd.li/import/14149452',
        },
      ],
    },
  ],
});
