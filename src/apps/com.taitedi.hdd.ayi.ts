import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taitedi.hdd.ayi',
  name: '爱其意',
  groups: [
    {
      key: 1,
      name: '通知提示-首页通知弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="我知道了"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/12550205-943e-4e8b-b26a-ebd6ce3f006a',
          snapshotUrls: 'https://i.gkd.li/i/18261037',
        },
      ],
    },
  ],
});
