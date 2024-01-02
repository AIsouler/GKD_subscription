import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.gl',
  name: '网易大神',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.netease.gl.serviceupdate.widget.DialogUpdate',
      rules:
        '@[id="com.netease.gl:id/iv_close"] +2 LinearLayout >n [id="com.netease.gl:id/btn_update"]',
      snapshotUrls: 'https://i.gkd.li/import/12883135',
    },
    {
      key: 2,
      name: '应用内广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.netease.gl.ui.activity.welcome.WelcomeActivity',
          matches:
            '@[id="com.netease.gl:id/iv_close"] + [id="com.netease.gl:id/iv_cover"]',
          snapshotUrls: 'https://i.gkd.li/import/12883277',
        },
      ],
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: 'com.netease.gl.compfeed.widget.CommonWebPopupDialog',
      rules: '@[id="com.netease.gl:id/iv_close"] + [text="开启推送"]',
      snapshotUrls: 'https://i.gkd.li/import/13072071',
    },
  ],
});
