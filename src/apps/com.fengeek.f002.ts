import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fengeek.f002',
  name: 'fiil+',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.fengeek.f002.WelcomeActivity'],
      rules: [
        {
          matches: '[id="com.fengeek.f002:id/we_img_skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13068924',
        },
      ],
    },
  ],
});
