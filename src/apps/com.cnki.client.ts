import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnki.client',
  name: '手机知网',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.cnki.client.core.tramp.SplashActivity'],
      rules: '[id="com.cnki.client:id/tv_advert_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12854474',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.cnki.client.core.navigator.main.HomeActivity'],
      rules: '[id="com.cnki.client:id/update_undo"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12854857',
    },
  ],
});
