import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.movie',
  name: '猫眼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.sankuai.movie.welcome.Welcome',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[text="点击跳转详情页"] < FrameLayout +(2) [text$="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12649967', // activityId: com.sankuai.movie.welcome.Welcome
        'https://i.gkd.li/import/import/12649911', // activityId: com.miui.home.launcher.Launcher
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.maoyan.android.adx.popupads.d',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[text^="更新"] +(3) LinearLayout > [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12649942', // activityId: com.maoyan.android.adx.popupads.d
        'https://i.gkd.li/import/import/12649938', // activityId: com.miui.home.launcher.Launcher
      ],
    },
  ],
});
