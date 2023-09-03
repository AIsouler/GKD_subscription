import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaikan.comic',
  name: `快看`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.kuaikan.comic.ui.AdvertisementActivity',
      rules: '[id=`com.kuaikan.comic:id/skip_button`]',
    },
  ],
});
