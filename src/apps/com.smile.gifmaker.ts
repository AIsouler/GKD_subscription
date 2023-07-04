import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.smile.gifmaker',
  groups: [
    {
      key: 0,
      name: '快手-关闭青少年模式弹窗',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules:
        '@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]',
    },
  ],
};
