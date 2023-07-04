import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.netease.cloudmusic',
  groups: [
    {
      key: 0,
      name: '网易云音乐-开屏广告',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: 'TextView[text^=`跳过`][id=`com.netease.cloudmusic:id/skipBtn`]',
    },
  ],
};
