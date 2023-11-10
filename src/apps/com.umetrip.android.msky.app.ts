import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.umetrip.android.msky.app.module.startup.SplashActivity',
      rules: '[id="com.umetrip.android.msky.app:id/tv_jump"][text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12642287',
    },
    {
      enable: false,
      key: 8,
      name: '酒店-弹窗广告',
      quickFind: true,
      activityIds: 'com.ume.lib_weex.view.WeexActivity',
      rules:
        'View[desc="立即预订"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]',
      snapshotUrls: 'https://i.gkd.li/import/12909632',
    },
    {
      enable: false,
      key: 9,
      name: '首页-升级提示',
      quickFind: true,
      activityIds: [
        'com.miui.home.launcher.Launcher',
        'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      ],
      rules:
        '@[id="com.umetrip.android.msky.app:id/iv_cancel"] - * > [id="com.umetrip.android.msky.app:id/btn_upgrade"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12838294',
        'https://i.gkd.li/import/12838293',
      ],
    },
    {
      enable: false,
      key: 10,
      name: '进入飞行模式-提示弹窗',
      quickFind: true,
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '[id="com.umetrip.android.msky.app:id/imageView"] + [id="com.umetrip.android.msky.app:id/iv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12750185',
    },
    {
      key: 11,
      name: '首页右侧悬浮广告',
      quickFind: true,
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '@[id="com.umetrip.android.msky.app:id/iv_close_envelope"] + [id="com.umetrip.android.msky.app:id/media_view_envelope"]',
      snapshotUrls: 'https://i.gkd.li/import/12783264',
    },
  ],
});
