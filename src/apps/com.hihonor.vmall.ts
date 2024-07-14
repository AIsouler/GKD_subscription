import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内弹窗广告',
      activityIds: [
        'com.vmall.client.base.fragment.VmallWapActivity',
        'com.vmall.client.splash.fragment.SplashActivity',
      ],
      rules: '[id="com.hihonor.vmall:id/gift_close_iv"]',
      snapshotUrls: 'https://i.gkd.li/i/13060881',
    },
    {
      key: 2,
      fastQuery: true,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text="开启消息通知"] - [id="com.hihonor.vmall:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13959029',
        },
      ],
    },
  ],
});
