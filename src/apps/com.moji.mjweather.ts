import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.moji.mjweather',
  name: '墨迹天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          name: '字节SDK',
          quickFind: true,
          activityIds: 'com.moji.mjweather.MainActivity',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13544242',
        },
        {
          name: '情况2',
          quickFind: true,
          activityIds: 'com.moji.mjad.splash.activity.SplashVideoActivity',
          matches: '[text$="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13709986',
        },
      ],
    },
  ],
});
