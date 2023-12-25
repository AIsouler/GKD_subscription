import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 0,
      name: '跳过开屏广告',

      activityIds: [
        'com.gspace.android.ui.activity.SplashActivity', // Gspace主应用开屏
        'com.gspace.android.util.ShortcutHandleActivity', // Gspace子应用桌面快捷方式开屏
        'com.gspace.android.ui.activity.VappLoadingActivity', // Gspace子应用开屏
      ],
      rules: [
        {
          matches: '[id="com.gspace.android:id/hiad_skip_text"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12668986',
            'https://i.gkd.li/import/12668985',
            'https://i.gkd.li/import/12703037',
          ],
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12910422',
            'https://i.gkd.li/import/12910417',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '主页面上方广告',

      activityIds: ['com.gspace.android.ui.activity.main.MainActivity'],
      rules: [
        {
          key: 0,
          matches: '[id="com.gspace.android:id/hiad_banner_close_button"]',
          snapshotUrls: 'https://i.gkd.li/import/12705339',
        },
        {
          key: 1,
          matches: '@Image < View -2 View > View > View TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12910419', //activityIds: 'com.gspace.android.ui.activity.main.MainActivity',
            'https://i.gkd.li/import/12910935', //activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
          ],
        },
        {
          preKeys: 1,
          matches: '[id="com.byted.pangle:id/tt_item_tv" && text= "不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12910420',
        },
      ],
    },
    {
      key: 2,
      name: 'Youtube播放视频跳过广告',
      // activityIds: 'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      // 我不清楚，上面的activityIds是否与系统有关
      rules: '[id="com.google.android.youtube:id/skip_ad_button"]',
      snapshotUrls: 'https://i.gkd.li/import/12709006',
    },
  ],
});
