import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eastmoney.android.berlin',
  name: '东方财富',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.eastmoney.android.berlin.activity.MainActivity'],
      rules: '[id="com.eastmoney.android.berlin:id/btn_skip"][text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/12706071'],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
      ],
      rules:
        '@[id="com.eastmoney.android.berlin:id/tv_update_next_time"] + [id="com.eastmoney.android.berlin:id/tv_update_now"]',
      snapshotUrls: ['https://i.gkd.li/import/12706070'],
    },
    {
      enable: true,
      key: 10,
      name: '请求通知权限提示信息',
      activityIds: [
        'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
      ],
      rules:
        '[id="com.eastmoney.android.berlin:id/push_on_notify_on"] + [id="com.eastmoney.android.berlin:id/push_on_notify_delete"]',
      snapshotUrls: ['https://i.gkd.li/import/12706065'],
    },
  ],
});
