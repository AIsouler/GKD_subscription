import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.iqiyi.hotchat',
  name: '爱奇艺热聊',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.iqiyi.hotchat.ui.activity.AdvertisementActivity',
      rules: '[id=`com.iqiyi.hotchat:id/tv_advertisement_lunch_skip`]',
    },
  ],
});
