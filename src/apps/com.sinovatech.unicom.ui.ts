import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.WelcomeClient',
      rules: '[id="com.sinovatech.unicom.ui:id/welcome_advertise_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12535185',
    },
  ],
});
