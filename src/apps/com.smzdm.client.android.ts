import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.smzdm.client.android:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12535072',
    },
    {
      key: 1,
      quickFind: true,
      name: 'APP内弹窗广告',
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '[id="com.smzdm.client.android:id/dialog_home_close"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12695751',
    },
    {
      key: 2,
      name: '更新弹窗',
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      quickFind: true,
      actionMaximum: 1,
      rules:
        '[id="com.smzdm.client.android:id/tv_version"] +2 [id="com.smzdm.client.android:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13198016',
    },
    {
      key: 10,
      name: '请求读取剪贴板权限弹窗',
      quickFind: true,
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '@[text="暂不允许"] + [text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/13198020',
    },
  ],
});
