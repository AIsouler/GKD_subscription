import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      activityIds:
        'com.kugou.android.app.splash.adcontainer.AdContainerActivity',
      rules: '@[desc="跳过"] - FrameLayout >n [text="互动广告"]',
      snapshotUrls: 'https://i.gkd.li/import/12919282',
    },
  ],
});
