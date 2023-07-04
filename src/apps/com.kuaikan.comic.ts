import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.kuaikan.comic',
  groups: [
    {
      key: 0,
      name: '快看-开屏广告',
      activityIds: 'com.kuaikan.comic.ui.AdvertisementActivity',
      rules: '[id=`com.kuaikan.comic:id/skip_button`]',
    },
  ],
};
