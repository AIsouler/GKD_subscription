import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.mt.mtxx.mtxx',
  groups: [
    {
      key: 0,
      name: '美图秀秀-开屏广告',
      activityIds: 'com.meitu.business.ads.core.activity.AdActivity',
      rules: '[text=`跳过广告`]',
    },
  ],
};
