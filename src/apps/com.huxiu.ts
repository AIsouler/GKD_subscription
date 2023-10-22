import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huxiu',
  name: '虎嗅',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.huxiu.ui.activity.HXRegistrationAgreementPrivacyPolicyActivity',
      rules: '[id="com.huxiu:id/tv_skip_ad"]',
      snapshotUrls: 'https://i.gkd.li/import/12776004',
    },
  ],
});
