import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '[id="com.smzdm.client.android:id/dialog_home_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12695751',
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[id="com.smzdm.client.android:id/tv_version"] +2 [id="com.smzdm.client.android:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13198016',
    },
    {
      key: 10,
      name: '权限提示-请求读取剪贴板权限弹窗',
      quickFind: true,
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '@[text="暂不允许"] + [text="允许"]',
      snapshotUrls: 'https://i.gkd.li/i/13198020',
    },
    {
      key: 3,
      name: '通知提示-请求通知弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'ImageView[id="com.smzdm.client.android:id/ib_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13438810', //com.smzdm.client.android.module.community.module.bask.BaskDetailActivity
        'https://i.gkd.li/i/13626746', //com.smzdm.client.android.module.haojia.detail.HaojiaDetailActivity
      ],
    },
  ],
});
