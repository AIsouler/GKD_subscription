import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alipay.mobile.quinox.LauncherActivity',
      rules: ['ImageView[id="com.android.bankabc:id/close"]'],
      snapshotUrls:
        'https://gkd-kit.gitee.io/import/38517192/3653218a-e0e0-4a60-8308-dea5fd4179b3',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.android.bankabc.homepage.UpgradeDialog',
      rules: [
        '[id="com.android.bankabc:id/upgrade_bottom"] > [id="com.android.bankabc:id/negativeTextView"][text="残忍拒绝"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12685502',
    },
    {
      key: 10,
      name: '切换乡村版弹窗',
      activityIds: 'com.android.bankabc.MainActivity',
      rules: [
        '[id="com.android.bankabc:id/iv_switch"] + [id="com.android.bankabc:id/iv_skip"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12685764',
    },
  ],
});
