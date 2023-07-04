import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.alibaba.wireless',
  groups: [
    {
      key: 0,
      name: '阿里巴巴-开屏广告',
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: '[id=`com.alibaba.wireless:id/v5_splash_over`]',
    },
  ],
};
