import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.umetrip.android.msky.app.module.startup.SplashActivity',
      rules: '[id="com.umetrip.android.msky.app:id/tv_jump"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642287',
    },
    {
      enable: false,
      key: 10,
      name: '进入飞行模式-提示弹窗',
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '[id="com.umetrip.android.msky.app:id/imageView"] + [id="com.umetrip.android.msky.app:id/iv_cancel"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12750185',
    },
    {
      key: 11,
      name: '首页右侧悬浮广告',
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '@[id="com.umetrip.android.msky.app:id/iv_close_envelope"] + [id="com.umetrip.android.msky.app:id/media_view_envelope"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12783264',
    },
  ],
});
