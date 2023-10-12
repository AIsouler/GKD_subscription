import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.gl',
  name: '网易大神',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.netease.gl.ui.activity.welcome.WelcomeActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.netease.gl:id/tv_next_step"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12883227',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.netease.gl.serviceupdate.widget.DialogUpdate',
      rules:
        '@[id="com.netease.gl:id/iv_close"] +2 LinearLayout >n [id="com.netease.gl:id/btn_update"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12883135',
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
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12883277',
        },
      ],
    },
  ],
});
