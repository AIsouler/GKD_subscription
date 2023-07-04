import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.djcity',
  groups: [
    {
      key: 0,
      name: '掌上道聚城-开屏广告',
      activityIds: 'com.tencent.djcity.activities.homepage.PortalActivity',
      rules: '[id=`com.tencent.djcity:id/ad_view_ll_skip`]',
    },
  ],
};
