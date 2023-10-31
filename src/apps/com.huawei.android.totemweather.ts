import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter', // 根据 https://github.com/gkd-kit/subscription/pull/1180#issuecomment-1767735683 反馈，此处使用 clickCenter 事件。
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12928975',
        },
      ],
    },
    {
      key: 1,
      name: '广告卡片',
      quickFind: true,
      activityIds:
        'com.huawei.android.totemweather.composite.MarketCompositeActivity',
      rules: '[id="com.huawei.android.totemweather:id/promote_ad_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13218197',
    },
  ],
});
