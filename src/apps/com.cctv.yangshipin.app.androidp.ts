import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cctv.yangshipin.app.androidp',
  name: '央视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
      rules:
        '[id="com.cctv.yangshipin.app.androidp:id/ad_container"] >n [text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12774838',
    },
  ],
});
