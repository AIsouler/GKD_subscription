import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter', // 根据 https://github.com/gkd-kit/subscription/pull/1180#issuecomment-1767735683 反馈，此处使用 clickCenter 事件。
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12928975',
            'https://i.gkd.li/i/13226636',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.huawei.android.totemweather.composite.MarketCompositeActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/promote_ad_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13218197',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/feedback_negative_flv"] > [text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13259434',
        },
        {
          key: 2,
          activityIds: 'com.huawei.android.totemweather.WeatherMainActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/ad_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13521221',
        },
        {
          key: 3,
          activityIds: 'com.huawei.android.totemweather.WeatherHome',
          matches: '[id="com.huawei.android.totemweather:id/ad_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13787501',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-顶部卡片广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.huawei.android.totemweather.WeatherMainActivity',
          matches: '@ImageView[visibleToUser=true] < [vid="rl_close_pps"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800100',
            'https://i.gkd.li/i/14278462', // 使用visibleToUser=true防止在此页面误触
          ],
        },
      ],
    },
  ],
});
