import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      resetMatch: 'app',
      rules: ['ImageView[id="com.android.bankabc:id/close"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/import/12472629',
        'https://i.gkd.li/import/13196201',
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.android.bankabc.homepage.UpgradeDialog',
      rules: [
        '[id="com.android.bankabc:id/upgrade_bottom"] > [id="com.android.bankabc:id/negativeTextView"][text="残忍拒绝"]',
      ],
      snapshotUrls: 'https://i.gkd.li/import/import/12685502',
    },
    {
      key: 10,
      name: '切换乡村版弹窗',
      activityIds: 'com.android.bankabc.MainActivity',
      rules: [
        '[id="com.android.bankabc:id/iv_switch"] + [id="com.android.bankabc:id/iv_skip"]',
      ],
      snapshotUrls: 'https://i.gkd.li/import/import/12685764',
    },
  ],
});
