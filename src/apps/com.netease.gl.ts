import { defineAppConfig } from '../types';

export default defineAppConfig({
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
      name: '全屏广告-广告弹窗',
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
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[id="com.netease.gl:id/iv_close"] + [text="开启推送"]',
      snapshotUrls: 'https://i.gkd.li/i/13072071',
    },
  ],
});
