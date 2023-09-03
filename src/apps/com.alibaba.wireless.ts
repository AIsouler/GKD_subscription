import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.wireless',
  name: `阿里巴巴`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: '[id=`com.alibaba.wireless:id/v5_splash_over`]',
    },
  ],
});
