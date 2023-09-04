import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
      rules: 'TextView[id=`com.sankuai.meituan:id/close_btn`][text^=`跳过`]',
    },
  ],
});
