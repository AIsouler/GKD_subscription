import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.gl',
  name: '网易大神',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.netease.gl:id/iv_close"] +2 LinearLayout >n [id="com.netease.gl:id/btn_update"]',
      snapshotUrls: 'https://i.gkd.li/i/12883135',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.netease.gl.ui.activity.welcome.WelcomeActivity',
          matches:
            '@[id="com.netease.gl:id/iv_close"] + [id="com.netease.gl:id/iv_cover"]',
          snapshotUrls: 'https://i.gkd.li/i/12883277',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[id="com.netease.gl:id/iv_close"] + [text="开启推送"]',
      snapshotUrls: 'https://i.gkd.li/i/13072071',
    },
  ],
});
