import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.huawei.android.totemweather.WeatherHome',
      matchLauncher: true,
      rules: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12928975',
    },
  ],
});
