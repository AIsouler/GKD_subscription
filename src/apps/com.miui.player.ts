import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules:
        '@TextView[text$=`跳过`] + TextView[id=`com.miui.player:id/ad_view`]',
    },
  ],
});
