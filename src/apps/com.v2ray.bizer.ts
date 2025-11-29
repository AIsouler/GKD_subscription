import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.v2ray.bizer',
  name: '灯塔加速器',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      desc: '点击 X 关闭弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.github.kr328.main.HomeActivity',
          matches: '[id$="close"]',
          exampleUrls: 'https://i.gkd.li/snapshot/1764428898825',
          snapshotUrls: 'https://i.gkd.li/i/23834355',
        },
      ],
    },
  ],
});
