import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zeekrlife.mobile',
  name: '极氪',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.zeekrlife.main.MainActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.zeekrlife.mobile:id/main_adv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12846375',
    },
  ],
});
