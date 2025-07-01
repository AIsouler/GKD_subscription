import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.aliyun',
  name: '阿里云',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.biz.home.mine.activity.KFeeCenterActivity',
          matches: '[text^="打开手机消息通知"] + * >2 [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13446162',
        },
      ],
    },
  ],
});
