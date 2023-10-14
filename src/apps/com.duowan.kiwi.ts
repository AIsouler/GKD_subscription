import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
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
    {
      key: 2,
      name: '直播间悬浮广告',
      activityIds: 'com.duowan.kiwi.liveroom.ChannelPage',
      rules: [
        {
          key: 0,
          matches: '[id="com.duowan.kiwi:id/ad_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12901045',
            'https://gkd-kit.gitee.io/import/12901044',
          ],
        },
      ],
    },
  ],
});
