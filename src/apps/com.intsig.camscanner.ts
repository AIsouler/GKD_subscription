import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.intsig.camscanner',
  groups: [
    {
      key: 0,
      name: '扫描全能王-开屏vip提示',
      activityIds: 'com.intsig.camscanner.guide.guidevideo.GuideVideoActivity',
      rules: '[id=`com.intsig.camscanner:id/tv_drop_cnl_close_new`]',
    },
  ],
};
