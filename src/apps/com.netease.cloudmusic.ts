import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.netease.cloudmusic',
  name: `网易云音乐`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: 'TextView[text^=`跳过`][id=`com.netease.cloudmusic:id/skipBtn`]',
    },
    {
      key: 1,
      name: `广告卡片`,
      rules: [
        {
          activityIds: `com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet`,
          matches: `[text="直接关闭"]`,
          snapshotUrls: [
            `https://gkd-kit.songe.li/import/38517192/fea3449b-d642-4d75-929f-490421cc9080`,
          ],
        },
        {
          activityIds: `com.netease.cloudmusic.activity.MainActivity`,
          matches: `[id="com.netease.cloudmusic:id/adTagClose"]`,
          snapshotUrls: `https://gkd-kit.songe.li/import/38517192/a977b19d-2b3c-43df-ba01-63e7cbbb3908`,
        },
      ],
    },
  ],
};
