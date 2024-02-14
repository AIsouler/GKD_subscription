import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.youpin',
  name: '小米有品',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: [
        'com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity',
      ],
      rules: [
        {
          matches:
            '@Image <2 View[childCount=2] < [id="app"] < [text="有品"] < * < [id="android:id/content"]',
          snapshotUrls: ['https://i.gkd.li/import/12836727'],
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
          matches: '[id="com.xiaomi.youpin:id/ypd_alert_close_image"]',
          snapshotUrls: ['https://i.gkd.li/import/12836775'],
        },
      ],
    },
  ],
});
