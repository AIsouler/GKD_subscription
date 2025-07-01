import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 1,
      name: '全屏广告-购买会员弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.youloft.icloser.view.dialog.VipRetainPacketDialog',
          matches: '[id="com.youloft.icloser:id/tv_later_buy"]',
          snapshotUrls: 'https://i.gkd.li/i/13067183',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-右下角悬浮窗小广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.youloft.icloser.activity.MainActivity',
          matches: '[id="com.youloft.icloser:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13164387',
        },
      ],
    },
  ],
});
