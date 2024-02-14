import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnki.view',
  name: '知网文化',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cnki.view:id/update_undo"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12755689', // activityId: 'com.cnki.view.core.navigator.main.HomeActivity'
        'https://i.gkd.li/import/12755700', // activityId: 'com.cnki.view.core.tramp.main.SplashActivity'
      ],
    },
  ],
});
