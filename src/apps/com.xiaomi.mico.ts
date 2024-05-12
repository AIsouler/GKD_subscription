import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.xiaomi.mico.main.MainActivity',
      rules:
        '[id="com.xiaomi.mico:id/adImage"] + [id="com.xiaomi.mico:id/ivCloseAd"]',
      snapshotUrls: 'https://i.gkd.li/i/12745621',
    },
    {
      key: 2,
      name: '权限提示-请求开启定位权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="取消"] < * - * >2 [text*="开启位置服务"]',
      snapshotUrls: 'https://i.gkd.li/i/15284753',
    },
  ],
});
