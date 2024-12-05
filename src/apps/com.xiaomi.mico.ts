import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches:
            '[id="com.xiaomi.mico:id/adImage"] + [id="com.xiaomi.mico:id/ivCloseAd"]',
          snapshotUrls: 'https://i.gkd.li/i/12745621',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-请求开启定位权限弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: ['[text*="开启位置服务"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/15284753',
        },
      ],
    },
  ],
});
