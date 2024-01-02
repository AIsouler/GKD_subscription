import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnki.view',
  name: '知网文化',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.cnki.view.core.navigator.main.HomeActivity',
        'com.cnki.view.core.tramp.main.SplashActivity',
      ],
      rules: '[id="com.cnki.view:id/update_undo"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12755689', // activityId: 'com.cnki.view.core.navigator.main.HomeActivity'
        'https://i.gkd.li/import/12755700', // activityId: 'com.cnki.view.core.tramp.main.SplashActivity'
      ],
    },
  ],
});
