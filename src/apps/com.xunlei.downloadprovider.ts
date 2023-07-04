import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.xunlei.downloadprovider',
  groups: [
    {
      key: 0,
      name: '迅雷-开屏广告',
      activityIds: 'com.xunlei.downloadprovider.launch.LaunchActivity',
      rules: 'TextView[text^=`跳过`]',
    },
  ],
};
