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
    {
      key: 1,
      name: `网易云音乐-广告卡片`,
      rules: [
        {
          activityIds: `com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet`,
          matches: `[text="直接关闭"]`,
        },
        {
          activityIds: `com.netease.cloudmusic.activity.MainActivity`,
          matches: `[id="com.netease.cloudmusic:id/adTagClose"]`,
        },
      ],
    },
  ],
};
