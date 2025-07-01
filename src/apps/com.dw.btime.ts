import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dw.btime.MainHomeTabActivity',
          matches: '[id="com.dw.btime:id/iv_overlay_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12889448',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dw.btime.MainHomeTabActivity',
          matches: '[id="com.dw.btime:id/old_baby_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12889450',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.base_library.dialog.DWBaseDialog',
          matches: '[id="com.dw.btime:id/iv_upgrade_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12911011',
        },
      ],
    },
  ],
});
