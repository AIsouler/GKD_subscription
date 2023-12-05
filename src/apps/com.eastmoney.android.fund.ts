import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eastmoney.android.fund',
  name: '天天基金',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12781533',
    },
    {
      key: 1,
      name: '自选页面广告',
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
      name: '自选页面缩写提示信息',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        '[desc="表示场内基金的最新价和折价率"] -(2) FrameLayout < FrameLayout + ImageView',
      ],
      snapshotUrls: 'https://i.gkd.li/import/12642387',
    },
    {
      key: 3,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@FrameLayout[clickable=true] - * >2 [desc="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13546927',
    },
  ],
});
