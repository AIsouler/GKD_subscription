import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eastmoney.android.fund',
  name: '天天基金',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: '[id="com.eastmoney.android.fund:id/ad_ignore"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12781533',
    },
    {
      key: 1,
      name: '自选页面广告',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        'FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642387',
    },
    {
      enable: false,
      key: 2,
      name: '自选页面缩写提示信息',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        '[desc="表示场内基金的最新价和折价率"] -(2) FrameLayout < FrameLayout + ImageView',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642387',
    },
  ],
});
