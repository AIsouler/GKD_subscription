import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.tnaant',
  name: '蚂蚁加速器',
  groups: [
    {
      key: 5,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="公告"] +2 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13713449',
    },
  ],
});
