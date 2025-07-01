import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.badmintoncn.bbs',
  name: '中羽在线',
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
          key: 0,
          name: '红包弹窗',
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          matches: '[id="com.badmintoncn.bbs:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13635224',
        },
      ],
    },
  ],
});
