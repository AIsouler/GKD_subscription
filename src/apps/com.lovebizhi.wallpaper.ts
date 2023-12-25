import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lovebizhi.wallpaper',
  name: '爱壁纸',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.adesk.picasso.view.MainActivity',

      // 来自 #979 的优化建议，反馈会匹配到桌面活动ID

      rules: '[id = "com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12859492',
    },
  ],
});
