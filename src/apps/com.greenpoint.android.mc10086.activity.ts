import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.greenpoint.android.mc10086.activity',
  groups: [
    {
      key: 0,
      name: '中国移动-开屏广告',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules:
        '[id=`com.greenpoint.android.mc10086.activity:id/video_time_skip`]',
    },
  ],
};
