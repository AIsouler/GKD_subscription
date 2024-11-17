import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/10fa1ebe-c208-4127-a456-48ac91901984',
          snapshotUrls: 'https://i.gkd.li/i/16486491',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/13978978',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: [
            '[id="make.more.r2d2.cellular_z:id/tv_alert_title"][text="发现新版本"]',
            '[id="make.more.r2d2.cellular_z:id/btn_alert_left"][text="取消"]',
          ], //防止误触其它取消按钮
          snapshotUrls: 'https://i.gkd.li/i/13608563',
        },
      ],
    },
  ],
});
