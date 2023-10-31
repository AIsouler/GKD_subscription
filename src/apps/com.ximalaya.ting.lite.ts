import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ximalaya.ting.lite',
  name: '喜马拉雅极速版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13197061',
        },
        {
          matches:
            '[id="com.ximalaya.ting.lite:id/host_common_time_countdown_text_view"]',
        },
      ],
    },
    {
      key: 0,
      name: '首页-推荐-卡片广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.lite:id/main_ad_top_home_iv_close"]',
    },
    {
      key: 1,
      name: '广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image < View + View + View > View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13218286',
        },
      ],
    },
  ],
});
