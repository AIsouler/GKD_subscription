import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.iqiyi.hotchat',
  groups: [
    {
      key: 0,
      name: '爱奇艺热聊-开屏广告',
      activityIds: 'com.iqiyi.hotchat.ui.activity.AdvertisementActivity',
      rules: '[id=`com.iqiyi.hotchat:id/tv_advertisement_lunch_skip`]',
    },
  ],
};
