import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.zzjdev.musicdownload',
  name: '嘀嘀动漫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'info.zzjdev.musicdownload.start.SplashActivity1',

      rules: '[id="info.zzjdev.musicdownload:id/skip_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13187827',
    },
  ],
});
