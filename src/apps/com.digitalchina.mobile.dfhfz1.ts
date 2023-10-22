import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.digitalchina.mobile.dfhfz1',
  name: 'e福州',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.systoon.toon.user.login.view.WelcomeActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.digitalchina.mobile.dfhfz1:id/tv_skip"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12846137',
    },
  ],
});
