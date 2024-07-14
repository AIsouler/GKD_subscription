import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.loyea.adnmb',
  name: '蓝岛',
  groups: [
    {
      key: 5,
      name: '通知提示-通知弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'LinearLayout > Button[text="确定"]',
      snapshotUrls: 'https://i.gkd.li/i/13623450',
    },
  ],
});
