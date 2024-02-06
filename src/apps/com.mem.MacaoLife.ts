import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mem.MacaoLife',
  name: '澳覓',
  groups: [
    {
      key: 1,
      name: '通知提示-请求通知提示弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.mem.life.ui.launch.LaunchActivity',
      rules: '[id="com.mem.MacaoLife:id/cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13350665',
    },
    {
      key: 2,
      name: '局部广告-浮窗广告',
      quickFind: true,
      activityIds: 'com.mem.life.ui.home.HomeActivity',
      rules: '[id="com.mem.MacaoLife:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350685',
    },
  ],
});
