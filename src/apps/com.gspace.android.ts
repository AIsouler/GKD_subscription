import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 1,
      name: '局部广告-主页面上方广告',
      activityIds: ['com.gspace.android.ui.activity.main.MainActivity'],
      rules: [
        {
          key: 0,
          matches: '[id="com.gspace.android:id/hiad_banner_close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/12705339',
        },
        {
          key: 1,
          matches: '@Image < View -2 View > View > View TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12910419', //activityIds: 'com.gspace.android.ui.activity.main.MainActivity',
            'https://i.gkd.li/i/12910935', //activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
          ],
        },
        {
          preKeys: 1,
          matches: '[id="com.byted.pangle:id/tt_item_tv" && text= "不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12910420',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-Youtube播放视频跳过广告',
      // activityIds: 'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      // 我不清楚，上面的activityIds是否与系统有关
      rules: '[id="com.google.android.youtube:id/skip_ad_button"]',
      snapshotUrls: 'https://i.gkd.li/i/12709006',
    },
  ],
});
