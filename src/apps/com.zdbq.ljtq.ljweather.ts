import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zdbq.ljtq.ljweather',
  name: '莉景天气',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.zdbq.ljtq.ljweather.IndexActivity',
          matches: '[vid="dialog_daily_activity_card_cancel"]',
        },
      ],
    },
  ],
});
