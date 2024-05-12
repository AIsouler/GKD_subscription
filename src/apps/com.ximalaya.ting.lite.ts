import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.lite',
  name: '喜马拉雅极速版',
  groups: [
    {
      key: 0,
      name: '局部广告-首页、推荐页-卡片广告',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.lite:id/main_ad_top_home_iv_close"]',
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image < View + View + View > View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13218286',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-小说推荐弹窗',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.lite:id/main_iv_novel_back"]',
      snapshotUrls: 'https://i.gkd.li/i/13229127',
    },
    {
      key: 3,
      name: '全屏广告-支付宝提现弹窗广告',
      desc: '点击右上角圆形x',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.lite:id/main_login_guide_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13256447',
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text="立即开启"] + [id="com.ximalaya.ting.lite:id/host_dialog_cancel_iv"]',
      snapshotUrls: 'https://i.gkd.li/i/13256505',
    },
  ],
});
