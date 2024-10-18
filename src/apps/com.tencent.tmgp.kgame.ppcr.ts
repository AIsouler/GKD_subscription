import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.tmgp.kgame.ppcr',
  name: '全民泡泡超人',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[id="com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx"]',
          snapshotUrls: 'https://i.gkd.li/i/13276317',
        },
      ],
    },
  ],
});
