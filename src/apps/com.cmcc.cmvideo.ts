import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.cmcc.cmvideo',
  groups: [
    {
      key: 0,
      name: '咪咕视频-开屏广告',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id=`com.cmcc.cmvideo:id/skip_button`]',
    },
  ],
};
