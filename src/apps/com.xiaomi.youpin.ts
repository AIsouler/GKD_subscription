import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.youpin',
  name: '小米有品',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds:
            'com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity',
          matches:
            'WebView[text="有品"] > View > View[childCount=2] > Image[index=1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964897',
            'https://i.gkd.li/i/12836727',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示-版本升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.globalpopwindow.popwindow.PopWindowActivity',
          matches: '[id="com.xiaomi.youpin:id/ypd_alert_close_image"]',
          snapshotUrls: 'https://i.gkd.li/i/12836775',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-主页贴片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.youpin.activity.YouPinMainTabActivity',
          matches: '[vid="iv_float_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15879481',
        },
      ],
    },
  ],
});
