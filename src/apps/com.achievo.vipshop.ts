import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.achievo.vipshop',
  groups: [
    {
      key: 0,
      name: '唯品会-开屏广告',
      activityIds: 'com.achievo.vipshop.activity.LodingActivity',
      rules: '[id=`com.achievo.vipshop:id/adv_countdown`]',
    },
  ],
};
