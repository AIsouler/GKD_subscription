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
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter', // 根据 https://github.com/gkd-kit/subscription/pull/1180#issuecomment-1767735683 反馈，此处使用 clickCenter 事件。
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12928975',
        },
      ],
    },
  ],
});
