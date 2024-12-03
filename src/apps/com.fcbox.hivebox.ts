import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fcbox.hivebox',
  name: '丰巢管家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '首页弹窗广告',
          fastQuery: true,
          activityIds: 'com.fcbox.hivebox.business.main.MainActivity',
          matches:
            '[id="com.fcbox.hivebox:id/fl_content_container"] + [id="com.fcbox.hivebox:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13459000',
        },
      ],
    },
  ],
});
