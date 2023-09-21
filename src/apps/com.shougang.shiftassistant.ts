import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shougang.shiftassistant',
  name: '倒班助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.shougang.shiftassistant.ui.activity.SplashActivity'],
      rules: [
        {
          matches:
            '@[text^="跳过"][clickable=true] - FrameLayout >(2) [id="com.byted.pangle:id/tt_splash_ad_logo"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12683266'],
        },
        {
          matches: '@[text^="跳过"] - FrameLayout >(n) [text="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12683289'],
        },
      ],
    },
  ],
});
