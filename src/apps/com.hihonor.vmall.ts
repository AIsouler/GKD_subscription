import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内广告弹窗',
      activityIds: [
        'com.vmall.client.base.fragment.VmallWapActivity',
        'com.vmall.client.splash.fragment.SplashActivity',
      ],
      rules: '[id="com.hihonor.vmall:id/gift_close_iv"]',
      snapshotUrls: 'https://i.gkd.li/i/13060881',
    },
    {
      key: 2,
      quickFind: true,
      name: '通知提示-关闭开启消息通知弹窗',
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
