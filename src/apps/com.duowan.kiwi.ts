import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.duowan.kiwi',
  groups: [
    {
      key: 0,
      name: '虎牙直播-开屏广告',
      activityIds: [
        'com.duowan.kiwi.homepage.Homepage',
        'com.duowan.kiwi.adsplash.view.AdSplashActivity',
      ],
      rules: ['[id=`com.duowan.kiwi:id/skip_time`]'],
    },
    {
      key: 1,
      name: '虎牙直播-关闭青少年模式弹窗',
      activityIds: [
        'com.duowan.kiwi.homepage.Homepage',
        'com.miui.home.launcher.Launcher',
      ],
      rules:
        '[id=`com.duowan.kiwi:id/hyui_dialog_button_positive`][text=`我知道了`]',
    },
  ],
};
