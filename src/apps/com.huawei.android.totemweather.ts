import { defineAppConfig } from '../types';

export default defineAppConfig({
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
          quickFind: true,
          matches: [
            '[id="com.huawei.android.totemweather:id/rl_splash_container"]',
            '[text.length<=4][text^="跳过"]', // 无法使用 quickFind
          ],
          action: 'clickCenter', // 根据 https://github.com/gkd-kit/subscription/pull/1180#issuecomment-1767735683 反馈，此处使用 clickCenter 事件。
          snapshotUrls: [
            'https://i.gkd.li/import/12928975',
            'https://i.gkd.li/import/13226636',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '广告卡片',
      quickFind: true,
      activityIds:
        'com.huawei.android.totemweather.composite.MarketCompositeActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.huawei.android.totemweather:id/promote_ad_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13218197',
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '[id="com.huawei.android.totemweather:id/feedback_negative_flv"] > [text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13259434',
        },
      ],
    },
  ],
});
