import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.sankuai.meituan',
  groups: [
    {
      key: 0,
      name: '美团-开屏广告',
      activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
      rules: 'TextView[id=`com.sankuai.meituan:id/close_btn`][text^=`跳过`]',
    },
  ],
};
