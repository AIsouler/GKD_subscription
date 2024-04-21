import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xt.retouch',
  name: '醒图',
  groups: [
    {
      key: 5,
      name: '评价提示-好评反馈',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.xt.retouch:id/market_feedback_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13062637',
    },
  ],
});
