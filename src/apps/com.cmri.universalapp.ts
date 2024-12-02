import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmri.universalapp',
  name: '移动爱家',
  groups: [
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.SmartMainProxyActivity',
          matches: '[vid="ivCancelDlg"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17872852',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-卡片广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.cmri.universalapp.SmartMainProxyActivity',
      rules: [
        {
          key: 0,
          name: '横幅式',
          matches: '[vid="close_banner"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17872961',
        },
        {
          key: 1,
          name: '卡片信息流式',
          matches: '[vid="iv_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17872961',
        },
      ],
    },
  ],
});
