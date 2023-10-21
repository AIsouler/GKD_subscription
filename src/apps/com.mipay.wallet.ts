import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mipay.wallet',
  name: '小米钱包',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
      matchLauncher: true,
      rules: '[id="com.mipay.wallet:id/skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13059351',
    },
  ],
});
