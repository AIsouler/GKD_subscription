import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnki.view',
  name: '知网文化',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cnki.view.core.tramp.main.SplashActivity',
      rules: '[id="com.cnki.view:id/tv_advert_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12755696',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.cnki.view.core.navigator.main.HomeActivity',
        'com.cnki.view.core.tramp.main.SplashActivity',
      ],
      rules: '[id="com.cnki.view:id/update_undo"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12755689', // activityId: 'com.cnki.view.core.navigator.main.HomeActivity'
        'https://gkd-kit.songe.li/import/12755700', // activityId: 'com.cnki.view.core.tramp.main.SplashActivity'
      ],
    },
  ],
});
