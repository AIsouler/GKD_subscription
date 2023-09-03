import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.greenpoint.android.mc10086.activity',
  name: `中国移动`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules:
        '[id=`com.greenpoint.android.mc10086.activity:id/video_time_skip`]',
    },
  ],
});
