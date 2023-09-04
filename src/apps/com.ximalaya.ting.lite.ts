import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ximalaya.ting.lite',
  name: '喜马拉雅极速版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.WelComeActivity',
      rules: [
        '[id="com.ximalaya.ting.lite:id/host_common_time_countdown_text_view"]',
      ],
    },
    {
      key: 0,
      name: '首页-推荐-卡片广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id=\'com.ximalaya.ting.lite:id/main_ad_top_home_iv_close\']',
    },
  ],
});
