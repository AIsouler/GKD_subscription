import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duowan.kiwi',
  name: `虎牙直播`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.duowan.kiwi.homepage.Homepage',
        'com.duowan.kiwi.adsplash.view.AdSplashActivity',
      ],
      rules: ['[id=`com.duowan.kiwi:id/skip_time`]'],
    },
    {
      key: 1,
      name: '青少年弹窗',
      activityIds: [
        'com.duowan.kiwi.homepage.Homepage',
        'com.miui.home.launcher.Launcher',
      ],
      rules:
        '[id=`com.duowan.kiwi:id/hyui_dialog_button_positive`][text=`我知道了`]',
    },
  ],
});
