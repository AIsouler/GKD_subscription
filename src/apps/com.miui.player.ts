import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.miui.player',
  groups: [
    {
      key: 0,
      name: '小米音乐-开屏广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules:
        '@TextView[text$=`跳过`] + TextView[id=`com.miui.player:id/ad_view`]',
    },
  ],
};
