import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dianping.v1',
  name: `大众点评`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.dianping.v1.NovaMainActivity',
      rules: '[id=`com.dianping.v1:id/new_skip`]',
    },
  ],
});
