import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.himovie',
  name: '华为视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.huawei.video.content.impl.explore.main.activity.MainActivity',
        'com.huawei.himovie.ui.login.SplashScreenActivity',
      ],
      rules: {
        matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
        action: 'clickCenter',
      },
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12814007',
        'https://gkd-kit.gitee.io/import/12819351',
      ],
    },
  ],
});
