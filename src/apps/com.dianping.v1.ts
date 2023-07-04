import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.dianping.v1',
  groups: [
    {
      key: 0,
      name: '大众点评-开屏广告',
      activityIds: 'com.dianping.v1.NovaMainActivity',
      rules: '[id=`com.dianping.v1:id/new_skip`]',
    },
  ],
};
