import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.movie',
  name: '猫眼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text$="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12649967', // activityId: com.sankuai.movie.welcome.Welcome
        'https://i.gkd.li/import/12649911', // activityId: com.miui.home.launcher.Launcher
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.maoyan.android.adx.popupads.d'],
      rules: '[text^="更新"] +(3) LinearLayout > [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12649942', // activityId: com.maoyan.android.adx.popupads.d
        'https://i.gkd.li/import/12649938', // activityId: com.miui.home.launcher.Launcher
      ],
    },
  ],
});
