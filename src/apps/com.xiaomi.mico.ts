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
  ],
});
