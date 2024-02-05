import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xfani.app',
  name: '稀饭动漫',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.xfani.app.MainActivity',
      rules: 'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13188550',
    },
  ],
});
