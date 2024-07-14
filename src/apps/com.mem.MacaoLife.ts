import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mem.MacaoLife',
  name: '澳覓',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.mem.MacaoLife:id/cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13350665',
    },
    {
      key: 2,
      name: '局部广告-浮窗广告',
      fastQuery: true,
      activityIds: 'com.mem.life.ui.home.HomeActivity',
      rules: '[id="com.mem.MacaoLife:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13350685',
    },
  ],
});
